import React,{useState,useEffect} from 'react';

import { Button } from 'react-bootstrap';
import { MDBMask,MDBIcon, MDBView, MDBContainer, MDBRow, MDBCol, MDBBtn } from "mdbreact";
import "./CartItem.css"


const CartItem=({data,onRemoveHandler})=>{
   
   
    

  return (
    
  
 
      
    <MDBContainer fluid className={`root-CartItem`}>
        <MDBRow>
    
        <MDBCol md="4" className="image-CartItem">
        <MDBView waves zoom>
        <img className="img-fluid rounded" src={data.poster_url} alt="poster"/>
              
            </MDBView>
            
        </MDBCol>

      
        <MDBCol md="8" className="details-CartItem rounded">
            <div className="content-CartItem">
                <span className="eventName-CartItem">{data.name}</span>
                <span className="price-CartItem">₹ {data.price}</span>
            </div>
            {/* <div >
                
                <a href={`https://images.unsplash.com/photo-1568890724546-a0ad828fd94d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2302&q=80`} target="_blank" rel="noopener noreferrer">
                <MDBBtn color="amber">Poster</MDBBtn>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer">
                <MDBBtn color="amber">Rules</MDBBtn>
                </a>
            </div>  */}
            
            <MDBContainer fluid className="buttons-CartItem">
                <MDBRow style={{width:"100%"}}>
                  
                  <MDBCol sm="4">
                        <a href={`https://images.unsplash.com/photo-1568890724546-a0ad828fd94d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2302&q=80`} target="_blank" rel="noopener noreferrer">
                        <MDBBtn color="amber">Poster</MDBBtn>
                        </a>
                  </MDBCol>
                  <MDBCol sm="4">
                    <a href="" target="_blank" rel="noopener noreferrer">
                    <MDBBtn color="amber">Rules</MDBBtn>
                    </a>
                  </MDBCol>
                  <MDBCol sm="4">
                      <MDBBtn className="delete-CartItem" color="danger" onClick={onRemoveHandler}>Remove <MDBIcon icon="trash-alt" /></MDBBtn>
                  </MDBCol>
                </MDBRow>
            </MDBContainer>
            
        </MDBCol>
      </MDBRow>
    
    </MDBContainer>
 
  )
}

export default CartItem;