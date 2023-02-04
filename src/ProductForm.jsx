import * as yup from "yup";
import Form from "./components/Form";
import InputField from "./components/InputField";
import "./styles.css";

function ProductForm() {
  return (
    <section>
      <Form
        onSubmit={(data) => {
          alert(JSON.stringify(data));
          console.log("Product FormData", data);
        }}
      >
        <InputField
          name="productTitle"
          placeholder="Title"
          validationRule={yup.string().required()}
        />
        <InputField
          name="categoryId"
          placeholder="Category"
          validationRule={yup.number().positive().integer().required()}
        />
      </Form>
    </section>
  );
}

export default ProductForm;
