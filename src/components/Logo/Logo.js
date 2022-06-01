import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faDiceD20 } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
export default function Logo() {
return (
    <div id="Logo">
    <Link to="/home">
        <FontAwesomeIcon icon={faDiceD20} rotation={180}/> 
    </Link>
    </div>
 );
}