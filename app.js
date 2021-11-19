import createServer from './server'
const app = createServer()

app.listen(process.env.PORT, function() {
  console.log('Listening on port ' + this.address().port)
  console.log('Server runs !!')
})

