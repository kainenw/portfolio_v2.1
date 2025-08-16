import { shuffle } from '../lib/shuffle'

function createRNG(seed: number): () => number {
  return () => {
    const x = Math.sin(seed++) * 10000
    return x - Math.floor(x)
  }
}

describe('shuffle', () => {
  it('produces roughly uniform permutations', () => {
    const rng = createRNG(42)
    const arr = [1, 2, 3]
    const iterations = 60000
    const counts: Record<string, number> = {}

    for (let i = 0; i < iterations; i++) {
      const result = shuffle(arr, rng).join(',')
      counts[result] = (counts[result] || 0) + 1
    }

    const expected = iterations / 6
    const tolerance = expected * 0.05
    Object.values(counts).forEach(count => {
      expect(count).toBeGreaterThanOrEqual(expected - tolerance)
      expect(count).toBeLessThanOrEqual(expected + tolerance)
    })
  })
})
