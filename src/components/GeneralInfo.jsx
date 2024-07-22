export function GeneralInfo({ isEditing, infos, handleOnInfoChange }) {
  return (
    <div className="upper section">
      <label htmlFor="name">
        {"Name: "}
        {isEditing ? (
          <input
            type="text"
            name="name"
            id="name"
            value={infos.name}
            onChange={handleOnInfoChange}
          />
        ) : (
          <b>{infos.name}</b>
        )}
      </label>

      <label htmlFor="email">
        {"Email: "}
        {isEditing ? (
          <input
            type="email"
            name="email"
            id="email"
            value={infos.email}
            onChange={handleOnInfoChange}
          />
        ) : (
          <b>{infos.email}</b>
        )}
      </label>

      <label htmlFor="phone">
        {"Phone: "}
        {isEditing ? (
          <input
            type="phone"
            name="phone"
            id="phone"
            value={infos.phone}
            onChange={handleOnInfoChange}
          />
        ) : (
          <b>{infos.phone}</b>
        )}
      </label>
    </div>
  );
}
