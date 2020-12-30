import React from "react";
import "./ContactUs.css"
import Scrollspy from 'react-scrollspy'
import { Link, animateScroll as scroll } from "react-scroll";
import { MDBContainer,MDBListGroup, MDBListGroupItem, MDBRow, MDBCol } from "mdbreact";


class ContactUs extends React.Component {



  LinkConfig={
    spy:true,
    activeClass:'active-ContactUs',
    className:'team-name-ContactUs',
    smooth:true,
    offset:-70,
    duration:1000,
  }

render() {
  return (
    <>
      <MDBRow>
        
        <MDBCol md="5" >
          <div className="scroll-spy-ContactUs">

            <h1 className="team-heading-ContactUs">MEET THE TEAM</h1>
            
          <MDBListGroup style={{width:"100%"}}>
          
            

            <Link to="section1" {...this.LinkConfig}>SPONSORSHIP</Link>
            <Link to="section2" {...this.LinkConfig}>MARKETING</Link>
            <Link to="section3" {...this.LinkConfig}>EVENT MANAGEMENT</Link>
            <Link to="section4" {...this.LinkConfig}>CREATIVE</Link>
            <Link to="section5" {...this.LinkConfig}>HOSPITALITY</Link>
            <Link to="section6" {...this.LinkConfig}>CONTENT DEVELOPMENT</Link>
            <Link to="section7" {...this.LinkConfig}>SECURITY</Link>

            {/* <MDBListGroupItem href="#section1" className="team-name-ContactUs">SPONSORSHIP</MDBListGroupItem> */}
            {/* <MDBListGroupItem href="#section2" className="team-name-ContactUs">EVENT MANAGEMENT</MDBListGroupItem>
            <MDBListGroupItem href="#section3" className="team-name-ContactUs">MARKETING</MDBListGroupItem>
            <MDBListGroupItem href="#section4" className="team-name-ContactUs">CREATIVE</MDBListGroupItem>
            <MDBListGroupItem href="#section5" className="team-name-ContactUs">HOSPITALITY</MDBListGroupItem>
            <MDBListGroupItem href="#section6" className="team-name-ContactUs">CONTENT DEVELOPMENT</MDBListGroupItem>
            <MDBListGroupItem href="#section7" className="team-name-ContactUs">SECURITY</MDBListGroupItem> */}
            
           
          </MDBListGroup>
          </div>
        </MDBCol>

        <MDBCol>
            
        <div >
            <div  className="image-div" id="section1">
            <h4>section1</h4>
            <p>
              Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
              enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
              rights whatever. Anim keffiyeh carles cardigan. Velit seitan
              mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
              shorts, williamsburg hoodie minim qui you probably haven't heard
              of them et cardigan trust fund culpa biodiesel wes anderson
              aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
              artisan ullamco consequat.
            </p>
            <p>
              Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
              enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
              rights whatever. Anim keffiyeh carles cardigan. Velit seitan
              mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
              shorts, williamsburg hoodie minim qui you probably haven't heard
              of them et cardigan trust fund culpa biodiesel wes anderson
              aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
              artisan ullamco consequat.
            </p>
            </div>


            <div  className="image-div" id="section2">
            <h4>section2</h4>
            <p>
              Veniam marfa mustache skateboard, adipisicing fugiat velit
              pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero.
              Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed
              cosby sweater food truck, mcsweeney's quis non freegan vinyl.
              Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation
              quis gentrify. Brooklyn adipisicing craft beer vice keytar
              deserunt.
            </p>
            <p>
              Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
              enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
              rights whatever. Anim keffiyeh carles cardigan. Velit seitan
              mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
              shorts, williamsburg hoodie minim qui you probably haven't heard
              of them et cardigan trust fund culpa biodiesel wes anderson
              aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
              artisan ullamco consequat.
            </p>

            </div>

            <div  className="image-div" id="section3">
            <h4 >section3</h4>
            <p>
              Occaecat commodo aliqua delectus. Fap craft beer deserunt
              skateboard ea. Lomo bicycle rights adipisicing banh mi, velit ea
              sunt next level locavore single-origin coffee in magna veniam.
              High life id vinyl, echo park consequat quis aliquip banh mi
              pitchfork. Vero VHS est adipisicing. Consectetur nisi DIY minim
              messenger bag. Cred ex in, sustainable delectus consectetur fanny
              pack iphone.
            </p>
            <p>
              Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
              enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
              rights whatever. Anim keffiyeh carles cardigan. Velit seitan
              mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
              shorts, williamsburg hoodie minim qui you probably haven't heard
              of them et cardigan trust fund culpa biodiesel wes anderson
              aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
              artisan ullamco consequat.
            </p>

            </div>

            <div  className="image-div" id="section4">
            <h4 >section4</h4>
            <p>
              Veniam marfa mustache skateboard, adipisicing fugiat velit
              pitchfork beard. Freegan beard aliqua cupidatat mcsweeney's vero.
              Cupidatat four loko nisi, ea helvetica nulla carles. Tattooed
              cosby sweater food truck, mcsweeney's quis non freegan vinyl.
              Lo-fi wes anderson +1 sartorial. Carles non aesthetic exercitation
              quis gentrify. Brooklyn adipisicing craft beer vice keytar
              deserunt.
            </p>
            <p>
              Ad leggings keytar, brunch id art party dolor labore. Pitchfork yr
              enim lo-fi before they sold out qui. Tumblr farm-to-table bicycle
              rights whatever. Anim keffiyeh carles cardigan. Velit seitan
              mcsweeney's photo booth 3 wolf moon irure. Cosby sweater lomo jean
              shorts, williamsburg hoodie minim qui you probably haven't heard
              of them et cardigan trust fund culpa biodiesel wes anderson
              aesthetic. Nihil tattooed accusamus, cred irony biodiesel keffiyeh
              artisan ullamco consequat.
            </p>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
      <div style={{height:"30vh",width:"100%"}}></div>
      </>
    
    );
  }
}

export default ContactUs;