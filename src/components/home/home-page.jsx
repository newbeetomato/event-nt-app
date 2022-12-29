import Link from "next/link";
import Image from "next/image";

export const HomePage = ({ data }) => {
  return (
    <main>
      {data.map((ev) => (
        <Link key={ev.id} href={`/events/${ev.id}`} passHref>
          
            <Image width={200} height={300} alt={ev.title} src={ev.image} />
            <h2> {ev.title} </h2> <p> {ev.description}</p>
          
        </Link>
      ))}
    </main>
  );
};// tanımlarken homepagei istersek süslü parantez açmadan
//sadece noraml parantez açarakta tanımlaya biliriz
// böylelik return yazmadan direk retunu kullanmışız gibi oluyor 
