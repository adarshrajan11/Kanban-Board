import React from "react";
import PropTypes from "prop-types";
import "./Task_style.css";
import {  Draggable } from  "@hello-pangea/dnd";

const Task = ({ id, name, index }) => {
    return (
        <Draggable draggableId={id} index={index}>
            {(provided) => (
                <div
                    className="task"
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                    aria-label={`Task: ${name}`}
                >
                    {name}
                </div>
            )}
        </Draggable>
    );
};

Task.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
};

export default Task;
