import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
    pages: {
        signIn: '/auth',
    },

    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Register Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            authorize: async (credentials, _req) => {
                try {
                    if (!credentials?.email) return null
                    if (!credentials?.password) return null


                    const authenticateResponse = await fetch(
                        'http://localhost:3000/login', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            email: credentials?.email,
                            password: credentials?.password
                        })
                    })

                    if (authenticateResponse.ok) {
                        const data = await authenticateResponse.json()

                        return data
                    }

                    return null
                } catch (error: any) {
                    return null
                }
            }

        })
    ],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: 'jwt'
    },
    callbacks: {

        async jwt({ token, account, user }: { token: any, account: any, user: any }) {
            // Persist the OAuth access_token to the token right after signin
            // token.accessToken = account.user.access_token
            if (user) {
                token.accessToken = user?.access_token
                token.user = user?.user
            }
            return token
        },
        async session({ session, token }: { session: any, token: any }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken || null
            session.user = token.user || null
            return session
        }
    }
})


export { handler as GET, handler as POST }