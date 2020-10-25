import React, { component } from "react";
import "./style.css";

class NewsletterSignup extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();

        //   need to write a post route here
    }

    render() {
        return (
            <div className="card col-md-4 m-5" id="signupCard">
                <div className="card-title"><h4>Signup for our newsletter!</h4>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Name:
                    <br></br>
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <label>
                        Email:
                    <br></br>
                        <input type="email" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <br></br>
                    <input type="submit" className="btn-primary" value="Subscribe!" />
                </form>
            </div>
        );
    }
}

export default NewsletterSignup