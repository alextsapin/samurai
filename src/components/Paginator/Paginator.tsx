import React from 'react';
import css from './Paginator.module.scss';
import Button from '@mui/material/Button';


type PaginatorPropsType = {
    currentPage: number
    pageArray: Array<number>
    pageChange: (pageNumber: number) => void
}

const Paginator = (props: PaginatorPropsType) => {
    const pageJSX = props.pageArray.map((item, index) => <Button 
        variant="contained" 
        size="large" 
        disabled={item === props.currentPage ? true : false} 
        key={index}
        onClick={() => props.pageChange(item)}>
            {item}
        </Button>)
    .filter((item, index) => index < 5 ? item : '')
    
    return (
        <div className={css.wrap}>
            {pageJSX}
        </div>
    )
}

export default Paginator;