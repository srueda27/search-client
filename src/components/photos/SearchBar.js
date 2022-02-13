import React from "react";

class SearchBar extends React.Component {
  state = {
    inputValue: ''
  }

  onFormSubmit = event => {
    event.preventDefault();

    this.props.onSubmit(this.state.inputValue);
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
          <label>{this.props.label}</label>
          <input
            type='text'
            value={this.state.inputValue}
            onChange={e => this.setState({ inputValue: e.target.value })} />
        </div>
      </form>
    );
  }
}

export default SearchBar;
