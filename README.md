# grupo-JALFJ-frontend

Cambios respecto a la E0:
- Landing Page: lo renovamos casi al completo, pareció mas logico dividir en distintas paginas las secciones de "about", "about us" y "log in", quedando esta ultima seccion como la landing page y las demás como elementos a los que se puede acceder con la navegation bar.

Los archivos estan ordenados por carpetas con nombres descriptivos, siendo los siguentes:

HTMLs:
- index.html
- interfaz_admin.html
- interfaz_guest.html
- interfaz_usuario.html
- about_us.html
- about.html
- modelos.html
- nuevo_modelo.html
- nuevo_usuario.html
- usuarios.html

CSSs:
- about_us.css
- about.css
- style.css

JSs:
- cambio_de_color.js

De todos los HTMLs, al unico que no se puede acceder navegando es a "nuevo_usuario.html", dado que aun no está implementado el log in, pero será para crear un nuevo usuario.

Las paginas para ver un modelo, crear uno y ver los usuarios aun no estan tan desarrolladas porque todavia no conocemos como lo implementaremos exactamente.

- Dark Mode: Como funcionalidad adicional de javascript, añadimos en la parte superior derecha de la Navbar, un boton "DM" que sirve para activar el darck mode de la pagina, cambiando el color de fondo y de letra de la pagina. Para ello, se añadio un archivo .js que contiene la funcion que cambia los colores de la pagina (va cambiando entre negro y blanco).
