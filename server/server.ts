import express from 'express'
import {
  createExpressMiddleware,
  type CreateExpressContextOptions,
} from '@trpc/server/adapters/express'

import { appRouter, createTRPCContext } from './src'

function main() {
  const app = express()

  app.use(
    '/api/trpc',
    createExpressMiddleware({
      router: appRouter,
      createContext({ req }: CreateExpressContextOptions) {
        return createTRPCContext({ headers: req.headers as unknown as Headers })
      },
    })
  )

  app.listen(9877, () => console.log('start listening on port 9877'))
}

main()
