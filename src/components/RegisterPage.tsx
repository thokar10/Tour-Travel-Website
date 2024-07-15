import { Button, Form, Input, InputNumber } from "antd";
import axios from "axios";
import { useState } from "react";

const RegisterPage = () => {
  const [error, setError] = useState(''); 
  interface RegisterFormValues {
    name: string;
    username: string;
    phone_number: string;
    email: string;
    password: string;
    password_confirmation: string;
  }
  
  const handleRegister = async( values:RegisterFormValues ) => {
    const { name,username, email, phone_number, password, password_confirmation } = values;
    axios.post(`${import.meta.env.VITE_API_URL}api/register`, {
      name: name,
      username: username,
      phone_number: phone_number,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }).then((response) => {
 
      console.log(response)
      console.log(response.data);
      if(response.data.status === true) {
        setError('');
        alert('success');
        window.location.href = '/login';
      } 
    }).catch((error) => { 
      setError(error?.response?.data?.message);
      console.log(error.name);
      console.log(error);
    }
    )
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
              onFinish={handleRegister}
            >
              <Form.Item
                label="Name"
                name="name"
                rules={[{ required: true, message: "Please enter your name" }]}
                style={{ marginBottom: "8px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                  { min: 3, message: "Username must be at least 3 characters" }
                ]}
                style={{ marginBottom: "8px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Email"
                name="email"

                rules={[
                  { required: true, message: "Please input your email!" },
                  { type: 'email', message: "The input is not a valid email!" }
                ]}
                style={{ marginBottom: "8px" }}
              >
                <Input />
              </Form.Item>
              <Form.Item
                label="Phone Number"
                name="phone_number"
                rules={[
                  { required: true, message: "Please input your phone number!" },
                  { pattern: /^[0-9]{10,15}$/, message: "Phone number must be between 10 and 15 digits" }
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
                  { min: 6, message: "Password must be at least 6 characters" },
                  { pattern: /(?=.*[!@#$%^&*])/, message: "Password must contain at least one symbol" },
                  { pattern: /(?=.*[0-9])/, message: "Password must contain at least one number" }
                ]}
                style={{ marginBottom: "8px" }}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item
                label="Confirm Password"
                name="password_confirmation"
                rules={[
                  { required: true, message: "Please confirm your password!" },
                  ({ getFieldValue }) => ({
                    validator(_, value) {
                      if (!value || getFieldValue('password') === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(new Error('The two passwords that you entered do not match!'));
                    },
                  })
                ]}
                style={{ marginBottom: "8px" }}
              >
                <Input.Password />
              </Form.Item>
              {error && (
                <div className="flex justify-center">
                  <p className="text-red-500">{error}</p>
                </div>
              )}
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
