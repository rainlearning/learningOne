var http = require('http');
var waiter = function(req,res){

    res.writeHead(200,{"Content-Type":'text/html;charset=utf8'});
//    console.log(req);
//    console.log(req.headers['accept-encoding']);
//    res.write('<h1>中国人</h1>');
//
    //console.log(req.url);
    var url = req.url;
    var path = url.split('?')[0];
    var query = url.split('?')[1];
    if( path == '/baozi'){
        res.end(query.split('=')[1]+'个包子');
        //res.write('<h1>欢迎到包子铺</h1>');

    }
   //res.end("hello哦哦哦");
}
http.createServer(waiter).listen(7000);