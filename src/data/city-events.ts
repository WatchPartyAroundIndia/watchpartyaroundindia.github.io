import { ahmedabadEvent } from "./city-events/ahmedabad";
import { bangaloreEvent } from "./city-events/bangalore";
import { chennaiEvent } from "./city-events/chennai";
import { delhiEvent } from "./city-events/delhi";
import { hyderabadEvent } from "./city-events/hyderabad";
import { kozhikodeEvent } from "./city-events/kozhikode";
import { mumbaiEvent } from "./city-events/mumbai";
import { suratEvent } from "./city-events/surat";
import { puneEvent } from "./city-events/pune";
import { nagpurEvent } from "./city-events/nagpur";
import { teamMembers } from "./team-members";
import type { CityEvent, CityEventTeamMember } from "./city-events/types";

export type { CityEvent, CityEventTeamMember } from "./city-events/types";

const baseCityEvents: CityEvent[] = [
  bangaloreEvent,
  mumbaiEvent,
  ahmedabadEvent,
  suratEvent,
  chennaiEvent,
  delhiEvent,
  hyderabadEvent,
  kozhikodeEvent,
  puneEvent,
  nagpurEvent
];

const buildCityProfiles = (event: CityEvent): CityEventTeamMember[] =>
  teamMembers.flatMap((member) =>
    (member.cityAssignments ?? [])
      .filter(
        (assignment) => assignment.city.trim().toLowerCase() === event.slug
      )
      .map((assignment) => {
        const kind = assignment.kind ?? "team";
        const baseTags = assignment.tags ?? [];

        return {
          id: member.id,
          name: member.name,
          image: member.photo,
          socialUrl: member.socialLink,
          role: assignment.role,
          kind,
          tags: [
            event.city,
            kind === "speaker" ? "Speaker" : "Team Member",
            assignment.role,
            ...baseTags,
          ],
          sessionTitle: assignment.sessionTitle,
          sessionDescription: assignment.sessionDescription,
        };
      })
  );

export const cityEvents: CityEvent[] = baseCityEvents.map((event) => {
  const profiles = buildCityProfiles(event);
  const teamMembersForCity = profiles.filter((profile) => profile.kind === "team");
  const speakersForCity = profiles.filter((profile) => profile.kind === "speaker");

  return {
    ...event,
    teamMembers: teamMembersForCity,
    speakers: speakersForCity,
  };
});

export interface VenueSponsor {
  sponsorId: number;
  name: string;
  description: string;
  logo: string;
  contact: string;
  website: string;
}

export const venueSponsors: VenueSponsor[] = cityEvents
  .filter((event): event is CityEvent & { sponsorName: string; sponsorLogo: string } => (
    event.sponsorName != null && event.sponsorLogo != null
  ))
  .map((event) => ({
    sponsorId: event.id,
    name: event.sponsorName,
    description: event.sponsorDescription ?? `Venue partner for ${event.chapterName}`,
    logo: event.sponsorLogo,
    contact: event.city,
    website: event.sponsorWebsite ?? "",
  }));

export const getCityEventBySlug = (slug?: string) => {
  if (!slug) {
    return undefined;
  }

  const normalizedSlug = slug.trim().toLowerCase();

  return cityEvents.find(
    (event) =>
      event.slug === normalizedSlug || event.aliases.includes(normalizedSlug)
  );
};
