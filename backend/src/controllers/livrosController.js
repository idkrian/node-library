import livros from '../models/Livro.js'

class livroController {

    static getAllBooks = (req, res) => {
        livros.find((err, livros) => {
            res.status(200).json(livros)
        })
    }

    static getBook = (req,res ) =>{
        const {id} = req.params
        
        livros.findById(id, (err, livros) => {
            if(err) {
                res.status(400).send({message: err.message})
            }else {
                res.status(200).send(livros)
            }
        })


    }

    static createBook = (req,res) =>{
        let livro = new livros(req.body)

        livro.save((err) => {
            if(err){
                res.status(500).send({message: err.message})
            }else{
                res.status(201).send(livro.toJSON())
            }
        })
    }

    static updateBook = (req,res) => {
        const {id} = req.params
        livros.findByIdAndUpdate(id, {$set: req.body}, err => {
            if(!err){
                res.status(200).send({message: "Livro Atualizado com Sucesso!"})
            }else{
                res.status(500).send({message:err.message})
            }
        })
    }

    static deleteBook = (req, res) => {
        const {id} = req.params

        livros.findByIdAndDelete(id, (err) =>{
            if(!err){
                res.status(200).send({message: "O livro foi removido com sucesso!"})

            }else{
                res.status(500).send({err: err.message})
            }
        })
    }

}

export default livroController