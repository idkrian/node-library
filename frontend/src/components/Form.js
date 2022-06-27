import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'
import { TextField } from '@mui/material'

function App() {
  const url = "http://localhost:3333/livros/"

  const [data, setData] = useState('')

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
    console.log(data)
  }

  function handleSubmit(e) {
    e.preventDefault()
    axios.post(url, {
      titulo: data.titulo,
      autor: data.autor,
      data: data.data
    })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <div className="container mr-5 ml-5 formContainer" >
      <h1 className='text-center mt-5'>Cadastrar Livros</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
          <label>Nome do Autor</label>
          <input type="text" onChange={handleChange} className="form-control" name='autor' placeholder="Ex: Paulo Dias" />
        </div>
        <div className="form-group mt-3">
          <label>Titulo</label>
          <input type="text" onChange={handleChange} className="form-control" name='titulo' placeholder="Ex: Senhor dos Áneis" />
        </div>
        <div className="form-group mt-3">
          <label>Data</label>
          <input type="date" onChange={handleChange} name='data' className="form-control" placeholder="Password" />
        </div>
        <div className='d-flex justify-content-between'>
          <button type="submit" className="btn btn-primary mt-3">Enviar</button>
          <Link className='btn btn-primary mt-3' to='/lista'>Lista</Link>
        </div>
      </form>

    </div>
  );
}

export default App;
