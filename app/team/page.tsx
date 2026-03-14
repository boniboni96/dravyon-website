"use client";

import { motion, type Variants } from "framer-motion";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const stagger: Variants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

type Member = {
  name: string;
  role: string;
  img: string;
  instagram?: string;
  whatsapp?: string;
};

function SectionHeading({ title }: { title: string }) {
  return (
    <div style={{ textAlign: "center", margin: "70px 0 40px" }}>
      <h2
        style={{
          fontSize: "clamp(18px, 3vw, 26px)",
          fontWeight: 800,
          letterSpacing: 3,
          textTransform: "uppercase",
          background: "linear-gradient(90deg, #ff512f, #ff7a18, #ffd200)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          display: "inline-block",
        }}
      >
        {title}
      </h2>
      <div
        style={{
          height: 2,
          width: 60,
          background: "linear-gradient(90deg, #ff512f, #ff7a18)",
          margin: "10px auto 0",
          borderRadius: 2,
        }}
      />
    </div>
  );
}

function TeamCard({ member }: { member: Member }) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -8, boxShadow: "0 0 30px rgba(255,122,24,0.5)" }}
      style={{
        background: "#111",
        borderRadius: 16,
        overflow: "hidden",
        border: "1px solid rgba(255,122,24,0.2)",
        width: 220,
        flexShrink: 0,
      }}
    >
      <img
        src={member.img}
        alt={member.name}
        width={220}
        height={250}
        style={{
          width: "100%",
          height: 250,
          objectFit: "cover",
          objectPosition: "top",
          display: "block",
        }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).src = "/logo.png";
        }}
      />
      <div style={{ padding: "14px 12px 16px", textAlign: "center" }}>
        <h3
          style={{
            fontSize: 15,
            fontWeight: 700,
            marginBottom: 4,
            background: "linear-gradient(90deg, #ff512f, #ff7a18, #ffd200)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          {member.name}
        </h3>
        <p style={{ color: "#555", fontSize: 11, marginBottom: 10, letterSpacing: 1, textTransform: "uppercase" }}>
          {member.role}
        </p>
        <div style={{ display: "flex", justifyContent: "center", gap: 14 }}>
          {member.instagram && (
            <a
              href={member.instagram}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#888", fontSize: 17, transition: "color 0.3s" }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                (e.currentTarget.style.color = "#ff7a18")
              }
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                (e.currentTarget.style.color = "#888")
              }
            >
              <FaInstagram />
            </a>
          )}
          {member.whatsapp && (
            <a
              href={member.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "#888", fontSize: 17, transition: "color 0.3s" }}
              onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) =>
                (e.currentTarget.style.color = "#25d366")
              }
              onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) =>
                (e.currentTarget.style.color = "#888")
              }
            >
              <FaWhatsapp />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}

function TeamGrid({ members }: { members: Member[] }) {
  return (
    <motion.div
      variants={stagger}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: 24,
      }}
    >
      {members.map((m, i) => (
        <TeamCard key={m.name + i} member={m} />
      ))}
    </motion.div>
  );
}

const faculty: Member[] = [
  {
    name: "Faculty Name 1",
    role: "Faculty Coordinator",
    img: "/team/faculty1.jpg",
    instagram: "https://instagram.com/",
    whatsapp: "https://wa.me/91xxxxxxxxxx",
  },
  {
    name: "Faculty Name 2",
    role: "Faculty Coordinator",
    img: "/team/faculty2.jpg",
    instagram: "https://instagram.com/",
    whatsapp: "https://wa.me/91xxxxxxxxxx",
  },
];

const organizers1: Member[] = [
  {
    name: "R.S.Harshavarthan",
    role: "Organizer",
    img: "/team/organizer1.jpg",
    instagram: "https://www.instagram.com/hahaharshaaa._/",
    whatsapp: "https://wa.me/919884054678",
  },
  {
    name: "Renganathan",
    role: "Organizer",
    img: "/team/organizer2.jpg",
    instagram: "https://www.instagram.com/just.ranga._.x7/",
    whatsapp: "https://wa.me/918122360962",
  },
];

const organizers2: Member[] = [
  {
    name: "Rudhran",
    role: "Organizer",
    img: "/team/organizer3.jpg",
    instagram: "https://www.instagram.com/rxdhran_29/",
    whatsapp: "https://wa.me/918925512356",
  },
  {
    name: "Rahul",
    role: "Organizer",
    img: "/team/faculty1.jpg",
    instagram: "https://instagram.com/",
    whatsapp: "https://wa.me/918668079354",
  },
];

