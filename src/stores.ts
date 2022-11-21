import {atomWithStorage} from 'jotai/utils'
import {MobConfig} from './constants'
import {atom} from 'jotai'
import {HelperData} from './MobsHelper'

export const helperDataAtom = atom<HelperData>({
  enabled: false,
  index: 0,
  scale: 1,
})

export const mobsConfigAtom = atomWithStorage<MobConfig[]>('mobsConfig', [])
