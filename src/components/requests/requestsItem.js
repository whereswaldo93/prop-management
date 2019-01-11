import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

class RequestsItem extends Component {

    render() {
        return (
            <div className='requests-item'>
                <div> 
                    <Icon icon='fas fa-exclamation-triangle' className='requests-item__icon'/>
                    <div className='requests-item__title'>
                        Fallen door
                    </div>
                    <div className='requests-item__tenant-unit'>
                        Waldo- Unit 115
                    </div>
                    <Icon className='requests-item__arrow' icon='fas fa-sort-down'/>
                    <div className='requests-item__date'>
                        9/16/95
                    </div>
                    <Button className='requests-item__move' callback={() => console.log('tryna change status')} icon='fas fa-wrenchs'/>
                </div>
            </div>
        );
    }
}

export default RequestsItem;