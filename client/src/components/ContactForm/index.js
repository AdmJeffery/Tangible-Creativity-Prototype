import React from "react";
import "./style.css";

export default class ContactForm extends React.Component {
    constructor(props) {
      super(props);
      this.submitForm = this.submitForm.bind(this);
      this.state = {
        status: ""
      };
    }
  
    render() {
      const { status } = this.state;
      return (
        <div>
          <br/>
        <div className="card col-md-4" id="contact-form">
            <div className="card-title"><h4>Contact Us</h4>
            <p>Questions? Comments? Concerns?</p>
            <p>Drop us a line using the form below and we'll get back to you as soon as we can!</p>
                </div>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/f/myybwqyl"
          method="POST"
        >
          {/* <!-- add your custom form HTML here --> */}
          <label>Your Email:</label>
          <br></br>
          <input type="email" name="email" />
          <br></br>
          <label>Message:</label>
          <br></br>
          <textarea type="text" name="message" />
          <br></br>
          {status === "SUCCESS" ? <p>Thanks! Your message has been submitted!</p> : <button>Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error. Please try again.</p>}
        </form>
        </div>
        <br/>
        </div>
      );
    }
  
    submitForm(ev) {
      ev.preventDefault();
      const form = ev.target;
      const data = new FormData(form);
      const xhr = new XMLHttpRequest();
      xhr.open(form.method, form.action);
      xhr.setRequestHeader("Accept", "application/json");
      xhr.onreadystatechange = () => {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
          form.reset();
          this.setState({ status: "SUCCESS" });
        } else {
          this.setState({ status: "ERROR" });
        }
      };
      xhr.send(data);
    }
  }