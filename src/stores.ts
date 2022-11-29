import {atomWithStorage, selectAtom} from 'jotai/utils'
import {MobConfig} from './constants'
import {atom} from 'jotai'
import {HelperData} from './MobsHelper'
import {PlayerDirection, PlayerState} from './Player'

export const isAppStartedAtom = atom(false)

export const playerAtom = atom<{position: {x: number; y: number}; state: PlayerState}>({
  position: {x: 0, y: 0},
  state: {
    animationStatus: 'idle',
    direction: 'down',
  },
})

export const playerAnimationStatusAtom = selectAtom(
  playerAtom,
  (player) => player.state.animationStatus,
)

export const helperDataAtom = atom<HelperData>({
  enabled: false,
  index: 0,
  scale: 1,
})

export const mobsConfigAtom = atomWithStorage<MobConfig[]>('mobsConfig', [])
