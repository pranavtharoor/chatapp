import reducer from 'Src/utils/reducer';

const actionHandlers = {
  SET_LOGGED_IN: (s, a) => ({ ...s, loggedIn: a.payload }),
  FETCH_INIT_SUCCESS: (s, a) => ({
    ...s,
    userData: { ...s.userData, ...a.payload }
  }),
  SET_LOADING: (s, a) => ({ ...s, loading: a.payload }),
  REGISTERATION_FILLED: s => ({ ...s, registrationFilled: true })
};

const initialState = {
  loggedIn: false,
  loading: true,
  registrationFilled: false,
  userData: {
    email: '',
    name: '',
    id: null,
    type: null
  }
};

export default reducer(initialState, actionHandlers);
