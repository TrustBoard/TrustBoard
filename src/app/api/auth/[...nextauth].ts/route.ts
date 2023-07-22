import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        {
          id: "worldcoin",
          name: "Worldcoin",
          type: "oauth",
          wellKnown: "https://id.worldcoin.org/.well-known/openid-configuration",
          authorization: { params: { scope: "openid" } },
          clientId: "app_7dca9e2c6731d37b5c0d1e6f51cc4d01",
          clientSecret: "sk_550dcc1653347ff4519114a06eba7c7ae0947906e71f4fdf",
          idToken: true,
          profile(profile) {
            return {
              id: profile.sub,
              name: profile.sub,
              credentialType: profile["https://id.worldcoin.org/beta"].credential_type,
            }
          },
        },
      ],
})

export { handler as GET, handler as POST }
