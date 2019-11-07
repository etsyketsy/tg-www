import React, { Component } from 'react';
import RSSParser from 'rss-parser';
import { stringLiteral } from '@babel/types';


class News extends Component {
    state = {
        posts: ''
    }

    // // shows html, but processed as string, not DOM elements
    // componentDidMount() {
    //     let news = document.getElementById( "news" );
    //     fetch('https://blog.tgrex.com/rss', {
    //         method: 'GET',
    //     })
    //     .then(response => response.text())
    //     .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    //     .then(data => {
    //         let elements = data.getElementsByTagName('item')
    //         let dataArray = Array.from(elements)
    //         console.log(dataArray)
    //         this.setState({news: dataArray}) 
            
    //     })
    // }

    // receives XML doc, but can't parse it
    // componentDidMount() {
    //     let request = new XMLHttpRequest();

    //     request.open('GET', 'https://blog.tgrex.com/rss');
    //     request.send();
    //     request.onload = () => {
    //         console.log(request.response)
    //         let data = JSON.parse(request.responseText)
    //         console.log(data)
    //     }
    // }

    componentDidMount() {
        let parser = new RSSParser();
        parser.parseURL('https://blog.tgrex.com/rss')
        .then(feed => {
            this.setState({ posts: feed.items})
        })

    }

    render() {
        return (
           <div id='news'>
                <div>'coming soon'</div>
                {
                    (!this.state.posts) ?
                        <div>'coming soon'</div>
                    :
                        
                        this.state.posts.map((post, index) => {
                            console.log(post.content)
                            return (
                                <div className='post' key={index}>
                                    <h4>{post.title}</h4>
                                    <p>{post.contentSnippet}</p>
                                    <a href={post.link}>view post</a>
                                </div>
                            )
                            
                        })
                }
            </div>
        )
    }
}

export default News;