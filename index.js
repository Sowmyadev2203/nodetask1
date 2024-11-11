var http = require("http");

var server = http.createServer((req,res)=>{
                          // console.log(req.url);  if we want to see a url path
                          
    if(req.url=="/sowmyadetails"){
        res.end("Name:sowmya\n batch:11R\n location:Hyderbad\n branch:CSE");
    }
    else{
        res.end("enter a correct path")
    }
})

var port=5001;
server.listen(port,()=>{
    console.log("your server is started",port);
})