export function appendTo (lookup, content) {
  // const node = document.getElementsByTagName(lookup)[0];
  const node = document.getElementById(lookup);
  node.textContent += ' - ' + content;
}
