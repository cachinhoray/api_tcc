INSERT INTO USUARIOS (usu_nome, usu_email, usu_senha) VALUES 
('João Silva', 'joao.silva@email.com', 'senha123'),
('Maria Oliveira', 'maria.oliveira@email.com', 'senha456'),
('Carlos Souza', 'carlos.souza@email.com', 'senha789');

INSERT INTO PRODUTOS (prod_nome, prod_img, prod_valor_venda, prod_valor_aluguel, prod_descricao) VALUES 
('Produto A', 'img_a.png', 500.00, 50.00, 'Descrição do Produto A'),
('Produto B', 'img_b.png', 700.00, 70.00, 'Descrição do Produto B'),
('Produto C', 'img_c.png', 900.00, 90.00, 'Descrição do Produto C');

INSERT INTO ORCAMENTO (prod_id, orc_mensagem, orc_nome, orc_contato) VALUES 
(1, 'Preciso de mais informações sobre o Produto A.', 'João Silva', 'joao.silva@email.com'),
(2, 'Gostaria de um orçamento para o Produto B.', 'Maria Oliveira', 'maria.oliveira@email.com'),
(3, 'Tenho interesse no Produto C para aluguel.', 'Carlos Souza', 'carlos.souza@email.com');
