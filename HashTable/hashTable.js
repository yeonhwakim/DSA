const hashTableSize = 100

class HashTable {
  constructor() {
    this.nodes = Array(hashTableSize).fill(0).map(() => [])
  }

  set(key, value) {
    const index = this.hash(key)

    const node = this.nodes[index].find(i => i.key === key)

    if (node) {
      node.value = value
      return
    }

    this.nodes[index].push({ key, value })
  }

  get(key) {
    const index = this.hash(key)

    const node = this.nodes[index].find(i => i.key === key)

    return node ? node.value : undefined
  }

  delete(key) {
    const index = this.hash(key)

    const i = this.nodes[index].findIndex(i => i.key === key)

    if (i < 0) {
      return
    }

    this.nodes[index].splice(i, 1)
  }

  deleteAll() {
    this.nodes = Array(hashTableSize).fill(0).map(() => [])
  }

  hash(key) {
    let digest = 0;
    for (let i = 0; i < key.length; i++) {
      digest += key.charCodeAt(i);
    }
    return digest % hashTableSize;
  }

  getKeys() {
    const keys = []
    this.nodes.forEach(node => {
      node.forEach(i => {
        keys.push(i.key)
      })
    })
    return keys
  }

  hasKey(key) {
    const index = this.hash(key)

    const node = this.nodes[index].find(i => i.key === key)
    return !!node
  }
}

test('set', () => {
  const hashTable = new HashTable()

  hashTable.set('yunseok1', '')
  hashTable.set('yunseok1', 'han1')
  hashTable.set('yunseok2', 'han2')
  hashTable.set('1yunseok', '1han')

  expect(hashTable.get('yunseok1')).toBe('han1')
  expect(hashTable.get('yunseok2')).toBe('han2')
  expect(hashTable.get('1yunseok')).toBe('1han')
  expect(hashTable.get('dqdqd')).toBeUndefined()

  expect(hashTable.getKeys().sort()).toEqual(['yunseok1', 'yunseok2', '1yunseok'].sort())

  expect(hashTable.hasKey('yunseok1')).toBeTruthy()

  hashTable.delete('yunseok1')
  expect(hashTable.hasKey('yunseok1')).toBeFalsy()

})

