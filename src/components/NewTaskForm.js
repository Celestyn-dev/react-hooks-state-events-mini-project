import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("Code");

  function handleSubmit(e) {
    e.preventDefault();
    onTaskFormSubmit({ text, category });
    setText("");
    setCategory("Code");
  }

  const filteredCategories = categories.filter((cat) => cat !== "All");

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label htmlFor="details">Details</label>
      <input
        id="details"
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <label htmlFor="category">Category</label>
      <select
        id="category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {filteredCategories.map((cat) => (
          <option key={cat}>{cat}</option>
        ))}
      </select>

      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
