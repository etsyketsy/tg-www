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
            // Data check before rendering
            (!this.state.posts) ?
                <div></div>
                :
                <div id='news'>
                    <div className="sectionHeader">News</div>
                    {
                        // Render a snippet version if user is on the homepage
                        // ReactHtmlParser is used to make nested HTML elements work with React without using dangerouslySetInnerHTML
                        (window.location.pathname === '/news') ?
                            this.state.posts.map((post, index) => {
                                return (
                                    <div className='post' key={index}>
                                        <div className='postTitle'>
                                            {post.title}
                                        </div>
                                        <div className='postHTML'>
                                            {ReactHtmlParser(post.content)}
                                        </div>
                                        <a href='https://blog.tgrex.com/' id='blogLink'>
                        <div className='text'>view all posts</div></a>
                                    </div>
                                )
                            })
                            :
                            <NewsPreview posts={this.state.posts} />
                    }

                </div>
        )
    }
}

export default News;