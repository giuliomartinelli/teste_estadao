
## Instalação

Execute o arquivo start.sh

```bash
./start.sh
```
ou execute os seguintes comandos na raiz do projeto

```bash
cd api

npm install

cd ../app

npm install
npm run build

cd ..

docker-compose up

```

## URL

Lista de notícias 
```bash
http://localhost/
```
CRUD de notícias
```bash
http://localhost/crud
```
api notícias
```bash
http://localhost:3020/articles
```
