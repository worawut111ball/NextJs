'use client'

import Link from "next/link"


export  function NavLinks() {
    return (
        <nav>
            <Link href="/">Home</Link>
            <Link href="/dashboed">Dashbords</Link>
        </nav>
    )
}