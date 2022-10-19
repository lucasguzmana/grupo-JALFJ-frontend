# grupo-JALFJ-frontend

Reglas de negocio de Somking Monkeys:


Cuando uno ingresa a la App se le presentan 3 opciones de ingreso, una como administrador, otra como usuario y otra como invitado. Además, durante toda la navegación habrá un NavBar que permitirá navegar entre las distintas secciones de la App. En ella se pueden ver 4 opciones: Home, About, About Us y Contact. La primera opción lo llevara al landing page, la segunda a una sección donde se habla de la App, la tercera a una sección donde se habla de los desarrolladores y la última a una sección donde se puede contactar con los desarrolladores. Adicionalmente, en el NavBar tambien hay 2 botones, uno de cerrar sesión y otro de darkmode, sin embargo para esta entrega solo llevarán al landing page. Por ultimo, en toda pagina habrá un boton para volver atras.

Cuando uno ingresa como administrador entra directo a la interfaz de administrador, donde se puede elegir entre todos los modelos y verlo en detalle, donde se pueden ver los parametros, los resultados o eliminarlo mediante los botones que hay en las siguentes secciones. Además, se puede acceder a una lista de los usuarios registrados, donde se puede ver su nombre, password, email y telefono. En ella se pueden eliminar los usuarios mediante un boton (con excepcion del administrador).Por ultimo se puede crear un modelo, llenando los campos que se piden al clickear crear modelo.

Cuando uno ingresa como usuario lo rediccionara a una interfaz de inicio de sesión/registro, sin embargo esta es solo visual y no está implementada, por lo que existe un boton llamado "interfaz user" que lo llevara directo a la interfaz de usuario. En ella se pueden ver los modelos creados por el usuario que ingreso (como aún no esta implementado el log in por defecto se ingresa como el usuario de id = 1, pero uno puede cambiar esto desde la URL del navegador si es que ha añadido nuevos usuarios manuelmente a la base de datos). Al abrir la lista de modelos uno puede ver el detalle, los resultados o eliminarlos si desea. Por otra parte, se puede crear un modelo, llenando los campos que se piden al clickear crear modelo.

Cuando uno ingresa como invitado entra directo a la interfaz de invitado, donde podrá ver los modelos creados por los usuarios y sus resultados, pero no podrá eliminarlos.

