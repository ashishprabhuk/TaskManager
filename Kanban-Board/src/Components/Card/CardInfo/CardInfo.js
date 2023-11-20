// import React, { useEffect, useState } from "react";
// import {
//   Calendar,
//   CheckSquare,
//   List,
//   Tag,
//   Trash,
//   Type,
//   X,
// } from "react-feather";

// import Modal from "../../Modal/Modal";
// import Editable from "../../Editabled/Editable";

// import "./CardInfo.css";

// function CardInfo(props) {
//   const colors = [
//     "#a8193d",
//     "#4fcc25",
//     "#1ebffa",
//     "#8da377",
//     "#9975bd",
//     "#cf61a1",
//     "#240959",
//   ];

//   const [selectedColor, setSelectedColor] = useState();
//   const [values, setValues] = useState({
//     ...props.card,
//   });

//   const updateTitle = (value) => {
//     setValues({ ...values, title: value });
//   };

//   const updateDesc = (value) => {
//     setValues({ ...values, desc: value });
//   };

//   const addLabel = (label) => {
//     const index = values.labels.findIndex((item) => item.text === label.text);
//     if (index > -1) return;

//     setSelectedColor("");
//     setValues({
//       ...values,
//       labels: [...values.labels, label],
//     });
//   };

//   const removeLabel = (label) => {
//     const tempLabels = values.labels.filter((item) => item.text !== label.text);

//     setValues({
//       ...values,
//       labels: tempLabels,
//     });
//   };

//   const addTask = (value) => {
//     const task = {
//       id: Date.now() + Math.random() * 2,
//       completed: false,
//       text: value,
//     };
//     setValues({
//       ...values,
//       tasks: [...values.tasks, task],
//     });
//   };

//   const removeTask = (id) => {
//     const tasks = [...values.tasks];

//     const tempTasks = tasks.filter((item) => item.id !== id);
//     setValues({
//       ...values,
//       tasks: tempTasks,
//     });
//   };

//   const updateTask = (id, value) => {
//     const tasks = [...values.tasks];

//     const index = tasks.findIndex((item) => item.id === id);
//     if (index < 0) return;

//     tasks[index].completed = value;

//     setValues({
//       ...values,
//       tasks,
//     });
//   };

//   const calculatePercent = () => {
//     if (!values.tasks?.length) return 0;
//     const completed = values.tasks?.filter((item) => item.completed)?.length;
//     return (completed / values.tasks?.length) * 100;
//   };

//   const updateDate = (date) => {
//     if (!date) return;

//     setValues({
//       ...values,
//       date,
//     });
//   };

//   useEffect(() => {
//     if (props.updateCard) props.updateCard(props.boardId, values.id, values);
//   }, [values]);

//   return (
//     <Modal onClose={props.onClose}>
//       <div className="cardinfo">
//         <div className="cardinfo_box">
//           <div className="cardinfo_box_title">
//             <Type />
//             <p>Title</p>
//           </div>
//           <Editable
//             defaultValue={values.title}
//             text={values.title}
//             placeholder="Enter Title"
//             onSubmit={updateTitle}
//           />
//         </div>

//         <div className="cardinfo_box">
//           <div className="cardinfo_box_title">
//             <List />
//             <p>Description</p>
//           </div>
//           <Editable
//             defaultValue={values.desc}
//             text={values.desc || "Add a Description"}
//             placeholder="Enter description"
//             onSubmit={updateDesc}
//           />
//         </div>

//         <div className="cardinfo_box">
//           <div className="cardinfo_box_title">
//             <Calendar />
//             <p>Date</p>
//           </div>
//           <input
//             type="date"
//             defaultValue={values.date}
//             min={new Date().toISOString().substr(0, 10)}
//             onChange={(event) => updateDate(event.target.value)}
//           />
//         </div>

//         <div className="cardinfo_box">
//           <div className="cardinfo_box_title">
//             <Tag />
//             <p>Labels</p>
//           </div>
//           <div className="cardinfo_box_labels">
//             {values.labels?.map((item, index) => (
//               <label
//                 key={index}
//                 style={{ backgroundColor: item.color, color: "#fff" }}
//               >
//                 {item.text}
//                 <X onClick={() => removeLabel(item)} />
//               </label>
//             ))}
//           </div>
//           <ul>
//             {colors.map((item, index) => (
//               <li
//                 key={index + item}
//                 style={{ backgroundColor: item }}
//                 className={selectedColor === item ? "li_active" : ""}
//                 onClick={() => setSelectedColor(item)}
//               />
//             ))}
//           </ul>
//           <Editable
//             text="Add Label"
//             placeholder="Enter label text"
//             onSubmit={(value) =>
//               addLabel({ color: selectedColor, text: value })
//             }
//           />
//         </div>

