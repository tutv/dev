import React, {Component} from 'react'
import Head from 'next/head'
import PropTypes from 'prop-types'

class GoogleAnalyticsSSR extends Component {
    render() {
        const {id} = this.props
        if (!id) return null

        const script = `window.dataLayer = window.dataLayer || []
                    function gtag(){dataLayer.push(arguments)}
                    gtag('js', new Date())

                    gtag('config', '${id}')`

        return (
            <Head>
                <script async src={`https://www.googletagmanager.com/gtag/js?id=${id}`}/>
                <script dangerouslySetInnerHTML={{__html: script}}/>
            </Head>
        )
    }
}

GoogleAnalyticsSSR.propTypes = {
    id: PropTypes.string.isRequired,
}

export default GoogleAnalyticsSSR
