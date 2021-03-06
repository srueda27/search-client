import '../../styles/listStyles.css'

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class ListComponent extends React.Component {
  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right', margin: '10px' }} >
          <Link to='/photos/new' className="ui button teal">Add Photo</Link>
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
    if (!this.props.photos) {
      return null
    }

    return this.props.photos.map(photo => {
      return (
        <div className="item item-container" key={photo.id}>
          <div className='img-container'>
            <img alt={photo.title} src={photo.photoUrl} />
          </div>
          <div className="content">
            <h3>
              {this.renderLink(photo)}
            </h3>
            <p className="shortDescription">
              {photo.shortDescription}
            </p>
          </div>
        </div>
      );
    })
  }

  render() {
    return (
      <div>
        {this.renderCreate()}
        <div className="ui divided list list-container">{this.renderList()}</div>
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