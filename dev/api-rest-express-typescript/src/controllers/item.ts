import { Request, Response } from 'express'
import { insertCar, getCars } from '../services/item'
import { handleHttp } from '../utils/error.handle'


/**
 * 
 * @param param0 
 * @param res 
 */
const postItem = async( {body }: Request, res: Response) =>{
    try{
        const responseItem = await insertCar(body)
        res.send(responseItem)
    }catch(e){
        handleHttp(res, 'ERROR_POST_ITEM', e)
    }
}

const getItems = async(req: Request, res: Response) => {
    try{
        const response = await getCars()
        res.send(response)
    }catch(e){
        handleHttp(res, 'ERROR_GET_ITEMS')
    }
}


export { postItem, getItems }





