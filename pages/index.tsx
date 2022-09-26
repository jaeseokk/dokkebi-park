import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {useEffect, useRef} from 'react'

import collisions from '../src/collision.json'
import {Boundary, Sprite} from '../src/classes'
import {rectangularCollision} from '../src/utils'

const Home: NextPage = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    if (!canvasRef.current) {
      return
    }

    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')

    canvas.width = 1024
    canvas.height = 576

    if (!ctx) {
      return
    }

    ctx.fillStyle = 'white'
    ctx.fillRect(0, 0, canvas.width, canvas.height)

    const collisionsMap: number[][] = []
    for (let i = 0; i < collisions.length; i += 79) {
      collisionsMap.push(collisions.slice(i, 79 + i))
    }

    const boundaries: Boundary[] = []
    const offset = {
      x: -1100,
      y: -3700,
    }

    collisionsMap.forEach((row, i) => {
      row.forEach((symbol, j) => {
        if (symbol === 10801)
          boundaries.push(
            new Boundary({
              ctx,
              position: {
                x: j * Boundary.width + offset.x,
                y: i * Boundary.height + offset.y,
              },
            }),
          )
      })
    })

    const image = new Image()
    image.src = '/map.png'

    const playerImage = new Image()
    playerImage.src = '/playerDown.png'

    const playerDownImage = new Image()
    playerDownImage.src = '/playerDown.png'

    const playerUpImage = new Image()
    playerUpImage.src = '/playerUp.png'

    const playerLeftImage = new Image()
    playerLeftImage.src = '/playerLeft.png'

    const playerRightImage = new Image()
    playerRightImage.src = '/playerRight.png'

    const player = new Sprite({
      ctx,
      position: {
        x: canvas.width / 2 - 288 / 6 / 2,
        y: canvas.height / 2 - 80 / 2,
      },
      image: playerDownImage,
      frames: {
        max: 6,
        hold: 5,
      },
      sprites: {
        up: playerUpImage,
        left: playerLeftImage,
        right: playerRightImage,
        down: playerDownImage,
      },
      scale: 1.5,
    })

    const background = new Sprite({
      ctx,
      position: {
        x: offset.x,
        y: offset.y,
      },
      image: image,
    })

    const keys = {
      ArrowUp: {
        pressed: false,
      },
      ArrowLeft: {
        pressed: false,
      },
      ArrowDown: {
        pressed: false,
      },
      ArrowRight: {
        pressed: false,
      },
    }

    const movables = [background, ...boundaries]
    const renderables = [background, ...boundaries, player]

    function animate() {
      const animationId = window.requestAnimationFrame(animate)
      renderables.forEach((renderable) => {
        renderable.draw()
      })

      let moving = true
      player.animate = false

      if (keys.ArrowUp.pressed && lastKey === 'ArrowUp') {
        player.animate = true
        player.image = player.sprites.up

        // checkForCharacterCollision({
        //   characters,
        //   player,
        //   characterOffset: {x: 0, y: 3},
        // })

        for (let i = 0; i < boundaries.length; i++) {
          const boundary = boundaries[i]
          if (
            rectangularCollision({
              rectangle1: player,
              rectangle2: {
                width: Boundary.width,
                height: Boundary.height,
                position: {
                  x: boundary.position.x,
                  y: boundary.position.y + 3,
                },
              },
            })
          ) {
            moving = false
            break
          }
        }

        if (moving)
          movables.forEach((movable) => {
            movable.position.y += 3
          })
      } else if (keys.ArrowLeft.pressed && lastKey === 'ArrowLeft') {
        player.animate = true
        player.image = player.sprites.left

        // checkForCharacterCollision({
        //   characters,
        //   player,
        //   characterOffset: {x: 3, y: 0},
        // })

        for (let i = 0; i < boundaries.length; i++) {
          const boundary = boundaries[i]
          if (
            rectangularCollision({
              rectangle1: player,
              rectangle2: {
                width: Boundary.width,
                height: Boundary.height,
                position: {
                  x: boundary.position.x + 3,
                  y: boundary.position.y,
                },
              },
            })
          ) {
            moving = false
            break
          }
        }

        if (moving)
          movables.forEach((movable) => {
            movable.position.x += 3
          })
      } else if (keys.ArrowDown.pressed && lastKey === 'ArrowDown') {
        player.animate = true
        player.image = player.sprites.down

        // checkForCharacterCollision({
        //   characters,
        //   player,
        //   characterOffset: {x: 0, y: -3},
        // })

        for (let i = 0; i < boundaries.length; i++) {
          const boundary = boundaries[i]
          if (
            rectangularCollision({
              rectangle1: player,
              rectangle2: {
                width: Boundary.width,
                height: Boundary.height,
                position: {
                  x: boundary.position.x,
                  y: boundary.position.y - 3,
                },
              },
            })
          ) {
            moving = false
            break
          }
        }

        if (moving) {
          movables.forEach((movable) => {
            movable.position.y -= 3
          })
        }
      } else if (keys.ArrowRight.pressed && lastKey === 'ArrowRight') {
        player.animate = true
        player.image = player.sprites.right

        // checkForCharacterCollision({
        //   characters,
        //   player,
        //   characterOffset: {x: -3, y: 0},
        // })

        for (let i = 0; i < boundaries.length; i++) {
          const boundary = boundaries[i]
          if (
            rectangularCollision({
              rectangle1: player,
              rectangle2: {
                width: Boundary.width,
                height: Boundary.height,
                position: {
                  x: boundary.position.x - 3,
                  y: boundary.position.y,
                },
              },
            })
          ) {
            moving = false
            break
          }
        }

        if (moving)
          movables.forEach((movable) => {
            movable.position.x -= 3
          })
      }
    }
    animate()

    let lastKey = ''
    window.addEventListener('keydown', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          keys.ArrowUp.pressed = true
          lastKey = 'ArrowUp'
          break
        case 'ArrowLeft':
          keys.ArrowLeft.pressed = true
          lastKey = 'ArrowLeft'
          break

        case 'ArrowDown':
          keys.ArrowDown.pressed = true
          lastKey = 'ArrowDown'
          break

        case 'ArrowRight':
          keys.ArrowRight.pressed = true
          lastKey = 'ArrowRight'
          break
      }
    })

    window.addEventListener('keyup', (e) => {
      switch (e.key) {
        case 'ArrowUp':
          keys.ArrowUp.pressed = false
          break
        case 'ArrowLeft':
          keys.ArrowLeft.pressed = false
          break
        case 'ArrowDown':
          keys.ArrowDown.pressed = false
          break
        case 'ArrowRight':
          keys.ArrowRight.pressed = false
          break
      }
    })
  })

  return (
    <div className={styles.container}>
      <Head>
        <title>Dokkebi Park</title>
        <meta name="description" content="Dokkebi Park" />
      </Head>

      <main className={styles.main}>
        <canvas ref={canvasRef} />
      </main>
    </div>
  )
}

export default Home
