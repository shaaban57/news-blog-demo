import React from 'react'
import PostPreview from './Posts/Post/PostPreview';
const NewsPage =({news,handlePrevClick}) => {
    if(news.articles){
        let newArticles=[];
        let i=0;
        while(i<news.articles.length){
            
            if(news.articles[i].topic==="news"){
                newArticles.push(news.articles[i])
            }
            i++;
        }
        
        return(
            <div>
                <div className=" mt-5">
                    <div className="latest col-sm-12 ps-2 d-flex align-items-center">NEWS</div>
                </div>
                <div className="container mt-3">
                
                    <div className="row ">
                        {newArticles.length>=1?
                        newArticles.map((article)=>(<PostPreview handlePrevClick={handlePrevClick} id={article._id} width="col-md-3 col-sm-6" media={article.media} title={article.title}/>))
                        :<PostPreview handlePrevClick={handlePrevClick} id={"demo"} width="col-md-3 col-sm-6" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                        </div>
                </div>
            </div>
            
        )
    }
    else return (
        <div>
            
        </div>
    )
}

export default NewsPage
