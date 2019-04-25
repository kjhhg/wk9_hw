import $ from "jquery";
import "normalize.css";
import "../css/style.css";
import gNews from "./modules/gNews";
import { newsTemplate } from "./modules/template";

const getSocialNews = async () =>{
    try{
        let resp = await gNews("/everything?q=social");
        let newsList = resp.data.articles.map(news => newsTemplate(news));
        for(i=0;i<6;i++){
            $("#socalNews").html(newsList);
        }    
    }catch(error){
        console.log(error);
    }
};
const getEntertainmentNews = async () =>{
    try{
        let resp = await gNews("/everything?q=entertainment");
        let newsList = resp.data.articles.map(news => newsTemplate(news));
        for(i=0;i<6;i++){
            $("#entertainmentNews").html(newsList);
        } 
    }catch(error){
        console.log(error);
    }
};
const getSportNews = async () =>{
    try{
        let resp = await gNews("/everything?q=sport");
        let newsList = resp.data.articles.map(news => newsTemplate(news));
        for(i=0;i<6;i++){
            $("#sportNews").html(newsList);
        }
        
    }catch(error){
        console.log(error);
    }
};
const getTaiwanNews = async () =>{
    try{
        let resp = await gNews("/everything?q=taiwan");
        let newsList = resp.data.articles.map(news => newsTemplate(news));
        for(i=0;i<6;i++){
            $("#taiwanNews").html(newsList);
        }  
    }catch(error){
        console.log(error);
    }
};

getSocialNews();
getEntertainmentNews();
getSportNews();
getTaiwanNews();