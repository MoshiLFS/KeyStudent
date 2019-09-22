
export default {

  namespace: 'example',

  state: {


  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line

      yield put({ type: 'save' ,});
      // yield put({ type: 'isBar' ,});
    },

    *isBar({ payload }, { call, put }) {
      yield put({ type: 'isBar' ,});
    }
  },

  reducers: {
    save(state, action) {
      
      return { ...state, ...action.payload };
    },
    isBar(state, action){
      console.log(state,'state');
      return {...state}
    }
  },

};
