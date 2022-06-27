//import { BrowserRouter as Router, BrowserRouter, Switch, Route, Routes } from 'react-router-dom'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Form from './components/Form'
import Lista from './components/Lista'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Form />} />
        <Route path="/lista" element={<Lista />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App