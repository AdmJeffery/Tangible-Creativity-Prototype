import React, { component } from "react";
import "./style.css";

class NewsletterSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: '', email: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            name: event.target.value,
            email: event.target.value
        });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.name);
        event.preventDefault();
        console.log(this.state.email)

        //   need to write a post route here 
    }

    render() {
        return (
            <div>
                
                <div className="card col-md-4 m-5" id="infoCard">
                    <div className="card-body">
                        <div className="card-title"><h4>Our Newsletter</h4></div>
                        <div className="card-text">Stay up-to-date with all things Tangible Creativity! New crafts, events, and news will be at your fingertips so you never miss a beat! Craft on!</div>
                    </div>
                    <img src="../../../public/pictures/Wire-Tree.jpg" className="img-fluid ${3|rounded-top,rounded-right,rounded-bottom,rounded-left,rounded-circle,|}" alt=""></img>
                </div>
                
                <div className="card col-md-4 m-5" id="signupCard">
                    <div className="card-title"><h4>Signup for our newsletter!</h4>
                    </div>
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                    <br></br>
                            <input type="text" name="name" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <label>
                            Email:
                    <br></br>
                            <input type="email" name="email" value={this.state.value} onChange={this.handleChange} />
                        </label>
                        <br></br>
                        <input type="submit" className="btn-primary" value="Subscribe!" />
                    </form>
                </div>
            </div>
        );
    }
}

export default NewsletterSignup