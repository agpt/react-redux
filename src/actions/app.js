export const appLoaded = function(action) {
  return {
      type: 'APP_LOADED',
      status: action.status
  }
};
