import React from 'react'
import PostPreview from './Post/PostPreview'
const SciencePrev =({news}) => {
    if(news.articles){
        let sciArticles=[];
        let i=0;
        while(i<news.articles.length){
            if(sciArticles.length===4)break;
            if(news.articles[i].topic==="science"){
                sciArticles.push(news.articles[i])
            }
            i++;
        }
       
        return(
            <div>
                <div className=" mt-5">
                    <div className="latest col-sm-12 ps-2 d-flex align-items-center">SCIENCE</div>
                </div>
                <div className="container mt-3">
                
                    <div className="row ">
                        {sciArticles.length>=1?<PostPreview width="col-md-3 col-sm-3"  id={sciArticles[0]._id} media={sciArticles[0].media} title={sciArticles[0].title}/>:<PostPreview  id="demo" width="col-md-3 col-sm-3" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                        {sciArticles.length>=2?<PostPreview width="col-md-3 col-sm-3"  id={sciArticles[1]._id} media={sciArticles[1].media} title={sciArticles[1].title}/>:<PostPreview  id="demo" width="col-md-3 col-sm-3" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                        {sciArticles.length>=3?<PostPreview width="col-md-3 col-sm-3"  id={sciArticles[2]._id} media={sciArticles[2].media} title={sciArticles[2].title}/>:<PostPreview  id="demo" width="col-md-3 col-sm-3" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                        {sciArticles.length>=4?<PostPreview width="col-md-3 col-sm-3"  id={sciArticles[3]._id} media={sciArticles[3].media} title={sciArticles[3].title}/>:<PostPreview  id="demo" width="col-md-3 col-sm-3" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
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

export default SciencePrev
