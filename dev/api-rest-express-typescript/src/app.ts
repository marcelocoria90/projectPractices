import 'dotenv/config'
import express, { application } from 'express'
import cors from 'cors'
import { router } from './routes'

const app = express()
app.use(cors())
app.use(router)



export default app
