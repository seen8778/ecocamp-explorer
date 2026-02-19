import { Link } from "react-router-dom";
import { TreePine, Heart } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card">
    <div className="container mx-auto px-4 py-10">
      <div className="grid gap-8 md:grid-cols-3">
        {/* Brand */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
              <TreePine className="h-5 w-5 text-primary-foreground" />
            </div>
            <span className="font-semibold text-foreground">[ชื่อกลุ่ม]</span>
          </div>
          <p className="text-sm text-muted-foreground">
            ค่ายอนุรักษ์สิ่งแวดล้อม — ร่วมกันดูแลธรรมชาติเพื่ออนาคตที่ยั่งยืน
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="mb-3 font-semibold text-foreground">เมนู</h4>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/" className="hover:text-primary transition-colors">หน้าแรก</Link></li>
            <li><Link to="/activities" className="hover:text-primary transition-colors">กิจกรรม</Link></li>
            <li><Link to="/camp-info" className="hover:text-primary transition-colors">แนะนำค่าย</Link></li>
            <li><Link to="/about" className="hover:text-primary transition-colors">เกี่ยวกับเรา</Link></li>
            <li><Link to="/contact" className="hover:text-primary transition-colors">ติดต่อเรา</Link></li>
          </ul>
        </div>

        {/* Developers */}
        <div>
          <h4 className="mb-3 font-semibold text-foreground">ผู้พัฒนาเว็บไซต์</h4>
          <ul className="space-y-1 text-sm text-muted-foreground">
            <li>จีรัชญ์ เลขที่ 16</li>
            <li>ชยางกูร เลขที่ 17</li>
            <li>ไชยพศ เลขที่ 18</li>
            <li>ปองคุณ เลขที่ 19</li>
            <li>วิธวินท์ เลขที่ 22</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        <p className="flex items-center justify-center gap-1">
          สร้างด้วย <Heart className="h-4 w-4 text-destructive" /> เพื่อสิ่งแวดล้อม © 2025
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
