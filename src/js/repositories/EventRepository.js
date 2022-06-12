import { BaseRepository } from "../Repository.js";

/***
 * AgendaRepository
 * Classe responsavel por manipular os dados dos Eventos.
 */

export class EventRepository extends BaseRepository {
  constructor() {
    super("evento");
  }

  serialize(data) {
    return { ...data };
  }

  deserialize(data) {
    return { ...data };
  }
}