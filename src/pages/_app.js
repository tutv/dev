import React from 'react'
import App, {Container} from 'next/app'
import "../styles/index.scss"
import Background from "../app/background/components/Background"
import HeadBase from "../app/partials/components/HeadBase"

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        let pageProps = {}

        if (Component.getInitialProps) {
            pageProps = await Component.getInitialProps(ctx)
        }

        return {pageProps}
    }

    render() {
        const {Component, pageProps} = this.props

        return (
            <Container>
                <HeadBase/>
                <Component {...pageProps} />
                <Background/>
            </Container>
        )
    }
}

export default MyApp