# Schema

> {DISCLAIMER} inspired by Mongoose API

### Usage

```js
import { Schema, Model, Reference } from "etherio"
import MediaImages from "./media-images"

const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  emailAddress: {
    type: String,
    required: true
  },
  emailVerified: {
    type: Boolean,
    required: true
  },
  age: {
    type: Number,
    default: 18
  },
  avatar: {
    type: String,
    ref: Model.ref(MediaImages)
  }
}, {
  timestamps: true // updatedAt & createdAt fields will be generated with unix timestamp in microseconds 
})

class User extends Model {
  //...
}

User.use('users', UserSchema)

export default User

```
