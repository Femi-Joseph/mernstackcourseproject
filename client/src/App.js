import { useState } from 'react';
function App() {
  const [form, setForm] = useState({
    amount: 0,
    description: '',
    date: '',
  });
  function handleChange(e) {
    console.log(e.target.value);
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  async function handleSubmit(e) {
    e.preventDefault();
    console.log(form);
    const res = await fetch('http://localhost:4000/transaction', {
      method: 'POST',
      body: form,
    });
    console.log(res);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter Transcaction Amount"
          name="amount"
          value={form.amount}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="text"
          placeholder="Enter Transaction Description"
          name="description"
          value={form.description}
          onChange={(e) => handleChange(e)}
        ></input>
        <input
          type="date"
          name="date"
          onChange={(e) => handleChange(e)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
