import React from "react";
import { connect } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { Modal, Button, Form, Input, Checkbox } from "antd";
import update from "immutability-helper";

import {
    toggleSignin,
    csrfThunk,
    onSigninFetchThunk,
    onSignonFetchThunk,
} from "./signinSlice";
import SignOnModal from "./SignOnModal";
import PassForgotModal from "./PassForgotModal";
import SignInModal from "./SignInModal";

import "../../../css/Signin.scss";

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            signin: {
                modal: {
                    visible: false,
                    handleCancel: this.handleCancel,
                    onSignInSubmit: this.onSignInSubmit,
                    showPassForgotModal: this.showPassForgotModal,
                    showSignOnModal: this.showSignOnModal,
                },
            },
            signon: {
                modal: {
                    visible: false,
                    handleCancel: this.handleCancel,
                    onSignOnSubmit: this.onSignOnSubmit,
                },
            },
            passForgot: {
                modal: {
                    visible: false,
                    handleCancel: this.handleCancel,
                    onPassForgotSubmit: this.onPassForgotSubmit,
                },
            },
        };
    }

    fetchCsrf = () => {
        if (this.props.signin.csrf.status !== "pending") {
            this.props.dispatchCsrf();
        }
    };

    handleCancel = (e) => {
        this.setState((state) => {
            return update(state, {
                signin: { modal: { visible: { $set: false } } },
                signon: { modal: { visible: { $set: false } } },
                passForgot: { modal: { visible: { $set: false } } },
            });
        });
    };

    showSignInModal = (e) => {
        this.fetchCsrf();
        this.setState((state) => {
            return update(state, {
                signin: { modal: { visible: { $set: true } } },
                signon: { modal: { visible: { $set: false } } },
                passForgot: { modal: { visible: { $set: false } } },
            });
        });
    };

    onSignInSubmit = (formData) => {
        this.props.dispatchSignin(formData);
    };

    onSignOnSubmit = (formData) => {
        this.props.dispatchSignon(formData);
    };

    showSignOnModal = (e) => {
        this.fetchCsrf();
        this.setState((state) => {
            return update(state, {
                signin: { modal: { visible: { $set: false } } },
                signon: { modal: { visible: { $set: true } } },
                passForgot: { modal: { visible: { $set: false } } },
            });
        });
    };

    showPassForgotModal = (e) => {
        this.fetchCsrf();
        this.setState((state) => {
            return update(state, {
                signin: { modal: { visible: { $set: false } } },
                signon: { modal: { visible: { $set: false } } },
                passForgot: { modal: { visible: { $set: true } } },
            });
        });
    };

    onPassForgotSubmit = (e) => {
        console.log("pass forgot submit", e);
    };

    render() {
        const modal = this.renderModal();
        return (
            <>
                <Button type="link" onClick={this.showSignInModal}>
                    Sign In
                </Button>
                {modal}
            </>
        );
    }

    renderModal = () => {
        const defaultModal = (
            <SignInModal
                {...Object.assign(this.props.signin, this.state.signin.modal)}
            />
        );

        if (this.state.signin.modal.visible) {
            return defaultModal;
        } else if (this.state.signon.modal.visible) {
            return (
                <SignOnModal
                    {...Object.assign(
                        this.props.signin,
                        this.state.signon.modal
                    )}
                />
            );
        } else if (this.state.passForgot.modal.visible) {
            return (
                <PassForgotModal
                    {...Object.assign(
                        this.props.signin,
                        this.state.passForgot.modal
                    )}
                />
            );
        }

        return defaultModal;
    };
}

const mapStateToProps = (state) => {
    return {
        signin: {
            ...state.signin,
            submit: {
                button: {
                    loading: state.signin.submit.button.status === "pending",
                    disabled: state.signin.submit.button.status === "pending",
                },
                err: state.signin.submit.err,
            },
        },
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        dispatchSignon: (data) => dispatch(onSignonFetchThunk(data)),
        dispatchSignin: (data) => dispatch(onSigninFetchThunk(data)),
        dispatchCsrf: () => dispatch(csrfThunk()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Signin);
