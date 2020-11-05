import react from'react';
import { NavBarComponent } from '../Components/NavBar';


const LayoutPageHOC=(PassedComponent)=>{
    const LayoutPage=()=>{
        return(
            <div>
                <NavBarComponent></NavBarComponent>
            <div>
                <PassedComponent></PassedComponent>
            </div>
            </div>
        );
    };
    return LayoutPage;
};

export {LayoutPageHOC as LayoutPage};