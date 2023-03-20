import React from "react";
import HomeScreen from "../view/HomeScreen";
interface HomeViewModelprops{
    navigation:any
}

const HomeScreenViewModel=(props:HomeViewModelprops)=>{
    const{navigation}=props
    return(
        <HomeScreen
        {...{
            navigation
        }}
        />
    )
}

export default HomeScreenViewModel