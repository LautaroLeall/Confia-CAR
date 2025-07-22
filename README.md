# 🚗 Confia-Car

Aplicación web de alquiler de autos desarrollada en ReactJS. Permite a los usuarios explorar vehículos disponibles, ver sus detalles, realizar reservas, simular pagos y gestionar sus autos reservados/pagados. Todo esto con una experiencia visual atractiva, fluida y completamente responsive.

---

## 🎯 Funcionalidades Principales

✅ Carrusel automático de autos con animaciones  
✅ Detalles completos de cada vehículo al hacer clic  
✅ Sistema de autenticación simulado (Registro, Login y Logout)  
✅ Modal de reserva con validación de fechas y confirmación visual  
✅ Reservas almacenadas en `localStorage`, visibles en `/myBookings`  
✅ Modal de pago visual (simulación) con validaciones realistas e íconos  
✅ Pagos simulados por usuario registrado → visibles en `/myPayments`  
✅ Navbar dinámico según el estado del usuario (logueado o no)  
✅ Rutas protegidas (sólo accesibles para usuarios logueados)  
✅ SweetAlert2 para notificaciones animadas y confirmaciones  
✅ Totalmente responsive (celular, tablet y escritorio)

---

## 🔐 Autenticación Simulada

- Registro de nuevos usuarios (guardado en `localStorage`)
- Login persistente con verificación por email y contraseña
- Logout inmediato con limpieza de sesión
- Control de visibilidad para ruta protegida (`/myPayments`)
- Cada usuario ve solamente sus autos reservados y pagados

---

## 💸 Proceso de Reserva y Pago

1. El usuario visualiza el auto y hace clic en **"Reservar Ahora"**
2. Se abre un modal para seleccionar fechas válidas
3. Si inicia sesión, puede hacer clic en **"Pagar"**
4. Se abre un modal con inputs simulados de tarjeta (número, vencimiento y CVV)
5. Validación visual en tiempo real y confirmación con animación (`SweetAlert2`)
6. El auto pasa a la sección **"Mis Pagos"**, separado por usuario

---

## 🛠️ Tecnologías Usadas

- ⚛️ ReactJS (con Vite)
- 🎯 HTML5 + CSS3
- 💅 Bootstrap 5 (con media queries personalizados)
- 💥 SweetAlert2
- 🔁 React Router DOM
- 🎣 React Hooks (`useState`, `useEffect`, `useContext`)
- 💾 `localStorage` (persistencia de usuarios, reservas y pagos)
- 📦 Context API (manejo global de estado: Auth y Booking)
- 🌐 react-icons (íconos visuales en formularios y UI)

---

## 📁 Estructura del Proyecto

```
CONFIA-CAR/
├── public/
├── src/
│ ├── api/                  # Datos simulados de autos
│ │ └── carsData.js
│ ├── assets/               # Imágenes y recursos estáticos
│ ├── components/
│ │ ├── Auth/               # Login y Registro
│ │ ├── Background/         # Fondo visual
│ │ ├── BookingModal/       # Modal para reservar autos
│ │ ├── CarDetail/          # Página de detalle de cada auto
│ │ ├── Cars/               # Carrusel y Cards
│ │ ├── Contact/            # Página de contacto
│ │ ├── Footer/
│ │ ├── Hero/               # Sección principal con CTA
│ │ ├── Home/
│ │ ├── MyBooks/            # Página con autos reservados
│ │ ├── MyPayments/         # Página con autos pagados (solo usuarios logueados)
│ │ ├── NavBar/
│ │ ├── NotFound/
│ │ └── PaymentModal/       # Modal de simulación de pago
│ ├── container/            # Contenedor de la página principal
│ ├── context/              # AuthContext y BookingContext
│ ├── routes/               # Definición de rutas protegidas y públicas
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── index.html
```

---

## 🚀 Probar Confia-Car

[![Probar Confia-Car](https://img.shields.io/badge/Probar%20Confia--Car-%236c757d?style=for-the-badge&logo=netlify&logoColor=white)](https://confia-car-renta.netlify.app/)

---

## ⚙️ Instalación y ejecución local

```bash
# Clonar el repositorio
git clone https://github.com/TuUsuario/Confia-Car.git

# Ingresar al directorio
cd Confia-Car

# Instalar dependencias
npm install

# Ejecutar servidor de desarrollo
npm run dev
```
