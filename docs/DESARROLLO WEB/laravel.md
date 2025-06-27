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

## 📄 **GENERAR PDF CON DOMPDF**

[DOMPdf](https://github.com/barryvdh/laravel-dompdf) nos permite generar o convertir una pagina en PDF.

### PASO 1:

```php
composer require barryvdh/laravel-dompdf    //INSTALAMOS
php artisan make:controller PdfController   //CREAMOS UN CONTROLADOR
/* CREAMOS UNA VISTA */
```

### PASO 2: OPCIONAL

```php
Barryvdh\DomPDF\ServiceProvider::class,	->PEGAR ESTE COMANDO EN CONFIG/APP LIN:164
'PDF' => Barryvdh\DomPDF\Facade::class,	->PEGAR ESTE COMANDO EN CONFIG/APP LIN:233
```

### PASO 3: RUTA

```php
Route::get('ver-pdf',[PdfController::class,'index'])->name('pdf.index');
```

### PASO 4: EN EL CONTROLADOR

```php
namespace App\Http\Controllers;

use Barryvdh\DomPDF;
use Barryvdh\DomPDF\PDF;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PdfController extends Controller
{
    public function index()
    {
        /* METODO 1 */
        //$pdf = \App::make('dompdf.wrapper');
        //$pdf->loadHTML('<h1 style="color:red">Test</h1>');
        //return $pdf->stream();
        //return $pdf->download("nombre archivo.pdf");//DESCARGA AUTOMATICA DEL PDF

        /* METODO 2 */
        $datos = DB::select('select * from venta');
        $pdf = \App::make('dompdf.wrapper');
        //$pdf->setPaper('a4', 'landscape');//FORMATO HORIZONTAL
        $pdf->loadView('reportes.ventas', compact('datos', $datos));
        return $pdf->stream();
    }
}
```

### PASO 5: EN LA VISTA PREVIA

```html
<h1>ESTO ES LA VISTA EN PDF </h1>
@foreach ($datos as $item)
    <tr>
        <td>{{$item->cliente}} </td>                                    
    </tr>
@endforeach

<div style="page-break-after: always;"></div><!-- ESTO ES UN SALTO PAGINA -->

<h1>ESTO ES LA VISTA EN PDF </h1>
<table>
</table>
```

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

### Instalar Bootstrap
```bash
composer require laravel/ui
php artisan ui bootstrap  # Sin autentificación
php artisan ui bootstrap --auth  # Con autentificación
npm install
npm run dev
# Ojo: el servidor debe estar apagado
# Se ejecuta Laravel Mix
```

### Correr el servidor
```bash
php artisan serve
```

### Extensiones recomendadas para Visual Studio Code
```
Ayu
HTML Tag Wrapper
IntelliSense for CSS class names in HTML
Laravel Blade
Laravel Blade Formatter
Laravel Blade Snippets
Laravel Snippets
Live Server
Open in Browser
PHP Intelephense
PHP IntelliSense
Prettier-Code Formatter
px to rem
```

---

## 📊 **CREAR UN PROYECTO CON INFYOM**

1. **Descargar la plantilla**:
   [Descargar plantilla desde GitHub](https://github.com/InfyOmLabs/adminlte-generator/)

2. **Configuraciones en la plantilla**:
   ```bash
   # Copiar el archivo .envconf y renombrar como .env
   composer update
   php artisan key:generate
   ```

3. **CRUD Automático**:
   ```bash
   php artisan migrate  # Opcional
   php artisan infyom:scaffold Producto --fromTable --tableName=producto
   ```

4. **En el modelo**:
   ```php
   <?php
   //use SoftDeletes;
   protected $table = "usuario";
   protected $primaryKey = 'id_usuario';
   public $timestamps = false;
   ?>
   ```

5. **En las vistas**:
   ```
   Edit.blade.php  # Modificar el campo id
   Table.blade.php # Modificar el campo id
   ```

---

## 📝 **MODELOS**

Los modelos se utilizan para interactuar con nuestra base de datos. De esta manera podemos hacer cualquier clase de consulta a nuestra base de datos, por ejemplo: insertar, borrar, modificar y mostrar datos.

Los modelos se encuentran en `app/Models`.

### Crear un modelo
```bash
php artisan make:model Usuario
```

### Configurar el modelo
```php
<?php
public $table = "usuario";
public $primaryKey = "id_usuario";
public $timestamps = false;
protected $fillable = [
    'nombre',
    'apellido',
    'password',
    'correo',
];
?>
```

## 👁️ **VISTAS**

Las vistas son la parte pública que se van a mostrar. Las vistas deben tener un formato `.php` o `.blade.php`.

Las vistas se encuentran en `resources/views`.

---

## 🎮 **CONTROLADORES**

Los controladores son un mecanismo que nos permite agrupar la lógica de peticiones HTTP relacionadas y de esta forma organizar mejor nuestro código.

Los controladores se encuentran en `app/Http/Controllers`.

```bash
php artisan make:controller UsuarioController
php artisan make:controller UsuarioController -r  # Con métodos resource
```

---

## 📋 **REQUEST**

Los request en Laravel se utilizan para poder validar los campos del formulario.

Los request se encuentran en `app/Http/Requests`.

```bash
php artisan make:request UsuarioCrearRequest
```

### El método en el controlador
```php
<?php
public function store(RegistrarUsuarioRequest $request)
{                                            
}
?>
```

### Request en el mismo controlador
```php
<?php
$request->validate([
    'title' => 'required',
    'content' => 'required',
]);
?>
```

### Configuración del Request
```php
<?php
public function authorize()
{
    return true;
}
?>
```

### Métodos en Request
```php
public function rules()
{
    return [
        'nombre' => 'required',
        'foto'=>'image:jpg'
    ];
}

public function attributes()
{
    return [
        'nombre'=>'nombre completo'
    ];
}

public function messages()
{
    return [
        'nombre.required' => 'nombre del producto',
        'proveedor.required' => 'proveedor',
    ];
}
```

### Validaciones de formularios
```php
1-> required    // requerido
2-> max:10      // máximo 10 caracteres
3-> min:2       // mínimo 2 caracteres
4-> accepted    // aceptado
5-> date        // fecha
6-> file        // archivos
7-> email       // correo
8-> alpha       // solo letras
9-> alpha_dash  // letras y números, guiones y guiones bajos
10-> alpha_num  // letras y números
11-> numeric    // solo número y decimales
11.1-> numeric|gt:0  // números mayor a CERO > 0
12-> digits:2   // número de 2 dígitos
13-> digits_between:2,5     // número entre 2 y 5 dígitos
14-> email:rfc,dns  // correo válido
15-> ends_with:com,isai     // el campo debe terminar en "com" o en "isai"
16-> image      // imagen (jpeg, png, bmp, gif, svg, webp)
17-> integer    // número entero
18-> size       // debe ser de 10 caracteres
19-> string     // cadena de cualquier carácter
20-> exists     // App\Models\producto,nombre  # INGRESAR SOLO VALORES QUE ESTÉN REGISTRADOS EN LA BD DEL CAMPO NOMBRE
21-> unique     // App\Models\producto,correo  # INGRESAR SOLO VALORES ÚNICOS
22-> mimes:jpg,png  // el archivo debe ser tipo "jpg" o "png"
23-> starts_with:A-,COM     // el campo debe comenzar con "A-" o "COM"
```

### Mostrar errores de validación
```html
<input type="text" name="title" id="title">
@error('title')
    <p class="error-message">{{ $message }}</p>
@enderror
```

### Conservar valores anteriores en caso de error
```html
<form>
    <input name="title" value="{{ old('title') }}">
    <textarea name="content">{{ old('content',$valor) }}</textarea>  <!-- es utilizado en una actualización -->
    <select class="input input__select" name="tipo">
        <option value="">Seleccionar tipo de usuario...</option>
        @foreach ($sql as $item)
        <option {{old('tipo') == $item->id_tipo ? 'selected' : ''}} value="{{$item->id_tipo}}">{{$item->tipo}}</option>
        @endforeach
    </select>
</form>
```

---

## 📏 **RULES**

Los rules en Laravel se utilizan para poder personalizar las validaciones REQUEST.

Los rules se encuentran en `app/Rules`.

```bash
php artisan make:rule usuario/registrar/duplicidadUsuario
```

### El método en Rule
```php
<?php
public function passes($attribute, $value)
{
    /* validando duplicidad de usuario */
    $valUsuario = DB::select("select count(*) as total from usuario where usuario=? and estado=1", [
        $value
    ]);
    if ($valUsuario[0]->total > 0) {
        return false;
    }else{
        return true;
    }
}

public function message()
{
    return 'Este usuario ya existe';
}
?>
```

### Modificar esto en el Request
```php
<?php
use App\Rules\usuario\registrar\duplicidadUsuario;

public function rules()
{
    return [
        "tipo" => "required",
        "usuario" => ["required","alpha_num",new duplicidadUsuario()],
    ];
}
?>
```

---

## 📏 **RULES CON PARÁMETROS**

```bash
php artisan make:rule usuario/registrar/duplicidadUsuario
```

### Modificar esto en el Request
```php
<?php
use App\Rules\usuario\registrar\duplicidadUsuario;

public function rules()
{
    return [
        "tipo" => "required",
        "usuario" => ["required","alpha_num",new verificarUsuario(request()->id,request()->usuario)],
    ];
}
?>
```

### El método en Rule con parámetros
```php
<?php
public function __construct($id = 0, $usuario="")
{
    $this->id = $id;
    $this->usuario=$usuario;
}

public function passes($attribute, $value)
{
    $verificarUsuario = DB::select("select count(*) as total from usuario where usuario=? and id_usuario!=? and estado=1", [
        $value,
        $this->id
    ]);
    if ($verificarUsuario[0]->total > 0) {
        return false;
    } else {
        return true;
    }
}

public function message()
{
    return "El usuario $this->usuario ya existe.";
}
?>
```

---

## 🛣️ **ROUTES**

Los Routes o Rutas son un sistema que se encargan de manejar el flujo de solicitudes y respuestas, desde y hacia el cliente.

```php
<?php
// GET-POST-PUT-DELETE-PATCH
Route::get('curso-de-php',[PhpController::class,'index'])->name('php.index')->middleware('verified');
Route::get('curso-de-php-{id}',[PhpController::class,'index'])->name('php.index')->middleware('verified');

/* Comandos para ver la lista de Rutas creadas */
php artisan route:list                  // muestra la lista general de rutas creadas
php artisan route:list -v               // muestra las rutas creadas y el Middleware que se encarga de proteger
php artisan route:list --path=posts     // muestra solo las rutas que tiene la URI "posts"
php artisan route:list --except-vendor  // muestra solo las rutas creadas por el usuario(programador)
php artisan route:list --only-vendor    // muestra solo las rutas creadas por el propio sistema

// Ruta con parámetros opcionales
Route::get("/curso-{curso?}", function($curso="vacio"){
    return "Bienvenido al Curso $curso";
});

// Ruta con expresiones regulares
Route::get("/suma/{a}/{b}", function ($a, $b) {
    return "La suma es: " . $a + $b;
})->where(["a" => "[0-9]+", "b" => "[0-9]+"]);

// También se puede usar 
//->whereAlpha(["a", "b"]); acepta solo letras
//->whereNumber(["a", "b"]); acepta solo números
//->whereAlphaNumeric(["a", "b"]); acepta letras y números

/* Expresiones regulares GLOBALES
dentro de app/Providers/RouteServiceProvider */
public function boot()
{
    Route::pattern("id","[0-9]+");
    Route::pattern("id2","[0-9]+");
}
?>
```

---

## 🔒 **MIDDLEWARE PERSONALIZADO**

Los Middleware nos van a ser útiles para validar las rutas (tener un control de ROLES Y PERMISOS).

### Cómo crear un nuevo Middleware
```php
<?php
php artisan make:middleware ClienteMiddleware
?>
```

### Configurar la ruta
```php
<?php                                    
Route::resource("pagos", PagoController::class)->middleware(['verified', 'cliente']);
?>
```

### Configurar Kernel.php en app/http/kernel.php
```php
<?php                                    
'cliente' => \App\Http\Middleware\ClienteMiddleware::class,

// ASÍ TIENE QUE VER
protected $routeMiddleware = [
    'auth' => \App\Http\Middleware\Authenticate::class,
    'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
    'cache.headers' => \Illuminate\Http\Middleware\SetCacheHeaders::class,
    'can' => \Illuminate\Auth\Middleware\Authorize::class,
    'guest' => \App\Http\Middleware\RedirectIfAuthenticated::class,
    'password.confirm' => \Illuminate\Auth\Middleware\RequirePassword::class,
    'signed' => \Illuminate\Routing\Middleware\ValidateSignature::class,
    'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
    'verified' => \Illuminate\Auth\Middleware\EnsureEmailIsVerified::class,
    'cliente' => \App\Http\Middleware\ClienteMiddleware::class,
];
?>
```

### Configurar el Middleware
```php
<?php                                    
public function handle(Request $request, Closure $next)
{
    if ($request->user()->tipo_usuario == 'administrador') {
        return $next($request);
    }
    if ($request->user()->tipo_usuario == 'cliente') {
        return redirect()->route("homeCliente");
    }
    return redirect()->route("home");
}
?>
```

---

## 🔍 **EXPRESIONES REGULARES**

```php
<?php
usuario: "^[a-zA-Z0-9\_\-]{4,16}$", // Letras, números, guion y guion_bajo
nombre: "^[a-zA-ZÀ-ÿ\s]{1,40}$", // Letras y espacios, pueden llevar acentos.
password: "^.{4,12}$", // 4 a 12 dígitos.
correo: "^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$",
telefono: "^\d{7,14}$" // 7 a 14 números.

// Coincidencias Básicas
.       - Cualquier Carácter, excepto nueva línea
\d      - Cualquier Dígito (0-9)
\D      - No es un Dígito (0-9)
\w      - Carácter de Palabra (a-z, A-Z, 0-9, _)
\W      - No es un Carácter de Palabra.
\s      - Espacios de cualquier tipo. (espacio, tab, nueva línea)
\S      - No es un Espacio, Tab o nueva línea.

// Límites
\b      - Límite de Palabra
\B      - No es un Límite de Palabra
^       - Inicio de una cadena de texto
$       - Final de una cadena de texto

// Cuantificadores:
*       - 0 o Más
+       - 1 o Más
?       - 0 o Uno
{3}     - Número Exacto
{3,4}   - Rango de Números (Mínimo, Máximo)

// Conjuntos de Caracteres
[]      - Caracteres dentro de los brackets
[^ ]    - Caracteres que NO ESTÁN dentro de los brackets

// Grupos
( )     - Grupo
|       - Uno u otro
?>
```

---

## 🛠️ **MÉTODOS**

```php
<?php
// MÉTODOS DE ENVÍO
GET -> INDEX-CREATE-SHOW-EDIT
POST -> STORE
PUT o PATCH -> UPDATE
DELETE -> DESTROY

INDEX   // PARA MOSTRAR LA PÁGINA DE INICIO "TABLA"
CREATE  // PARA MOSTRAR LA PÁGINA DE CREAR UN PRODUCTO
STORE   // PARA EJECUTAR EL PROCESO DE INSERTAR PRODUCTO
SHOW    // PARA MOSTRAR LA PÁGINA DE VER DETALLES DEL PRODUCTO
EDIT    // PARA MOSTRAR LA PÁGINA DE EDICIÓN DEL PRODUCTO
UPDATE  // PARA EJECUTAR EL PROCESO DE ACTUALIZAR PRODUCTO
DESTROY // PARA EJECUTAR EL PROCESO DE ELIMINAR PRODUCTO

public function index($id){
    return view('php.inicio');
}
?>
```

---

## 🔪 **CÓMO FUNCIONA BLADE**

Blade es una herramienta que nos brinda Laravel a la hora de crear interfaces de usuario. Con Blade creamos una interfaz (componente o layouts) y podemos utilizarla desde otra página.

### Plantilla Blade
```html
<!DOCTYPE html>
<html lang="en">
<head>                            
    <title>@yield('titulo')</title>
</head>
<body>
    <header>...</header>
    <section class="content">
        @yield('contenido')
    </section>
    <footer>...</footer>
</body>
</html>
```

### Cómo llamar y utilizar una plantilla Blade
```php
@extends('layouts/app') // INSTANCIANDO PARA UTILIZAR
@section('titulo', 'Curso Laravel')
@section('contenido')
    # aquí va el contenido
@endsection
```

---

## 🏭 **FACTORY**

Los factory son un modelo que nos proporciona Laravel para poder ingresar (registrar) datos de prueba en nuestra base de datos.

```bash
php artisan migrate     # REALIZAMOS LA MIGRACIÓN
php artisan tinker      # INICIAMOS TINKER
>>> User::factory(20)->create()     # REGISTRAMOS 20 DATOS EN LA TABLA MODELO User
```

---

## 🔄 **COMPARTIR DATOS ENTRE VISTAS**

Nos ubicamos en `App\Providers\AppServiceProvider`:

```php
use Illuminate\Support\Facades\View; // ES IMPORTANTE IMPORTAR ESTO
public function boot()
{
    $compartido = "Hola mundo";
    View::share('compartido', $compartido);
    // try {
    //     $sql = DB::select('select * from empresa');
    //     foreach ($sql as $value) {
    //         View::share('empresa', $value->nombre);
    //     }
    // } catch (\Throwable $th) {
    //     //throw $th;
    // }

    $usuario=DB::select(" select count(*) as 'total' from usuario where estado=1 ");
    View::share('usuario', $usuario[0]->total);

    $usuario=DB::select(" select count(*) as 'total' from cliente ");
    View::share('cliente', $usuario[0]->total);
}
```

### En la vista
```html
<h4 class="nombre-curso">{{$compartido}}</h4>
```

---

## 🔐 **PERSONALIZAR LOGIN**

### Cambiar tabla del login

1. Crear un nuevo modelo
2. `php artisan make:model Usuario`
3. **Por recomendación es importante poner el campo USER Y PASSWORD en la tabla**
4. **POR OBLIGACIÓN LA TABLA DEBE CONTENER UN CAMPO "PASSWORD"**
5. Tenga mucho cuidado en el nuevo modelo class Usuario **"extends Authenticatable"**

### En el modelo
```php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;

class Usuario extends Authenticatable
{
    use HasFactory;

    public $table = "usuario";
    public $primaryKey = "id_usuario";
    //public $timestamps=false;
    protected $fillable = [
        'usuario', 'clave', 'nombre', 'apellido'
    ];
}
?>
```

### Creando un nuevo modelo para login
```php
<?php
namespace App\models;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class Usuario extends Authenticatable
{
    use Notifiable;
    protected $table = 'usuario';
    protected $primaryKey = 'id';
    public $timestamps = false;
    protected $fillable = [
        'dni',
        'name',
        'apellido',
        'email',
        'password',
        'tipo',
        'telefono',
        'grado',
        'direccion',
        'estado',
        'foto',
    ];
}
?>
```

### Cambiar modelo en config/auth.php
```php
'providers' => [
    'users' => [
        'driver' => 'eloquent',
        'model' => App\Models\Usuario::class,
    ],

    // 'users' => [
    //     'driver' => 'database',
    //     'table' => 'users',
    // ],
],
```

### Cambiar a MD5 Laravel en vendor\laravel\framework\src\Illuminate\Auth\EloquentUserProvider.php
```php
public function validateCredentials(UserContract $user, array $credentials)
{
    $plain = $credentials['password'];
    if (md5($plain) == $user->getAuthPassword()) {
        return true;
    } else {
        return false;
    }
    //return $this->hasher->check($plain, $user->getAuthPassword());
}
```

### Agregamos lo siguiente en app/Http/Controllers/Auth/LoginController
```php
public function username(){
    return 'usuario'; // Este es el nombre del campo de la tabla
}

// PARA VALIDAR INPUTS DEL LOGIN
use Illuminate\Http\Request;
protected function validateLogin(Request $request)
{
    $request->validate([
        $this->username() => 'required',
        'password' => 'required',
        'tipo' => 'required',
    ]);
}
```

### Cambiamos el name de la vista login
```html
// Cambiar el IDIOMA
<form action="{{ route('login') }}" method="POST">
    @csrf

    <input name="usuario" value="{{ old('usuario') }}">
    <input name="password" value="{{ old('password') }}">
        
    @error('usuario')
        <small>{{ $errors->first('usuario') }}</small><br>
    @enderror
    @error('password')
        <small>{{ $errors->first('password') }}</small>
    @enderror

    <button type="submit">Ingresar</button>
</form>
```

### Mensaje de error y botón entrar
```html
// MENSAJE DE ERROR
@error('usuario')
<div class="alert alert-danger alert-dismissible fade show mb-1" role="alert">
    <small>{{ $errors->first('usuario') }}</small>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
@enderror

@if (session('mensaje'))
<div class="alert alert-warning alert-dismissible fade show mb-0" role="alert">
    <small>{{ session('mensaje') }}</small>
    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
        <span aria-hidden="true">&times;</span>
    </button>
</div>
@endif

// BOTÓN DE INICIAR SESIÓN
<form method="POST" action="{{ route('login') }}">
</form>

// BOTÓN DE CERRAR SESIÓN
<div class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
    <a class="dropdown-item" href="{{ route('logout') }}"
        onclick="event.preventDefault();
                    document.getElementById('logout-form').submit();">
        {{ __('Logout') }}
    </a>

    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
        @csrf
    </form>
</div>
```

### Borrar verificación de email en routes/web.php
```php
Auth::routes(['verify' => true]);
```

### Comentar en controller/VerificationController
```php
//use VerifiesEmails;
```

### Corregir en vendor/laravel/framework/src/illuminate/routing/controller.php
```php
public function __call($method, $parameters)
{
    // throw new BadMethodCallException(sprintf(
    //     'Method %s::%s does not exist.', static::class, $method
    // ));
    return redirect()->route('home');
}
```

### Resolver restricciones de consultas SQL
En config/database.php:
```php
strict => false // LÍNEA 59
```

---

## 🔑 **LOGIN CON VARIAS TABLAS**

### Paso 1: Enviar datos de la BD a la vista Login
```php
// app/Http/Controllers/Auth/LoginController.php
public function showLoginForm()
{
    $data = TipoUsuario::all();
    return view('auth.login', compact("data"));
}
```

---

## ⚠️ **ERROR ACCESO DENEGADO 'FORGE'**

Asegúrese de que en `config/database.php` su nombre de conexión predeterminado sea el mismo que en su `.env`.

### Archivo .env
```php
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=sisventa
DB_USERNAME=root
DB_PASSWORD=
```

### Archivo database.php
```php
'mysql' => [
    'driver' => 'mysql',
    'url' => env('DATABASE_URL'),
    'host' => env('DB_HOST', '127.0.0.1'),
    'port' => env('DB_PORT', '3306'),
    'database' => env('DB_DATABASE', 'sisventa'),
    'username' => env('DB_USERNAME', 'root'),
    'password' => env('DB_PASSWORD', ''),
    'unix_socket' => env('DB_SOCKET', ''),
    'charset' => 'utf8mb4',
    'collation' => 'utf8mb4_unicode_ci',
    'prefix' => '',
    'prefix_indexes' => true,
    'strict' => false,
    'engine' => null,
    'options' => extension_loaded('pdo_mysql') ? array_filter([
        PDO::MYSQL_ATTR_SSL_CA => env('MYSQL_ATTR_SSL_CA'),
    ]) : [],
],
```

---

## 🚪 **PERSONALIZAR REDIRECCIÓN LOGIN**

### Editar app/Http/Controllers/HomeController
```php
public function index()
{
    //return view('home');
    $estado = Auth::user()->estado;
    if ($estado == 1) {
        $sql = DB::select('select count(*) as total from usuario where tipo=1');
        return view('home')->with('sql', $sql);
    } else {
        session()->invalidate();
        session()->regenerateToken();
        return back()->with('mensaje', 'USUARIO SUSPENDIDO, consulte con el Administrador');
    }
}

// Poner fecha de expiración en HomeController
// Luego se recomienda ofuscar todo el código del archivo
public function index()
{
    $fecha = date("Y");
    $duracion = date("Y") + 2; // Solo dura 2 años
    if ($fecha <= $duracion) {
        return view('home');
    } else {
        session()->invalidate();
        session()->regenerateToken();
        return back()->with('mensaje', "ACCESO DENEGADO, consulte con el desarrollador $duracion");
    }
}
```

---
## 📊 **GENERAR GRÁFICOS**

:::caution OJO
Los saltos de línea y comentarios en el script de **Chart js** son muy importantes
:::

### CDN para Chart.js
```html
<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
```

### HTML para el gráfico
```html
<!-- Dentro de esta etiqueta se mostrará nuestra Gráfica -->
<canvas id="grafica" height="90" width="200px"></canvas>
```

### Mostrando datos desde el controlador
```php
<?php
// EN EL CONTROLADOR 
$venta = DB::select("");
$data = [0,0,0,0,0,0,0,0,0,0,0,0]; // meses
foreach ($venta as $key => $value) {
    $data[$value->fechaN-1] = $value->tot; // guardando los datos en cada mes correspondiente
}
View::share("datas", $data); // enviando los datos a la vista(GRAFICA)

// EN EL CONTROLADOR OPCION 2
$data = [];
$data2 = [];
foreach ($sql4 as $key => $value) {
    array_push($data, $value->nombre);
    array_push($data2, $value->tot);
}
return view("vistas/reportes_ventas/hoy", compact("sql"))
    ->with("data", $data)
    ->with("data2", $data2);

// DECODIFICANDO EL JSON QUE VIENE DESDE EL CONTROLADOR
let datas = <?php echo json_encode($datas); ?>

// EN LA VISTA-GRAFICA 
const datosVentas2020 = {
    data: datas,
};
?>
```

### Gráfico de líneas
```html
<script>
    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafica");
    // Las etiquetas son las que van en el eje X. 
    const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"]
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosVentas2020 = {
        label: "Ventas por mes",
        data: [5000, 1500, 8000, 5102], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1,// Ancho del borde
    };
    new Chart($grafica, {
        type: 'line',// Tipo de gráfica
        data: {
            labels: etiquetas,
            datasets: [
                datosVentas2020,
                // Aquí más datos...
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
</script>
```

### Gráfico de barras
```html
<script>
    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafica");
    // Las etiquetas son las que van en el eje X. 
    const etiquetas = ["Enero", "Febrero", "Marzo", "Abril"]
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosVentas2020 = {
        label: "Ventas por mes",
        data: [5000, 1500, 8000, 5102], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        backgroundColor: 'rgba(54, 162, 235, 0.2)', // Color de fondo
        borderColor: 'rgba(54, 162, 235, 1)', // Color del borde
        borderWidth: 1,// Ancho del borde
    };
    new Chart($grafica, {
        type: 'bar',// Tipo de gráfica
        data: {
            labels: etiquetas,
            datasets: [
                datosVentas2020,
                // Aquí más datos...
            ]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }],
            },
        }
    });
</script>
```

### Gráfico circular
```html
<script>
    // Obtener una referencia al elemento canvas del DOM
    const $grafica = document.querySelector("#grafica");
    // Las etiquetas son las porciones de la gráfica
    const etiquetas = ["Ventas", "Donaciones", "Trabajos", "Publicidad"]
    // Podemos tener varios conjuntos de datos. Comencemos con uno
    const datosIngresos = {
        data: [1500, 400, 2000, 7000], // La data es un arreglo que debe tener la misma cantidad de valores que la cantidad de etiquetas
        // Ahora debería haber tantos background colors como datos, es decir, para este ejemplo, 4
        backgroundColor: [
            'rgba(163,221,203,0.2)',
            'rgba(232,233,161,0.2)',
            'rgba(230,181,102,0.2)',
            'rgba(229,112,126,0.2)',
        ],// Color de fondo
        borderColor: [
            'rgba(163,221,203,1)',
            'rgba(232,233,161,1)',
            'rgba(230,181,102,1)',
            'rgba(229,112,126,1)',
        ],// Color del borde
        borderWidth: 1,// Ancho del borde
    };
    new Chart($grafica, {
        type: 'pie',// Tipo de gráfica. Puede ser dougnhut o pie
        data: {
            labels: etiquetas,
            datasets: [
                datosIngresos,
                // Aquí más datos...
            ]
        },
    });
</script>
```

---

## 📧 **ENVIAR MAILS**

### Paso 1: Crear un proyecto
```php
<?php
    laravel new enviarEmail
?>
```

### Paso 2: Crear los controladores
```php
<?php
    php artisan make:mail ContactoMailable  // Para configurar el envío de email
    php artisan make:controller ContactoController  
?>
```

```php
<?php
    namespace App\Mail;
    use Illuminate\Bus\Queueable;
    use Illuminate\Mail\Mailable;
    use Illuminate\Queue\SerializesModels;
    
    class ContactoMailable extends Mailable
    {
        use Queueable, SerializesModels;
    
        public $subject = "INFORMACION DE CONTACTO"; // ESTO ES EL ASUNTO DEL CORREO
        public $contacto; // Solo creamos para pasar variables a la vista y ENVIARLOS
        /**
        * Create a new message instance.
        *
        * @return void
        */
        public function __construct($contacto)
        {
            $this->contacto = $contacto; // ALMACENAMOS LOS DATOS QUE SE RECIBEN PARA MOSTRAR EN LA VISTA
        }
    
        /**
        * Build the message.
        *
        * @return $this
        */
        public function build()
        {
            /* ESTO ES LA VISTA QUE SE VA A ENVIAR AL CORREO */
            return $this->view('mail.contactanos');
        }
    }
    
?>
```

```php
<?php
    namespace App\Http\Controllers;
    use App\Mail\ContactoMailable;
    use Illuminate\Http\Request;
    use Illuminate\Support\Facades\Mail;
    
    class ContactoController extends Controller
    {
        public function index(Request $request)
        {
            $correo = new ContactoMailable($request->all()); // Enviamos estos datos al MAILABLE
            Mail::to($request->correo)->send($correo); // CORREO DEL RECEPTOR
            //return "mensaje enviado";
            //return redirect()->route('email.index')->with("mensaje", $request["correo"]);
            return redirect()->back()->with("mensaje", $request["correo"]);
        }
    }
                    
?>
```

### Paso 3: Crear las rutas
```php
<?php
    Route::post('enviar-email', [ContactoController::class, 'index'])->name('email.index');
?>
```

### Paso 4: Configurar .env
```php
<?php
    /* OJO TENGA MUCHO CUIDADO CON LOS COMENTARIOS EN EL .env */
    MAIL_MAILER=smtp
    MAIL_HOST=smtp.gmail.com
    MAIL_PORT=587
    MAIL_USERNAME=isai.sandoval1999@gmail.com // Correo del emisor
    MAIL_PASSWORD=isai74433542 // Contraseña del emisor
    MAIL_ENCRYPTION=TLS
    MAIL_FROM_ADDRESS=isai.sandoval1999@gmail.com // Correo del emisor
    MAIL_FROM_NAME="ISAI SANDOVAL" // Nombre
?>
```

### Paso 4 (Servidor): Configurar .env en Servidor

1. **CONFIGURAR EN EL SERVIDOR**
   - Ingresar a tu CPanel
   - Ir a la sección de Correo Electrónico o Cuentas de email
   - Selecciona uno de los Dominio y click en conectar dispositivos

```php
<?php
    /* OJO TENGA MUCHO CUIDADO CON LOS COMENTARIOS EN EL .env */
    MAIL_MAILER=smtp
    MAIL_HOST=mail.huracancito.com
    MAIL_PORT=587
    MAIL_USERNAME=_mainaccount@huracancito.com // Este correo es del hosting
    MAIL_PASSWORD=zsrb3S82R8 // Esta clave es del login al hosting
    MAIL_ENCRYPTION=TLS
    MAIL_FROM_ADDRESS=_mainaccount@huracancito.com // Este correo es del hosting
    MAIL_FROM_NAME="ISAI SANDOVAL" // Nombre
?>
```

### Paso 5: Crear las vistas

**Vista del formulario:**
```html
@if (session("mensaje"))
<script>
    alert("se ha enviado un mensaje a {{session('mensaje')}}")
</script>
@endif

<form action="{{route('email.index')}}" method="post">
    @csrf
    <div>
        <input name="correo" type="email" placeholder="name@example.com">
        <textarea name="mensaje" rows="3"></textarea>
    </div>                                
    <button type="submit">Enviar</button>
</form>
```

**Vista previa del mensaje que se va a enviar:**
```html
<div>
    <h1>ESTE ES EL MENSAJE QUE SE VA A ENVIAR AL CORREO</h1>
    <h5>puede personalizarlo como quiera</h5>
    <section>
        <h1>{{$contacto['mensaje']}}</h1>
    </section>
</div>

<!-- Un ejemplo -->
<style>
    body {
        font-family: Arial, sans-serif;
        background-color: #f5f5f5;
        text-align: center;
    }
    h1 {
        margin-top: 50px;
        margin-bottom: 20px;
    }
    p {
        margin-bottom: 40px;
    }
    button {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        font-size: 18px;
        cursor: pointer;
        transition: background-color 0.3s;
    }
    button:hover {
        background-color: #0056b3;
    }
    a {
        color: white !important;
        text-decoration: none;
    }
</style>
</head>

<body>
    <h1>Restablecer contraseña</h1>
    <p>Haga clic en el botón para restablecer su contraseña:</p>
    <button><a href="{{ route('recuperar.form', [$id_usuario, $codigo]) }}">Restablecer contraseña</a></button>
</body>
```
### En caso de error
En config/mail.php:
```php
'smtp' => [
    'transport' => 'smtp',
    'host' => env('MAIL_HOST', 'smtp.mailgun.org'),
    'port' => env('MAIL_PORT', 587),
    'encryption' => env('MAIL_ENCRYPTION', 'tls'),
    'username' => env('MAIL_USERNAME'),
    'password' => env('MAIL_PASSWORD'),
    'timeout' => null,
    'auth_mode' => null,
    'stream' => [
        'ssl' => [
            'allow_self_signed' => true,
            'verify_peer' => false,
            'verify_peer_name' => false,
        ],
    ],
],

// Luego ejecuta esto
php artisan config:clear
```

---

## 🔍 **GENERAR QR CON SIMPLE QRCODE**

[Guía](https://www.nigmacode.com/laravel/generar-codigo-qr-laravel)

### Ejemplo del controlador del SISTEMA DE APAFA
```php
<?php
use SimpleSoftwareIO\QrCode\Facades\QrCode;

foreach ($datosPadreFamilia as $key => $item) {
    // Generar el QR
    QrCode::format('png')->size(500)->generate($item->padre_dni, public_path("qr/$id_padre.png"));
    // QR de historial padres
    QrCode::format('png')->size(500)->generate(route("historial.descargaPDF", $item->padre_dni), public_path("qr/historial/$id_padre.png"));
}
?>
```

---

## 📥 **IMPORTAR DATOS DESDE EXCEL**

[Laravel Excel](https://laravel-excel.com/) es una de las herramientas que nos proporciona Laravel para realizar exportaciones e incluso importaciones en formato EXCEL, CSV, PDF, etc.

[Documentación](https://docs.laravel-excel.com/3.1/getting-started/)

```php
// OJO: si te sale un error al instalar el "maatwebsite/excel" -> prueba con esto
// 1-> ve a xampp/php/php.ini->borra el ";" de "extension=gd"
// 2-> intenta ejecutar nuevamente el comando
// IMPORTANTE debes crear un modelo
// CONFIGURAR TU MODELO
composer require maatwebsite/excel  // Instalamos Laravel Excel
// Creando un Import para importar datos del modelo User El archivo se puede encontrar en app/Exports
php artisan make:import UsersImport --model=User
```

### En el ParticipanteImport
```php
<?php
// CON PARAMETROS
namespace App\Imports;

use App\Models\Participante;
use Maatwebsite\Excel\Concerns\ToModel;
use Maatwebsite\Excel\Concerns\WithBatchInserts;
use Maatwebsite\Excel\Concerns\WithChunkReading;
use Maatwebsite\Excel\Concerns\WithHeadingRow;

class ParticipanteImport implements ToModel, WithHeadingRow, WithBatchInserts, WithChunkReading
{
    private $idCurso;

    public function __construct($curso)
    {
        $this->idCurso = $curso;
    }

    public function model(array $row)
    {
        // Aquí todos los encabezados del excel van en MINÚSCULAS (si el encabezado tiene un espacio agregar el símbolo "_" )
        return new Participante([
            "id_curso" => $this->idCurso,
            "dni" => $row["dni_del_participante"],
            "nombre" => $row["nombres_del_participante"],
            "apellido" => $row["apellidos_del_participante"],
            "correo" => $row["correo_del_participante"],
        ]);
    }

    public function batchSize(): int
    {
        return 4000;
    }

    public function chunkSize(): int
    {
        return 4000;
    }
}
```

### En la ruta
```php
<?php
// IMPORTANTE: la ruta debe ser de tipo POST
Route::POST('importParticipante', [ParticipanteController::class, 'importParticipante'])->name('importParticipante.index');
?>
```

### En el controlador
```php
namespace App\Http\Controllers;

use App\Exports\ModeloParticipanteExport;
use App\Exports\ParticipanteExport;
use App\Imports\ParticipanteImport;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Facades\Excel;

class ParticipanteController extends Controller
{
    public function importParticipante(Request $request)
    {
        $request->validate([
            "dato" => "required|file|mimes:xlsx,xls,csv",
            "curso" => "required"
        ]);
        $file = $request->file("dato"); // dato es el name
        Excel::import(new ParticipanteImport($request->curso), $file);
        return back()->with("CORRECTO", "Los datos se han cargado exitosamente");
    }
}
```

### En el formulario
```html
<form action="" enctype="multipart/form-data" method="POST">
@csrf
    <div class="mb-4 mt-2 col-12 d-flex justify-content-between">
        <input type="file" name="dato" class="input input__text" value="{{ old('dato') }}">
        @error('dato')
            <small class="error error__text">{{ $message }}</small>
        @enderror
        <button type="submit" class="btn btn-primary px-5"><i class="fas fa-upload"></i> Cargar
            Datos</button>
    </div>
</form>
```

---

## 📤 **GENERAR EXCEL**

[Laravel Excel](https://laravel-excel.com/) es una de las herramientas que nos proporciona Laravel para realizar exportaciones e incluso importaciones en formato EXCEL, CSV, PDF, etc.

[Documentación](https://docs.laravel-excel.com/3.1/getting-started/)

```php
// OJO: si te sale un error al instalar el "maatwebsite/excel" -> prueba con esto
// 1-> ve a xampp/php/php.ini->borra el ";" de "extension=gd"
// 2-> intenta ejecutar nuevamente el comando
composer require maatwebsite/excel  // Instalamos Laravel Excel
// Creando un Export para exportar datos del modelo User El archivo se puede encontrar en app/Exports
php artisan make:export UsersExport --model=User    
```

### En el UsersExport
```php
namespace App\Exports;

use Illuminate\Contracts\View\View;
use Illuminate\Support\Facades\DB;
use Maatwebsite\Excel\Concerns\FromView;

class UsersExport implements FromView
{
    public function view(): View {
        $sql = DB::select('select *from users');
        return view('datos.index', [
            'usuarios' => $sql
        ]);
    }                            


// CON PARAMETROS ENVIADOS DESDE EL CONTROLADOR
class NotasExport implements FromView
{
    private $anio;
    
    public function __construct($anio)
    {
        $this->anio = $anio;
    }

    public function view(): View {
        $sql = $this->anio;
        return view('exportaciones.notas', [
            'sql' => $sql
        ]);
    }
}
```

### En la ruta
```php
Route::get('ver-excel', [UsuarioController::class, 'export'])->name('excel.index');
```

### En el controlador
```php
namespace App\Http\Controllers;

use App\Exports\UsersExport;
use Maatwebsite\Excel\Facades\Excel;

class UsuarioController extends Controller
{
    public function export()
    {
        return Excel::download(new UsersExport, 'usuarios.xlsx'); // csv
    }
}
```

### En vista previa
```html
<table>
    <thead>
        <tr>
            <th>USUARIO</th>
            <th>CORREO</th>
        </tr>
    </thead>
    <tbody>
        @foreach($usuarios as $user)
        <tr>
            <td>{{ $user->name }}</td>
            <td>{{ $user->email }}</td>
        </tr>
        @endforeach
    </tbody>
</table>
```

---

## 🔌 **CONEXIÓN BD**

### Archivo .env
```php
<?php
    DB_CONNECTION=mysql
    DB_HOST=127.0.0.1
    DB_PORT=3306
    DB_DATABASE=Nombre de la BD
    DB_USERNAME=Usuario
    DB_PASSWORD=Contraseña
?>
```

---

## 🔍 **CONSULTAS SQL**

```php
<?php
try {
    $sql = DB::update('update usuario set dni=?, name=?, apellido=?, email=?,telefono=?,
    direccion=? where id=?', [$dni, $nombre, $apellido, $email, $telefono, $direccion, $id]);
    if ($sql == 0) {
        $sql = 1;
    }
} catch (\Throwable $th) {
}
if ($sql == 1) {
    return back()->with('correcto', 'Datos modificados correctamente');
} else {
    return back()->with('incorrecto', 'Error al modificar los datos');
}
?>
```

---

## 🔙 **RETURN**

```php
<?php
return view('ver-perfil/perfil', compact('sql'))->with('sql2', $sql2); // RETORNA UNA VISTA
return view('notas/table')
->with('sql', [])                            
->with('grado', $grado)
->with('anio', $anio);

return redirect()->route('perfil.index', ['id' => 1]); // RETORNA UNA RUTA EN ESPECÍFICO

return back()->with("mensaje", "Notas eliminado Correctamente"); // RETORNA A LA MISMA PÁGINA

return response()->json(['dato' => $sql, 200]); // RETORNA UN JSON
?>
```

---

## 🔄 **AJAX EN LARAVEL PARTE 2**

### En el app
```html
<!--<meta name="csrf-token" content="{{ csrf_token() }}">-->

<script>
    function vender(){
        let cliente=document.getElementById("cliente").value;
        let id=document.getElementById("id").value;
        let total=document.getElementById("pagoTotal").innerHTML;

        let tr2=document.querySelectorAll(".tr2")
        let datos=[];
        tr2.forEach(function(el,index){
            datos.push(
                {
                    "cliente":cliente,
                    "usuario":id,
                    "producto":el.children[0].children[0].value,
                    "precio":el.children[1].children[0].value,
                    "cantidad":el.children[2].children[0].value,
                    "subtotal":el.children[3].children[0].value,
                    "total":total
                }
            )
        });
        
        console.log(datos)
        
        
        var ruta = "{{ url('registrar-salida') }}";
        $.ajax({
            url: ruta,
            type: "post",
            data:{valores : JSON.stringify(datos)},
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            },
            success: function(data) {},
            error: function(data) {}
        })
    }
</script>
```

### En la ruta y el controlador
```php
// EN LA RUTA
Route::post("/registrar-salida", [SalidaController::class, "registrarVenta"]);

// EN EL CONTROLADOR
public function registrarVenta(Request $request)
{
    $valores = $request->valores;
    $valores = json_decode($valores);

    return response()->json(['dato2' => $valores, 200]);
}
```

---

## 🖼️ **ENVIAR IMAGEN A LA BD DESDE UN FORMULARIO**

### Paso 1: El formulario debe llevar el atributo enctype
```html
<form method="POST" action="{{route('perfil.store')}}" enctype="multipart/form-data">
@csrf
    <input type="file" class="form-control" name="foto">
    <input type="submit">
</form>
```

### Paso 2: Recibir la imagen enviada desde el controlador
```php
<?php
$foto = file_get_contents($_FILES['foto']['tmp_name']);
?>
```

### Paso 3: Mostrar en pantalla la imagen
```html
<img src="data:image/jpg;base64,<?= base64_encode($item->foto) ?>" alt="">
```

---

## 🔧 **OTROS COMANDOS**

### Llamar ruta con parámetros
```html
<a href="{{ route('comunicado.show', ["$i->id1", "$i->id2", "$i->id3"]) }}"></a>
```

### Select automático
```html
<select name="grado" id="grado">
    <option value="">Grado y seccion...</option>
    @foreach ($sql2 as $item)
    <option {{ $item->id_grado == $i->id_grado ? 'selected' : '' }}
        value="{{ $item->id_grado }}">
        {{ $item->grado . ' ' . $item->seccion1 }}
    </option>
    @endforeach
</select>
```

### Dar formato a menús de navegación
```html
<li class="treeview {{ Request::is('usuarios*', 'estudiantes*', 'docentes*', 'directors*', 'tipo-usuarios*') ? 'menu-open' : '' }}"></li>
<a style="{{ Request::is('usuarios*', 'estudiantes*', 'docentes*', 'directors*', 'tipo-usuarios*') ? 'border-left:solid 2px #00C4FD!important' : '' }}"></a>
```

---

## 📱 **PWA (PROGRESSIVE WEB APP)**

### Si hay error, configurar lo siguiente
```php
// Ubicarse en public/serviceworker.js
var staticCacheName = "pwa-v" + new Date().getTime(); // Intenta eliminar esta línea
var filesToCache = [
    '/offline',
    '/css/app.css', // Corrige esta línea
    '/js/app.js', // Corrige esta línea
    '/images/icons/icon-72x72.png',
    '/images/icons/icon-96x96.png',
    '/images/icons/icon-128x128.png',
    '/images/icons/icon-144x144.png',
    '/images/icons/icon-152x152.png',
    '/images/icons/icon-192x192.png',
    '/images/icons/icon-384x384.png',
    '/images/icons/icon-512x512.png',
];
```

### Instrucciones de implementación
```php
# Link de ayuda
https://omarbarbosa.com/posts/convertir-aplicacion-laravel-en-una-pwa

# Correr el servidor
php artisan serve

# Instalar
composer require silviolleite/laravelpwa

# Publicar
php artisan vendor:publish --provider="LaravelPWA\Providers\LaravelPWAServiceProvider"
```

En la carpeta config encontraremos el archivo laravelpwa.php y haremos las modificaciones necesarias como el nombre, corto y largo, que la aplicación tendrá, también los colores que apliquen de acuerdo a la paleta de colores del diseño.

Reemplazo de imágenes: En el archivo de configuración hay dos arrays que relacionan las imágenes (iconos, splash) que requiere toda aplicación web progresiva para su normal funcionamiento; debes reemplazarlas con tus iconos y personalizar los splash, los cuales se verán de primera mano mientras se carga la aplicación. Estas imágenes fueron publicadas en la carpeta pública, en la ruta public/images/icons.

Incluir directiva de Blade: Para que los assets estén disponibles en el navegador, debemos incluir la directiva @laravelPWA de Blade en el layout, el cual es la vista padre. Es importante que sea antes de cerrar el head.

```html
<html>
<head>
    <title>Aplicación</title>
    ...
    @laravelPWA
</head>
<body>
    ...
    @yield('content')
    ...
</body>
</html>
```

---

## 📱 **WHATSAPP API**

```php
<?php
// Primero debes crear y configurar tu API aquí https://developers.facebook.com/docs/whatsapp/

// Instalamos guzzlehttp
composer require guzzlehttp/guzzle

// En la ruta
Route::get("/enviar-mensaje", [EnviarController::class, "enviar"]);

// En el controlador
public function enviar()
{
    try {
        $token = 'EAATiSXnyZBRwBAL5VaQZC9PVE9ltUySuJqjvRQVTlDqZCkrNmML1QSJUCDcU7vnkZCJqNDCM64Y3zdKQzKBZARjAl2jo8j0M5PP5cOpY68tI2HpZA9SNzcv5epqYVUg4k986gWeje5x3eXtz9kpm85CD6LbZBPRMmBsoQG6RxJ4hWiVSyRM3QcO11ParAGix8bsxImI0cog6ojJESZAmOgHk';
        $phoneId = '101091292888818';
        $version = 'v15.0';
        $payload = [
            'messaging_product' => 'whatsapp',
            'to' => '51973698935',
            'type' => 'template',
            'template' => [
                'name' => 'hello_world',
                'language' => [
                    'code' => 'en_US'
                ]
            ]
        ];

        $mensaje = Http::withToken($token)->post('https://graph.facebook.com/' . $version . '/' . $phoneId . '/messages', $payload)->throw()->json();
        return response()->json([
            'success' => true,
            'data' => $mensaje
        ], 200);
    } catch (\Throwable $e) {
        return response()->json([
            'success' => false,
            'error' => $e->getMessage(),
        ], 500);
    }
}
?>
```

---

## 📄 **PAGINACIÓN EN LARAVEL**

### Paso 1: Debes tener creado tu Modelo
```php
<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Estudiante extends Model
{
    use HasFactory;
    protected $table = "estudiante";
    protected $primaryKey = "id_estudiante";
    public $timestamps = false;
    protected $fillable = [
        "dni", "nombre", "apellido_paterno", "apellido_materno", "estado_voto", "grado"
    ];
}
```

### Paso 2: En el controlador
```php
public function index()
{
    $sql = Estudiante::paginate(5);
    return view("vistas/estudiante")
        ->with("estudiante", $sql);
}
```

### Paso 3: En la vista
```php
@foreach ($estudiantes as $estudiante)
    // mostrar datos del estudiante
@endforeach

<div class="text-right">
    {{ $estudiante->links('pagination::bootstrap-4') }}
    Mostrando {{ $estudiante->firstItem() }} - {{ $estudiante->lastItem() }} de {{ $estudiante->total() }}
    resultados
</div>
```

---

## 🆔 **OBTENER EL ID ASIGNADO A UN REGISTRO**

```php
<?php
$id = DB::table('usuario')->insertGetId([
    'nombre' => $nombre,
    'apellido_paterno' => $ape_pat,
    'apellido_materno' => $ape_mat,
    'usuario' => $usuario,
    'password' => $clave,
    'correo' => $correo,
    'foto' => $foto,
    'estado' => 1,
]);

// $id contiene el ID asignado al nuevo registro en la tabla "usuario"
```

---

## 💾 **GUARDAR ARCHIVOS EN SERVIDOR**

```php
<?php
// Guardando la foto en servidor
try {
    $file = $request->file("txtfoto");
    $nombreFile = "usuario-" . $usuario . "." . $file->guessExtension();
    $ruta = public_path("foto/usuario/" . $nombreFile);
    copy($file, $ruta);
} catch (\Throwable $th) {
    $ruta = "";
}

if (file_exists($ruta)) {
} else {
    return back()->with("INCORRECTO", "Hubo un error al subir la foto ");
}


// Eliminamos la imagen anterior
// OJO: si vas a reemplazar una imagen por otra con el mismo nombre NO es necesario eliminar, porque solo lo reemplazará
$rutaAn = public_path("foto/usuario/" . $request->txtid);
if (unlink("$rutaAn")) {
    // El archivo se eliminó correctamente
} else {
    // No se pudo eliminar el archivo
}
```

---

## 🍭 **CONFIGURAR SWEET ALERT**

### HTML para el botón de eliminar
```html
<form action="{{ route('estudiante.delete', $item->id_estudiante) }}" method="get"
    class="d-inline formulario-eliminar">
</form>
<a href="#" class="btn btn-sm btn-danger eliminar"
    data-id="{{ $item->id_estudiante }}">
    <i class="fas fa-trash-alt"></i>
</a>
```

### JavaScript para Sweet Alert
```javascript
$(document).on("click", "a.eliminar", function (event) {
    event.preventDefault(); // Evita que se siga el enlace
    var form = $(this).prev(".formulario-eliminar"); // Obtiene el formulario anterior al botón
    var url = form.attr("action"); // Obtiene la URL de la ruta de eliminación
    var csrf_token = $('meta[name="csrf-token"]').attr("content"); // Obtiene el token CSRF

    Swal.fire({
        title: "¿Está seguro?",
        text: "¡ No podrá recuperar este registro !",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#2CB073",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Eliminar",
        cancelButtonText: "No, Salir",
        reverseButtons: true,
        padding: "20px",
        backdrop: true,
        position: "top",
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: false,
    }).then((confirm) => {
        if (confirm.isConfirmed) {
            // Agrega el token CSRF al formulario
            form.append(
                '<input type="hidden" name="_token" value="' + csrf_token + '">'
            );
            form.submit(); // Envía el formulario
        }
    });
});
```

---

## 💾 **DESCARGAR SQL DE BD (BACKUP)**

```php
Route::get('backup', function () {
    $dbname = 'trabajo_sistema_nota3';
    $dbuser = 'root';
    $dbpass = '';
    $dbhost = 'localhost';

    $backupFile = $dbname . date("Y-m-d-H-i-s") . '.sql';
    $command = "mysqldump --user=$dbuser --password=$dbpass --host=$dbhost $dbname > $backupFile";

    system($command, $output);

    header('Content-Description: File Transfer');
    header('Content-Type: application/octet-stream');
    header('Content-Disposition: attachment; filename=' . basename($backupFile));
    header('Expires: 0');
    header('Cache-Control: must-revalidate');
    header('Pragma: public');
    header('Content-Length: ' . filesize($backupFile));
    readfile($backupFile);
})->name('backup')->middleware('verified');
```

---

## 📊 **QUICKCHART**

Sirve para imprimir Gráficos en archivos PDF. Lo que este complemento hace es convertir tu gráfico ChartJS en IMG y mostrarlo en el PDF.

---

## 🔌 **API REST**

### Crear tu controlador
```php
<?php
public function index()
{
    $sql = DB::select("select * from producto");
    return response()->json($sql, 200);
}


public function store(Request $request)
{
    $request->validate([
        "nombre" => "required",
        "cantidad" => "required",
        "total" => "required"
    ]);
    $sql = DB::insert("insert into producto(nombre,cantidad,total)values(?,?,?)", [
        $request->nombre,
        $request->cantidad,
        $request->total
    ]);
    if ($sql == 1) {
        return response()->json(["mensaje" => "producto registrado"], 200);
    } else {
        return response()->json(["error" => "error al registrar"], 201);
    }
}

    
public function show($id)
{
    $sql = DB::select("select * from producto where id_producto=?", [
        $id
    ]);
    return response()->json($sql, 200);
}


public function update(Request $request, $id)
{
    $request->validate([
        "nombre" => "required",
        "cantidad" => "required",
        "total" => "required"
    ]);

    try {
        $sql = DB::update("update producto set nombre=?, cantidad=?, total=? where id_producto=$id", [
            $request->nombre,
            $request->cantidad,
            $request->total
        ]);
        if ($sql == 0) {
            $sql = 1;
        }
    } catch (\Throwable $th) {
        $sql = 0;
    }

    if ($sql == 1) {
        return response()->json(["mensaje" => "producto actualizado"], 200);
    } else {
        return response()->json(["error" => "error al actualizar"], 201);
    }
}


public function destroy($id)
{
    $sql = DB::delete("delete from producto where id_producto=?", [
        $id
    ]);
    if ($sql == 1) {
        return response()->json(["mensaje" => "producto eliminado"], 200);
    } else {
        return response()->json(["error" => "error al eliminar"], 201);
    }
}
?>
```

### Crear tu ruta
```php
<?php
Route::get("listar-productos", [ProductoController::class, "index"]);
Route::get("lista-productos-id-{id}", [ProductoController::class, "show"]);
Route::post("crear-producto", [ProductoController::class, "store"]);
Route::post("actualizar-producto-{id}", [ProductoController::class, "update"]);
Route::get("eliminar-producto-{id}", [ProductoController::class, "destroy"]);
?>
```

### URL para pruebas
```
http://127.0.0.1:8000/api/lista-productos

http://127.0.0.1:8000/api/crear-producto
en header:
Accept  application/json

en body raw:
{
    "nombre":"mouse",
    "cantidad":"20",
    "total":"150"
}
```

---

## 🚀 **VITE**

### Pasos para correr proyecto con Vite
1. npm install
2. npm run dev

### Pasos para correr proyecto con Vite en Producción
1. npm run build
2. Asegúrate de que .GitIgnore no lo tenga en cuenta


