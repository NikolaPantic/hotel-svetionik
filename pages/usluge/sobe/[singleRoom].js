import { useContext } from "react";
import Image from "next/image";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import ServiceLayout from "../../../layout/ServiceLayout/ServiceLayout";
import RoomMiniCard from "../../../components/RoomMiniCard/RoomMiniCard";
import roomsData from "../../../data/roomsData";
import { FormContext } from "../../_app";

const PageRoom = ({ singleRoom }) => {
  const openForm = useContext(FormContext);
  const data = roomsData();

  return (
    <article className="room">
      <ServiceLayout
        serviceLayoutText={false}
        serviceLayoutHeading={data.roomsBasicData[singleRoom].heading}
        currentService="rooms"
      >
        <section className="room__content">
          <div className="room__carousel">
            <Carousel
              images={data.roomsBasicData[singleRoom].images}
              shouldMaximizeOnClick={true}
            />
          </div>
          <div className="room__description">
            <div className="room__description--text">
              {data.roomsBasicData[singleRoom].description.map((e) => (
                <p key={e}>{e}</p>
              ))}
            </div>

            <div className="room__description--info">
              <h4>Osnovne informacije</h4>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <strong>Broj osoba:</strong>{" "}
                      {
                        data.roomsBasicData[singleRoom].basicInfo
                          .numberOfPersons
                      }
                    </td>
                    <td>
                      <strong>Tip ležaja:</strong>{" "}
                      {data.roomsBasicData[singleRoom].basicInfo.typeOfBed}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <strong>Dodatni ležaj:</strong>{" "}
                      <span>
                        {
                          data.roomsBasicData[singleRoom].basicInfo
                            .extraBedIncluded
                        }
                      </span>
                    </td>
                    <td>
                      <strong>Pogled na reku:</strong>{" "}
                      {data.roomsBasicData[singleRoom].basicInfo.riverView}
                    </td>
                  </tr>
                </tbody>
              </table>
              <h4>Sadržaj sobe</h4>
              <ul className="room__description--info--list">
                {data.roomsBasicData[singleRoom].roomContent.map((e) => (
                  <li
                    className="room__description--info--list-item"
                    key={e.description}
                  >
                    <Image src={e.icon} alt={`${e.description} logo`} />{" "}
                    {e.description}
                  </li>
                ))}
              </ul>
            </div>

            <button
              className="navigationbutton navigationbutton__dark pulsate"
              onClick={openForm}
            >
              Rezerviši odmah
            </button>
          </div>
        </section>
        <section className="room__other-rooms">
          <h4>Možda ste zainteresovani </h4>
          <div className="room__other-rooms--list">
            {data.roomsCardData
              .filter((e) => e.key !== singleRoom)
              .map((e) => (
                <RoomMiniCard
                  key={e.description}
                  roomDescription={e.description}
                  roomMiniCardImage={e.image}
                />
              ))}
          </div>
        </section>
      </ServiceLayout>
    </article>
  );
};

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { singleRoom: "standardna-soba", locale: "sr" } },
      { params: { singleRoom: "standardna-soba", locale: "en" } },
      { params: { singleRoom: "soba-sa-dodatnim-lezajem", locale: "sr" } },
      { params: { singleRoom: "soba-sa-dodatnim-lezajem", locale: "en" } },
      {
        params: { singleRoom: "superior-apartman-sa-djakuzijem", locale: "sr" },
      },
      {
        params: { singleRoom: "superior-apartman-sa-djakuzijem", locale: "en" },
      },
    ],
    fallback: false,
  };
};

export async function getStaticProps(context) {
  const path = context.params.singleRoom;
  console.log(path);

  const currentRoom = {
    // "en/standardna-soba": "singleRoom",
    "standardna-soba": "singleRoom",
    "soba-sa-dodatnim-lezajem": "doubleRoom",
    "superior-apartman-sa-djakuzijem": "superiorRoom",
  };

  return {
    props: {
      singleRoom: currentRoom[path],
    },
  };
}

export default PageRoom;
