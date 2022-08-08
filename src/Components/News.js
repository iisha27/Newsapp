import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from "react-infinite-scroll-component";

export class News extends Component {
    static defaultProps={
        country:'in',
        pageSize:8,
       category:'health'
    }
    static propTypes={
        country: PropTypes.string,
        pageSize:PropTypes.number,
        category:PropTypes.string
    }
    capitalize=(string)=> {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }
    constructor(props){
        super(props);
        console.log(" i am a constructor form news ");
        this.state= {
            articles: [],
            loading:false,
            page:1,
            totalResults:0
        }
        document.title=`${this.capitalize(this.props.category)} - NewsMonkey`;
    }

    async componentDidMount(){
      this.updatefunc();
        
     }

    async updatefunc(){
      this.props.setProgress(10);
        let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        let data=await fetch(url);
      this.props.setProgress(40);

        let parsedData=await data.json();
      this.props.setProgress(70);

             this.setState({
            articles:parsedData.articles, 
            totalResults:parsedData.totalResults, loading:false})
      this.props.setProgress(100);

    }

    

    //   handlePrevClick =async() =>{
    //     this.setState({page:this.state.page-1});
    //     this.updatefunc();
    // }

    //  handleNextClick= async() =>{
    //     this.setState({page:this.state.page +1});
    //     this.updatefunc();
    // }

    fetchMoreData =async () => {
      this.setState({
        page:this.state.page+1,
      })
      let url=`https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${this.props.apiKey}&page=${this.state.page}&pageSize=${this.props.pageSize}`;
      let data=await fetch(url);
      let parsedData=await data.json();
           this.setState({
          articles:this.state.articles.concat(parsedData.articles), 
          totalResults:parsedData.totalResults})
    };
  render() {
    return(
      
        <>
        <h1 className='text-center'>NewsMonkey-Top {this.capitalize(this.props.category)} Headlines </h1>
        {this.state.loading && <Spinner />}
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length!==this.state.totalResults}
          loader={<Spinner />}
        >
        <div className="container">
        <div className="row">
        {this.state.articles.map((element)=>{

            
        return <div className="col-md-4 " key={element.url} >
        <NewsItem  title={element.title?element.title:""} description={element.description?element.description:""}  imageUrl={element.urlToImage} newsUrl={element.url} author={element.author?element.author:"Unknown"} source={element.source.name} date={element.publishedAt} />
        </div> 
        
            

         } )}
         </div>
       </div>
           </InfiniteScroll>
       {/* <div className= "container d-flex justify-content-between ">
       <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;previous</button>
       <button disabled={this.state.page+1>Math.ceil(this.state.totalResults/this.props.pageSize)}type="button" className="btn btn-dark" onClick={this.handleNextClick}> next&rarr; </button>
       </div> */}
      </>
    
    )
  }
}

export default News
