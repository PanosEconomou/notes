import { visit } from 'unist-util-visit';

function preserveDollarSigns() {
  return (tree) => {
    visit(tree, 'math-inline', (node) => {
      node.value = `$${node.value}$`;
    });
    visit(tree, 'math-display', (node) => {
      node.value = `$$${node.value}$$`;
    });
  };
}

export default preserveDollarSigns;