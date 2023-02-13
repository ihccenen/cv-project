import React from 'react';
import useForm from './useForm';
import useFormInput from './useFormInput';

export default function PracticalExperience() {
  const companyName = useFormInput('');
  const positionTitle = useFormInput('');
  const mainTasks = useFormInput('');
  const joined = useFormInput('');
  const left = useFormInput('');
  const submit = useForm(false);

  return (
    <section className="flex">
      {
        submit.value
          ? (
            <>
              <p>{`Company Name: ${companyName.value}`}</p>
              <p>{`Position Title: ${positionTitle.value}`}</p>
              <p>{`Main Tasks: ${mainTasks.value}`}</p>
              <p>{`Joined: ${joined.value}`}</p>
              <p>{`Left: ${left.value}`}</p>
              <button type="button" onClick={submit.handleClick}>Edit</button>
            </>
          )
          : (
            <form className="flex" onSubmit={submit.handleClick}>
              <label className="flex" htmlFor="company-name">
                Company Name:
                <input
                  type="text"
                  id="company-name"
                  name="company-name"
                  value={companyName.value}
                  onChange={companyName.handleChange}
                />
              </label>

              <label className="flex" htmlFor="position-title">
                Position Title:
                <input
                  type="text"
                  id="position-title"
                  name="position-title"
                  value={positionTitle.value}
                  onChange={positionTitle.handleChange}
                />
              </label>

              <label className="flex" htmlFor="main-tasks">
                Main Tasks
                <textarea
                  value={mainTasks.value}
                  onChange={mainTasks.handleChange}
                />
              </label>

              <label className="flex" htmlFor="joined">
                Joined:
                <input
                  type="date"
                  id="joined"
                  name="joined"
                  value={joined.value}
                  onChange={joined.handleChange}
                />
              </label>

              <label className="flex" htmlFor="left">
                Left:
                <input
                  type="date"
                  id="left"
                  name="left"
                  value={left.value}
                  onChange={left.handleChange}
                />
              </label>

              <button type="submit">Submit</button>
            </form>
          )
      }
    </section>
  );
}
