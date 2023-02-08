import { About } from "./About/About"
import { Service } from "./Servise/Service"
import { Shop } from "./Shop/Shop"
import { Testimonial } from "./Testimonial/Testimonial"
import { Company } from "./Company/Company"
import { Contact } from "./Contact/Contact"
import { Footer } from "./Footer/Footer"


export function Main (){

    return(
        <>
            <main>
                <About />
                <Service />
                <Shop />
                <Testimonial />
                <Company />
                <Contact />
                <Footer />
            </main>
        </>
    )

}