var http = require('http');

var server = http.createServer(function(req, res){
    var categoria = req.url;

    if(categoria=='/tecnologia'){
        res.end("<html><body>Notícias de Tecnologia</html></body>")
    } else if(categoria=='/moda'){
        res.end("<html><body>Notícias de Moda</html></body>")
    } else if(categoria=='/beleza'){
        res.end("<html><body>Notícias de beleza</html></body>")
    } else {
        res.end("<html><body>Portal de Notícias</html></body>")
    }
});

server.listen(3000);
// node noticias.js
// req em http://localhost:3000/  sera respondida