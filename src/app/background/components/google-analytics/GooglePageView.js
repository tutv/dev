import React, {Component} from 'react'
import dynamic from 'next/dynamic'

const PageView = dynamic(() => import ('./_PageView'), {ssr: false, loading: () => null})

class GooglePageView extends Component {
    render() {
        return (
            <PageView {...this.props}/>
        )
    }
}

export default GooglePageView
