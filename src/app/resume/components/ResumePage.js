import React, {Component} from 'react'
import ResumeHeader from "./ResumeHeader"
import EmploymentHistory from "./EmploymentHistory"
import EducationHistory from "./EducationHistory"
import Summary from "./Summary"
import Achievements from "./Achievements"

class ResumePage extends Component {
    render() {
        return (
            <div className="ResumePage">
                <ResumeHeader/>
                <Summary/>
                <Achievements/>
                <EmploymentHistory/>
                <EducationHistory/>
            </div>
        )
    }
}

export default ResumePage
