import {getAllUsersSL} from '../../redux/selectors/users';
import {connect} from 'react-redux';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import {getUsersTC} from '../../redux/reducers/users';

type PropsType = {
    userBox: any
}

type UserPropsType = {
    name: string
}

const User = (props: UserPropsType) => {
    return (
        <Grid item md={3}>
            <Paper className="user" elevation={3}>
                <p className="user__name">{props.name}</p>
            </Paper>
        </Grid>
    )
}

const UserBox = (props: PropsType) => {
    //const UserBoxJSX = props.userBox.map((item: any, index: number) => <User key={index} name={item.fullName}/>)
    return (
        <Container fixed>
            <Grid container>
                {/*UserBoxJSX*/}
            </Grid>
        </Container>

    );
}

const mapStateToProps = (state: any) => {
    return {
        userBox: getAllUsersSL(state)
    }
}

export default connect(mapStateToProps, {})(UserBox);