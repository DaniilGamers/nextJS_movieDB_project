import React from 'react';
import css from './Header.module.css'
import cssToggle from '../themes/Themes.module.css'
import UserInfo from "../User/UserInfo";
import Link from "next/link";

const Header = () => {



    return (<div>
            <div className={css.HeaderMainBox}>
                <div className={css.HeaderBox}>
                    <div className={css.logoBox}><Link href={'/'}>MONGODB</Link></div>
                    <div className={css.OptionBox}>
                        <div className={css.LinkButtonsHeader}><Link href={'/movies/page=1'}>Movies</Link></div>
                        <div className={css.LinkButtonsHeader}><Link href={'/movies/genres'}>Genres</Link></div>
                        <div className={css.LinkButtonsHeader}><Link href={'/movies/search'}>Search</Link></div>
                        <div><div className={cssToggle.ToggleBox}><div className={cssToggle.circle}><input type="checkbox" className={cssToggle.toggle} id={"check"}/>Dark mode
                            <label htmlFor={"check"}></label></div></div></div>
                        <div><UserInfo/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;