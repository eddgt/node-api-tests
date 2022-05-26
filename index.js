var express = require('express');
var app = express();

var bodyParser = require('body-parser');
const { json } = require('express/lib/response');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function(req, res){
    res.send('{"response":"Hello from node app on k8s"}');
})

app.get('/will', function(req, res){
    res.send('{"response":"Hello World"}');
})

app.get('/ready', function(req, res){
    res.send('{"response":"Great! it works!"}');
})

app.post('/areacirculo', function(req, res){
    // console.log(req.body);
    if (req.body){
        let r  = req.body.radio;
        let area = getAreaCirculo(r);
        if(area>0){        
            res.json({"message":{"area":parseFloat(area)}});
        }
    }else{
        res.json({"message":'Invalid parameters!'});
    }
})


function getAreaCirculo(radio){
    let area = null
    try {
        area = 3.1416 * radio * radio;
        return area;
    } catch (error) {
        console.log(error);
        return null;
    }
    
}


app.listen(process.env.PORT || 3000);
module.exports = app;