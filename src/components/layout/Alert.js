import React from 'react'

const Alert = (props) => {
    
    if (props.alert !== null){
        
        console.log('alert', props.alert);
        return(
            <div className={`alert alert-${props.alert.type}`}>
                <i className = 'fas fa-info-circle' /> {props.alert.msg}
            </div>
        );
    }else{
        return(null);
    }

};

export default Alert