import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

import { Link } from "react-router-dom";
export default function CartWidget() {
return (
    <div className="CartWidget" id="Carrito">
    <Link to="/cart">
        <FontAwesomeIcon icon={faCartShopping} />
    </Link>
    </div>
 );
}