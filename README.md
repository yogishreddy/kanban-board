# Kanban Board

A Kanban board implemented in React.js, allowing users to manage tasks across different stages: To Do, In Progress, Peer Review, and Done. The board supports drag-and-drop functionality for task movement and includes a search box to filter tasks by title.

## Features

- **Kanban Board Layout:** 
  - Four columns representing task stages: To Do, In Progress, Peer Review, and Done.
  - Tasks are displayed in their respective stages.
  
- **Task Cards:** 
  - Each task card displays a title and a shortened description.
  - Tasks can be dragged and dropped between columns.

- **Drag and Drop Functionality:** 
  - Tasks can be moved between columns.
  - Tasks can be placed in the correct position within any column.

- **Search Functionality:** 
  - A search bar to filter tasks by title.
  - Matching tasks are displayed while non-matching tasks are hidden as you type.

- **Add New Tasks:** 
  - A floating button to create new tasks (creation is only allowed in the "To Do" column).
  - The task creation form includes fields for Task Title and Task Description.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/kanban-board.git
   cd kanban-board
