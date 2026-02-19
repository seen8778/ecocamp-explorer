import { motion } from "framer-motion";
import { MapPin, Sun, Droplets, Mountain, Camera, Star } from "lucide-react";
import Layout from "@/components/Layout";
import campScenery from "@/assets/camp-scenery.jpg";

const poi = [
  { icon: Mountain, title: "เส้นทางเดินป่า", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam." },
  { icon: Droplets, title: "น้ำตกและลำธาร", text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident." },
  { icon: Sun, title: "จุดชมวิว", text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa." },
  { icon: Camera, title: "จุดถ่ายรูป", text: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti." },
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nisi eget ultricies
            tincidunt, nunc nunc aliquam nunc, vitae aliquam nunc nunc vitae nunc. Praesent auctor,
            nisi eget ultricies tincidunt. ค่ายตั้งอยู่ท่ามกลางธรรมชาติอันอุดมสมบูรณ์ มีทั้งป่าไม้ ลำธาร
            และทิวทัศน์ที่สวยงาม เหมาะสำหรับการเรียนรู้เรื่องสิ่งแวดล้อมอย่างใกล้ชิด
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
