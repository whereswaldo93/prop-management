import React, { Component } from 'react';

import Icon from '../icon';
import Button from '../button';

import AnimateHeight from 'react-animate-height';

class RequestsItem extends Component {

    constructor() {
        super()

        this.state = {
            height: 0
        }
    }

    toggleDropdown = () => {
        if(this.state.height == 0) {
            this.setState({height: 'auto'})
        } else {
            this.setState({height: 0})
        }
    }

    render() {
        return (
            <div className='requests-item'>
                <Icon className='requests-item__icon' icon='fas fa-exclamation-triangle'/>
                <div className='requests-item__title'>
                    <div className='requests-item__title__text'>Fallen door</div>
                    <Icon callback={() => this.toggleDropdown()} className='requests-item__title__arrow' icon='fas fa-sort-down'/>
                </div>
                <div className='requests-item__tenant-unit'>
                    Waldo- Unit 115
                </div>
                <div className='requests-item__date'>
                    9/16/95
                </div>
                <Button className='requests-item__move' callback={() => console.log('tryna change status')} icon='fas fa-wrenchs'/>

                <div className='requests-item__description'>
                    <AnimateHeight
                        duration={300}
                        height={this.state.height}
                    >
                        <div className='item__description'>
                            <img
                                className='item__description-img' 
                                src='http://via.placeholder.com/160x94'
                            />
                            <p className='item__description-text'>
                                lorem Ipsum lorem Ipsum lorem Ipsum
                                lorem Ipsum	lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum lorem Ipsum
                                lorem Ipsum	lorem Ipsum lorem Ipsum
                                lorem Ipsum
                            </p>
                        </div>    
                    </AnimateHeight>
                </div>
            </div>
        );
    }
}

export default RequestsItem;