import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Newgallery.css'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Newgallery extends React.Component {
  state = {
    index: 0,
  };

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;

    return (
      <div className="newgallery">
          <div className="autoplay">
          <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex} className="swipable_box">
          <div className="gallery-img"><img src="newgallery1.jpg"></img></div>
          <div className="gallery-img"><img src="newgallery2.jpg"></img></div>
          <div className="gallery-img"><img src="newgallery3.jpg"></img></div>
        </AutoPlaySwipeableViews>
          </div>
      
        
      </div>
    );
  }
}

export default Newgallery;