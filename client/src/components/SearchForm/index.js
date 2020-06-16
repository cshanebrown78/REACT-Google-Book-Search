import React from "react";
import "./style.css"

// This file exports the Input, TextArea, and FormBtn components


function SearchForm(props) {
  return (
    <form>
      <div className="form-group">
        <label htmlFor="search">Book Search:</label>
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control"
          placeholder="Search For a Book"
          id="search"
        />
        {/* <br /> */}
        <button onClick={props.handleFormSubmit} style={{ float: "right", marginBottom: 10 }} className="btn btn-secondary">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchForm;