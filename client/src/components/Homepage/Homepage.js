import React, { Component } from 'react'
import './Homepage.css'
import Music from './Music.js'
import Games from './Games';
export default class Homepage extends Component {
    render() {
        return (
            <div className="home-whole"> 
                <div className="Auto-swipe">
                    {/*<Music></Music>*/}
                    <Games></Games>

                </div>
            </div>
        )
    }
}
