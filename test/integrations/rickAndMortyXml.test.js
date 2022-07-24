import { jest } from '@jest/globals'
import axios from 'axios'
import fs from 'fs/promises'
import { RickAndMortyXml } from '../../src/business/integrations/rickAndMortyXml.js'

describe('RickAndMortyXml test suite', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return a list of character entities', async () => {
    const response = await fs.readFile('./test/mocks/characters.xml')

    const expected = [
      {
        gender: 'Male',
        id: 10,
        location: "Worldender's lair",
        name: 'Alan Rails',
        origin: 'unknown',
        species: 'Human',
        status: 'Dead',
        type: 'Superhuman (Ghost trains summoner)',
      },
    ]

    jest.spyOn(axios, 'get').mockResolvedValue({ data: response })

    const result = await RickAndMortyXml.getCharactersFromXml()

    expect(result).toMatchObject(expected)
  })

  it('should return an empty list if API returns nothing', async () => {
    const response = await fs.readFile('./test/mocks/characters-empty.xml')
    const expected = []

    jest.spyOn(axios, 'get').mockResolvedValue({ data: response })

    const result = await RickAndMortyXml.getCharactersFromXml()

    expect(result).toStrictEqual(expected)
  })
})
