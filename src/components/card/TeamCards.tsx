import Image, { StaticImageData } from "next/image";
import SarahTeams from "/public/images/teams/Sarah.webp";
import DavidTeams from "/public/images/teams/David.webp";
import EmilyTeams from "/public/images/teams/Emily.webp";
import JohnTeams from "/public/images/teams/John.webp";

// Interface for Team Member
interface TeamMember {
  name: string;
  title: string;
  image: StaticImageData;
  bio: string;
}

// Team Members Data
const teamMembers: TeamMember[] = [
  {
    name: "Sarah Amelia",
    title: "CEO & Co-Founder",
    image: SarahTeams,
    bio: "With over 15 years in finance, Sarah leads MoneyTree’s mission to transform personal finance, making it accessible for everyone.",
  },
  {
    name: "David Lee",
    title: "CTO & Co-Founder",
    image: DavidTeams,
    bio: "David is the tech visionary behind MoneyTree, dedicated to crafting a seamless user experience while tackling complex challenges.",
  },
  {
    name: "Emily Widjaja",
    title: "Chief Financial Officer",
    image: EmilyTeams,
    bio: "Emily ensures MoneyTree and our clients achieve financial success through her extensive expertise and strategic oversight.",
  },
  {
    name: "John Evans",
    title: "Chief Marketing Officer",
    image: JohnTeams,
    bio: "John spearheads our marketing strategies, driving engagement and ensuring our message resonates with our community.",
  },
];

// TeamCards Component
export function TeamCards() {
  return (
    <section className="bg-white rounded-lg shadow-lg p-6 mb-8 border border-custom-dark-green">
      <h2 className="text-3xl font-semibold mb-4 text-black">Meet Our Team</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {teamMembers.map((member) => (
          <div key={member.name} className="bg-black p-4 rounded-lg shadow-lg transform transition-transform hover:scale-105">
            <Image
              src={member.image}
              alt={member.name}
              className="h-36 w-36 rounded-full mx-auto mb-4 border-4 border-white shadow-lg"
            />
            <h3 className="font-bold text-white">{member.name}</h3>
            <p className="text-sm text-custom-light-green">{member.title}</p>
            <p className="text-white mt-2">{member.bio}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default TeamCards;