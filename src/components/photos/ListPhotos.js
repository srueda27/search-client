import '../../styles/photoListStyles.css'

import React from "react";
import { connect } from "react-redux";

import { listPhotos } from "../../actions";
  
import ListComponent from './ListComponent';

class PhotoList extends React.Component {
  componentDidMount() {
    this.props.listPhotos();
  }

  render() {
    return (
      <div>
        <div className="ui divided list list-container">
          <ListComponent photos={this.props.photos}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    photos: Object.values(state.photos),
    currentId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps, { listPhotos })(PhotoList);