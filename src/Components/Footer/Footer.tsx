import React from 'react';
import css from '../Footer/footer.module.css'
import Link from "next/link";

const Header = () => {

    return (
        <div className={css.FooterMainBox}>
            <div className={css.FooterBox}>
                <div className={css.logoBox}><Link href={'/'}>MONGODB</Link></div>
                <div>
                    <div className={css.textProject}>Test Project Site by Daniel</div>
                </div>
            </div>
        </div>
    );
};

export default Header;