import { Authenticate } from "../../core/user.model";
import { AuthActionTypes, All } from '../actions/auth.actions';

export interface State {
    isLoggedIn: boolean;
    user: Authenticate | null;
    errorMessage: string | null;
}

export const initialState: State = {
    isLoggedIn: false,
    user: null,
    errorMessage: null
}

export function reducer(state = initialState, action: All): State {
    switch (action.type) {
        case AuthActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                isLoggedIn: true,
                user: {
                    token: action.payload.token
                },
                errorMessage: null
            };
        }
        case AuthActionTypes.LOGIN_FAILURE: {
            return {
                ...state,
                errorMessage: 'Incorrect email and/or password.'
            };
        }
        case AuthActionTypes.LOGOUT: {
            return initialState;
        }
        default: {
            return state;
        }
    }
}

export const getLoggedIn = (state: State) => state.isLoggedIn;