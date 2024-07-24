import Label from "./Label";

export default function EducationalExperience({
  infos,
  isEditing,
  handleOnInfoChange,
}) {
  return (
    <>
      <h2>Education</h2>
      <div className="middle section">
        <Label
          infos={infos}
          isEditing={isEditing}
          handleOnInfoChange={handleOnInfoChange}
          type="text"
          id="school"
          text={"School name"}
        ></Label>
        <Label
          infos={infos}
          isEditing={isEditing}
          handleOnInfoChange={handleOnInfoChange}
          type="text"
          id="title-of-study"
          text={"Title of study"}
        ></Label>
        <div>
          <Label
            infos={infos}
            isEditing={isEditing}
            handleOnInfoChange={handleOnInfoChange}
            type="date"
            id="date-of-study-from"
            text={"Date of study from "}
          ></Label>
          <Label
            infos={infos}
            isEditing={isEditing}
            handleOnInfoChange={handleOnInfoChange}
            type="date"
            id="date-of-study-to"
            text={" to "}
          ></Label>
        </div>
      </div>
    </>
  );
}
