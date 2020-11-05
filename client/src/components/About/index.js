import React from "react";
import "./style.css";

export default function About() {
    return (
        <div>
          <div className="media">
            <img src="./pictures/Wire-Tree.jpg" className="mr-3" alt="..." margin ="auto" height = "auto"></img>
            <div className="media-body">
            <div className="card col-md-8 m-5" id="textCard">
        
        <h1 className ="cardTitle">About Us</h1>
        <br/>
        <p>Katri Lein is an educator by trade and character. Over the last 20 years she has worked and built a rapport with students ages Pre-K through High School, in private, public, and Special Education settings. She has certifications in Elementary Education (PreK-6), Middle School Math (6-8), Art (K-12), and Special Education (K-12).</p>
        <p>During her 9+ years at Kinetic Youth Academy as a Manager and Co-Director of summer camps where she enjoyed leading the same types of creative adventures which she will be providing at Tangible Creativity. Leather wallets, wire trees, stomp rockets, spin art machines, games, book covers, handmade paper, and light up wands, are just the tip of the iceberg when it comes to the things she helped students and campers create.</p>

        <p>Katri recognizes the potential in unused commercial excess and recyclable materials. What she creates demonstrates that value to others. She shares the vision and then teaches people the skills to be able to transform the unassuming into something fabulous.</p>
    </div>
    
    <div className="card col-md-8 m-5" id="textCard">
        
        <h1 className ="cardTitle">Our Mission</h1>
        <br/>
        <p>At Tangible Creativity, we strive to build stronger individuals, families, and communities, one creative experience at a time.</p>
        <p>It's through the magic of creation that we can not only grow as a person but also grow stronger with one another.</p>

        
    </div>
            </div>
            </div>
              
        </div>
    )
}
