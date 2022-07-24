import axios from 'axios'
import fs from 'fs/promises'
import { jest } from '@jest/globals'

import { Character } from '../../src/entities/character.js'
import { RickAndMortyJson } from '../../src/business/integrations/rickAndMortyJson.js'

describe('RickAndMortyJson test suite', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return a list of character entities', async () => {
    const response = JSON.parse(
      await fs.readFile('./test/mocks/characters.json')
    )
    const expected = response.results.map(data => new Character(data))

    jest.spyOn(axios, 'get').mockResolvedValue({ data: response })

    const result = await RickAndMortyJson.getCharactersFromJson()

    expect(result).toStrictEqual(expected)
  })

  it('should return an empty list if API returns nothing', async () => {
    const response = JSON.parse(
      await fs.readFile('./test/mocks/characters-empty.json')
    )
    const expected = response.results

    jest.spyOn(axios, 'get').mockResolvedValue({ data: response })

    const result = await RickAndMortyJson.getCharactersFromJson()

    expect(result).toStrictEqual(expected)
  })
})
