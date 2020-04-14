## Inicializar proyecto con REACT

(para numerar se usa N. )
1. Crear un repositorio en GitHub
2. Clonar el repositorio a la pc
3. Abrir el repositorio en VisualStudioCode
4. Abrir nueva terminal y colocar el siguiente código npx create-react-app 
5. Posicionarnos en la carpeta en la cual se guardo el proyecto. cd nombre, si ya se encuentra en la carpeta entonces saltamos este paso.
6. y ejecutar el siguiente código `npm start`

Una vez hecho esto aparecera en el navegador el template de react.

### `Carpetas descargadas`

El archivo Readme es solo documentación, es este archivo.
Archivo Package json, nos lista las dependencias y los scripts que podemos ejecutar.
Archivo gitignore, es el control de versiones en git.
Carpeta node modules, es de java script y todo su código esta ahí, no es necesario tocarla.

Public, archivosrelacionados con HTML, encontramos un index.html en la parte del div id="root" se mmonta la app de react

Dentro de la carpeta src se encuentran los archivo css y javaScript, dentro del archivo index.js tenemos código de react.

En index.js se van a importar react y react-dom, también el archivo index.css que esta dentro de la misma carpeta, solo se encarga de arrancar la app.

La app se encuentra en app.js
Es un jsx, que es un archivo js en el cual se tiene etiquetas html.

### `index.js`
Archivo principal en donde se encuentra el código de react, aquí se importan los archivos que trabajan con react.
De esta forma se manda a llamar (se importa) la biblioteca de react:
```
import React from 'react';
```
Este método pinta la interfaz en la pantalla, es decir App que es el nombre del componente se va a pintar en el id root que se encuentra en un div de un html.
```
ReactDom.render(<App/>, document.getElementById ('root'));
```

### `App.js`
En este archivo se encuentra la aplicación o componente.
Se habla de un componente y hay que importarlo

Qué significa className, se usa para referirse a una clase de css y es para no confundirla con la clase del componente. 

```
class //Representa un objeto
render //cada componente tiene un método llamado render
return // retorna la interfaz de html
{}  // Sirve para interpretar código JavaScript dentro de un componente y así  agregar promps.
```
**Componente**
Un componente se crea de la siguiente forma:
```
class NombreDelComponente extends component{
    render(){
        return(

        )
    }
}
export default NombreDelComponente
```

