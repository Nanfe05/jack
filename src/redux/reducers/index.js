import {combineReducers} from 'redux';
import uiGeneral from './uiGeneral';
import editor from './editor';

export default combineReducers({uiGeneral,editor});