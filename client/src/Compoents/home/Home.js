import React, { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import {
  Container,
  Grow,
  Grid,
  Paper,
  TextField,
  AppBar,
  Button,
} from "@material-ui/core";
import { useDispatch } from "react-redux";
import Posts from "../Posts/Posts";
import Form from "../Form/Form";
import { getPosts } from "../../actions/Post";
import Paginate from "../Pagination";
import useStyles from "./styles";
function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Home = () => {
  const classes = useStyles();
  const [currentId, setCurrentId] = useState(null);
  const [search, setSearch] = useState('');
  const [tgas, setTags] = useState([]);
  const dispatch = useDispatch();
  const history = useHistory();
  const query = useQuery();
  const page = query.get("page") || 1;
  const searchQuery = query.get("searchQuery");
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  const handleSearch = () =>{
    if(search.trim()){
     console.log("SearchIt")
    }else{
      history.push('/');
    }
  }
  const handleKeyPress = (e) =>{
    if(e.keycode === 13){
     handleSearch();
    }
  } 

  const handleAdd = (tag) => setTags([...tgas , tag])
  const handleDelete = (tagTodele)  => setTags(tgas.filter((tags) => tags !== tagTodele))
  
  return (
    <div>
      <Grow in>
        <Container>
          <Grid
            container
            className={classes.gridContainer}
            justifyContent="space-between"
            alignItems="stretch"
            spacing={3}
          >
            <Grid item xs={12} sm={7} md={9}>
              <Posts setCurrentId={setCurrentId} />
            </Grid>
            <Grid item xs={12} sm={4} md={3}>
              <AppBar
                className={classes.appBarSearch}
                position="static"
                color="inherit"
              >
                <TextField
                  name="search"
                  variant="outlined"
                  label="Search Memories"
                  value={search}
                  onKeyDown={handleKeyPress} 
                  onChange={(e)=>setSearch(e.target.value)}
                  fullWidth
                />
                <ChipInput
                  style={{ margin: "10px 0" }}
                  label="Search Tags"
                  variant="outlined"
                  value={tgas}
                  onAdd={handleAdd}
                  onDelete={handleDelete}
                />
                <Button
                  className={classes.searchButton}
                  variant="contained"
                  color="primary"
                  onClick={handleSearch}
                >
                  Search
                </Button>
              </AppBar>
              <Form currentId={currentId} setCurrentId={setCurrentId} />
              <Paper elevation={6}>
                <Paginate />
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </div>
  );
};

export default Home;
