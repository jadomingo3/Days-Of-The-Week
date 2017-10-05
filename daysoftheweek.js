var theDay = prompt("Enter the day of the week: ");
var nameDay = theDay.toUpperCase();

switch (nameDay) {
  case "MONDAY":
    document.write("Nang tayo'y magkakilala");
    break;
  case "TUESDAY":
    document.write("Nang tayo'y muling magkita");
    break;
  case "WEDNESDAY":
    document.write("Nagtapat ka ng 'yong pag-ibig");
    break;
  case "THURSDAY":
    document.write("Ay inibig din kita");
    break;
  case "FRIDAY":
    document.write("Ay puno ng pagmamahalan, mga puso natin ay sadyang nag-aawitan");
    break;
  case "SATURDAY":
    document.write("Tayo'y biglang nagkatampuhan");
    break;
  case "SUNDAY":
    document.write("Giliw ako'y iyong iniwan");
    break;
  default:
    document.write("Invalid day, please enter another day");
    break;
}