import { useState } from "react";
import GeneralInfo from "./components/GeneralInfo";
import EducationalExperience from "./components/EducationalExperience";
import PracticalExperience from "./components/PracticalExprience";
import Btn from "./components/Btn";
import Label from "./components/Label";
import "./styles/styles.css";

export default function App() {
  const [infos, setInfos] = useState({});
  const [isEditing, setIsEditing] = useState(true);

  function handleOnInfoChange(e) {
    setInfos((prevInfos) => {
      return { ...prevInfos, [e.target.id]: e.target.value };
    });
  }
  console.log(infos);

  function handleEditMode(e) {
    e.preventDefault();
    setIsEditing(() => !isEditing);
  }

  return (
    <>
      <h1>Cv Application</h1>

      <form>
        <div>
          <GeneralInfo
            infos={infos}
            isEditing={isEditing}
            handleOnInfoChange={handleOnInfoChange}
          />
        </div>

        <div className="horizontal-line"></div>
        <EducationalExperience
          infos={infos}
          isEditing={isEditing}
          handleOnInfoChange={handleOnInfoChange}
        />

        <div className="horizontal-line"></div>
        <PracticalExperience
          infos={infos}
          isEditing={isEditing}
          handleOnInfoChange={handleOnInfoChange}
        />
        <div className="horizontal-line"></div>

        <div className="button-section">
          <Btn
            text={"Edit"}
            isEditing={isEditing}
            handleEditMode={handleEditMode}
          />

          <Btn
            text={"Submit"}
            isEditing={!isEditing}
            handleEditMode={handleEditMode}
          />
        </div>
      </form>
    </>
  );
}
