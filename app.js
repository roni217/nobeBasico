var app = require('./config/server');
var msg = require('./mod_test');

app.get('/', function(req, res){
    res.render("home/index")
})
app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_noticia")
})


app.listen(3000, function(){
    console.log("Servidor rodando com Express!")
    console.log(msg())
})