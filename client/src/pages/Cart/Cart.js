import React,{useEffect,useState} from 'react';
import "./Cart.css"
import CartItem from './CartItem/CartItem';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import { MDBMask,MDBIcon, MDBView, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";


const Cart=()=>{

  const [data,setData]=useState([
    {
      _id:1,
      poster_url:"https://images.unsplash.com/photo-1599658880436-c61792e70672?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      name:"Data Science",
      price:200,
    },
    {
      _id:2,
      poster_url:"https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1300&q=80",
      name:"Photography",
      price:300,
    },
    {
      _id:3,
      poster_url:"https://images.unsplash.com/photo-1581472723648-909f4851d4ae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
      name:"Coding Contest",
      price:200,
    }
  ])

  const calculateCost=()=>{
    let sum=0;
    data.forEach(({price})=>{
      sum+=price;
    })
    return sum;
  }

  const onRemoveHandler=(event)=>{
    const newData=data.filter(({_id})=>{
      return _id!==event._id;
    })
    setData(newData);
  }
  console.log(data)
  return (
    <div style={{height:"100%",paddingTop:"5%"}}>
      <MDBContainer fluid className="root-CartItem fluid">
          <MDBRow>
            <MDBCol sm="4">
                <div>
                  <h3 className="itemCount-Cart">Total Cart Items: <span>{data.length}</span></h3>
                </div>
            </MDBCol>
           
            <MDBCol sm="8">
                  <MDBContainer fluid>
                <MDBRow>
                  <MDBCol sm="8">
                    <h3 className="itemCount-Cart">Total Cost: <span>₹{calculateCost()}</span></h3>
                  </MDBCol>
                  <MDBCol sm="4">
                      <MDBBtn color="amber" className="checkout-Cart"><span>Checkout</span> <MDBIcon size="lg" icon="angle-double-right"/></MDBBtn>
                  </MDBCol>
                </MDBRow>
            </MDBContainer>
            </MDBCol>
          </MDBRow>
      </MDBContainer>

      <ReactCSSTransitionGroup
        transitionName={{leave:"slide-out-left"}}
    
   
        transitionLeave={true}
       
        transitionLeaveTimeout={500}
        
        component="div"
        style={{paddingBottom:"5%"}}
      >
        {
          data.map((event)=>{
            return (<CartItem key={event._id} data={event} onRemoveHandler={()=>{onRemoveHandler(event)}}/> )
          })
        }
      </ReactCSSTransitionGroup>

      <div >
        
      </div>
    </div>
  )
}

export default Cart;