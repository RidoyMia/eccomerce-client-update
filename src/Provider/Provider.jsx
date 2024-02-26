import UserStore from '@/app/components/redux/Store/Store';
import React from 'react';
import { Provider } from "react-redux";
function Providers({children}) {
    return (
        <Provider store={UserStore}>
            {children}
        </Provider>
    );
}

export default Providers;