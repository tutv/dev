import React, {Component} from 'react'

class EmploymentHistory extends Component {
    render() {
        return (
            <div className="EmploymentHistory Section">
                <h3 className="SectionTitle">Employment history</h3>

                <div className="MainSection">
                    <div className="TimeLine">
                        <div className="HeadTime">
                            <div className="TimeTitle">Software Engineer at Foobla</div>
                            <div className="TimeRange">July, 2015 - Present</div>
                        </div>
                        <div className="MainTime">
                            <div className="Text">
                                I started working at Foobla when I was a second-year student. My job is to build and
                                develop strategic projects at Foobla, such as
                                <span> </span><a href="https://thimpresswp.github.io/thim-core/" target="_blank">Thim
                                Core</a>,
                                <i> </i><a href="https://spyamz.com" target="_blank">SpyAMZ</a>,
                                <i> </i><a href="https://spybadass.com" target="_blank">SpyBadass</a>,
                                <i> </i><a href="https://spyetsy.com" target="_blank">SpyEtsy</a>
                                <i> </i>and now is <a href="https://merchize.com" target="_blank">Merchize</a> which
                                will be a potential project.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default EmploymentHistory
