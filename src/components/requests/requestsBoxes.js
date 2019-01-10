import React, { Component } from 'react';
import RequestsBox from './requestsBox';

class RequestsBoxes extends Component {
    render() {
        return (
            <a onClick={() => console.log('trying to select this box')} className='requests-boxes requests-box-inactive'>
                <RequestsBox title={'pending'} count={2}/>
                <RequestsBox title={'in-progress'} count={3}/>
                <RequestsBox title={'complete'} count={9}/>
            </a>
        );
    }
}

export default RequestsBoxes;