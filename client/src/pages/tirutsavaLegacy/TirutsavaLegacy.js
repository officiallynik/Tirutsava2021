import React, { Component } from "react";
import "./TirutsavaLegacy.css";
import Hamburger from './Hamburger';
import Year2017 from './Year2017';
import Year2016 from './Year2016';
import Year2020 from './Year2020';
import Year2019 from './Year2019';
import Year2018 from './Year2018';
import SwipeableViews from 'react-swipeable-views';
import Year2020mobile from './newmobileview/Year2020mobile';
import Year2019mobile from './newmobileview/Year2019mobile';
import Year2018mobile from './newmobileview/Year2018mobile';
import Year2017mobile from './newmobileview/Year2017mobile';
import Year2016mobile from './newmobileview/Year2016mobile';


class TirutsavaLegacy extends Component {
    state = {
        currentPage:"2020",
        index:[
            
            {
            name:'zindex2020',
            values:100,
        },
            {
            name:'zindex2019',
            values:99,
        },
            {
            name:'zindex2018',
            values:99,
        },
            {
            name:'zindex2017',
            values:99,
        },
            {
            name:'zindex2016',
            values:99,
        },
        
    ],
        class2020:'show2020',
        class2019:'hide',
        class2018:'hide',
        class2017:'hide',
        class2016:'hide',
        currentindex:100,
        currentMode: ((new Date()).getHours() < 18 &&
                      (new Date()).getHours() >= 6) ? 
                      'day-mode' : 
                      'night-mode',
    }

   

    clicked2019 = () => {
        var currentPage = this.state.currentPage;
        var indexarray = [...this.state.index];
        var changeindex="zindex"+ currentPage;
        var changeclass="class"+currentPage
        var currentindexvalue;
       

        indexarray.map( (keyindex,value) => 
          {  
            if((keyindex.name)===changeindex || (keyindex.name)==='zindex2019'){

            if((keyindex.name)===changeindex){
                keyindex.values=this.state.currentindex+1;
            }
           
            if((keyindex.name)==="zindex2019"){
                keyindex.values=this.state.currentindex;
                currentindexvalue=this.state.currentindex
            }
        }

        else{
            keyindex.values=this.state.currentindex-2
        }
            
        }
        
            );

            if(this.state.currentPage==='2020'){
            this.setState({
                index:indexarray,
                currentindex:currentindexvalue,
                currentPage:'2019',
                class2020:'hide2020',
                class2019:'show2019',
                class2018:'hide',
                class2017:'hide',
                class2016:'hide',
                
            })
            console.log("2020-2019",this.state)
        }
            if(this.state.currentPage==='2018'){
            this.setState({
                index:indexarray,
                currentindex:currentindexvalue,
                currentPage:'2019',
                class2020:'hide',
                class2019:'show2019',
                class2018:'hide2018',
                class2017:'hide',
                class2016:'hide',
                
            })
        }
            if(this.state.currentPage==='2017'){
            this.setState({
                index:indexarray,
                currentindex:currentindexvalue,
                currentPage:'2019',
                class2020:'hide',
                class2019:'show2019',
                class2018:'hide',
                class2017:'hide2017',
                class2016:'hide',
                
            })
        }
            if(this.state.currentPage==='2016'){
            this.setState({
                index:indexarray,
                currentindex:currentindexvalue,
                currentPage:'2019',
                class2020:'hide',
                class2019:'show2019',
                class2018:'hide',
                class2017:'hide',
                class2016:'hide2016',
                
            })
        }
            
    
    }

