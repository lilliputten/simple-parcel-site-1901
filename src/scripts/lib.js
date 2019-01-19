export function appendTo (tag, content) {
  const node = document.getElementsByTagName(tag)[0];
  node.textContent += ' - ' + content;
}
