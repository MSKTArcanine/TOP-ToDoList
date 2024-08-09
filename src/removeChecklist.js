import { STACKARRAY } from ".";
import loadToDisplay from "./loadToDisplay";
export default function (e) {
  STACKARRAY.removeFromStack(e.target.parentNode.getAttribute("for"));
  loadToDisplay();
  console.log("done");
}
