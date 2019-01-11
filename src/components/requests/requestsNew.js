import React, { Component } from 'react';

import NewNewsletterForm from '../newsletter/newsletterNewForm';

class NewRequest extends Component {

    onSubmit = (fields) => {
        // console.log(button)
        // if(button =='submit') {
        //     // save newsletter on backend. perform a post request here.
        //     console.log('trying to submit to backend');
        // } 
        this.props.history.push('/dashboard');
    }

    onCancel = () => {
        this.props.history.push('/dashboard');
    }

    render() {
        return (
            <div className='new-request'>
                <NewNewsletterForm 
                onCancel={() => this.onCancel()} 
                onSubmit ={(event) => this.onSubmit(event)}
                formTitle='New Request'
                />
            </div>
        );
    }
}

export default NewRequest;