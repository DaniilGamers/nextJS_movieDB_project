'use client'

import React from 'react';
import css from './Header.module.css'
import cssToggle from '../themes/Themes.module.css'
import UserInfo from "../User/UserInfo";
import Link from "next/link";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const Header = () => {

    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;



    return (<div>
            <div className={css.HeaderMainBox}>
                <div className={css.HeaderBox}>
                    <div className={css.logoBox}><Link href={'/'}>MONGODB</Link></div>
                    <div className={css.OptionBox}>
                        <div className={css.LinkButtonsHeader}><Link href={'/movies?page=1'}>Movies</Link></div>
                        <div className={css.LinkButtonsHeader}><Link href={'/genres'}>Genres</Link></div>
                        <div className={css.LinkButtonsHeader}><Link href={'/search'}>Search</Link></div>
                        <div><div className={cssToggle.ToggleBox}><div className={cssToggle.circle}><input type="checkbox" className={cssToggle.toggle} checked={theme === 'light'} onChange={() => setTheme(theme === 'light' ? 'dark' : 'light')} id={"theme-toggle"}/>Dark mode
                            <label htmlFor={"theme-toggle"}></label></div></div></div>
                        <div><UserInfo/></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;