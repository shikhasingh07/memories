import {FETCH_ALL , CREATE, UPDATE , LIKE , DELETE} from '../contants/actionTypes'
import * as api from '../api/index.js';

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    console.log(data);
    dispatch({ type: FETCH_ALL, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async(dispatch) =>{
  try {
    const {data} = await api.creatPost(post); 
  dispatch({type : CREATE , payload : data});
  }catch (error) {
    console.log(error);
  }
}
export const updatePost = (id ,post) => async(dispatch) =>{
  try {
   const {data} = await api.updatePost(id , post);
   dispatch({type : UPDATE , payload:data});
  }catch(error){
   console.log(error);
  }
}
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({ type:DELETE, payload: id });
  } catch (error) {
    console.log(error.message);
  }
};
export const likePost =(id) => async (dispatch) =>{
  try{
  const {data} = await api.likePost(id);
  dispatch({type :LIKE , payload : data});
  }catch(error){
       console.log(error)
  }
}