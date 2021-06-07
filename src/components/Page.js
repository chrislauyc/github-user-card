import React from 'react';
import {withRouter} from 'react-router';
import UserCard from './UserCard';
import UserCards from './UserCards';
import {
    withStyles,
    Container,
    Grid,
    Typography
} from '@material-ui/core';
import {theme} from '../theme/theme'; 
const styles = {
    mainCard:{
        backgroundColor:theme.palette.background.paper,
        paddingTop:theme.spacing(3),
        margin:'0 auto',
    },
    followerCards:{
        backgroundColor:theme.palette.background.paper,
        flexGrow:'1',
        minHeight:'100vh',
        margin:'auto'
    },
    followerText:{
        padding:theme.spacing(3),
    },

};
class Page extends React.Component{
    constructor(){
        super();
        this.state={
            userName:'',
            userData:{}
        };
    }
    componentDidMount(){
        const userName = this.props.match.params.userName;
        this.setState({userName});
    }
    componentDidUpdate(prevProps,prevState){
        const userName = this.props.match.params.userName;
        if(prevProps.match.params.userName!==userName){
            this.setState({userName:userName});
        }
    }
    setUserData=(userData)=>{
        this.setState({userData});
    }
    render(){
        const {userName,userData} = this.state;
        const {setUserData} = this;
        const {classes} = this.props;
        return(
            <>
                <Grid container>
                    <Grid item className={classes.mainCard} spacing={4}>
                        <Container>
                            <UserCard userName={userName} setUserData={setUserData}/>
                        </Container>
                    </Grid>
                    <Grid item className={classes.followerCards}>
                        <Typography className={classes.followerText} component='h1' variant='h4' color='primary' align='center' >{'Followers'}</Typography>
                        <Container>
                            <UserCards userName={userName} userData={userData} />
                        </Container>
                    </Grid>
                </Grid>
            </>
        );
    };
}
export default withStyles(styles)(withRouter(Page));