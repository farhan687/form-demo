import ProductForm from "./ProductForm";
import UserForm from "./UserForm";
import "./styles.css";

function App() {
  return (
    <div>
      <section>
        <h1>User Form</h1>
        <UserForm />
      </section>
      <section>
        <h1>Product Form</h1>
        <ProductForm />
      </section>
    </div>
  );
}

export default App;
