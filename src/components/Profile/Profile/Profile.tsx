import React from 'react';
import PostBox from '../PostsBox/PostBox';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import css from './Profile.module.scss'

type propsType = {

}

const Profile = (props: any) => {
    return (
    <Container fixed>
        <Grid container>
            <Grid item lg={12}>
                <h1 className="title title_first">{props.userProfile.fullName}</h1>
                <img src={props.userProfile.photos.large} alt="img"/>
                <br/>
                <br/>
                <br/>
                <p>{props.userProfile.aboutMe}</p>
                <p>{props.userProfile.lookingForAJobDescription}</p>
                <p>{props.userProfile.contacts.website}</p>
                <p>{props.userProfile.contacts.youtube}</p>
                <p>{props.userProfile.contacts.mainLink}</p>

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
                        </TableBody>
                    </Table>
                </TableContainer>
            </Grid>
        </Grid>
    </Container>
    )
}

export default Profile;