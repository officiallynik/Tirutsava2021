import React, { Component , useState , useEffect} from 'react'
import './Navbarnew.css'
import Homepage from './../Homepage';


export default function NavbarNew(props){
    


var [width, setwidth] = useState(window.innerWidth)
	const handleresize = () => {
		setwidth(window.innerWidth)

	}

	useEffect(() => {
		window.addEventListener('resize', handleresize)
    }, [])
    
        return (
            <div className="nav-whole">
                
                <div className={props.boolshownav ? "animate-drop" : "nav-cont-whole"}>
                    <div className="row animated-row">
                    <div className="col-sm-6 img-col">
                        <div className="img-box"></div>
                    </div>
                    <div className="col-sm-6 cont-col">
                        <div className="cont-list">
                            <div className="list">
                                <div className="heading-no">01.</div>
                                <div className="list-item">Home</div>
                            </div>
                            <div className="list">
                                <div className="heading-no">02.</div>
                                <div className="list-item">About Us</div>
                            </div>
                            <div className="list">
                                <div className="heading-no">03.</div>
                                <div className="list-item">Contact Us</div>
                            </div>
                            <div className="list">
                                <div className="heading-no">04.</div>
                                <div className="list-item">Services</div>
                            </div>
                        </div>
                    </div>
                    </div >
                </div>
                
            </div>
        )    

        }