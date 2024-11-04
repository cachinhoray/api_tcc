const db = require('../database/connection'); 

module.exports = {
    async listarUsuarios(request, response) {
        try {     
            
            const sql = `select * from usuarios;`; 

            const usuarios = await db.query(sql); 
            const nItens = usuarios[0].length;

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: usuarios[0], 
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


    async cadastrarUsuario(request, response) {
        try {            
            const { usu_nome, usu_email, usu_senha } = request.body;

            const sql = `INSERT INTO USUARIOS (usu_nome, usu_email, usu_senha) 
            VALUES (?, ?, ?);`

            const values = [usu_nome, usu_email, usu_senha];

            const execSql = await db.query(sql,values);
            const usu_id = execSql[0].insertId;
            

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro usuario.', 
                dados: usu_id                
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 


    async editarUsuarios(request, response) {
        try {            
            const { usu_nome, usu_email, usu_senha } = request.body;

            const {usu_id} = request.params;

            const sql = `UPDATE USUARIOS SET usu_nome = ?, usu_email = ?, usu_senha = ? WHERE usu_id = ?;`;

            const values = [usu_nome, usu_email, usu_senha, usu_id];

            const atualizaDados = await db.query(sql,values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Usuário ${usu_id} atualizado com sucesso!`, 
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


    async apagarUsuarios(request, response) {
        try {            

            const {usu_id} = request.params

            const sql = `DELETE FROM usuarios WHERE usu_id = ?`;

            const values = [usu_id];

            const excluir = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Usuário ${usu_id} excluido com sucesso!`, 
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
