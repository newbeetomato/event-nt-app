import Link from "next/link"

export const Header=({data})=>(
    <header  >
    <nav id="myHeader">
      <Link href='/' passHref> <a > Home </a> </Link>

      <Link href='/events' passHref><a> Events </a> </Link>
      <Link href='about-us' passHref><a> About Us </a> </Link>

    </nav>
  </header>
)