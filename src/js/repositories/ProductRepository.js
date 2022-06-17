import { BaseRepository } from "../Repository.js";

/***
 * ProductRepository
 * Classe responsavel por manipular dados do produto.
 */

 export class ProductRepository extends BaseRepository {
    constructor() {
      super("produto");
    }
  
    serialize(data) {
      return { ...data };
    }
  
    deserialize(data) {
      return { ...data };
    }
  }