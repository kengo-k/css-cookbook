import { renderToString } from 'react-dom/server'

import * as cleaner from 'clean-html'

export const clean = (Component: React.FC) => {
  const source = renderToString(<Component />)
  let cleanedSource: string | undefined
  cleaner.clean(source, { 'break-around-tags': ['a', 'span'], wrap: 80 }, (cleaned: string) => {
    cleanedSource = cleaned
  })
  return cleanedSource
}
