import React from 'react'
import {getAllUsersSL} from '../../redux/selectors/users';
import {connect} from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {getUsersTC} from '../../redux/reducers/users';
import {Img} from 'react-image';
import Skeleton from '@mui/material/Skeleton';
import Button from '@mui/material/Button';
import user from '../../images/user.png';
import spinner from '../../images/spinner.gif'

const Preloader = () => {
    return (
        <Container fixed>
            <img className="preloader" src={spinner} alt="spinner"/>
        </Container>

    )
}

export default Preloader;