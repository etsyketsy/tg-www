import React, { Component } from 'react';
import RSSParser from 'rss-parser';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './index.css';
import NewsPreview from './NewsPreview';
import * as feed from './feed.rss';

class News extends Component {
    state = {
        posts: ''
    }

    componentDidMount() {
        let parser = new RSSParser();

        parser.parseURL('https://cors-anywhere.herokuapp.com/http://blog.tgrex.com/rss')
            .then(feed => {
                console.log('rssuccess')
                this.setState({ posts: feed.items })
            })
            .catch((error) => {
                console.log(error)
            });
    }

    render() {
        return (
            (!this.state.posts) ?
                <div></div>
                :
                <div id='news'>
                    <div className="sectionHeader">News</div>
                    {

                        (window.location.pathname === '/news') ?

                            this.state.posts.map((post, index) => {

                                let html = post.content;

                                return (
                                    <div className='post' key={index}>
                                        <div className='postTitle'>{post.title}</div>
                                        <div className='postHTML'>{ReactHtmlParser(html)}
                                        </div>
                                    </div>
                                )

                            })
                            :
                            <NewsPreview posts={this.state.posts} />
                    }
                    <a href='https://blog.tgrex.com/' id='blogLink'>
                        <div className='text'>view all posts</div></a>
                </div>
        )
    }
}

export default News;