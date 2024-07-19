import React, { useState, useEffect } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './App.css';

const initialTasks = [
  { id: '1', title: 'Task 1', description: 'Description 1', status: 'To Do' },
  { id: '2', title: 'Task 2', description: 'Description 2', status: 'In Progress' },
  { id: '3', title: 'Task 3', description: 'Description 3', status: 'Peer Review' },
  { id: '4', title: 'Task 4', description: 'Description 4', status: 'Done' },
];

const columns = ['To Do', 'In Progress', 'Peer Review', 'Done'];

const App = () => {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks');
    return savedTasks ? JSON.parse(savedTasks) : initialTasks;
  });
  const [search, setSearch] = useState('');

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const updatedTasks = Array.from(tasks);
    const [movedTask] = updatedTasks.splice(result.source.index, 1);
    movedTask.status = result.destination.droppableId;
    updatedTasks.splice(result.destination.index, 0, movedTask);

    setTasks(updatedTasks);
  };

  const filteredTasks = tasks.filter(task =>
    task.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <DragDropContext onDragEnd={handleDragEnd}>
        <div className="kanban-board">
          {columns.map(column => (
            <Droppable key={column} droppableId={column}>
              {(provided) => (
                <div
                  className="kanban-column"
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                >
                  <h2>{column}</h2>
                  {filteredTasks
                    .filter(task => task.status === column)
                    .map((task, index) => (
                      <Draggable key={task.id} draggableId={task.id} index={index}>
                        {(provided) => (
                          <div
                            className="task-card"
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <h3>{task.title}</h3>
                            <p>{task.description}</p>
                          </div>
                        )}
                      </Draggable>
                    ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          ))}
        </div>
      </DragDropContext>
      <button className="add-task-btn" onClick={() => {
        const title = prompt('Task Title');
        const description = prompt('Task Description');
        if (title && description) {
          setTasks([...tasks, { id: `${tasks.length + 1}`, title, description, status: 'To Do' }]);
        }
      }}>Add Task</button>
    </div>
  );
};

export default App;
