import React, { Component } from 'react'
import NewsItem from './NewsItem'
import PropTypes from 'prop-types'



export class News extends Component {
  static defaultProps ={
    country: 'in',
    pageSize: '8',
    category: 'general'
    
  }
  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
  }


    constructor(){
        super();
        this.state = {
            articles: [],
            page: 1,
            
        }
    }
    async componentDidMount(){
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d66fb9b7535640418c63e705bc674f7f&page=1&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({articles : parsedData.articles, totalResults: parsedData.totalResults})
      
    }
    handlePreClick= async ()=>{
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d66fb9b7535640418c63e705bc674f7f&page=${this.state.page -1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
    
        this.setState({
            page: this.state.page -1,
            articles : parsedData.articles
        })

    }
    handleNextClick= async ()=>{
        if(this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)){

        }
        else{
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d66fb9b7535640418c63e705bc674f7f&page=${this.state.page +1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);
        
            this.setState({
                page: this.state.page +1,
                articles : parsedData.articles
            })
    }
    }
  render() {
    return (
      <div className='container my-2'>
        
        <h2 className='text-center'>NewsMonkey top headlines</h2>
        
       
      <div className='row'>
      {this.state.articles.map((elements)=>{
         return <div className='col-md-4' key = {elements.url}>
         <NewsItem  title = {elements.title?elements.title.slice(0,45):""} description = {elements.description?elements.description.slice(0,88):""} imageurl ={elements.urlToImage} newsurl ={elements.url}/>
         </div>
      } 
      
      )}
        

        
        </div>
        <div className='container my-2 d-flex justify-content-between'>
        <button disabled={this.state.page <=1} type="button" className="btn btn-dark" onClick={this.handlePreClick}>&larr; Previous</button>
        <button disabled={this.state.page +1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
        <h6>please reload if information is not changing </h6>

      </div>
      
    )
  }
}

export default News
