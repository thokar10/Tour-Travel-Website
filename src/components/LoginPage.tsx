import { Button, Form, Input } from "antd";
import { FaUser } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";

import axios from "axios";
import  {useState} from "react";


const LoginPage = () => {
  const [error, setError] = useState(''); 
  interface LoginFormValues {
    email: string;
    password: string;
  }
  
  const handleLogin = async( values:LoginFormValues ) => {
    const { email, password } = values;
    axios.post('http://127.0.0.1:8000/api/login', {
      email: email,
      password: password
    }).then((response) => {

      console.log(response)
      console.log(response.data);
      if(response.data.status === true) {
        alert('success');
        localStorage.setItem('token', response.data.access_token);
        // window.location.href = '/dashboard';
      } 
    }).catch((error) => { 
      setError(error?.response?.data?.message);
      console.log(error);
    }
    )

  };
  return (
    <>
      <div className="flex justify-center items-center  bg-gradient-to-r from-indigo-400 to-pink-500  w-[100vw] h-[100vh]">
        <div className="md:w-[25%] w-[50%] md:p-2 p-4 md:gap-4 gap-3  h-auto  shadow-gray-300 shadow-md rounded-2xl bg-[whitesmoke] font-[Montserrat] flex flex-col items-center">
          <p className="md:text-2xl text-xl font-bold text-gray-700 md:tracking-wide ">
            Login
          </p>
          <div className=" md:w-[95%] ">
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              style={{ width: "100%" }}
              initialValues={{ remember: true }}
              onFinish={handleLogin}
            >
              <Form.Item
                label="Email"
                name="email"
                rules={[
                  { required: true, message: "Please input your Email!" },
                ]}
              >
                <Input
                  placeholder="enter Email"
                  prefix={<FaUser className="text-gray-400 mr-2 text-[13px]" />}
                />
                
              </Form.Item>
              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password
                  placeholder="enter password"
                  prefix={
                    <RiLockPasswordFill className="text-gray-400 mr-2 text-[15px] " />
                  }
                />
              </Form.Item>
              {error && (
              <div className="flex justify-center">
              <p className="text-red-500">{error}</p>
              </div>
              )}             
              <p className="flex pb-3  justify-end  text-gray-600">
                forget password ?
              </p>
              <Form.Item wrapperCol={{ offset: 0, span: 24 }}>
                <Button
                  type="primary"
                  className="bg-gradient-to-r w-full from-indigo-400 to-pink-500"
                  htmlType="submit"
                  style={{ width: "100%" }}
                >
                  LOGIN
                </Button>
              </Form.Item>
            </Form>
            <div className="flex flex-col md:gap-4 items-center">
              <p className="md:text-sm font-extrabold ">OR</p>
              <p
                className="font-medium cursor-pointer md:hover:scale-125  hover:scale-110  hover:text-red-500"
                onClick={() => {
                  navigate("/register");
                }}
              >
                Sign Up !
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginPage;
