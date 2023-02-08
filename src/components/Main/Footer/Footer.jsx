import rasm3 from '../../../assets/images/fb.png'
import rasm4 from '../../../assets/images/twitter.png'
import rasm5 from '../../../assets/images/g-plus.png'
import rasm6 from '../../../assets/images/linkedin.png'
import rasm7 from '../../../assets/images/logo-white.png'
import './Footer.css'

export function Footer(){
    return(
        <>
        <section class="info_section ">
           <div class="container ">
             <div class="row  mb-3 pb-4">
               <div class="col-md-3 info_logo">
                 <div class="logo-box">
                   <img src={rasm7} alt=""/>
                   <span>
                     Transportz
                   </span>
                 </div>
                 <p>
                   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sedconsectetur
                 </p>
                 <div class="info_social">
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
               <div class="col-md-3 info_address">
                 <h5>
                   Address
                 </h5>
                 <p>
                   Healing Center, 176 W Street name,
                   New York, NY 10014, US
                 </p>
                 <p>
                   (+71) 8522369417
                 </p>
                 <p>
                   (+71) 8522369417
                 </p>
                 <p>
                   <a href="">
                     transportz@gmail.com
                   </a>
                 </p>
               </div>
               <div class="col-md-3 info_links">

                 <div class="info_nav ">
                   <nav class="">
                     <ul>
                       <h5>
                         Links
                       </h5>
                       <li>
                         <a href="index.html"> Home</a>
                       </li>
                       <li>
                         <a href="about.html">About</a>
                       </li>
                       <li>
                         <a href="service.html"> Service</a>
                       </li>
                       <li>
                         <a href="shop.html"> Shop</a>
                       </li>
                       <li>
                         <a href="company.html"> Company</a>
                       </li>
                       <li>
                         <a href="contact.html">Contact us</a>
                       </li>

                     </ul>
                   </nav>
                 </div>
               </div>
               <div class="col-md-3 info_news">
                 <h5>
                   Newsletter
                 </h5>
                 <form action="">
                   <div>
                     <input type="text" placeholder="Your Name"/>
                   </div>
                   <div>
                     <input type="email" placeholder="Email"/>
                   </div>
                   <div class="d-flex justify-content-end">
                     <button type="submit">
                       Subscribe
                     </button>
                   </div>
                 </form>
               </div>
             </div>


           </div>
         </section>
        </>
    )
}