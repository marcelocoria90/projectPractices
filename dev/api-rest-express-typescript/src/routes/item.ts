import { Router } from 'express'
import { postItem, getItems } from '../controllers/item'

const router = Router()

router.post('/', postItem)

router.get('/', getItems)

export { router }