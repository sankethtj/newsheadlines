// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page



function get(data){
    const url = `https://masai-mock-api.herokuapp.com/news/top-headlines?country=${country}`;

fetch(url)

.then((res)=>{
    return res.json;
})
.then((res)=>{
    console.log("res",res);
})
.catch((err)=>{
    console.log("Invalid:",err);
})

}




