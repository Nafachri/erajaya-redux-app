import React, { useEffect, useState } from "react";
import { Button, Table, Modal, Form, Input } from "antd";
import FormComponent from "../../Components/Form";
import { useSelector, useDispatch } from "react-redux";

const EmployeePage = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [rowSelectionData, setRowSelectionData] = useState({});

  const employeeList = useSelector((store) => store.employee);
  const dispatch = useDispatch();

  const handleHapus = (record) => {
    dispatch({ type: "employeeDelete", payload: record.No });
  };

  const showModalEdit = (record) => {
    setRowSelectionData(record);
    setVisible(true);
  };

  const onOkModalEdit = () => {
    setVisible(false);
  };

  const onCancelModalEdit = () => {
    setVisible(false);
  };

  const tableColumns = [
    {
      title: "No",
      dataIndex: "No",
      key: "No",
    },
    {
      title: "Nama",
      dataIndex: "Nama",
      key: "Nama",
    },
    {
      title: "Tanggal Lahir",
      dataIndex: "TanggalLahir",
      key: "TanggalLahir",
    },
    {
      title: "Alamat",
      dataIndex: "Alamat",
      key: "Alamat",
    },
    {
      title: "Nomor HP",
      dataIndex: "NoHP",
      key: "NoHP",
    },
    {
      title: "",
      dataIndex: "Update",
      key: "Update",
      render: (_, record, __) => (
        <Button onClick={() => showModalEdit(record)}>Update</Button>
      ),
    },
    {
      title: "",
      dataIndex: "Hapus",
      key: "Hapus",
      render: (_, record, __) => (
        <Button onClick={() => handleHapus(record)}>Hapus</Button>
      ),
    },
  ];

  const onFinishEdit = (values) => {
    if (values.Nama && values.TanggalLahir && values.Alamat && values.NoHP) {
      dispatch({
        type: "employeeEdit",
        payload: values,
      });
      form.resetFields();
    }
  };

  const onClickEdit = () => {
    setRowSelectionData({});
    setVisible(false);
  };

  return (
    <div>
      <FormComponent />
      <Table
        tableLayout="auto"
        dataSource={employeeList}
        columns={tableColumns}
      />
      <Modal
        visible={visible}
        onOk={onOkModalEdit}
        onCancel={onCancelModalEdit}
      >
        <Form
          style={{ marginTop: "50px" }}
          layout="horizontal"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 14 }}
          size="medium"
          form={form}
          onFinish={onFinishEdit}
          initialValues={rowSelectionData}
        >
          <Form.Item label="No" name="No">
            <Input disabled={true} />
          </Form.Item>
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
            <Input required />
          </Form.Item>
          <Form.Item
            label="Alamat"
            name="Alamat"
            rules={[{ required: true, message: "Mohon Masukan Alamat Anda" }]}
          >
            <Input required />
          </Form.Item>
          <Form.Item
            label="Nomor Hp"
            name="NoHP"
            rules={[{ required: true, message: "Mohon Masukan Nomor HP Anda" }]}
          >
            <Input required />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 14, offset: 6 }}>
            <Button
              type="primary"
              htmlType="submit"
              value="Submit"
              onClick={() => onClickEdit()}
            >
              Edit
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default EmployeePage;
