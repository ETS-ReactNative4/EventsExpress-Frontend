'use strict';

import eventHelper from '../components/helpers/eventHelper';

const initialState = {
    modalWind: {
        isOpen: false
    },
    resetError: {
        isError: false,
    },
    user: {
        id: null,
        name: null,
        email: null,
        phone: null,
        birthday: null,
        gender: null,
        role: null,
        photoUrl: null,
        token: null,
        categories: []
    },
    roles: {
        isPending: false,
        isError: false,
        data: []
    },
    login: {
        isLoginPending: false,
        isLoginSuccess: false,
        loginError: null
    },
    register: {
        isRegisterPending: false,
        isRegisterSuccess: false,
        registerError: null
    },
    unitsOfMeasuring: {
        isPending: true,
        isError: false,
        units: []
    },
    change_avatar: {
        isPending: false,
        isSuccess: false,
        Error: {}
    },
    editUsername: {
        isEditUsernamePending: false,
        isEditUsernameSuccess: false,
        EditUsernameError: {}
    },
    SelectCategories: {
        IsSelectCategoriesSeccess: false,
        IsSelectCategoriesError: null
    },
    add_category: {
        isCategoryPending: false,
        isCategorySuccess: false,
        categoryError: null
    },
    categories: {
        isPending: false,
        isError: false,
        editedCategory: null,
        data: []
    },
    countries: {
        isPending: false,
        isError: false,
        data: []
    },
    cities: {
        isPending: false,
        isError: false,
        data: []
    },
    users: {
        isPending: true,
        isError: false,
        editedUser: null,
        data: {
            items: [],
            pageViewModel: {}
        }
    },
    add_comment: {
        isCommentPending: false,
        isCommentSuccess: false,
        commentError: null
    },
    comments: {
        isPending: false,
        isError: false,
        data: {
            items: [],
            pageViewModel: {},
        }
    },
    delete_comment: {
        isCommentDeletePending: false,
        isCommentDeleteSuccess: false,
        commentDeleteError: null
    },
    event: {
        isPending: true,
        isError: false,
        cancelationModalStatus: false,
        cancelation: {},
        data: {
            dateFrom: null,
            dateTo: null,
            photoUrl: null,
        }
    },
    add_event: {
        isEventPending: false,
        isEventSuccess: false,
        eventError: null
    },
    events: {
        isPending: true,
        isError: false,
        data: {
            items: [],
            pageViewModel: {},
        },
        filter: eventHelper.getDefaultEventFilter(),
    },
    inventories: {
        isPending: true,
        listInventoriesErrorMessage: false,
        setItemErrorMessage: null,
        items: []
    },
    profile: {
        isPending: true,
        isError: false,
        data: null
    },
    events_for_profile: {
        isPending: true,
        isError: false,
        data: {
            items: [],
            pageViewModel: {},
        }
    },
    changePassword: {
        isPending: false,
        isError: false,
        data: []
    },
    recoverPassword: {
        isPending: false,
        isError: false,
        isSucces: null,
    },
    authenticate: {
        isPending: false,
        isSucces: false,
        isError: null,
        data: []
    },
    hubConnection: null,
    chat: {
        isPending: false,
        isSuccess: false,
        isError: null,
        data: {
            messages: [],
            users: [],
            id: null
        }
    },
    chats: {
        isPending: false,
        isSuccess: false,
        isError: null,
        data: []
    },
    alert: {
        variant: null,
        message: null,
        autoHideDuration: null,
        open: false
    },
    dialog: {
        title: null,
        message: null,
        open: false
    },
    contactUs: {
        isPending: false,
        isSuccess: false,
        isError: null
    },
    notification:
    {
        messages: [],
        seen_messages: [],
        events: []
    }
};

export default initialState;
