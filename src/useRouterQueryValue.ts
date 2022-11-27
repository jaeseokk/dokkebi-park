import {useMemo} from 'react'

import {useRouter} from 'next/router'
import {valueOrLastItem} from '@src/utils'

export interface UseRouteQueryValueOptions<T extends boolean | undefined> {
  asNumber?: T
}

export function useRouteQueryValue<T extends boolean>(queryKey: string): string | undefined

export function useRouteQueryValue<T extends boolean>(
  queryKey: string,
  {asNumber}: UseRouteQueryValueOptions<T>,
): T extends true ? number | undefined : string | undefined

export function useRouteQueryValue<T extends boolean>(
  queryKey: string,
  {asNumber}: UseRouteQueryValueOptions<T> = {},
): number | string | undefined {
  const router = useRouter()
  const value = useMemo(() => valueOrLastItem(router.query[queryKey]), [queryKey, router.query])

  if (value === undefined) {
    return undefined
  }

  return asNumber ? Number(value) : value
}
