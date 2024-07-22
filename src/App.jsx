import { useState } from "react";
import "./styles/styles.css";
import { GeneralInfo } from "./components/GeneralInfo";

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
      <form>
        <GeneralInfo
          infos={infos}
          isEditing={isEditing}
          handleOnInfoChange={handleOnInfoChange}
        />
        <div className="horizontal-line"></div>

        <div className="middle section">
          <label htmlFor="school">
            {"School name: "}
            {isEditing ? (
              <input
                type="text"
                name="school"
                id="school"
                value={infos.school}
                onChange={handleOnInfoChange}
              />
            ) : (
              <b>{infos.school}</b>
            )}
          </label>

          <label htmlFor="title-of-study">
            {"Title of study: "}
            {isEditing ? (
              <input
                type="text"
                name="title-of-study"
                id="title-of-study"
                value={infos["title-of-study"]}
                onChange={handleOnInfoChange}
              />
            ) : (
              <b>{infos["title-of-study"]}</b>
            )}
          </label>

          <label htmlFor="date-of-study-from">
            {"Date of study: from "}
            {isEditing ? (
              <input
                type="date"
                name="date-of-study-from"
                id="date-of-study-from"
                value={infos["date-of-study-from"]}
                onChange={handleOnInfoChange}
              />
            ) : (
              <b>{infos["date-of-study-from"]}</b>
            )}

            <label htmlFor="date-of-study-to">
              {" to "}{" "}
              {isEditing ? (
                <input
                  type="date"
                  name="date-of-study-to"
                  id="date-of-study-to"
                  value={infos["date-of-study-to"]}
                  onChange={handleOnInfoChange}
                />
              ) : (
                <b>{infos["date-of-study-to"]}</b>
              )}
            </label>
          </label>
        </div>

        <div className="horizontal-line"></div>

        <div className="lower section">
          <label htmlFor="company">
            {"Company Name: "}
            {isEditing ? (
              <input
                type="text"
                name="company"
                id="company"
                value={infos.company}
                onChange={handleOnInfoChange}
              />
            ) : (
              <b>{infos["company"]}</b>
            )}
          </label>

          <label htmlFor="position-title">
            {"Position title: "}
            {isEditing ? (
              <input
                type="position-title"
                name="position-title"
                id="position-title"
                value={infos["position-title"]}
                onChange={handleOnInfoChange}
              />
            ) : (
              <b>{infos["position-title"]}</b>
            )}
          </label>

          <label htmlFor="responsibilities">
            {"Main responsibilities: "}
            {isEditing ? (
              <input
                type="text"
                name="responsibilities"
                id="responsibilities"
                value={infos.responsibilities}
                onChange={handleOnInfoChange}
              />
            ) : (
              <b>{infos.responsibilities}</b>
            )}
          </label>

          <label htmlFor="date-from">
            {`Date: from `}
            {isEditing ? (
              <input
                type="date"
                name="date-from"
                id="date-from"
                value={infos["date-from"]}
                onChange={handleOnInfoChange}
              />
            ) : (
              <b>{infos["date-from"]}</b>
            )}

            <label htmlFor="date-to">
              {` to `}
              {isEditing ? (
                <input
                  type="date"
                  name="date-to"
                  id="date-to"
                  value={infos["date-to"]}
                  onChange={handleOnInfoChange}
                />
              ) : (
                <b>{infos["date-to"]}</b>
              )}
            </label>
          </label>
        </div>

        <div className="button-section">
          <button disabled={isEditing} onClick={handleEditMode}>
            Edit
          </button>
          <button disabled={!isEditing} onClick={handleEditMode}>
            Submit
          </button>
        </div>
      </form>
    </>
  );
}
