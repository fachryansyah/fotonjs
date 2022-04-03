import { Model } from "objection";
import knex from "../../database/connection";

Model.knex(knex);

class UserModel extends Model {
  static get tableName() {
    return "users";
  }
}

export default UserModel;
