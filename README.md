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

Then, the server is available at: `http://localhost:5000/`

## Building the client and serving the application

```bash
$ npm run setup && npm run start
```

These commands will install the dependencies and build the client application. After that, the main server will be started and you will be able to navigate it at: `http://localhost:5000/`

## Endpoints documentation

### Search

GET `/api/items?q=:query`

This endpoint returns the 4 most relevant results for a submitted query.

#### Parameters

| Name | Data Type | Required / Optional | Description                  |
|:-----|:----------|:--------------------|:-----------------------------|
| q    | string    | required            | Search term (e.g. "zapatos") |

### Item Details

GET `/api/items/:id`

This endpoint returns detailed information of a requested product.

#### Parameters

| Name | Data Type | Required / Optional | Description      |
|:-----|:----------|:--------------------|:-----------------|
| id   | string    | required            | Item internal ID |


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
| 2021-01-09 |        40         | Development of `item` API endpoint                          |
| 2021-01-09 |        30         | React client app setup                                      |
| 2021-01-09 |        30         | Client app configuration                                    |
| 2021-01-09 |        60         | Header component                                            |
| 2021-01-10 |        30         | CategoryPath component                                      |
| 2021-01-10 |        60         | ListItem and ListItems components                           |
| 2021-01-10 |        40         | ItemDetails component                                       |
| 2021-01-10 |        120        | Data retriving and state management with `recoil`           |
| 2021-01-10 |        40         | Data wiring of Item Details                                 |
| 2021-01-10 |        30         | Minor adjusts and final test                                |
