Proyecto Final – Frontend (Angular)

Este módulo corresponde al frontend del Proyecto Final, desarrollado con Angular. Está conectado al backend Express mediante servicios HTTP para gestionar usuarios, autenticación y visualización de datos.

Para iniciar el proyecto, primero clona el repositorio si aún no lo tienes localmente y accede a la carpeta del frontend. Luego instala las dependencias con npm install y ejecuta el servidor de desarrollo usando ng serve. Para verificar que funciona, abre el navegador y entra a http://localhost:4200 . Deberías ver la página de inicio de tu aplicación Angular.

El proyecto cuenta con varios componentes personalizados, entre ellos NavbarComponent, que corresponde a la barra de navegación principal; RegistroComponent, que es un formulario reactivo para registrar nuevos usuarios; LoginComponent, que permite iniciar sesión con validaciones; PerfilComponent, que es una vista protegida para el usuario autenticado; y HomeComponent, que corresponde a la página de inicio del sistema. Además, se implementó un servicio de conexión HTTP llamado usuarios.service.ts, encargado de enviar y recibir datos al backend mediante HttpClient.

Se usaron formularios reactivos con validaciones básicas, incluyendo campos requeridos, validación de formato de correo y contraseña con longitud mínima. Los mensajes de error se muestran de forma dinámica en el HTML, y los datos se envían al backend utilizando this.http.post(...), con notificación de éxito o error según corresponda.

Al iniciar sesión, el token JWT o los datos del usuario se guardan en localStorage y el sistema los recupera al volver a cargar la aplicación. Se implementó un AuthGuard para proteger rutas privadas como /perfil.

El frontend se comunica con el backend mediante endpoints RESTful usando HttpClient, permitiendo crear usuarios, iniciar sesión, obtener información de perfil y mostrar datos en la interfaz usando *ngFor en tarjetas o tablas. Un ejemplo de conexión es this.http.post('http://localhost:3000/login ', { email, password }).

El enrutamiento en Angular está configurado con RouterModule en app.routes.ts, con rutas como / para Home, /login para el inicio de sesión, /registro para el registro de usuario y /perfil para el perfil del usuario, que es una ruta protegida. Se utiliza para mostrar dinámicamente las vistas.

El proyecto se puede publicar opcionalmente en plataformas gratuitas como Netlify, Firebase Hosting o GitHub Pages. Se recomienda verificar que el backend esté corriendo antes de iniciar el frontend, asegurarse de que las URLs del servicio apunten correctamente a http://localhost:3000 o al dominio correspondiente, usar ng build para generar la versión de producción y mantener el código organizado y comentado