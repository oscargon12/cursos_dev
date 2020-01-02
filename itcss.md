# ARQUITECTURA ITCSS

Metodología que permite parametrizar los estilos según niveles de especificidad separando los niveles de estilos en 7 capas

- **Settings:** Declara variables de preprocesador (No genera css)
- **Tools:** Declara funciones y Mixins (No genera css)
- **Generic:** Código genérico del css, reset del css y normalize
- **Tags (Elements):** estilos que afectan a los tags NO clases NI selectores anidados
- **Objects:** clases reutilizables de manera genérica, ejem: clase container que está en muchos lados. Un bloque BEM podría ser un objeto
- **Components:** Pieza concreta específica de la interfaz si se hace cambios Sus estilos no afectan a ningún otro item. Casi siempre un bloque BEM será un componente
- **Utilities:** Estas clases tienen la capacidad de anular todos los estilos escritos anteriormente. Se permite el !important

## Estructura
Settings
Tools (Functions - Mixins)
Generic
Tags
Keyframes **(La capa de keyframes es opcional**
Objects
Components
Utilities

Lo mejor es generar un mixin en la capa _tools_ para  definir las mediaqueries. Así solo se tendrá un punto de ruptura.

## Ejemplo de mixin
Ejemplo de mediaqueries
~~~
@mixin font-size ($size) {
    font-size: $size;
    font-size: calculated-rem($size);
}

@mixin sm() {
    @media (min-witdh: 501px){
        @content;
    }
}
@mixin sd() {
    @media (min-witdh: 501px){
        @content;
    }
}

//Rango
@mixin only-xs(){
    @media (min-width: 0px) and (max-width:500px){
        @content;
    }
}
@mixin only-sm(){
    @media (min-width: 501px) and (max-width1100px){
        @content;
    }
}
~~~

Todos los estilos de las clases deben estar en el mismo lugar. El estilo predeterminado del elemento, el responsive, las pseudoclases, etc. 