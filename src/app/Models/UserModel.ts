import { Model, ModelObject } from "objection";
import knex from "../../database/connection";

Model.knex(knex);

export default class UserModel extends Model {
    static tableName = "users";

    id!: string;
    fullname!: string;
    email!: string;
    password!: string;
    avatar!: string;
}

export type UserModelType = ModelObject<UserModel>;
