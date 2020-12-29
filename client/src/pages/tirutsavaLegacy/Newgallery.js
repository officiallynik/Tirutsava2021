import React, { Component } from 'react'
import './Newgallery.css'
import SwipeableViews from 'react-swipeable-views';
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

const images = [
    {
    original: "https://picsum.photos/id/1018/1000/600/"
    },
    {
    original: "https://picsum.photos/id/1015/1000/600/"
    },
    {
    original: "https://picsum.photos/id/1019/1000/600/"
    },
];

export default class Newgallery extends Component {
    render() {
        return (
            <div className="newgallery" >
<<<<<<< HEAD
                <SwipeableViews enableMouseEvents>
                    <div className="gallery-img"> <img  src="./newgallery1.jpg"></img></div>
                    <div className="gallery-img"> <img  src="./newgallery2.jpg"></img></div>
                    <div className="gallery-img"> <img  src="./newgallery3.jpg"></img></div>
                   
                </SwipeableViews>
=======
                <ImageGallery items={images} showFullscreenButton={false} showThumbnails={false} />
                {/* <SwipeableViews enableMouseEvents>
                    <img className="gallery-img" src="./newgallery1.jpg"></img>
                    <img className="gallery-img" src="./newgallery2.jpg"></img>
                    <img className="gallery-img" src="./newgallery3.jpg"></img>
                </SwipeableViews> */}
>>>>>>> f604dca9feb4fd729fa53400f839665d8780f845
            </div>
        )
    }
}
