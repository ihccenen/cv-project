import React from 'react';

export default function PracticalExperienceForm(
  {
    companyName,
    positionTitle,
    mainTasks,
    joined,
    left,
    handleCompanyNameChange,
    handlePositionTitleChange,
    handleMainTasksChange,
    handleJoinedChange,
    handleLeftChange,
    onSubmit,
  },
) {
  return (
    <form onSubmit={onSubmit}>
      <label htmlFor="company-name">
        Company Name:
        <input
          type="text"
          id="company-name"
          name="company-name"
          value={companyName}
          required
          onChange={handleCompanyNameChange}
        />
      </label>

      <label htmlFor="position-title">
        Position Title:
        <input
          type="text"
          id="position-title"
          name="position-title"
          value={positionTitle}
          required
          onChange={handlePositionTitleChange}
        />
      </label>

      <label htmlFor="main-tasks">
        Main Tasks:
        <textarea onChange={handleMainTasksChange} value={mainTasks} />
      </label>

      <label htmlFor="joined">
        Joined:
        <input
          type="date"
          id="joined"
          name="joined"
          value={joined}
          required
          onChange={handleJoinedChange}
        />
      </label>

      <label htmlFor="left">
        Left:
        <input
          type="date"
          id="left"
          name="left"
          value={left}
          required
          onChange={handleLeftChange}
        />
      </label>

      <button type="submit">Submit</button>
    </form>
  );
}
