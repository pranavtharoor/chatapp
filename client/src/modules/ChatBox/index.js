import ChatBox from './chatBox.container';
import reducer from './chatBox.reducer';
import saga from './chatBox.sagas';

export const chatBoxReducer = reducer;
export const chatBoxSaga = saga;

export default ChatBox;
