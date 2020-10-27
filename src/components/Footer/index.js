import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Column"

export default function Footer() {
    return (
        
    <footer className="page-footer font-small blue pt-4">

  
  <div className="container-fluid  text-center text-md-left">

    
    <div className="row">

      
      <div className="col-md-6 mt-md-0 mt-3">

        
        <h5 className="text-uppercase">About Tangible Creativity</h5>
        <p>At Tangible Creativity, we specialize in helping people unleash their creative side through a hands-on learning.
            Whether you are new to crafts or are an experienced artist in the Baltimore area, Our studio supplies a safe space for you to hone your craft.
        </p>

        <hr/>
        <h5 className ="text-uppercase">Contact Us</h5>

        <ul className = "list-unstyled">
            <li>
                <p>Phone:</p>
            </li>
            <li>
                <p>Email:</p>
            </li>
        </ul>
      </div>
      
        
      <hr className="clearfix w-100 d-md-none pb-3"/>

      
      <div className="col-md-3 mb-md-0 mb-3">

        
        <h5 className="text-uppercase">Site Menu</h5>

        <ul className="list-unstyled">
          <li>
            <a href="/home">Home</a>
          </li>
          <li>
            <a href="/calendar">Classes</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/signup">Newsletter</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>

      </div>
      
      <div className="col-md-3 mb-md-0 mb-3">

        
        <h5 className="text-uppercase">Hours of Operation:</h5>
        
        <ul className="list-unstyled">
          <li>
            Mon - Fri: 9 a.m. - 12:30 p.m., 2 - 8:30 p.m.
          </li>
          <li>
            Sat: 9 a.m. - 12:30 p.m.
          </li>
          <br/>
          <li>
            Saturday Afternoons are reserved for parties, special events, and appointments.
          </li>
          <br/>
          <li>
            Closed Sundays
          </li>
        </ul>

      </div>
      

    </div>
    

  </div>
  
  <div className="footer-copyright text-center py-3">© 2020 Copyright:
    <a> Tangible Creativity</a>
  </div>
  

</footer>
)
}
