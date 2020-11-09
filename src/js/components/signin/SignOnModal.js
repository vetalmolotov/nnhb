import React from "react";
import {
    Modal,
    Button,
    Form,
    Input,
    Checkbox,
    Row,
    Col,
    Divider,
    Typography,
    Select,
} from "antd";
import { FormInstance } from "antd/lib/form";
import { getCodeList } from "country-list";
import update from "immutability-helper";

import { ErrorMsg } from "./../../../common/js/components/Error";

class SignOnModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            countries: {
                currentIso: null,
                data: Object.entries(getCodeList()).sort((a, b) => {
                    if (a[0].toLowerCase() > b[0].toLowerCase()) {
                        return 1;
                    }
                    if (a[0].toLowerCase() < b[0].toLowerCase()) {
                        return -1;
                    }
                    return 0;
                }),
                matched: [],
            },
        };
        this.formRef = React.createRef(FormInstance);
    }

    onGenderChange = (e) => {};

    onCountryChange = (isoCode) => {
        this.setState((state) => {
            return update(state, {
                countries: { currentIso: { $set: isoCode } },
            });
        });
    };

    handleCountrySearch = (country) => {
        const matched = [];
        country = country.toLowerCase();

        this.state.countries.data.forEach((item) => {
            if (item[1].toLowerCase().indexOf(country) !== -1) {
                matched.push(item);
            }
        });

        if (matched.length) {
            this.setState((state) => {
                return update(state, {
                    countries: { matched: { $set: matched } },
                });
            });
        }
    };

    componentDidMount = () => {
        this.setFieldsValue();
    };

    componentDidUpdate = () => {
        this.setFieldsValue();
    };

    setFieldsValue = () => {
        if (this.props.csrf.val) {
            this.formRef.current.setFieldsValue(
                Object.assign(
                    {
                        _csrf: this.props.csrf.val,
                    },
                    process.env.REACT_APP_DEBUG
                        ? {
                              email: "jack@sparrow.com",
                              username: "jackass",
                              firstname: "jack",
                              lastname: "sparrow",
                              gender: "M",
                              country_iso: "ua",
                              org_name: "jack inc.",
                              password: 1,
                              password_confirmation: 1,
                          }
                        : {}
                )
            );
        }
    };

    render() {
        let countries = this.state.countries.data;

        if (
            this.state.countries.matched.length ||
            this.state.countries.currentIso
        ) {
            countries = this.state.countries.matched;
        }

        const countryList = countries.map((val) => {
            return <Select.Option key={val[0]}>{val[1]}</Select.Option>;
        });

        let errText = null;

        if (this.props.submit.err) {
            errText = <ErrorMsg />;
        }

        return (
            <>
                <Modal
                    title="Sign On"
                    visible={this.props.visible}
                    onCancel={this.props.handleCancel}
                    footer={[]}
                >
                    <Form
                        ref={this.formRef}
                        name="signin_form"
                        className="signin-form"
                        onFinish={this.props.onSignOnSubmit}
                    >
                        <Row>
                            <Col>
                                <Typography.Text strong>
                                    Personal Information
                                </Typography.Text>
                                <Form.Item
                                    name="firstname"
                                    label="First name"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your First Name!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="lastname"
                                    label="Last Name"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your Last Name!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
                                <Form.Item
                                    name="gender"
                                    label="Gender"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please select your Gender!",
                                        },
                                    ]}
                                >
                                    <Select onChange={this.onGenderChange}>
                                        <Select.Option value="F">
                                            Female
                                        </Select.Option>
                                        <Select.Option value="M">
                                            Male
                                        </Select.Option>
                                    </Select>
                                </Form.Item>
                            </Col>
                            <Col>
                                <Typography.Text strong>
                                    Account
                                </Typography.Text>
                                <Form.Item
                                    name="username"
                                    label="Username"
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your Username!",
                                        },
                                    ]}
                                >
                                    <Input />
                                </Form.Item>
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
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please input your Password!",
                                        },
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                                <Form.Item
                                    name="password_confirmation"
                                    label="Confirm Password"
                                    hasFeedback
                                    rules={[
                                        {
                                            required: true,
                                            message:
                                                "Please confirm your password!",
                                        },
                                        ({ getFieldValue }) => ({
                                            validator(rule, value) {
                                                if (
                                                    !value ||
                                                    getFieldValue(
                                                        "password"
                                                    ) === value
                                                ) {
                                                    return Promise.resolve();
                                                }
                                                return Promise.reject(
                                                    "The two passwords that you entered do not match!"
                                                );
                                            },
                                        }),
                                    ]}
                                >
                                    <Input.Password />
                                </Form.Item>
                            </Col>
                        </Row>
                        <Divider />
                        <Row>
                            <Col>
                                <Typography.Text strong>
                                    Your Organization
                                </Typography.Text>
                                <Form.Item
                                    name="org_name"
                                    label="Organization Name"
                                    rules={[]}
                                >
                                    <Input />
                                </Form.Item>
                            </Col>
                            <Col>
                                <Form.Item
                                    name="country_iso"
                                    label="Country"
                                    rules={[]}
                                    style={{ width: "200px" }}
                                >
                                    <Select
                                        size="medium"
                                        showSearch
                                        value={this.state.countries.currentIso}
                                        onChange={this.onCountryChange}
                                        onSearch={this.handleCountrySearch}
                                        defaultActiveFirstOption={false}
                                        filterOption={false}
                                        notFoundContent={null}
                                    >
                                        {countryList}
                                    </Select>
                                </Form.Item>
                            </Col>
                        </Row>
                        <Row>
                            By the registering on the platform you accept{" "}
                            <Button type="link">Terms of Use</Button> and{" "}
                            <Button type="link">Privacy Policy</Button>.
                        </Row>

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
                                Sign On
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal>
            </>
        );
    }
}

export default SignOnModal;
