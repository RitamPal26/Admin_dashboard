import { AuthPage } from "@refinedev/antd";

export const Register = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  return <AuthPage type="register" />;
};
