import {combineReducers} from 'redux';
import uiGeneral from './uiGeneral';
import editor from './editor';
import forms from './form';

export default combineReducers({uiGeneral,editor,forms});