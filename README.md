# YES Party Commerce

Este proyecto es el resultado final del curso de REACTJS de CoderHouse, el mismo fue creado con Create React App.
YES Party, es una tienda de productos de Cotillón de manufactura artesanal.
Esta tienda permite al cliente mostrar sus productos y realizar las órdenes de compras con sus respectivas cantidades.
Se utiliza una SPA, creada con ReactJS, en cuanto a al backend está realizada en Firebase, donde se encuentra alojada la base de datos de Productos.

## Funcionalidad del proyecto
![image](https://github.com/mperezbazan/yesparty-martinperezbazan/blob/master/YESParty-mperezbazan.gif)
Los productos están divididos por categorías, al seleccionar la categoría se mostrarán solamente los productos cargados con dicha categoría.
Se encuentra disponible un buscador, que permite realizar la búsqueda de productos (Se realiza un filtrado de productos en los productos mostrados).
Al hacer click en cualquier producto se envía a un detalle del item, que permite seleccionar la cantidad que se desea comprar, y contiene un botón para poder adicionarlo al carrito de compras.
Al momento de finalizar la compra, se muestra un detalle de todos los productos seleccionados y el total de la compra.
Para poder realizar el pago de la compra se solicitan los datos del cliente (Nombre, teléfono y correo electronico), para poder generar la orden de compra y mostrarle al cliente el número único de su compra.

## Instalación
Para la instalación del sistema se debe realizar lo siguiente:

Se debe clonar el repositorio:
`git clone https://github.com/mperezbazan/yesparty-martinperezbazan.git`

Se debe instalar las dependecias:
`npm install`

Se debe iniciar la aplicacion:
`npm start`



## Librerías Utilizadas

### `Material UI`

Se utilizan componentes de MUI v5.9.3 para 

### `React-Router-Dom`

Se utiliza react-router-dom para proveer la navegabilidad del sitio

### `react-phone-input-2`

Se utiliza para el formateo de N° telefónicos en los formularios

### `Firebase`

Se utiliza de backend para el alojamiento de Productos, Categorias y Ordenes

