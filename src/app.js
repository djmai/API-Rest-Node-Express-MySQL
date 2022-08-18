import express from 'express'
import morgan from 'morgan'

// 
// import routes from './routes/routes'
import languageRoutes from './routes/language.routes'

const app = express()

// Settings
app.set('port', process.env.PORT || 3000)

// Middlewares
app.use(morgan('dev'))

// Aceptar json
app.use(express.json())

// Routes
// app.use(routes);
app.use('/api/languages',languageRoutes);

export default app;