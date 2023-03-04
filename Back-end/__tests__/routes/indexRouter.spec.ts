import request from "supertest";
import app from "../../src/index";

describe('Teste das rotas de usuários', () => {

    it('Create - usuario - respond with a json message', async () => {
        request(app)
            .post("/usuario")
            .set('Accept', 'application/json')
            .send({
                "nome":"Calebe",
                "email":"calebe@email.com",
                "senha":"1234",
                "isAdmin": false
            })
            .expect('Content-Type', /json/)
            .expect(201);
        });
        
        it('Get All - usuarios - respond with a json message', async () => {
             request(app)
                .get('/usuario')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200);
        });
    
    
        it('Get One - usuario - respond with a json message', async () => {
            request(app)
                .get("/usuario/id")
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200);
        });
    
    
    
        it('Update - usuario - respond with a json message', async () => {
            request(app)
                .put("/usuario/id")
                .set('Accept', 'application/json')
                .send({
                    "nome":"Calebe Venancio"
                })
                .expect('Content-Type', /json/)
                .expect(204);
        });
    
        it('Delete - categoria - respond with a json message', async () => {
            request(app)
                .delete("/usuario/id")
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(204);
        });

});

describe('Teste das rotas das categorias', () => {

    it('Create - categoria - respond with a json message', async () => {
        request(app)
            .post("/categoria")
            .set('Accept', 'application/json')
            .send({
                "nome":"Ficção"
            })
            .expect('Content-Type', /json/)
            .expect(201);
    });    
    
    
    it('Get All - categorias - respond with a json message', () => {
        request(app)
            .get('/categoria')
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    });


    it('Get One - categoria - respond with a json message', async () => {
        request(app)
            .get("/categoria/id")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(200);
    });



    it('Update - categoria - respond with a json message', async () => {
        request(app)
            .put("/categoria/id")
            .set('Accept', 'application/json')
            .send({
                "nome":"Terror"
            })
            .expect('Content-Type', /json/)
            .expect(204);
    });

    it('Delete - categoria - respond with a json message', async () => {
        request(app)
            .delete("/categoria/id")
            .set('Accept', 'application/json')
            .expect('Content-Type', /json/)
            .expect(204);
    });

});

describe('Teste das rotas de livros', () => {

    it('Create - livro - respond with a json message', async () => {
        request(app)
            .post("/livro")
            .set('Accept', 'application/json')
            .send({
                "nome":"Livro 1",
                "foto":"capa",
                "preco": 55,
                "descricao":"teste",
                "categoria": "categoria",
                "autor": "George R. R. Martin"
            })
            .expect('Content-Type', /json/)
            .expect(201);
        });
        
        it('Get All - livros - respond with a json message', () => {
            request(app)
                .get('/livro')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200);
        });
    
    
        it('Get One - livro - respond with a json message', async () => {
            request(app)
                .get("/livro/id")
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200);
        });
    
    
    
        it('Update - livro - respond with a json message', async () => {
            request(app)
                .put("/livro/id")
                .set('Accept', 'application/json')
                .send({
                    "nome":"A Guerra dos Tronos"
                })
                .expect('Content-Type', /json/)
                .expect(204);
        });
    
        it('Delete - livro - respond with a json message', async () => {
            request(app)
                .delete("/livro/id")
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(204);
        });

});

describe('Teste das rotas de pedidos', () => {

    it('Create - pedido - respond with a json message', async () => {
        request(app)
            .post("/pedido")
            .set('Accept', 'application/json')
            .send({
                "usuario":"usuario 1",
                "produto":"livro",
                "ValorTotal": 55
            })
            .expect('Content-Type', /json/)
            .expect(201);
        });
        
        it('Get All - pedido - respond with a json message', () => {
            request(app)
                .get('pedido')
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200);
        });
    
    
        it('Get One - pedido - respond with a json message', async () => {
            request(app)
                .get("/pedido/id")
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200);
        });
    
    
    
        it('Update - pedido - respond with a json message', async () => {
            request(app)
                .put("/pedido/id")
                .set('Accept', 'application/json')
                .send({
                    "produto":"livro 2",
                    "ValorTotal": 60
                })
                .expect('Content-Type', /json/)
                .expect(204);
        });
    
        it('Delete - pedido - respond with a json message', async () => {
            request(app)
                .delete("/pedido/id")
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(204);
        });

});