import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Categories extends Component {

    state = {
        categories : []
    }
    componentDidMount() {
        axios.get('https://api.cosmicjs.com/v1/fina/objects?pretty=true&hide_metafields=true&type=categories')
         .then(res => {
             console.log(res.data.objects);
             this.setState({
                 categories: res.data.objects
             })
             
         })
    }
  render() {
    const { categories } = this.state;
    const categoryList = categories.length ? (
        categories.map(category => {
            return(
                <div key={category.id} className="card border-primary mb-3">
                <div className="card-body">
              
                 <Link to={'/' + category.slug}> <h4 className="card-title">{category.title}</h4></Link>
               
                  
                </div>
              
              </div>
            )
        })

    ) 
    : 
    (
        <div className="text-center"> No categories yet </div>
    )

    return (
      <div>
       {categoryList}
      </div>
    )
  }
}
