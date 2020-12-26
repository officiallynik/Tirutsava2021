import React from "react";
import "./ContactUs.css"
import Scrollspy from 'react-scrollspy'
import { MDBContainer,MDBListGroup, MDBListGroupItem, MDBRow, MDBCol } from "mdbreact";



class ContactUs extends React.Component {
constructor(props) {
super(props);
this.state = {
active: 0,
sections: []
};
}

// this.scrollSpyText = React.createRef();
// }

// componentDidMount() {
// let sections = this.scrollSpyText.current.getElementsByTagName("h4");
// this.setState({ sections });
// }

// handleScroll = (e) => {
// const scrollTop = e.target.scrollTop;
// const sections = this.state.sections;
// const lastIndex = sections.length - 1;

// for (let i = 0; i < lastIndex; i++) { if ((scrollTop> sections[i].offsetTop - 20) && (scrollTop < sections[i +
//     1].offsetTop - 20)) { this.setState({ active: i }); } }; if (scrollTop> sections[lastIndex].offsetTop - 20)
//     this.setState({ active: lastIndex });
//     }

render() {
  return (
    <>
      <MDBRow>
        <MDBCol md="3">
          <MDBListGroup  md="3">
          <Scrollspy items={ ['section1', 'section2', 'section3','section4'] } currentClassName="active" style={{width:"30%",padding:'0%',height:'100%',position:'fixed'}}>
            <MDBListGroupItem href="#section1">section1</MDBListGroupItem>
            <MDBListGroupItem href="#section2">section2</MDBListGroupItem>
            <MDBListGroupItem href="#section3">section3</MDBListGroupItem>
            <MDBListGroupItem href="#section4">section4</MDBListGroupItem>
            <MDBListGroupItem href="#section5">section5</MDBListGroupItem>
            <MDBListGroupItem href="#section6">section6</MDBListGroupItem>
            <MDBListGroupItem href="#section7">section7</MDBListGroupItem>
            <MDBListGroupItem href="#section8">section8</MDBListGroupItem>
            </Scrollspy>
          </MDBListGroup>
        </MDBCol>

        <MDBCol>
            
        <div>
            <section  id="section1">
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
            </section>


            <section  id="section2">
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

            </section>

            <section  id="section3">
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

            </section>

            <section  id="section4">
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
            </section>
          </div>
        </MDBCol>
      </MDBRow>
      </>
    
    );
  }
}

export default ContactUs;