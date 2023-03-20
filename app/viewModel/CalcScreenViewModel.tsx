import React from "react";
import Home from "../view/CalcScreen";
interface HomeViewModelprops{
    navigation:any
}

const CalcScreenViewModel=(props:HomeViewModelprops)=>{
    const{navigation}=props
    return(
        <Home
        {...{
            navigation
        }}
        />
    )
}

export default CalcScreenViewModel