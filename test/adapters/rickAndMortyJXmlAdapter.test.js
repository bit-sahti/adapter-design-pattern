
import { jest } from '@jest/globals'

import { RickAndMortyXml } from '../../src/business/integrations/rickAndMortyXml.js'
import { RickAndMortyXmlAdapter } from '../../src/business/adapters/rickAndMortyXmlAdapter.js'

describe('RickAndMortyXml test suite', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should return the results from RickAndMortyXml getCharacters method', async () => {
    const integrationSpy = jest.spyOn(
      RickAndMortyXml,
      RickAndMortyXml.getCharactersFromXml.name
    ).mockResolvedValue([])

    const result = await RickAndMortyXmlAdapter.getCharacters()

    expect(result).toEqual([])
    expect(integrationSpy).toHaveBeenCalledTimes(1)
  })
})