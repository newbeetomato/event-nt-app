import Image from "next/image";
import Link from "next/link";
/*  pageName diye tanımladığımız şey aslında en alttaki fonksiyonda id değeri alıyor id değeride şehirin adı */
const EventsCatPage = ({ data, pageName }) => {
  return (
    <div>
      <h1> Events in {pageName} </h1>
      <div>
        {data.map(
          (
            ev // ana sayfadaki eventler her eventin bilgilerini ggetiridi
          ) => (
            //-----------------------------------
            // BURASIClient-side navigation, daha hızlı gezinti ve daha düzgün
            //bir kullanıcı deneyimi gibi birçok yarar sağlayabilir, çünkü kullanıcı yeni
            //sayfaların sunucudan yüklenmesini beklemek zorunda değildir. Ayrıca, sunucu için daha verimli de olabilir,
            //çünkü yeni sayfalar için daha az istekleme işlemi yapmak zorundadır.
            // bunu yapan <Link></Link>

            <Link key={ev.id} href={`/events/${ev.city}/${ev.id}`} passHref>
              <a>
                <Image width={200} height={300} alt={ev.title} src={ev.image} />
                <h2>{ev.title}</h2>
                <p>{ev.description}</p>
              </a>
            </Link>
          )
        )}
      </div>
    </div>
  );
};
export default EventsCatPage;

export async function getStaticPaths() {
  const { events_categories } = await import("/data/data.json");
  const allPaths = events_categories.map((ev) => {
    return {
      params: {
        cat: ev.id.toString(),
      },
    };
  });
  console.log(allPaths);
  return {
    paths: allPaths,
    fallback: false, // dinamik olduğu için başka sayfalarıda oluşturuyo ya
    //bunu ekleyince sadee adı çıkan sayfaları oluşturucak
  };
}

export async function getStaticProps(context) {
  console.log(context);
  const id = context?.params.cat; //id yi alıyor şuan içinde bulunduğun sayfanın
  const { allEvents } = await import("data/data.json");
  const data = allEvents.filter((ev) => ev.city === id);
  console.log(data);
  return { props: { data, pageName: id } }; // ilk data:data yazmıştı sonra sildi
}
