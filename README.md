Proyecto Final – Sistema de Gestión de Usuarios

Este proyecto es una aplicación web dividida en dos módulos principales: frontend y backend. El frontend está desarrollado en Angular y el backend en Express, comunicándose mediante servicios HTTP con endpoints RESTful para gestionar usuarios, autenticación y visualización de datos.

La aplicación permite navegar entre distintas vistas como Inicio, Registro/Login y Perfil, utilizando el enrutamiento de Angular con <router-outlet>. Incluye formularios reactivos para capturar datos de los usuarios, con validaciones básicas como campos requeridos, formato de correo y contraseñas, y envía la información al backend mostrando mensajes de éxito o error según corresponda. La autenticación se gestiona mediante tokens que se guardan en localStorage, permitiendo proteger rutas privadas mediante un AuthGuard y recuperar la información del usuario al recargar la aplicación.

El frontend cuenta con componentes personalizados como Navbar, Registro, Login, Perfil y Home, y un servicio que gestiona la comunicación con el backend mediante HttpClient. Los datos se muestran dinámicamente en la interfaz utilizando *ngFor en tablas o tarjetas, facilitando la interacción y el manejo de la información del usuario.

Este proyecto se encuentra completamente en GitHub, con las carpetas del frontend y backend incluidas en el repositorio. La publicación en plataformas externas no se realizó, ya que era opcional. El código está organizado y listo para ejecutarse localmente siguiendo las instrucciones de cada módulo.
