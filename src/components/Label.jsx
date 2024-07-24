export default function Label({
  type,
  id,
  text,
  infos,
  isEditing,
  handleOnInfoChange,
}) {
  return (
    <label htmlFor={id}>
      {`${text}: `}
      {isEditing ? (
        <input
          type={type}
          name={id}
          id={id}
          value={infos[`${id}`]}
          onChange={handleOnInfoChange}
        />
      ) : (
        <b>{infos[`${id}`]}</b>
      )}{" "}
    </label>
  );
}
