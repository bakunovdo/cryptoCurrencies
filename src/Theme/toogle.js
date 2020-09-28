import React from 'react'
import Switch from "@material-ui/core/Switch";
import {ToggleComponent, ToggleOuter} from "../Components/styledComponents";


export const Toggle = ({toggleTheme, isDark}) => {
    return (
        <ToggleOuter>
            <ToggleComponent>
                <Switch onChange={toggleTheme} checked={isDark}/>
                <span> Dark Mode </span>
            </ToggleComponent>
        </ToggleOuter>
    );
};

export default Toggle;