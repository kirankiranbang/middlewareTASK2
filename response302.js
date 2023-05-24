const http = require('http');
const fm=require('fs')
const server = http.createServer((req, res) => {
 // console.log(req.url,req.method,req.headers);
 

const url=req.url;
const method=req.method;

if(url==='/h')         // browser http://localhost:4000/h
{
   
res.write('<html>')
res.write('<head><title>ENTER Messege </title></head>')
res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');

res.write('</html>')
 return res.end ();
}

if(url==="\message"  && method==="POST")
{
fm.writeFileSync('messege.txt','dummy')

res.statusCode=302;
res.writeHead('location','/')
return res.end();

}

res.setHeader('Content-Type','text')

res.write('<html>')
res.write('<head><title>First page </title></head>')
res.write('<body><h1>hello from node js server</h1></body>')

res.write('</html>')
res.end ();

});

server.listen(4000);

//