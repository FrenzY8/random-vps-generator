// kebutuhan (required)
const readline = require('readline');
const fs = require('fs');
// var - var nya
  // random pass gen
var generator = require('generate-password');
var password = generator.generate({
	length: 10,
	numbers: true
});
  // rl question
var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

 // random ip
var ip = (Math.floor(Math.random() * 255) + 1)+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255))+"."+(Math.floor(Math.random() * 255));
// random username
var rug = require('random-username-generator');
var new_username = rug.generate();

// Start code
console.log(`
Choose by Number | Pilih dengan angka
[1] Vps Trial
[2] Permanent Vps

NOTES : This scripts only for fun! the vps is not real active..
but if you want to make this for Api, yes you can!
`)
rl.question("Which one do you wanna execute? : ", PilihDulu => {
  if(PilihDulu == "") { // kaga di isi anjeng
    console.log("Please choose the numbers")
  } else {
  if(PilihDulu == "1") { // Trial vps
console.clear();
    console.log(`
VPS Succes Generated!
Usernames : ${new_username}
Passwords : ${password}
Ip : ${ip}

Expire : 6 - 7 Hours
Github : github.com/FrenzY8
    `)
  } else {
  if(PilihDulu == "2") {
  console.clear();
console.log(`
VPS Succes Generated!
Usernames : ${new_username}
Passwords : ${password}
Ip : ${ip}

Expire : Permanent!
Github : github.com/FrenzY8
    `)
  }
  }
  }
});
