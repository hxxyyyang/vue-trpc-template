import { createTRPCRouter, publicProcedure } from '@/api/trpc'

export const greetingRouter = createTRPCRouter({
  hello: publicProcedure.query(async () => {
    return 'Hello from server!'
  }),
})
