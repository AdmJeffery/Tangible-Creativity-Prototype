import React from "react";
import { FaFacebook } from 'react-icons/fa';
import "./style.css";
import Row from "../Row";
import Col from "../Column"

export default function Footer() {
    return (
        <footer>
            <Row>
                <Col size = "md-6">
                <h2>Tangible Creativity</h2>
                <br/>
                <p>Unleash your creative side through hands-on instruction.</p>
                </Col>
                <Col size = "md-6">
                
                </Col>
            </Row>
        </footer>
    )
}
