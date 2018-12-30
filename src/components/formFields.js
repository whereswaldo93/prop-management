import React, { Component } from 'react';

export class FormInput extends Component {
    render() {
        const { className, title, name } = this.props;
        return( 
            <div className="form-input">
            <lable>{title}</lable>
                <input className={`${className} form-input`}/>
            </div>
        )
    }
}