const net = require('net');

// Establishes a connection with the game server
const connect = function(data) {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here
    port: '50541' // Port here
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  
  conn.on("connect", (data) => {
  conn.write("Name: DJY");

  
  // setInterval(() => {
  //  conn.write("Move: up");
  //  conn.write("Move: right");
  // }, 100);


});
  
  conn.on("data", (data) => {
    console.log("Server : ", data); 
  });

  return conn;

};
module.exports = { connect };