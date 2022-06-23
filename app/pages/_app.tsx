import "@fontsource/inter/variable.css"
import "@rainbow-me/rainbowkit/styles.css"

import "./_app.css"

import { ChakraProvider } from "@chakra-ui/react"
import { RainbowKitProvider } from "@rainbow-me/rainbowkit"
import { useWagmi } from "app/core/hooks/web3/useWagmi"
import { AppProps, dynamic } from "blitz"
import { edenRainbowKitTheme } from "ds/themes"
import { edenChakraTheme } from "ds/themes"
import React from "react"
import { Toaster } from "react-hot-toast"
import { WagmiConfig } from "wagmi"

const SessionManager = dynamic(() => import("app/core/SessionManager"))

export default function App({ Component, pageProps }: AppProps) {
  const { chains, client } = useWagmi()
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider showRecentTransactions chains={chains} theme={edenRainbowKitTheme}>
        <SessionManager>
          <ChakraProvider theme={edenChakraTheme}>
            {getLayout(
              <>
                <Component {...pageProps} />
                <Toaster position="top-right" toastOptions={{ duration: 5000 }} />
              </>
            )}
          </ChakraProvider>
        </SessionManager>
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
