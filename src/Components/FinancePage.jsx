import React from 'react'
import PostPreview from './Posts/Post/PostPreview';
const FinancePage =({news}) => {
    if(news.articles){
        let finArticles=[];
        let i=0;
        while(i<news.articles.length){
            
            if(news.articles[i].topic==="finance"){
                finArticles.push(news.articles[i])
            }
            i++;
        }
        
        return(
            <div>
                <div className=" mt-5 pt-2">
                    <div className="latest col-sm-12 ps-2 d-flex align-items-center">FINANCE</div>
                </div>
                <div className="container mt-3">
                
                    <div className="row ">
                        {finArticles.length>=1?
                        finArticles.map((article)=>(<PostPreview  id={article._id} width="col-md-3 col-sm-6" media={article.media} title={article.title}/>))
                        :<PostPreview  id={"demo"} width="col-md-3 col-sm-6" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
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

export default FinancePage
