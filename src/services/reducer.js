
export const initialState = {
    user: '',
    searchTerm:''
}

export const actionTypes = {
    SET_SEARCH_TERM: 'SET_SEARCH_TERM'
}

const reducer = (state, action) => {

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }

        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                search: action.searchTerm
            }

        default:
            return { ...state }
    }
}

export default reducer;