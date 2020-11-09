import React from "react";
import { Modal, Button, Form, Input, Checkbox, Typography } from "antd";
import { FormInstance } from "antd/lib/form";

import { ErrorMsg } from "./../../../common/js/components/Error";

class SignInModal extends React.Component {
    constructor(props) {
        super(props);
        this.formRef = React.createRef(FormInstance);
    }

    componentDidMount = () => {
        this.setFieldsValue();
    };

    componentDidUpdate = () => {
        this.setFieldsValue();
    };

    setFieldsValue = () => {
        if (this.props.csrf.val) {
            this.formRef.current.setFieldsValue({
                _csrf: this.props.csrf.val,
            });
        }
    };

    render() {
        const initialFormVals = {
            remember: true,
        };

        let errText = null;

        if (this.props.submit.err) {
            errText = <ErrorMsg />;
        }

        return (
            <>
                <Modal
                    title="Sign In"
                    visible={this.props.visible}
                    onCancel={this.props.handleCancel}
                    footer={[]}
                >
                    <Form
                        ref={this.formRef}
                        name="signin_form"
                        className="signin-form"
                        initialValues={initialFormVals}
                        onFinish={this.props.onSignInSubmit}
                    >
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Email!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            label="Password"
                            rules={[
                                {
                                    required: true,
                                    message: "Please input your Password!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Form.Item
                                name="remember"
                                valuePropName="checked"
                                noStyle
                            >
                                <Checkbox>Remember me</Checkbox>
                            </Form.Item>

                            <Button
                                className="login-form-forgot"
                                type="link"
                                onClick={this.props.showPassForgotModal}
                            >
                                Forgot password?
                            </Button>
                        </Form.Item>

                        <Form.Item hidden name="_csrf">
                            <Input />
                        </Form.Item>

                        <Form.Item>
                            {errText}
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                                {...this.props.submit.button}
                            >
                                Sign In
                            </Button>
                            Don't have an Account?
                            <Button
                                className="login-form-create-new-account"
                                type="link"
                                onClick={this.props.showSignOnModal}
                            >
                                Create New Account
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    }
}

export default SignInModal;
