const connectDB =require('./db')

const express =require('express')
const cors =require('cors')

const app =express()
app.use(cors())
connectDB()


const port = 2000 

// crear ruta para que cuando ejecute mi api vea mi informacion
const userRoute = require('./routes/user.routes')

//llamar a la constante de tiene los metodos
app.use(express.json())
app.use('/api', userRoute)
app.listen(port, () => console.log(`el servidor se ejecuta en el pueto http://localhost${port}`))  
