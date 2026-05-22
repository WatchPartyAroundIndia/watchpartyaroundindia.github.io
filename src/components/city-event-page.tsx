import type { CSSProperties } from "react";
import { Link, Navigate, useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import wwdcLogo from "../assets/2025/logo.svg";
import locationPinLogo from "../assets/2025/location-pin.svg";
import { getCityEventBySlug } from "../data/city-events";
import type { CityEvent } from "../data/city-events";
import EventStructuredData from "./event-structured-data";

const gradientStyle = (event: CityEvent): CSSProperties => ({
  backgroundImage: `linear-gradient(180deg, ${event.gradient.from} 0%, ${event.gradient.to} 100%)`,
});

const CityEventPage = () => {
  const { citySlug } = useParams();
  const event = getCityEventBySlug(citySlug);

  if (!event) {
    return <Navigate to="/" replace />;
  }

  if (citySlug?.toLowerCase() !== event.slug) {
    return <Navigate to={`/${event.slug}`} replace />;
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-white bg-[radial-gradient(#ccc_1px,transparent_1px)] bg-[length:20px_20px] font-sans text-[#1F1F29]">
      <EventStructuredData event={event} />
      <header className="flex items-center justify-between max-w-6xl mx-auto px-4 md:px-8 py-8 font-prompt">
        <Link to="/" aria-label="Watch Party Around India home">
          <img
            src={wwdcLogo}
            alt="WWDC 2025 logo"
            className="w-24 h-9 md:w-32 md:h-11 object-contain"
          />
        </Link>
        <div className="flex items-center gap-3">
          <HashLink
            to="/#register"
            className="hidden sm:inline-flex font-medium text-sm md:text-base hover:underline hover:decoration-[#FFC9F0] hover:[text-decoration-thickness:4px]"
          >
            All cities
          </HashLink>
          <a
            href={event.lumaUrl}
            className="text-sm md:text-base text-white bg-[#4884FF] font-medium px-4 md:px-6 py-2 border-2 border-[#0B2131] shadow-[-3px_3px_0_1px_#0B2131] hover:bg-[#366fd1] transition-colors duration-200"
          >
            Register
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 md:px-8 pb-24 overflow-x-hidden">
        <div className="grid lg:grid-cols-[1fr_380px] gap-8 lg:gap-12 items-start min-w-0">
          <section className="pt-4 md:pt-10 min-w-0">
            <p className="font-oliver uppercase text-xl md:text-2xl text-[#4B2828] mb-4">
              Watch Party Around India
            </p>
            <h1 className="font-black text-5xl md:text-7xl lg:text-7xl leading-none text-[#1F1F29] break-words">
              WWDC25 in {event.city}
            </h1>
            <p className="mt-6 max-w-2xl text-lg md:text-xl text-black/70 break-words">
              {event.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {event.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="max-w-full break-words bg-white border-2 border-[#0B2131] shadow-[-2px_2px_0_0_#0B2131] px-4 py-2 text-sm font-semibold"
                >
                  {highlight}
                </span>
              ))}
            </div>

            <div className="mt-12 grid md:grid-cols-2 gap-5 min-w-0">
              <div className="min-w-0 bg-white border-2 border-[#0B2131] p-5 shadow-[-4px_4px_0_0_#0B2131]">
                <p className="text-sm font-bold text-black/45 uppercase">
                  Date and time
                </p>
                <p className="mt-2 text-2xl font-bold">{event.date}</p>
                <p className="text-lg font-semibold text-black/65">
                  {event.time} IST
                </p>
              </div>
              <a
                href={event.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-w-0 bg-white border-2 border-[#0B2131] p-5 shadow-[-4px_4px_0_0_#0B2131] hover:bg-[#f6f6f6] transition-colors"
              >
                <p className="text-sm font-bold text-black/45 uppercase">
                  Location
                </p>
                <p className="mt-2 text-2xl font-bold">{event.location}</p>
                <p className="text-lg font-semibold text-black/65 break-words">
                  {event.venue}
                </p>
              </a>
            </div>

            <section className="mt-14" aria-labelledby="event-agenda-heading">
              <h2
                id="event-agenda-heading"
                className="font-bold text-3xl md:text-4xl"
              >
                What to expect
              </h2>
              <div className="mt-6 flex flex-col gap-4">
                {event.agenda.map((item) => (
                  <div
                    key={`${item.time}-${item.title}`}
                    className="grid sm:grid-cols-[140px_1fr] gap-3 min-w-0 bg-white/80 border-l-4 border-[#4884FF] p-4"
                  >
                    <p className="font-bold text-[#4884FF]">{item.time}</p>
                    <div>
                      <h3 className="font-bold text-xl">{item.title}</h3>
                      <p className="text-black/65">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </section>

          <aside className="min-w-0 w-full lg:sticky lg:top-8">
            <div
              className="rounded-3xl border-2 border-[#0B2131] shadow-[-6px_6px_0_0_#0B2131] overflow-hidden bg-white"
              aria-label={`${event.city} event registration card`}
            >
              <div
                className="min-h-56 p-6 flex flex-col justify-between text-white"
                style={gradientStyle(event)}
              >
                <div className="flex items-center justify-between gap-4">
                  <img
                    src={event.logo}
                    alt={`${event.chapterName} logo`}
                    className="w-14 h-14 rounded-full object-cover bg-white"
                  />
                  <span className="bg-black/80 px-3 py-1 rounded-md text-sm font-semibold">
                    {event.time}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-white/80">
                    {event.chapterName}
                  </p>
                  <h2 className="mt-1 text-3xl font-black">
                    {event.city} Watch Party
                  </h2>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start gap-3">
                  <img
                    src={locationPinLogo}
                    alt=""
                    aria-hidden="true"
                    className="w-5 h-5 mt-1"
                  />
                  <div>
                    <p className="font-bold">{event.venue}</p>
                    <p className="text-sm text-black/60">{event.address}</p>
                  </div>
                </div>

                <a
                  href={event.lumaUrl}
                  className="mt-6 flex items-center justify-center w-full rounded-lg bg-[#2A282F] text-white font-bold py-3 hover:bg-black transition-colors"
                >
                  Register on Luma
                </a>
                {event.sponsorName != null && event.sponsorLogo != null && (
                <div className="mt-6 border-t border-black/10 pt-5">
                  <p className="text-sm font-bold text-black/45 uppercase">
                    Venue partner
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <img
                      src={event.sponsorLogo}
                      alt={`${event.sponsorName} logo`}
                      className="h-10 w-auto rounded bg-white object-contain"
                    />
                    <p className="font-bold">{event.sponsorName}</p>
                  </div>
                </div>
                )}
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default CityEventPage;
