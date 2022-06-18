# ENDPOINTS

List of available Endpoint

### USER

-  "POST /login"
-  "POST /register"

- "GET /products"
- "POST /addNewProduct"
- "PUT /updateProduct/:id"
- "DELETE /deleteProduct/:id"

# POST /login

### Description

- Login Section

### Request

-   Headers

```json
{
    "Content-Type": "application/x-www-form-urlencoded,"
}
```


### Response

_200 - OK_

- Body

```json
{
  "access_token": string
}
```

_400 - Bad Request_

- Body

```json
{
    "message": "Email or Password is required"
}
OR
{
    "message": "Email or Password is invalid"
}
```

# POST /register

### Description

- Register New Account

### Request

-   Headers

```json
{
    "Content-Type": "application/x-www-form-urlencoded,"
}
```

### Response

_201 - Created_

- Body

```json
{
  "message": "User has been created",

  "data": {
    "id": Integer,
    "name": String,
    "email": String
  }
}
```

_400 Bad Request_

- Body

```json
{
    "message": "Name is required"
}
OR
{
    "message": "Email is required"
}
OR
{
    "message": "Email must be unique"
}
OR
{
    "message": "Password is required"
}
```


# GET /products

### Description

- Fetch All Products

### Response

_200 - OK_

- Body

```json
[
  {
    "id": Integer,
    "code": String,
    "name": String,
    "description": String,
    "price": Integer,
    "UOM": String,
    "UserId": Integer
  }
]
```

# POST /addNewProduct

### Description

- Input new Product

### Request

-   Headers

```json
{
    "Content-Type": "application/x-www-form-urlencoded,"
}
```

### Response

_201 - Created_

- Body

```json
{
  "message": "Product has been added",

  "data": {
    "id": Integer,
    "code": String,
    "name": String,
    "description": String,
    "price": Integer,
    "UOM": String,
    "UserId": Integer,
    "updatedAt": String,
    "createdAt": String
  }
}
```

_400 - Bad Request

- Body

```json
{
    "message": "Code is required"
}
OR
{
    "message": "Email must be unique"
}
OR
{
    "message": "Name is required"
}
OR
{
    "message": "Description is required"
}
OR
{
    "message": "Price is required"
}
OR
{
    "message": "UOM is required"
}
OR
{
    "message": "UserId is required"
}
```

# PUT /updateProduct/:id

### Description

- Update Exsist Product by Id

### Request

-   Headers

```json
{
    "Content-Type": "application/x-www-form-urlencoded,"
}
```

### Response

_200 - OK_

- Body

```json
{
    "message": "Product has been updated"
}
```

_404 - Not Found_

- Body

```json
{
    "message": "Product not found"
}
```

# DELETE /deleteProduct/:id

### Description

- Delete Exists Product by Id

### Request

-   Headers

```json
{
    "Content-Type": "application/x-www-form-urlencoded,"
}
```

### Response

_200 - OK_

- Body

```json
{
  "message": "Product has been deleted"
}
```

_404 - Not Found_

- Body

```json
{
    "message": "Product not found"
}
```

### Global Error

### Response

_500 - Internal Server Error_

- Body

```json
{
    "message": "Internal Server Error"
}
```