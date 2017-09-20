
var rounds = [
  {
    name: 'Poker Tournament',
    roundNumber: 1,
    time: 15,
    players: 20
  }
]

var blinds = [
  {
    blind: '5/10'
  },
  {
    blind: '10/20'
  },
  {
    blind: '15/30'
  },
  {
    blind: '25/50'
  },
  {
    blind: '30/60'
  },
  {
    blind: '40/80'
  },
  {
    blind: '50/100'
  },
  {
    blind: '75/150'
  },
  {
    blind: '100/200'
  },
  {
    blind: '150/300'
  },
  {
    blind: '200/400'
  },
  {
    blind: '250/500'
  },
  {
    blind: '500/1000'
  }
]

function renderRound(round, blind) {
  var $round = document.createElement('div')
  $round.classList.add('container', 'vertical-center')
  $round.setAttribute('id', 'round')

  var $nameContainer = document.createElement('div')
  $nameContainer.classList.add('row')

  var $name = document.createElement('h1')
  $name.setAttribute('id', 'tournament-name')
  $name.textContent = round.name

  var $settingsContainer = document.createElement('div')
  $settingsContainer.setAttribute('id', 'settings-container')

  var $settings = document.createElement('div')
  $settings.setAttribute('id', 'settings')

  var $settingsButton = document.createElement('i')
  $settingsButton.setAttribute('id', 'settings-button')
  $settingsButton.classList.add('material-icons', 'hidden')
  $settingsButton.textContent = 'chevron_right'

  var $settingsClose = document.createElement('i')
  $settingsClose.setAttribute('id', 'settings-close')
  $settingsClose.classList.add('material-icons', 'hidden')
  $settingsClose.textContent = 'cancel'

  $round.appendChild($settingsContainer)
  $settingsContainer.appendChild($settings)
  $settings.appendChild($settingsButton)
  $settings.appendChild($settingsClose)

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
  $currentBlinds.textContent = blinds[0].blind

  $round.appendChild($currentBlindContainer)
  $currentBlindContainer.appendChild($currentBlindInner)
  $currentBlindInner.appendChild($blindsHeading)
  $currentBlindInner.appendChild($currentBlinds)

  var $br2 = document.createElement('br')
  var $playPauseHr1 = document.createElement('hr')
  $playPauseHr1.classList.add('play-pause-hr')
  var $playPauseHr2 = document.createElement('hr')
  $playPauseHr2.classList.add('play-pause-hr')

  var $playButtonRow = document.createElement('div')
  $playButtonRow.classList.add('row', 'play-pause-container')

  var $playButtonContainer = document.createElement('div')
  $playButtonContainer.classList.add('col-md-12')
  $playButtonContainer.setAttribute('id', 'play-pause')

  var $playButton = document.createElement('i')
  $playButton.classList.add('material-icons')
  $playButton.setAttribute('id', 'play-button')
  $playButton.textContent = 'play_circle_filled'

  var $pauseButton = document.createElement('i')
  $pauseButton.classList.add('material-icons', 'hidden')
  $pauseButton.setAttribute('id', 'pause-button')
  $pauseButton.textContent = 'pause_circle_filled'

  $round.appendChild($br1)
  $round.appendChild($playButtonRow)
  $playButtonRow.appendChild($playPauseHr1)
  $playButtonRow.appendChild($playButtonContainer)
  $playButtonContainer.appendChild($playButton)
  $playButtonContainer.appendChild($pauseButton)
  $playButtonRow.appendChild($playPauseHr2)

  $round.appendChild($br2)

  var $bottomContainer = document.createElement('div')
  $bottomContainer.classList.add('row')

  var $nextRoundContainer = document.createElement('div')
  $nextRoundContainer.classList.add('col-md-3', 'col-md-offset-3', 'col-xs-6', 'text-center', 'up-next-block')

  var $nextBlindTitle = document.createElement('p')
  $nextBlindTitle.textContent = 'Next blind'

  var $nextBlind = document.createElement('h6')
  $nextBlind.setAttribute('id', 'next-blind')
  $nextBlind.textContent = blinds[1].blind

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
  $playersRemaining.textContent = rounds[0].players

  var $playersRemainingContainer = document.createElement('div')
  $playersRemainingContainer.classList.add('players-remaining')

  var $playerAdd = document.createElement('i')
  $playerAdd.setAttribute('id', 'player-add')
  $playerAdd.classList.add('material-icons')
  $playerAdd.textContent = 'add_circle'

  var $playerRemove = document.createElement('i')
  $playerRemove.setAttribute('id', 'player-remove')
  $playerRemove.classList.add('material-icons')
  $playerRemove.textContent = 'remove_circle'

  $bottomContainer.appendChild($playersContainer)
  $playersContainer.appendChild($playersTitle)
  $playersContainer.appendChild($playersRemainingContainer)
  $playersRemainingContainer.appendChild($playerAdd)
  $playersRemainingContainer.appendChild($playersRemaining)
  $playersRemainingContainer.appendChild($playerRemove)

  return $round
}

