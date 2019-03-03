import React, {Component} from 'react'
import ResumeHeader from "./ResumeHeader"
import Qualifications from "./Qualifications"

class ResumePage extends Component {
    render() {
        return (
            <div className="ResumePage">
                <ResumeHeader/>
                <Qualifications/>
            </div>
        )
    }
}

export default ResumePage
