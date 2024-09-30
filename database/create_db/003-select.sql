SELECT usu_id, usu_nome, usu_email, usu_senha 
FROM USUARIOS;

SELECT prod_id, prod_nome, prod_img, prod_valor_venda, prod_valor_aluguel, prod_descricao 
FROM PRODUTOS;

SELECT orc_id, prod_id, orc_mensagem, orc_nome, orc_contato 
FROM ORCAMENTO;

SELECT 
    ORCAMENTO.orc_id, 
    ORCAMENTO.prod_id, 
    ORCAMENTO.orc_mensagem, 
    ORCAMENTO.orc_nome, 
    ORCAMENTO.orc_contato, 
    PRODUTOS.prod_nome, 
    PRODUTOS.prod_img, 
    PRODUTOS.prod_valor_venda, 
    PRODUTOS.prod_valor_aluguel, 
    PRODUTOS.prod_descricao
FROM ORCAMENTO
JOIN PRODUTOS ON ORCAMENTO.prod_id = PRODUTOS.prod_id;
