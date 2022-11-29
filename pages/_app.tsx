import App from "next/app"
import Layout from "@components/Layout/Layout"
import '../styles/globals.css'

import { Inter } from '@next/font/google'

const inter = Inter({
    subsets: ['latin'],
    // weight: ['400', '700']
})

export default function MyApp({ Component, pageProps }) {
    // providers Context/Providers, ytheme, data
    // Layout, si es comun a todas las páginas
    // props adicionales

    return (
        <Layout>
            <main className={inter.className}>
                <Component {...pageProps} />
            </main>
        </Layout>
    )
}