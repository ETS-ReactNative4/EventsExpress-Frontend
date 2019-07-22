
const initialState = {
    user:{
        id: null,
        name: null,
        email: null,
        phone: null,
        birthday: null,
        gender: null,
        role: null,
        photoUrl: null,
        token: null
    },
    login:{
        isLoginPending: false,
        isLoginSuccess: false,
        loginError: null
    },
    register:{
        isRegisterPending: false,
        isRegisterSuccess: false,
        registerError: null
    },
    add_event:{
        isEventPending: false,
        isEventSuccess: false,
        eventError: null
    },
    events: {
        isPending: false,
        isError: false,
        data: []
    },
    add_category: {
        isCategoryPending: false,
        isCategorySuccess: false,
        categoryError: null
    },
    categories: {
        isPending: false,
        isError: false,
        data: []
    }
};

export default initialState;