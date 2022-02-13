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
      <div style={{ width: '90%', margin: 'auto' }}>
        <h4>Search Photos by Title</h4>
        <SearchBar onSubmit={this.onSubmit} label='' />
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