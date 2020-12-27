import React, { Component } from 'react'
import Hamburger from './Hamburger'
import './Legacyhome.css'

export default class Legacyhome extends Component {
    render() {
        return (
            <div>
                <div className="legacy-home">
                    <div className="legacy-buttons">
                     <Hamburger currentpage={this.props.currentPage} HandleHomess={this.props.Handlehome} HandleStatss={this.props.HandleStats} HandleGallerys={this.props.Handlegallery} HandleAfterMovies={this.props.HandleAfterMovie}></Hamburger>
                    </div>
                </div>
            </div>
        )
    }
}
