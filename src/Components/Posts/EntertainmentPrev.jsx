import React from 'react'
import PostPreview from './Post/PostPreview'
const EntertainmentPrev =({news}) => {
    if(news.articles){
        let entArticles=[];
        let i=0;
        while(i<news.articles.length){
            if(entArticles.length===3)break;
            if(news.articles[i].topic==="entertainment"){
                entArticles.push(news.articles[i])
            }
            i++;
        }
        
        return(
            <div>
                <div className=" mt-5">
                    <div className="latest col-sm-12 ps-2 d-flex align-items-center">ENTERTAINMENT</div>
                </div>
                <div className="container mt-3">
                
                    <div className="row ">
                        <div className="col-12 col-sm-6">
                        <div className="row d-flex  flex-row-reverse">
                        {entArticles.length>=1?<PostPreview width="col-md-5  mb-2 ms-2  col-sm-12"  id={entArticles[0]._id} media={entArticles[0].media} title={entArticles[0].title}/>:<PostPreview  id="demo" width="col-md-5  mb-2 ms-2 col-sm-12" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                        {entArticles.length>=2?<PostPreview width="col-md-6 col-sm-12"  id={entArticles[1]._id} media={entArticles[1].media} title={entArticles[1].title}/>:<PostPreview  id="demo" width="col-md-6 col-sm-12" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                        </div>
                        </div>
                        <div className="col-12 col-sm-6">
                        {entArticles.length===3?<PostPreview width="col-md-12 col-sm-12"  id={entArticles[2]._id} media={entArticles[2].media} title={entArticles[2].title}/>:<PostPreview  id="demo" width="col-md-12 col-sm-12" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                        </div>
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

export default EntertainmentPrev
