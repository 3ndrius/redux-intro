import React, { Component } from 'react'
import { connect } from 'react-redux';
import { deletePost } from '../actions/postActions'
class Post extends Component {

    handleClick = () => {
      this.props.deletePost(this.props.post.id);
      this.props.history.push('/');
    }
     render() {
      console.log(this.props);
      const post = this.props.post ?
        (
         <div>
            
              <h1>{this.props.post.title} </h1>

          <p >{this.props.post.body}</p>
          <button  onClick={this.handleClick} className=" btn btn-danger">
          Delete Post
          </button>
         </div>
        )
        :
        (
          <h5 className="text-center"> Loading post...</h5>
        )
    return (
      <div>
        {post}
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    let id = ownProps.match.params.post_id;
 
    return {
      post: state.posts.find(post => post.id === id )
    }
}
// dispatch 

const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: ( id ) => {
      dispatch(deletePost(id))
    }
  }
}



export default connect(mapStateToProps, mapDispatchToProps)(Post);