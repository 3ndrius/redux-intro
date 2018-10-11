import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';
import image from '../redux.png'
export default class Home extends Component {

    state = {
        posts : []
    }
    componentDidMount() {
        axios.get('https://api.cosmicjs.com/v1/fina/objects?pretty=true&hide_metafields=true&type=posts')
         .then(res => {
             console.log(res.data.objects);
             this.setState({
                 posts: res.data.objects
             })
             
         })
    }
  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
        posts.map(post => {
            return(
                <div key={post.id} className="card border-primary mb-3">
                <div className="card-body">
                <img src={image} alt="image"/>
                 <Link to={'/' + post.slug}> <h4 className="card-title">{post.title}</h4></Link>
                  <p className="card-text">{post.content}</p>
                  
                </div>
                <img className="post-image" src={post.metadata.hero.imgix_url} alt=""/>
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
