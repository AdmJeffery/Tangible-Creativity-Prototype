import React from 'react'
import Example from "../components/Carousel/index"
import Footer from "../components/Footer/index"
import HomepageText from "../components/HomepageText/index"

export default function Header() {
    return (<>
        <div className ="container">
           <Example/>
           <HomepageText/>
           
        </div>
        <Footer/>
        </>
    )
}
