import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  constructor(){
    super();
    console.log("Hiii this is constructor ");
  }
  render() {

    return (
      <div className="container my-3">
        <h2>NewsMonkey - Top Headlines</h2>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" imageUrl="https://ichef.bbci.co.uk/news/1024/branded_news/1544E/production/_132681178_gazawar.png" newsUrl="TODO"/>
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" />
          </div>
          <div className="col-md-4">
            <NewsItem title="myTitle" description="mydesc" />
          </div>
        </div>
      </div>
    )
  }
}

export default News
