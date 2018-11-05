import reducer from 'Src/utils/reducer';

const actionHandlers = {
  FETCH_CHAT_SUCCESS: (s, a) => ({ ...s, messages: a.payload }),
  NEW_MESSAGE: (s, a) => ({ ...s, messages: [...s.messages, a.payload] })
};

const initialState = {
  messages: []
};

export default reducer(initialState, actionHandlers);
