// export state which bundles all application states
import * as fromShoppingList from '../shopping-list/store/shopping-list.reducers';
import * as fromAuth from '../auth/store/auth.reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    shoppingList: fromShoppingList.State;
    auth: fromAuth.State;
}

// Application-wide reducers
export const reducers: ActionReducerMap<AppState> = {
    shoppingList: fromShoppingList.shoppingListReducer, // without ()
    auth: fromAuth.authReducer
    // here we essentially bundle up the application state from the different pieces of state from the different reducers files
};
