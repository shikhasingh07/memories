import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Pagination, PaginationItem } from '@material-ui/lab';
import { Link } from 'react-router-dom';
import {getPosts} from '../actions/Post'
import useStyles from './styles'

const Paginate = ({page}) =>{
  const {numberofPages} = useSelector((state) =>state.posts)
  const classes = useStyles();
  const dispatch = useDispatch();
  useEffect(() =>{
    if(page) dispatch(getPosts(page))
  },[page])

  return(
    <div>
      <Pagination 
      className={classes.ul}
      count={numberofPages}
      page={Number(page) || 1}
      variant="outlined"
      color="primary"
      renderItem={(item) => (
        <PaginationItem {...item} component={Link} to={`/posts?page=${item.page}`}/>
      )}
      />
    </div>
  )
}
export default Paginate;