import React, { Component } from 'react'
import './Hamburger.css'

export default class Hamburger extends Component {

    render() {
        let activepage = this.props.currentpage;
        let classhome='button-bar button-mg';
        let classstats='button-bar button-mg';
        let classmovie='button-bar button-mg';
        let classgallery='button-bar button-mg';

        if(activepage === 'stats'){
            classstats='button-mg activebutton'
        }

        if(activepage === 'home'){
            classhome='button-mg activebutton'
        }

        if(activepage === 'Movie'){
            classmovie='button-mg activebutton'
        }

        if(activepage === 'gallery'){
            classgallery='button-mg activebutton'
        }

        return (
            <div>
                        <div className="Home-button">
                            <div className="button-info button-mg">Home</div>
                            <div className={classhome} onClick={this.props.Handlehomess} ></div>
                            
                        </div>
                        <div className="stats-button">
                            <div className="button-info button-mg">Stats</div>
                            <div className={classstats} onClick={this.props.HandleStatss} ></div>
                            
                        </div>

                        <div className="gallery-button">
                            <div className="button-info button-mg">Gallery</div>
                            <div className={classgallery} onClick={this.props.HandleGallerys}></div>
                            
                        </div>

                        <div className="after-movie-button">
                            <div className="button-info button-mg">After-Movie</div>
                            <div className={classmovie} onClick={this.props.HandleAfterMovies}></div> 
                        </div>
            </div>
        )
    }
}
