# 🎁 Amigo Secreto

Una aplicación web interactiva para organizar sorteos de amigo secreto de manera fácil y divertida.

## 📋 Descripción

**Amigo Secreto** es una aplicación web que permite organizar sorteos para intercambios de regalos entre amigos, familiares o compañeros de trabajo. Los usuarios pueden agregar nombres a una lista y realizar un sorteo aleatorio para seleccionar quién será el amigo secreto.

## ✨ Características

- **Agregar participantes**: Añade nombres
- **Sorteo aleatorio**: Selección completamente aleatoria del amigo secreto

## 🚀 Funcionalidades

### Agregar Amigos
- Escribe el nombre en el campo de texto
- Haz clic en "Añadir" para agregarlo a la lista
- Los nombres se muestran dinámicamente en pantalla

### Realizar Sorteo
- Haz clic en el botón "Sortear amigo" con el ícono de play
- Se selecciona aleatoriamente un participante de la lista
- El resultado se muestra claramente en pantalla

### Validaciones
- No se pueden agregar nombres vacíos
- Alertas informativas para guiar al usuario

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica del contenido
- **CSS3**: Estilos modernos con variables CSS y Flexbox
- **JavaScript**: Lógica de la aplicación y manipulación del DOM


## 📁 Estructura del Proyecto

```
challenge-amigo-secreto/
│
├── index.html          # Página principal
├── style.css           # Estilos de la aplicación
├── app.js              # Lógica de JavaScript
├── README.md           # Documentación del proyecto
│
└── assets/
    ├── amigo-secreto.png       # Imagen principal
    └── play_circle_outline.png # Ícono del botón sortear
```

## 🎯 Cómo Usar

1. **Abrir la aplicación**: Abre el archivo `index.html` en tu navegador web
2. **Agregar participantes**:
   - Escribe un nombre en el campo de texto
   - Haz clic en "Añadir"
   - Repite para todos los participantes
3. **Realizar sorteo**:
   - Una vez que tengas al menos un participante
   - Haz clic en "Sortear amigo"
   - ¡Descubre quién es el amigo secreto seleccionado!

## 💻 Instalación y Ejecución

### Opción 1: Descarga directa
1. Descarga o clona este repositorio
2. Abre el archivo `index.html` en tu navegador preferido

### Opción 2: Servidor local
```bash
# Si tienes Python instalado
python -m http.server 8000

# Si tienes Node.js y npx
npx serve .

# Si tienes Live Server extension en VS Code
# Haz clic derecho en index.html > "Open with Live Server"
```

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Haz fork del proyecto
2. Crea una nueva rama (`git checkout -b feature/nueva-funcionalidad`)
3. Realiza tus cambios y haz commit (`git commit -m 'Agregar nueva funcionalidad'`)
4. Haz push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request


## 👨‍💻 Autor

**DemoCam** - [GitHub](https://github.com/DemoCam)

---

⭐ ¡Si te gustó este proyecto, no olvides darle una estrella!

## 🏷️ Etiquetas

`javascript` `html` `css` `web-development` `frontend` `amigo-secreto` `sorteo` `gift-exchange`