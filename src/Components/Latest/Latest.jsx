import React from 'react'
import { Link } from 'react-router-dom'
const Latest = ({news}) => {
    if(news.articles){
    return (
        <div className="container pt-2 ">
            <div className="row">
                <div className="latest col-sm-12 col-md-1 d-flex align-items-center">LATEST</div>
                <div className="latest-titles col-sm-12 col-md-11 d-flex align-items-center">
                
                    <div id="latestCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                        <div className="carousel-inner" >
                        
                            <div className="carousel-item active " >
                            <Link className="text-decoration-none" to={`/${news.articles[12]._id}`}>
                                {news.articles[12].title}
                                </Link>
                            </div>
                            
                        {news.articles.map((article)=>{return(
                            <div className="carousel-item " >
                                <Link className="text-decoration-none" to={`/${article._id}`}>
                                {article.title}
                                </Link>
                            </div>
                            )})}
                        </div>
                    </div>
                
                </div>
            </div>
        </div>
    )}
    return( <div className="container pt-2">
                <div className="row">
                    <div className="latest col-sm-12 col-md-1 d-flex align-items-center">LATEST</div>
                    <div className="latest-titles col-sm-12 col-md-11 d-flex align-items-center">
                        there isn't any news yet
                    </div>
                </div>    
            </div>
            )
}

export default Latest
