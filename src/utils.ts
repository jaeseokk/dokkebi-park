import {Point} from './types'

export const rectangularCollision = ({rectangle1, rectangle2}) => {
  return (
    rectangle1.position.x + rectangle1.width >= rectangle2.position.x &&
    rectangle1.position.x <= rectangle2.position.x + rectangle2.width &&
    rectangle1.position.y <= rectangle2.position.y + rectangle2.height &&
    rectangle1.position.y + rectangle1.height >= rectangle2.position.y
  )
}

export const getDistance = (point1: Point, point2: Point) => {
  const dx = point2.x - point1.x
  const dy = point2.y - point1.y
  const directions = [dx > 0 ? 'right' : 'left', dy > 0 ? 'down' : 'up']

  return {
    value: Math.sqrt(dx ** 2 + dy ** 2),
    directions,
  }
}

// export const checkForCharacterCollision = ({
//   characters,
//   player,
//   characterOffset = {x: 0, y: 0},
// }) => {
//   player.interactionAsset = null
//   // monitor for character collision
//   for (let i = 0; i < characters.length; i++) {
//     const character = characters[i]
//
//     if (
//       rectangularCollision({
//         rectangle1: player,
//         rectangle2: {
//           ...character,
//           position: {
//             x: character.position.x + characterOffset.x,
//             y: character.position.y + characterOffset.y,
//           },
//         },
//       })
//     ) {
//       player.interactionAsset = character
//       break
//     }
//   }
// }
