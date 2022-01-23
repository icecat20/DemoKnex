# DemoKnex

## SET UP

```
npm install knex --save
npm install pg
npm install dotenv --save

npx knex migrate:make create_Table 

npx knex migrate:make update_table

npx knex migrate:make add_user

npx knex migrate:make update_user_Table

npx knex migrate:make delete_user_Table

```
### START PROJECT
```
npm run knex migrate:latest

```