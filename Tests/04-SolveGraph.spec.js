const { expect } = require('chai')
const SolveGraph = require('../Ejercicios/04-SolveGraph/SolveGraph')

describe('SolveGraph', function () {
  const graph = {
    a: ['c'],
    b: ['c'],
    c: ['s', 'r'],
    d: ['a'],
    s: ['a', 'c'],
    r: ['d'],
    z: ['z']
  }
  it('should return false as we can get from a to r', function () {
    expect(SolveGraph(graph, 'a', 'r')).to.equal(false)
  })
  it('should return true as we can get from a to c', function () {
    expect(SolveGraph(graph, 'a', 'c')).to.equal(true)
  })
  it('should return false as we can not get from s to c', function () {
    expect(SolveGraph(graph, 's', 'c')).to.equal(true)
  })
})
