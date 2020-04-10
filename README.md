<p align="center">
  <img alt="Icon" src="./logo-header.svg" width="60"/>
</p>
<h1 align="center">
  Go Barber Backend
</h1>

<p align="center">
  <a href="https://github.com/leosdesousa12/GoBarber-Backend/graphs/commit-activity" alt="Maintenance">
    <img src="https://img.shields.io/badge/Maintained%3F-yes-green.svg" />
  </a>
  <a href="./LICENSE" alt="License: MIT">
    <img src="https://img.shields.io/badge/License-MIT-blue.svg" />
  </a>
<a href="https://www.codefactor.io/repository/github/leosdesousa12/gobarber-backend"><img src="https://www.codefactor.io/repository/github/leosdesousa12/gobarber-backend/badge" alt="CodeFactor" /></a>
</p>



## Descrição

Iniciando projeto para construção de uma API Rest para agendamento de serviços de beleza.

## Tecnologias

Backend está sendo desenvolvido em NodeJs.

## Backend
Para Executar o bakend, abra o terminal e vá até onde baixou esse repositório, entre na pasta raiz do backend.

Antes de iniciarmos o servidor é nescessário instalar todas as dependências da aplicação, rode o seguinte comando:
```
npm install
``` 
Após inicie o servidor executando:
```
npm start
```

## Banco de Dados Postgress com docker

Utilizando o docker pra isolar o banco de dados da aplicação. Para baixar a versão 11 do postgress certifique que esta com o docker instalado, veja como <a href="https://docs.docker.com/get-docker/">aqui</a> 

execute o container com o seguinte comando, altere a senha, se tiver um postgres já configurado em sua maquina altere a porta por exemplo 54233:5432.
``` 
docker run --name database -e POSTGRES_PASSWORD=password -p 5432:5432 -d postgres:11
```