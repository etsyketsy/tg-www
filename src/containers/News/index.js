import React, { Component } from 'react';
import RSSParser from 'rss-parser';
import ReactHtmlParser from 'react-html-parser';
import './index.css';

class News extends Component {
    state = {
        posts: ''
    }

    componentDidMount() {
        let parser = new RSSParser();

        parser.parseURL('https://cors-anywhere.herokuapp.com/http://blog.tgrex.com/rss')
            .then(feed => {
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
                <div id='news' className='content'>
                    <div className="sectionHeader">News</div>
                    {
                        // ReactHtmlParser is used to make nested HTML elements work with React without using dangerouslySetInnerHTML

                        this.state.posts.map((post, index) => {
                            return (
                                <div className='post' key={index}>
                                    <div className='postTitle'>
                                        {post.title}
                                    </div>
                                    <div className='postHTML'>
                                        {ReactHtmlParser(post.content)}
                                    </div>

                                </div>
                            )
                        })

                    }
                      <a href='https://blog.tgrex.com/'
                                        id='blogLink' target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <div className='text'>
                                            view all posts
                                            </div>
                                    </a>
                </div>
        )
    }
}

export default News;