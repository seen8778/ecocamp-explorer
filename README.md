# Eco Camp Explorer

เว็บไซต์ประชาสัมพันธ์ค่ายอนุรักษ์สิ่งแวดล้อมของ Green Future Camp M.5/8 พัฒนาด้วย React + Vite + TypeScript

## เทคโนโลยีหลัก

- Vite
- React + TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

## เริ่มต้นใช้งานในเครื่อง

```sh
npm install
npm run dev
```

## คำสั่งที่ใช้บ่อย

```sh
npm run dev      # รันโหมดพัฒนา
npm run build    # สร้างไฟล์ production
npm run preview  # พรีวิวผลลัพธ์จาก build
npm run test     # รันชุดทดสอบด้วย Vitest
npm run lint     # ตรวจ lint
```

## Deploy ขึ้น GitHub Pages

โปรเจกต์นี้ตั้งค่าให้ใช้งาน GitHub Pages ได้ง่ายแล้ว โดยใช้:

- `HashRouter` เพื่อหลีกเลี่ยงปัญหา 404 ตอนรีเฟรชหน้า
- `base: "./"` ใน Vite production build เพื่อให้ asset path เป็นแบบ relative
- GitHub Actions workflow สำหรับ build และ deploy อัตโนมัติ

### ขั้นตอน

1. Push โค้ดขึ้น GitHub repository
2. ไปที่ **Settings → Pages**
3. ในหัวข้อ **Build and deployment**, ตั้งค่า **Source = GitHub Actions**
4. push เข้า branch `main` (หรือ branch ที่ตั้งให้ workflow ทำงาน)
5. รอ workflow `Deploy to GitHub Pages` ทำงานเสร็จ
6. เว็บไซต์จะออนไลน์ที่ URL ของ GitHub Pages ของ repository นั้น
