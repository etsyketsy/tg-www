import React, { Component } from 'react';
import ReactHtmlParser from 'react-html-parser';
import RSSParser from 'rss-parser';
import './index.css';

class NewsPreview extends Component {
    state = {
        posts: null
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
            (!this.state.posts) ?
            <p id='loading'>loading...</p>
                :
                <div id='newsPreview' className='preview'>
                    <div className="sectionHeader">News</div>
                    {

                        this.state.posts.slice(0, 3).map((post, index) => {

                            let html = post.content;

                            return (

                                <div className='postPreview' key={index}>
                                    <div className='postTitle'>
                                        {post.title}
                                    </div>
                                    <div className='previewHTML'>
                                        {ReactHtmlParser(html)}
                                    </div>
                                    <a href={post.link} className='postLink' target="_blank" rel="noopener noreferrer">view full post</a>
                                </div>
                            )

                        })
                    }
                </div>


        )

    }
}

export default NewsPreview;