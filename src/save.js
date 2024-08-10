import { PROJECTSARRAY } from ".";

export default function () {
  const projectsJSON = JSON.stringify(PROJECTSARRAY);
  console.log(projectsJSON);
  localStorage.setItem("projectsArray", projectsJSON);
  console.log(localStorage);
}
