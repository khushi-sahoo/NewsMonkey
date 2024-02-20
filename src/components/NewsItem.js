import React, { Component } from 'react'

export class NewsItem extends Component {

  render() {
    let {title, description, imageurl , newsurl} = this.props;
    return (
        
      <div className='container my-3'>
        <div  className="card" style={{width: "15rem"}}>
            <img src={imageurl?imageurl:"https://www.livemint.com/lm-img/img/2024/01/31/1600x900/2-0-71270117-BSE-DC-11135602H232491-1--0_1681410792362_1706666743502.jpg"}  className="card-img-top" alt="..."/>
            <div  className="card-body">
                <h5  className="card-title">{title}...</h5>
                <p  className="card-text">{description}...</p>
                
                <a rel="noreferrer" href= {newsurl} target= "_blank"  className="btn btn-sm btn-primary">read more</a>
            </div>
            </div>
      </div>
    )
  }
}

export default NewsItem

