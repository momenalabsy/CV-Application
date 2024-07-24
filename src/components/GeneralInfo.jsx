import Label from "./Label";

export default function GeneralInfo({ infos, isEditing, handleOnInfoChange }) {
  return (
    <>
      <h2>General Info</h2>
      <div className="upper section">
        <Label
          infos={infos}
          isEditing={isEditing}
          handleOnInfoChange={handleOnInfoChange}
          type="text"
          id="name"
          text={"Name"}
        ></Label>
        <Label
          infos={infos}
          isEditing={isEditing}
          handleOnInfoChange={handleOnInfoChange}
          type="email"
          id="email"
          text={"Email"}
        ></Label>
        <Label
          infos={infos}
          isEditing={isEditing}
          handleOnInfoChange={handleOnInfoChange}
          type="phone"
          id="phone"
          text={"Phone"}
        ></Label>
        <Label
          type={"text"}
          id={"address"}
          text={"Address"}
          infos={infos}
          handleOnInfoChange={handleOnInfoChange}
          isEditing={isEditing}
        />
      </div>
    </>
  );
}
