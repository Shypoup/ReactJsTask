import {combineReducers} from 'redux';
import fakeStudentService from './fakeStudentService';

export default combineReducers({
    students : fakeStudentService
});