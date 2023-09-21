var http = require('http');
var dt = require('./myfirstmodule');
var dt1 = require('./mysecondmodule');
var dt2 = require('./mythirdmodule');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("Login: " + dt.myDateTime() + "\n"+ "Cadastro: " + dt1.myDateTime1() + "\n"+ "Consulta: " + dt2.myDateTime2());
  res.end();
}).listen(5013);