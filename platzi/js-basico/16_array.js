var articles = [
    {nombre: 'Bici', costo: 3000},
    {nombre: 'TV', costo: 2500},
    {nombre: 'Libro', costo: 320},
    {nombre: 'celular', costo: 10000},
    {nombre: 'laptop', costo: 20000},
    {nombre: 'Teclado', costo: 500},
    {nombre: 'Audifonos', costo: 500},
]

// Método filter
var filterArticles = articles.filter(function(article){
    return article.costo <= 500
});

// filterArticles
// (3) [{…}, {…}, {…}]


// Método map
// Ayuda a mapear artículos
var articlesName = articles.map(function(article) {
    return article.name
});

// articlesName
//(7) [undefined, undefined, undefined, undefined, undefined, undefined, undefined]