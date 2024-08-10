import { PROJECTSARRAY } from ".";

export default function () {
  const projectsJSON = JSON.stringify(PROJECTSARRAY);
  localStorage.clear();
  localStorage.setItem("projectsArray", projectsJSON);
  console.log(localStorage);
}
