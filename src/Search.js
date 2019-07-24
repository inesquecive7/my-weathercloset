import React, { Component } from "react";
import "./Search.css";

class Search extends Component {
  state = "";
  submit = event => {
    event.preventDefault();
    this.props.submit(this.state.keyword);
  };

  updateKeyword = event => {
    this.setState({
      keyword: event.target.value
    });
  };
  render() {
    return (
      <form className="insert-city">
        <div className="input-group">
          <input
            type="text"
            className="p-2 m-2"
            placeholder="Type your city here..."
            autoFocus={true}
            onChange={event => this.updateKeyword(event)}
          />
          <button
            type="submit"
            className="btn btn-info"
            onClick={event => this.submit(event)}
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Search;
