# BEMIT
Extensión de BEM, agrega prefijos y sufijos para definir las clases

##  Prefijos bemit

- **o** para objetos
- **c** para componentes
- **u** para utilidades
- **is o has** para determinar un estado
- **js** para referenciar un nodo que interactúa con javascript
- **t** para un tema de estilos predeterminado
- **s** para contextos 
- **qa** para testing de controlde calidad
- **_** para hacks

##  Sufijos

_class-name@breakpoint_
(Donde breakpoint será la media query que se prefiera)

------------------------------------------
# Prefijos


## Prefijos O

o-text-align-right

El prefijo O me indica que estoy modificando un objeto, me ayudará a identificar a qué capa y archivo debo ir
como es un objeto puede aparecer en sitios no relacionados entre si, por lo que se debe tener cuidado al modificarla

el @import del main.css quedaría así

~~~
//Objects
@import "objects/_o-color";
@import "objects/_o-container";
@import "objects/_o-font-family"; // Nuevo objeto
@import "objects/_o-text-align";
~~~

## Prefijos C
Clases de la capa de componentes
Cada componente tendrá su propio archivo

div class="c-header"

~~~
//Components
@import "component /_c-header";
@import "component /_c-title-and-content";
~~~

_ _c-title-and-content.scss_

~~~
._c-title-and-content{
    &__title{}
    &__content{}
}
~~~

## Prefijos U

Clases de utilidad, las más específicas del proyecto

En estas clases es permitido el important, pero se debe evitar al máximo usarlas.

_.u-tar_
_.u-uppercase_

Todas las clases de utilidad estarían en el archivo utilities, y ya se sabe que se busca en la capa de utilidades

## Prefijos is-/has-

Es una clase de estado

Estados temporales, como un hover o border rojo en un input con error

~~~
//SASS
.c-form__input{
    border-color: black;

    &.has-error{
        border-color: red;
    }
}

//CSS Exportado
.c-form__input{border-color: black;}
.c-form__input.has-error{border-color: red;}
~~~

La clase de estado no estará suelta en una hoja de estilo, siempre debe estar junto a un nodo

No se le aplican los estilos a las clases de estado, se le aplican a un nodo cuando se cumple un estado temporal

_is-active_

## Prefijos JS

_js-tab-button_

Estos prefijos se usan para separar comportamientos de estilos, es decir, no se utilizan las mismas clases que llamo para los estilos en los js, genero clases solo para los comportamientos

**span class="c-tiitle-and-content__button c-button c-button--big js-toogle-modal"**

Las clases con prefijo **js-** no aplican ningun estilo, solo existe para que la ataque el javascript

## Prefijos de tema t-

t-theme-name

ejem:
t-dark
t-light

Un tipo de clase que modifica estilos aplicados a varias secciones
No tienen un archivo específico done vivir

## Prefijos de scope (contexto) s-
Añaden contextos de estilo para una sección en particular, como las áreas de contenido generadas por un CMS

## Prefijos de control de calidad qa-

Se usan para llevar a cabo pruebas automatizadas y como en las js- se mantienen separadas de las clases de estilos

## Prefijos de clase para hacks

_ _hack-name_

Sirve para anular o modificar temporalmente algo temporalmente

## Sufijos responsive

_class-name@breakpoint_

Ejem para el html:
_o-text-align-right@xs_ : Donde en el ejemplo el xs es el punto de ruptura, se alinea a la derecha solo en xs, es decir de 0 a 500px

_u-none@md_: oculta el nodo actual en md es decir en pantallas medianas y grandes

_u-none@print_: oculta nodos cuando se encuentra en el contexto de impresión 

**Escritura en css**

~~~
.u-none\@print{
 display: none !important;
}
~~~

El caracter arroba **@** permite identificar que el nodo tiene varios comportamientos, según los anchos de pantalla. Estos sufijos son más útiles en objetos y utilidades

**Ejemplo de escritura para responsive**

// En el html defino el Modificador del Elemento, que a su vez tiene un prefijo de componente
~~~
<div class="c-form c-form--alt">
...
<div>
~~~

// Luego en el scss añadimos los estilos al responsive del modificador del elemento
~~~
.c-form{
    ...
    &--alt{
        @include md{
            background-color: darkgrey;
        }
    }
}
~~~
Aquí _c-form_ es el elemento, _c-form--alt_ es el modificador en html y _&--alt_ en scss. luego el _@include md_ es el mixin para md

**Ejemplo 2**
~~~
<label class="c-form__label u-tar@sm">Name</label>
~~~

~~~
.u-tar{
    text-align: right !important;
    
    &\@sm{
        @include sm{
            text-align:right !important;
        }
    }
}
~~~
