# ITCSS

Separa el código css en varias capas, según su especificidad

## Settings
No genera css, solo declara variables 

## Tools
Mixins y funciones No genera css

## Generic
Reset Normalize

## Tags (Elements)
Estilos de los tags html h1 img

## Objects
Clases reutilizables en todo el proyecto de maner genérica
ejem: clase container de un ancho máximo
Un bloque BEM podría ser un objeto

## Components
Pieza concreta de la interfaz
En casi todos los casos, un bloque BEM es un componente

## Utilities
Capacidad de anular todo lo que se haya escrito antes Están permitidos los importants, no se debe abusar

Las capas superiores tienen más alcance, pero las inferiores tienen más fuerza. Ante un conflicto de estilos, gana la capa inferior