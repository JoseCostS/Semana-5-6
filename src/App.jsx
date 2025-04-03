import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'


function QtdeCliques({qtdeCliques, titleCliques}) {
  return(
    <div>
      <p>Você clicou {qtdeCliques} em {titleCliques}</p>
    </div>
  )
}
 function HomePage() {
  const [sucoLimao, setSucoLimao] = UseState(0)
  const [sucoUva, setContadorUva] = UseState(0)

  function  contarSucoLimao() {
    setSucoLimao(sucoLimao + 1)
  }

  function contarSucoUva(){
    setContadorUva(sucoUva + 1)
  }

  return (
    <div className="card">
      <QtdeCliques qtdeCliques={sucoLimao} titleCliques="Suco de Limão"/>
      <button onClick={contarSucoLimao}>
        Comprar Suco de Limão
      </button>

      <QtdeCliques qtdeCliques={sucoUva} titleCliques="Suco de Uva"/>
      <button onClick={contarSucoUva}>
        Comprar Suco de Uva
      </button>

      <button>
        <Link to="second-page">Navegar para página 2</Link>
      </button>
      </div>
  )
 }

 function SecondPage(){
  return(
    <h1> Segunda Página do meu App React</h1>
  )
 }v

 function App() {
  return (
  <Routes>
    <Route path='/' element={<HomePage/>}>
    </Route>
    <Route path='second-page' element={<SecondPage/>}>
    </Route>
  </Routes>
  )
 }

 export default App