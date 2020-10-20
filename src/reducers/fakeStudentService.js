export default (state = [] ,action)=> 
{
    switch (action.type){
        case 'LIST_STUDENT':
            return  action.payload;

        default:
            return state;
    }
};