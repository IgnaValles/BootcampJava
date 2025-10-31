/*import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default */

import Saludo from "./exercises/ex01/Saludo";
import Composicion from "./exercises/ex02/Composicion";
import Usuario from "./exercises/ex03/Usuario";

// ⚠️ hacer las importaciones que hagan falta
export default function App() {
  return (
    <main>
      {/*<h1>Introducción a React</h1>
      <Saludo />
      <Composicion />*/}
      <Usuario nombre="Paco" edad={23} />
      <Usuario nombre="Pedro" />
      {/* <PanelLogin /> */}
      {/* <Listas /> */}
      {/* <Desafio /> */}
    </main>
  );
}
