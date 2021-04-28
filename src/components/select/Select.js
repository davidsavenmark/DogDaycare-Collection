import React from 'react';
import './select.css';
import '../hundar/breed-image.css';
import loading from './loading.gif';

const Select=(props)=>{
    const handleChange =(event)=>{
        props.onSelect(event.target.value)

    }
    const getLoadingView =()=>{
        return <div className="loading"><img className="loading-gif"src={loading}alt="Loading..."/></div>
    }
    const getErrorView =()=>{
        return alert('Sorry can not display the data')
    }
    const getSelectView =()=>{
        return (
            <select onChange={handleChange}>
                {props.dogsList.map((breed, index)=>{
                    return(
                        <option value={breed} key={index}>{breed}</option>
                    );

                })}

            </select>
        );
    }
    return(
        <div className="select-container">
            {props.dogsList? getSelectView():getLoadingView()}
            {props.isError? getErrorView(): null}
        </div>
    );
}

export default Select;