const financialHeads: Member[] = [
  {
    name: "Benjamin",
    role: "Financial Head",
    img: "/team/financehead1.jpg",
    instagram: "https://www.instagram.com/real_benjamin_danish/",
    whatsapp: "https://wa.me/919514418999",
  },
  {
    name: "Harin",
    role: "Financial Head",
    img: "/team/harin.jpg",
    instagram: "https://www.instagram.com/im_hari_5092/",
    whatsapp: "https://wa.me/918870422416",
  },
];

const techHeads: Member[] = [
  {
    name: "Preethiksha",
    role: "Technical Head",
    img: "/team/techhead1.jpg",
    instagram: "https://www.instagram.com/preethiksha__._/",
    whatsapp: "https://wa.me/918754488231",
  },
  {
    name: "Suhail",
    role: "Technical Head",
    img: "/team/faculty1.jpg",
    instagram: "https://instagram.com/",
    whatsapp: "https://wa.me/919876543210",
  },
];

const nonTechHeads: Member[] = [
  {
    name: "Benita Johnson",
    role: "Non Technical Head",
    img: "/team/nontechhead1.jpg",
    instagram: "https://www.instagram.com/benita_johnson_28/",
    whatsapp: "https://wa.me/918428932593",
  },
  {
    name: "Tamizharasi",
    role: "Non Technical Head",
    img: "/team/nontechhead2.jpg",
    instagram: "https://instagram.com/",
    whatsapp: "https://wa.me/918754599157",
  },
];

const sportsHeads: Member[] = [
  {
    name: "Rahul",
    role: "Sports Head",
    img: "/team/faculty1.jpg",
    instagram: "https://instagram.com/",
    whatsapp: "https://wa.me/919876543210",
  },
  {
    name: "Rahul",
    role: "Sports Head",
    img: "/team/faculty1.jpg",
    instagram: "https://instagram.com/",
    whatsapp: "https://wa.me/919876543210",
  },
  {
    name: "Rahul",
    role: "Sports Head",
    img: "/team/faculty1.jpg",
    instagram: "https://instagram.com/",
    whatsapp: "https://wa.me/919876543210",
  },
];

const mediaHead: Member[] = [
  {
    name: "Kumaran",
    role: "Media Head",
    img: "/team/faculty1.jpg",
    instagram: "https://instagram.com/",
    whatsapp: "https://wa.me/917305875591",
  },
];

const workshopHead: Member[] = [
  {
    name: "Suraj",
    role: "Workshop Head",
    img: "/team/workshophead.jpg",
    instagram: "https://instagram.com/",
    whatsapp: "https://wa.me/919150320989",
  },
];

export default function Team() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#050505",
        paddingTop: 100,
        paddingBottom: 100,
        overflowX: "hidden",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{ textAlign: "center", marginBottom: 10, padding: "0 5%" }}
      >
        <p
          style={{
            color: "#ff7a18",
            letterSpacing: 4,
            fontSize: 12,
            marginBottom: 10,
            textTransform: "uppercase",
          }}
        >
          The People Behind It
        </p>
        <h1
          style={{
            fontSize: "clamp(32px, 6vw, 60px)",
            fontWeight: 900,
            background: "linear-gradient(90deg, #ff512f, #ff7a18, #ffd200)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            letterSpacing: 3,
          }}
        >
          Our Team
        </h1>
        <p style={{ color: "#555", fontSize: 15, marginTop: 10 }}>
          The minds and hearts powering DRAVYON 2K26
        </p>
      </motion.div>

      <div style={{ padding: "0 5%", maxWidth: 1100, margin: "0 auto" }}>

        <SectionHeading title="Faculty Coordinators" />
        <TeamGrid members={faculty} />

        <SectionHeading title="Organizers" />
        <TeamGrid members={organizers1} />
        <div style={{ marginTop: 24 }}>
          <TeamGrid members={organizers2} />
        </div>

        <SectionHeading title="Financial Heads" />
        <TeamGrid members={financialHeads} />

        <SectionHeading title="Technical Heads" />
        <TeamGrid members={techHeads} />

        <SectionHeading title="Non Technical Heads" />
        <TeamGrid members={nonTechHeads} />

        <SectionHeading title="Sports Heads" />
        <TeamGrid members={sportsHeads} />

        <SectionHeading title="Media Head" />
        <TeamGrid members={mediaHead} />

        <SectionHeading title="Workshop Head" />
        <TeamGrid members={workshopHead} />

      </div>
    </div>
  );
}