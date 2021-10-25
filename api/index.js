const express= require("express");
const app= express();
import path from 'path';
const multer = require('multer');

// Configuração do parser para requisições POST 
app.use(express.json());
app.use(express.urlencoded({
    extended:true
}));
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        //Primeiro parâmetro = erro
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        //Primeiro parâmetro = erro
        //Salvando com name do input e data atual
        /* cb(null, file.fieldname + '-' + Date.now()) */

        //Salvando com a mesma extensão do arquivo
        /* cb(null,`${file.fieldname}-${Date.now()}${path.extname(file.originalname)}`) */

        //Salvando com o mesmo nome do arquivo
        cb(null, file.originalname);
    }
});

// utiliza a storage para configurar a instância do multer
const upload = multer({ storage });


app.post('/uploadFoto',upload.single('nomeFoto'),function(req, resp){
    resp.end();
});



// colocando o Servidor no ar 

const PORTA = process.env.PORT || 8080;
app.listen(PORTA,function(){
    console.log(`Servidor Rodando na porta ${PORTA}`)
});


const routes = require('./routers');
routes(app);

app.set('views', path.join(__dirname,'views'))
app.set('view engine','pug')

