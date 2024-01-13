import Formulario from "@/components/RegisterForm/Form";

export default function Register() {
  return (
    <div className="h-full flex justify-center items-center form-cover">
      <div className="form-cover__modify">
        {/* <Form title='Register'/> */}
        <Formulario title="Register"/>
      </div>
    </div>
  );
}
