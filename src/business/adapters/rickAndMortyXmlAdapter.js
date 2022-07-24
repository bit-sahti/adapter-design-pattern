import { RickAndMortyXml } from '../integrations/rickAndMortyXml.js'

export class RickAndMortyXmlAdapter {
  static async getCharacters() {
    return RickAndMortyXml.getCharactersFromXml()
  }
}
