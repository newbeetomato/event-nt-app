import path from "path";
import Image from "next/image";

// burası single event pagelerimiz
const EventPage = (data) => { // aşşağıdaki eşitlediğimiz data yı
  // buraya gönderiyoruz önce aşşağısı çalılıyore çünkü
  return <div>
    <Image src={data.image} width={1000} height={500} alt={data.title}/>
    <h1>
      {data.title}
    </h1>
    <p> {data.description}</p>
  </div>
};
export default EventPage;

// ilk standalone fonksiyonu
// burada event idleri lazım bize
/*all event alıcaz ozmaan

*/
export async function getStaticPaths() {
  // neden statik paths
  const data = await import("/data/data.json");
  const allEvents = data;

  const allPaths = allEvents.map((path) => {
    return {
      params: {
        cat: path.city, // bu biizm category identifier
        // burdaki id dosyanın adından geliyor [id].js köşeli parantez içi neyse ordan gelicek
        id: path.id,
      },
    };
  });
  return {
    paths: allPaths,
    fallback: false,
    //  Fall back dinamik olduğu için başka sayfalarıda oluşturuyo ya
    //bunu ekleyince sadee adı çıkan sayfaları oluşturucak
  };
}

export async function getStaticProps(context) {
  const id = context.params.id; // urlnin sonundaki kısma eşit
  //dataj.sondaki id kısmı
  
  const {allEvents} = await import("/data/data.json");
   //Data.jsonda allEvents diye bir kısım var
  // o kısmı aynı adda bi değişkene eşitliyor arkadaş
  // gerçi const bir değişken değilbir sabit
  
  
  //Filter kullanmaktan vazge.ti sadece bir item aldığı için
  // ama açıklama aynı
  // const eventData=allEvents.filter((ev)=>id===ev.id);
   const eventData=allEvents.find((ev)=>id===ev.id);
  /*allEventsler kısımndaki id kısmını filtreliyoruz 
  allEventsteki id ler ev.id diye tanımladık
  ev.id ler içinde const id ile belirtilen id ye eşit olanı
  eventData ya eşitledik 
  */
  return {
    props: {data:eventData}, // data yı eventData ya eşitledik ve 
  };
}
