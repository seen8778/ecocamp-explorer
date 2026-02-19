import { motion } from "framer-motion";
import { MapPin, Sun, Droplets, Mountain, Camera, Star } from "lucide-react";
import Layout from "@/components/Layout";
import campScenery from "@/assets/camp-scenery.jpg";

const poi = [
  { icon: Mountain, title: "เส้นทางเดินป่า", text: "เส้นทางศึกษาธรรมชาติของที่นี่มีระยะทางประมาณ 1.5–2 กิโลเมตร ผ่านป่าไม้ร่มรื่นและสะพานไม้ ผู้เข้าค่ายสามารถเรียนรู้เรื่องชนิดของพืชพรรณ ป่าเบญจพรรณ ระบบรากไม้ และความสัมพันธ์ของสิ่งมีชีวิตในระบบนิเวศ เหมาะสำหรับกิจกรรมฐานเรียนรู้หรือทำแบบบันทึกภาคสนาม" },
  { icon: Droplets, title: "น้ำตกและลำธาร", text: "น้ำตกเอราวัณมีทั้งหมด 7 ชั้น แต่ละชั้นมีแอ่งน้ำสีฟ้าเขียวมรกตใสสะอาด สามารถใช้เป็นจุดศึกษาคุณภาพน้ำ การไหลของน้ำ และการเกิดชั้นหินปูนได้ ผู้เข้าค่ายสามารถสังเกตปลาในลำธารและเรียนรู้ความหลากหลายทางชีวภาพของสัตว์น้ำจืด" },
  { icon: Sun, title: "จุดชมวิว", text: "บริเวณชั้นบนของน้ำตกสามารถมองเห็นแนวป่าและภูเขาโดยรอบ เหมาะสำหรับกิจกรรมสะท้อนความคิด หรือกิจกรรมเขียนบันทึกความประทับใจเกี่ยวกับธรรมชาติ ช่วยสร้างจิตสำนึกด้านการอนุรักษ์" },
  { icon: Camera, title: "จุดถ่ายรูป", text: "แอ่งน้ำสีมรกต สะพานไม้กลางป่า และลำธารใสสะอาด เป็นจุดถ่ายภาพยอดนิยม ภาพที่ได้สะท้อนความงดงามของธรรมชาติ และสามารถนำไปใช้ประกอบรายงานหรือจัดนิทรรศการหลังจบค่ายได้" },
];

const CampInfo = () => (
  <Layout>
    {/* Hero */}
    <section className="relative h-[40vh] min-h-[280px] overflow-hidden">
      <img src={campScenery} alt="ทิวทัศน์ค่าย" className="absolute inset-0 h-full w-full object-cover" />
      <div className="hero-overlay absolute inset-0" />
      <div className="relative z-10 flex h-full items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary-foreground md:text-5xl"
        >
          แนะนำค่าย
        </motion.h1>
      </div>
    </section>

    {/* Info */}
    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 rounded-xl border border-border bg-card p-8 shadow-sm"
        >
          <div className="mb-4 flex items-center gap-2 text-primary">
            <MapPin className="h-5 w-5" />
            <span className="font-semibold">สถานที่จัดค่าย</span>
          </div>
          <p className="leading-relaxed text-muted-foreground">
            ค่ายเยาวชนอนุรักษ์ธรรมชาติ ณ น้ำตกเอราวัณ ค่ายนี้จัดขึ้นเพื่อให้นักเรียนได้เรียนรู้เรื่องระบบนิเวศป่าไม้ แหล่งน้ำ และความสำคัญของการอนุรักษ์ทรัพยากรธรรมชาติ ผ่านกิจกรรมภาคสนามจริง ภายในพื้นที่ของ อุทยานแห่งชาติเอราวัณ ซึ่งมีความอุดมสมบูรณ์และเป็นแหล่งศึกษาธรรมชาติที่สำคัญของประเทศไทยผู้เข้าร่วมจะได้ทำกิจกรรมเดินสำรวจธรรมชาติ ศึกษาพันธุ์ไม้ สัตว์ป่า ระบบลำธาร และเรียนรู้การท่องเที่ยวเชิงอนุรักษ์ ค่ายตั้งอยู่ท่ามกลางป่าเขียวขจี ลำธารใสสะอาด และบรรยากาศเงียบสงบ เหมาะแก่การเรียนรู้นอกห้องเรียนอย่างแท้จริง
          </p>
        </motion.div>

        <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
          <Star className="mb-1 mr-2 inline h-6 w-6 text-accent" />
          สถานที่น่าสนใจในค่าย
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {poi.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 shadow-sm"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                <item.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-card-foreground">{item.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default CampInfo;
