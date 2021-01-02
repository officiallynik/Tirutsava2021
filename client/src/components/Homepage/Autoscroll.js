import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import './Autoscroll.css'
import Music from './Music';
import Games from './Games';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Autoscroll extends React.Component {
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
      <div className="Autoscroll-whole">
          <div className="autoplay">
          <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex} className="swipable_box">
          <div className="swipe-slide"><Music></Music></div>
         
        </AutoPlaySwipeableViews>
          </div>
      
        
      </div>
    );
  }
}

export default Autoscroll;

