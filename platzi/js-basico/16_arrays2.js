var articles = [
    {nombre: 'Bici', costo: 3000},
    {nombre: 'TV', costo: 2500},
    {nombre: 'Libro', costo: 320},
    {nombre: 'celular', costo: 10000},
    {nombre: 'laptop', costo: 20000},
    {nombre: 'Teclado', costo: 500},
    {nombre: 'Audifonos', costo: 500},
]

// Método find
var articlesFind = articles.find(function (article){
    return article.nombre === 'laptop'
} );

// articlesFind
// {nombre: "laptop", costo: 20000}


// Método forEach
articles.forEach(function (article) {
    console.log(article.nombre);
});

// Bici
// TV
// Libro
// celular
// laptop
// Teclado
// Audifonos


// Método some

var cheapArticles = articles.some(function(article){
    return article.costo <= 700
});