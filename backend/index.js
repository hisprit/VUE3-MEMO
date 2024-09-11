const express = require('express')
const app = express()
const port = 3000

const memos = ["내용1", "내용2", "내용3"]
app.get('/memos', (req, res) => {
  res.send(memos)
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})