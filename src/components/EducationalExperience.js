import React, { Component } from 'react';
import EducationalExperienceForm from './EducationalExperienceForm';

export default class EducationalExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: '',
      titleOfStudy: '',
      dateOfStudyStart: '',
      dateOfStudyEnd: '',
      submitted: false,
    };
  }

  handleSchoolNameChange = (e) => {
    this.setState({
      schoolName: e.target.value,
    });
  };

  handleTitleOfStudyChange = (e) => {
    this.setState({
      titleOfStudy: e.target.value,
    });
  };

  handleDateOfStudyStartChange = (e) => {
    this.setState({
      dateOfStudyStart: e.target.value,
    });
  };

  handleDateOfStudyEndChange = (e) => {
    this.setState({
      dateOfStudyEnd: e.target.value,
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
      schoolName,
      titleOfStudy,
      dateOfStudyStart,
      dateOfStudyEnd,
      submitted,
    } = this.state;

    return (
      <section className="flex">
        {
          submitted
            ? (
              <>
                <p>{`School Name: ${schoolName}`}</p>
                <p>{`Title of Study: ${titleOfStudy}`}</p>
                <p>{`Date of Study Start: ${dateOfStudyStart}`}</p>
                <p>{`Date of Study End: ${dateOfStudyEnd}`}</p>
                <button type="button" onClick={this.handleClick}>Edit</button>
              </>
            )
            : (
              <EducationalExperienceForm
                schoolName={schoolName}
                titleOfStudy={titleOfStudy}
                dateOfStudyStart={dateOfStudyStart}
                dateOfStudyEnd={dateOfStudyEnd}
                handleSchoolNameChange={this.handleSchoolNameChange}
                handleTitleOfStudyChange={this.handleTitleOfStudyChange}
                handleDateOfStudyStartChange={this.handleDateOfStudyStartChange}
                handleDateOfStudyEndChange={this.handleDateOfStudyEndChange}
                onSubmit={this.onSubmit}
              />
            )
        }
      </section>
    );
  }
}
