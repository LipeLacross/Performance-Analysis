-- mais 15 autores
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (4, 'Agatha Christie', '1890-09-15');
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (5, 'Isaac Asimov', '1920-01-02');
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (6, 'Stephen King', '1947-09-21');
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (7, 'Neil Gaiman', '1960-11-10');
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (8, 'Suzanne Collins', '1962-08-10');
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (9, 'Dan Brown', '1964-06-22');
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (10, 'Margaret Atwood', '1939-11-18');
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (11, 'Philip K. Dick', '1928-12-16');
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (12, 'Arthur C. Clarke', '1917-12-16');
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (13, 'Haruki Murakami', '1949-01-12');
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (14, 'Clarice Lispector', '1920-12-10');
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (15, 'Machado de Assis', '1839-06-21');
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (16, 'Lygia Fagundes Telles', '1923-04-19');
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (17, 'Fernando Sabino', '1923-10-12');
INSERT INTO Autor (ID_Autor, Nome, Data_Nascimento) VALUES (18, 'Cecília Meireles', '1901-11-07');

-- mais 15 categorias
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (4, 'Romance');
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (5, 'Mistério');
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (6, 'Drama');
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (7, 'Terror');
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (8, 'Poesia');
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (9, 'Clássico');
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (10, 'Juvenil');
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (11, 'Distopia');
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (12, 'Suspense');
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (13, 'Biografia');
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (14, 'História');
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (15, 'Ação');
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (16, 'Humor');
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (17, 'Policial');
INSERT INTO Categoria (ID_Categoria, Nome) VALUES (18, 'Psicologia');

-- Inserir mais 15 livros
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (4, 'Assassinato no Expresso Oriente', 4, 1934);
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (5, 'Fundação', 5, 1951);
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (6, 'O Iluminado', 6, 1977);
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (7, 'Deuses Americanos', 7, 2001);
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (8, 'Jogos Vorazes', 8, 2008);
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (9, 'O Código Da Vinci', 9, 2003);
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (10, 'O Conto da Aia', 10, 1985);
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (11, 'Androides Sonham com Ovelhas Elétricas?', 11, 1968);
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (12, '2001: Uma Odisseia no Espaço', 12, 1968);
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (13, 'Kafka à Beira-Mar', 13, 2002);
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (14, 'A Hora da Estrela', 14, 1977);
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (15, 'Dom Casmurro', 15, 1899);
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (16, 'As Meninas', 16, 1973);
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (17, 'O Encontro Marcado', 17, 1956);
INSERT INTO Livro (ID_Livro, Titulo, ID_Autor, Ano_Publicacao) VALUES (18, 'Viagem', 18, 1939);

-- mais 15 associações Livro_Categoria
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (4, 5);
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (5, 2);
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (6, 7);
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (7, 1);
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (8, 10);
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (9, 12);
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (10, 11);
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (11, 2);
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (12, 2);
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (13, 4);
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (14, 6);
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (15, 9);
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (16, 6);
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (17, 4);
INSERT INTO Livro_Categoria (ID_Livro, ID_Categoria) VALUES (18, 8);

-- mais 15 usuários
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (4, 'Diana', 'diana@example.com');
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (5, 'Eduardo', 'eduardo@example.com');
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (6, 'Fernanda', 'fernanda@example.com');
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (7, 'Gabriel', 'gabriel@example.com');
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (8, 'Helena', 'helena@example.com');
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (9, 'Igor', 'igor@example.com');
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (10, 'Julia', 'julia@example.com');
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (11, 'Kleber', 'kleber@example.com');
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (12, 'Larissa', 'larissa@example.com');
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (13, 'Marcos', 'marcos@example.com');
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (14, 'Nina', 'nina@example.com');
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (15, 'Otávio', 'otavio@example.com');
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (16, 'Paula', 'paula@example.com');
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (17, 'Rafael', 'rafael@example.com');
INSERT INTO Usuario (ID_Usuario, Nome, Email) VALUES (18, 'Sofia', 'sofia@example.com');

-- mais 15 empréstimos
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (4, 4, 4, '2024-07-12', '2024-07-20');
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (5, 5, 5, '2024-07-13', '2024-07-21');
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (6, 6, 6, '2024-07-14', NULL);
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (7, 7, 7, '2024-07-15', '2024-07-23');
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (8, 8, 8, '2024-07-16', NULL);
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (9, 9, 9, '2024-07-17', '2024-07-25');
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (10, 10, 10, '2024-07-18', '2024-07-26');
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (11, 11, 11, '2024-07-19', NULL);
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (12, 12, 12, '2024-07-20', NULL);
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (13, 13, 13, '2024-07-21', '2024-07-29');
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (14, 14, 14, '2024-07-22', NULL);
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (15, 15, 15, '2024-07-23', '2024-07-30');
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (16, 16, 16, '2024-07-24', NULL);
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (17, 17, 17, '2024-07-25', '2024-08-01');
INSERT INTO Emprestimo (ID_Emprestimo, ID_Livro, ID_Usuario, Data_Emprestimo, Data_Devolucao) VALUES (18, 18, 18, '2024-07-26', NULL);
