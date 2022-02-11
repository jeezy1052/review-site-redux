import { combineReducers } from 'redux';

import reviews from './reviews';
import auth from './auth';

export const reducers = combineReducers({ reviews, auth });
