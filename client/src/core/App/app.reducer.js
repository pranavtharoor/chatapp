import reducer from 'Src/utils/reducer';

const actionHandlers = {
  SET_LOGGED_IN: (s, a) => ({ ...s, loggedIn: a.payload }),
  FETCH_INIT_SUCCESS: (s, a) => ({
    ...s,
    userData: { ...s.userData, ...a.payload }
  }),
  SET_LOADING: (s, a) => ({ ...s, loading: a.payload })
};

const initialState = {
  loggedIn: false,
  loading: true,
  userData: {
    email: '',
    name: ''
  }
};

export default reducer(initialState, actionHandlers);
