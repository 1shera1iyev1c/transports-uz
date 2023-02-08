import './Contact.css'
import map from '../../../assets/images/map.png'

export function Contact (){
    return(
        <>
        <section class="contact_section layout_padding pt-5">
          <div class="d-flex justify-content-center">
            <h2 class="heading_style">
              Contact us
            </h2>
          </div>
          <div class="container layout_padding2-top">
            <div class="row">
              <div class="col-md-6">
                <div id="map" class="h-100 w-100">
                    <img src={map} alt=""  width={585} height={492}/>
                </div>
              </div>

              <div class="col-md-6">
                <div class="contact_form-container">
                  <form action="">
                    <div>
                      <input type="text" placeholder="Your Name"/>
                    </div>
                    <div>
                      <input type="email" placeholder="Your Email"/>
                    </div>
                    <div>
                      <input type="text" placeholder="Your Phone"/>
                    </div>

                    <div>
                      <input type="text" class="message_input" placeholder="Message"/>
                    </div>
                    <div class="d-flex justify-content-end">
                      <button type="submit " class="">
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
        </>
    )
}