//         <div className="cardinfo_box">
//           <div className="cardinfo_box_title">
//             <CheckSquare />
//             <p>Tasks</p>
//           </div>
//           <div className="cardinfo_box_progress-bar">
//             <div
//               className="cardinfo_box_progress"
//               style={{
//                 width: `${calculatePercent()}%`,
//                 backgroundColor: calculatePercent() === 100 ? "limegreen" : "",
//               }}
//             />
//           </div>
//           <div className="cardinfo_box_task_list">
//             {values.tasks?.map((item) => (
//               <div key={item.id} className="cardinfo_box_task_checkbox">
//                 <input
//                   type="checkbox"
//                   defaultChecked={item.completed}
//                   onChange={(event) =>
//                     updateTask(item.id, event.target.checked)
//                   }
//                 />
//                 <p className={item.completed ? "completed" : ""}>{item.text}</p>
//                 <Trash onClick={() => removeTask(item.id)} />
//               </div>
//             ))}
//           </div>
//           <Editable
//             text={"Add a Task"}
//             placeholder="Enter task"
//             onSubmit={addTask}
//           />
//         </div>
//       </div>
//     </Modal>
//   );
// }

// export default CardInfo;

































// import React, { useEffect, useState } from "react";
// import { Calendar, CheckSquare, List, Tag, Trash, Type, X, Edit } from "react-feather";

// import Modal from "../../Modal/Modal";
// import Editable from "../../Editabled/Editable";

// import "./CardInfo.css";

// function CardInfo(props) {
//   const colors = [
//     "#ff003c",
//     "#4fcc25",
//     "#1ebffa",
//     "#ffc800",
//     "#cf61a1",
//     "#240959",
//   ];

//   const [selectedColor, setSelectedColor] = useState();
//   const [values, setValues] = useState({
//     ...props.card,
//   });

//   const [newTaskText, setNewTaskText] = useState("");
//   const [editTaskId, setEditTaskId] = useState(null);

//   const updateTitle = (value) => {
//     setValues({ ...values, title: value });
//   };

//   const updateDesc = (value) => {
//     setValues({ ...values, desc: value });
//   };

//   const addLabel = (label) => {
//     const index = values.labels.findIndex((item) => item.text === label.text);
//     if (index > -1) return;

//     setSelectedColor("");
//     setValues({
//       ...values,
//       labels: [...values.labels, label],
//     });
//   };

//   const removeLabel = (label) => {
//     const tempLabels = values.labels.filter((item) => item.text !== label.text);

//     setValues({
//       ...values,
//       labels: tempLabels,
//     });
//   };

//   const addTask = () => {
//     if (!newTaskText) return;

//     if (editTaskId !== null) {
//       const updatedTasks = values.tasks.map((task) =>
//         task.id === editTaskId ? { ...task, text: newTaskText } : task
//       );

//       setValues({
//         ...values,
//         tasks: updatedTasks,
//       });

//       setEditTaskId(null);
//     } else {
//       const task = {
//         id: Date.now() + Math.random() * 2,
//         completed: false,
//         text: newTaskText,
//       };

//       setValues({
//         ...values,
//         tasks: [...values.tasks, task],
//       });
//     }

//     setNewTaskText("");
//   };

//   const removeTask = (id) => {
//     const tasks = [...values.tasks];

//     const tempTasks = tasks.filter((item) => item.id !== id);
//     setValues({
//       ...values,
//       tasks: tempTasks,
//     });
//   };

//   const updateTask = (id, value) => {
//     const tasks = [...values.tasks];

//     const index = tasks.findIndex((item) => item.id === id);
//     if (index < 0) return;

//     tasks[index].completed = value;

//     setValues({
//       ...values,
//       tasks,
//     });
//   };

//   const calculatePercent = () => {
//     if (!values.tasks?.length) return 0;
//     const completed = values.tasks?.filter((item) => item.completed)?.length;
//     return (completed / values.tasks?.length) * 100;
//   };

//   const updateDate = (date) => {
//     if (!date) return;

//     setValues({
//       ...values,
//       date,
//     });
//   };

//   const startEditTask = (taskId) => {
//     const taskToEdit = values.tasks.find((task) => task.id === taskId);

//     if (taskToEdit) {
//       setEditTaskId(taskId);
//       setNewTaskText(taskToEdit.text);
//     }
//   };

//   useEffect(() => {
//     if (props.updateCard) props.updateCard(props.boardId, values.id, values);
//   }, [values]);

