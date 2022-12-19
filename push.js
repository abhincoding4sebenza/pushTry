var push = require("web-push")

let vapidKeys = {
    publicKey: 'BF1rVjmm12oobL4g2GU9dxWe8vO6QAJAVGsoFOwzBp59uJjf5H-RemVmpaRhg9SBz_oadklU9XQHQ259WmCoQfQ',
    privateKey: '9Wm5CpokWMgVEGRA6tVKwDJKej41msmLJbR_4W1Whc8'
  }

  push.setVapidDetails('trest@gmail.com',vapidKeys.publicKey, vapidKeys.privateKey)
  let sub = {endpoint:"https://fcm.googleapis.com/fcm/send/fTshSBQAY_Q:APA91bGSH0PxR1EQlfzWGIZGtFQYxsN1aP_wpUMGIbs6pxtWr1l_jRumdRFp4YcnMevxPD2v_zxeAF69ex-6xF0nxf1XIX_AdEushn60tURYUXfO4zPGIh7jYI8kwCf_OOTjt0Uvbhfx",expirationTime:null,keys:{p256dh:"BF_ldLhplI34Q6YdwfztaV5i4RBG-St9m6_O0yWvAUD_4XwPJWSg0sgPH93EGjTH4KjxujhhUl0ICM-LkK9cz9c",auth:"DfTyuxQtoVVBAd3UQ2Pq3w"}}
  push.sendNotification(sub, 'text mess')