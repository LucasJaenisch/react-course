import { z } from "zod";

const ExpenseList = () => {
  const schema = z.object({
    name: z
      .string()
      .min(3, { message: "Description name must be at least 3." }),
    price: z
      .number({ invalid_type_error: "Price field is required." })
      .min(18, { message: "Age must be at least 18." }),
    category: z.string(),
  });

  return (
    <form>
      <div className="mb-3">
        <label htmlFor="description" className="form-label">
          Description
        </label>
        <input id="description" type="text" className="form-control" />
        {<p className="text-danger"></p>}
      </div>
      <div className="mb-3">
        <label htmlFor="amount" className="form-label">
          Amount
        </label>
        <input id="amount" type="number" className="form-control" />
        {<p className="text-danger"></p>}
      </div>
      <div className="mb-3">
        <label htmlFor="pet-select">Category:</label>
        <select className="form-select">
          <option value="1">Groceries</option>
          <option value="2">Utilities</option>
          <option value="3">Entertainment</option>
        </select>
      </div>
      <button className="btn btn-primary" type="submit">
        Submit
      </button>
      <div className="mb-3">
        <label htmlFor="pet-select">Category:</label>
        <select className="form-select">
          <option value="1">All Categories</option>
          <option value="2">Groceries</option>
          <option value="3">Utilities</option>
          <option value="4">Entertainment</option>
        </select>
      </div>
      <div className="container text-center">
        <div className="row row-cols-4">
          <div className="col">Description</div>
          <div className="col">Amount</div>
          <div className="col">Category</div>
        </div>
        <div className="row row-cols-4">
          <div className="col">Milk</div>
          <div className="col">$5.00</div>
          <div className="col">Groceries</div>
          <div className="col">
            <button>Delete</button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default ExpenseList;
