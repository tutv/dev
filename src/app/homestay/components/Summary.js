import React, {Component} from 'react'

class Summary extends Component {
    render() {
        return (
            <div className="Summary">
                <h3 className="SectionTitle">Summary</h3>

                <div className="MainSection">
                    <p className="Paragraph">
                        I'm Tran Van Tu, a software engineer with 3 years of experience in web development.
                    </p>

                    <p className="Paragraph">
                        I like <strong>sharing what I learned to others and work well with group</strong>. I also held
                        <span> </span><a href="https://slides.com/tutv95/nodejs-workshop-1">a workshop related to web
                        development</a> for my co-workers at my company. Moreover, I'm <strong>co-founder,
                        mentor</strong> of
                        <span> </span><a href="https://uetcodecamp.github.io" target="_blank">UET Code Camp</a>.
                    </p>

                    <p className="Paragraph">
                        I used to be <strong>a student at Homestay Vietnam (Cau Giay)</strong> starting at middle
                        November 2018 (2 courses) and I liked to be there because it help me to expand my circle with
                        other people, especially who from other countries and improve my English, of course.
                    </p>

                    <p className="Paragraph">
                        Learning new languages and technologies is what I am passionate about (I self-taught React.js
                        with 2 weeks). I am considered a team-player because I like to help others and tend to work well
                        within groups. I can also do some mentoring tasks and do code reviews for other team members.
                    </p>

                    <p className="Paragraph">I often write blogs and share them on
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
