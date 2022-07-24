
import { jest } from '@jest/globals'

import { RickAndMortyJson } from '../../src/business/integrations/rickAndMortyJson.js'
import { RickAndMortyJsonAdapter } from '../../src/business/adapters/rickAndMortyJsonAdapter.js'

describe('RickAndMortyJson test suite', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return the results from RickAndMortyJson getCharacters method', async () => {
    const integrationSpy = jest.spyOn(
      RickAndMortyJson,
      RickAndMortyJson.getCharactersFromJson.name
    ).mockResolvedValue([])

    const result = await RickAndMortyJsonAdapter.getCharacters()

    expect(result).toEqual([])
    expect(integrationSpy).toHaveBeenCalledTimes(1)

  })
})