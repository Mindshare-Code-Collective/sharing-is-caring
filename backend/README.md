# Sharing is caring - Backend

This project is an online exchange server developed with Express and Mongoose. Users can share their used goods through this app, and view and follow other user's exchange offers.

## Backend Technologies
 
- Express
- Validator
- Mongoose
- Dotenv
- Body-Parser
- Cookie-parser
- Json Web Token
- Bcrypt
- Cors

<hr>

## Routes

### User routes

| HTTP verb | URL               | Request Headers | Request Body              | Action                         |
| --------- | ------------------| --------------- | ------------------------- |------------------------------- |
| POST      | `/users/register` | (empty)         | { name, password, email } | Register new user              |
| POST      | `/users/login`    | (empty)         | { name, password }        | Login registered user          |
| POST      | `/users/logout`   | Auth: JWT       |                           | Logout user                    |
| GET       | `/users/:id`      | Auth: JWT       |                           | Returns data of logged in user |



### Product routes

| HTTP verb | URL                  | Request body | Action                     |
| --------- | -------------------- | ------------ | -------------------------- |
| POST      | `/products/`         | JSON         | Adds a new product         |
| GET       | `/products/`         | (empty)      | Returns all products       |
| GET       | `/products/:id`      | (empty)      | Returns a product by id    |
| PATCH     | `/products/:id`      | (empty)      | Delete a product by id     |
| PATCH     | `/products/:id`      | (empty)      | Reserve a product by id    |
| PATCH     | `/products/:id`      | (empty)      | Online a product by id     |
| PATCH     | `/products/:id`      | JSON         | Update a product by id     |


### Message routes

| HTTP verb | URL                        | Request body                                  | Action                     |
| --------- | -------------------------- | --------------------------------------------- |--------------------------- |
| POST      | `/messages/send`           | { product, owner, customer, messages[{        | Adds a new conversation    |
|           |                            |                  senderId, messageContent}] } |                            |
| GET       | `/messages/:conversationId`| (empty)                                       | Returns a message by id    |
| PATCH     | `/messages/addto`          | { conversationId, senderId, messageContent }  | Returns a message by id    |


<hr>

## Testing Routes

- See cookies for copying jwt token.

<hr>

## Models

### User Model

```js
{
    name: {
      type: String,
      required: [true, 'Der Bereich „Benutzername“ ist erforderlich'],
      lowercase: true,
      validate: [validator.isAlphanumeric, 'Nur alphanumerische Zeichen'],
    },
    email: {
      type: String,
      required: [true, 'Der Bereich „Email“ ist erforderlich'],
      unique: true,
      validate: [validator.isEmail, 'Eine gültige E-Mail-Adresse ist erforderlich'],
    },
    password: {
      type: String,
      required: [true, 'Der Bereich „Password“ ist erforderlich'],
      minLength: [4, 'Mindestens 4 Zeichen'],
    },
  }
```

### Product Model

```js
{
    name: { type: String, required:true, trim:true, },
    category: { type: String, required: true, trim: true, },
    trade: { type: String, required: true, trim: true, enum: ['Tauschen', 'Verschenken'], default: 'Tauschen', },
    condition: { type: String, required: true, trim: true, enum: ['KA', 'Neu', 'Gebraucht'], default: 'KA' },
    shipment: { type: String, required: true, trim: true, enum: ['KA', 'Abholung', 'Versand'], default: 'KA' },
    description: { type: String, required: true, trim: true, },
    picture: { type: String, trim: true, },
    contact: { type: String, trim: true, },
    uploadedAt: { type: Date, default: Date.now, },
    user: { type: Schema.Types.ObjectId, ref: 'User', },
    url: { type: String, },
    image_id : { type: String, }
    status : { type:String, required:true, }
}
```

### Message Model

```js
{   
    messagesSchema
    
   senderId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    messageContent: {
      type: String,
      required: true,
      maxlength: 1000
    }
}
```

```js
{   
    conversationSchema

     product: {
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    customer: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    messages: [messageSchema]
}
```


