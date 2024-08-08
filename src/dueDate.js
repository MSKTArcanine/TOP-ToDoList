import { PROJECTSARRAY } from ".";
import { format } from "date-fns";
const regex = new RegExp("^[0-9]{2}/[0-9]{2}/[0-9]{4}$");
let date;
export default function () {
  do {
    date = prompt("Date : DD/MM/YYYY");
  } while (!regex.test(date));
  date = date.split("/");
  date.map((e) => e.trim());
  PROJECTSARRAY[0].setDueDate(
    format(new Date(date[2], date[1] - 1, date[0]), "dd-MM-yyyy")
  );
}
