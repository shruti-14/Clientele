import React from 'react';
import classes from './SubCategoryModal.module.css';
import categoryList from './SubCategoryList';

const SubCategoryModal = (props) => {

    const getListItems = (e) => {
        if (e.items) {
            return e.items.map(item => {
                return <li key={item} className={classes.SubCategoryName}>{item}</li>
            })
        }
    }

    const categoryListContent = categoryList[props.category] ?
        categoryList[props.category].map(e => {
            const listItems = getListItems(e);
            return <div key={e.label} className={classes.categoryColumn}><p className={classes.categoryNames}>{e.label}</p>
                {
                    listItems
                }
            </div>
        }) : null;

    return <div className={classes.container} onMouseLeave={() => props.mouseLeft()}>
        {categoryListContent}
    </div>;
}

export default SubCategoryModal;