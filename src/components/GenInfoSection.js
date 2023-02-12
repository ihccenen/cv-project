import React, { Component } from 'react';
import GenInfoForm from './GenInfoForm';

export default class GenInfoSection extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      email: '',
      phoneNumber: '',
      submitted: false,
    };
  }

  handleNameChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  };

  handlePhoneNumberChange = (e) => {
    this.setState({
      phoneNumber: e.target.value,
    });
  };

  handleClick = () => {
    const { submitted } = this.state;

    this.setState({
      submitted: !submitted,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();

    const { submitted } = this.state;

    this.setState({
      submitted: !submitted,
    });
  };

  render() {
    const {
      name, email, phoneNumber, submitted,
    } = this.state;

    return (
      <section className="flex">
        {submitted
          ? (
            <>
              <p>{`Name: ${name}`}</p>
              <p>{`E-mail: ${email}`}</p>
              <p>{`Phone Number: ${phoneNumber}`}</p>
              <button type="button" onClick={this.handleClick}>Edit</button>
            </>

          )
          : (
            <GenInfoForm
              name={name}
              email={email}
              phoneNumber={phoneNumber}
              handleNameChange={this.handleNameChange}
              handleEmailChange={this.handleEmailChange}
              handlePhoneNumberChange={this.handlePhoneNumberChange}
              onSubmitForm={this.onSubmit}
            />
          )}
      </section>
    );
  }
}
