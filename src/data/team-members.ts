import adithyaBalaji from "../assets/2025/team/Adithya Balaji.jpeg";
import akankshaSharma from "../assets/2026/team/AkankshaS.jpeg";
import akshayNjarangal from "../assets/2025/team/Akshay Njarangal.jpeg";
import akshayPakanati from "../assets/2025/team/Akshay Pakanati.png";
import amitSamant from "../assets/2025/team/Amit Samant.png";
import anirudhJwala from "../assets/2025/team/Anirudh Jwala.png";
import arihantMarwaha from "../assets/2026/team/ArihanrM.jpg";
import arpitaG from "../assets/2026/team/ArpitaG.jpeg";
import ayushSingh from "../assets/2025/team/Ayush Singh.png";
import bhavinVaghela from "../assets/2025/team/Bhavin Vaghela.jpg";
import bhumikaPatel from "../assets/2025/team/Bhumika Patel.jpeg";
import devanshi from "../assets/2025/team/Devanshi.png";
import dishantN from "../assets/2026/team/DishantN.jpeg";
import drNikhilMangrulkar from "../assets/2026/team/Dr. Nikhil.jpeg";
import gokulB from "../assets/2025/team/Gokul B.jpeg";
import jigarPatel from "../assets/2026/team/Jigar-Patel.jpeg";
import kajalSheth from "../assets/2025/team/Kajal Sheth.png";
import krishnaPatidar from "../assets/2026/team/krishna-patidar.jpeg";
import krishnaPermi from "../assets/2026/team/KrishnaPermi.png";
import maninderSingh from "../assets/2026/team/ManinderM.jpeg";
import nayyanMujadiya from "../assets/2025/team/Nayyan Mujadiya.jpeg";
import nikhilNigade from "../assets/2026/team/NikhilN.jpg";
import nishantDesai from "../assets/2025/team/Nishant Desai.png";
import pinakRokde from "../assets/2026/team/PinakR.png";
import raghavSethi from "../assets/2025/team/Raghav Sethi.png";
import rajRaval from "../assets/2025/team/Raj Raval.png";
import rangaReddy from "../assets/2025/team/Ranga Reddy.png";
import ratneshJain from "../assets/2026/team/RatneshJ.jpeg";
import rimeshJotaniya from "../assets/2026/team/RimeshJ.jpeg";
import rizwanAhmed from "../assets/2026/team/RizwanA.jpeg";
import rushitRakhasiya from "../assets/2025/team/Rushit Rakhasiya.png";
import sejalK from "../assets/2026/team/SejalK.jpeg";
import shamilRoshan from "../assets/2025/team/Shamil Roshan.jpeg";
import vedangKulkarni from "../assets/2026/team/VedangK.png";
import yogeshSingh from "../assets/2026/team/YogeshS.jpg";

export interface TeamMember {
  id: number;
  name: string;
  socialLink: string;
  photo: string;
  backgroundColour: string;
  connectWithTeamOrder?: number;
  cityAssignments?: CityAssignment[];
}

