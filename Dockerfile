# Use a imagem oficial do Node.js como imagem base
FROM node:14.21.3

# Define o diretório de trabalho no contêiner
WORKDIR /usr/src/app

# Copia todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Instala as dependências do projeto
RUN npm install

# Expõe a porta na qual o servidor Vite será executado
EXPOSE 3000

# Comando para iniciar o servidor Vite
CMD ["npm", "run", "dev"]
