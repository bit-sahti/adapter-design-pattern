import { RickAndMortyJson } from '../integrations/rickAndMortyJson.js'

export class RickAndMortyJsonAdapter {
  static async getCharacters() {
    return RickAndMortyJson.getCharactersFromJson()
  }
}
