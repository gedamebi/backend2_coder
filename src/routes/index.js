import { Router } from "express";
import { ROUTE_PATH } from "../constants/routesPath.js";
import ViewRouters from './views.route.js'; 
import ProductsRoute from './products.router.js'
import CartsRoute from './carts.router.js'
import SessionsRouter from './sessions.route.js'

const app = Router()

app.use("/", ViewRouters)

app.use(ROUTE_PATH.api_productos, ProductsRoute)
app.use(ROUTE_PATH.api_carts, CartsRoute)
app.use(ROUTE_PATH.api_sessions, SessionsRouter)

export default app
