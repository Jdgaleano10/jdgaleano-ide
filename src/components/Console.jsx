import './Console.css'

export default function Console({ output }) {
  return (
    <div className="console">
      {output.length === 0 ? (
        <div className="console-empty">
          <p>Ejecuta el código para ver los resultados...</p>
        </div>
      ) : (
        <div className="console-output">
          {output.map((line, idx) => (
            <div key={idx} className="console-line">
              <span className="console-chevron">&gt;</span>
              <span>{line}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
