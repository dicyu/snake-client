let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  
  
  const handleUserInput = ("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      conn.write('Move: up');
    }
    if (key === 'a') {
      conn.write('Move: left');
    }
    if (key === 's') {
      conn.write('Move: down');
    }
    if (key === 'd') {
      conn.write('Move: right');
    }
    if (key === '1') {
      conn.write('Say: Lag');
    }
    if (key === '2') {
      conn.write('Say: Hi')
    }
    if (key === '3') {
      conn.write('Say: GG');
    }
  })

stdin.on("data", handleUserInput);

  return stdin;

};

module.exports = { setupInput};