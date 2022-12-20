// self.addEventListener('push', (e)=>{
//     var options ={
//         body:" this notification",
//         icon:"./icon.png"
//     }
//     e.waitUntil(self.registration.showNotification('test message',options))

// })
self.addEventListener('push', () => {
    self.registration.showNotification('Hello world!', {
        body:" this notification",
        icon:"./icon.png"
    });
  });
