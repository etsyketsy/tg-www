import React, { Component } from 'react';


class News extends Component {
    state = {
        news: ''
    }

    // componentDidMount() {
    //     fetch('https://blog.tgrex.com/rss', {
    //         method: 'GET',
    //     })
    //     .then(response => response.text())
    //     .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
    //     .then(data => this.setState({ news: data})
    //     ); 
    // }

    componentDidMount() {
        
        
        fetch('https://blog.tgrex.com/rss', {
            method: 'GET',
        })
        .then(response => response.text())
        .then(str => (new window.DOMParser()).parseFromString(str, "text/xml"))
        .then(data => {
            let elements = data.getElementsByTagName('item')
            let dataArray = Array.from(elements)
            console.log(dataArray)
            this.setState({news: dataArray}) 
        })
    }

    render() {
        console.log(this.state)
        return (
           <div id='news'>
                <div>'coming soon'</div>
                {
                    (!this.state.news) ?
                        <div>'coming soon'</div>
                    :
                        this.state.news.map(item => {
                            return (item.innerHTML)
                        })
                }
            </div>
        )
    }
}

export default News;