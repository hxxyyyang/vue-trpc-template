import { createTRPCClient, httpBatchStreamLink, loggerLink } from '@trpc/client'
import SuperJSON from 'superjson'
import type { AppRouter } from '@loc/server'

export const api = createTRPCClient<AppRouter>({
  links: [
    loggerLink({
      enabled: (op) =>
        import.meta.env.DEV ||
        (op.direction === 'down' && op.result instanceof Error),
    }),
    httpBatchStreamLink({
      transformer: SuperJSON,
      url: '/api/trpc',
    }),
  ],
})
