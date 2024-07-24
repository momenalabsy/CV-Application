export default function Btn({ text, isEditing, handleEditMode }) {
  return (
    <button disabled={isEditing} onClick={handleEditMode}>
      {text}
    </button>
  );
}
