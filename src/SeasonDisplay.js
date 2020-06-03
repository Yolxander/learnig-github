import './SeasonDisplay.css';
import React from 'react';



const seasonConiguration ={
    summer:{
        text:'yay its hot',
        icons:'sun'
    },
    winter:{
        text:'meh its chill',
        icons:'snowflake'
    }
}
const getReason = (lat,month)=>{
    if( month > 2 && month <9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat < 0 ? 'winter' : 'winter';
    }
    
}

const SeasonDisplay =(props)=>{
    const season = getReason(props.latitude, new Date().getMonth());
    const {icons,text} = seasonConiguration[season];

    return(
        <div className={`season-display ${season}`} >
            <i className={`icon-left massive ${icons} icon `}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${icons} icon `}/>
        </div>
    )
}

export default SeasonDisplay;