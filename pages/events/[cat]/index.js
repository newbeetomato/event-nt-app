
import CatEvent from '../../../src/components/events/catEvent';
/*  pageName diye tanımladığımız şey aslında en alttaki fonksiyonda id değeri alıyor id değeride şehirin adı */
const EventsCatPage = ({ data, pageName }) => <CatEvent data={data} pageName={pageName} />;
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
  const id = context?.params.cat; 
  //id yi alıyor şuan içinde bulunduğun sayfanın
  const { allEvents } = await import('/data/data.json');
  const data = allEvents.filter((ev) => ev.city === id);
  console.log(data);
  return { props: { data, pageName: id } }; 
  // ilk data:data yazmıştı sonra sildi
}
