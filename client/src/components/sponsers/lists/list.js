import React from "react";
import "./list.css";
import image1 from './image1.webp';
import { Parallax } from 'react-parallax';


export default function List() {
  const sap = {
    margin: "30px 0 20px 0",
    textTransform: "none",
    color: "gold",
    fontWeight: "400",
    letterSpacing: "1px",
    lineHeight: "1.5"
  };
  return (
    <div>
      <section id="team" className="team content-section">
        <div className="container-fuild">
          <div className="row text-center">
            <div className="col-md-12">
            <Parallax bgImage={image1} strength={700} className="image1">
              <div className="header-texts">
                <h2 className="sponser-heading">Our Sponsers</h2>
                <h3 className="caption gray sponser-head">
                  Meet the Sponsers who make our event awesome
                </h3>
              </div>
            </Parallax>
            </div>
            <div className="container-fluid">
              <div className="gold-wrapper col-md-12">
              <div className="row gold-space-around">
                <div className="col-md-12 gold-head">
                  <div className="gold-coin"><div className="gold-text align-middle">Gold</div></div>
                </div>
                
                <div className="col-md-4 gold-member">
                    <div
                      className="team-member"
                      style={{
                        backgroundSize: "cover"
                      }}
                    >
                      <figure className="image-box-gold">
                        <div>
                          <img
                          src="http://tirutsava.com/sp_logo/amara_raja.png"
                          alt=""
                          className="img-responsive"
                          style={{ height: "250px" }}
                        />
                        </div>
                        <figcaption>
                          <br />
                          <br />
                          <ul>
                            <li>
                              <a href="!#">
                                <i className="fa fa-facebook fa-2x"></i>
                              </a>
                            </li>
                            <li>
                              <a href="!#">
                                <i className="fa fa-twitter fa-2x"></i>
                              </a>
                            </li>
                            <li>
                              <a href="!#">
                                <i className="fa fa-linkedin fa-2x"></i>
                              </a>
                            </li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 style={sap} className="sponsers-name">Amara Raja</h4>
                    </div>
                  </div>
                  <div className="col-md-4 gold-member">
                    <div
                      className="team-member"
                      style={{
                        backgroundSize: "cover"
                      }}
                    >
                      <figure className="image-box-gold">
                        <img
                          src="http://tirutsava.com/sp_logo/sbi.png"
                          alt=""
                          className="img-responsive"
                          style={{ height: "250px" }}
                        />
                        <figcaption>
                          <br />
                          <br />
                          <ul>
                            <li>
                              <a href="!#">
                                <i className="fa fa-facebook fa-2x"></i>
                              </a>
                            </li>
                            <li>
                              <a href="!#">
                                <i className="fa fa-twitter fa-2x"></i>
                              </a>
                            </li>
                            <li>
                              <a href="!#">
                                <i className="fa fa-linkedin fa-2x"></i>
                              </a>
                            </li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 style={sap}>SBI</h4>
                      
                    </div>
                  </div>
                  <div className="col-md-4 gold-member">
                    <div
                      className="team-member"
                      style={{ backgroundSize: "cover" }}
                    >
                      <figure className="image-box-gold">
                        <img
                          src="http://tirutsava.com/sp_logo/canara_bank.png"
                          alt=""
                          className="img-responsive"
                          style={{ height: "250px" }}
                        />
                        <figcaption>
                          <br />
                          <ul>
                            <li>
                              <a href="!#">
                                <i className="fa fa-facebook fa-2x"></i>
                              </a>
                            </li>
                            <li>
                              <a href="!#">
                                <i className="fa fa-twitter fa-2x"></i>
                              </a>
                            </li>
                            <li>
                              <a href="!#">
                                <i className="fa fa-linkedin fa-2x"></i>
                              </a>
                            </li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 style={sap}>Canara Bank</h4>
                      
                    </div>
                  </div>
                  <div className="col-md-4 gold-member">
                    <div
                      className="team-member"
                      style={{ backgroundSize: "cover" }}
                    >
                      <figure className="image-box-silver">
                        <img
                          src="http://tirutsava.com/sp_logo/axis_bank.png"
                          alt=""
                          className="img-responsive"
                          style={{ height: "250px" }}
                        />
                        <figcaption>
                          <br />
                          <ul>
                            <li>
                              <a href="!#">
                                <i className="fa fa-facebook fa-2x"></i>
                              </a>
                            </li>
                            <li>
                              <a href="!#">
                                <i className="fa fa-twitter fa-2x"></i>
                              </a>
                            </li>
                            <li>
                              <a href="!#">
                                <i className="fa fa-linkedin fa-2x"></i>
                              </a>
                            </li>
                          </ul>
                        </figcaption>
                      </figure>
                      <h4 style={sap}>Axis Bank</h4>
                      
                    </div>
                  </div>
                </div>
              </div>
              {/* NEW ROW */}
              <div
                className="row"
                style={{
                  justifyContent: "center"
                }}
              >
                {/* 1 */}
                <div className="row silver-wrapper col-md-12">
                <div className="col-md-12 silver-head">
                <div className="silver-coin"><div className="silver-text align-middle">Silver</div></div>
                </div>
                <div className="col-md-4 silver-member">
                <div
                className="team-member"
                style={{ backgroundSize: "cover" }}
                >
                <figure className="image-box-silver"> 
                <div>
                <img
                src="http://tirutsava.com/sp_logo/venusgeo.png"
                alt=""
                className="img-responsive"
                style={{ height: "250px" }}
                />
                </div>
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-silver">Nivea</h4>
                    </div>
                  </div>
                
                {/* 2 */}
                <div className="col-md-4 silver-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/zwickroell.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4  className="sponser-name-silver">Zwickroell</h4>
                  </div>
                </div>
                {/* 3 */}
                <div className="col-md-4 silver-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/hoverrobotix.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4  className="sponser-name-silver">HoverRobotix</h4>
                  </div>
                </div>
                <div className="col-md-4 silver-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/journey_wheels.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4  className="sponser-name-silver">Journey Wheels</h4>
                  </div>
                </div>
              </div>
              </div>
              {/* NEW ROW */}
              <div className="other-wrapper col-md-12">
                {/* 1 */}
                <div className="row other-space-around">
                <div className="col-md-12 other-head">
                  <div className="other-coin"><div className="other-text align-middle">Other</div></div>
                </div>
                <div className="col-md-4 other-member">
                  <div
                    className="team-member"
                    style={{ backgroundSize: "cover" }}
                  >
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/firefox.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />

                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Firefox</h4>
                    <div className="other-btn">Cycles Partner</div>
                  </div>
                </div>
                <div className="col-md-4 other-member">
                  <div
                    className="team-member"
                    style={{ backgroundSize: "cover" }}
                  >
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/ace_engineering.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Ace Engineering</h4>
                    <div className="other-btn">
                      Education Partner
                    </div>
                  </div>
                </div>
                {/* 2 */}
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/career_launcher.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Career Launcher</h4>
                    <div className="other-btn">
                      Education Partner
                    </div>
                  </div>
                </div>
                {/* 3 */}
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/made_easy.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Made Easy</h4>
                    <div className="other-btn">
                      Education Partner
                    </div>
                  </div>
                </div>
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/soda_junction.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Soda Junction</h4>
                    <div className="other-btn">Food Partner</div>
                  </div>
                </div>
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/creamstone.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Creamstone</h4>
                    <div className="other-btn">Food Partner</div>
                  </div>
                </div>
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/dare2compete.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Dare2compete</h4>
                    <div className="other-btn">Hosting Partner</div>
                  </div>
                </div>
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/airtel.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Airtel</h4>
                    <div className="other-btn">
                      Marketing Partner
                    </div>
                  </div>
                </div>
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/indian_institute_of_photography.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Indian Institute of Photography</h4>
                    <div className="other-btn">
                      Photography Partner
                    </div>
                  </div>
                </div>
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/inkpot.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Inkpot</h4>
                    <div className="other-btn">Printing Partner</div>
                  </div>
                </div>
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/its_my_tirupati.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Its My Tirupati</h4>
                    <div className="other-btn">
                      Social Media Partner
                    </div>
                  </div>
                </div>
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/ktm.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">KTM</h4>
                    <div className="other-btn">Racing Partner</div>
                  </div>
                </div>
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/lti.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">LTI </h4>
                    <div className="other-btn">
                      Technical Partner
                    </div>
                  </div>
                </div>
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/WAF.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">What After College </h4>
                    <div className="other-btn">Workshop Partner</div>
                  </div>
                </div>
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/techobytes.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Techobytes </h4>
                    <div className="other-btn">Workshop Partner</div>
                  </div>
                </div>{" "}
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/bank_of_baroda.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Bank of Baroda </h4>
                    <div className="other-btn">Other Partner</div>
                  </div>
                </div>{" "}
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/exafluence.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Exafluence </h4>
                    <div className="other-btn">Other Partner</div>
                  </div>
                </div>{" "}
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/indian_scienctific.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Indian Scientific </h4>
                    <div className="other-btn">Other Partner</div>
                  </div>
                </div>
                <div className="col-md-4 other-member">
                  <div className="team-member">
                    <figure className="image-box-gold">
                      <img
                        src="http://tirutsava.com/sp_logo/accountants_factory.png"
                        alt=""
                        className="img-responsive"
                        style={{ height: "250px" }}
                      />
                      <figcaption>
                        <br />
                        <ul>
                          <li>
                            <a href="!#">
                              <i className="fa fa-facebook fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-twitter fa-2x"></i>
                            </a>
                          </li>
                          <li>
                            <a href="!#">
                              <i className="fa fa-linkedin fa-2x"></i>
                            </a>
                          </li>
                        </ul>
                      </figcaption>
                    </figure>
                    <h4 className="sponser-name-other">Accountants Factory </h4>
                    <div className="other-btn">Other Partner</div>
                  </div>
                </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
