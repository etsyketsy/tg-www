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

    parsePost = (content, index) => {
        // let wrapper = document.createElement('div');
        // wrapper.innerHTML = content;
        // wrapper.id = index;



        // let els = wrapper.getElementsByTagName('*');
        // let divs = [''];
        // console.log(els)

        // for (let i = 0; i < els.length; i++) {
        //     divs.push(els[i])
        // }

        // // console.log(divs)
        // divs.forEach(element => {
        //     let parent = element.parentNode
        //     let section = document.createElement(`${element.tagName}`)
        //     section.innerHTML = `${element.innerHTML}`

        // })

        let html = content;
        return <div></div>
    }

    // *** best so far
    componentDidMount() {
        let parser = new RSSParser();

        parser.parseURL('https://cors-anywhere.herokuapp.com/http://blog.tgrex.com/rss')
            .then(feed => {
                console.log('rssuccess')
                this.setState({ posts: feed.items })
            })
            .catch((error) => {
                console.log(error)
                console.log('going with existing file')
                // this.setState({
                //     posts: feed.items
                // })
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
                                        <div className='postHTML'>{ReactHtmlParser(html)}</div>
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