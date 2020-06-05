import {combineReducers} from 'redux';
import uiGeneral from './uiGeneral';
import editor from './editor';
import forms from './form';
import textEditor from './texteditor'

export default combineReducers({uiGeneral,editor,forms,textEditor});