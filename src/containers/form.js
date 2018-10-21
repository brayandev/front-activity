import React from 'react'
import Input from '../components/input/input'
import Button from '../components/button/button'

const styles = {
    divForm: {
        color: 'green'
    }
};
  
class FruitForm extends React.Component{
    constructor(){
        super()
    }

    render(){
        return(
            <div class="div-form">
                <h1 class="titleRegister">Register</h1>
                <Input 
                    id="txtFruit"
                    placeholder="Fruit"
                    type="text"
                />
                <Input
                    id="txtAmount"
                    placeholder="Amount"
                    type="number"
                />
                <Button/>
            </div>
        )
    }
}

export default FruitForm

