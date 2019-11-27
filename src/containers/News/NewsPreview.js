import React, { Component } from 'react';
import RSSParser from 'rss-parser';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import './index.css';

class NewsPreview extends Component {


    render() {
        return (
            <div id='newsPreview'>
                {
                    (!this.props.posts) ?
                        <div></div>
                        :
                        this.props.posts.slice(0, 3).map((post, index) => {

                            let html = post.content;

                            return (
                                <div className='postPreview' key={index}>
                                    <div className='postTitle'>{post.title}</div>
                                    <div className='previewHTML'>{ReactHtmlParser(html)}</div>
                                    <a href={post.link} className='postLink'>view full post</a>
                                </div>
                            )

                        })
                }
            </div>


        )

    }
}

export default NewsPreview;