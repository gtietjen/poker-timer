// function to take in entire round and returns a $round DOM tree

var round = [
  {
    name: 'Kaplan Tournament',
    round: 1,
    time: '15:00',
    currentBlind: '5/10',
    nextBlind: '10/20'
  }
]

function renderRound(round) {
  var $round = document.createElement('div')
  $round.classList.add('container', 'vertical-center')

  var $nameContainer = document.createElement('div')
  $nameContainer.classList.add('row')

  var $name = document.createElement('h1')
  $name.setAttribute('id', 'tournament-name')
  $name.textContent = round.name

  $round.appendChild($nameContainer)
  $nameContainer.appendChild($name)

  var $roundContainer = document.createElement('div')
  $roundContainer.classList.add('row')

  var $hr = document.createElement('hr')

  $round.appendChild($roundContainer)
  $roundContainer.appendChild($hr)

  return $round
}
