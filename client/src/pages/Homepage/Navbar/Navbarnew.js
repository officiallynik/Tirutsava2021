import React, { Component , useState , useEffect} from 'react'
import './Navbarnew.css'


export default function NavbarNew(){
    
var [boolshow,setbool] = useState(false)
var clickedham = () => {
    setbool(!boolshow)
}

var [width, setwidth] = useState(window.innerWidth)
	const handleresize = () => {
		setwidth(window.innerWidth)

	}

	useEffect(() => {
		window.addEventListener('resize', handleresize)
	}, [])

console.log(boolshow,"boolshow")
        return (
            <div className="nav-whole">
                <div className={boolshow ? "animate-ham" :"hamburger-whole"} onClick={clickedham}>
                    <div className="line ln1"></div>
                    <div className="line ln2"></div>
                    <div className="line ln3"></div>
                </div>
                <div className={boolshow ? "animate-drop" : "nav-cont-whole"}>
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