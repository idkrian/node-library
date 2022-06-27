import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const url2 = "http://localhost:3333/"

function Tablee() {
    useEffect(() => {
        axios.get(url2)
            .then(res => {
                console.log(res)
                setApiData(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, [])
    const [apiData, setApiData] = useState('')

    return (
        <div className='container mt-4 tableContainer'>
            <h1 className='text-center mt-5'>Lista de Livros</h1>
            <table className="
            table table-striped tableCustom mt-5
            border border-dark rounded text-small
            ">
                <thead>
                    <tr>
                        <th className='h3' scope="col">#</th>
                        <th className='h3' scope="col">Autor</th>
                        <th className='h3' scope="col">Título</th>
                        <th className='h3' scope="col">Data</th>
                    </tr>
                </thead>
                {apiData &&
                    apiData.map((value, i) =>
                        <tbody key={i}>
                            <tr className='' >
                                <td className='h5'>{1 + i}</td>
                                <td className='h5'>{value.autor}</td>
                                <td className='h5'>{value.titulo}</td>
                                <td className='h5'>{new Date(value.data).toLocaleDateString("pt-BR")}</td>
                            </tr>
                        </tbody>
                    )
                }

            </table>
            <Link className='btn btn-primary mt-3' to='/'>Formulário</Link>

        </div>
    )

}

export default Tablee
