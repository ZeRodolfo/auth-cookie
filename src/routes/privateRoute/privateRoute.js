import React from "react";
import { connect } from "react-redux";
import { Route } from "react-router-dom";

const PrivateRoute = ({
    permission,
    component: Component,
    types = [],
    path,
    history,
    token,
    ...rest
}) => {
    const privateVerify = () => {
        if (token === "") {
            // return <Redirect to="/" />;
        } else {
            return (
                <Route
                    path={path}
                    {...rest}
                    render={() => <Component history={history} />}
                />
            );
        }
    };

    return privateVerify();
};

const mapStateToProps = state => ({
    permission: state.authentication.permissions,
    token: state.authentication.token,
});

export default connect(mapStateToProps)(PrivateRoute);
