import '../../styles/showPhotoStyles.css'

import _ from "lodash";
import React from "react";
import { connect } from "react-redux";

import { getPhoto } from '../../actions';

class ShowPhoto extends React.Component {
  componentDidMount() {
    this.props.getPhoto(this.props.match.params.id);
  }

  renderAdmin(photo) {
    if (this.props.isSignedIn) {
      return (
        <div>
          <h3>Photo Details</h3>
          <div className='img-detail-container'>
            <img alt={photo.title} src={photo.photoUrl} />
          </div>
          <h2 className="ui header">{photo.title}</h2>
          <div className="ui content">
            <p>
              {photo.description}
            </p>
          </div>
        </div>
      );
    } else {
      return (
        <div className="ui active dimmer">
          <div className="ui big text loader">Please Log in</div>
        </div>
      )
    }
  }

  render() {
    if (!this.props.photo) {
      return null
    }

    return (
      <div className="ui raised very padded text container segment">
        {this.renderAdmin(this.props.photo)}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    photo: state.photos[ownProps.match.params.id],
    isSignedIn: state.auth.isSignedIn,
  }
}

export default connect(mapStateToProps, { getPhoto })(ShowPhoto);