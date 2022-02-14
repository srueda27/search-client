import '../../styles/searchPhotoStyles.css'

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

  renderAdmin() {
    if (this.props.photos.length === 0) {
      return (
        <div className="ui segment container message-container">
          <div className="ui label">
            Please use another title or place a search title
          </div>
        </div>
      );
    } else {
      return (
        <div className="ui divided list list-container">
          <ListComponent photos={this.props.photos} />
        </div>
      );
    }
  }

  render() {
    return (
      <div style={{ width: '90%', margin: 'auto' }}>
        <h4>Search Photos by Title</h4>
        <SearchBar onSubmit={this.onSubmit} label='' />
        {this.renderAdmin()}
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