import type { Handle } from '@sveltejs/kit'

type Theme = 'light' | 'dark' | 'system'

export const handle = (async ({ event, resolve }) => {
  const get_theme = event.cookies.get('theme')
  let theme: Theme =
    get_theme === 'light' || get_theme === 'dark' ? get_theme : 'system'

  return theme === 'system'
    ? await resolve(event)
    : await resolve(event, {
        transformPageChunk: ({ html }) => {
          return html.replace('data-theme="system"', `data-theme="${theme}"`)
        }
      })
}) satisfies Handle
