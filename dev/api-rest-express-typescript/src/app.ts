import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { router } from './routes'
import dbConnect  from './config/mongo'

const app = express()
app.use(cors())
app.use(router)


dbConnect()


export default app
