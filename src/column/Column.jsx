import React from "react";
import "./Column_style.css";
import Task from "../task/Task";
import { Droppable } from  "@hello-pangea/dnd";
import PropTypes from "prop-types";

const Column = ({ title, tasks, columnId }) => {
    console.log(columnId)
    return (
        <div className="column">
            <h2>{title}</h2>
            <Droppable droppableId={columnId}>
                {(provided) => (
                    <div
                        className="task-container"
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                    >
                        {tasks.length > 0 ? (
                            tasks.map((task, index) => (
                                <Task key={task.id} id={task.id} name={task.name} index={index} />
                            ))
                        ) : (
                            <p className="empty-message">No tasks available</p>
                        )}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    );
};

Column.propTypes = {
    title: PropTypes.string.isRequired,
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
        })
    ).isRequired,
    columnId: PropTypes.string.isRequired,
};

export default Column;
