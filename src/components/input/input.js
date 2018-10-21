import React from 'react'

class Input extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            value: ''
        }
    }

    onChange(event){
        this.setState({
            value: event.target.value
        })
        console.log(this.state.value)
    }

    render(){
        return(
            <div>
                <input class="txtRegister" type={this.props.type} id={this.props.id} placeholder={this.props.placeholder} value={this.state.value} onChange={this.onChange.bind(this)} maxLength="20"></input>
            </div>
        )
    }
}

export default Input