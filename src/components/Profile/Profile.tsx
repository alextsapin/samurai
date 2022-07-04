import React from 'react';
import PostBox from './PostsBox/PostBox';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';

type propsType = {

}

const Profile = (props: any) => {
    return (
        <Container fixed>
            <Grid container>
                <Grid item lg={6}>
                    <h1 className="title title_first">{props.userProfile.fullName}</h1>
                    <img src={props.userProfile.photos.large} alt="img"/>
                    
     
                </Grid>
                <Grid item lg={6}>
                    <PostBox/>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Profile;