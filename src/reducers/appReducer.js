export const app = function app(state = {status: ''}, action) {
  switch (action.type) {
    case 'APP_LOADED':
      return {status: action.status};
    default:
      return state;
  }
};
