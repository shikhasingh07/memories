import {
  FETCH_BY_SEARCH,
  FETCH_ALL,
  CREATE,
  UPDATE,
  LIKE,
  DELETE,
  START_LOADING,
  END_LOADING,
  FETCH_POST,
  COMMENT,
} from "../contants/actionTypes";
const posts = (state = { isLoading: true, posts: [] }, action) => {
  switch (action.type) {
    case FETCH_ALL:
      return {
        ...state,
        posts: action.payload.data,
        currentPage: action.payload.currentPage,
        numberOfPages: action.payload.numberOfPages,
      };
    case CREATE:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case DELETE:
      return {
        ...state,
        posts: state.posts.filter((post) => post._id !== action.payload),
      };
    case LIKE:
      return {
        ...state,
        posts: state.posts.map((post) =>
          post._id === action.payload._id ? action.payload : post
        ),
      };
    case FETCH_BY_SEARCH:
      return { ...state, posts: action.payload.data };
    case FETCH_POST:
      return { ...state, post: action.payload.post };
    case START_LOADING:
      return { ...state, isLoading: true };
    case END_LOADING:
      return { ...state, isLoading: false };
    case COMMENT:
      return {
        ...state,
        posts: state.posts.map((post) => {
          if (post._id === action.payload._id) {
            return action.payload;
          }
          return post;
        }),
      };
    default:
      return state;
  }
};

export default posts;
