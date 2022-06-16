import { BaseRepository } from "../Repository.js";

/***
 * UserRepository
 * Classe responsavel por manipular dados do usuário
 */

 export class UserARepository extends BaseRepository {
    constructor() {
      super("userA");
    }
  
    serialize(data) {
      return { ...data };
    }
  
    deserialize(data) {
      return { ...data };
    }
  }