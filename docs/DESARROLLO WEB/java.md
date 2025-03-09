---
sidebar_label: "Java"
sidebar_position: 0
---

# **GUÍA DE PROGRAMACIÓN Y CONCEPTOS BÁSICOS** 

## 🌟 **PROGRAMAS A UTILIZAR**

1. **[Netbeans](https://netbeans.org/downloads/8.2/rc/)**

   > Es un **IDE (Integrated Development Environment)** -> _Entorno de Desarrollo Integrado_.  
   > Es un programa o entorno que nos permite crear o desarrollar aplicaciones como:

   - Web
   - Escritorio
   - Móviles

2. **[Jdk](https://www.oracle.com/java/technologies/javase/javase-jdk8-downloads.html)**

   > **Java Development Kit (Kit de Desarrollo de Java)**  
   > Herramientas para crear aplicaciones en Java.

   - **JRE (Java Runtime Environment)**
     > Entorno de Ejecución de Java. Permite ejecutar nuestras aplicaciones Java.

3. **[Mysql](https://dev.mysql.com/downloads/workbench/)**
   > **My Structured Query Language** -> _Lenguaje de Consulta_  
   > Es un gestor de base de datos que nos permite almacenar y administrar información.

---

## 📘 **CONCEPTOS BÁSICOS**

> _Java_ es un lenguaje de programación orientado a objetos que nos permite crear aplicaciones tanto para web como para escritorio.

### **¿QUÉ ES POO (Programación Orientada a Objetos)?**

> Es un **paradigma de programación**, es decir, un modelo o estilo de programación que proporciona guías sobre cómo trabajar con él.

- En **Java**, todo es un **objeto**.
  - Cada objeto se denomina **clase**.
  - Cada clase tiene dos elementos principales:
    - **Atributos:** Variables que almacenan las características o propiedades de una clase u objeto.
    - **Métodos:** Funciones o acciones que realiza una clase u objeto.

### **ATRIBUTOS**

> Son las **variables** donde se almacenan las características o propiedades de una clase u objeto.

### **MÉTODOS**

> Son las **funciones** o acciones que realiza una clase u objeto.

---

## 📊 **Diagrama de POO**

![Diagrama de POO](/public/cursos/java/objetos.png)

---

## 🌟 **CREAR NUEVO PROYECTO**

![Nuevo Proyecto](/public/cursos/nuevoJavaEscritorio.jpg)

---

## 🖥 **SOUT - JOP - SCANNER**

> Las clases **SOUT**, **JOP**, y **SCANNER** son herramientas que nos permiten ingresar o mostrar información en pantalla en Java.

### **Detalles:**

- **SOUT (System.out.println):** Utilizado para imprimir mensajes en la consola.
- **JOP (JOptionPane):** Permite mostrar cuadros de entrada o salida de texto.
- **SCANNER:** Se usa para capturar la entrada de texto desde el teclado.

### **Ejemplo de código:**

```javascript
// SOUT: Muestra un mensaje en la consola
System.out.println("Hola Mundo");

// JOP: Muestra un cuadro de diálogo para ingresar un valor
JOptionPane.showInputDialog("Ingrese su nombre");

// JOP: Muestra un cuadro de mensaje con un texto
JOptionPane.showMessageDialog(null, "Hola Mundo");

// SCANNER: Captura la entrada del usuario desde la consola
Scanner co = new Scanner(System.in);
String mensaje = co.next();
// Para leer toda una línea de texto, puedes usar el siguiente código
// String mensaje = co.nextLine(); // Para textos separados con espacio

// Imprime el mensaje capturado en la consola
System.out.println(mensaje);
```

---

## 📊 **VARIABLES**

> Las **variables** son espacios en memoria que pueden almacenar un valor determinado. Se utilizan para guardar datos de diferentes tipos y poder utilizarlos más adelante en el programa.

### **TIPOS DE DATO:**

Los tipos de datos en Java nos permiten definir el tipo de información que una variable almacenará.

```javascript
// ENTEROS
int a = 10;

// CADENA de texto
String b = "Isai";

// DECIMALES CORTOS
float c = 10.50; // Tipo de dato float para decimales con precisión corta

// DECIMALES LARGOS
double d = 10.500000000; // Tipo de dato double para decimales con precisión larga

// CARACTERES
char e = '*'; // Tipo de dato char para almacenar un solo carácter

// VERDADERO O FALSO
boolean f = true; // Tipo de dato booleano que almacena valores true o false
```

---

## 📊 **ARREGLOS**

> Los **arreglos** son un tipo de dato que puede almacenar un conjunto de datos del mismo tipo. Los arreglos tienen un tamaño fijo, lo que significa que una vez definidos, no pueden cambiar su tamaño.

```javascript
// Definición de un arreglo con 10 elementos
int numero[] = new int[10];

// Asignando un valor al primer elemento del arreglo
numero[0] = 20;

// ASIGNANDO VALORES con un ciclo
for (int i = 0; i < 10; i++) {
    numero[i] = Integer.parseInt(JOptionPane.showInputDialog("Ingrese su edad"));
}

// IMPRIMIENDO VALORES del arreglo
for (int i = 0; i < 10; i++) {
    System.out.println(numero[i]);
}

// Usando el ciclo 'for-each' para imprimir los valores
for (int items : numero) {
    System.out.println(items);
}
```

---

## 💬 **COMENTARIOS**

> Los **comentarios** son líneas de código que no son interpretadas en la ejecución. Se utilizan para explicar el código o para desactivar temporalmente ciertas líneas de código durante el desarrollo.

```javascript
// Comentarios de una sola línea

/*
Comentarios de varios bloques de línea
*/
```

---

## ⚖️ **CONDICIONALES**

> Las **condicionales** se utilizan para tomar decisiones en función de si se cumple o no una determinada condición.

### Estructura básica de un condicional:

```javascript
if (condicion) {
  // Instrucciones si la condición es verdadera
} else {
  // Instrucciones si la condición es falsa
}
```

---

---

## 🎛️ **ESTRUCTURAS DE CONTROL**

> Usar **switch** ayuda a simplificar el código y evita confusiones, ya que organiza en varias ramas el código que va a ser ejecutado.

```javascript
switch (sem) {
  case 1:
    // instrucción 1
    break;
  case 2:
    // instrucción 2
    break;
  default:
    // instrucción 3
    break;
}
```

---

## 🔄 **BUCLES Y CICLOS**

> Los **bucles o ciclos** son secuencias de bloques de código que se ejecutarán repetidas veces hasta que la condición deje de cumplirse.

```javascript
for (int i = 0; i <= 10; i++) {
    // instrucciones
}

for (int item : numero) {
    // instrucciones
}

while (condicion) {
    // instrucciones
}

do {
    // instrucciones
} while (condicion);
```

---

## 🔀 **CASTING O CONVERSIONES DE TIPOS DE DATO**

> Conversión entre tipos de datos en Java.

```javascript
// STRING-INTEGER
Integer entero = Integer.valueOf(cadena);
int entero = Integer.parseInt(cadena);

// INTEGER-STRING
String cadena = Integer.toString(entero);
String cadena = String.valueOf(entero);

// CHAR-STRING
String cadena = Character.toString(char);

// STRING-CHAR
char caracter = cadena.charAt(0); // Solo primer caracter

// STRING-DOUBLE
double doble = Double.parseDouble(cadena);

// DOUBLE-STRING
String cadena = String.valueOf(doble);

// STRING-FLOAT
float flotante = Float.parseFloat(cadena);

// FLOAT-STRING
String cadena = Float.toString(flotante);

// STRING-BOOLEAN
Boolean booleano = Boolean.valueOf(cadena);
boolean booleano = Boolean.parseBoolean(cadena);

// BOOLEAN-STRING
String cadena = String.valueOf(booleano);
String cadena = Boolean.toString(booleano);

// DOUBLE-INT
double precio = 10.5;
int a = (int) precio;

// FLOAT-INT
float precio = 10.5f;
int a = (int) precio;
```

---

## 🏗️ **CLASES**

> Las **clases** en Java son como una plantilla. Existen dos tipos de clase:
>
> - Clase Normal: Contiene atributos y métodos.
> - Clase Principal: Es la única que se puede ejecutar.

> Para utilizar una clase normal en una clase principal, debe realizarse la **importación**.

---

## 🧩 **INSTANCIAS**

> Las **instancias** son llamadas hacia un archivo (clase) para hacer uso de él.

```javascript
import cursosjava.Persona;
Persona pe = new Persona();
```

---

## 🛠️ **MÉTODOS**

> Un **método** en Java es un conjunto de instrucciones definidas dentro de una clase que realizan una determinada tarea.

### Métodos sin parámetros

```javascript
public int suma() {
    return a + b;
}

pe.suma();
```

### Métodos con parámetros

```javascript
public int suma(int a, int b) {
    return a + b;
}

pe.suma(10, 50);
```

---

## ⚠️ **TRY CATCH**

> Los **Try Catch** se utilizan para prevenir errores en tiempo de ejecución.

### Casos comunes donde se usa:

1. Para recibir información de formularios.
2. Para realizar acciones hacia la base de datos (BD).

```javascript
try {
    // Código que puede generar una excepción
} catch (Exception e) {
    // Manejo de la excepción
    e.printStackTrace();
}
```

---

## 🖼️ **FRAMES**

> Los **frames** son un área o marco de trabajo en Java que nos permite diseñar nuestra interfaz.  
> Están compuestos por dos áreas principales:
>
> - **Código**: Es la parte donde se programa la lógica de nuestra aplicación.
> - **Diseño**: Es la parte donde se muestra la interfaz de nuestra aplicación.

[![Frames](/public/cursos/frame.jpg)](/public/cursos/frame.jpg)

---

### **getText() y setText()**

> Métodos para trabajar con valores en componentes.

- **getText()**: Permite obtener el valor de un input.
- **setText()**: Permite asignar un valor a un componente (LABEL, BUTTON, INPUT, ETC.).

```javascript
String codigo = txtcodigo.getText();
lblres.setText("Hola Mundo");
```

---

### **Componentes frame**

#### **Combo Box**

- Cambiar la propiedad `MODEL`:
  ```javascript
  cbnum.getSelectedIndex(); // Recibe la posición
  cbnum.getSelectedItem(); // Recibe el valor
  ```

#### **Check Box**

```javascript
if (mujer.isSelected()) {
  txtnombre.setText(mujer.getText());
}
```

#### **Radio Button**

- Arrastrar el componente **BUTTON GROUP**.
- Cambiar la propiedad **BUTTON GROUP**.

```javascript
if (f.isSelected()) {
  txtnombre.setText(f.getText());
}
```

#### **Popup Menu**

- Arrastrar el componente **popup menu**.
- Ir a las propiedades del componente que contiene el **popup menu**.
- Cambiar la propiedad **componentPopupMenu**.
- Ir a **Navigator** -> **Other Components** -> **JPopupMenu** -> Agregar -> **menu-item**.
- Cambiar la propiedad **text** del **menu-item**.

```javascript
int filas=tabla1.getSelectedRow();
    if (filas>=0) {
        txtcod.setText(tabla1.getValueAt(filas, 0).toString());
        txtnom.setText(tabla1.getValueAt(filas, 1).toString());
        txtcod.setEditable(false);
        btneliminar.setEnabled(false);
        btnregistrar.setEnabled(false);
    }
```

#### **J-Calendar**

- Descargar el archivo **.JAR**.
- Hacer click derecho en la paleta de componentes.
- Seleccionar **Palette Manager**.
- Elegir **Add from Jar**.
- Seleccionar el **J-Calendar**.
- Seleccionar todos los componentes.
- Elegir **AWT**.
- Hacer click en **Finalizar**.

- Arrastrar el componente **JDateChooser**.

```javascript
int anio = calendario.getCalendar().get(Calendar.YEAR);
int mes = calendario.getCalendar().get(Calendar.MONTH) + 1;
int dia = calendario.getCalendar().get(Calendar.DAY_OF_MONTH);
fecha.setText(dia + "/" + mes + "/" + anio);
```

#### **Ejecutar en Pantalla Completa**

```javascript
public Index() {
    initComponents();
    this.setExtendedState(MAXIMIZED_BOTH);
}
```

#### **Poner Color en JFrame y JPanel**

```javascript
public Index() {
    // Color JFrame
    this.getContentPane().setBackground(new Color(0, 189, 255));

    // Color JPanel
    jPanel1.setBackground(new Color(100, 55, 200));
}
```

#### **Hora Actual**

```javascript
LocalDateTime locaDate = LocalDateTime.now();
int hours = locaDate.getHour();
int minutes = locaDate.getMinute();
int seconds = locaDate.getSecond();
txthora.setText(hours + ":" + minutes + ":" + seconds);
```

#### **Poner Placeholder en JTextField**

- Descargar el archivo.
- Seleccionar la segunda opción de descarga.
- Copiar el archivo **TextPrompt.java** dentro de la carpeta **formularios**.
- Reiniciar **NetBeans**.

**Nota:** Si no se puede instanciar, hacer lo siguiente:

- Entrar al archivo y copiar todo el código en una clase nueva.
- O pegar el archivo en otra carpeta fuera de **formularios**.

```javascript
public Login() {
    TextPrompt TextoPlaceholder = new TextPrompt("Usuario", txtusuario);
}
```

#### **Cómo Centrar un JFrame**

```javascript
public Login() {
    setLocationRelativeTo(null);
}
```

#### **Cómo Bloquear Maximizar y Minimizar en JFrame**

```javascript
public Login() {
    this.setResizable(false);
}
```

#### **Cómo Poner Título en JFrame**

```javascript
public Login() {
    this.setTitle("Inicio de sesion");
}
```

#### **Evento al Presionar Enter**

```javascript
// Ejecutar un botón al presionar Enter en un input
if (evt.getKeyCode() == KeyEvent.VK_ENTER) {
  btnentrar.doClick();
}
```

#### **Cerrar y Abrir un JFrame Form**

```javascript
this.dispose(); // Cerramos el frame actual
Inicio ini = new Inicio(); // Instanciamos el nuevo frame
ini.setVisible(true); // Abrimos el frame nuevo
```

#### **Cómo Saber si un ArrayList Está Vacío o No**

```javascript
tabla.isEmpty();
```

#### **Ejecutar JFrame en Pantalla Completa**

```javascript
public Login() {
    this.setExtendedState(MAXIMIZED_BOTH);
}
```

#### **Pasos para Compartir Datos de un Frame a Otro**

- Click derecho en el componente.
- Seleccionar **Optimizar código**.
- Cambiar el acceso del componente a **PUBLIC** y **STATIC**.

**Ejemplo:**

```javascript
Inicio ini = new Inicio(); // Instanciamos el nuevo frame
ini.txtnombre.setText("valor compartido"); // Este valor viene de un frame diferente
ini.setVisible(true); // Abrimos el frame nuevo
```

#### **Cursor Pointer en JLabel**

```javascript
lblventas.setCursor(Cursor.getPredefinedCursor(Cursor.HAND_CURSOR));
```

#### **Encriptar MD5**

```javascript
public static String md5(String clear) throws Exception {
    MessageDigest md = MessageDigest.getInstance("MD5");
    byte[] b = md.digest(clear.getBytes());
    int size = b.length;
    StringBuffer h = new StringBuffer(size);
    // Algoritmo y arreglo MD5
    for (int i = 0; i < size; i++) {
        int u = b[i] & 255;
        if (u < 16) {
            h.append("0" + Integer.toHexString(u));
        } else {
            h.append(Integer.toHexString(u));
        }
    }
    return h.toString();
}

// Cómo llamar al método
String password = "";
try {
    password = md5(txtpassword.getText());
} catch (Exception e) {
    // Manejo de la excepción
}
```

#### **Nuevo Agregado desde Laptop**

##### **Agregar un JButton**

```javascript
JButton btn1 = new JButton("AGREGAR");
```

#### **Cambiar Color de JButton**

```javascript
btn1.setBackground(Color.green);
```

#### **Cambiar Color de Encabezado de un JTable**

```javascript
UIManager.put("nimbusBlueGrey", new Color(32, 136, 203));
tabla1.setModel(modelo);
```

#### **Cambiar Alto de Encabezado de un JTable**

```javascript
tabla1.getTableHeader().setPreferredSize(new java.awt.Dimension(0, 30));
```

#### **Cómo Agregar Elementos (JLabel, JButton) a una JTable**

##### **Clase para el Renderizado: `Render.java`**

```javascript
// En la clase "Render.java"
public class RenderTablaBuscarProd extends DefaultTableCellRenderer {
    @Override
    public Component getTableCellRendererComponent(JTable table, Object value, boolean isSelected, boolean hasFocus, int row, int column) {
        if (value instanceof JButton) {
            JButton btn = (JButton) value;
            return btn;
        }
        return super.getTableCellRendererComponent(table, value, isSelected, hasFocus, row, column);
    }
}


//Método para Mostrar la Tabla
public void mostrarProd() {
    Conexion co = new Conexion();
    ArrayList bu = co.buscarProducto(txtbuscarProd.getText());
    DefaultTableModel tabla = new DefaultTableModel() {
        // Bloquear la edición del botón
        public boolean isCellEditable(int row, int column) {
            return false;
        }

        /* Otra forma de bloquear la columna del botón
        public boolean isCellEditable(int row, int column) {
            if (column == 5) {
                return false;
            }
            return super.isCellEditable(row, column);
        }*/
    };

    // Creando botones
    JButton btn1 = new JButton("AGREGAR");
    btn1.setName("btnagregar");

    tabla.addColumn("NOMBRE");
    tabla.addColumn("DESCRIPCION");
    tabla.addColumn("CANTIDAD");
    tabla.addColumn("PRECIO");
    tabla.addColumn(" ");
    tabla1.setModel(tabla);

    for (BuscarProductoGetSet buscar : bu) {
        tabla.addRow(new Object[]{buscar.getNombre(), buscar.getDescripcion(), buscar.getStock(), buscar.getPrecio(), btn1});
    }

    tabla1.setDefaultRenderer(Object.class, new RenderTablaBuscarProd());
    tabla1.setModel(tabla);

    // Ajustar alto de las filas de la tabla
    tabla1.setRowHeight(30);
    TableColumn columna = new TableColumn();
    columna.setPreferredWidth(70);
}


//Evento para el Botón
int column = tabla1.getColumnModel().getColumnIndexAtX(evt.getX());
int row = evt.getY() / tabla1.getRowHeight();

if (row < tabla1.getRowCount() && row >= 0 && column < tabla1.getColumnCount() && column >= 0) {
    Object value = tabla1.getValueAt(row, column);
    if (value instanceof JButton) {
        ((JButton) value).doClick();
        JButton boton = (JButton) value;

        if (boton.getName().equals("btnagregar")) {
            System.out.println("Click en el botón agregar");
            // Eventos para modificar
        }
    }
}
```

#### **Obtener Posición de Fila y Columna en un JTable**

```javascript
// La fila y columna empiezan desde CERO
int col = tabla2.getColumnModel().getColumnIndexAtX(evt.getX());
int fil = evt.getY() / tabla1.getRowHeight();
```

#### **Cómo Tomar el Mismo Modelo de Nuestro JTable**

```javascript
DefaultTableModel modelo = (DefaultTableModel) tabla2.getModel();
```

#### **Autofocus en JTextField**

```javascript
txtbuscarProd.requestFocus();
```

#### **Fecha Actual en Java**

```javascript
DateTimeFormatter dtf = DateTimeFormatter.ofPattern("yyyy-MM-dd");
String fecha = dtf.format(LocalDateTime.now());
```

#### **Sumar Precio de Filas de un JTable**

```javascript
double fi = 0;
double total = 0;
for (int i = 0; i < tabla2.getRowCount(); i++) {
    fi = Double.parseDouble(tabla2.getValueAt(i, 5).toString());
    total = total + fi;
}
txtmontoTotal.setText(String.valueOf(total));
totalPagar();
```

#### **Abrir JTabbedPanel con un JButton**

```javascript
JTabbedPanel.setSelectedIndex(0);
```

#### **Colocar Valores de una Tabla al Hacer Click en la Fila**

```javascript
int fila = tablaProducto.rowAtPoint(evt.getPoint());
txtidProd.setText(tablaProducto.getValueAt(fila, 0).toString());
txtnomProd.setText(tablaProducto.getValueAt(fila, 1).toString());
```

#### **Agregar Imagen a un JButton**

```javascript
JButton btn1 = new JButton("");
btn1.setIcon(new ImageIcon("src/img/plus.png"));
```

#### **Desactivar o Deshabilitar un Botón**

```javascript
boton.setEnabled(false);
```

#### **Desactivar o Deshabilitar una Pestaña de un JTabbedPane**

```javascript
panel.setEnabledAt(5, false);
```

#### **Colocar Fecha Actual en JDateChooser**

```javascript
Calendar date = new GregorianCalendar();
Jfecha1.setCalendar(date);
Jfecha2.setCalendar(date);
```

#### **Cómo Ejecutar con X-Lint**

1. Hacer click derecho en el proyecto y seleccionar **Propiedades** -> **Compiling**.
2. En el apartado **Additional Compiler Options**, colocar:
   - **Método 1:** `-Xlint:unchecked`
   - **Método 2:** `-Xlint:deprecation -Xlint:unchecked`
3. ¡Listo!

## 🔗 **CONEXIÓN A BASE DE DATOS**

> Para conectar nuestra aplicación a una base de datos, es importante seguir los pasos indicados para establecer correctamente la conexión.

### Pasos para conectar una base de datos:

1. **Tener los drivers necesarios.**

### Agregar los drivers desde:

1. Click derecho en **Libraries**.
2. Seleccionar **Add Library**.
3. Elegir el driver adecuado para el gestor de base de datos en uso.
4. Ir a **Services**.
5. Click derecho en **databases**.
6. Seleccionar **New Connection**.
7. Configurar los pasos:  
   **Nota:** Asegúrate de configurar correctamente el **NOMBRE**, **USUARIO**, y **CLAVE** de la base de datos.
8. Probar la conexión (**Test Connection**).
9. Click derecho y conectar en **MYSQL SERVER at localhost**.

![Paso 1](/public/cursos/conexion.jpg)

### Seleccionar base de datos:

1. Seleccionar tu base de datos.
2. Click derecho en **Conectar**.
3. Se creará un archivo que debes configurar.

![Paso 2](/public/cursos/conexion2.jpg)

### Propiedades:

1. Click derecho en **Propiedades**.
2. Aquí encontrarás información necesaria.

![Paso 3](/public/cursos/conexion3.jpg)

---

### Crear clase para la conexión:

Para establecer la conexión, es necesario crear una clase que gestione la misma.

### Importar las siguientes clases:

```javascript
import java.sql.*;
```

### Ejemplo de conexión:

```javascript
package formularios;
import java.sql.*;

public class Conexion {
    Connection cn;
    PreparedStatement ps;
    CallableStatement cst;
    ResultSet rs;

    public Conexion() {
        try {
            Class.forName("com.mysql.jdbc.Driver");
            cn = DriverManager.getConnection("jdbc:mysql://localhost:3309/practica6", "root", "root");
            System.out.println("CONECTADO BD");
        } catch (Exception e) {
            System.out.println("ERROR CONEXION BD");
        }
    }
}
```


---

## ⚙️ **MÉTODOS Y CONSULTAS SQL**

> Los **métodos** son bloques de código que pueden ejecutarse y reutilizarse. En Java, existen 4 clases importantes que se utilizan al trabajar con una **Base de Datos**:

```javascript
Connection cn; // NOS PERMITE REALIZAR LA CONEXIÓN
PreparedStatement ps; // NOS PERMITE REALIZAR CONSULTAS A LA BD
CallableStatement cst; // NOS PERMITE LLAMAR UN PROCEDIMIENTO ALMACENADO DE NUESTRA BD
ResultSet rs; // NOS PERMITE ALMACENAR DATOS QUE SON OBTENIDOS DE LA BD
```

### Métodos con **PreparedStatement**:

```javascript
public int registrarProducto(String nombre, double pre) {
    int res = 0;
    try {
        ps = cn.prepareStatement("insert into producto(nombre,precio)values(?,?)");
        ps.setString(1, nombre);                                
        ps.setDouble(2, pre);
        res = ps.executeUpdate();
        System.out.println("Registrado correctamente");
    } catch (Exception e) {
        System.out.println("error al registrar " + e);
    }
    return res;
}
```

### Métodos con **CallableStatement**:

```javascript
public int registrarProducto(String nombre, double pre) {
    int res = 0;
    try {
        cst = cn.prepareCall("{call reproducto(?,?)}");
        cst.setString(1, nombre);
        cst.setDouble(2, pre);
        res = cst.executeUpdate();
    } catch (Exception e) {
        System.out.println("error al registrar " + e);
    }
    return res;
}
```

### Uso de **ResultSet**:

```javascript
public ArrayList<MetodoGetSet> coautor() {
    ArrayList<MetodoGetSet> res = new ArrayList<MetodoGetSet>();
    try {
        cst = cn.prepareCall("{call coautor()}");
        rs = cst.executeQuery();
        while (rs.next()) {                
            MetodoGetSet me = new MetodoGetSet();
            me.setCod_autor(rs.getString(1));
            me.setNom_autor(rs.getString(2));
            me.setNacion_autor(rs.getString(3));
            res.add(me);
        }
    } catch (Exception e) {
        System.out.println("Error al obtener los datos: " + e);
    }
    return res;
}
```

---

## 📋 LISTAR DATOS EN TABLA

### Código en Java

```javascript
public class Autor extends javax.swing.JFrame {    
    public Autor() {
        initComponents();
        mostrartabla();
    }

    public void mostrartabla(){
        Registro re = new Registro();
        DefaultTableModel modelo = new DefaultTableModel();
        
        // Agregar columnas a la tabla
        modelo.addColumn("CODIGO");
        modelo.addColumn("NOMBRE");
        modelo.addColumn("NACIONALIDAD");
        tabla1.setModel(modelo);
        
        // Obtener los datos y agregarlos al modelo
        ArrayList<MetodoGetSet> tabla = re.coautor();
        String datos[] = new String[3];
        for (MetodoGetSet m : tabla) {
            datos[0] = m.getCod_autor();
            datos[1] = m.getNom_autor();
            datos[2] = m.getNacion_autor();
            modelo.addRow(datos);
        }
        
        // Asignar el modelo actualizado a la tabla
        tabla1.setModel(modelo);                              
    }
}   
```


## 📝 REPORTES CON JASPER-REPORT

### [Descargar las librerías (IReport)](/public/cursos/java/IREPORT.rar)

### Agregar las librerías a NetBeans
1. Haz clic en **Tools** -> **Plugins** -> **Downloader** -> **Add Plugins**.
2. Crea una carpeta en **SRC** llamada `REPORTES`.
3. Dentro de la carpeta, crea una clase de tipo **Report**.
4. Haz clic en **Nuevo** -> **Otros** -> **Report** -> **Empty Report**.

### Conectar MySQL con IReport
1. Al instalar este plugin, aparece una ventana principal de IReport.
2. **Paso 1:** Seleccionar **JDBC Connection**.
   
   ![Paso 1](/public/cursos/java/01.png)

3. **Paso 2:** Continúa con este paso.

### Paso Siguiente
1. Haz clic en el buscador de NetBeans.
2. Busca "Report Inspector".

### [Descargar las librerías (otros)](/public/cursos/java/librerias.rar)

1. Haz clic derecho en **Library** -> **Agregar archivo JAR**.
2. Selecciona todos los archivos `.JAR`.

### Crear una nueva conexión con MySQL

```javascript
public Connection getConexion() {
    try {
        Class.forName("com.mysql.jdbc.Driver");
        cn = DriverManager.getConnection("jdbc:mysql://localhost:3309/sistema_venta_java", "root", "root");
        System.out.println("Base de datos conectada");
    } catch (Exception e) {
        System.out.println("ERROR AL CONECTAR BD");
    }
    return cn;
}
```


## 🛠️ Crear Instalador de Proyecto Java

### [Descargar Launch4J](/public/cursos/java/launch4j-3.14-win32.exe)
### [Descargar InnoSetup](/public/cursos/java/innosetup-6.2.0.exe)

---

### Programas a utilizar:
1. **Launch4J**: Herramienta para envolver un archivo JAR en un ejecutable (.exe).
2. **InnoSetup**: Utilizado para crear instaladores de aplicaciones Windows.


---


# INTRODUCCIÓN A JAVA WEB

## 🖥️ **CONCEPTO**

A diferencia de **Java Escritorio**, **Java Web** es un lenguaje que nos permite crear aplicaciones que se ejecutan en la **WEB**.

---

## 💻 **SINTAXIS**

```javascript
<%
..............
%>
```

---

## 🛠️ **IMPORT**

```javascript
<%@ page import="controlador.Datos_empresa" %>
```

---

## 🧩 **USE-BEANS**

```javascript
<jsp:useBean id="fi" scope="page" class="controlador.Filtro" />
```

---

## 🖨️ **IMPRIMIR EN PANTALLA**

```javascript
<%= "Hola mundo" %>
<%= "&lt;h1>Hola mundo&lt;/h1>" %>
```

---

## 🌐 **REQUEST**

```javascript
<%
String usuario = request.getParameter("txtusuario");
Part foto = request.getPart("txtfoto"); /* PARA RECIBIR ARCHIVOS */
%>
```

---

## ✅ **VALIDACIONES**

```javascript
<%
if (usuario != null && clave != null) {
..............
}
%>
```

---

## 🚨 **TRY CATCH**

Los **Try Catch** se utilizan para prevenir errores.

Para la mayoría de los casos el **try-catch** se utiliza para:
1. **Recibir información de formularios**
2. **Realizar acciones hacia la base de datos**

```javascript
<%
try {
    String usuario = request.getParameter("txtusuario");
    Part foto = request.getPart("txtfoto"); /* PARA RECIBIR ARCHIVOS */
} catch (Exception e) {
}
%>
```

---

## 🌟 **JSP (JavaServer Pages)**

**JSP** es una tecnología que ayuda a los desarrolladores a crear páginas web dinámicas basadas en HTML, XML y otros tipos de documentos.

- **JSP** es similar a **PHP**. Dentro de un **JSP** se pueden incluir otros elementos como **HTML**, **CSS** y **JAVASCRIPT**.
- Para desplegar y ejecutar **JavaServer Pages**, se necesita un servidor web compatible con contenedores servlet, como **Glassfish**, **Apache Tomcat** o **Jetty**.

---

## 📦 **JAVA BEANS**

**JavaBeans** es una clase de **Java** que se utiliza como filtro para evitar introducir errores en la base de datos.


---


# JAVA MAVEN

## 🌐 **CONEXIÓN BD**

Primero agrega las dependencias de MySQL en el archivo `pom.xml` de tu proyecto:

```xml
<!-- Primero agrega las dependencias de MySQL en "Project files/pom.xml" -->
<dependencies>
    <dependency>
        <groupId>mysql</groupId>
        <artifactId>mysql-connector-java</artifactId>
        <version>5.1.30</version> <!-- Cuidado: primero verifica qué versión de MySQL usas en "Mysql Server Wizard" -->
    </dependency>
</dependencies>
```

---

En Java, establece la conexión con la base de datos:

```javascript
Connection cn;
PreparedStatement ps;
CallableStatement cst;
ResultSet rs;

try {
    Class.forName("com.mysql.jdbc.Driver");
    cn = DriverManager.getConnection("jdbc:mysql://localhost:3309/blog", "root", "root");
    System.out.println("Conectado a la BD");
} catch (Exception e) {
    System.out.println("Error al conectar BD");
}
```

---

## 🍪 **COOKIES**

Las **cookies** siempre se almacenan como cadenas. Aquí te dejo un ejemplo de cómo trabajar con ellas en Java:

```javascript
// Las cookies siempre se almacenan como cadenas
Cookie cookies[] = request.getCookies(); // Obtenemos todas las cookies

// Agregamos una nueva cookie
Cookie nuevoCookie = new Cookie("usuarioRecurrente", "si");
nuevoCookie.setMaxAge(10); // Tiempo de vida de la cookie (10 segundos)
response.addCookie(nuevoCookie);

// EJEMPLO: verificar si el usuario que ingresa es nuevo o recurrente
boolean nuevoUsuario = true;
cookies = request.getCookies(); // Obtenemos todas las cookies

if (cookies != null) {
    for (Cookie cookie : cookies) {
        if (cookie.getName().equals("usuarioRecurrente") && cookie.getValue().equals("si")) {
            nuevoUsuario = false;
            break;
        }
    }
}

String mensaje = null;
if (nuevoUsuario) {
    // Agregamos una nueva cookie
    Cookie nuevoCookie = new Cookie("usuarioRecurrente", "si");
    response.addCookie(nuevoCookie);
    mensaje = "USUARIO NUEVO";
} else {
    mensaje = "USUARIO ANTIGUO";
}

System.out.println("mensaje = " + mensaje);
```

---

## 🧑‍💻 **JAVA BEANS**

### Cómo usar un **JavaBean** desde **JSP**

```javascript
<body>
    <h1>Modificar valores</h1>
    <!-- Usar una clase Java en la carpeta/nomClase con el alcance (page-request-session-application) -->
    <jsp:useBean id="rectangulo" class="beans.Rectangulo" scope="session" />

    <%
        rectangulo.setBase(10);
        rectangulo.setAltura(5);
    %>

    <li><%= rectangulo.getBase() %></li>
    <li><%= rectangulo.getAltura() %></li>
    <li><%= rectangulo.getArea() %></li>
</body>
```

---

Este formato usa emojis y una estructura clara, resaltando los puntos clave con negritas y manteniendo el código limpio y fácil de leer. Espero que sea lo que buscas. ¿Necesitas algún cambio adicional o quieres que lo guarde en algún archivo?
