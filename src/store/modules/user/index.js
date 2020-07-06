import * as type from './types';
import actions from './actions';

const state = {
    userMe: {
        id: 0
    },
    users: {

    }
};

const mutations = {
    [type.GET_USER_ME](state, payload) {
        state.userMe = payload;
    },
    [type.GET_USERS](state, payload) {
        state.users = payload;
    },
};

const getters = {
    userMe: state => {
        return state.userMe;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
