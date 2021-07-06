import React from "react";

class Form extends React.Component {
  handleChange = (e) => {
    console.log({
      name: e.target.name,
      value: e.target.value,
    });
  };

  handleClick = (e) => {
    console.log("Button was clicked");
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form was submitted");
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <div className="mb-4">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              onChange={this.handleChange}
            />
          </div>
          <button
            type="submit"
            onClick={this.handleClick}
            className="btn btn-primary btn-block mb-4"
          >
            Send
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
