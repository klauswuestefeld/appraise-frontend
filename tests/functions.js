export function checkReqAttr(node, prop) {
  node.length > 1
    ? node.forEach(n => expect(n.props()[prop]).toBeDefined())
    : expect(node.props()[prop]).toBeDefined()
}
