import Image from "next/image";
import NavigationButton from "../../../components/NavigationButton/NavigationButton";
import ServiceLayout from "../../../layout/ServiceLayout/ServiceLayout";
import marina from "../../../public/images/food.jpg";

const Marina = () => {
  return (
    <article className="pagemarina">
      <ServiceLayout
        currentService="marina"
        serviceLayoutHeading="Brodska marina"
        serviceLayoutText={[
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur alias reprehenderit ab totam, cum minima? Vitae nemo expedita, consectetur quo possimus ratione voluptatem asperiores deleniti enim itaque deserunt cupiditate neque nam veritatis. Quisquam officiis repellendus porro optio quasi eveniet recusandae!",
        ]}
      >
        <div className="section-buttons">
          <NavigationButton
            navigationButtonLabel="Rezerviši"
            navigationButtonLink="tel:+381641234567"
            darkMode={true}
          />
          <NavigationButton
            navigationButtonLabel="Galerija"
            navigationButtonLink="/galerija#marina"
          />
        </div>
        <section className="pagemarina__images">
          <Image src={marina} style={{ height: "auto" }} alt="hrana" />
          <Image src={marina} style={{ height: "auto" }} alt="hrana" />
          <Image src={marina} style={{ height: "auto" }} alt="hrana" />
          <Image src={marina} style={{ height: "auto" }} alt="hrana" />
        </section>
      </ServiceLayout>
    </article>
  );
};

export default Marina;
