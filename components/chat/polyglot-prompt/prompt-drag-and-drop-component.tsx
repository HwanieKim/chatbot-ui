// import { FC, useState } from "react"
// import { ChatInputBox } from "../../ui/chat-input-box"
// import {
//   DndContext,
//   closestCenter,
//   PointerSensor,
//   useSensor,
//   useSensors,
//   DragEndEvent
// } from "@dnd-kit/core"
// import {
//   arrayMove,
//   SortableContext,
//   rectSortingStrategy,
//   useSortable
// } from "@dnd-kit/sortable"
// import { CSS } from "@dnd-kit/utilities"
// import { PromptGenericInputProps } from "./prompt-generic-props"

// export interface PromptDragAndDropComponentProps extends PromptGenericInputProps {
//   initialItems?: Item[]
// }

// interface Item {
//   id: string
//   value: string
// }

// export const PromptDragAndDropComponent: FC<
//   PromptDragAndDropComponentProps
// > = ({
//   initialItems = [
//     { id: "1", value: "Testo del primo textarea" },
//     { id: "2", value: "Testo del secondo textarea" },
//     { id: "3", value: "Testo del terzo textarea" }
//   ]
// }) => {
//   const [items, setItems] = useState<Item[]>(initialItems)

//   const sensors = useSensors(useSensor(PointerSensor))

//   const handleDragEnd = (event: DragEndEvent) => {
//     const { active, over } = event

//     if (active.id !== over?.id) {
//       setItems(items => {
//         const oldIndex = items.findIndex(item => item.id === active.id)
//         const newIndex = items.findIndex(item => item.id === over?.id)
//         return arrayMove(items, oldIndex, newIndex)
//       })
//     }
//   }

//   return (
//     <DndContext
//       sensors={sensors}
//       collisionDetection={closestCenter}
//       onDragEnd={handleDragEnd}
//     >
//       <SortableContext items={items} strategy={rectSortingStrategy}>
//         <div className="flex flex-col gap-4">
//           {items.map(item => (
//             <SortableItem key={item.id} id={item.id} value={item.value} />
//           ))}
//         </div>
//       </SortableContext>
//     </DndContext>
//   )
// }

// interface SortableItemProps {
//   id: string
//   value: string
// }

// export const SortableItem: FC<SortableItemProps> = ({ id, value }) => {
//   const { attributes, listeners, setNodeRef, transform, transition } =
//     useSortable({ id: id })

//   const style = {
//     transform: CSS.Transform.toString(transform),
//     transition,
//     cursor: "grab"
//   }

//   return (
//     <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
//       <ChatInputBox value={value} />
//     </div>
//   )
// }
