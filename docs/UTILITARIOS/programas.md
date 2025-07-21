---
sidebar_label: "Programas"
sidebar_position: 1
---

# **PROGRAMAS Y TRUCOS INFORMÁTICOS**

Esta sección contiene una lista de programas útiles con instrucciones de instalación y configuración.

## 🧊 **DEEP FREEZE 7.30 (No recomendado)**

**[Deep Freeze](../../static/mis-archivos/deepfreeze/Deep%20Freeze%20Standard%207.30.rar)**

## 🧊 **DEEP FREEZE 8.20 (No recomendado)**

**[Deep Freeze](../../static/mis-archivos/deepfreeze/Deep%20Freeze%20Standard%208.20.rar)**

## 🧊 **DEEP FREEZE 8.60**

### Concepto

**[Deep Freeze](../../static/mis-archivos/deepfreeze/DPFr3ez3_8.60.220.zip)** es una solución de software que "congela" la configuración del sistema, permitiendo que cualquier cambio realizado se elimine al reiniciar el equipo, devolviendo el sistema a su estado original.

### Instalación

1. Descomprimir el archivo descargado
2. Instalar el DFEnt.exe
3. Hay que tener en cuenta lo siguiente:
   - Se he hecho la prueba en Windows 8.1, 10 y 11
   - Al momento de instalar hay que dejar marcado EL MASTER
   - Primero se instala en el equipo MASTER y de ahi se exporta un ejecutable para los demás equipos
4. **Activar**
   - Desactivar conexión a internet
   - Abrir el archivo Keys.txt y copiar la clave de activación
5. Luego te pedirá ingresar un **Codigo de personalizacion** (min 8 digitos)
6. Luego inicializar el **Administrador de deepfreeze**
   - Hacer las respectivas configuraciones en cada pestaña
   - **En opciones avanzadas**
     - Ponemos el nombre de configuración
     - Aceptar
     - Exportar -> Instalador de estacion de trabajo
     - Ese instalar lo instalamos en los demás equipos clientes

### Como quitar Deep Freeze de un equipo

1. Primero instalamos Deep Freeze en otro equipo cliente donde no tengamos
2. Nos ubicamos en el disco C: y nos copiamos el archivo Persi0.sys (Este archivo contiene la nueva clave de acceso a deep freeze)
3. Luego creamos un USB booteable con Hirens Boot y arrancamos el equipo donde queremos quitar Deep Freeze
4. Una vez iniciado copiamos el archivo Persi0.sys en la carpeta C: y reemplazamos el que ya existe
5. Una vez copiado ya podemos ejecutar nuevamente el instalador cliente y ya tendremos los permisos para desinstalar Deep Freeze

---

## 🖥️ **VEYON MASTER**

### Concepto

**[Veyon 4.7](../../static/mis-archivos/veyon/veyon-4.7.5.0-win64-setup.exe)** - 
**[Veyon 4.9](../../static/mis-archivos/veyon/veyon-4.9.6.1-win64-setup.exe)**
es una herramienta de gestión de aulas informáticas que permite a los profesores monitorear y controlar las computadoras de los estudiantes, mostrar la pantalla del profesor, bloquear estaciones de trabajo y más.

### Instalación

1. Solo tenemos un instalador tanto para el servidor como para los clientes
2. Al momento de ejecutar debemos marcar/desmarcar la opciones de **Master** de acuerdo a nuestras necesidades
3. Las PCs tienen que estar conectadas a la misma red local

---
