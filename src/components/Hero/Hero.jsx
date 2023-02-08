import "./Hero.css"
import logo from '../../assets/images/logo.png'
import rasm from '../../assets/images/phone.png'
import rasm2 from '../../assets/images/mail.png'
import rasm3 from '../../assets/images/fb.png'
import rasm4 from '../../assets/images/twitter.png'
import rasm5 from '../../assets/images/g-plus.png'
import rasm6 from '../../assets/images/linkedin.png'
import rasm7 from '../../assets/images/search-icon.png'
import rasm8 from '../../assets/images/white-next.png'
import rasm9 from '../../assets/images/truck.png'

export function Hero() {
    return(
    <>
        <div class="hero_area">
            <section class="header_section">
              <div class="container">
                <nav class="navbar navbar-expand-lg custom_nav-container d-lg-none">
                  <a class="navbar-brand" href="#">
                    <div class="logo-box">
                      <img src={logo} alt=""/>
                      <span>
                        Transportz
                      </span>
                    </div>
                  </a>
                  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                  </button>
            
                  <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav  ">
                      <li class="nav-item active">
                        <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"> About </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"> Service</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"> Shop </a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#"> Company </a>
                      </li>
                      <li class="nav-item ">
                        <a class="nav-link " href="#">Contact us</a>
                      </li>
                    </ul>
                  </div>
                </nav>
                <div class="header_container ">
                  <div class="logo-box">
                    <img src={logo} alt=""/>
                    <span>
                      Transportz
                    </span>
                  </div>
                  <div>
                    <div class="header_top">
                      <div class="header_top-contact">
            
                        <a href="" class="ml-4">
                          <div>
                            <img src={rasm} alt="" />
                          </div>
                          <span>
                            (+71) 258964785
                          </span>
                        </a>
                        <a href="" class="ml-4">
                          <div>
                            <img src={rasm2} alt="" />
                          </div>
                          <span>
                            transportz@gmail.com
                          </span>
                        </a>
                      </div>
                      <div class="header_top-social">
                        <div>
                          <a href="">
                            <img src={rasm3} alt=""/>
                          </a>
                        </div>
                        <div>
                          <a href="">
                            <img src={rasm4} alt=""/>
                          </a>
                        </div>
                        <div>
                          <a href="">
                            <img src={rasm5} alt=""/>
                          </a>
                        </div>
                        <div>
                          <a href="">
                            <img src={rasm6} alt=""/>
                          </a>
                        </div>
                      </div>
                    </div>
                    <div class="header_btm">
                      <nav class="navbar navbar-expand-lg custom_nav-container pt-3">
            
                        <button class="navbar-toggler" type="button" data-toggle="collapse"
                          data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                          aria-label="Toggle navigation">
                          <span class="navbar-toggler-icon"></span>
                        </button>
            
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                          <div class="d-flex mx-auto flex-column flex-lg-row align-items-center">
                            <ul class="navbar-nav  ">
                              <li class="nav-item active">
                                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#"> About </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#"> Service</a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#"> Shop </a>
                              </li>
                              <li class="nav-item">
                                <a class="nav-link" href="#"> Company </a>
                              </li>
                              <li class="nav-item ">
                                <a class="nav-link pr-0" href="#">Contact us</a>
                              </li>
                            </ul>
            
                          </div>
            
                        </div>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section class=" slider_section ">
              <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                  <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                  <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                </ol>
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="container">
                      <div class="slider_item-container">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="slider_item-detail">
                              <div class="slider_form-box">
                                <form action="">
                                  <div class="search_input">
                                    <input type="text"/>
                                    <img src={rasm7} alt=""/>
                                  </div>
            
                                  <button>
                                    Search
                                  </button>
                                </form>
                              </div>
                              <div>
                                <h1>
                                  Unbeatable <br/>
                                  trucking & Transport <br/>
                                  Services
                                </h1>
            
                                <div class="d-flex">
                                  <div>
                                    <a href="" class="read-btn">
            
                                      <span>
                                        Read More
                                      </span>
                                      <img src={rasm8} alt=""/>
                                    </a>
                                  </div>
                                  <div class="ml-3">
                                    <a href="" class="quote-btn">
            
                                      <span>
                                        Get A Quote
                                      </span>
                                      <img src={rasm8} alt=""/>
                                    </a>
                                  </div>
                                </div>
            
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="slider_img-box">
                              <img src={rasm9} alt="" class="img-fluid"/>
                            </div>
                          </div>
                        </div>
            
                      </div>
            
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="container">
                      <div class="slider_item-container">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="slider_item-detail">
                              <div class="slider_form-box">
                                <form action="">
                                  <div class="search_input">
                                    <input type="text"/>
                                    <img src="images/search-icon.png" alt=""/>
                                  </div>
            
                                  <button>
                                    Search
                                  </button>
                                </form>
                              </div>
                              <div>
                                <h1>
                                  Unbeatable <br/>
                                  trucking & Transport <br/>
                                  Services
                                </h1>
            
                                <div class="d-flex">
                                  <div>
                                    <a href="" class="read-btn">
            
                                      <span>
                                        Read More
                                      </span>
                                      <img src={rasm8} alt=""/>
                                    </a>
                                  </div>
                                  <div class="ml-3">
                                    <a href="" class="quote-btn">
            
                                      <span>
                                        Get A Quote
                                      </span>
                                      <img src={rasm8} alt=""/>
                                    </a>
                                  </div>
                                </div>
            
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="slider_img-box">
                              <img src={rasm9} alt="" class="img-fluid"/>
                            </div>
                          </div>
                        </div>
            
                      </div>
            
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="container">
                      <div class="slider_item-container">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="slider_item-detail">
                              <div class="slider_form-box">
                                <form action="">
                                  <div class="search_input">
                                    <input type="text"/>
                                    <img src={rasm7} alt=""/>
                                  </div>
            
                                  <button>
                                    Search
                                  </button>
                                </form>
                              </div>
                              <div>
                                <h1>
                                  Unbeatable <br/>
                                  trucking & Transport <br/>
                                  Services
                                </h1>
            
                                <div class="d-flex">
                                  <div>
                                    <a href="" class="read-btn">
            
                                      <span>
                                        Read More
                                      </span>
                                      <img src={rasm8} alt=""/>
                                    </a>
                                  </div>
                                  <div class="ml-3">
                                    <a href="" class="quote-btn">
            
                                      <span>
                                        Get A Quote
                                      </span>
                                      <img src={rasm8} alt=""/>
                                    </a>
                                  </div>
                                </div>
            
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="slider_img-box">
            
                              <img src={rasm9} alt="" class="img-fluid"/>
                            </div>
                          </div>
                        </div>
            
                      </div>
            
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="container">
                      <div class="slider_item-container">
                        <div class="row">
                          <div class="col-md-6">
                            <div class="slider_item-detail">
                              <div class="slider_form-box">
                                <form action="">
                                  <div class="search_input">
                                    <input type="text"/>
                                    <img src={rasm7} alt=""/>
                                  </div>
            
                                  <button>
                                    Search
                                  </button>
                                </form>
                              </div>
                              <div>
                                <h1>
                                  Unbeatable <br/>
                                  trucking & Transport <br/>
                                  Services
                                </h1>
            
                                <div class="d-flex">
                                  <div>
                                    <a href="" class="read-btn">
            
                                      <span>
                                        Read More
                                      </span>
                                      <img src={rasm8} alt=""/>
                                    </a>
                                  </div>
                                  <div class="ml-3">
                                    <a href="" class="quote-btn">
            
                                      <span>
                                        Get A Quote
                                      </span>
                                      <img src={rasm8} alt=""/>
                                    </a>
                                  </div>
                                </div>
            
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="slider_img-box">
                              <img src={rasm9} alt="" class="img-fluid"/>
                            </div>
                          </div>
                        </div>
            
                      </div>
            
                    </div>
                  </div>
                </div>
            
              </div>
            
            
            </section>
            
          </div>
            
        </>

    )
}