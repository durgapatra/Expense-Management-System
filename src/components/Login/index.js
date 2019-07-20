import React from "react";
import "./index.scss";
import { Form, Icon, Input, Button, Card, message } from "antd";
import { withRouter } from "react-router";
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
  handleSubmit = (e, form) => {
    e.preventDefault();
    form.validateFields((err, values) => {
      if (!err) {
        if (
          values.userName === "admin@admin.com" &&
          values.password === "admin@123"
        ) {
          localStorage.setItem("sessionToken", "adkfmjnjdnfjaksdmk");
          this.props.history.push("/home");
        } else {
          message.error("Invalid Username or Password!");
        }
      }
    });
  };

  render() {
    const props = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div>
        <div className="login-page">
          <Card>
            <Form
              className="login-form"
              onSubmit={e => this.handleSubmit(e, props.form)}
            >
              <FormItem>
                <h2>Login</h2>
              </FormItem>
              <FormItem>
                {getFieldDecorator("userName", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
                )}
              </FormItem>
              <FormItem>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </FormItem>
              <FormItem>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                  style={{ width: "100%" }}
                >
                  Log in
                </Button>
              </FormItem>
            </Form>
          </Card>
        </div>
      </div>
    );
  }
}

export default Form.create()(withRouter(NormalLoginForm));
