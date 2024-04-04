import React from "react";
import {Link} from 'react-router-dom';
const emailValidator = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
// const passwordValidator = /^(?=.\d)(?=.[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
const phoneValidator = "^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$";
const firstNameValidator=/^[A-Z]+$/i;
const lastNameValidator=/^[A-Z]+$/i;
class FormComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      firstName: "",
      lastName: "",
      emailAddress: "",
    
      firstNameError: "",
      emailAddressError: "",
      phoneno:"",
      phonenoError:"",
      seats:"",
      seatserror:"",
      seattype:"",
      totalprice:"",
    //   passwordError: "",
    //   passwordConfirmationError: "",
      isFormSubmitted: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateFirstName = this.validateFirstName.bind(this);
    this.validateLastName = this.validateLastName.bind(this);
    this.validateEmailAddress = this.validateEmailAddress.bind(this);
    this.validatephoneno = this.validatephoneno.bind(this);
    this.validateseats = this.validateseats.bind(this);
    this.validateField = this.validateField.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;

    this.setState({
      [name]: value
    });

    return;
  }

  handleBlur(event) {
    const { name } = event.target;

    this.validateField(name);
    return;
  }

  handleSubmit(event) {
    event.preventDefault();
    let formFields = [
      "firstName",
      "lastName",
      "emailAddress",
      "phoneno",
      "seats"
    ];
    let isValid = true;
    formFields.forEach(field => {
      isValid = this.validateField(field) && isValid;
     
    });

    if (isValid) this.setState({ isFormSubmitted: true });
    else this.setState({ isFormSubmitted: false });

    return this.state.isFormSubmitted;
  }

  validateField(name) {
    let isValid = true;

    if (name === "firstName") isValid = this.validateFirstName();
    else if (name === "lastName") isValid = this.validateLastName();
    else if (name === "emailAddress") isValid = this.validateEmailAddress();
    else if (name === "phoneno") isValid = this.validatephoneno();
    else if (name === "seats") isValid = this.validateseats();
    return isValid;
  }

  validateFirstName() {
    let firstNameError = "";
    const value = this.state.firstName;
    if (value.trim() === "") firstNameError = "First Name is required";
    else if (!firstNameValidator.test(value))
      firstNameError = "Name is not valid";
    this.setState({
      firstNameError
    });
    return firstNameError === "";
  }

  validateLastName() {
    let lastNameError = "";
    const value = this.state.lastName;
    if (value.trim() === "") lastNameError = "Last Name is required";
    else if (!lastNameValidator.test(value))
      lastNameError = "Last name is not valid";
    this.setState({
      lastNameError
    });
    return lastNameError === "";
  }

  validateEmailAddress() {
    let emailAddressError = "";
    const value = this.state.emailAddress;
    if (value.trim === "") emailAddressError = "Email Address is required";
    else if (!emailValidator.test(value))
      emailAddressError = "Email is not valid";

    this.setState({
      emailAddressError
    });
    return emailAddressError === "";
  }

  validatephoneno() {
    let phonenoError = "";
    const value = this.state.phoneno;
    if (value.trim === "") phonenoError = "Phone no is required";
    else if (!phoneValidator.test(value))
      phonenoError =
        "Enter valid no!";

    this.setState({
      phonenoError
    });
    return phonenoError === "";
  }


  validateseats() {
    let seatsError = "";
    const value = this.state.seats;
    if (value.trim() === "") seatsError = "pls select no of seats";

    this.setState({
      seatsError
    });
    return seatsError === "";
  }
  
  
  render() {
    return (
      
      <div className="main" style={{background:'#f4f4f4',height:"700px"}}>
        <h3 class="center" style={{color:  'rgb(7, 7, 124)'}}>REGISTRATION</h3>
        {this.state.isFormSubmitted ? (
          <div className="details">
            <h3>Thanks for Booking, find your details below:</h3>
            <div>First Name: {this.state.firstName}</div>
            <div>Last Name: {this.state.lastName}</div>
            <div>Email Address: {this.state.emailAddress}</div>
            <div>no of seats: {this.state.seats}</div>
            <div>total price:Rs {this.state.seats*this.state.seattype}</div>

          </div>
        ) : (
          <div style={{textAlign:"center"}}>
          <form onSubmit={this.handleSubmit} >
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              value={this.state.firstName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.firstNameError && (
              <div className="errorMsg">{this.state.firstNameError}</div>
            )}
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              value={this.state.lastName}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.lastNameError && (
              <div className="errorMsg">{this.state.lastNameError}</div>
            )}
            <input
              type="text"
              placeholder="Email Address"
              name="emailAddress"
              value={this.state.emailAddress}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.emailAddressError && (
              <div className="errorMsg">{this.state.emailAddressError}</div>
            )}
            <input
              type="text"
              placeholder="Phone no"
              name="phoneno"
              value={this.state.phoneno}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.phonenoError && (
              <div className="errorMsg">{this.state. phonenoError}</div>
            )}



           <input
              type="text"
              placeholder="no of seats"
              name=""
              value={this.state.seats}
              onChange={this.handleChange}
              onBlur={this.handleBlur}
              autoComplete="off"
            />
            <br />
            {this.state.seatserror && (
              <div className="errorMsg">{this.state.seatserror}</div>
            )}



      <label>
        what kind of seat?OPTIONAL FIELD

          <select value={this.state.value} onChange={this.handleChange}>
            <option value="aisle seat">aisle seat Rs500 </option>
            <option value="balcony seat">Balcony seat Rs 400</option>
            <option value="front row">front row Rs 800</option>
            <option value="classic">classic  Rs 300</option>
          </select>
        </label>
            
        <br></br>
        <br></br>
        <Link to="/last"><button class="btn">Continue to Pay</button></Link>
          </form>
          </div>
        )}
      </div>
      
    );
  }
}
export default FormComponent;