var rounds = [
  {
    name: 'Poker Tournament',
    roundNumber: 1,
    time: 11,
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

  var $hr1 = document.createElement('hr')
  var $br1 = document.createElement('br')

  var $currentRound = document.createElement('div')
  $currentRound.classList.add('col-md-12', 'text-center')

  var $roundNumber = document.createElement('h4')
  $roundNumber.setAttribute('id', 'round-number')

  var $span = document.createElement('span')
  $span.setAttribute('id', 'current-round')
  $span.textContent = round.roundNumber

  var $roundText = document.createTextNode('Round: ')
  $roundNumber.appendChild($roundText)
  $roundNumber.appendChild($span)

  var $timerContainer = document.createElement('div')
  $timerContainer.classList.add('col-md-12', 'text-center')

  var $timer = document.createElement('h2')
  $timer.setAttribute('id', 'timer')
  $timer.textContent = round.time + ':00'

  $round.appendChild($roundContainer)
  $roundContainer.appendChild($hr1)
  $roundContainer.appendChild($currentRound)
  $currentRound.appendChild($roundNumber)
  $roundContainer.appendChild($timerContainer)
  $timerContainer.appendChild($timer)

  var $currentBlindContainer = document.createElement('div')
  $currentBlindContainer.classList.add('row')

  var $currentBlindInner = document.createElement('div')
  $currentBlindInner.classList.add('col-md-12', 'text-center')

  var $blindsHeading = document.createElement('h5')
  $blindsHeading.textContent = 'Blinds'

  var $currentBlinds = document.createElement('h3')
  $currentBlinds.setAttribute('id', 'current-blind')
  $currentBlinds.textContent = round.currentBlind

  $round.appendChild($currentBlindContainer)
  $currentBlindContainer.appendChild($currentBlindInner)
  $currentBlindInner.appendChild($blindsHeading)
  $currentBlindInner.appendChild($currentBlinds)

  var $br2 = document.createElement('br')

  var $playButtonRow = document.createElement('div')
  $playButtonRow.classList.add('row')

  var $playButtonContainer = document.createElement('div')
  $playButtonContainer.classList.add('col-md-12')
  $playButtonContainer.setAttribute('id', 'play-pause')

  var $playButton = document.createElement('i')
  $playButton.classList.add('material-icons')
  $playButton.setAttribute('id', 'play-button')
  $playButton.textContent = 'play_circle_filled'

  $round.appendChild($br1)
  $round.appendChild($playButtonRow)
  $playButtonRow.appendChild($playButtonContainer)
  $playButtonContainer.appendChild($playButton)
  $round.appendChild($br2)

  var $bottomContainer = document.createElement('div')
  $bottomContainer.classList.add('row')

  var $nextRoundContainer = document.createElement('div')
  $nextRoundContainer.classList.add('col-md-3', 'col-md-offset-3', 'col-xs-6', 'text-center', 'up-next-block')

  var $nextBlindTitle = document.createElement('p')
  $nextBlindTitle.textContent = 'Next blind'

  var $nextBlind = document.createElement('h6')
  $nextBlind.setAttribute('id', 'next-blind')
  $nextBlind.textContent = round.nextBlind

  $round.appendChild($bottomContainer)
  $bottomContainer.appendChild($nextRoundContainer)
  $nextRoundContainer.appendChild($nextBlindTitle)
  $nextRoundContainer.appendChild($nextBlind)

  var $playersContainer = document.createElement('div')
  $playersContainer.classList.add('col-md-3', 'col-xs-6', 'text-center', 'players-block')

  var $playersTitle = document.createElement('p')
  $playersTitle.textContent = 'Players remaining'

  var $playersRemaining = document.createElement('h6')
  $playersRemaining.setAttribute('id', 'players-remaining')
  $playersRemaining.textContent = '20'

  $bottomContainer.appendChild($playersContainer)
  $playersContainer.appendChild($playersTitle)
  $playersContainer.appendChild($playersRemaining)

  return $round
}

function displayMarkup() {
  document.body.appendChild(renderRound(rounds[0]))
}

displayMarkup()

var playButton = document.getElementById('play-button')

function countdown(minutes) {
  var seconds = 60
  var mins = minutes
  function tick() {
    var timer = document.getElementById('timer')
    var currentMinutes = minutes - 1
    seconds--

    if (seconds < 10) {
      seconds = '0' + seconds
    }

    timer.textContent = currentMinutes + ':' + seconds

    if (seconds > 0) {
      setTimeout(tick, 1000)
    }
    else {
      if (mins > 1) {
        countdown(mins - 1)
      }
    }
  }
  tick()
}

playButton.addEventListener('click', function () {
  countdown(rounds[0].time)
})
