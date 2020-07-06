import * as type from './types';
import actions from './actions';

const state = {
    userMe: {
        id: 0
    },
    posts: [],
    post: {}
};

const mutations = {
    [type.GET_USER_ME](state, payload) {
        state.userMe = payload;
    },
    [type.GET_POSTS](state, payload) {
        state.posts = payload;
    },
    [type.ADD_POST](state, payload) {
        state.post = payload;
    },
    [type.GET_POST](state, payload) {
        state.post = payload;
    },
    [type.SAVE_REDACTED_POST](state, payload) {
        state.post = payload;
    },
    [type.DELETE_POST](state, payload) {
        state.posts.splice(payload, 1) ;
    },
    [type.INCREASE_CLAPS](state, payload) {
        state.posts.forEach((item) => {
            if (item.id === payload.id) {
                item.claps = payload.claps;
            }
        });
    },
};

const getters = {
    userMe: state => {
        return state.userMe;
    },
    posts: state => {
        return state.posts;
    },
    post: state => {
        return state.post;
    },
};

export default {
    state,
    mutations,
    actions,
    getters,
};
