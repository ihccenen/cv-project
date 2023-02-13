import React from 'react';
import useForm from './useForm';
import useFormInput from './useFormInput';

export default function GenInfoForm() {
  const name = useFormInput('');
  const email = useFormInput('');
  const phoneNumber = useFormInput('');
  const submit = useForm(false);

  return (
    <section className="flex">
      {
      submit.value
        ? (
          <>
            <p>{`Name: ${name.value}`}</p>
            <p>{`E-mail: ${email.value}`}</p>
            <p>{`Phone Number: ${phoneNumber.value}`}</p>
            <button type="button" onClick={submit.handleClick}>Edit</button>
          </>
        )
        : (
          <form className="flex" onSubmit={submit.handleClick}>
            <label className="flex" htmlFor="name">
              Name:
              <input
                type="text"
                id="name"
                name="name"
                value={name.value}
                onChange={name.handleChange}
              />
            </label>

            <label className="flex" htmlFor="email">
              E-mail:
              <input
                type="email"
                id="email"
                name="email"
                value={email.value}
                onChange={email.handleChange}
              />
            </label>

            <label className="flex" htmlFor="phone-number">
              Phone Number:
              <input
                type="tel"
                id="phone-number"
                name="phone-number"
                value={phoneNumber.value}
                onChange={phoneNumber.handleChange}
              />
            </label>

            <button type="submit">Submit</button>
          </form>
        )
    }
    </section>
  );
}
