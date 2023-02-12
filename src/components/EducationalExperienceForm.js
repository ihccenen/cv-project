import React from 'react';

export default function EducationalExperienceForm({
  schoolName,
  titleOfStudy,
  dateOfStudyStart,
  dateOfStudyEnd,
  handleSchoolNameChange,
  handleTitleOfStudyChange,
  handleDateOfStudyStartChange,
  handleDateOfStudyEndChange,
  onSubmit,
}) {
  return (
    <form className="flex" onSubmit={onSubmit}>
      <label className="flex" htmlFor="school-name">
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

      <label className="flex" htmlFor="title-of-study">
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

      <label className="flex" htmlFor="date-of-study-start">
        Date of Study Start:
        <input
          type="date"
          id="date-of-study-start"
          name="date-of-study-start"
          value={dateOfStudyStart}
          required
          onChange={handleDateOfStudyStartChange}
        />
      </label>

      <label className="flex" htmlFor="date-of-study-end">
        Date of Study End:
        <input
          type="date"
          id="date-of-study-end"
          name="date-of-study-end"
          value={dateOfStudyEnd}
          required
          onChange={handleDateOfStudyEndChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
