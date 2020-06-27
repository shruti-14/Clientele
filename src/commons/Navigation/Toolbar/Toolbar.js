import React, { useRef, useState } from 'react';
import classes from './Toolbar.module.css';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';
import IconNavigationItems from '../IconNavigationItems/IconNavigationItems';
import NavigationItems from '../NavigationItems/NavigationItems';
import Aux from '../../../hoc/Aux/Aux';
import BackDrop from '../../UI/Backdrop/Backdrop';
import SubCategoryModal from '../SubCategoryModal/SubCategoryModal';

const Toolbar = (props) => {
    const navLinksRef = useRef(null);
    const [popUpStyle, setPopUpStyle] = useState({
        position: 'relative',
        left: 0,
        top: 0,
        display: 'none',
        showBackDrop: false,
        category: 'fashion'
    });
    const getStyles = (key) => {
        let style = { ...popUpStyle };
        if (navLinksRef.current) {
            const elePosition = navLinksRef.current.getBoundingClientRect();
            style['left'] = (elePosition['left'] + 50) + 'px';
            debugger;
            style['top'] = (elePosition['top'] + (elePosition['height'] + 5)) + 'px';
            style['display'] = 'block';
            style['showBackDrop'] = true;
            style['category'] = key;
        }
        setPopUpStyle(style)
    }
    const removeStyles = () => {
        setPopUpStyle({
            position: 'relative',
            left: 0,
            top: 0,
            display: 'none',
            showBackDrop: false
        });
    }
    return (<Aux>
        <BackDrop show={popUpStyle['showBackDrop']} clicked={() => removeStyles()} />
        <header className={classes.Toolbar}>
            <DrawerToggle clicked={props.drawerToggleClicked} />
            <div className={classes.LeftOptionContainer}>
                <p className={classes.Title}>
                    Clientele
             </p>
                <div className={classes.mainNavLinks} ref={navLinksRef} > <NavigationItems mouseHovered={(key) => getStyles(key)} /> </div>
            </div>
            <IconNavigationItems />
        </header>
        <div className={classes.CategoryContainer} style={popUpStyle}>
            <SubCategoryModal category={popUpStyle['category']} mouseLeft={() => removeStyles()} />
        </div>
    </Aux>);
};

export default Toolbar;
