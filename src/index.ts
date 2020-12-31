import { Person, City } from './dataTypes';

const people = [
  new Person('Yamato Matsushita', 'Osako'),
  new Person('Caio Tony', 'Luanda'),
];
const cities = [
  new City('Luanda', 6000000),
  new City('Osako', 4050220),
]

type standard_object = {
  name: string,
  population?: number,
  city?: string,
};

class DataCollection<T extends standard_object, U extends standard_object> {
  private readonly items: T[] = [];
  constructor(initialItems: T[]) {
    this.items.push(...initialItems);
  }
  collate(targetObject: U[], itemProp: string, targetProp: string) {
    let results: string[] = [];
    this.items.forEach( item => {
      const match = targetObject.find(Titem => item[itemProp] === Titem[targetProp]);
      console.log()
      if (match !== undefined) {
        results.push(`${item.name} lives in ${match.name}`);
      }
    });
    return results;
  }
}

const data = new DataCollection<Person, City>(people);

const phrase = data.collate(cities, 'city', 'name');

console.log(phrase);