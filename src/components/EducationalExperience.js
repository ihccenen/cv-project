import React from 'react';
import useForm from './useForm';
import useFormInput from './useFormInput';

export default function EducationalExperience() {
  const schoolName = useFormInput('');
  const titleOfStudy = useFormInput('');
  const dateOfStudyStart = useFormInput('');
  const dateOfStudyEnd = useFormInput('');
  const submit = useForm(false);

  return (
    <section className="flex">
      {
        submit.value
          ? (
            <>
              <p>{`School Name: ${schoolName.value}`}</p>
              <p>{`Title of Study: ${titleOfStudy.value}`}</p>
              <p>{`Date of Study Start: ${dateOfStudyStart.value}`}</p>
              <p>{`Date of Study End: ${dateOfStudyEnd.value}`}</p>
              <button type="button" onClick={submit.handleClick}>Edit</button>
            </>
          )
          : (
            <form className="flex" onSubmit={submit.handleClick}>
              <label className="flex" htmlFor="school-name">
                School Name:
                <input
                  type="text"
                  id="school-name"
                  name="school-name"
                  value={schoolName.value}
                  onChange={schoolName.handleChange}
                />
              </label>

              <label className="flex" htmlFor="title-of-study">
                Title of Study:
                <input
                  type="text"
                  id="title-of-study"
                  name="title-of-study"
                  value={titleOfStudy.value}
                  onChange={titleOfStudy.handleChange}
                />
              </label>

              <label className="flex" htmlFor="date-of-study-start">
                Date of Study Start:
                <input
                  type="date"
                  id="date-of-study-start"
                  name="date-of-study-start"
                  value={dateOfStudyStart.value}
                  onChange={dateOfStudyStart.handleChange}
                />
              </label>

              <label className="flex" htmlFor="date-of-study-end">
                Date of Study End:
                <input
                  type="date"
                  id="date-of-study-end"
                  name="date-of-study-end"
                  value={dateOfStudyEnd.value}
                  onChange={dateOfStudyEnd.handleChange}
                />
              </label>

              <button type="submit">Submit</button>

            </form>
          )
      }
    </section>
  );
}
