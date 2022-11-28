import App from "next/app"
import Layout from "@components/Layout/Layout"
import '../styles/globals.css'


export default function MyApp({ Component, pageProps }) {
    // providers Context/Providers, ytheme, data
    // Layout, si es comun a todas las páginas
    // props adicionales

    return (
        <Layout >
            <Component {...pageProps} />
        </Layout>
    )
}