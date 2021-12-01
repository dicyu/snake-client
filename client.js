const net = require('net');
const { monitorEventLoopDelay } = require('perf_hooks');

// Establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243', // IP address here
    port: '50541' // Port here
  });

  // interpret incoming data as text
  conn.setEncoding('utf8');
  
conn.on("connect", () => {
  console.log("Connected to the server");
})

  conn.on("data", (data) => {
    console.log("Server : ", data); 
  });


  return conn;
};


console.log("Connecting...");
connect();

module.exports = connect;