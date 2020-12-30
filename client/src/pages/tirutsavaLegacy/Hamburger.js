import React, { Component } from 'react'
import './Hamburger.css'

export default class Hamburger extends Component {

    render() {
        let activepage = this.props.currentpage;
        let class2020=`button-bar button-mg ${this.props.currentMode}`;
        let class2019=`button-bar button-mg ${this.props.currentMode}`;
        let class2018=`button-bar button-mg ${this.props.currentMode}`;
        let class2017=`button-bar button-mg ${this.props.currentMode}`;
        let class2016=`button-bar button-mg ${this.props.currentMode}`;

        if(activepage === '2020'){
            class2020=`button-mg activebutton ${this.props.currentMode}`;
        }

        if(activepage === '2019'){
            class2019=`button-mg activebutton ${this.props.currentMode}`;
        }

        if(activepage === '2018'){
            class2018=`button-mg activebutton ${this.props.currentMode}`;
        }

        if(activepage === '2017'){
            class2017=`button-mg activebutton ${this.props.currentMode}`;
        }

        if(activepage === '2016'){
            class2016=`button-mg activebutton ${this.props.currentMode}`;
        }

        return (
            <div>
                <div className="hamburger-whole">
                        <div className="button-2020">
                            <div className={`button-info button-mg ${this.props.currentMode}`}>2020</div>
                            <div className={class2020} onMouseOver={this.props.Handle2020} ></div>
                            
                        </div>
                        <div className="button-2019">
                            <div className={`button-info button-mg ${this.props.currentMode}`}>2019</div>
                            <div className={class2019} onMouseOver={this.props.Handle2019} ></div>
                            
                        </div>

                        <div className="button-2018">
                            <div className={`button-info button-mg ${this.props.currentMode}`}>2018</div>
                            <div className={class2018} onMouseOver={this.props.Handle2018}></div>
                            
                        </div>

                        <div className="button-2017">
                            <div className={`button-info button-mg ${this.props.currentMode}`}>2017</div>
                            <div className={class2017} onMouseOver={this.props.Handle2017}></div> 
                        </div>

                        <div className="button-2016">
                            <div className={`button-info button-mg ${this.props.currentMode}`}>2016</div>
                            <div className={class2016} onMouseOver={this.props.Handle2016}></div> 
                        </div>
</div>
            </div>
        )
    }
}
