import React from 'react';


export default function Icon({className, icon, callback}) {
    return (
        <div onClick={callback} className={className}>
            <i className={icon}></i>
        </div>
    )
}
