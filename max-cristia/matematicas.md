# Matemáticas para programadores

## 1 Conjuntos

Contenedor de datos

- Sin orden
- Sin repetir datos

---

### **Características**

Conjunto Vacío -> ø ó {}

Conjunto por extensión {1,2,4} {a,b}

Sin orden {4,2,1} == {2,1,4}

Sin repeticiones {1,4,2,4,2} == {1,2,4}

---

### **Unión de conjuntos**

```
{1,2} U {3} == {1,2,3}
```

**Unión cumpliendo la no repetición:**
{1,3} U {1} == {1,3,1} == {1,3}

---

---

## 2 Pares Ordenados

Son estructuras que únicamente almacenan **2** elementos
[1,7]

- Si importa el orden [1,7] ≠ [7,1]
- Si puede haber repeticiones [8,8]

---

### Conjunto de pares ordenados

```
{[5,2],[18,22]} U {[14,10]} == {[5,2],[18,22],[14,10]}
```

### Igualdad

Solo puede existir igualdad si ambos elementos del par ordenado son iguales

[X,Z] == [V,W] _Si y solo si X=V y Z=W_

---

---

## 3 Ejercicio cuenta bancaria (Conjuntos y pares ordenados)

Cuenta bancaria se compone de [No. de cuenta, saldo]

Saldo == depositos Vs retiros

Todas las cuentas bancarias vendrían siendo un conjunto de pares ordenados
{[N,S], [N,S], [N,S], [N,S], [N,S]}

| Variables | Significado                                                          |
| --------- | -------------------------------------------------------------------- |
| var B     | Cuentas del banco (Conjunto de pares ordenados)                      |
| bar N     | Número de la nueva cuenta                                            |
| var B\_   | Conjunto (de pares ordenados) de cuentas del banco **+** la cuenta N |

---

### Implementación

```
Abrir ( B,N,B_ ) = B_ B u {[N,ø]}

En este caso el igual = define una igualdad lógica NO una asignación
```

---

### Porqué un conjunto y no una lista o array

¿Porqué la variable B no es una lista de pares ordenados?

Porque las listas y arrays tienen orden y permiten repeticiones

Las cuentas bancarias no tienen orden y no pueden repetirse (Existir 2 cuentas con el mismo id)

| Especificación | Conjuntos       |
| -------------- | --------------- |
| Implementación | Listas / Arrays |

---

### Especificación

| Sintaxis especificación           | Sintaxis setlog                |
| --------------------------------- | ------------------------------ |
| Abrir (B,N,B*) = B* = B u {[N,0]} | Abrir (B,N,B*) :- UN (B,N,B*). |

En setlog se demuestra el error, al abrir 2 cuentas con el mismo id (12)

### Especificación

Siendo B1 el estado inicial de las cuentas y B2, el estado inicial + B1

```
Abrir ({},12,B1) & Abrir (B1,12,B2)
```

No debería ser posible

B -> Conjunto de cuentas (Pares ordenados) del banco

B = {[n1,s1], [n2,s2], [n3,s3], ...}

n1 = Número de la cuenta
s1 = Saldo de la cuenta

Si sotos los numeros de cuenta de cada par ordenado son diferentes

```
n1 ≠ n2     n1 ≠ n3     n2 ≠ n3 ...
```

Entonces B es una función

unconjunto de pares ordenados, donde todos los primeros componentes de cada par son distintos entre si

---

### Especificación

Toda función es un conjunto de pares ordenados donde:
todos los primeros componentes de cada par son distintos entre si

Pero **NO** todo conjunto de pares ordenados es una función, ejem:

```
{[1,7], [4,15], [1,21]}
```

No es una función porque el primer y tercer elemento comparten el mismo primer componente de par ordenado (1)

Las funciones (como conjuntos de pares ordenados) son muy importantes para especificar sistemas

---

### Solucionando el error

El error del punto 3.4 se da porque no controlamos el n dentro de cada par ordenado
no controlamos que no sea una primera componente de un par ordenado de B

Para extraer el primer componente de los pares ordenados de una función o conjunto:

dom B ó dom (B)
"Dominio de B"

```
Abrir (B,N,B_) = B_ = B u {[N,0]}
```

B es una función
N no es una primera componente del algún par de B

Para esto
N ∉ dom B // el id N no coincide con algún primer componente de algun par ordenado del conjunto/función B

ϵ -> Pertenece
∉ -> No pertenece

X ϵ C Significa que X es un elemento del cunjunto C

Entonces para arreglar el error le digo que identifique si N pertenece al dominio de B (Osea un primer componente de B)

```
Abrir (B,N,B_) = N ∉ dom ^ B_ = B u {[N,0]}
```

^ es la conjunción "y"

### Solución en sintaxis setlogx
