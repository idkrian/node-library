import mongoose from 'mongoose'

mongoose.connect('mongodb+srv://rian:1234@clusteralura.nfdyn.mongodb.net/api-alura?')

let db = mongoose.connection

export default db