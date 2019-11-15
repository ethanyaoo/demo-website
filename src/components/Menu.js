import React, { Component } from 'react';
import style from './Menu.css';

import FileForm from 'components/inputForm/fileForm.jsx';

export default class Menu extends Component {

  constructor(props) {
    super(props);

    const { input } = this.props;
    if (input) {
      this.state = {
        name: input.name,
	info: input.info,
      };
    } else {
      this.state = {
        name: '',
	info: '',
        loading: true
      };
    }

    this.handleDelete = this.handleDelete.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDelete() {
    const { dispatch, uuid } = this.props;
  }

  handleInputChange(event) {
    const { value, name } = event.target;
    this.setState({ [name]: value });
    console.log(value);
  }

  handleDescriptionChange(event) {
    const { value, info } = event.target;
    this.setState({ [info]: value });
    console.log(value);
  }

  handleFileChange(files) {
    var reader = new FileReader();
    reader.onload = function (e) {
      alert(reader.result)
    }
    reader.readAsText(files[0]);
  }

  handleSubmit(event) {
    const { dispatch, uuid } = this.props;
    const { name } = this.state.name;
    const { description } = this.state.description;
    var payload = {
      'name': this.state.name,
      'info': this.state.info
    };

    localStorage.setItem("menuInfo", JSON.stringify(payload));
  }

  render() {
    const { handleDelete, handleInputChange, handleDescriptionChange, handleFileChange, handleSubmit } = this;
    
    return (<>
      <ul className={style.Menu}>
        <FileForm
          {...this.state}
          {...this.props}
          handleDelete={this.handleDelete}
          handleInputChange={this.handleInputChange}
	  handleDescriptionChange={this.handleDescriptionChange}
	  handleFileChange={this.handleFileChange}
          handleSubmit={this.handleSubmit}
        />
      </ul>
    </>);
  }
}
