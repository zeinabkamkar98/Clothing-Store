import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {
    MemoryRouter,
    matchPath,
    useLocation,
} from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

import { useSelector } from 'react-redux';
import { selectCurrentUser } from '../redux/user/user.selector';

function Router(props) {
    const { children } = props;
    if (typeof window === 'undefined') {
        return <StaticRouter location="/">{children}</StaticRouter>;
    }

    return (
        <MemoryRouter initialEntries={['/']} initialIndex={0}>
            {children}
        </MemoryRouter>
    );
}

Router.propTypes = {
    children: PropTypes.node,
};

function useRouteMatch(patterns) {
    const { pathname } = useLocation();

    for (let i = 0; i < patterns.length; i += 1) {
        const pattern = patterns[i];
        const possibleMatch = matchPath(pattern, pathname);
        if (possibleMatch !== null) {
            return possibleMatch;
        }
    }

    return null;
}


export default function LinkTabs(props) {

    const routeMatch = useRouteMatch(["/", "/shop", "/sign-in"]);
    const currentTab = routeMatch?.pattern?.path;

    const currentUser = useSelector(selectCurrentUser);

    return (

        <Tabs value={currentTab} orientation={props.type}>
            <Tab to="/"
                label="HOME"
                value="/"
            ></Tab >
            <Tab to="/shop" label="SHOP" value="/shop"></Tab >
            {currentUser
                ? null
                : <Tab to="/sign-in" label="SIGN IN" value="/sign-in" ></Tab >
            }
        </Tabs>
    );
}

