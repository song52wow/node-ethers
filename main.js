const ethers = require('ethers')
const http = require('node:http')

const server = http.createServer()

function createAddress() {
  const { address } = ethers.Wallet.createRandom()

  return {
    address
  }
}

server.on('request', (request, res) => {
  let data

  switch (request.url) {
    case '/createAddress':
      data = createAddress()
      break;
  }

  res.end(JSON.stringify({
    code: 200,
    msg: 'success',
    data
  }))
});

server.listen(10122, () => {
  console.log('Server start at port 10122')
})