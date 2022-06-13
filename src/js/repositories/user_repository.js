import { BaseRepository } from "../Repository.js";

/***
 * UserRepository
 * Classe responsavel por manipular os dados dos jogos.
 */

 export class UserRepository extends Repository {
    constructor() {
      super("user");
    }
  
    serialize(data) {
      return { ...data };
    }
  
    deserialize(data) {
      return { ...data };
    }
  }