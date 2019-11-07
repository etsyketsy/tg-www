import React, { Component } from 'react';


class News extends Component {
    state = {
        news: ''
    }

    componentDidMount() {
        fetch('https://blog.tgrex.com/rss', {
            method: 'GET',
        })
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => this.setState({ news: data})
        ); 
    }

    render() {
        console.log('trying')
        return (
           <div id='news'>
                {this.state.news}
                </div>
        )
    }
}

export default News;