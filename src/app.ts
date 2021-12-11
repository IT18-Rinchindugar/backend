import express, { Request, Response, Application } from 'express'
import morgan from 'morgan';
import { NODE_ENV } from './config'
export const createApp = () => {
    const app: Application = express()

    // Without this middleware
    app.use(express.json())

    // Dev logging middleware
    if (NODE_ENV === 'development') {
        app.use(morgan('dev'));
    }

    app.get('/', (req: Request, res: Response) => res.json({ message: 'OK' }))

    return app
}