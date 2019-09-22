function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n){
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li');
  for (let i in lis) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML) + n;
  }
  return lis;
}