function SolveGraph (graph, start, end) {
  // Your code here:
  for (const key in graph) {
    if (key === start) return graph[key].includes(end); // este includes dará un end o un false
  }
  return false
}

const graph = {
  a: ['c'],
  b: ['c'],
  c: ['s', 'r'],
  d: ['a'],
  s: ['a', 'c'],
  r: ['d'],
  z: ['z']
}

console.log(SolveGraph(graph, 'f', 's'));

module.exports = SolveGraph