    clicked2020 = () => {
        var currentPage = this.state.currentPage;
        var indexarray = [...this.state.index];
        var changeindex="zindex"+ currentPage;
        var currentindexvalue;
        console.log("changeindex",changeindex)

        indexarray.map( (keyindex,value) => 
          {  
            if((keyindex.name)===changeindex || (keyindex.name)==='zindex2020'){

            if((keyindex.name)===changeindex){
                keyindex.values=this.state.currentindex+1;
            }
           
            if((keyindex.name)==="zindex2020"){
                keyindex.values=this.state.currentindex;
                currentindexvalue=this.state.currentindex
            }
        }

        else{
            keyindex.values=this.state.currentindex-2
        }
            
        }
        
            );

            this.setState({
                index:indexarray,
                currentindex:currentindexvalue,
                currentPage:'2020'
            })

            if(this.state.currentPage==='2016'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2020',
                    class2020:'show2020',
                    class2019:'hide',
                    class2018:'hide',
                    class2017:'hide',
                    class2016:'hide2016',
                    
                })
            }

            if(this.state.currentPage==='2019'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2020',
                    class2020:'show2020',
                    class2019:'hide2019',
                    class2018:'hide',
                    class2017:'hide',
                    class2016:'hide',
                    
                })
            }

            if(this.state.currentPage==='2018'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2020',
                    class2020:'show2020',
                    class2019:'hide',
                    class2018:'hide2018',
                    class2017:'hide',
                    class2016:'hide',
                    
                })
            }

            if(this.state.currentPage==='2017'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'22020',
                    class2020:'show2020',
                    class2019:'hide',
                    class2018:'hide',
                    class2017:'hide2017',
                    class2016:'hide',
                    
                })
            }

            console.log("newindex",indexarray)
    
     
    }

    clicked2018 = () => {
        var currentPage = this.state.currentPage;
        var indexarray = [...this.state.index];
        var changeindex="zindex"+ currentPage;
        var currentindexvalue;
        console.log("changeindex",changeindex)

        indexarray.map( (keyindex,value) => 
          {  
            if((keyindex.name)===changeindex || (keyindex.name)==='zindex2018'){

            if((keyindex.name)===changeindex){
                keyindex.values=this.state.currentindex+1;
            }
           
            if((keyindex.name)==="zindex2018"){
                keyindex.values=this.state.currentindex;
                currentindexvalue=this.state.currentindex
            }
        }

        else{
            keyindex.values=this.state.currentindex-2
        }
            
        }
        
            );

            this.setState({
                index:indexarray,
                currentindex:currentindexvalue,
                currentPage:'2018'
            })

            if(this.state.currentPage==='2017'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2018',
                    class2020:'hide',
                    class2019:'hide',
                    class2018:'show2018',
                    class2017:'hide2017',
                    class2016:'hide',
                    
                })
            }

            if(this.state.currentPage==='2019'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2018',
                    class2020:'hide',
                    class2019:'hide2019',
                    class2018:'show2018',
                    class2017:'hide',
                    class2016:'hide',
                    
                })
            }

            if(this.state.currentPage==='2020'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2018',
                    class2020:'hide2020',
                    class2019:'hide',
                    class2018:'show2018',
                    class2017:'hide',
                    class2016:'hide',
                    
                })
            }

            if(this.state.currentPage==='2016'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2018',
                    class2020:'hide',
                    class2019:'hide',
                    class2018:'show2018',
                    class2017:'hide',
                    class2016:'hide2016',
                    
                })
            }

            console.log("newindex",indexarray)
    
    }
    clicked2017 = () => {
        var currentPage = this.state.currentPage;
        var indexarray = [...this.state.index];
        var changeindex="zindex"+ currentPage;
        var currentindexvalue;
        console.log("changeindex",changeindex)

        indexarray.map( (keyindex,value) => 
          {  
            if((keyindex.name)===changeindex || (keyindex.name)==='zindex2017'){

            if((keyindex.name)===changeindex){
                keyindex.values=this.state.currentindex+1;
            }
           
            if((keyindex.name)==="zindex2017"){
                keyindex.values=this.state.currentindex;
                currentindexvalue=this.state.currentindex
            }
        }

        else{
            keyindex.values=this.state.currentindex-2
        }
            
        }
        
            );

            this.setState({
                index:indexarray,
                currentindex:currentindexvalue,
                currentPage:'2017'
            })

            if(this.state.currentPage==='2016'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2017',
                    class2020:'hide',
                    class2019:'hide',
                    class2018:'hide',
                    class2017:'show2017',
                    class2016:'hide2016',
                    
                })
            }

            if(this.state.currentPage==='2018'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2017',
                    class2020:'hide',
                    class2019:'hide',
                    class2018:'hide2018',
                    class2017:'show2017',
                    class2016:'hide',
                    
                })
            }

            if(this.state.currentPage==='2019'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2017',
                    class2020:'hide',
                    class2019:'hide2019',
                    class2018:'hide',
                    class2017:'show2017',
                    class2016:'hide',
                    
                })
            }

            if(this.state.currentPage==='2020'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2017',
                    class2020:'hide2020',
                    class2019:'hide',
                    class2018:'hide',
                    class2017:'show2017',
                    class2016:'hide',
                    
                })
            }

            console.log("newindex",indexarray)
    
    }
    clicked2016 = () => {
        var currentPage = this.state.currentPage;
        var indexarray = [...this.state.index];
        var changeindex="zindex"+ currentPage;
        var currentindexvalue;
        console.log("changeindex",changeindex)
        indexarray.map( (keyindex,value) => 
          {  
            if((keyindex.name)===changeindex || (keyindex.name)==='zindex2016'){

            if((keyindex.name)===changeindex){
                keyindex.values=this.state.currentindex+1;
            }
           
            if((keyindex.name)==="zindex2016"){
                keyindex.values=this.state.currentindex;
                currentindexvalue=this.state.currentindex
            }
        }

        else{
            keyindex.values=this.state.currentindex-2
        }
            
        }
        
            );

            this.setState({
                index:indexarray,
                currentindex:currentindexvalue,
                currentPage:'2016'
            })

            if(this.state.currentPage==='2020'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2016',
                    class2020:'hide2020',
                    class2019:'hide',
                    class2018:'hide',
                    class2017:'hide',
                    class2016:'show2016',
                    
                })
            }

            if(this.state.currentPage==='2019'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2016',
                    class2020:'hide',
                    class2019:'hide2019',
                    class2018:'hide',
                    class2017:'hide',
                    class2016:'show2016',
                    
                })
            }

            if(this.state.currentPage==='2018'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2016',
                    class2020:'hide',
                    class2019:'hide',
                    class2018:'hide2018',
                    class2017:'hide',
                    class2016:'show2016',
                    
                })
            }

            if(this.state.currentPage==='2017'){
                this.setState({
                    index:indexarray,
                    currentindex:currentindexvalue,
                    currentPage:'2016',
                    class2020:'hide',
                    class2019:'hide',
                    class2018:'hide',
                    class2017:'hide2017',
                    class2016:'show2016',
                    
                })
            }

            console.log("newindex",indexarray)
    
    }

    // Setting day and night mode


    render() {
        var value2020 ;
        var value2019;
        var value2018;
        var value2017;
        var value2016;
        this.state.index.map( (keyindex,value) => 
        {  
          

          if((keyindex.name)==="zindex2020"){
              value2020=keyindex.values
          }
         
          if((keyindex.name)==="zindex2019"){
             value2019=keyindex.values
          }

          if((keyindex.name)==="zindex2018"){
            value2018=keyindex.values
          }
         
          if((keyindex.name)==="zindex2017"){
             value2017=keyindex.values
          }

          if((keyindex.name)==="zindex2016"){
            value2016=keyindex.values
          }
      }

      
          );

         
        console.log("state",this.state);

     
        return(            

            <div className={`tirutsavaLegacy ${this.state.currentMode}`}>
                <div className="legacy-90">
                    <div className="Large-width-view">
                        <div className={this.state.class2020} style={{zIndex:value2020}}> <Year2020 currentMode={this.state.currentMode}></Year2020></div>

                {/* Years bar */}


                {/* stats of that year */}
                        <div className={this.state.class2019} style={{zIndex:value2019}} > <Year2019 currentMode={this.state.currentMode}></Year2019></div> 

                {/* video and content */}
                        <div className={this.state.class2018} style={{zIndex:value2018}}> <Year2018 currentMode={this.state.currentMode}></Year2018></div> 
                        <div className={this.state.class2017} style={{zIndex:value2017}}> <Year2017 currentMode={this.state.currentMode}></Year2017></div> 
                        <div className={this.state.class2016} style={{zIndex:value2016}}> <Year2016 currentMode={this.state.currentMode}></Year2016></div> 
                </div>

                <div className="mobile-view">
                    <SwipeableViews enableMouseEvents>
                        <Year2020mobile currentMode={this.state.currentMode}></Year2020mobile>
                        <Year2019mobile currentMode={this.state.currentMode}></Year2019mobile>
                        <Year2018mobile currentMode={this.state.currentMode}></Year2018mobile>
                        <Year2017mobile currentMode={this.state.currentMode}></Year2017mobile>
                        <Year2016mobile currentMode={this.state.currentMode}></Year2016mobile>
                    </SwipeableViews>
                </div>

                 
             </div>
             <div className={`legacy-10 ${this.state.currentMode}`}><Hamburger currentpage={this.state.currentPage} Handle2020={this.clicked2020}  Handle2019={this.clicked2019}  Handle2018={this.clicked2018}   Handle2017={this.clicked2017}  Handle2016={this.clicked2016} currentMode={this.state.currentMode}></Hamburger></div> 
            </div>
        )
    }
}

export default TirutsavaLegacy;
