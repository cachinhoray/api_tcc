const db = require('../database/connection'); 

module.exports = {
    async listarOrcamento(request, response) {
        try {            

            const sql = `select * from orcamento;`; 

            const orcamento = await db.query(sql); 
            const nItens = orcamento[0].length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de orçamento.', 
                dados: orcamento[0]
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 


    async cadastrarOrcamento(request, response) {
        try {        
            
            const { prod_id, orc_mensagem, orc_nome, orc_contato } = request.body;

            const sql = `INSERT INTO ORCAMENTO (prod_id, orc_mensagem, orc_nome, orc_contato) 
            VALUES (?, ?, ?, ?);`

            const values = [prod_id, orc_mensagem, orc_nome, orc_contato];

            const execSql = await db.query(sql,values);
            const orc_id = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro orcamento.', 
                dados: orc_id
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 


    async editarOrcamento(request, response) {
        try {            

            const { orc_mensagem, orc_nome, orc_contato } = request.body;

            const {prod_id} = request.params;

            const sql = `UPDATE ORCAMENTO SET orc_mensagem = ? , orc_nome = ? , orc_contato = ? WHERE prod_id = ?;`;

            const values = [orc_mensagem, orc_nome, orc_contato];

            const atualizaDados = await db.query (sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Orcamento ${prod_id} atualizado com sucesso!', 
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


    async apagarOrcamento(request, response) {
        try {            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'apagar  orcamento.', 
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
