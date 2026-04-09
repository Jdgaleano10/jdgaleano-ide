import { useState } from 'react'
import Editor from './components/Editor'
import Console from './components/Console'
import './App.css'

export default function App() {
  const [code, setCode] = useState(`// Bienvenido al IDE en la Nube
// Escribe tu código aquí

console.log('¡Hola, mundo!')

function suma(a, b) {
  return a + b
}

console.log(suma(5, 3))`)

  const [output, setOutput] = useState([])
  const [theme, setTheme] = useState('dark')

  const runCode = () => {
    setOutput([])
    const logs = []
    
    const customConsole = {
      log: (...args) => logs.push(args.map(arg => String(arg)).join(' ')),
      error: (...args) => logs.push('❌ Error: ' + args.map(arg => String(arg)).join(' ')),
      warn: (...args) => logs.push('⚠️ Advertencia: ' + args.map(arg => String(arg)).join(' ')),
    }

    try {
      const func = new Function('console', code)
      func(customConsole)
    } catch (error) {
      logs.push(`❌ Error: ${error.message}`)
    }

    setOutput(logs)
  }

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <div className="header-content">
          <h1>🚀 IDE en la Nube</h1>
          <button 
            className="theme-toggle"
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </header>

      <div className="app-container">
        <div className="editor-section">
          <div className="section-header">
            <h2>📝 Editor</h2>
            <button className="run-btn" onClick={runCode}>
              ▶️ Ejecutar
            </button>
          </div>
          <Editor code={code} setCode={setCode} />
        </div>

        <div className="console-section">
          <h2>📊 Consola</h2>
          <Console output={output} />
        </div>
      </div>
    </div>
  )
}
