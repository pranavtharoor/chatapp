import saga from './chat.sagas';
import asyncComponent from 'Src/enhancers/asyncComponent';

export const chatSaga = saga;

export default asyncComponent(() => import('./chat.container'));
