import Image, { StaticImageData } from "next/image";
import SarahTeams from "/public/images/teams/Sarah.webp";
import DavidTeams from "/public/images/teams/David.webp";
import EmilyTeams from "/public/images/teams/Emily.webp";
import JohnTeams from "/public/images/teams/John.webp";

// Interface for Team Member
interface TeamMember {
  name: string;
  title: string;
  email: string;
  phone: string;
  image: StaticImageData;
  bio: string;
}

// Team Members Data
const teamMembers: TeamMember[] = [
  {
    name: "Sarah Amelia",
    title: "CEO & Co-Founder",
    email: "sarah@moneytree.com",
    phone: "(+62) xxx-xxxx-xxxx",
    image: SarahTeams,
    bio: "With over 15 years in finance, Sarah leads MoneyTree’s mission to transform personal finance, making it accessible for everyone.",
  },
  {
    name: "David Lee",
    title: "CTO & Co-Founder",
    email: "david@moneytree.com",
    phone: "(+62) xxx-xxxx-xxxx",
    image: DavidTeams,
    bio: "David is the tech visionary behind MoneyTree, dedicated to crafting a seamless user experience while tackling complex challenges.",
  },
  {
    name: "Emily Widjaja",
    title: "Chief Financial Officer",
    email: "emily@moneytree.com",
    phone: "(+62) xxx-xxxx-xxxx",
    image: EmilyTeams,
    bio: "Emily ensures MoneyTree and our clients achieve financial success through her extensive expertise and strategic oversight.",
  },
  {
    name: "John Evans",
    title: "Chief Marketing Officer",
    email: "john@moneytree.com",
    phone: "(+62) xxx-xxxx-xxxx",
    image: JohnTeams,
    bio: "John spearheads our marketing strategies, driving engagement and ensuring our message resonates with our community.",
  },
];

// TeamCardsFull Component
export function TeamCardsFull() {
  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
      {teamMembers.map((member) => (
        <div key={member.name} className={`p-6 rounded-lg shadow-lg transform transition-transform hover:scale-105 bg-black text-white`}>
          <Image
            src={member.image}
            alt={member.name}
            className="h-48 w-48 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
          />
          <h3 className="font-bold text-center">{member.name}</h3>
          <p className="text-sm text-custom-light-green text-center">{member.title}</p>
          <p className="mt-2 text-center">{member.bio}</p>
          <div className="mt-4 text-center">
            <p className="text-sm">Email: <a href={`mailto:${member.email}`} className="text-custom-light-green">{member.email}</a></p>
            <p className="text-sm">Phone: {member.phone}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TeamCardsFull;
