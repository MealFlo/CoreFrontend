"use client"

import { useState, DragEvent } from "react"
import { DotBackground } from "@/components/dotbg";
import { IconPlus } from "@tabler/icons-react";

interface Element {
  id: number;
  type: string;
  x: number;
  y: number;
  label?: string;
}

export default function FloorPlanner() {
  const [elements, setElements] = useState<Element[]>([]);
  const [tableCount, setTableCount] = useState(0);
  const [draggingElement, setDraggingElement] = useState<Element | null>(null);

  const handleDragStart = (e: DragEvent, element: Element) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(element));
    setDraggingElement(element);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    const containerRect = e.currentTarget.getBoundingClientRect();

    // Calculate new position
    const x = e.clientX - containerRect.left;
    const y = e.clientY - containerRect.top;

    if (x < 0 || y < 0 || x > containerRect.width || y > containerRect.height) {
      // If outside the container, remove the element if it exists
      if (draggingElement) {
        setTimeout(() => { // Ensure state update is processed asynchronously
          setElements(prevElements => prevElements.filter(el => el.id !== draggingElement.id));
          if (draggingElement.label?.startsWith("T")) {
            updateTableLabelsAfterRemoval(draggingElement.label);
          }
        }, 0);
        setDraggingElement(null); // Reset dragging element immediately
      }
      return;
    }

    if (draggingElement && elements.some(el => el.id === draggingElement.id)) {
      // Update position of an existing element
      setElements(prevElements => prevElements.map(el =>
        el.id === draggingElement.id ? { ...el, x, y } : el
      ));
    } else {
      // Add new element
      let label = undefined;
      if (data.type === "table") {
        const newTableCount = tableCount + 1;
        setTableCount(newTableCount);
        label = `T${newTableCount.toString().padStart(2, '0')}`;
      }

      const newElement = {
        ...data,
        id: Date.now(), // Ensure a unique ID for each new element
        x,
        y,
        label
      };
      setElements(prevElements => [...prevElements, newElement]);
    }
    setDraggingElement(null); // Reset dragging element after drop
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const updateTableLabelsAfterRemoval = (removedLabel: string) => {
    const numberRemoved = parseInt(removedLabel.substring(1));
    setTimeout(() => { // Ensure state update is processed asynchronously
      const updatedElements = elements.map(el => {
        if (el.label && el.label.startsWith("T")) {
          const currentNumber = parseInt(el.label.substring(1));
          if (currentNumber > numberRemoved) {
            return {...el, label: `T${(currentNumber - 1).toString().padStart(2, '0')}`};
          }
        }
        return el;
      });
      setElements(updatedElements);
      setTableCount(prevCount => prevCount - 1);
    }, 0);
  };

  const renderElement = (element: Element) => {
    switch (element.type) {
      case "table":
        return (
          <div
            key={element.id}
            className="absolute bg-gray-300 rounded-md p-2 cursor-move"
            style={{ left: element.x, top: element.y, width: 100, height: 60 }}
            draggable
            onDragStart={(e) => handleDragStart(e, element)}
          >
            {element.label || 'Table'}
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-[70vh] w-[70vw] rounded-md overflow-hidden">
      <div className="w-64 p-4 z-10 bg-white">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Areas</h2>
          <div
            className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer"
            onClick={() => console.log('Create a new area')}
          >
            <IconPlus className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            <p className="text-sm text-gray-500 dark:text-gray-400">Create a new area</p>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-4">Toolbar</h2>
        <div className="flex flex-col gap-2">
          <div
              className="bg-gray-300 rounded-md p-2 cursor-move"
              draggable
              onDragStart={(e) => handleDragStart(e, {type: "table", id: Date.now(), x: 0, y: 0})}
          >
            Table
          </div>
        </div>
      </div>
      <div className="flex-1 relative rounded-lg overflow-hidden" onDrop={handleDrop} onDragOver={handleDragOver}>
        <DotBackground />
        <div className="absolute inset-0 z-10">
          {elements.map(renderElement)}
        </div>
      </div>
    </div>
  );
}