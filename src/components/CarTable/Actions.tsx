import React, { useState } from "react";
import { FaEdit, FaTrash, FaEllipsisV, FaTimes } from "react-icons/fa";
interface ActionsProps {
  onEdit: () => void;
  onDelete: () => void;
  onEditStatus: (newStatus: string) => void;
}

const Actions: React.FC<ActionsProps> = ({
  onEdit,
  onDelete,
  onEditStatus,
}) => {
  const [showActions, setShowActions] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newStatus, setNewStatus] = useState("");

  const toggleActions = () => {
    setShowActions(!showActions);
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setShowActions(false);
  };

  const handleDelete = () => {
    onDelete();
    setShowActions(false);
  };

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setNewStatus(event.target.value);
  };

  const handleSaveStatus = () => {
    onEditStatus(newStatus);
    setEditMode(false);
  };

  return (
    <div className="flex space-x-2 relative">
      <button
        onClick={toggleActions}
        className="px-3 py-1 text-gray-700 rounded-md"
      >
        <FaEllipsisV />
      </button>
      {showActions && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
          {!editMode ? (
            <>
              <button
                onClick={() => {
                  onEdit();
                  setNewStatus("");
                  setEditMode(true);
                }}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                <FaEdit className="inline-block mr-2" /> Editar
              </button>
              <button
                onClick={handleDelete}
                className="block px-4 py-2 text-red-600 hover:bg-gray-100"
              >
                <FaTrash className="inline-block mr-2" /> Excluir
              </button>
            </>
          ) : (
            <>
              <select
                value={newStatus}
                onChange={handleStatusChange}
                className="block w-full px-4 py-2 text-gray-800 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              >
                <option value="Available">Available</option>
                <option value="Reserved">Reserved</option>
              </select>
              <button
                onClick={handleSaveStatus}
                className="block mt-2 px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
              >
                Salvar
              </button>
            </>
          )}
          <button
            onClick={toggleActions}
            className="absolute top-0 right-0 p-2"
          >
            <FaTimes />
          </button>
        </div>
      )}
    </div>
  );
};

export default Actions;
