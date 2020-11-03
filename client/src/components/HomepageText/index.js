import React from "react"
import "./style.css";

export default function HomepageText () {
    return(
        <div className ="flex">
        <div className="card col-md-4 m-5" id="textCard">
        
            <h1 className ="cardTitle">A Place to Explore Creativity in Baltimore</h1>
            <br/>
            <p>Wanting to create is one of the purest natural desires that each of us hold. However, with the hectic pace of day-to-day life, it's easy to forget the special moment of creating something unique.</p>
            <p>At Tangible Creativity, We believe that creating something tangible has the power to enlarge the soul and deepen understanding, not just of ourselves but of those around us.  When we create with other people, we create lasting, meaningful relationships.  We provide a place for families and community  members to grow, learn and innovate together.</p>

            <p>We hold classes of all kinds in order to help you find that spark of creativity again. Check out our calendar to see which ones are coming up soon.</p>
        </div>
        </div>
    )
}