import React, { Component } from "react";
import API from "../../utils/API";

class Form extends Component {
  state = {
    name: "",
    email: "",
    comment: ""
  }

  // input change handler
  handleInputChange = event => {
    // get value and name of input that triggered the change
    const { name, value } = event.target;

    // update that input's state
    this.setState({
      [name]: value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log("Submit pressed!");

    if (this.state.name === "" || this.state.email === "" || this.state.comment === "") {
      return;
    }

    const comment = {
      name: this.state.name,
      email: this.state.email,
      comment: this.state.comment
    }

    API.postComment(comment).catch(err => {
      console.log(err);
    });

    // clear inputs
    this.setState({
      name: "",
      email: "",
      comment: ""
    });
  }

  render() {
    return (
      <form>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Name</label>
          <input name="name" value={this.state.name} onChange={this.handleInputChange} type="text" className="form-control" id="name" placeholder="Example input" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput2">Email</label>
          <input name="email" value={this.state.email} onChange={this.handleInputChange} type="text" className="form-control" id="email" placeholder="Another input" />
        </div>
        <div className="form-group">
          <label htmlFor="formGroupExampleInput3">Comment</label>
          <textarea name="comment" value={this.state.comment} onChange={this.handleInputChange} className="form-control" id="comment" rows="3"></textarea>
        </div>
        <button onClick={this.handleSubmit} type="submit" className="btn btn-primary" id="submit">Submit</button>
      </form>
    );
  }
}

export default Form;