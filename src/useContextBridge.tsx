import {Context, useContext, useMemo, useRef} from 'react'

export function useContextBridge(...contexts: Array<Context<any>>) {
  const cRef = useRef<Array<Context<any>>>([])
  // eslint-disable-next-line react-hooks/rules-of-hooks
  cRef.current = contexts.map((context) => useContext(context))
  return useMemo(
    () =>
      ({children}: {children: React.ReactNode}): JSX.Element =>
        contexts.reduceRight(
          (acc, Context, i) => <Context.Provider value={cRef.current[i]}>{acc}</Context.Provider>,
          children,
          /*
           * done this way in reference to:
           * https://github.com/DefinitelyTyped/DefinitelyTyped/issues/44572#issuecomment-625878049
           * https://github.com/microsoft/TypeScript/issues/14729
           */
        ) as unknown as JSX.Element,
    [],
  )
}
