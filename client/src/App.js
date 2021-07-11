import React , {useEffect , useState}from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import { getPosts } from './actions/Post';
import Posts from './Compoents/Posts/Posts';
import Form from './Compoents/Form/Form';
import useStyles from './styles';
import memories from './image/memories.png';
import { useDispatch } from 'react-redux';
const App = () => {
  const[currentId , setCurrentId ] = useState(null); 
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getPosts()); 
  },[currentId, dispatch]);

  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60" />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container className={classes.mainContainer}  justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
               <Posts setCurrentId={setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
               <Form currentId={currentId} setCurrentId={setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

export default App;