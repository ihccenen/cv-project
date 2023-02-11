import React from 'react';

export default function EducationalExperienceForm({
  schoolName,
  titleOfStudy,
  dateOfStudy,
  handleSchoolNameChange,
  handleTitleOfStudyChange,
  handleDateOfStudyChange,
  onSubmit,
}) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="school-name">
        School Name:
        <input
          type="text"
          id="school-name"
          name="school-name"
          value={schoolName}
          required
          onChange={handleSchoolNameChange}
        />
      </label>

      <label htmlFor="title-of-study">
        Title of Study:
        <input
          type="text"
          id="title-of-study"
          name="title-of-study"
          value={titleOfStudy}
          required
          onChange={handleTitleOfStudyChange}
        />
      </label>

      <label htmlFor="date-of-study">
        Date of Study:
        <input
          type="date"
          id="date-of-study"
          name="date-of-study"
          value={dateOfStudy}
          required
          onChange={handleDateOfStudyChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
