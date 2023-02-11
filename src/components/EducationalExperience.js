import React, { Component } from 'react';
import EducationalExperienceForm from './EducationalExperienceForm';

export default class EducationalExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      schoolName: '',
      titleOfStudy: '',
      dateOfStudy: '',
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

  handleDateOfStudyChange = (e) => {
    this.setState({
      dateOfStudy: e.target.value,
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
      schoolName, titleOfStudy, dateOfStudy, submitted,
    } = this.state;

    return (
      <section>
        {
          submitted
            ? (
              <>
                <p>{`School Name: ${schoolName}`}</p>
                <p>{`Title of Study: ${titleOfStudy}`}</p>
                <p>{`Date of Study: ${dateOfStudy}`}</p>
                <button type="button" onClick={this.handleClick}>Edit</button>
              </>
            )
            : (
              <EducationalExperienceForm
                schoolName={schoolName}
                titleOfStudy={titleOfStudy}
                dateOfStudy={dateOfStudy}
                handleSchoolNameChange={this.handleSchoolNameChange}
                handleTitleOfStudyChange={this.handleTitleOfStudyChange}
                handleDateOfStudyChange={this.handleDateOfStudyChange}
                onSubmit={this.onSubmit}
              />
            )
        }
      </section>
    );
  }
}
