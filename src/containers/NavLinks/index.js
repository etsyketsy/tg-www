import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavLinks extends Component {
    
    state =  {
        links:[
            {id: 'HOME', route: '/home'}, 
            {id: 'NEWS', route: '/news'},
            {id: 'RELEASES', route:'/releases'},
            {id: 'ARTISTS', route: '/artists'},
            {id: 'AUDIO', route: 'https://music.tgrex.com', target: '_blank'},
            {id: 'ABOUT', route: '/about'},
            {id: 'STORE', route: 'https://deathwishinc.com/collections/twelve-gauge', target: '_blank'}
        ],
        active: ''
    }

    clickHandler(id) {
        this.setState({
            active: id
        });
    }

    render(){
        return (
            <div id="navLinks">
                {this.state.links.map(link => {
                    return (
                        <Link
                        onClick={this.clickHandler(link.id)}
                        className={this.state.active === link.id 
                            ? 'active' : 'inactive'
                        }
                        to={link.route}
                        replace
                    >
                        {link.id}
                    </Link>
                    )

                })

                }
            </div>
        )

    }

}

export default NavLinks;