function displayMarkup() {
  document.body.appendChild(renderRound(rounds[0], blinds))
}

displayMarkup()

var playButton = document.getElementById('play-button')
var pauseButton = document.getElementById('pause-button')
var settingsButton = document.getElementById('settings-button')
var settingsClose = document.getElementById('settings-close')
var currentBlind = document.getElementById('current-blind')
var nextBlind = document.getElementById('next-blind')
var roundNumber = document.getElementById('current-round')
var playerAdd = document.getElementById('player-add')
var playerRemove = document.getElementById('player-remove')
var playersRemaining = document.getElementById('players-remaining')

var timerId = null

var seconds = 60
var minutes = rounds[0].time - 1
var timer = document.getElementById('timer')

function counter() {

  seconds = seconds - 1
  if (seconds === -1) {
    seconds = 60
    minutes--
  }

  timer.textContent = minutes + ':' + seconds
  playButton.classList.add('hidden')
  pauseButton.classList.remove('hidden')
  settingsButton.classList.add('hidden')

  if (seconds < 10) {
    timer.textContent = minutes + ':' + '0' + seconds
  }
  if (seconds === 60) {
    timer.textContent = (minutes + 1) + ':' + '00'
  }

  if (seconds === 0 && minutes === 0) {
    stop()
    advanceRound()
    settingsButton.classList.remove('hidden')
  }
}

function stop() {
  clearInterval(timerId)
  settingsButton.classList.remove('hidden')
}

playButton.addEventListener('click', function () {
  timerId = setInterval(function () {
    counter()
  }, 1000)
})

pauseButton.addEventListener('click', function () {
  stop()
  playButton.classList.remove('hidden')
  pauseButton.classList.add('hidden')
})

function advanceRound() {
  blinds.splice(0, 1)
  currentBlind.textContent = blinds[0].blind
  nextBlind.textContent = blinds[1].blind
  stop()
  timerId = null
  seconds = 60
  minutes = rounds[0].time - 1
  timer = document.getElementById('timer')
  rounds[0].roundNumber++
  roundNumber.textContent = rounds[0].roundNumber
  timer.textContent = rounds[0].time + ':00'
  playButton.classList.remove('hidden')
  pauseButton.classList.add('hidden')
}

settingsButton.addEventListener('click', function () {
  advanceRound()
})

settingsClose.addEventListener('click', function () {
  settingsButton.classList.remove('hidden')
  settingsClose.classList.add('hidden')
})

playerAdd.addEventListener('click', function () {
  rounds[0].players++
  playersRemaining.textContent = rounds[0].players
})

playerRemove.addEventListener('click', function () {
  if (rounds[0].players > 0) {
    rounds[0].players--
    playersRemaining.textContent = rounds[0].players
  }
})
