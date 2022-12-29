import Link from "next/link";
import Image from "next/image";
export const Header = ({ data }) => (
  /** ımage kısmı logom olucak**/
  <header>
    <div>
      <Image src={} width={50} height={50}/> 
      <nav>
        <Link href="/" passHref>
           
          Home 
        </Link>

        <Link href="/events" passHref>
           
          Events 
        </Link>
        <Link href="about-us" passHref>
           
          About Us 
        </Link>
      </nav>
    </div>
    <h1> sayfanın başlığı olacak ksıım </h1> 
  </header>
);//title of our page h1 için headerın bitişin üstündeki
