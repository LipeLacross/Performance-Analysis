## 🌐 [English Version of README](README_EN.md)

# Performance-Analysis

Este repositório reúne atividades, códigos-fonte e materiais didáticos desenvolvidos e compartilhados pelo Professor Gabriel Silva Denini durante a disciplina de **Análise de Performance**. O objetivo é fornecer um hub central com desafios, exemplos práticos, roteiros de análise comparativa e conteúdos úteis para o estudo de eficiência algorítmica, uso de memória, e técnicas de otimização com múltiplas linguagens e ambientes computacionais.

## 🔨 Funcionalidades do Projeto

- Exemplos práticos de análise de desempenho para algoritmos de ordenação (Bubble Sort e Selection Sort) em Python e JavaScript.
- Scripts para mensuração do tempo de execução e uso de memória real em diferentes plataformas.
- Atividades e desafios envolvendo uso de containers Docker e manipulação de bancos de dados SQLite.
- Exercícios de conceitos e comandos Bash.
- Ferramentas de comparação automática de resultados para auxiliar o aprendizado.

## ✔️ Técnicas e Tecnologias Utilizadas

- Python 3 (com pacotes: `psutil`, `matplotlib`)
- Node.js / JavaScript (moderno, com uso de `fs`, `perf_hooks`)
- TypeScript
- Bash scripting
- SQLite para manipulação de bases relacionais (SQL)
- Docker e Docker Compose para ambientes isolados
- NGINX, Flask e Express.js para testes web em containers

## 📁 Estrutura do Projeto

- **Lesson 1/**: Primeiros exemplos de listas encadeadas em JavaScript.
- **Lesson 2/**: Abordagem multi-linguagem de listas encadeadas (JS, TS, Python) e instruções de execução.
- **Lesson 3/**: Scripts completos para análise de performance de algoritmos de ordenação com logs e gráficos.
- **Lesson 4/**: Scripts SQL para criação e manipulação de banco de dados, exemplos práticos em SQLite.
- **Lesson 5(Challenge 1)/**: Versões aprimoradas das análises de desempenho (Python & JS) com medições precisas.
- **Lesson 6&7/**: Atividades sobre Bash (conceitos e comandos de terminal).
- **Lesson 8/**: Exemplos de Dockerfiles, aplicações Flask, Node.js e NGINX para estudos de deploy.
- **Lesson 9/**: Projeto dockerizado com backend Node/Express e reverso NGINX.
- **Lesson 10/**: Desafios extras de Bash.
- **README.md**: Esta documentação principal.
- **README_EN.md**: Versão em inglês.
- **package.json / requirements.txt**: Dependências de Node.js e Python.
- **replit.nix**: Templates de ambiente.
- **LICENSE**: Licença do projeto.

## 🛠️ Abrir e rodar o projeto

Para iniciar o projeto localmente, siga os passos abaixo:

1. **Certifique-se de que o Node.js está instalado:**
   - O [Node.js](https://nodejs.org/) é necessário para rodar partes do projeto (scripts JS/TS).
   - Verifique se já está instalado:
     ```bash
     node -v
     ```
   - Se não estiver, instale a versão recomendada pelo site oficial.

2. **Instale o Python (para scripts Python):**
   - Baixe o Python em [python.org](https://python.org/).
   - Instale as dependências:
     ```bash
     python -m pip install -r requirements.txt
     ```

3. **Clone o Repositório:**
   - Utilize o comando abaixo para obter o projeto:
     ```bash
     git clone 
     ```

4. **Rode exemplos de performance:**
   - Para Node.js/JavaScript:
     ```bash
     node --expose-gc main_javascript.js
     ```
     Ou nas atividades:
     ```bash
     node 'Lesson 5(Challenge 1)/main_javascript.js'
     ```
   - Para Python:
     ```bash
     python3 main_python.py
     ```
     Ou com otimizações:
     ```bash
     python3 'Lesson 5(Challenge 1)/main_python.py'
     ```

5. **Para rodar exemplos com Docker:**
   - Certifique-se de que o Docker está instalado.
   - Utilize comandos como `docker build` e `docker-compose up` nos diretórios correspondentes a cada exemplo.

## 🌐 Deploy

Você pode experimentar o deploy local dos projetos usando Docker ou diretamente com Node.js/Python:

- **Docker Compose (exemplo - Lesson 9):**
  ```bash
  cd Lesson\ 9/
  docker-compose up --build
  ```
- **Deploy manual de uma API/serviço:**
  - Altere arquivos de configuração conforme necessário, inicie containers ou servidores na máquina local (veja exemplos de Dockerfile, docker-compose.yml e scripts de inicialização dentro de cada diretório).