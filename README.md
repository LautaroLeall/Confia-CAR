# 🚗 Confia-Car

Aplicación de reservas de autos desarrollada en ReactJS. Permite a los usuarios explorar una variedad de vehículos, ver los detalles de cada uno y realizar reservas que se almacenan localmente. Pensada con una experiencia visual atractiva, lógica organizada y un flujo de navegación fluido.

---

## 🎯 Funcionalidades principales

✅ Carrusel automático de autos con animaciones 3D  
✅ Detalle completo de cada auto al hacer clic en una card  
✅ Opción de “Reservar Ahora” con notificación por SweetAlert  
✅ Las reservas se almacenan en `localStorage` y se pueden visualizar en `/myBookings`  
✅ Página de reservas con mini cards de cada vehículo reservado  
✅ Funcionalidad para eliminar una reserva con confirmación  
✅ Enrutamiento completo con React Router  
✅ Componentes organizados, estilizados con Bootstrap y CSS modular

---

## 🛠️ Tecnologías Usadas

- ⚛️ ReactJS (con Vite)
- 🎯 HTML5 + CSS3
- 💅 Bootstrap 5
- 💥 SweetAlert2
- 🔁 React Router DOM
- 🎣 React Hooks (`useState`, `useEffect`, `useContext`)
- 💾 Almacenamiento local con `localStorage`
- 📦 Context API para manejar reservas globalmente

---

## 📁 Estructura del Proyecto

```
CONFIA-CAR/
├── public/
├── src/
│ ├── api/              # Datos Simulados de Autos
│ │ └── carsData.js
│ ├── assets/           # Imágenes/RecursosEstáticos
│ ├── components/       # Componentes Organizados en Carpetas
│ │ ├── Background/
│ │ ├── CarDetail/
│ │ ├── Cars/
│ │ ├── Contact/
│ │ ├── Footer/
│ │ ├── Hero/
│ │ ├── Home/
│ │ ├── MyBooks/
│ │ └── NavBar/
│ ├── context/          # Contexto para Gestionar Reservas
│ │ ├── BookingContext.js
│ │ └── BookingProvider.jsx
│ ├── routes/           # Definición de Rutas con React Router
│ │ └── routes.jsx
│ ├── App.jsx           # Componente raíz
│ ├── main.jsx          # Punto de entrada
│ └── index.css         # Estilos globales
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

---

## 🧠 Consideraciones Técnicas

- Se utiliza `Context API` para compartir el estado de reservas entre componentes.
- Cada reserva se guarda en `localStorage` para mantener persistencia entre sesiones.
- Los estilos están desacoplados por componente, dentro de su carpeta correspondiente.
- El carrusel y la navegación se manejan de forma declarativa con componentes funcionales.
- Las reservas pueden eliminarse individualmente con confirmación usando SweetAlert2.

---

## ⚙️ Instalación y ejecución

[![Probar Confia-Car](https://img.shields.io/badge/Probar%20Confia--Car-%236c757d?style=for-the-badge&logo=netlify&logoColor=white)](https://confia-car-renta.netlify.app/)

```bash
# Cloná el repositorio
git clone https://github.com/TuUsuario/Confia-Car.git

# Ingresá al directorio
cd Confia-Car

# Instalá las dependencias
npm install

# Iniciá el servidor de desarrollo
npm run dev
```
