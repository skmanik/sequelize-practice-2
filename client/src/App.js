import React, { Component } from "react";
import "./App.css";

class App extends Component {
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

    // clear inputs
    this.setState({
      name: "",
      email: "",
      comment: ""
    });
  }

  render() {
    return (
      <div className="container">
          <div className="image"><img src="https://i.imgur.com/cRMYPfR.gif" /></div>
          <h1>Submit Comment</h1>
          <form>
            <div className="form-group">
              <label for="formGroupExampleInput">Name</label>
              <input name="name" value={this.state.name} onChange={this.handleInputChange} type="text" className="form-control" id="name" placeholder="Example input" />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput2">Email</label>
              <input name="email" value={this.state.email} onChange={this.handleInputChange} type="text" className="form-control" id="email" placeholder="Another input" />
            </div>
            <div className="form-group">
              <label for="formGroupExampleInput3">Comment</label>
              <textarea name="comment" value={this.state.comment} onChange={this.handleInputChange} className="form-control" id="comment" rows="3"></textarea>
            </div>
            <button type="submit" className="btn btn-primary" id="submit">Submit</button>
          </form>
      </div>
    );
  }
}

export default App;