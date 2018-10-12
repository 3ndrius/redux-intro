import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import image from '../redux.png';
import { connect } from 'react-redux';

class Home extends Component {


  render() {
      console.log(this.props);
    const { posts } = this.props;
    const postList = posts.length ? (
        posts.map(post => {
            return(
                <div key={post.id} className="card border-primary mb-3">
                <div className="card-body">
                <img src={image} alt=""/>
                 <Link to={'/' + post.id}> <h4 className="card-title">{post.title}</h4></Link>
                  <p className="card-text">{post.body}</p>
                  
                </div>
              </div>
            )
        })

    ) 
    : 
    (
        <div className="text-center"> No posts yet </div>
    )

    return (
      <div>
        {postList}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
     return {
         posts: state.posts
     }
}

export default connect(mapStateToProps)(Home);