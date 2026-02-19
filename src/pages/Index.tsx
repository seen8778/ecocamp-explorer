import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { TreePine, Leaf, Users, ArrowRight } from "lucide-react";
import Layout from "@/components/Layout";
import logo from "@/assets/logo.png";
import heroImg from "@/assets/hero-camp.jpg";
import actPlanting from "@/assets/activity-planting.jpg";
import actWildlife from "@/assets/activity-wildlife.jpg";
import actCleanup from "@/assets/activity-cleanup.jpg";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.5 },
  }),
};

const highlights = [
  {
    icon: TreePine,
    title: "เรียนรู้ผ่านธรรมชาติ",
    desc: "กิจกรรมภาคสนามที่ช่วยให้เข้าใจระบบนิเวศ ป่าไม้ และการอยู่ร่วมกับสิ่งแวดล้อมอย่างยั่งยืน",
  },
  {
    icon: Leaf,
    title: "ลงมือทำจริง",
    desc: "ฝึกปฏิบัติทั้งการปลูกต้นไม้ เก็บขยะ และกิจกรรมอนุรักษ์ที่ทุกคนมีส่วนร่วมได้",
  },
  {
    icon: Users,
    title: "สร้างพลังทีม",
    desc: "ส่งเสริมความสามัคคี ทักษะการสื่อสาร และความรับผิดชอบต่อสังคมผ่านการทำงานเป็นกลุ่ม",
  },
];

const activities = [
  {
    img: actPlanting,
    title: "ปลูกป่าฟื้นฟูพื้นที่สีเขียว",
    desc: "ร่วมปลูกต้นไม้ในพื้นที่เสื่อมโทรม พร้อมเรียนรู้การดูแลต้นกล้าให้เติบโตอย่างยั่งยืน",
  },
  {
    img: actWildlife,
    title: "สำรวจความหลากหลายทางชีวภาพ",
    desc: "ศึกษาสัตว์ป่าและพืชท้องถิ่นตามเส้นทางธรรมชาติ พร้อมเก็บข้อมูลพื้นฐานด้านนิเวศ",
  },
  {
    img: actCleanup,
    title: "เก็บขยะชายหาดเพื่อทะเลสะอาด",
    desc: "กิจกรรมจิตอาสาที่ช่วยลดขยะพลาสติก และสร้างความตระหนักเรื่องการจัดการขยะอย่างถูกวิธี",
  },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[70vh] min-h-[400px] overflow-hidden">
      <img
        src={heroImg}
        alt="ภาพหน้าปกตัวอย่าง"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-primary-foreground/10 backdrop-blur-sm ring-1 ring-primary-foreground/30">
            <img
              src={logo}
              alt="โลโก้กลุ่ม"
              className="h-full w-full object-contain p-2"
            />
          </div>

          <h1 className="mb-2 text-4xl font-bold text-primary-foreground md:text-6xl">
            Green Future Camp M.5/8
          </h1>

          <p className="mb-6 text-lg text-primary-foreground/80 md:text-xl">
            เว็บไซต์ประชาสัมพันธ์ค่ายอนุรักษ์สิ่งแวดล้อมของนักเรียน เพื่อแบ่งปันกิจกรรม ความรู้ และแรงบันดาลใจในการดูแลโลก
          </p>

          <Link
            to="/activities"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105"
          >
            ดูกิจกรรมทั้งหมด <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Highlights */}
    <section className="container mx-auto px-4 py-16">
        <h2 className="mb-10 text-center text-3xl font-bold text-foreground">
          จุดเด่นของค่าย
        </h2>

      <div className="grid gap-6 md:grid-cols-3">
        {highlights.map((item, i) => (
          <motion.div
            key={item.title}
            custom={i}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="rounded-xl border border-border bg-card p-6 text-center shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary">
              <item.icon className="h-7 w-7 text-primary" />
            </div>

            <h3 className="mb-2 text-lg font-semibold text-card-foreground">
              {item.title}
            </h3>

            <p className="text-sm text-muted-foreground">
              {item.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>

    {/* Activities preview */}
    <section className="section-fade py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-10 text-center text-3xl font-bold text-foreground">
          ตัวอย่างกิจกรรมยอดนิยม
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          {activities.map((a, i) => (
            <motion.div
              key={a.title}
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={a.img}
                  alt="ภาพกิจกรรมตัวอย่าง"
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div className="p-5">
                <h3 className="mb-1 text-lg font-semibold text-card-foreground">
                  {a.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {a.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            to="/activities"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:scale-105"
          >
            ดูรายละเอียดเพิ่มเติม <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
