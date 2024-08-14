import { useContext } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css";
import ServiceLayout from "../../layout/ServiceLayout/ServiceLayout";
import RoomMiniCard from "../../components/RoomMiniCard/RoomMiniCard";
import roomsData from "../../data/roomsData";
import { FormContext } from "../../pages/_app";
import en from "../../locales/en";
import sr from "../../locales/sr";
import PageLayout from "../PageLayout/PageLayout";

const SingleRoomLayout = ({ singleRoom }) => {
  const { locale } = useRouter();
  const t = locale === "sr" ? sr : en;

  const openForm = useContext(FormContext);
  const data = roomsData();

  return (
    <article className="room">
      <PageLayout
        heading={data.roomsBasicData[singleRoom].heading}
        pageLayoutSummary={t.common.spaciousAndComfortable}
        backgroundImageUrl={data.roomsBasicData[singleRoom].images[0]}
      >
        <ServiceLayout
          serviceLayoutText={false}
          serviceLayoutHeading=""
          currentService="rooms"
        >
          <section className="room__content container">
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
                <h4>{t.common.basicInfo}</h4>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <strong>{t.common.numberOfPersons}:</strong>{" "}
                        {
                          data.roomsBasicData[singleRoom].basicInfo
                            .numberOfPersons
                        }
                      </td>
                      <td>
                        <strong>{t.common.bedType}:</strong>{" "}
                        {data.roomsBasicData[singleRoom].basicInfo.typeOfBed}
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <strong>{t.common.extraBed}:</strong>{" "}
                        <span>
                          {
                            data.roomsBasicData[singleRoom].basicInfo
                              .extraBedIncluded
                          }
                        </span>
                      </td>
                      <td>
                        <strong>{t.common.riverView}:</strong>{" "}
                        {data.roomsBasicData[singleRoom].basicInfo.riverView}
                      </td>
                    </tr>
                  </tbody>
                </table>
                <h4>{t.common.roomContent}</h4>
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
                {t.buttons.bookNow}
              </button>
            </div>
          </section>
          <section className="room__other-rooms">
            <h4>{t.common.maybeInterested}</h4>
            <div className="room__other-rooms--list">
              {data.roomsCardData
                .filter((e) => e.key !== singleRoom)
                .map((e) => (
                  <RoomMiniCard
                    key={e.description}
                    roomType={e.key}
                    roomDescription={e.description}
                    roomMiniCardImage={e.image}
                    roomMiniCardLink={e.link}
                  />
                ))}
            </div>
          </section>
        </ServiceLayout>
      </PageLayout>
    </article>
  );
};

export default SingleRoomLayout;
