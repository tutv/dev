import React, {Component} from 'react'
import ResumeHeader from "./ResumeHeader"
import Qualifications from "./Qualifications"
import SkillAndExperience from "./SkillAndExperience"

class ResumePage extends Component {
    render() {
        return (
            <div className="ResumePage">
                <ResumeHeader/>
                <Qualifications/>
                <SkillAndExperience/>
            </div>
        )
    }
}

export default ResumePage
