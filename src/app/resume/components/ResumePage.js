import React, {Component} from 'react'
import ResumeHeader from "./ResumeHeader"
import Qualifications from "./Qualifications"
import SkillAndExperience from "./SkillAndExperience"
import EmploymentHistory from "./EmploymentHistory"
import EducationHistory from "./EducationHistory"
import Summary from "./Summary"

class ResumePage extends Component {
    render() {
        return (
            <div className="ResumePage">
                <ResumeHeader/>
                <Summary/>
                <Qualifications/>
                <SkillAndExperience/>
                <EmploymentHistory/>
                <EducationHistory/>
            </div>
        )
    }
}

export default ResumePage
