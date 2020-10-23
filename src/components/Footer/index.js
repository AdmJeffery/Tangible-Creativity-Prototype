import React from "react";
import "./style.css";
import Row from "../Row";
import Col from "../Column"

export default function Footer() {
    return (
        <footer>
            <Row>
                <Col size = "md-6">
                <h5>Tangible Creativity</h5>
                <br/>
                <p>Unleash your creative side through hands-on instruction.</p>
                </Col>
                <Col size = "md-6">
                <h5>Contact Hours</h5>
                <p>Mon:</p>
                <p>Tues:</p>
                <p>Wed:</p>
                <p>Thurs:</p>
                <p>Fri:</p>
                <p>Sat:</p>
                <p>Sun:</p>
                <br/>
                <p>Located at:</p>
                <br/>
                <p>Phone: </p>
                </Col>
            </Row>
        </footer>
    )
}
