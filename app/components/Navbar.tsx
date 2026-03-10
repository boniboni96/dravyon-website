"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {

const [menuOpen, setMenuOpen] = useState(false);

return (

<nav className="navbar">

<div className="logo">
<img src="/logo.png" alt="Dravyon Logo" className="nav-logo"/>
<span>DRAVYON</span>
</div>

<div className={`nav-links ${menuOpen ? "active" : ""}`}>
<Link href="/">Home</Link>
<Link href="/events">Events</Link>
<Link href="/team">Team</Link>
<Link href="/#footer">Contact</Link>
</div>

<div
className="menu-toggle"
onClick={() => setMenuOpen(!menuOpen)}
>
☰
</div>

</nav>

);

}