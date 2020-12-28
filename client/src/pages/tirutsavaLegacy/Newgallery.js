import React, { Component } from 'react'
import './Newgallery.css'
import SwipeableViews from 'react-swipeable-views'

export default class Newgallery extends Component {
    render() {
        return (
            <div className="newgallery" >
                <SwipeableViews enableMouseEvents>
                    <img className="gallery-img" src="./newgallery1.jpg"></img>
                    <img className="gallery-img" src="./newgallery2.jpg"></img>
                    <img className="gallery-img" src="./newgallery3.jpg"></img>
                </SwipeableViews>
            </div>
        )
    }
}
