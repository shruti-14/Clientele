import React from 'react';
import classes from './SubCategoryModal.module.css';
import categoryList from './SubCategoryList';

const SubCategoryModal = (props) => {

    // const getListItems = (e) => {
    //     if (e.items) {
    //         e.items.map(item => {
    //             return <li key={item}>{item}</li>
    //         })
    //     }
    // }

    // const categoryListContent = () => {
    //     if (categoryList[props.category])
    //         categoryList[props.category].map(e => {
    //             return <div key={e.label}><p>{e.label}</p>
    //                 {
    //                     getListItems(e)
    //                     // e.items.map(item => {
    //                     //     return <li key={item}>{item}</li>
    //                     // })
    //                 }
    //             </div>
    //         });
    //     return null;
    // }
    return <div className={classes.container}>
        {/* {categoryListContent} */}
        {props.category}
    </div>;
}

export default SubCategoryModal;