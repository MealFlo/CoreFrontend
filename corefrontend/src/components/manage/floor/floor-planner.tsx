"use client"

import { useState, DragEvent } from "react"
import {DotBackground} from "@/components/dotbg";
import {IconPlus} from "@tabler/icons-react";

interface Element {
  id: number;
  type: string;
  x: number;
  y: number;
}

export default function FloorPlanner() {
  const [elements, setElements] = useState<Element[]>([]);

  const handleDragStart = (e: DragEvent, element: Element) => {
    e.dataTransfer.setData("text/plain", JSON.stringify(element));
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const data = JSON.parse(e.dataTransfer.getData("text/plain"));
    const containerRect = e.currentTarget.getBoundingClientRect();
    const newElement = {
      ...data,
      x: e.clientX - containerRect.left,
      y: e.clientY - containerRect.top,
    };
    setElements((prevElements) => [...prevElements, newElement]);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
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
            Table
          </div>
        );
      case "chair":
        return (
          <div
            key={element.id}
            className="absolute bg-gray-400 rounded-full p-2 cursor-move"
            style={{ left: element.x, top: element.y, width: 40, height: 40 }}
            draggable
            onDragStart={(e) => handleDragStart(e, element)}
          />
        );
      case "counter":
        return (
          <div
            key={element.id}
            className="absolute bg-gray-500 p-2 cursor-move"
            style={{ left: element.x, top: element.y, width: 200, height: 40 }}
            draggable
            onDragStart={(e) => handleDragStart(e, element)}
          >
            Counter
          </div>
        );
      case "wall":
        return (
          <div
            key={element.id}
            className="absolute bg-gray-600 p-2 cursor-move"
            style={{ left: element.x, top: element.y, width: 400, height: 20 }}
            draggable
            onDragStart={(e) => handleDragStart(e, element)}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="flex h-[70vh] w-[70vw] rounded-md overflow-hidden">
      <div className="w-64 p-4 z-10 bg-white">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Areas</h2>
          <div
            className="border-2 border-dashed border-gray-300 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center cursor-pointer"
            onClick={() => console.log('Create a new area')} // Implement area creation logic
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
          <div
              className="bg-gray-400 rounded-full p-2 cursor-move"
              draggable
              onDragStart={(e) => handleDragStart(e, {type: "chair", id: Date.now(), x: 0, y: 0})}
          />
          <div
              className="bg-gray-500 p-2 cursor-move"
              draggable
              onDragStart={(e) => handleDragStart(e, {type: "counter", id: Date.now(), x: 0, y: 0})}
          >
            Counter
          </div>
          <div
              className="bg-gray-600 p-2 cursor-move"
              draggable
              onDragStart={(e) => handleDragStart(e, {type: "wall", id: Date.now(), x: 0, y: 0})}
          />
        </div>
      </div>
      <div className="flex-1 relative rounded-lg overflow-hidden " onDrop={handleDrop} onDragOver={handleDragOver}>
        <DotBackground />
        <div className="absolute inset-0 z-10">
          {elements.map(renderElement)}
        </div>
      </div>
    </div>
  );
}