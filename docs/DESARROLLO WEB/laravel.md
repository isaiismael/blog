---
sidebar_label: "Laravel"
sidebar_position: 1
---

# **GUÍA DE LARAVEL** 

## 📦 **PROGRAMAS A UTILIZAR**

1. **[Composer](https://getcomposer.org/)**  
   Nos permite declarar las bibliotecas que necesitaremos en nuestros proyectos y de cuáles librerías depende. Composer nos ayudará a instalar y actualizar de una manera sencilla y práctica.

2. **[Git](https://git-scm.com/downloads)**  
   Es un programa que nos permite lo siguiente:
   - Ejecutar comandos en la terminal.
   - Subir nuestro proyecto a un repositorio.
   - Y más.

3. **[Node.js](https://nodejs.org/es/download/)**  
   Node.js es un entorno en tiempo de ejecución que nos permite ejecutar comandos en el servidor.

4. **[Visual Studio Code](https://code.visualstudio.com/download)**  
   Visual Studio Code es un editor de código fuente desarrollado por Microsoft.

5. **[MySQL](https://dev.mysql.com/downloads/workbench/)**  
   MySQL (My Structured Query Language) es un gestor de base de datos que nos permite almacenar y administrar información.

6. **[XAMPP](https://www.apachefriends.org/es/download.html)**  
   XAMPP es un servidor HTTP de software libre que incluye Apache, MariaDB/MySQL, PHP, y Perl, y está disponible para cualquier plataforma.

7. **[Navicat](https://www.navicat.com/es/download/navicat-premium)**  
   Es un programa que facilita la administración de bases de datos.

---

## 📝 **REQUISITOS BÁSICOS**

- Conocimiento en **PHP**
- Conocimiento en **HTML**
- Conocimiento en **CSS**
- Conocimiento en **JavaScript** básico
- **Laravel 8**: PHP >= 7.3
- **Laravel 9**: PHP >= 8

---

## 💡 **CONCEPTOS BÁSICOS**

- **Laravel**: Es un framework de código abierto para desarrollar aplicaciones web en PHP. Laravel maneja una estructura de diseño **MVC**.
  
- **[Blade](#)**: Blade es un motor de plantillas, sencillo pero potente.

---

## 🔧 **INSTALACIÓN DE LARAVEL**

1. Ejecuta el siguiente comando para instalar Laravel globalmente:

    ```bash
    composer global require laravel/installer
    ```

2. Ver las versiones de los programas utilizados:

    ```bash
    php artisan --version   # Versión de Laravel en el proyecto
    node -v                 # Versión de Node.js
    php -v                  # Versión de PHP
    laravel -v              # Versión de Laravel
    npm -v                  # Versión de npm
    ```

---

## 📁 **ESTRUCTURA DE CARPETAS**

![Estructura de carpetas](/public/cursos/laravel/estructura-carpetas.JPG)

---

## 🖨️ **IMPRIMIR**

Si deseas imprimir un valor en tu aplicación Laravel:

```html
<h1>{ $mensaje }</h1>
<!-- Vue.js agrega el @ -->
<h1>@{{ mensaje }}</h1>
```

---

## 🌐 **CÓMO CREAR UN DOMINIO LOCAL**

1. En el archivo **C:\Windows\System32\drivers\etc\hosts**, agrega lo siguiente:

    ```plaintext
    127.0.0.1    ejemplo.pe
    ```

2. En el archivo **C:\XAMPP\apache\conf\extra\httpd-vhosts.conf**, agrega lo siguiente:

    ```plaintext
    <VirtualHost *:8080>
        DocumentRoot "C:\xampp\htdocs\PROYECTOS-LARAVEL\computacion\public"
        ServerName ejemplo.pe
        <Directory "C:\xampp\htdocs\PROYECTOS-LARAVEL\computacion\public">
            Options All
            AllowOverride All
            Require all granted
        </Directory>
    </VirtualHost>
    ```

3. **Reinicia el servidor Apache** para que los cambios tengan efecto.

---

## 🚀 CREAR UN PROYECTO

### Crear un nuevo proyecto Laravel
```php
laravel new blog  // Método 1 (Debes tener instalado Laravel)
composer create-project --prefer-dist laravel/laravel:^7.0 blog  // Método 2 (Vía Composer)
```

### Configurar el proyecto para el desarrollo
```php
debug = TRUE
'timezone' => 'America/Lima'
'timezone' => 'locale' => 'es'
[Descargar idioma español](https://github.com/Laraveles/spanish/tree/master/resources/lang)
COPIAR EL IDIOMA EN: \resources\lang\
```


