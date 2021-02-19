const http = require('http')

http.createServer((req,res) => {


  // res.writeHead(200, {'Content-Type': 'applicaiton/json'})
  // res.setHeader('Content-Disposition', 'attachment; filename=lista.csv')
  // res.writeHead(200, {'Content-Type': 'applicaiton/csv'})

  res.write('id, nombre\n')
  res.end()

})
.listen(8080)

console.log('Escuchando el puerto', 8080)