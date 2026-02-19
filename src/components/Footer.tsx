import { Link } from "react-router-dom";
import { TreePine } from "lucide-react";

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
            <span className="font-semibold text-foreground">Green Future Camp M.5/8</span>
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
            <li>จีรัชญ์ ขวัญแก้ว เลขที่ 16</li>
            <li>ชยางกูร เชื้อเจริญ เลขที่ 17</li>
            <li>ไชยพศ จัดเจนนาวี เลขที่ 18</li>
            <li>ปองคุณ อนุกิตติรัตน์ เลขที่ 19</li>
            <li>วิธวินท์ หอมอ่อน เลขที่ 22</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
        <p>
          © 2025 Green Future Camp M.5/8. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
