import React from "react";
import Link from 'next/link';


export default function Header() {
    return (
        <nav className="corpo-nav">
            <div className="logo-barra">
            <img className="logo" src='../img/logoV.png' alt="Logo d sua fazenda" />
            </div>
            <div className="itens-nav">
                <Link className="item" href="/">Home</Link>
                <Link className="item" href="/post/posts">Menu</Link>
                <Link className="item" href="/post/alerta">Sobre</Link>
            </div>
            <div id="menu-toggle" class="menu-toggle">&#9776;</div>
        </nav>
    );
}


