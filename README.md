Prototype project - CRUD users on NODE.js without database ( use json.file as storage)

GET `curl http://localhost:3000/users`

POST `curl -X POST http://localhost:3000/users -H 'Content-Type: application/json' -d '{"name":"Ruslan", "id": "1"}'`

PATCH `curl -X PATCH http://localhost:3000/users/1 -H 'Content-Type: application/json' -d '{"name":"Ruslan changed"}'`

DELETE `curl -X DELETE http://localhost:3000/users/1`

TODO: tests, error handling
