import React, {Component} from 'react'

class Summary extends Component {
    render() {
        return (
            <div className="Summary">
                <h3 className="SectionTitle">Summary</h3>

                <div className="MainSection">
                    <p className="Paragraph">
                        I'm Tran Van Tu, a full stack developer with <strong>3 years of experience in Javascript
                        language (both backend and frontend)</strong> and 1 year of experience in PHP, with good
                        knowledge of Database Design, Functional Programing and Microservice Architecture.
                    </p>

                    <p className="Paragraph">
                        I like sharing what I learned to others and work well with group. I also held
                        <span> </span><a href="https://slides.com/tutv95/nodejs-workshop-1">3 workshops about
                        Node.js</a> for my co-workers at my company. Moreover, I'm <strong>co-founder,
                        mentor</strong> of
                        <span> </span><a href="https://uetcodecamp.github.io" target="_blank">UET Code Camp</a>.
                    </p>

                    <p className="Paragraph">
                        Learning new languages and technologies is what I am passionate about (I self-taught React.js
                        with 2 weeks). I am considered a team-player because I like to help others and tend to work well
                        within groups. I can also do some mentoring tasks and do code reviews for other team members.
                    </p>

                    <p className="Paragraph">I often write blog and share them on
                        <span> </span><a href="https://medium.com/@tutv" target="_blank">Medium</a> and help others on
                        <span> </span><a href="https://stackoverflow.com/users/4415285" target="_blank">Stack
                            Overflow</a>.
                    </p>
                </div>
            </div>
        )
    }
}

export default Summary
