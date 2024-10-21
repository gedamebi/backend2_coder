<h1 align="center">Curso Backend II</h1><br><br>

## Descripción 
Entrega proyecto final. Se profundizará sobre los roles de los usuarios, las autorizaciones y sobre la lógica de compra.
***

---
### DATOS DE LOGIN DE PRUEBA

    USER    urugerman@gmail.com   123456
    ADMIN   g.medina@macrum.com.uy  123456

    Igual se puede generar nuevos usuarios en el / de handlebars. admin solo por postman
---

<br>
<h2 align="center">Lenguaje y Herramientas</h2>
<br><br>
<p align="center"> 
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="Javascript" width="90" height="90"/></a> 
    <a href="https://nodejs.org/en" target="_blank"> <img src="https://github.com/devicons/devicon/blob/master/icons/nodejs/nodejs-original-wordmark.svg" alt="Boostrap" width="90" height="90"/></a> 
</p>
<br>
<p align="center"> 
    <a href="https://expressjs.com/" target="_blank"> <img src="https://github.com/devicons/devicon/blob/master/icons/express/express-original-wordmark.svg" alt="React" width="90" height="90"/></a>
    <a href="https://www.npmjs.com/" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/npm/npm-original-wordmark.svg" alt="npm" width="90" height="90"/></a>
</p>
<br><br>

## Funcionalidades 

- Respecto al commit anterior de este repo, lo integro al proyecto final del modulo 1

- Crear un modelo User con campos especificados

- Encriptar la contraseña del usuario mediante el paquete bcrypt (Utilizar el método “hashSync”).

- Desarrollar las estrategias de Passport para que funcionen con este modelo de usuarios
 
- Implementar un sistema de login del usuario que trabaje con jwt.

- Desarrollar una estrategia “current” para extraer la cookie que contiene el token y con dicho token obtener el usuario asociado. En caso de tener el token, devolver al usuario asociado al token, caso contrario devolver un error de passport, utilizar un extractor de cookie.

- Agregar al router /api/sessions/ la ruta /current, la cual validará al usuario logueado y devolverá en una respuesta sus datos (Asociados al JWT).

- Profesionalizar el servidor desarrollado en la primera preentrega

- Aplicar una arquitectura profesional para nuestro servidor

- Aplicar prácticas como patrones de diseño, mailing, variables de entorno. etc.

- Modificar nuestra capa de persistencia para aplicar los conceptos de DAO y DTO.

- Implementar el patrón Repository para trabajar con el DAO en la lógica de negocio.

- Modificar la ruta  /current Para evitar enviar información sensible, enviar un DTO del usuario sólo con la información necesaria.

- Realizar un middleware que pueda trabajar en conjunto con la estrategia “current” para hacer un sistema de autorización y delimitar el acceso a dichos endpoints:
    - Sólo el administrador puede crear, actualizar y eliminar productos.
    - Sólo el usuario puede agregar productos a su carrito.

- Crear un modelo Ticket el cual contará con todas las formalizaciones de la compra. Éste contará con los campos
    - Id (autogenerado por mongo)
    - code: String debe autogenerarse y ser único
    - purchase_datetime: Deberá guardar la fecha y hora exacta en la cual se formalizó la compra (básicamente es un created_at)
    - amount: Number, total de la compra.
    - purchaser: String, contendrá el correo del usuario asociado al carrito.
    
- Implementar, en el router de carts, la ruta /:cid/purchase, la cual permitirá finalizar el proceso de compra de dicho carrito.
    - La compra debe corroborar el stock del producto al momento de finalizarse
    - Si el producto tiene suficiente stock para la cantidad indicada en el producto del carrito, entonces restarlo del stock del producto y continuar.
    - Si el producto no tiene suficiente stock para la cantidad indicada en el producto del carrito, entonces no agregar el producto al proceso de compra. 
    - Al final, utilizar el servicio de Tickets para poder generar un ticket con los datos de la compra.
    - En caso de existir una compra no completada, devolver el arreglo con los ids de los productos que no pudieron procesarse.
    - Una vez finalizada la compra, el carrito asociado al usuario que compró deberá contener sólo los productos que no pudieron comprarse. Es decir, se filtran los que sí se compraron y se quedan aquellos que no tenían disponibilidad.


***

---
<br><br>

# Proyecto final NodeJS (Germán Medina)

Dependencias incluidas en el proyecto:

  - [express](https://expressjs.com/)
  - [express-handlebars](https://www.npmjs.com/package/express-handlebars)
  - [multer](https://www.npmjs.com/package/multer)
  - [uuid](https://www.npmjs.com/package/uuid)
  - [mongoose-paginate-v2](https://www.npmjs.com/package/mongoose-paginate-v2)
  - [socket.io](https://www.npmjs.com/package/socket.io)
  - [moment](https://www.npmjs.com/package/moment)
  - [nodemon](https://www.npmjs.com/package/nodemon)
  - [bcrypt](https://www.npmjs.com/package/bcrypt)
  - [cookie-parser](https://www.npmjs.com/package/cookie-parser)
  - [dotenv](https://www.npmjs.com/package/dotenv)
  - [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken)
  - [mongoose](https://www.npmjs.com/package/mongoose?azure-portal=true)
  - [passport](https://www.npmjs.com/package/passport/v/0.7.0)
  - [passport-jwt](https://www.npmjs.com/package/passport-jwt)


## Ejecturar los siguientes comandos dentro del directorio luego de realizar el clon

```
  - npm install
  - npm run dev
```

<br><br>

---
### Autor: Germán Medina
---