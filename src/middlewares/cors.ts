import cors, { CorsOptions } from 'cors'

// Allowed origins
const allowedList = ['http://localhost:3000']

const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        if (!origin || allowedList.indexOf(origin) !== -1 ) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'))
        }
    }
}

export default cors(corsOptions)