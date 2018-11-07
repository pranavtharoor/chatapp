import io from 'socket.io-client';
import store from 'Src/store';
import { action } from 'Src/utils';
import { socketUrl } from 'Config/endpoints';

const socket = io.connect(socketUrl);

socket.on('new message', msg => {
  const storeState = store.getState();
  if (storeState.header.id === msg.conversationId)
    store.dispatch(action('NEW_MESSAGE', msg));
  else {
    const index = storeState.conversations.conversations.findIndex(
      conversation => conversation.id === msg.conversationId
    );
    const conv = [...storeState.conversations.conversations];
    if (index !== -1) {
      conv[index].unread = true;
      store.dispatch(action('FETCH_CONVERSATIONS_SUCCESS', conv));
    }
  }
});

export default socket;
