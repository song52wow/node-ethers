const ethers = require('ethers')
const https = require('node:https')
const pem = require('https-pem')

const server = https.createServer(pem)

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

  const result = {
    code: 200,
    msg: 'success',
    data
  }

  console.log('result', result)

  res.setHeader('Access-Control-Allow-Origin', '*')

  res.end(JSON.stringify(result))
});

server.listen(10122, () => {
  console.log('Server start at port 10122')
})