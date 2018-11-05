import reducer from 'Src/utils/reducer';

const actionHandlers = {
  FETCH_CONVERSATIONS_SUCCESS: (s, a) => ({ ...s, conversations: a.payload })
};

const initialState = {
  conversations: []
};

export default reducer(initialState, actionHandlers);