//   useEffect(() => {
//     const storedValues = JSON.parse(localStorage.getItem("Details"));
//     if (storedValues) {
//       setValues(storedValues);
//     }
//   }, []);

//   // Update localStorage whenever the values state changes
//   useEffect(() => {
//     localStorage.setItem("Details", JSON.stringify(values));
//   }, [values]);

//   return (
//     <Modal onClose={props.onClose}>
//       <div className="cardinfo">
//         <div className="cardinfo_box">
//           <div className="cardinfo_box_title">
//             {/* <Type /> */}
//             <p>Title</p>
//           </div>
//           <Editable
//             defaultValue={values.title}
//             text={values.title}
//             placeholder="Enter Title"
//             onSubmit={updateTitle}
//           />
//         </div>

//         <div className="cardinfo_box">
//           <div className="cardinfo_box_title">
//             {/* <List /> */}
//             <p>Description</p>
//           </div>
//           <Editable
//             defaultValue={values.desc}
//             text={values.desc || "Add a Description"}
//             placeholder="Enter description"
//             onSubmit={updateDesc}
//           />
//         </div>

//         <div className="cardinfo_box">
//           <div className="cardinfo_box_title">
//             {/* <Calendar /> */}
//             <p>Date</p>
//           </div>
//           <input
//             type="date"
//             defaultValue={values.date}
//             min={new Date().toISOString().substr(0, 10)}
//             onChange={(event) => updateDate(event.target.value)}
//           />
//         </div>

//         <div className="cardinfo_box">
//           <div className="cardinfo_box_title">
//             {/* <Tag /> */}
//             <p>Labels</p>
//           </div>
//           <div className="cardinfo_box_labels">
//             {values.labels?.map((item, index) => (
//               <label
//                 key={index}
//                 style={{ backgroundColor: item.color, color: "#fff" }}
//               >
//                 {item.text}
//                 <X onClick={() => removeLabel(item)} />
//               </label>
//             ))}
//           </div>
//           <ul>
//             {colors.map((item, index) => (
//               <li
//                 key={index + item}
//                 style={{ backgroundColor: item }}
//                 className={selectedColor === item ? "li_active" : ""}
//                 onClick={() => setSelectedColor(item)}
//               />
//             ))}
//           </ul>
//           <Editable
//             text="Add Label"
//             placeholder="Enter label text"
//             onSubmit={(value) =>
//               addLabel({ color: selectedColor, text: value })
//             }
//           />
//         </div>

//         <div className="cardinfo_box">
//           <div className="cardinfo_box_title">
//             {/* <CheckSquare /> */}
//             <p>Tasks</p>
//           </div>
//           <div className="cardinfo_box_progress-bar">
//             <div
//               className="cardinfo_box_progress"
//               style={{
//                 width: `${calculatePercent()}%`,
//                 backgroundColor:
//                   calculatePercent() === 100 ? "limegreen" : "",
//               }}
//             />
//           </div>
//           <div className="cardinfo_box_task_list">
//             {values.tasks?.map((item) => (
//               <div key={item.id} className="cardinfo_box_task_checkbox">
//                 <input
//                   type="checkbox"
//                   defaultChecked={item.completed}
//                   onChange={(event) =>
//                     updateTask(item.id, event.target.checked)
//                   }
//                 />
//                 {editTaskId === item.id ? (
//                   <div className="edit-task">
//                     <input
//                       type="text"
//                       value={newTaskText}
//                       onChange={(e) => setNewTaskText(e.target.value)}
//                     />
//                     <button onClick={addTask}>Save</button>
//                   </div>
//                 ) : (
//                   <p className={item.completed ? "completed" : ""}>
//                     {item.text}
//                   </p>
//                 )}
//                 <div className="task-actions">
//                   <Edit onClick={() => startEditTask(item.id)}/>
//                   <Trash onClick={() => removeTask(item.id)} />
//                 </div>
//               </div>
//             ))}
//           </div>
//           <div className="cardinfo_box_task_input">
//             <input
//               type="text"
//               placeholder="Enter task"
//               value={newTaskText}
//               onChange={(e) => setNewTaskText(e.target.value)}
//               onKeyPress={(e) => {
//                 if (e.key === "Enter") {
//                   addTask();
//                 }
//               }}
//             />
//             <button onClick={addTask}>
//               {editTaskId !== null ? "Save Task" : "Add Task"}
//             </button>
//           </div>
//         </div>
//       </div>
//     </Modal>
//   );
// }

// export default CardInfo;


import React, { useEffect, useState } from "react";
import {
  Calendar,
  CheckSquare,
  List,
  Tag,
  Trash,
  Type,
  X,
} from "react-feather";

import Modal from "../../Modal/Modal";
import Editable from "../../Editabled/Editable";

