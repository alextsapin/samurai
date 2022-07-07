import React, {useEffect} from 'react';
import PostBox from '../PostsBox/PostBox';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import css from './Profile.module.scss'
import {useParams} from 'react-router-dom';
import {ProfilePropsType} from '../Wrapper'

const Profile = (props: ProfilePropsType) => {

    const {id} = useParams();

    useEffect(() => {
        if(id) {
            props.getUserProfileTC(+id)
        }
    }, [])

    return (
        <Container fixed>
            <Grid container>
                <Grid item lg={5}>
                    <h1 className={css.title}>{props.userProfile.fullName}</h1>
                    {
                        props.userProfile.photos.large !== null 
                        ? <img src={props.userProfile.photos.large} alt="img"/> 
                        : ''
                    }
                </Grid>
                <Grid item lg={7}>
                    <TableContainer component={Paper}>
                        <Table aria-label="customized table">
                            <TableBody>
                                <TableRow className={css.row}>
                                    <TableCell component="th" scope="row">Кратко о себе</TableCell>
                                    <TableCell>{props.userProfile.aboutMe}</TableCell>
                                </TableRow>

                                <TableRow className={css.row}>
                                    <TableCell component="th" scope="row">В поиске работы</TableCell>
                                    <TableCell>{props.userProfile.lookingForAJob === true ? 'Да' : 'Нет'}</TableCell>
                                </TableRow>

                                <TableRow className={css.row}>
                                    <TableCell component="th" scope="row">Причина поиска</TableCell>
                                    <TableCell>{props.userProfile.lookingForAJobDescription}</TableCell>
                                </TableRow>

                                <TableRow className={css.row}>
                                    <TableCell component="th" scope="row">GitHub</TableCell>
                                    <TableCell>{props.userProfile.contacts.github}</TableCell>
                                </TableRow>

                                <TableRow className={css.row}>
                                    <TableCell component="th" scope="row">VK</TableCell>
                                    <TableCell>{props.userProfile.contacts.vk}</TableCell>
                                </TableRow>

                                <TableRow className={css.row}>
                                    <TableCell component="th" scope="row">Facebook</TableCell>
                                    <TableCell>{props.userProfile.contacts.facebook}</TableCell>
                                </TableRow>

                                <TableRow className={css.row}>
                                    <TableCell component="th" scope="row">Instagram</TableCell>
                                    <TableCell>{props.userProfile.contacts.facebook}</TableCell>
                                </TableRow>

                                <TableRow className={css.row}>
                                    <TableCell component="th" scope="row">Twitter</TableCell>
                                    <TableCell>{props.userProfile.contacts.twitter}</TableCell>
                                </TableRow>

                                <TableRow className={css.row}>
                                    <TableCell component="th" scope="row">Web–site</TableCell>
                                    <TableCell>{props.userProfile.contacts.website}</TableCell>
                                </TableRow>

                                <TableRow className={css.row}>
                                    <TableCell component="th" scope="row">YouTube</TableCell>
                                    <TableCell>{props.userProfile.contacts.youtube}</TableCell>
                                </TableRow>

                                <TableRow className={css.row}>
                                    <TableCell component="th" scope="row">MainLink</TableCell>
                                    <TableCell>{props.userProfile.contacts.mainLink}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Profile;