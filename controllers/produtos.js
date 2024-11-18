const db = require('../database/connection'); 
var fse = require('fs-extra');

function geraUrl (prd) {    
    // garantir que valores em branco carreguem algo
    let img = prd ? prd : 'sem_img.jpg';
    // verifica se imagem existe
    if (!fse.existsSync('./public/' + img)) {
        img = 'sem_img.jpg';
    } 
    // return 'http://10.67.22.144:3333/public/upload/produtos/' + img; // para usar com img html
    return '/public/' + img; //para usar no image do nextjs
}

module.exports = {
    async listarProdutos(request, response) {
        try {            

            const sql = `select * from produtos;`; 

            const produtos = await db.query(sql); 
            const nItens = produtos[0].length; 

            // Itera sobre os usuários e formata o CPF
            const produtosImg = produtos[0].map(produto => ({
                ...produto,
                prod_img: geraUrl(produto.prod_img),                 
            }));

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de produtos.', 
                dados: produtosImg,
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
            const {prod_nome, prod_img, prod_valor_venda, prod_valor_aluguel, prod_descricao}  = request.body;

            const {prod_id} = request.params;

            const sql = `UPDATE PRODUTOS SET prod_nome = ? prod_img = ? prod_valor_venda = ?, prod_valor_aluguel = ?, prod_descricao = ? WHERE prod_id = ?; `;

            const values = [prod_nome, prod_img, prod_valor_venda, prod_valor_aluguel, prod_descricao, prod_id];

            const atualizaDados = await db.query (sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Produto ${prod_id} atualizado com sucesso!`, 
                dados: atualizaDados[0].affectedRows
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

            const {prod_id} = request.params

            const sql = `DELETE FROM produtos WHERE prod_id = ?`;

            const values = [prod_id];

            const excluir = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Produto ${prod_id} excluido com sucesso!`, 
                dados: excluir[0].affectedRows
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
