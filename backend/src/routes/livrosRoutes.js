import express from 'express'
import livroController from '../controllers/livrosController.js'

const router = express.Router()

router
    .get('/', livroController.getAllBooks)
    .get('/livros/:id', livroController.getBook)
    .post('/livros', livroController.createBook)
    .put('/livros/:id', livroController.updateBook)
    .delete('/livros/:id', livroController.deleteBook)

export default router