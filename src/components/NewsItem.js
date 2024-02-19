import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description}=this.props;
    return (
      <div>
        <div className="card" style={{width: "18rem"}}>
          <img src="https://ichef.bbci.co.uk/news/1024/branded_news/1544E/production/_132681178_gazawar.png" className="card-img-top" alt="..."/>
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a href="/newsItem" className="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
