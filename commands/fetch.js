const fetch = require('node-fetch')

async function main() {
  return fetch('http://localhost:8140/peoplenewsApi/thirdservice', {
    headers: {
      accept: 'application/json, text/plain, */*',
      'accept-language': 'en,zh-CN;q=0.9,zh;q=0.8,zh-TW;q=0.7,ja;q=0.6',
      authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNokzF0LgjAYBeD_8l472GzTzTsRAiEroi663CcuMMUpWtF_bxKcq-cczgcek4cCHLepFowhTmWOqMECKSoU0hSn0riU7DSDBMKs4vjtHLLGT_0YyYcQqWrqClVlfb8d0flQXvenS7OVcoKCZDjDgsYkYNfhD4RjusEc7OhNfMjbp1F9ziXrZsP75eWXYe2E1nZcLLHw_QEAAP__.-3m68oTsrGbL1W4fxqCh7vjbCjP0xUQ20RkSP03bPUY',
      'caiyun-api-auth':
        'Y21pYzAwMDE6OEMzMURDMEEwQkM4NDkyOUI1N0ZDQjczMTdCQkQ0MTg=',
      'caiyun-cms-platform-log': '0',
      'content-type': 'application/json;charset=UTF-8',
      'sec-fetch-dest': 'empty',
      'sec-fetch-mode': 'cors',
      'sec-fetch-site': 'same-origin',
      cookie:
        '_ga=GA1.1.1951058812.1539094530; userId=pp2Q1REmnVvBlWYhDjYVGfdF1NX/hLOhbnuULwIIkxM=; 538306db7c7b154b5d22f913ae052840=0d93795b468f725cbf985568ab587d3d; 0b3b1a65861b305b1f6d6094168c85ba=ebed6792b0df745f0136393343a731ac; e1f84a3c9ee09c9a9bf1ba003d13c561=6c16ced0ceb2603ddeed43724fcf20b5; e64ec4ee65f710a108ee7f3e03fccd26=bec35679f92e17701f903da53c49471c; 0248db40eec7092126be4806250833e2=46a151b25f54d393a83201907d968978; CAPTCHA-ID=7hp3bh01lgg6ucnjwefzucwkqmhstv7; CAIYUN-PLATFORM-DEVICE=7hp3bh62p2njhbivohcudf3ywnrp2xu; PEOPLENEWS_PUBLISH_PLATFORM_TOKEN=eyJhbGciOiJIUzI1NiIsInppcCI6IkRFRiJ9.eNokzF0LgjAYBeD_8l472GzTzTsRAiEroi663CcuMMUpWtF_bxKcq-cczgcek4cCHLepFowhTmWOqMECKSoU0hSn0riU7DSDBMKs4vjtHLLGT_0YyYcQqWrqClVlfb8d0flQXvenS7OVcoKCZDjDgsYkYNfhD4RjusEc7OhNfMjbp1F9ziXrZsP75eWXYe2E1nZcLLHw_QEAAP__.-3m68oTsrGbL1W4fxqCh7vjbCjP0xUQ20RkSP03bPUY',
    },
    referrer: 'http://localhost:8140/',
    referrerPolicy: 'strict-origin-when-cross-origin',
    body:
      '{"name":"测试服务101","category":"1","url":"http://baidu.com","imgUrl":"","status":"0","weight":1}',
    method: 'POST',
    mode: 'cors',
  })
    .then((res) => res.text())
    .then((text) => {
      console.log(text)
    })
}

module.exports = {
  desc: 'just a main',
  func: main,
}
