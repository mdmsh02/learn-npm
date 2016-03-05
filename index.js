var app = module.exports = require('koa')();

app.use(function*(){
    this.body ='KOA SAYS HI';
});

var port =  3000;
if (!module.parent) {
   app.listen(port);
}

console.log('Application started');