import React from 'react';
import { useDrag, useDrop } from 'react-dnd';

// Define a constant for the item type
const ItemType = {
  COURSE: 'COURSE',
};

const DragCourse = ({ course, semesterId, index, moveCourse }) => {
  // Implement the `useDrag` hook to make the course draggable
  const [, dragRef] = useDrag({
    type: ItemType.COURSE,
    item: { course, semesterId, index }, // Pass the course data
  });

  // Implement the `useDrop` hook to handle dropping on a target
  const [, dropRef] = useDrop({
    accept: ItemType.COURSE,
    hover: (draggedItem) => {
      if (
        draggedItem.index !== index ||
        draggedItem.semesterId !== semesterId
      ) {
        moveCourse(draggedItem, { semesterId, index });
        draggedItem.index = index;
        draggedItem.semesterId = semesterId;
      }
    },
  });

  // Combine drag and drop refs
  return (
    <div
      ref={(node) => dragRef(dropRef(node))}
      className="bg-red-100 text-black py-2 px-4 rounded-full cursor-move"
      style={{ marginBottom: '0.5em' }}
    >
      {course}
    </div>
  );
};

export default DragCourse;
