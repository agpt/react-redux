
import * as Auth from './actions/auth';
import * as App from './actions/app';

import Store from './store';

const _Store = Store.initializeStore(
  {app: {}}
);

_Store.subscribe(function () {
  console.log(_Store.getState());
});

_Store.dispatch(App.appLoaded({status: 'running'}));

_Store.dispatch(Auth.loginStateChange("Aman", undefined));
_Store.dispatch(Auth.loginStateChange("Aman", "123445"));
// _Store.dispatch(Auth.login());
// _Store.dispatch(Auth.logout());
// _Store.dispatch(Auth.loginFailure("Failed to login"));
