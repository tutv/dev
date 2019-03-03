import React, {Component} from 'react'
import PropTypes from 'prop-types'
import ReactGA from 'react-ga'
import {withRouter} from "next/router"

class _PageView extends Component {
    _path = ''

    componentDidMount() {
        this._count()
    }

    componentDidUpdate() {
        this._count()
    }

    _count = () => {
        const {router} = this.props
        const {asPath, pathname} = router
        const path = asPath || pathname

        if (path === this._path) return false

        this._path = path
        ReactGA.pageview(path)
    }

    render() {
        return (
            null
        )
    }
}

_PageView.propTypes = {
    router: PropTypes.object.isRequired,
}

export default withRouter(_PageView)
