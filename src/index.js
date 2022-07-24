import { RickAndMortyJsonAdapter } from "./business/adapters/rickAndMortyJsonAdapter.js";
import { RickAndMortyXmlAdapter } from "./business/adapters/rickAndMortyXmlAdapter.js";

const data = [
    RickAndMortyJsonAdapter,
    RickAndMortyXmlAdapter
].map(integration => integration.getCharacters())

const promises = await Promise.allSettled(data)

const sucesses = promises
                    .filter(({ status }) => status === 'fulfilled')
                    .map(({ value }) => value)
                    .reduce((acc, data) => acc.concat(data), [])

const errors = promises.filter(({ status }) => status === 'rejected')

console.table(sucesses)
console.table(errors)