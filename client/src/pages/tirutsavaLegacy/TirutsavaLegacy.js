import React, { Component } from "react";

import Gallery from "./gallery/Gallery";
import YearsBar from "./YearsBar";

import "./TirutsavaLegacy.css";
import Stats from './stats';
import Legacyhome from "./Legacyhome";
import Movieafter from './Movieafter';


class TirutsavaLegacy extends Component {
    state = {
        showStats:false,
        showMovieAfter:false,
        showGallery:false,
        showHome:true,
        currentPage:"home",
        zindexhome:100,
        zindexstats:99,
        zindexmovie:99,
        zindexgallery:99,
        currentindex:100,
        classhome:'showhome',
        classstats:'hidestats',
        classmovie:'hidemovie',
    }

    

    clickedStats = () => {

        if(this.state.currentPage === "home"){
            this.setState({
                showStats:true,
                showHome:false,
                showGallery:false,
                showMovieAfter:false,
                currentPage:"stats",
                zindexstats:this.state.currentindex-1,
                zindexhome:this.state.currentindex,
                currentindex:this.state.zindexstats,
                zindexgallery:this.state.currentindex-2,
                zindexmovie:this.state.currentindex-2,
                classhome:'hometostats',
                classstats:'showstats',
                classmovie:'hidemovie'
                  
            })
        }

        if(this.state.currentPage === "Movie"){
            this.setState({
                showStats:true,
                showHome:false,
                showGallery:false,
                showMovieAfter:false,
                currentPage:"stats",
                zindexstats:this.state.currentindex-1,
                zindexmovie:this.state.currentindex,
                currentindex:this.state.zindexstats,
                zindexgallery:this.state.currentindex-2,
                zindexhome:this.state.currentindex-2,
                classmovie:"movietostats",
                classstats:'showstats',
                classmovie:'hidemovie'  
            })
        }

        if(this.state.currentPage === "gallery"){
            this.setState({
                showStats:true,
                showHome:false,
                showGallery:false,
                showMovieAfter:false,
                currentPage:"stats",
                zindexstats:this.state.currentindex-1,
                zindexgallery:this.state.currentindex,
                currentindex:this.state.zindexstats,
                zindexhome:this.state.currentindex-2,
                zindexmovie:this.state.currentindex-2,  
            })
        }
    
    
    
    }

    clickedHome = () => {
        if(this.state.currentPage === "stats"){
            this.setState({
                showStats:false,
                showHome:true,
                showGallery:false,
                showMovieAfter:false,
                currentPage:"home",
                zindexhome:this.state.currentindex-1,
                zindexstats:this.state.currentindex,
                currentindex:this.state.zindexhome,
                zindexgallery:this.state.currentindex-2,
                zindexmovie:this.state.currentindex-2,
                classstats:"statstohome",
                classhome:"showhome",
                classmovie:'hidemovie'
            })

        }

        if(this.state.currentPage === "gallery"){
            this.setState({
                showStats:false,
                showHome:true,
                showGallery:false,
                showMovieAfter:false,
                currentPage:"home",
                zindexhome:this.state.currentindex-1,
                zindexgallery:this.state.currentindex,
                currentindex:this.state.zindexhome,
                zindexstats:this.state.currentindex-2,
                zindexmovie:this.state.currentindex-2,
            })

        }
        if(this.state.currentPage === "Movie"){
            this.setState({
                showStats:false,
                showHome:true,
                showGallery:false,
                showMovieAfter:false,
                currentPage:"home",
                zindexhome:this.state.currentindex-1,
                zindexmovie:this.state.currentindex,
                currentindex:this.state.zindexhome,
                zindexgallery:this.state.currentindex-2,
                zindexstats:this.state.currentindex-2,
                classmovie:'movietohome',
                classhome:'showhome',
                classstats:'hidestats'
            })

        }
    
    
     
    }

    clickedMovie = () => {
        if(this.state.currentPage === "home"){
            this.setState({
                showStats:false,
                showHome:false,
                showGallery:false,
                showMovieAfter:true,
                currentPage:"Movie",
                zindexmovie:this.state.currentindex-1,
                zindexhome:this.state.currentindex,
                currentindex:this.state.zindexhome,
                zindexgallery:this.state.currentindex-2,
                zindexstats:this.state.currentindex-2,
                classhome:'hometomovie',
                classmovie:'showmovie',
                classstats:'hidestats'
            })
        }

        if(this.state.currentPage === "stats"){
            this.setState({
                showStats:false,
                showHome:false,
                showGallery:false,
                showMovieAfter:true,
                currentPage:"Movie",
                zindexmovie:this.state.currentindex-1,
                zindexstats:this.state.currentindex,
                currentindex:this.state.zindexhome,
                zindexgallery:this.state.currentindex-2,
                zindexhome:this.state.currentindex-2,
                classstats:'statstomovie',
                classmovie:'showmovie',
                classhome:'hidehome'
            })
        }

        if(this.state.currentPage === "gallery"){
            this.setState({
                showStats:false,
                showHome:false,
                showGallery:false,
                showMovieAfter:true,
                currentPage:"Movie",
                zindexmovie:this.state.currentindex-1,
                zindexgallery:this.state.currentindex,
                currentindex:this.state.zindexhome,
                zindexstats:this.state.currentindex-2,
                zindexhome:this.state.currentindex-2,
            })
        }
     
    }

    render() {
        console.log(this.state)
        return(
            <div className="tirutsavaLegacy">

                 <div className={this.state.classhome} style={{zIndex:this.state.zindexhome}}> <Legacyhome currentPage={this.state.currentPage}Handlehome={this.clickedHome} HandleStats={this.clickedStats} HandleGallery={this.clickedGallery} HandleAfterMovie={this.clickedMovie} ></Legacyhome></div>

                {/* Years bar */}
                

                {/* stats of that year */}
                <div className={this.state.classstats} style={{zIndex:this.state.zindexstats}} > <Stats currentPage={this.state.currentPage}Handlehome={this.clickedHome} HandleStats={this.clickedStats} HandleGallery={this.clickedGallery} HandleAfterMovie={this.clickedMovie}></Stats></div> 

                {/* video and content */}
                <div className={this.state.classmovie} style={{zIndex:this.state.zindexmovie}}> <Movieafter currentPage={this.state.currentPage}Handlehome={this.clickedHome} HandleStats={this.clickedStats} HandleGallery={this.clickedGallery} HandleAfterMovie={this.clickedMovie}></Movieafter></div> 

               
                <Gallery />

            </div>
        )
    }
}

export default TirutsavaLegacy;
