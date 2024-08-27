export const authConfig:any = {
  session: {
   strategy: 'jwt',
   maxAge: 24 * 60 * 60, // 1 Day
  },
  providers: [],
}