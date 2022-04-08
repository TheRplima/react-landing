import IcoMoon, { IconProps } from "react-icomoon";
const iconSet = require("./selection.json");

function Icon(props: IconProps) {
  return (
    <IcoMoon iconSet={iconSet} {...props} />
  );
}
export default Icon;