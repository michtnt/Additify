/* eslint-disable prettier/prettier */

const axios = require("axios");
const fs = require('fs') 

// axios({
//     "method":"GET",
//     "url":"https://vx-e-additives.p.rapidapi.com/additives",
//     "headers":{
//     "content-type":"application/octet-stream",
//     "x-rapidapi-host":"vx-e-additives.p.rapidapi.com",
//     "x-rapidapi-key":"42489d623fmsh53a8ebef6f41f12p173a95jsn0c080c160ca0",
//     "useQueryString":true
//     },"params":{
//     "order":"asc",
//     "locale":"en",
//     "sort":"last_update"
//     }
//     })
//     .then((response)=>{
//       fs.writeFile('Output.txt',JSON.stringify(response.data), (err) => { 
//         if (err) throw err; 
//       })
//     })
//     .catch((error)=>{
//       console.log(error)
//     })

let results = [];

axios({
  "method":"GET",
  "url":"https://vx-e-additives.p.rapidapi.com/additives",
  "headers":{
  "content-type":"application/octet-stream",
  "x-rapidapi-host":"vx-e-additives.p.rapidapi.com",
  "x-rapidapi-key":"42489d623fmsh53a8ebef6f41f12p173a95jsn0c080c160ca0",
  "useQueryString":true
  },"params":{
  "order":"asc",
  "locale":"en",
  "sort":"last_update"
  }
  })
  .then((response)=>{
    for(let i = 0; i < response.data.length - 1; i++ ){
    axios({
        "method":"GET",
        "url":`https://vx-e-additives.p.rapidapi.com/additives/${response.data[i].code}`,
        "headers":{
        "content-type":"application/octet-stream",
        "x-rapidapi-host":"vx-e-additives.p.rapidapi.com",
        "x-rapidapi-key":"42489d623fmsh53a8ebef6f41f12p173a95jsn0c080c160ca0",
        "useQueryString":true
        },"params":{
        "locale":"en"
        }
        })
        .then((response)=>{
          results.push(response)

          fs.appendFile('message.txt', JSON.stringify(response.data), function (err) {
          if (err) throw err;
          });
          fs.appendFile('message.txt', ", \n", function (err) {
            if (err) throw err;
            });
        })
        .catch((error)=>{
          console.log(error)
        })
      }
    
  })
  .catch((error)=>{
    console.log("this")
  })
