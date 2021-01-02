import React, { useState, useEffect } from 'react';
import Color from './color';
import './progressBar.css';

const ProgressBar = () => {

    const [card,setCard] = useState(1);
    const [current,setCurrent] = useState(1);

    useEffect(() => {
        setTimeout(() => {
            setCard((card+1)%11);
        }, 100);
    },[card]);


    const allState = [true,true,true];
    setTimeout(() => {
        setCurrent((current+1)%3);
    },1000);

    useEffect(() => {
        setCard(10);
    },[current])

    if(current===0){

        allState[0]=false;
        allState[1]=true;
        allState[2]=true;
    }
    if(current===1){
        allState[0]=true;
        allState[1]=false;
        allState[2]=true;
    }
    if(current===2){
        allState[0]=true;
        allState[1]=true;
        allState[2]=false;
    }


        return ( 
            <React.Fragment>
            <div className="all-bars">
                <div className="div1">
                    <Color percentage={card} state={allState[0]}/>
                </div>
                <div className="div1">
                    <Color percentage={card} state={allState[1]}/>
                </div>
                <div className="div1">
                    <Color percentage={card} state={allState[2]}/>
                </div>
            </div>
        </React.Fragment>
     );
}
 
export default ProgressBar;