import React, { useState } from "react";
import Column from "../column/Column";
import { DragDropContext } from  "@hello-pangea/dnd";
import "./Board.css";

const Board = () => {
    const [columns, setColumns] = useState({
        "To Do": [
            { id: "1", name: "Wake up at 6:00 Am" },
            { id: "2", name: "Morning Routine completed by 7:00 Am" },
        ],
        "In Progress": [
            { id: "3", name: "Task 3" },
        ],
        "Done": [
            { id: "4", name: "Task 4" },
            { id: "5", name: "Task 5" },
            { id: "6", name: "Task 6" },
        ],
    });

    const handleOnDragEnd = (result) => {
        const { source, destination } = result;

        // If dropped outside a droppable area, do nothing
        if (!destination) return;

        // If dropped in the same position, do nothing
        if (
            source.droppableId === destination.droppableId &&
            source.index === destination.index
        ) {
            return;
        }

        // Clone the source and destination columns
        const sourceColumn = [...columns[source.droppableId]];
        const destinationColumn = [...columns[destination.droppableId]];

        // Remove the dragged task from the source column
        const [movedTask] = sourceColumn.splice(source.index, 1);

        // Add the task to the destination column
        destinationColumn.splice(destination.index, 0, movedTask);

        // Update the state immutably
        setColumns((prevColumns) => ({
            ...prevColumns,
            [source.droppableId]: sourceColumn,
            [destination.droppableId]: destinationColumn,
        }));
    };

    return (
        <div className="Board-parent">
        <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="board">
                {Object.keys(columns).map((column) => (
                    <Column
                        key={column}
                        title={column}
                        tasks={columns[column]}
                        columnId={column}
                    />
                  
                ))}
                {/* {Object.keys(columns).map((column) => (
                    <li key={column}>{column}</li>
                    ))} */}
            </div>
            </DragDropContext>
            </div>
    );
};

export default Board;
