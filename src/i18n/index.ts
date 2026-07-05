import { createI18n } from 'vue-i18n'

const messages = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      badge: 'Front-end Developer',
      title: 'Prempree deelert',
      subtitle: 'Fresh Software Engineering graduate, ready to build and learn in the real world.',
    },
    about: {
      badge: 'About Me',
      title: 'About Me',
      p1: "I'm a Software Engineering graduate from Nakhon Pathom Rajabhat University. I enjoy building web applications with Vue and TypeScript, with a focus on clean code and good user experience.",
      p2: "I'm currently looking for opportunities to grow as a developer and contribute to real-world projects.",
    },
    experience: {
      badge: 'Experience',
      title: "Where I've worked",
      educationBadge: 'Education',
      educationTitle: "Where I've studied",
    },
    projects: {
      badge: 'Projects',
      title: 'Featured work',
    },
    contact: {
      badge: 'Contact',
      title: 'Get in touch',
      subtitle:
        "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      copyEmail: 'Copy Email',
      copied: 'Copied!',
      location: 'Bangkok, Thailand',
      availability: 'Open for opportunities',
      footer: 'Designed & Built with Vue.js',
    },
  },
  th: {
    nav: {
      home: 'หน้าหลัก',
      about: 'เกี่ยวกับ',
      experience: 'ประสบการณ์',
      projects: 'ผลงาน',
      contact: 'ติดต่อ',
    },
    hero: {
      badge: 'นักพัฒนา Front-end',
      title: 'เปรมปรีย์ ดีเลิศ',
      subtitle: 'บัณฑิตใหม่ สาขาวิศวกรรมซอฟต์แวร์ พร้อมเรียนรู้และลงมือทำในโลกการทำงานจริง',
    },
    about: {
      badge: 'เกี่ยวกับฉัน',
      title: 'เกี่ยวกับฉัน',
      p1: 'ผมจบการศึกษาสาขาวิศวกรรมซอฟต์แวร์ จากมหาวิทยาลัยราชภัฏนครปฐม ชอบพัฒนาเว็บแอปพลิเคชันด้วย Vue และ TypeScript โดยเน้นโค้ดที่สะอาดและ UX ที่ดี',
      p2: 'ตอนนี้กำลังมองหาโอกาสในการทำงานและพัฒนาทักษะในโปรเจกต์จริงครับ',
    },
    experience: {
      badge: 'ประสบการณ์',
      title: 'ที่ที่ผมเคยทำงาน',
      educationBadge: 'การศึกษา',
      educationTitle: 'ที่ที่ผมเคยเรียน',
    },
    projects: {
      badge: 'ผลงาน',
      title: 'ผลงานเด่น',
    },
    contact: {
      badge: 'ติดต่อ',
      title: 'ติดต่อฉัน',
      subtitle:
        'ตอนนี้กำลังมองหาโอกาสใหม่ ๆ ไม่ว่าจะมีคำถามหรืออยากทักทาย ผมจะพยายามตอบกลับให้เร็วที่สุด',
      copyEmail: 'คัดลอกอีเมล',
      copied: 'คัดลอกแล้ว!',
      location: 'กรุงเทพฯ ประเทศไทย',
      availability: 'พร้อมรับงานใหม่',
      footer: 'ออกแบบและพัฒนาด้วย Vue.js',
    },
  },
}

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
})
