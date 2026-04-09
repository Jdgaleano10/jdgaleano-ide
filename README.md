# IDE en la Nube 🚀

Un IDE moderno en la nube similar a Replit, para escribir y ejecutar código JavaScript directamente desde el navegador sin necesidad de instalar nada.

## Características

✨ **Editor de Código** - Interfaz limpia y profesional
⚡ **Ejecución en Tiempo Real** - Ejecuta JavaScript al instante
🌙 **Modo Oscuro/Claro** - Alterna entre temas
📱 **Responsivo** - Funciona en cualquier dispositivo
🎨 **Moderno** - Construido con React y Vite

## Tecnologías

- **React 18** - Framework UI
- **Vite** - Build tool rápido
- **Tailwind CSS** - Estilos modernos
- **GitHub Pages** - Deploy automático

## Instalación Local

```bash
# Clonar repositorio
git clone https://github.com/Jdgaleano10/jdgaleano-ide.git
cd jdgaleano-ide

# Instalar dependencias
npm install

# Ejecutar en desarrollo
npm run dev

# Compilar para producción
npm run build
```

## Uso

1. Escribe tu código JavaScript en el editor
2. Haz clic en "▶️ Ejecutar" para correr el código
3. Mira los resultados en la consola

## Estructura del Proyecto

```
jdgaleano-ide/
├── src/
│   ├── components/
│   │   ├── Editor.jsx
│   │   ├── Editor.css
│   │   ├── Console.jsx
│   │   └── Console.css
│   ├── App.jsx
│   ├── App.css
│   └── main.jsx
├── .github/
│   └── workflows/
│       └── deploy.yml
├── index.html
├── vite.config.js
├── tailwind.config.js
├── package.json
└── README.md
```

## Deploy a GitHub Pages

El proyecto se despliega automáticamente cuando haces push a la rama `main`.

URL: `https://Jdgaleano10.github.io/jdgaleano-ide/`

## License

MIT

---

**Creado por JDGaleano** 👨‍💻
