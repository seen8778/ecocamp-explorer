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
    transition: { delay: i * 0.15, duration: 0.5 }
  })
};

const activities = [
  { img: actPlanting, title: "กิจกรรมปลูกต้นไม้", desc: "ร่วมกันปลูกต้นไม้เพื่อฟื้นฟูระบบนิเวศ" },
  { img: actWildlife, title: "สำรวจสัตว์ป่า", desc: "เรียนรู้ความหลากหลายทางชีวภาพ" },
  { img: actCleanup, title: "เก็บขยะอนุรักษ์", desc: "จิตอาสาทำความสะอาดพื้นที่ธรรมชาติ" },
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[70vh] min-h-[400px] overflow-hidden">
      <img src={heroImg} alt="ภาพหน้าปกค่าย" className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <div className="mx-auto mb-4 flex h-20 w-20 items-center justify-center overflow-hidden rounded-2xl bg-primary-foreground/10 backdrop-blur-sm ring-1 ring-primary-foreground/30">
            <img src={logo} alt="โลโก้กลุ่ม" className="h-full w-full object-contain p-2" />
          </div>
          <h1 className="mb-2 text-4xl font-bold text-primary-foreground md:text-6xl">Green Future Camp</h1>
          <p className="mb-6 text-lg text-primary-foreground/80 md:text-xl">ณ น้ำตกเอราวัณ จังหวัดกาญจนบุรี</p>
          <Link to="/activities" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105">
            เข้าหน้ากิจกรรม <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* Activities preview */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-8 text-center text-3xl font-bold text-foreground">กิจกรรมในค่าย</h2>
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
                <img src={a.img} alt={a.title} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
              </div>
              <div className="p-4">
                <h3 className="mb-1 text-lg font-semibold text-card-foreground">{a.title}</h3>
                <p className="text-sm text-muted-foreground">{a.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link to="/activities" className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition-transform hover:scale-105">
            ดูกิจกรรมทั้งหมด <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  </Layout>
);

export default Index;
