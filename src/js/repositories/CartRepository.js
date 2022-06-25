import { BaseRepository } from "..Repository.js";

/***
 * 
 * 
 */

export class CartRepository extends BaseRepository {
  constructor() {
    super("cart");
  }

  serialize(data) {
    return { ...data };
  }

  deserialize(data) {
    return { ...data };
  }
}