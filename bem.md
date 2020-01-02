# Clase BEMIT


## Metodología de nomenclatura

#### Manera de nombrar clases y tags para ubicarlos facil y ordenado

- **Block:**     Sección independiente simple o compuesto puede tener màs bloques dentro
- **Element:**   Porción pequeña pertenenciente a un bloque, tiene que vivir dentro de un bloque
- **Modifier:**  clase adicional que modifica los estilos tiene que vivir con su bloque o elemento

## NAMING
**Bloques** letras digitos y guiones No mayus, No 2 guinos nibajos(__) Ni normales (--) sin divs _(div.block{})_ ni selectores anidados _(.tags .button{})_ solo se atacan los nombres de las clases, NO los tags

**Elementos** sin Mayus. se nombra así: bloque__elemento ejem: form__input / search-block__sear-button siempre inicia con el nombre de su bloque padre / sin divs ni selectores anidados. Un elemento de su bloque no tiene sentido

**Modificadores** 
### Modificador de bloque
~~~
bloque--modificador
~~~

### Modificador de elemento
~~~
bloque__elemento--modificador
~~~

Los modificadores quedan en la misma clase del div, así:
~~~
<div class="block block--mofificador"></div>
<div class="block__element block__element--mofificador"></div>
~~~

Donde *Block* define los estilos del bloque y *block--mofificador* los de sus modificaciones, lo mismo con los elementos, Asi mismo un div puede tener más de un modificador.
Un modificador tiene que pertenecer

Un bloque o un elemento pueden tener más de un modificador

siempre debe estar la clase del bloque o elemento antes del modificador ejem: _div class="form__input form__input--border"_

---------------------------------------------------------------------

## Elementos
Con sacss puedo hacer esto:

~~~
.bloque{
  __elemento{
    margin: 0;
  }
}
~~~

Evitando que las clases queden anidadas, al compilar el css:

~~~
.bloque {}
.bloque__elemento{
  margin: 0;
}
~~~

## Ejemplo de estructura de Elementos html
~~~
<div class="block">
  <div class="block__element-1">
    <div class="block__element-2"></div>
    <div class="block__element-3">
      <div class="block__element-4"></div>
    </div>
  </div>
  <div class="block__element-4"></div>
</div>
~~~

## CSS
~~~
//Bloque
.block{}
.block__element-1{}
.block__element-2{}
.block__element-3{}
.block__element-4{}
.block__element-5{}
~~~

De esta manera, al no estar anidados los elementos son independientes y no tengo que cambiar los nombres de las clases si cambio la estructura

Tampoco tiene sentido mover un elemento fuera de su bloque


---------------------------------------------------------------------

## Ejemplos
De bloque
~~~
<div class="custom-form custom-form--color-red"></div>

//CSS
.custom-form{}
.custom-form--color-red{}
~~~

De elemento
~~~
<div class="block__element block__element--mod"></div>

//CSS
.block__element{}
.block__element--mod{}
~~~

### Ejemplo estructura CSS
~~~
.block{
  .block--mod{}

  block__element{
    block__element--mod{}

  }
}
~~~

### Con preprocesador scss
~~~
.block{
  //Estilos del bloque

  //modificador de bloque
  .&--mod{
    // Estilos del modificador
  }

  //Element
  .&__element{
    //Estilos del elemento
    &--mod{
      //Estilos del modificador del elemento
    }
  }
}
~~~

Compilado en css
~~~
.block{}
.block--mod
.block__element{}
.block__element--mod{}
~~~


