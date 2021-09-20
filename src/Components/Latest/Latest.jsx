import React from 'react'

const Latest = ({news}) => {
    if(news.articles){
    return (
        <div className="container pt-2">
            <div className="row">
                <div className="latest col-sm-12 col-md-1 d-flex align-items-center">LATEST</div>
                <div className="latest-titles col-sm-12 col-md-11 d-flex align-items-center">
                
                    <div id="latestCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="6000">
                        <div className="carousel-inner" >
                        
                            <div className="carousel-item active ">
                                {news.articles[12].title}
                            </div>
                            
                        {news.articles.map((article)=>{return(
                            <div className="carousel-item ">
                                {article.title}
                            </div>
                            )})}
                        </div>
                    </div>
                
                    {/* {console.log(news.articles)} */}
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
