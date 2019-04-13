import React, {Component} from 'react'

class ResumeHeader extends Component {
    render() {
        return (
            <div className="ResumeHeader">
                <h1 className="Name">Tran Van Tu</h1>

                <div className="SubHead">
                    <span className="Address">27 Do Xuan Hop, My Dinh 1, Nam Tu Liem, Ha Noi</span>
                    <a className="Phone" href="tel:+84373428920">+84373428920</a>
                    <a className="Email" href="mailto:tutv95@gmail.com">tutv95@gmail.com</a>
                </div>
            </div>
        )
    }
}

export default ResumeHeader
