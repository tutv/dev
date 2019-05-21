import React, {Component} from 'react'
import ResumeHeader from "./ResumeHeader"
import EmploymentHistory from "./EmploymentHistory"
import EducationHistory from "./EducationHistory"
import Summary from "./Summary"
import Achievements from "./Achievements"
import VolunteerActivities from "./VolunteerActivities"

class ResumePage extends Component {
    render() {
        return (
            <div className="ResumePage">
                <ResumeHeader/>
                <Summary/>
                <VolunteerActivities/>
                <Achievements/>
                <EmploymentHistory/>
                <EducationHistory/>
            </div>
        )
    }
}

export default ResumePage
