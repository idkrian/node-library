import app from './src/app.js'

const port = process.env.PORT || 3333

app.listen(port, (req, res) => {
    console.log(`Servidor rodando na porta ${port}`)
})