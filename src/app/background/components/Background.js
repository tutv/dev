import React, {Fragment, Component} from 'react'
import GoogleAnalyticsSSR from "./google-analytics/GoogleAnalyticsSSR"

class Background extends Component {
    render() {
        return (
            <Fragment>
                <GoogleAnalyticsSSR id="UA-135512770-1"/>
            </Fragment>
        )
    }
}

export default Background
