var app = require('../');
var request = require('supertest').agent(app.listen());

describe('Initial Page Load',()=>{
    it('has a welcome message',(done)=>{
        request
             .get('/')
             .expect('KOA SAYS HI')
             .end(done);
        
    });
});