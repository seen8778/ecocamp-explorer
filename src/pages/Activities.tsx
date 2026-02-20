import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import a from "@/assets/1.jpg";
import b from "@/assets/2.jpg";
import c from "@/assets/3.jpg";
import d from "@/assets/4.jpg";
import e from "@/assets/5.jpg";
import f from "@/assets/6.jpg";

const activities = [
  {
    img: a,
    title: "กิจกรรมเดินทางตามน้ำตกและแม่น้ำ",
    desc: "น้ำตกและแม่น้ำบริเวณชั้น 1 ของอุทยาน",
  },
  {
    img: b,
    title: "กิจกรรมเดินทางตามชั้นสองของน้ำตก",
    desc: "ทางเดินขึ้นชั้นสองของน้ำตก ณ อุทยานแห่งชาติเอราวัณ",
  },
  {
    img: d,
    title: "กิจกรรมการจดจำลักษณะต้นไม้ำในป่าขณะปิดตา",
    desc: "การจดจำลักษณะต้นไม้ในป่าขณะปิดตา",
  },
  {
    img: c,
    title: "กิจกรรมเดินป่าศึกษาธรรมชาติ",
    desc: "เดินสำรวจเส้นทางธรรมชาติ เรียนรู้พันธุ์ไม้ท้องถิ่น สมุนไพร และความสัมพันธ์ระหว่างพืชกับสัตว์ในป่า",
  },
  {
    img: e,
    title: "กิจกรรมดูนกเอี้ยงถ้ำ ในช่วงเช้า ณ น้ำตกเอราวัณ",
    desc: "ภาพของนกเอี้ยงถ้ำ ในช่วงเช้า ณ น้ำตกเอราวัณ",
  },
  {
    img: f,
    title: "กิจกรรมการทำโป่งเทียม",
    desc: "ขุดดิน เทน้ำปลา ใส่เกลือให้สัตว์ป่ามากินเป็นสารอาหาร",
  },
];

const Activities = () => (
  <Layout>
    {/* Header */}
    <section className="nature-gradient py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary-foreground"
        >
          กิจกรรมทั้งหมด
        </motion.h1>
        <p className="mt-3 text-primary-foreground/80">กิจกรรมที่จัดขึ้นในค่ายอนุรักษ์สิ่งแวดล้อม</p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-12">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {activities.map((a, i) => (
          <motion.div
            key={a.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
          >
            <div className="aspect-video overflow-hidden bg-muted">
              {a.img ? (
                <img
                  src={a.img}
                  alt={a.title}
                  className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-muted-foreground">
                  รูปภาพกิจกรรม (ใส่ทีหลัง)
                </div>
              )}
            </div>
            <div className="p-5">
              <h3 className="mb-2 text-lg font-semibold text-card-foreground">{a.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{a.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Activities;
