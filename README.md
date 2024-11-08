# SJCC-FrontEnd

Projeto do RiseUp

# Para rodar o backend, você precisa ter os seguintes requisitos instalados:

- **Node.js** versão 20 ou superior
- **Docker** e **Docker Compose** instalados

## Instruções de execução

### Passo 1: GIT clone e Acesse o diretório do backend

No terminal, clone o repositório e navegue até o diretório do backend:

```bash
git clone https://github.com/victorb-s/SJCC-Desenvolvimento.git
```

```bash
cd backend
```

* Lembre-se de ir para a branch mais atualizada do projeto (Develop).

### Passo 2: Instale as dependências

Execute o comando abaixo para instalar todas as dependências do Node.js listadas no arquivo package.json:

```bash
npm install
```

### Passo 3: Suba os containers do Docker

Use o Docker Compose para rodar os containers necessários para o seu backend:

```bash
docker-compose up -d
```

Este comando irá iniciar os containers em segundo plano.

### Passo 4: Inicie a aplicação

Agora, inicie a aplicação Node.js com o comando:

```bash
node app.js
```

Isso irá rodar o backend na sua máquina local.

### Passo 5: Acesse a documentação da API

Para acessar a documentação da API, abra seu navegador e acesse o seguinte endereço:

```bash
http://localhost:3000/api-docs/
```

A documentação é gerada automaticamente, permitindo que você explore os endpoints da API e veja exemplos de requisições e respostas.
