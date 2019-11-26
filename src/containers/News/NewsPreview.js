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
                        this.props.posts.map((post, index) => {

                            let html = post.content;

                            return (
                                <div className='postPreview' key={index}>
                                    <h4 className='postTitle'>{post.title}</h4>
                                    <div>{ReactHtmlParser(html)}</div>
                                    <a href={post.link}>view post</a>

                                </div>
                            )

                        })
                }
            </div>


        )

    }
}

export default NewsPreview;