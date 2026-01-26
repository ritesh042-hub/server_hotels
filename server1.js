var fs= require('fs')
var os= require('os')
var res= os.userInfo()
console.log(res)
fs.appendFile('greeting.txt','hi'+res.username+'!',()=>{
    console.log("Done")
})