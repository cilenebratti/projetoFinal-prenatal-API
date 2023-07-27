<p align="center"> <img src="material/preNatal_capa.png" alt="prenatal_capa" width="600"> 

</p> <p align="center"> </p>



# <b> Prenatal-API | Projeto final [{Reprograma}](https://www.reprograma.com.br/) </b>

Projeto final de conclusão de curso JavaScript Back-end On22B3 da {Reprograma}. Trata-se se uma API REST das informações de prénatal de pacientes em uma unidade básica de saúde (UBS) da cidade de Osasco.

</br>

## <b> Objetivo </b>
</br>
Esta API foi idealizada como ferramenta complementar do sistema de prontuário eletrônico utilizado nas UBS's da Cidade de Osasco, pois este não contempla todas as necessidades específicas para automatização do monitoramento de pacientes em acompanhamento prenatal pelas enfermeiras das unidades.

</br>

## <b> Funcionalidades </b>
</br>

O Schema do prenatal_acervo deve possuir os seguintes campos:
</br>

- Número do prontuário;
- Nome da paciente;
- Data de nascimeto;
- Número do cartão SUS;
- Data da ultima mnestruação;
- Data provável do parto;
- Datas da agenda de Exames trimestrais;
- Datas das 10 consultas mínimas com obstetra e enfermeira;
- Data da consulta puerperal (pós parto);
- Observação (comorbidades pré existentes).

</br>
API deve permitir: 

</br>
Prenatal:

- Cadastro de pacientes;
- Visualização de todos os cadastros;
- Atualização de cadastro;
- Deletar cadastro;

</br>  

Cadastro:
- Cadastrar usuários autorizados;
- Visualização de todos os usuários cadastrados;
- Deletar cadastro de usuário;
- Login de usuário cadastrado para geração de token;

</br>

## <b> Arquitetura MVC </b>

```
 📁 prenatal_acervo
   |
   |--📁node_modules    
   |      
   |--📁 src
   |  ||
   |  ||
   |  ||--📁 controller
   |  |    |- 📄 cadastroController.js
   |  |    |- 📄 prenatalController.js
   |  |
   |  ||--📁 database
   |  |    |- 📄 dbConnect.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 cadastroModels.js
   |  |    |- 📄 prenatalModels.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 cadastroRoute.js
   |  |    |- 📄 prenatalRoutes.js
   |  |
   |  ||-📄 app.js
   |  |
   |  |--📁 swagger
   |  |   |- 📄 swagger_output.json
   |  |
   |- 📄 .env
   |- 📄 .env.example
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📑 Procfile
   |- 📄 README.md
   |- 📄 server.js
   |- 📄 swagger.js

```
</br>

## <b> Tecnologias e Dependências </b>
</br>

| FERRAMENTA   |  DESCRIÇÃO |
| --- | --- |
| `javascript` | Linguagem de programação. |
| `node.js`    | Ambiente de execução do javascript.|
| `express`    | Framework NodeJS. |
| `mongoose`   | Dependência que interação com o MongoDB para a conexão da database, criação do model e das collections.|
| `nodemon`    | Dependência que observa as atualizações realizadas nos documentos para rodar o servidor automaticamente.|
| `npm`| Gerenciador de pacotes.|
| `MongoDb`    | Banco de dados não relacional orietado a documentos.|
| `Mongo Atlas`| Interface gráfica para verificar se os dados foram guardados.|
| `Postman` | Interface gráfica para realizar os testes.|
| `dotenv`| Dependência  para gerenciar facilmente variáveis de ambiente, não é obrigatório para JWT, mas uma boa prática para configurações em geral.|
| `swagger-autogen`| Gera a documentação.|
| `Reder`| hospeda a documentação.|


</br>
</br>

- Projeto está hospedado [aqui]()
- Documentação está hospedado [aqui](http://localhost:2015/minha-rota-de-documentacao/)

</br>

## <b> Instalações </b>

```bash
# Clonar o repositório
$ git clone https://github.com/cilenebratti/projetoFinal-prenatal-API.git

# Entrar na pasta do repositório
$ cd prenatal_acervo

# Dependências Instaladas
- npm install
- npm init -y
- npm install express@^4.18.2
- npm install cors@^2.8.5
- npm install nodemon@^3.0.1
- npm install mongoose@^7.4.1
- npm i dotenv@^8.6.0
- npm install bcrypt@5.1.0
- npm install jsonwebtoken@^9.0.1
- npm install swagger-autogen@^2.23.5
- npm install swagger-ui-express@^5.0.0

# Executar o servidor
$ npm start
```
</br>

## <b> Rotas/EndPoints </b>
</br>
 

| Verbo  |    EndPoint     |       Descrição da Rota             | Status |
| ------ | -------------   | ------------------------------------| ------ | 
| POST   | /cadastro-prenatal/prenatal/new|Adicionar novo prenatal |  200 |
| GET    | /cadastro-prenatal/prenatal/all | Listar todos cadastros de prenatais  | 200 |
| GET    | /cadastro-prenatal/prenatal/consultas | Listas consultas por data |  200  |
| GET    | /cadastro-prenatal/prenatal/exams | Listas exames por data   |  200  |
| PATCH  | /cadastro-prenatal/prenatal/update | Atualizar prenatal por numero de prontuário  |  200  |
| GET  | /cadastro-prenatal/prenatal/:numeroProntuario | Buscar por numero de prontuário |   200  |
| DELETE | /cadastro-prenatal/prenatal/delete |  Deletar uma Doula por ID    |   200  |

</br>

## <b> Agradecimentos </b>
</br>
API em processo de desenvolvimento por Jucilene Brattti (Juci), com orientação das incriveis professoras, monitoras e facilitadora: 
</br>

- Sky Alarcon, 
- Gaia Caversan,
- Carol Alves (Doguinho!),
- Agnes Ignácio e 
- Andreza Pipolo. 

Obrigada por segurarem minhas mãos e guiarem minha mente. Vocês são minha inspiração!

Agradecimento muito especial para minha irmã querida e amada Juceia Ferreira. Sem Você não existiria esse projeto. Para Você, por Você!!! 

Ao meu marido lindo e filha amada, obrigada por secarem minhas lagrimas, me ajudar quando surtava, super suporte técnico e pela imensa paciência comigo. Amo Vocês!!!

Agradeço a minhas colegas, pelo apoio. Em especial: Leticia, Patricia, Nadia, Sarah, Graciella's, Angela, Aline's, Aglair, Nazaré... todas!