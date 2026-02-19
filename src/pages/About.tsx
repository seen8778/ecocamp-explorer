import { motion } from "framer-motion";
import { Users, Target, Heart } from "lucide-react";
import Layout from "@/components/Layout";
import logo from "@/assets/logo.png";

const members = [
  { name: "จีรัชญ์ ขวัญแก้ว", num: 16 },
  { name: "ชยางกูร เชื้อเจริญ", num: 17 },
  { name: "ไชยพศ จัดเจนนาวี", num: 18 },
  { name: "ปองคุณ อนุกิตติรัตน์", num: 19 },
  { name: "วิธวินท์ หอมอ่อน", num: 22 },
];

const About = () => (
  <Layout>
    <section className="nature-gradient py-16">
      <div className="container mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-primary-foreground"
        >
          เกี่ยวกับเรา
        </motion.h1>
        <p className="mt-3 text-primary-foreground/80">ทำความรู้จักกับทีมงานของเรา</p>
      </div>
    </section>

    <section className="container mx-auto px-4 py-12">
      <div className="mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 rounded-xl border border-border bg-card p-8 text-center shadow-sm"
        >
          <div className="mx-auto mb-4 h-24 w-24 overflow-hidden rounded-2xl">
  <img
    src={logo}
    alt="โลโก้กลุ่ม"
    className="h-full w-full object-cover"
  />
</div>

          <h2 className="mb-2 text-2xl font-bold text-card-foreground">
  Green Future Camp M.5/8
</h2>
          <p className="text-muted-foreground">ทีมผู้จัดกิจกรรมเพื่อการเรียนรู้ด้านสิ่งแวดล้อมและการพัฒนาชุมชนอย่างยั่งยืน</p>
        </motion.div>

        {/* Vision / Mission */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <Target className="mb-3 h-8 w-8 text-primary" />
            <h3 className="mb-2 text-lg font-semibold text-card-foreground">วัตถุประสงค์</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• สร้างจิตสำนึกในการอนุรักษ์สิ่งแวดล้อม</li>
              <li>• เรียนรู้ระบบนิเวศและความหลากหลายทางชีวภาพ</li>
              <li>• พัฒนาทักษะการทำงานเป็นทีม</li>
              <li>• ส่งเสริมกิจกรรมจิตอาสาเพื่อชุมชน</li>
            </ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-xl border border-border bg-card p-6 shadow-sm"
          >
            <Heart className="mb-3 h-8 w-8 text-destructive" />
            <h3 className="mb-2 text-lg font-semibold text-card-foreground">คุณค่าของค่าย</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>• ความรักและหวงแหนธรรมชาติ</li>
              <li>• ความรับผิดชอบต่อสิ่งแวดล้อม</li>
              <li>• การอยู่ร่วมกันอย่างสมดุล</li>
              <li>• การสร้างอนาคตที่ยั่งยืน</li>
            </ul>
          </motion.div>
        </div>

        {/* Team */}
        <h2 className="mb-6 text-center text-2xl font-bold text-foreground">
          <Users className="mb-1 mr-2 inline h-6 w-6 text-primary" />
          สมาชิกในกลุ่ม
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {members.map((m, i) => (
            <motion.div
              key={m.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="rounded-xl border border-border bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-md"
            >
              <div className="mx-auto mb-3 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-lg font-bold text-primary">
                {m.num}
              </div>
              <p className="font-semibold text-card-foreground">{m.name}</p>
              <p className="text-xs text-muted-foreground">เลขที่ {m.num}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
