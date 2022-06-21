import React from 'react';
import css from './style.module.scss';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import {useSelector} from 'react-redux';
import Paper from '@mui/material/Paper';
import {Img} from 'react-image';
import Skeleton from '@mui/material/Skeleton';

type MessagePropsType = {
    name: string
    image: string
    message: string
}

const Message = (props: MessagePropsType) => {
    return (
        <Paper className={css.post} elevation={3}>
            <Grid container>
                <Grid item lg={2} xs={12}>
                    <Img className={css.ava} src={props.image} loader={<Skeleton variant="rectangular" width={200} height={200}/>} alt="img"/>
                </Grid>

                <Grid item lg={10} xs={12}>
                    <div className={css.message}>
                        <p className={css.name}>{props.name}</p>
                        <p>{props.message}</p>
                    </div>
                </Grid>
            </Grid>
        </Paper>
        
    )
}

const Chat = () => {
    const chatBox = useSelector<any, any>(state => state.chat.chatBox).map((item: any, index: number) => {
        return <Message name={item.name} image={item.image} message={item.message}/>
    })

    return (
        <Container fixed>
            {chatBox}
        </Container>
    )
}

export default Chat;