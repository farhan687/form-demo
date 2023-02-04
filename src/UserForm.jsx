import * as yup from "yup";
import Form from "./components/Form";
import InputField from "./components/InputField";
import "./styles.css";

function UserForm() {
  return (
    <section>
      <Form
        onSubmit={(data) => {
          alert(JSON.stringify(data));
          console.log("User FormData", data);
        }}
      >
        <InputField
          name="firstName"
          placeholder="First Name"
          validationRule={yup.string().required()}
        />
        <InputField
          name="lastName"
          placeholder="Last Name"
          validationRule={yup.string().required()}
        />
        <InputField
          name="email"
          placeholder="Email"
          validationRule={yup.string().email().required()}
        />
        <InputField
          name="age"
          placeholder="Age"
          validationRule={yup.number().positive().integer().required()}
        />
      </Form>
    </section>
  );
}

export default UserForm;
