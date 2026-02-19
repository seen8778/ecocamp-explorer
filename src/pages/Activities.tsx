import { motion } from "framer-motion";
import Layout from "@/components/Layout";
import actPlanting from "@/assets/activity-planting.jpg";
import actWildlife from "@/assets/activity-wildlife.jpg";
import actCleanup from "@/assets/activity-cleanup.jpg";

const activities = [
  {
    img: actPlanting,
    title: "กิจกรรมปลูกต้นไม้",
    desc: "ร่วมกันปลูกต้นไม้ในพื้นที่ป่าเสื่อมโทรม เพื่อฟื้นฟูระบบนิเวศและเพิ่มพื้นที่สีเขียวให้กับชุมชน สร้างจิตสำนึกด้านการอนุรักษ์ป่าไม้",
  },
  {
    img: actWildlife,
    title: "สำรวจสัตว์ป่าและระบบนิเวศ",
    desc: "เรียนรู้เกี่ยวกับความหลากหลายทางชีวภาพ สำรวจนกและสัตว์ป่าริมน้ำ ศึกษาความสำคัญของห่วงโซ่อาหารในธรรมชาติ",
  },
  {
    img: actCleanup,
    title: "เก็บขยะชายหาด",
    desc: "จิตอาสาทำความสะอาดชายหาด เรียนรู้ผลกระทบของขยะพลาสติกต่อสัตว์ทะเล และวิธีลดการใช้พลาสติกในชีวิตประจำวัน",
  },
  {
    img: null,
    title: "กิจกรรมเดินป่าศึกษาธรรมชาติ",
    desc: "เดินสำรวจเส้นทางธรรมชาติ เรียนรู้พันธุ์ไม้ท้องถิ่น สมุนไพร และความสัมพันธ์ระหว่างพืชกับสัตว์ในป่า",
  },
  {
    img: null,
    title: "กิจกรรมทำฝายชะลอน้ำ",
    desc: "เรียนรู้และลงมือสร้างฝายชะลอน้ำ เพื่อช่วยรักษาความชุ่มชื้นให้กับผืนป่าและป้องกันการชะล้างหน้าดิน",
  },
  {
    img: null,
    title: "กิจกรรมรอบกองไฟ",
    desc: "กิจกรรมสันทนาการรอบกองไฟ แลกเปลี่ยนประสบการณ์ ร้องเพลง เล่นเกม และสร้างความสามัคคีในหมู่คณะ",
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
