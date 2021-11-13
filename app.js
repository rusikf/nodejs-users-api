import express from 'express'
import App from './controllers/users'

const app = express()
app.use(express.json())

App(app)

app.listen(process.env.PORT || 3000, () => {
  console.log('Server runs !!')
})

