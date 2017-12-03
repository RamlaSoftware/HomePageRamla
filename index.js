const app = require('./app');
const config = require('./config');

app.listen(config.port, function(){
  console.log(`Aplicación corriento en http://localhost:${config.port}`);
  console.log(`Aplicación propiedad de ${config.owner}`);
  console.log(`Desarrollado por ${config.developer}`);
  console.log("Ramla Software 2018");
});
