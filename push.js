var push = require("web-push")

let vapidKeys = {
    publicKey: 'BF1rVjmm12oobL4g2GU9dxWe8vO6QAJAVGsoFOwzBp59uJjf5H-RemVmpaRhg9SBz_oadklU9XQHQ259WmCoQfQ',
    privateKey: '9Wm5CpokWMgVEGRA6tVKwDJKej41msmLJbR_4W1Whc8'
  }

  push.setVapidDetails('trest@gmail.com',vapidKeys.publicKey, vapidKeys.privateKey)
  let sub = ""
  push.sendNotification(sub, 'text mess')