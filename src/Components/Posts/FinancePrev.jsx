import React from 'react'
import PostPreview from './Post/PostPreview'
const FinancePrev =({news}) => {
    if(news.articles){
        let finArticles=[];
        let i=0;
        while(i<news.articles.length){
            if(finArticles.length===3)break;
            if(news.articles[i].topic==="finance"){
                finArticles.push(news.articles[i])
            }
            i++;
        }
        console.log(finArticles);
        return(
            <div>
                <div className=" mt-3">
                    <div className="latest col-sm-12 ps-2 d-flex align-items-center">FINANCE</div>
                </div>
                <div className="container mt-3">
                
                    <div className="row ">
                        {finArticles.length>=1?<PostPreview width="col-md-3 col-sm-6" media={finArticles[0].media} title={finArticles[0].title}/>:<PostPreview width="col-md-3 col-sm-6" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                        {finArticles.length>=2?<PostPreview width="col-md-3 col-sm-6" media={finArticles[1].media} title={finArticles[1].title}/>:<PostPreview width="col-md-3 col-sm-6" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
                        {finArticles.length===3?<PostPreview width="col-md-6 col-sm-12" media={finArticles[2].media} title={finArticles[2].title}/>:<PostPreview width="col-md-6 col-sm-12" media={"https://truelegends.nl/wp-content/uploads/2020/11/geennieuwsslechtnieuws_kaal.jpg"} title={"this is demo news in case the api didn't feel good today"}/>}
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

export default FinancePrev
