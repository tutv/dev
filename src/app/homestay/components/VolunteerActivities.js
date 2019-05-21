import React, {Component} from 'react'

class VolunteerActivities extends Component {
    render() {
        return (
            <div className="VolunteerActivities Section">
                <h3 className="SectionTitle">Volunteer Activities</h3>

                <div className="MainSection">
                    <div className="TimeLine">
                        <div className="HeadTime">
                            <div className="TimeTitle">
                                <a href="http://bit.ly/tutv-volunteer-2014" target="_blank">
                                    "TIEP SUC MUA THI" 2014
                                </a>
                            </div>
                            <div className="TimeRange">July, 2014</div>
                        </div>
                        <div className="MainTime">
                            <div className="Text">
                                I helped students and their parents in the college entrance exams in 2014.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default VolunteerActivities
