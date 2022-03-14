const JumRequest = require('./request')

const request = new JumRequest()

request.request('http://127.0.0.1:8800/user/scale').then((res) => {
  console.log(res)
})
