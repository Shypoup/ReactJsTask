
import axios from 'axios';


export const listStudent =() => async dispatch => {
   const response = await axios.get('data.json');
    
   dispatch({ type : 'LIST_STUDENT' , payload : response.data});
}

