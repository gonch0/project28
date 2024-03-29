import { StoreProvider } from './ui/StoreProvider';
import { createReduxStore, AppDispatch } from './config/store';
import type {
    StateSchema,
    ReduxStoreWithManager,
} from './config/StateSchema';

export {
    createReduxStore,
    StoreProvider,
    StateSchema,
    AppDispatch,
};