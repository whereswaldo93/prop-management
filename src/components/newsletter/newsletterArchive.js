import React, { Component } from 'react';

function ArchiveItem({title, date}) {
    return (
        <div className='archive-item'>
            <div className='archive-item__title'>{title}</div>
            <div className='achive-item__date'>{date}</div>
        </div>
    )
}

class NewsletterArchive extends Component {
    render() {
        return (
            <div className='newsletter-archive'>
                <div className='newsletter-archive__title'>Archive</div>
                <div className='newsletter-archive__items archive-items'>
                    <ArchiveItem title='hey' date='09/16/1995'/>
                    <ArchiveItem title='hey' date='this is the date'/>
                    <ArchiveItem title='hey' date='this is the date'/>
                </div>
            </div>
        )
    }
}
 
export default NewsletterArchive;