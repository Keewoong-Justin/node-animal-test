const express = require('express')
var cors = require('cors')
const app = express()
const port = 3000

app.use(cors())

app.get('/', function (req, res) {
  res.json('Hello Keewoong World!!!!')
  })

app.get('/sound/:name', function (req, res) {
  const { name } = req.params

  if (name == "dog") {
    res.json({'sound':'MeongMeong'})
  } else if (name == "cat") {
    res.json({'sound':'yaong'})
  } else if (name == "pig") {
    res.json({'sound':'GGullGGull'})    
  } else {
    res.json({'sound':'I have no idea'})
  }
  console.log(name)
  
  })

app.get('/dog', function (req, res) {
  res.json({'sound':'MeongMeong'})
  })  

app.get('/user/', function (req, res) {
    // const q = req.params
    // console.log(q)
    const q=req.query
    console.log(q)

    //res.json({'userid':q.id})

  res.json([{"ReportName":"Lot History Chambers",
    "ApplicationName":"Lot History",
    "ApplicationNameKey":"Lot History",
    "Description":"Lot History Information",
    "MetaData":{"LOT": q.lot   },
    "url":"//saph-pe401.spansion.com/~dossier_dev/cgi/secure/lot_index.cgi"}])
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
