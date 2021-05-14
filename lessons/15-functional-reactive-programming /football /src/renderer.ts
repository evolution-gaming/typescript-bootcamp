import { Vector, x, y } from './vector'

const ballDomNode = document.getElementById('ball')!
const playerDomNode = document.getElementById('player')!
const messageDomNode = document.getElementById('message')!

export const render = ([player, ball]: [Vector, Vector]) => {
  ballDomNode.style.top = y(ball) + 'px'
  ballDomNode.style.left = x(ball) + 'px'

  playerDomNode.style.top = y(player) + 'px'
  playerDomNode.style.left = x(player) + 'px'
}

export const showMessage = () => messageDomNode.classList.add('visible')

export const hideMessage = () => messageDomNode.classList.remove('visible')
