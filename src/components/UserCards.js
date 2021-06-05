import axios from 'axios';
import React from 'react';
import UserCard from './UserCard';
import {
    Grid,Container,Typography,withStyles,createMuiTheme
} from '@material-ui/core';
const theme = createMuiTheme();
const styles = {
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
      },
};
class UserCards extends React.Component{
    constructor(){
        super();
        this.state={
            userList:null,
        };
    }
    componentDidMount(){
        if(Object.keys(this.props.userData).length!==0){
            this.fetchData();
        }
    }
    componentDidUpdate(prevProps,prevState){
        if(prevProps.userName!==this.props.userName){
            this.fetchData();
        }
        if(prevProps.userData!==this.props.userData){
            this.fetchData();
        }
    }
    fetchData=()=>{
        const {userData} = this.props;
        axios.get(userData['followers_url'])
        .then(r=>{
            this.setState({userList:r.data});
        })
        .catch(e=>console.log({e}));

    }
    render(){
        const {userList} = this.state;
        const {classes} = this.props;
        if(userList){
            if(userList.length!==0){
                return(
                    <Container className={classes.cardGrid} maxWidth='md'>
                        <Grid container spacing={4}>
                            {userList.map((user,i)=>
                                <Grid key={i} item>
                                    <UserCard userName={user.login} setUserData={null}/>
                                </Grid>
                                )}
                        </Grid>
                    </Container>
                );
            }
            else{
                return <Typography variant='body1'>No followers found</Typography>
            }
        }
        else{
            
            return <div>Loading...</div>
        }
    }
};
export default withStyles(styles)(UserCards);