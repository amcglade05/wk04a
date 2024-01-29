
// run terminal with 'node array' to see what is going on
// make sure to save the work before running it on the terminal or else it won't show

//pressing the up arrow in the terminal will paste the previous commands in order
//the command 'clear' will clear everything from the terminal
//if not running on the local host due to an error, delete the nodes at the side of the terminal to fix
// ctrl + c will stop anything it is doing and will give you a new line to type

const http = require('http');
let mynums = [1, -1, 3 ];

//console.table(mynums);
//console.log(mynums);

mynums.push("john");
let arraylength = mynums.length;
//console.table(mynums);

const server = http.createServer(  (req, res) => {
    let html="";
    mynums.forEach( (data) =>{
        html += ` - ${data} - `;
    });
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(`${html} number of items is ${mynums.length}`);
    res.end();
    console.log(mynums);
});

server.listen(4000);
console.log(`running on localhost 4000`)
//this will run it to http://localhost:4000
