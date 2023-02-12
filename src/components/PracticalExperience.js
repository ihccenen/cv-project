import React, { Component } from 'react';
import PracticalExperienceForm from './PracticalExperienceForm';

export default class PracticalExperience extends Component {
  constructor(props) {
    super(props);

    this.state = {
      companyName: '',
      positionTitle: '',
      mainTasks: '',
      joined: '',
      left: '',
      submitted: false,
    };
  }

  handleCompanyNameChange = (e) => {
    this.setState({
      companyName: e.target.value,
    });
  };

  handlePositionTitleChange = (e) => {
    this.setState({
      positionTitle: e.target.value,
    });
  };

  handleMainTasksChange = (e) => {
    this.setState({
      mainTasks: e.target.value,
    });
  };

  handleJoinedChange = (e) => {
    this.setState({
      joined: e.target.value,
    });
  };

  handleLeftChange = (e) => {
    this.setState({
      left: e.target.value,
    });
  };

  handleClick = () => {
    const { submitted } = this.state;

    this.setState({
      submitted: !submitted,
    });
  };

  onSubmit = () => {
    const { submitted } = this.state;

    this.setState({
      submitted: !submitted,
    });
  };

  render() {
    const {
      companyName, positionTitle, mainTasks, joined, left, submitted,
    } = this.state;

    return (
      <section className="flex">
        {submitted
          ? (
            <>
              <p>{`Company Name: ${companyName}`}</p>
              <p>{`Position Title: ${positionTitle}`}</p>
              <p>{`Main tasks: ${mainTasks}`}</p>
              <p>{`Joined: ${joined}`}</p>
              <p>{`Left: ${left}`}</p>
              <button type="button" onClick={this.handleClick}>Edit</button>
            </>
          )
          : (
            <PracticalExperienceForm
              companyName={companyName}
              positionTitle={positionTitle}
              mainTasks={mainTasks}
              joined={joined}
              left={left}
              handleCompanyNameChange={this.handleCompanyNameChange}
              handlePositionTitleChange={this.handlePositionTitleChange}
              handleMainTasksChange={this.handleMainTasksChange}
              handleJoinedChange={this.handleJoinedChange}
              handleLeftChange={this.handleLeftChange}
              onSubmit={this.onSubmit}
            />
          )}
      </section>
    );
  }
}
