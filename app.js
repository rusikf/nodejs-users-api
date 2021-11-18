import createServer from './server'
const app = createServer()

app.listen(process.env.PORT || 3000, () => {
  console.log('Server runs !!')
})

