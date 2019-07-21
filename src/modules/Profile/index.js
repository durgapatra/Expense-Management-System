import React from "react";
import ContainerLayout from "../../components/ContainerLayout";
import { Form, Input } from "antd";

class Profile extends React.Component {
  render() {
    return (
      <ContainerLayout>
        <Form>
          <Form.Item label="Email">
            <Input value="admin@admin.com" disabled />
          </Form.Item>
          <Form.Item label="Password">
            <Input value="admin@123" disabled />
          </Form.Item>
        </Form>
      </ContainerLayout>
    );
  }
}

export default Profile;
