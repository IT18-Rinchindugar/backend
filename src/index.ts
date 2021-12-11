import * as dotenv from 'dotenv';
import colors from 'colors'
import { createApp } from './app'
import { connectDB } from './models'

// Color enabled
colors.enable()

// Dotenv 
dotenv.config()

// Connect to DB
connectDB();

const server = createApp()

server.listen(process.env.APP_PORT, () =>  console.log(
  `Server running in ${process.env.NODE_ENV} mode on port ${process.env.APP_PORT}`.yellow.bold
))
