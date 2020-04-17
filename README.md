# Fullstack Task Manager Api

The api for the fullstack task manager.

## Api

Built with Express, mongoose, including validation with Joi.

# Api endpoints

| [x] | Route                 | Arguments   | Payload                                                                    | Return              |
| --- | --------------------- | ----------- | -------------------------------------------------------------------------- | ------------------- |
| [x] | GET /api/tasks        |             |                                                                            | [ { Task } ] OR [ ] |
| [x] | POST /api/tasks       |             | { description (string, minLength = 4), completed (boolean) default false } | { Task }            |
| [x] | PATCH /api/tasks/:id  | :id task Id | { description (string, minLength = 4), completed (boolean) }               | { Task }            |
| [x] | DELETE /api/tasks/:id | :id task Id |                                                                            | { Task }            |
