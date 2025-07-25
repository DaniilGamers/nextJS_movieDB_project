import React, {useContext} from 'react';
import css from './Home.module.css'
const HomeMain = () => {


    return (
        <div className={css.welcomeBox}>
            <p>Welcome!!!</p>
            <p style={{fontSize: 40}}>Here you can find films which you want to check out<br/>
                Through genre selection or search through.<br/>
                Make yourself cozy here :)</p>
        </div>
    );
};

export default HomeMain;