CREATE TABLE USUARIOS (
    usu_id INT AUTO_INCREMENT PRIMARY KEY,
    usu_nome VARCHAR(100),
    usu_email VARCHAR(100),
    usu_senha VARCHAR(255)
);

CREATE TABLE PRODUTOS (
    prod_id INT AUTO_INCREMENT PRIMARY KEY,
    prod_nome VARCHAR(100),
    prod_img VARCHAR(255),
    prod_valor_venda DECIMAL(10, 2),
    prod_valor_aluguel DECIMAL(10, 2),
    prod_descricao TEXT
);

CREATE TABLE ORCAMENTO (
    orc_id INT AUTO_INCREMENT PRIMARY KEY,
    prod_id INT,
    orc_mensagem TEXT,
    orc_nome VARCHAR(100),
    orc_contato VARCHAR(100),
    FOREIGN KEY (prod_id) REFERENCES PRODUTOS(prod_id)
);