import React ,{useState,useEffect}from "react";
import "./App.css"
import NavBar from "./Components/NavBar/NavBar";
import Header from "./Components/Header";
import Latest from "./Components/Latest/Latest";
import Homepage from "./Components/Posts/Homepage";
import FinancePrev from "./Components/Posts/FinancePrev";

import { HashRouter as Router, Route ,Switch} from "react-router-dom";


function App() {
  
  const [news, setnews] = useState({});

  const fetchData= async ()=> {
    const respons =    await fetch("https://free-news.p.rapidapi.com/v1/search?q=Elon%20Musk&lang=en", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "free-news.p.rapidapi.com",
        "x-rapidapi-key": "e018646840msh8c3fc826caecc49p1fb0f8jsn55ed3aa151b9"
      }
    })
    const data= await respons.json();
    setnews(data);
    
    console.log(data);
    
    // console.log(data.articles[0].title);
  
  
  }

  useEffect(() => {
    fetchData();
  },[])

  return (
    <Router>
      <div className="container">
        <NavBar />
        <Switch>
                      <Route exact path='/'>
                          <Header />
                          <Latest news={news}/>
                          <Homepage news={news}/>
                          <FinancePrev news={news}/>
                          {/* <NewsPrev news={news}/>
                          <BussinessPrev news={news}/>
                          <EntertainmentPrev news={news}/>
                          <SciencePrev news={news}/> */}
                      </Route>
                      <Route exact path='/news'>
                        
                      </Route>
                      <Route exact path="/finance">
                          
                      </Route>
                      <Route exact path="/business">
                          
                      </Route>
                      <Route exact path="/entertainment">
                          
                      </Route>
                      <Route exact path="/science">
                          
                      </Route>
                  </Switch>
        
      </div>
    </Router>
  );
}

export default App;
