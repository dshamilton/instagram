import React from "react";
import { createFragmentContainer } from 'react-relay';
import DeletePostMutation from '../../DeletePostMutation';
import { Post_post, Post_viewer } from './Post.gql';

class Post extends React.Component {
  render() {
    return (
      <div className='pa3 bg-black-05 ma3'>
        <div
          className='w-100'
          style={{
            backgroundImage: `url(${this.props.post.imageUrl})`,
            backgroundSize: 'cover',
            paddingBottom: '100%',
          }}
        />
        <div className='pt3'>
          {this.props.post.description}&nbsp;
          <span className='red f6 pointer dim' onClick={this._handleDelete}>Delete</span>
        </div>
      </div>
    )
  }
  _handleDelete = () => {
    DeletePostMutation(this.props.post.id, this.props.viewer.id);
  }
}

export default createFragmentContainer(
  Post,
  {
    post: Post_post,
    viewer: Post_viewer
  }
);
