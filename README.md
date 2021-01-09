# meli-test-api

## Installing

Using npm:

```bash
$ npm install
```

Using yarn:

```bash
$ yarn
```

## Running the server

```bash
$ npm run start
```

Then, the server is available at: `http://localhost:3000/`

## Endpoints documentation

### Search

GET `/api/items?q=:query`

This endpoint returns the 4 most relevant results for a submitted query.

#### Parameters

| Name | Data Type | Required / Optional | Description                  |
|:-----|:----------|:--------------------|------------------------------|
| q    | string    | required            | Search term (e.g. "zapatos") |


## Development log

| Date       | Spent time (mins) | Description                                                 |
|:-----------|:-----------------:|:------------------------------------------------------------|
| 2021-01-08 |        30         | Analizing submitted test                                    |
| 2021-01-08 |        30         | Endpoints analysis                                          |
| 2021-01-08 |        60         | Local dev environment setup                                 |
| 2021-01-08 |        30         | Research on Express and Node API design and creation        |
| 2021-01-09 |        60         | Research and test of Node HTTP libraries and best practices |
| 2021-01-09 |        120        | Development of `search` API endpoint                        |
| 2021-01-09 |        30         | Dev tools and linting cleanup                               |
| 2021-01-09 |        30         | Add endpoints project documentation                         |