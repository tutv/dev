import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import GooglePageView from "./GooglePageView"

class GoogleAnalytics extends Component {
    state = {
        loaded: false
    }

    componentDidMount() {
        this._setup()
    }

    _setup = () => {
        const {id} = this.props
        id && ReactGA.initialize(id)
        ReactGA.ga('require', 'ecommerce')

        this.setState({
            loaded: true
        })
    }

    render() {
        const {loaded} = this.state

        return (
            !!loaded && <GooglePageView/>
        )
    }
}

GoogleAnalytics.propTypes = {
    id: PropTypes.string.isRequired,
}

export default GoogleAnalytics
