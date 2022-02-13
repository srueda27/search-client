import '../../styles/listStyles.css'

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ListComponent extends React.Component {
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right', margin:'10px' }} >
          <Link to='/photos/new' className="ui button primary">Add Photo</Link>
        </div>
      );
    }
  }

  renderLink(photo) {
    let title;
    if (this.props.isSignedIn) {
      title = (
        <Link to={`/photos/show/${photo.id}`}>{photo.title}</Link>
      );
    } else {
      title = photo.title
    }

    return title;
  }

  renderList() {
    return this.props.photos.map(photo => {
      return (
        <div className="item item-container" key={photo.id}>
          <div className='img-container'>
            <img alt={photo.title} src={photo.photoUrl} />
          </div>
          <div className="content">
            {this.renderLink(photo)}
            <div className="shortDescription">
              {photo.shortDescription}
            </div>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <div>
        <div className="ui divided list list-container">{this.renderList()}</div>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  }
}

export default connect(mapStateToProps)(ListComponent);