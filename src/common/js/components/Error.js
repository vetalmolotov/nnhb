import { Typography } from "antd";

export function ErrorMsg(props) {
    if (Object.keys(props || {}).length < 1) {
        props = { strong: true, type: "danger" };
    }

    let msg = "Error happend :( please try again";

    if (props.msg) {
        msg = props.msg;
        delete props.msg;
    }

    return <Typography.Text {...props}> {msg} </Typography.Text>;
}
