## 🌐 [Versão em Português do README](README.md)

# Performance-Analysis

This repository includes activities, source code, and educational materials developed and shared by Professor Gabriel Silva Denini for the **Performance Analysis** course. The main goal is to provide a central hub with practical challenges, comparative analysis scripts, and supporting content for learning about algorithmic efficiency, memory usage, and optimization techniques in multiple programming environments.

## 🔨 Project Features

- Practical examples of performance analysis for sorting algorithms (Bubble Sort and Selection Sort) in Python and JavaScript.
- Scripts for measuring execution time and real memory usage across different platforms.
- Activities and challenges involving Docker containers and SQLite database operations.
- Exercises covering Bash concepts and terminal commands.
- Automatic result comparison tools to support learning.

### 📸 Visual Example of the Project


  
  


## ✔️ Technologies and Techniques Used

- Python 3 (with libraries: `psutil`, `matplotlib`)
- Node.js / JavaScript (modern, using `fs`, `perf_hooks`)
- TypeScript
- Bash scripting
- SQLite for relational database management
- Docker and Docker Compose for isolated environments
- NGINX, Flask, and Express.js for web server experimentation in containers

## 📁 Project Structure

- **Lesson 1/**: Basic singly linked list examples in JavaScript.
- **Lesson 2/**: Multi-language singly linked list solutions (JS, TS, Python) with execution instructions.
- **Lesson 3/**: Full scripts for sorting performance analysis (timing & memory) with logs and graphs.
- **Lesson 4/**: SQL scripts for database creation and manipulation, hands-on with SQLite.
- **Lesson 5(Challenge 1)/**: Enhanced performance scripts (Python & JS) with accurate measurements.
- **Lesson 6&7/**: Bash activities (conceptual and terminal exercises).
- **Lesson 8/**: Dockerfile examples, basic Flask, Node.js, and NGINX web containers.
- **Lesson 9/**: Dockerized project with Node/Express backend and NGINX reverse proxy.
- **Lesson 10/**: Extra Bash shell challenges.
- **README.md**: This main documentation (in Portuguese).
- **README_EN.md**: English version.
- **package.json / requirements.txt**: Node.js and Python dependencies.
- **replit.nix**: Environment template.
- **LICENSE**: Project license.

## 🛠️ How to Run the Project

To start the project locally, follow these steps:

1. **Ensure Node.js is Installed:**
   - [Node.js](https://nodejs.org/) is required for running the JS/TS scripts.
   - Check installation:
     ```bash
     node -v
     ```
   - If not installed, get the recommended version from the official site.

2. **Install Python (for Python scripts):**
   - Download Python at [python.org](https://python.org/).
   - Install dependencies:
     ```bash
     python -m pip install -r requirements.txt
     ```

3. **Clone the Repository:**
   - Use the command below to fetch a copy:
     ```bash
     git clone 
     ```

4. **Run Performance Analysis Examples:**
   - For Node.js/JavaScript:
     ```bash
     node --expose-gc main_javascript.js
     ```
     Or in the challenge subfolder:
     ```bash
     node 'Lesson 5(Challenge 1)/main_javascript.js'
     ```
   - For Python:
     ```bash
     python3 main_python.py
     ```
     Or with enhancements:
     ```bash
     python3 'Lesson 5(Challenge 1)/main_python.py'
     ```

5. **To Run Docker-based Examples:**
   - Make sure Docker is installed.
   - Use commands like `docker build` and `docker-compose up` in the corresponding lesson directories.

## 🌐 Deploy

You can deploy the projects locally using Docker or directly with Node.js/Python:

- **Docker Compose Example (Lesson 9):**
  ```bash
  cd Lesson\ 9/
  docker-compose up --build
  ```
- **Manual Standalone Deploy:**
  - Edit configuration files as needed, start containers or servers (see Dockerfile, docker-compose.yml, and startup scripts in each directory).