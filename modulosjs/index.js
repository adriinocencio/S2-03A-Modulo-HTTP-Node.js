var http = require('http');
var checkconsulta = require('./modulo_consultas');
var checkagendamento = require('./modulo_agendamento');
var checkcadastro = require('./modulo_cadastro');
var checkerro = require('./modulo_erro');
var checkperfil = require('./modulo_perfil');
var checkplanos = require('./modulo_planos');
var checksobre = require('./modulo_sobre');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(checkconsulta.checkConsultasStatus());
  res.write(checkagendamento.checkAgendamentoStatus());
  res.write(checkcadastro.checkCadastroStatus());
  res.write(checkerro.checkErroStatus());
  res.write(checkperfil.checkPerfilStatus());
  res.write(checkplanos.checkPlanosStatus());
  res.write(checksobre.checkSobreStatus());
  res.end();
}).listen(5013);