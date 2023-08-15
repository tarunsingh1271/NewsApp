import React, { Component } from 'react'
//import image1 from './images/image1.jpg'


export class NewsItem extends Component {
    
  render() { 
    const {title, description, newsUrl, urlToImage} = this.props;
    return (
      <>
       <div>
            <div className="card my-5" style={{width: "18rem "}}>
                    <img src={urlToImage} className="card-img-top" alt="image1"/>
                        <div className="card-body">
                            <h5 className="card-title">{title}...</h5>
                            <p className="card-text">{description}...</p>
                            <a href={newsUrl} target= "_blank" className="btn btn-sm btn-primary">Read More</a>
                        </div>
                </div>
            </div>
      </>
    )
  }
}

export default NewsItem
