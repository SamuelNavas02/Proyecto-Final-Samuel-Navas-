Cómo iniciar el servidor

Clonar el repositorio (si aún no lo tienes localmente):

git clone https://github.com/SamuelNavas02/Proyecto-Final-Samuel-Navas-
cd "Proyecto-Final-Samuel-Navas-/backend"


Instalar dependencias:

npm install


Configurar las variables de entorno:

Crea un archivo llamado .env en la carpeta backend y agrega:

PORT=3000
MONGODB_URI=tu_URI_de_MongoDB
JWT_SECRET=tu_secreto_para_autenticacion   # si usas JWT


Iniciar MongoDB (si estás usando MongoDB local):

mongod


Ejecutar el servidor:

node app.js


Verificar que funciona:

Abre un navegador o Postman y entra a:

http://localhost:3000


Deberías ver el mensaje:

¡Servidor funcionando correctamente!


y, si tu código lo tiene implementado, también el total de usuarios y publicaciones.

Probar los endpoints:

POST /usuarios → crear un usuario, enviando en el body: { "nombre": "...", "email": "...", "password": "..." }

POST /login → iniciar sesión, enviando { "email": "...", "password": "..." }, devuelve token si usas JWT

GET /usuarios → listar usuarios

PUT /usuarios/:id → actualizar usuario, enviando los campos a modificar en el body

Para conectarse desde Angular, usar la URL del backend local:

this.http.post('http://localhost:3000/login', { email, password });


Asegúrate de que el backend esté corriendo antes de iniciar el frontend