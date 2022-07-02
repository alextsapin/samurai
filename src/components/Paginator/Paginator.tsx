import React from 'react';
import css from './style.module.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {useSelector} from 'react-redux';
import Paper from '@mui/material/Paper';
import {Img} from 'react-image';
import Skeleton from '@mui/material/Skeleton';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

type PaginatorPropsType = {

}

const Paginator = (props: PaginatorPropsType) => {
    return (
        <div className={css.wrap}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
        </div>
    )
}

export default Paginator;