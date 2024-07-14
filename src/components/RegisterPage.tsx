import { Button, Form, Input, InputNumber } from "antd";

const RegisterPage = () => {
  const onFinish = (values: any) => {
    alert("Success:");
    console.log("form values is :", values);
  };
  return (
    <>
      <div className="flex justify-center items-center  bg-gradient-to-r from-indigo-400 to-pink-500  w-[100vw] h-[100vh]">
        <div className="md:w-[30%]  border-2 border-gray-300   w-[50%] md:p-2 p-4 md:gap-4 gap-4  h-auto md:h-[20%] shadow-gray-300 shadow-md rounded-2xl bg-[whitesmoke] font-[Montserrat] flex flex-col items-center">
          <p className="md:text-2xl text-xl font-bold text-gray-700 md:tracking-wide ">
            Register
          </p>
          <div>
            <Form
              layout="horizontal"
              labelCol={{ span: 10 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              autoComplete="off"
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please input your name!" }]}
                style={{ marginBottom: "8px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
                style={{ marginBottom: "8px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"
                rules={[{ required: true, message: "Please input  email!" }]}
                style={{ marginBottom: "8px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="phone_number"
                rules={[
                  {
                    required: true,
                    message: "Please input your phone number!",
                  },
                ]}
                style={{ marginBottom: "8px" }}
              >
                <InputNumber style={{ width: "100%" }} />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
                style={{ marginBottom: "8px" }}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="password_confirmation"
                rules={[
                  {
                    required: true,
                    message: "Please input your confirm password!",
                  },
                ]}
                style={{ marginBottom: "8px" }}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 0, span: 24 }} className="pt-2">
                <Button
                  type="primary"
                  className="bg-gradient-to-r w-full from-indigo-400 to-pink-500"
                  htmlType="submit"
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};
export default RegisterPage;
