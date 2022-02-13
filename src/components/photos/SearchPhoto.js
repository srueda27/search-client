import React from "react";
import { connect } from "react-redux";

import { listPhotosByTitle, clearList } from '../../actions';

import SearchBar from "./SearchBar";
import ListComponent from "./ListComponent";

class SearchPhoto extends React.Component {
  componentDidMount() {
    this.props.clearList();
  }

  onSubmit = (values) => {
    this.props.listPhotosByTitle(values);
  }

  render() {
    return (
      <div>
        <h3>Search Photos by Title</h3>
        <SearchBar onSubmit={this.onSubmit} />
        <div className="ui divided list list-container">
          <ListComponent photos={this.props.photos} />
        </div>
      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    photos: Object.values(state.photos),
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { listPhotosByTitle, clearList })(SearchPhoto);