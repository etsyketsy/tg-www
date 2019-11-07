import React, { Component, Fragment } from 'react';
import RSSParser from 'rss-parser';


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

    //receives XML doc, but can't parse it
    // componentDidMount() {
    //     let request = new XMLHttpRequest();

    //     request.open('GET', 'https://blog.tgrex.com/rss');
    //     request.send();
    //     request.onload = () => {
    //         // console.log(request.responseText)
    //         let data = JSON.parse(request.responseText)
    //         console.log(data)
    //     }
    // }

    parsePost = (content) => {
        let wrapper = document.createElement("textarea");
        wrapper.innerHTML = content;
        console.log(wrapper)
        return wrapper.textContent
    }

    // *** best so far
    componentDidMount() {
        let parser = new RSSParser();
        parser.parseURL('https://cors-anywhere.herokuapp.com/https://blog.tgrex.com/rss')
            .then(feed => {
                this.setState({ posts: feed.items })
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
               
                
                            return (
                                <div className='post' key={index}>
                                    {/* <h4>{post.title}</h4>
                                    
                                    <a href={post.link}>view post</a> */}
                                    {post.content}
                                </div>
                            )

                        })
                }
            </div>
        )
    }
}

export default News;