const db = require('../database/connection'); 

module.exports = {
    async listarProdutos(request, response) {
        try {            

            const sql = `select * from produtos;`; 

            const produtos = await db.query(sql); 
            const nItens = produtos[0].length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de produtos.', 
                dados: produtos[0],
                nItens
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 


    async cadastrarProdutos(request, response) {
        try {           
            
            const { prod_nome, prod_img, prod_valor_venda, prod_valor_aluguel, prod_descricao } = request.body;

            const sql = `INSERT INTO PRODUTOS (prod_nome, prod_img, prod_valor_venda, prod_valor_aluguel, prod_descricao) 
            VALUES (?, ?, ?, ?, ?);`

            const values = [prod_nome, prod_img, prod_valor_venda, prod_valor_aluguel, prod_descricao];

            const execSql = await db.query(sql,values);
            const prod_id = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro produto.', 
                dados: prod_id
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 


    async editarProdutos(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'editar  produtos.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 


    async apagarProdutos(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'apagar  produtos.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
};  
