import React, {Component} from 'react'

class ResumeHeader extends Component {
    render() {
        return (
            <div className="ResumeHeader">
                <h1 className="Name">Tran Van Tu</h1>

                <div className="SubHead">
                    <span className="Address">24 Nguyen Co Thach, My Dinh, Nam Tu Liem, Ha Noi</span>
                    <span className="Phone">+84373428920</span>
                    <span className="Email">tutv95@gmail.com</span>
                </div>
            </div>
        )
    }
}

export default ResumeHeader
