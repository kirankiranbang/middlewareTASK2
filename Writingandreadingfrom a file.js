const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {
  const url = req.url;
  const method = req.method;

  if (url === '/h') {
    res.write('<html>');
    res.write('<head><title>ENTER Message</title></head>');
    res.write('<body><form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form></body>');
    res.write('</html>');
    return res.end();
  }

  if (url === '/message' && method === 'POST') {
    const body = [];
    req.on('data', (chunk) => {
      body.push(chunk);
    });

    req.on('end', () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];

      fs.writeFile('message.txt', message, (err) => {
        if (err) {
          console.error('Failed to save message:', err);
        } else {
          console.log('Message saved:', message);
        }
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
      });
    });
  } else {
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>First page</title></head>');
    res.write('<body>');
    res.write('<h1>Hello from Node.js server</h1>'); // Display the heading
    // Read the message from the file
    fs.readFile('message.txt', 'utf-8', (err, message) => {
      if (err) {
        console.error('Failed to read message:', err);
      }

      // Display the submitted message if available
      if (message) {
        res.write(`<p>Submitted message: ${message}</p>`);
       // res.write('<p>Submitted message: ' + message + '</p>');
      }
      // Display the input field and send button
      res.write('<form action="/message" method="POST">');
      res.write('<input type="text" name="message" />');
      res.write('<button type="submit">Send</button>');
      res.write('</form>');


      res.write('</body>');
      res.write('</html>');
      res.end();
    });
  }
});

server.listen(4000);
//