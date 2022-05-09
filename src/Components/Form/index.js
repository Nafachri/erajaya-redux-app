import React from "react";
import { Form, Input, Button, Modal } from "antd";
import { useSelector, useDispatch } from "react-redux";

const FormComponent = () => {
  const [form] = Form.useForm();

  const dispatch = useDispatch();
  const usersAmount = useSelector((state) => state.employee.length);

  const onFinish = (values) => {
    if (values.Nama && values.TanggalLahir && values.Alamat && values.NoHP) {
      dispatch({
        type: "employeeAdded",
        payload: { No: usersAmount + 1, ...values },
      });
    }
    form.resetFields();
  };

  return (
    <div>
      <Form
        style={{ marginTop: "50px" }}
        layout="horizontal"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        size="medium"
        form={form}
        onFinish={onFinish}
      >
        <Form.Item
          label="Nama"
          name="Nama"
          rules={[{ required: true, message: "Mohon Masukan Nama Anda" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Tanggal Lahir"
          name="TanggalLahir"
          rules={[
            { required: true, message: "Mohon Masukan Tanggal Lahir Anda" },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Alamat"
          name="Alamat"
          rules={[{ required: true, message: "Mohon Masukan Alamat Anda" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Nomor Hp"
          name="NoHP"
          rules={[{ required: true, message: "Mohon Masukan Nomor HP Anda" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item wrapperCol={{ span: 14, offset: 4 }}>
          <Button type="primary" htmlType="submit">
            Tambah
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormComponent;
