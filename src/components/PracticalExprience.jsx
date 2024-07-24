import Label from "./Label";

export default function PracticalExperience({
  infos,
  isEditing,
  handleOnInfoChange,
}) {
  return (
    <>
      <h2>Experience</h2>
      <div className="lower section">
        <Label
          infos={infos}
          isEditing={isEditing}
          handleOnInfoChange={handleOnInfoChange}
          type="text"
          id="company"
          text={"Company name"}
        />
        <Label
          infos={infos}
          isEditing={isEditing}
          handleOnInfoChange={handleOnInfoChange}
          type="text"
          id="responsibilities"
          text={"Position title"}
        />
        <div>
          <Label
            infos={infos}
            isEditing={isEditing}
            handleOnInfoChange={handleOnInfoChange}
            type="date"
            id="date-from"
            text={"Date from"}
          />
          <Label
            infos={infos}
            isEditing={isEditing}
            handleOnInfoChange={handleOnInfoChange}
            type="date"
            id="date-to"
            text={" to "}
          />
        </div>
      </div>
    </>
  );
}
