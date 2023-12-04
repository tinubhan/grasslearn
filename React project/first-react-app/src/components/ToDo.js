import { useState } from "react";

const ToDo = () => {
  const [mytask, setMyTask] = useState(["Got to 1", "Go to 2", "Go to 3"]);
  const handleAddTask = () => {
    let arr = [...mytask, item];
    setMyTask(arr);
  };

  let [item, setmyitem] = useState("Tinu");
  function handleChange(e) {
    setmyitem(e.target.value);
  }

  return (
    <>
      <h1>My To do app</h1>
      <input
        type="text"
        placeholder="Enter your text here"
        value={item}
        onChange={handleChange}
      />
      <button onClick={handleAddTask}>Add</button>
      <ul>
        {mytask.map((eachVal) => (
          <li>{eachVal}</li>
        ))}
      </ul>
    </>
  );
};
export default ToDo;
