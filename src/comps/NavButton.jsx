import React from "react";
import { Link } from 'react-router-dom';

import '../assets/styles/NavButton.css'

export default function NavButton ({name, to}) {
    return <Link className="navButton p-2 m-2 col-2 d-flex justify-content-center" to={to}>{name}</Link>
}