import "./CardInfo.css";

function CardInfo(props) {
  const colors = [
    "#a8193d",
    "#4fcc25",
    "#1ebffa",
    "#8da377",
    "#9975bd",
    "#cf61a1",
    "#240959",
  ];

  const [selectedColor, setSelectedColor] = useState();
  const [values, setValues] = useState({
    ...props.card,
  });

  const updateTitle = (value) => {
    setValues({ ...values, title: value });
  };

  const updateDesc = (value) => {
    setValues({ ...values, desc: value });
  };

  const addLabel = (label) => {
    const index = values.labels.findIndex((item) => item.text === label.text);
    if (index > -1) return;

    setSelectedColor("");
    setValues({
      ...values,
      labels: [...values.labels, label],
    });
  };

  const removeLabel = (label) => {
    const tempLabels = values.labels.filter((item) => item.text !== label.text);

    setValues({
      ...values,
      labels: tempLabels,
    });
  };

  const addTask = (value) => {
    const task = {
      id: Date.now() + Math.random() * 2,
      completed: false,
      text: value,
    };
    setValues({
      ...values,
      tasks: [...values.tasks, task],
    });
  };

  const removeTask = (id) => {
    const tasks = [...values.tasks];

    const tempTasks = tasks.filter((item) => item.id !== id);
    setValues({
      ...values,
      tasks: tempTasks,
    });
  };

  const updateTask = (id, value) => {
    const tasks = [...values.tasks];

    const index = tasks.findIndex((item) => item.id === id);
    if (index < 0) return;

    tasks[index].completed = value;

    setValues({
      ...values,
      tasks,
    });
  };

  const calculatePercent = () => {
    if (!values.tasks?.length) return 0;
    const completed = values.tasks?.filter((item) => item.completed)?.length;
    return (completed / values.tasks?.length) * 100;
  };

  const updateDate = (date) => {
    if (!date) return;

    setValues({
      ...values,
      date,
    });
  };

  useEffect(() => {
    if (props.updateCard) props.updateCard(props.boardId, values.id, values);
  }, [values]);

  return (
    <Modal onClose={props.onClose}>
      <div className="cardinfo">
        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Type />
            <p>Title</p>
          </div>
          <Editable
            defaultValue={values.title}
            text={values.title}
            placeholder="Enter Title"
            onSubmit={updateTitle}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <List />
            <p>Description</p>
          </div>
          <Editable
            defaultValue={values.desc}
            text={values.desc || "Add a Description"}
            placeholder="Enter description"
            onSubmit={updateDesc}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Calendar />
            <p>Date</p>
          </div>
          <input
            type="date"
            defaultValue={values.date}
            min={new Date().toISOString().substr(0, 10)}
            onChange={(event) => updateDate(event.target.value)}
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <Tag />
            <p>Labels</p>
          </div>
          <div className="cardinfo_box_labels">
            {values.labels?.map((item, index) => (
              <label
                key={index}
                style={{ backgroundColor: item.color, color: "#fff" }}
              >
                {item.text}
                <X onClick={() => removeLabel(item)} />
              </label>
            ))}
          </div>
          <ul>
            {colors.map((item, index) => (
              <li
                key={index + item}
                style={{ backgroundColor: item }}
                className={selectedColor === item ? "li_active" : ""}
                onClick={() => setSelectedColor(item)}
              />
            ))}
          </ul>
          <Editable
            text="Add Label"
            placeholder="Enter label text"
            onSubmit={(value) =>
              addLabel({ color: selectedColor, text: value })
            }
          />
        </div>

        <div className="cardinfo_box">
          <div className="cardinfo_box_title">
            <CheckSquare />
            <p>Tasks</p>
          </div>
          <div className="cardinfo_box_progress-bar">
            <div
              className="cardinfo_box_progress"
              style={{
                width: `${calculatePercent()}%`,
                backgroundColor: calculatePercent() === 100 ? "limegreen" : "",
              }}
            />
          </div>
          <div className="cardinfo_box_task_list">
            {values.tasks?.map((item) => (
              <div key={item.id} className="cardinfo_box_task_checkbox">
                <input
                  type="checkbox"
                  defaultChecked={item.completed}
                  onChange={(event) =>
                    updateTask(item.id, event.target.checked)
                  }
                />
                <p className={item.completed ? "completed" : ""}>{item.text}</p>
                <Trash onClick={() => removeTask(item.id)} />
              </div>
            ))}
          </div>
          <Editable
            text={"Add a Task"}
            placeholder="Enter task"
            onSubmit={addTask}
          />
        </div>
      </div>
    </Modal>
  );
}

export default CardInfo;