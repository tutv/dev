import React, {Component} from 'react'
import Head from 'next/head'

class HeadBase extends Component {
    render() {
        return (
            <Head>
                <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no"/>
            </Head>
        )
    }
}

export default HeadBase
