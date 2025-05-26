-- Listar todos os livros com seus autores
SELECT Autor.Nome, Livro.Titulo
FROM Livro
INNER JOIN Autor ON Autor.ID_Autor = Livro.ID_Autor;

-- Listar todos os empréstimos e os usuários correspondentes
SELECT Emprestimo.ID_Emprestimo, Usuario.Nome
FROM Emprestimo
INNER JOIN Usuario ON Emprestimo.ID_Usuario = Usuario.ID_Usuario;

-- Listar todos os livros e suas categorias
SELECT Livro.Titulo, Categoria.Nome
FROM Livro
INNER JOIN Livro_Categoria ON Livro.ID_Livro = Livro_Categoria.ID_Livro
INNER JOIN Categoria ON Livro_Categoria.ID_Categoria = Categoria.ID_Categoria;

-- Listar todos os livros emprestados
SELECT Livro.Titulo, Usuario.Nome
FROM Emprestimo
INNER JOIN Livro ON Livro.ID_Livro = Emprestimo.ID_Livro
INNER JOIN Usuario ON Emprestimo.ID_Usuario = Usuario.ID_Usuario;

-- Listar todos os autores e seus livros publicados
SELECT Autor.Nome, Livro.Titulo
FROM Livro
INNER JOIN Autor ON Autor.ID_Autor = Livro.ID_Autor;

-- NOVAS BUSCAS --

-- listar todos os livros que ainda não foram devolvidos (empréstimos em aberto]
SELECT Livro.Titulo, Usuario.Nome, Emprestimo.Data_Emprestimo
FROM Emprestimo
INNER JOIN Livro ON Livro.ID_Livro = Emprestimo.ID_Livro
INNER JOIN Usuario ON Emprestimo.ID_Usuario = Usuario.ID_Usuario
WHERE Emprestimo.Data_Devolucao IS NULL;

-- contar quantos livros cada usuário já emprestou
SELECT Usuario.Nome, COUNT(Emprestimo.ID_Emprestimo) AS TotalEmprestimos
FROM Usuario
LEFT JOIN Emprestimo ON Usuario.ID_Usuario = Emprestimo.ID_Usuario
GROUP BY Usuario.Nome;

-- listar as categorias com o total de livros cadastrados em cada uma
SELECT Categoria.Nome, COUNT(Livro_Categoria.ID_Livro) AS TotalLivros
FROM Categoria
LEFT JOIN Livro_Categoria ON Categoria.ID_Categoria = Livro_Categoria.ID_Categoria
GROUP BY Categoria.Nome;
