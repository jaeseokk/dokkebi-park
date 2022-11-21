import {useCallback, useState} from 'react'
import {useAtom} from 'jotai'
import {helperDataAtom} from './stores'
import {HelperData} from './MobsHelper'

export const useUpdateHelperData = () => {
  const [helperData, setHelperData] = useAtom(helperDataAtom)
  const setState = useCallback(
    (patch: Partial<HelperData> | ((prev: HelperData) => Partial<HelperData>)) => {
      setHelperData((prevState) =>
        Object.assign({}, prevState, patch instanceof Function ? patch(prevState) : patch),
      )
    },
    [setHelperData],
  )

  return [helperData, setState] as const
}
