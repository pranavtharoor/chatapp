import reducer from 'Src/utils/reducer';

const actionHandlers = {
  OPEN_CHAT: (s, a) => ({ ...s, ...a.payload }),
  CLEAR_HEADER: (s, a) => ({ ...s, ...a.payload })
};

const initialState = {
  participantName: '',
  participantEmail: '',
  participantId: null,
  id: null
};

export default reducer(initialState, actionHandlers);
