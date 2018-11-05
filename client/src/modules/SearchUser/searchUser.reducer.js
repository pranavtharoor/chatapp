import reducer from 'Src/utils/reducer';

const actionHandlers = {
  FETCH_SEARCH_USER_SUCCESS: (s, a) => ({ ...s, users: a.payload })
};

const initialState = {
  users: []
};

export default reducer(initialState, actionHandlers);
