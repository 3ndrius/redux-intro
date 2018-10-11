import React, { Component } from 'react'
import axios from 'axios'
export default class Post extends Component {

    state = {
        post: null
    }
    componentDidMount() {
        // let id = this.props.match.params.post_id;
      
        let slug = this.props.location.pathname;
        console.log(slug);
        axios.get(`https://api.cosmicjs.com/v1/fina/object${slug}?pretty=true&hide_metafields=true`)
        .then( res => {
           this.setState({
               post:res.data.object
           })
           console.log(res.data.object);
        })      
    }
  render() {
    
      const post = this.state.post ?
        (
         <div>
              <h1>{this.state.post.title} </h1>

          <p >{this.state.post.content}</p>
          <img className="post-image" src={this.state.post.metadata.hero.url} alt=""/>
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
