import './Editor.css'

export default function Editor({ code, setCode }) {
  return (
    <textarea
      className="editor"
      value={code}
      onChange={(e) => setCode(e.target.value)}
      placeholder="Escribe tu código aquí..."
      spellCheck="false"
    />
  )
}
