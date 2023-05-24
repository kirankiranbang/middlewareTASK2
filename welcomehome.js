const http = require('http');

const server = http.createServer((req, res) => {
 
const url=req.url;


if(url==='/home')         // browser http://localhost:4000/
{
   
res.write('<html>')
res.write('<head><title>ENTER Messege </title></head>')
res.write('<body><form action="/welcomehome" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');

res.write('</html>')
 return res.end ();
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