const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuarios'); 
const ProdutosController = require('../controllers/produtos'); 
const OrcamentoController = require('../controllers/orcamento'); 

// definição das rotas
router.get('/usuarios', UsuariosController.listarUsuarios); 
router.post('/usuarios', UsuariosController.cadastrarUsuario); 
router.patch('/usuarios/:usu_id', UsuariosController.editarUsuarios); 
router.delete('/usuarios', UsuariosController.apagarUsuarios); 

router.get('/produtos', ProdutosController.listarProdutos); 
router.post('/produtos', ProdutosController.cadastrarProdutos); 
router.patch('/produtos/:prod_id', ProdutosController.editarProdutos); 
router.delete('/produtos', ProdutosController.apagarProdutos); 

router.get('/orcamento', OrcamentoController.listarOrcamento); 
router.post('/orcamento', OrcamentoController.cadastrarOrcamento); 
router.patch('/orcamento', OrcamentoController.editarOrcamento); 
router.delete('/orcamento', OrcamentoController.apagarOrcamento); 

module.exports = router;

