import React from "react";
import { Modal, Button, Form, Input, Checkbox } from "antd";

class PassForgotModal extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const initialFormVals = { remember: true };
        return (
            <>
                <Modal
                    title="Forgot Password"
                    visible={this.props.visible}
                    onCancel={this.props.handleCancel}
                    footer={[]}
                >
                    <Form
                        name="signin_form"
                        className="signin-form"
                        initialValues={initialFormVals}
                        onFinish={this.props.onPassForgotSubmit}
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

                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="login-form-button"
                            >
                                Sign In
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    }
}

export default PassForgotModal;