export interface CityAssignment {
  city: string;
  role: string;
  kind?: "team" | "speaker";
  tags?: string[];
  sessionTitle?: string;
  sessionDescription?: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    socialLink: "https://www.linkedin.com/in/fuglyab",
    name: "Adithya Balaji",
    photo: adithyaBalaji,
    backgroundColour: "#FFB069",
    connectWithTeamOrder: 1,
    cityAssignments: [{ city: "chennai", role: "City Lead" }],
  },
  {
    id: 2,
    socialLink: "https://www.linkedin.com/in/akanksharmaa/",
    name: "Akanksha Sharma",
    photo: akankshaSharma,
    backgroundColour: "#FFE5F8",
    connectWithTeamOrder: 2,
    cityAssignments: [{ city: "mumbai", role: "Organizer" }],
  },
  {
    id: 3,
    socialLink: "https://www.linkedin.com/in/akshay-njarangal/",
    name: "Akshay Njarangal",
    photo: akshayNjarangal,
    backgroundColour: "#f0f0f0",
    cityAssignments: [{ city: "nagpur", role: "Organizer" }],
  },
  {
    id: 4,
    socialLink: "https://www.linkedin.com/in/akshaypakanati/",
    name: "Akshay Pakanati",
    photo: akshayPakanati,
    backgroundColour: "#A6CCFA",
    connectWithTeamOrder: 3,
    cityAssignments: [
      { city: "chennai", role: "Organizer" },
      { city: "hyderabad", role: "Organizer" },
    ],
  },
  {
    id: 5,
    socialLink: "https://www.linkedin.com/in/amitsamant-dev",
    name: "Amit Samant",
    photo: amitSamant,
    backgroundColour: "#FFE5F8",
    connectWithTeamOrder: 4,
    cityAssignments: [{ city: "bangalore", role: "City Lead" }],
  },
  {
    id: 6,
    socialLink: "https://x.com/nirudhuuu",
    name: "Anirudh Jwala",
    photo: anirudhJwala,
    backgroundColour: "#e5d5bd",
    cityAssignments: [{ city: "hyderabad", role: "Organizer" }],
  },
  {
    id: 7,
    socialLink: "http://www.linkedin.com/in/ayush21082",
    name: "Ayush Singh",
    photo: ayushSingh,
    backgroundColour: "#fff3ea",
    connectWithTeamOrder: 5,
    cityAssignments: [{ city: "delhi", role: "City Lead" }],
  },
  {
    id: 8,
    socialLink: "https://www.linkedin.com/in/bhavin-vaghela",
    name: "Bhavin Vaghela",
    photo: bhavinVaghela,
    backgroundColour: "#A6CCFA",
    connectWithTeamOrder: 6,
    cityAssignments: [{ city: "ahmedabad", role: "City Lead" }],
  },
  {
    id: 9,
    socialLink: "https://www.linkedin.com/in/bhumika-ios",
    name: "Bhumika Patel",
    photo: bhumikaPatel,
    backgroundColour: "#FF69E1",
    connectWithTeamOrder: 7,
  },
  {
    id: 10,
    socialLink: "https://www.linkedin.com/in/devanshimodha/",
    name: "Devanshi",
    photo: devanshi,
    backgroundColour: "#FF69E1",
    cityAssignments: [{ city: "nagpur", role: "Organizer" }],
  },
  {
    id: 11,
    socialLink: "https://www.linkedin.com/in/nikhil-mangrulkar-ph-d-998b1567/",
    name: "Dr. Nikhil Mangrulkar",
    photo: drNikhilMangrulkar,
    backgroundColour: "#E8D5FF",
    connectWithTeamOrder: 8,
    cityAssignments: [{ city: "delhi", role: "Organizer" }],
  },
  {
    id: 12,
    socialLink: "https://www.linkedin.com/in/gokul-bvb",
    name: "Gokul B",
    photo: gokulB,
    backgroundColour: "#D6D6D6",
    connectWithTeamOrder: 9,
    cityAssignments: [
      { city: "bangalore", role: "Organizer" },
      { city: "kozhikode", role: "City Lead" },
    ],
  },
  {
    id: 13,
    socialLink: "https://www.linkedin.com/in/kajal-sheth",
    name: "Kajal Sheth",
    photo: kajalSheth,
    backgroundColour: "#FFDEC0",
    connectWithTeamOrder: 10,
    cityAssignments: [{ city: "ahmedabad", role: "Organizer" }],
  },
  {
    id: 14,
    socialLink: "https://www.linkedin.com/in/krishna-rp/",
    name: "Krishna Patidar",
    photo: krishnaPatidar,
    backgroundColour: "#C9E4FF",
    connectWithTeamOrder: 11,
    cityAssignments: [{ city: "nagpur", role: "City Lead" }],
  },
  {
    id: 15,
    socialLink: "https://www.linkedin.com/in/krishnapermi/",
    name: "Krishna Permi",
    photo: krishnaPermi,
    backgroundColour: "#B8E8D0",
    connectWithTeamOrder: 12,
    cityAssignments: [{ city: "kozhikode", role: "Organizer" }],
  },
  {
    id: 16,
    socialLink: "https://www.linkedin.com/in/manindersinghh",
    name: "Maninder Singh",
    photo: maninderSingh,
    backgroundColour: "#ecd908",
    connectWithTeamOrder: 26,
    cityAssignments: [{ city: "chennai", role: "Organizer" }],
  },
  {
    id: 17,
    socialLink: "https://www.linkedin.com/in/nayyanmujadiya/",
    name: "Nayyan Mujadiya",
    photo: nayyanMujadiya,
    backgroundColour: "#FFE5F8",
    connectWithTeamOrder: 13,
    cityAssignments: [{ city: "bangalore", role: "Organizer" }],
  },
  {
    id: 18,
    socialLink: "https://www.linkedin.com/in/dezinezync/",
    name: "Nikhil Nigade",
    photo: nikhilNigade,
    backgroundColour: "#f1ae5c",
    connectWithTeamOrder: 14,
    cityAssignments: [{ city: "pune", role: "Organizer" }],
  },
  {
    id: 19,
    socialLink: "https://www.linkedin.com/in/nishantdesai1/",
    name: "Nishant Desai",
    photo: nishantDesai,
    backgroundColour: "#FFB069",
    connectWithTeamOrder: 15,
    cityAssignments: [{ city: "delhi", role: "Organizer" }],
  },
  {
    id: 20,
    socialLink: "https://www.linkedin.com/in/pinak-rokde-42a9a0292/",
    name: "Pinak Rokde",
    photo: pinakRokde,
    backgroundColour: "#FFD4A8",
    connectWithTeamOrder: 16,
    cityAssignments: [{ city: "pune", role: "City Lead" }],
  },
  {
    id: 21,
    socialLink: "https://www.linkedin.com/in/sforsethi/",
    name: "Raghav Sethi",
    photo: raghavSethi,
    backgroundColour: "#FFDEC0",
    connectWithTeamOrder: 17,
  },
  {
    id: 22,
    socialLink: "https://www.linkedin.com/in/rajhraval/",
    name: "Raj Raval",
    photo: rajRaval,
    backgroundColour: "#FFDEC0",
    connectWithTeamOrder: 18,
    cityAssignments: [{ city: "mumbai", role: "Organizer" }],
  },
  {
    id: 23,
    socialLink: "https://www.linkedin.com/in/irangareddy/",
    name: "Ranga Reddy",
    photo: rangaReddy,
    backgroundColour: "#dee6f1",
    connectWithTeamOrder: 19,
    cityAssignments: [{ city: "hyderabad", role: "City Lead" }],
  },
  {
    id: 24,
    socialLink: "https://www.linkedin.com/in/ratnesh-jain-7a2270146/",
    name: "Ratnesh Jain",
    photo: ratneshJain,
    backgroundColour: "#D4E7FF",
    connectWithTeamOrder: 20,
    cityAssignments: [{ city: "surat", role: "City Lead" }],
  },
  {
    id: 25,
    socialLink: "https://www.linkedin.com/in/recursiveswift//",
    name: "Rimesh Jotaniya",
    photo: rimeshJotaniya,
    backgroundColour: "#f1ae5c",
    connectWithTeamOrder: 21,
    cityAssignments: [{ city: "surat", role: "Organizer" }],
  },
  {
    id: 26,
    socialLink: "https://www.linkedin.com/in/rizwan95/",
    name: "Rizwan Ahmed",
    photo: rizwanAhmed,
    backgroundColour: "#FFC0CB",
    connectWithTeamOrder: 22,
    cityAssignments: [{ city: "surat", role: "Organizer" }],
  },
  {
    id: 27,
    socialLink: "https://www.linkedin.com/in/rushit-r-757aa0167/",
    name: "Rushit Rakhasiya",
    photo: rushitRakhasiya,
    backgroundColour: "#BEFF93",
    connectWithTeamOrder: 23,
    cityAssignments: [{ city: "ahmedabad", role: "Organizer" }],
  },
  {
    id: 28,
    socialLink: "http://linkedin.com/in/shamil-roshan",
    name: "Shamil Roshan",
    photo: shamilRoshan,
    backgroundColour: "#A6CCFA",
  },
  {
    id: 29,
    socialLink: "https://www.linkedin.com/in/vedang-kulkarni-vk18/",
    name: "Vedang Kulkarni",
    photo: vedangKulkarni,
    backgroundColour: "#FFDEC0",
    connectWithTeamOrder: 24,
    cityAssignments: [{ city: "pune", role: "Organizer" }],
  },
  {
    id: 30,
    socialLink: "https://www.linkedin.com/in/yogeshsingh2810/",
    name: "Yogesh Singh",
    photo: yogeshSingh,
    backgroundColour: "#BEFF93",
    connectWithTeamOrder: 25,
    cityAssignments: [{ city: "mumbai", role: "City Lead" }],
  },
  {
    id: 31,
    socialLink: "https://www.linkedin.com/in/arihant-marwaha-855211227/",
    name: "Arihant Marwaha",
    photo: arihantMarwaha,
    backgroundColour: "#ef1616",
    connectWithTeamOrder: 27,
  },
  {
    id: 33,
    socialLink: "https://www.linkedin.com/in/sejallkhanna/",
    name: "Sejal Khanna",
    photo: sejalK,
    backgroundColour: "#d617a4",
    connectWithTeamOrder: 28,
  },
  {
    id: 34,
    socialLink: "https://www.linkedin.com/in/arpita-gupta01/",
    name: "Arpita Gupta",
    photo: arpitaG,
    backgroundColour: "#f3b8e3",
    connectWithTeamOrder: 29,
  },
  {
    id: 35,
    socialLink: "https://www.linkedin.com/in/dishantios/",
    name: "Dishant Nagpal",
    photo: dishantN,
    backgroundColour: "#C9E4FF",
    connectWithTeamOrder: 30,
  },
  {
    id: 36,
    socialLink: "https://www.linkedin.com/in/jigar24patel/",
    name: "JIGAR PATEL",
    photo: jigarPatel,
    backgroundColour: "#000000",
    connectWithTeamOrder: 31,
  },
];

export const connectWithTeamMembers = teamMembers
  .filter((member) => member.connectWithTeamOrder != null)
  .sort(
    (first, second) =>
      (first.connectWithTeamOrder ?? 0) - (second.connectWithTeamOrder ?? 0)
  );
