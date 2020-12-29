import React, { Component } from 'react'
import './Newgallery.css'
import SwipeableViews from 'react-swipeable-views'

export default class Newgallery extends Component {
    render() {
        return (
            <div className="newgallery" >
                <SwipeableViews enableMouseEvents>
                    <div className="gallery-img"> <img  src="./newgallery1.jpg"></img></div>
                    <div className="gallery-img"> <img  src="./newgallery2.jpg"></img></div>
                    <div className="gallery-img"> <img  src="./newgallery3.jpg"></img></div>
                   
                </SwipeableViews>
            </div>
        )
    }
}
