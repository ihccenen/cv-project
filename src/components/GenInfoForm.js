import React from 'react';

export default function GenInfoForm({
  name,
  email,
  phoneNumber,
  handleNameChange,
  handleEmailChange,
  handlePhoneNumberChange,
  onSubmitForm,
}) {
  return (
    <form className="flex" onSubmit={onSubmitForm}>
      <label className="flex" htmlFor="name">
        Name:
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          required
          onChange={handleNameChange}
        />
      </label>

      <label className="flex" htmlFor="email">
        E-mail:
        <input
          type="text"
          id="email"
          name="email"
          value={email}
          required
          pattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$"
          onChange={handleEmailChange}
        />
      </label>

      <label className="flex" htmlFor="phone-number">
        Phone Number:
        <input
          type="tel"
          id="phone-number"
          name="phone-number"
          value={phoneNumber}
          required
          pattern="^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$"
          onChange={handlePhoneNumberChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
