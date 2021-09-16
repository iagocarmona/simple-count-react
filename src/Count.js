import React, { useState } from 'react'
import './style.css'

function Count() {
  const [valor, setValor] = useState(0)

  function increase() {
    setValor(valor + 1)
  }

  function zerar() {
    setValor(0)
  }

  function handleH1() {
    return <h1>Você clicou {valor} vezes</h1>
  }

  return (
    <>
      <div className="background">
        <button className="buttonClass" onClick={increase}>
          Clique aqui
        </button>
        <button className="buttonClass blue" onClick={zerar}>
          Zerar
        </button>
        {handleH1()}
      </div>
    </>
  )
}

export default Count
