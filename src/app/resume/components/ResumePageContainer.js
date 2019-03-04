import React, {Component} from 'react'
import ResumePage from "./ResumePage"
import Head from 'next/head'
import '../styles/index.scss'

class ResumePageContainer extends Component {
    render() {
        return (
            <div className="ResumePageContainer">
                <Head>
                    <title>Tran Van Tu - Full Stack Developer Resume</title>
                </Head>
                <ResumePage/>
            </div>
        )
    }
}

export default ResumePageContainer
