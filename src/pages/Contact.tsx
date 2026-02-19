import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, CheckCircle } from "lucide-react";
import Layout from "@/components/Layout";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", message: "" });
    }, 3000);
  };

  return (
    <Layout>
      <section className="nature-gradient py-16">
        <div className="container mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-primary-foreground"
          >
            ติดต่อเรา
          </motion.h1>
          <p className="mt-3 text-primary-foreground/80">มีคำถามหรือข้อเสนอแนะ? ติดต่อเราได้เลย</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-foreground">ข้อมูลการติดต่อ</h2>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <Mail className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">อีเมล</h3>
                <p className="text-sm text-muted-foreground">camp@example.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <Phone className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">โทรศัพท์</h3>
                <p className="text-sm text-muted-foreground">0XX-XXX-XXXX</p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-xl border border-border bg-card p-5 shadow-sm">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-secondary">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-card-foreground">สถานที่</h3>
                <p className="text-sm text-muted-foreground">โรงเรียน (เติมชื่อโรงเรียนที่นี่)</p>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="mb-4 text-2xl font-bold text-foreground">ส่งข้อความถึงเรา</h2>
            {submitted ? (
              <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card p-10 text-center shadow-sm">
                <CheckCircle className="mb-3 h-12 w-12 text-primary" />
                <p className="text-lg font-semibold text-card-foreground">ส่งข้อความสำเร็จ!</p>
                <p className="text-sm text-muted-foreground">ขอบคุณที่ติดต่อเรา</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
                <div>
                  <label className="mb-1 block text-sm font-medium text-card-foreground">ชื่อ</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="กรอกชื่อของคุณ"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-card-foreground">อีเมล</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="กรอกอีเมลของคุณ"
                  />
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-card-foreground">ข้อความ</label>
                  <textarea
                    required
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                    placeholder="พิมพ์ข้อความของคุณที่นี่..."
                  />
                </div>
                <button
                  type="submit"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-2.5 font-medium text-primary-foreground transition-transform hover:scale-[1.02]"
                >
                  <Send className="h-4 w-4" /> ส่งข้อความ
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
