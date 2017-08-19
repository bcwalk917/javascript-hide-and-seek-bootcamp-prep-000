function getFirstSelector(selector) {
  return document.querySelector(selector)
}
function nestedTarget() {
  return document.querySelector('#nested .target')
}
function increaseRankBy(n) {
  const lis = document.querySelectorAll('ul.ranked-list li')
  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n
  }
}
function deepestChild() {
  var dc = document.getElementById('grand-node').querySelectorAll('div')
  var last = dc.length - 1
  return dc[last]
}
