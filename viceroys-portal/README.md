# Viceroys Islamic Academy (VISA) - School Portal

A modern, secure, and user-friendly digital platform for Viceroys Islamic Academy.

## 🎓 Features

✅ **Online Result Management** - Check exam results securely
💳 **Secure Fee Payment** - Online payment system with multiple methods
📢 **Announcements & Updates** - Stay informed with latest school news
🔒 **Safe & Secure** - 24/7 accessible portal with encrypted data
👥 **User Profiles** - Student, teacher, and parent directories
📊 **Admin Dashboard** - Complete school management system (CRUD operations)
🎨 **Modern Design** - Responsive, beautiful UI with smooth transitions
📱 **Mobile Friendly** - Works seamlessly on all devices

## 📚 Programs

- 🏠 **Daycare** - Nurturing care for ages 0-3
- 👧 **Kindergarten** - Building strong foundations (ages 3-5)
- 📚 **Pre-Basic** - Preparing young minds (ages 5-6)
- 📖 **Basic (Primary)** - Quality education (ages 6-12)
- 🕌 **Madrasah Section** - Islamic & moral training

## 🛠 Technology Stack

- **Frontend**: React 18, Next.js 14
- **Styling**: Tailwind CSS with custom brand colors
- **Icons**: Lucide React
- **Authentication**: JWT-ready
- **UI Components**: Custom built with Tailwind
- **API Ready**: Axios configured

## 🎨 Color Scheme

- **Primary**: Maroon (#8B1538)
- **Secondary**: Light Pink (#FFB6D9)
- **Accent**: Dark Pink (#FF1493)
- **Blue**: #1E3A8A
- **Gold**: #FFC107

## 📋 Pages Included

- ✅ Homepage with hero, features, programs, and quick links
- ✅ About Us (mission, vision, core values)
- ✅ Sign In / Sign Up (with password strength indicator)
- ✅ Results Management (search, filter, download)
- ✅ Online Fee Payment (shopping cart, multiple payment methods)
- ✅ Announcements (school news and updates)
- ✅ Programs (details of all school programs)
- ✅ Gallery (photos and videos showcase)
- ✅ Teachers Directory (with contact information)
- ✅ Contact Us (contact form and information)
- ✅ Admin Dashboard (stats, student management, CRUD)
- ✅ Header & Footer (responsive navigation)

## 🚀 Installation

### Prerequisites
- Node.js 16+ and npm/yarn

### Steps

```bash
# Navigate to project
cd viceroys-portal

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
viceroys-portal/
├── src/
│   ├── app/
│   │   ├── layout.tsx              # Root layout
│   │   ├── globals.css             # Global styles
│   │   ├── page.tsx                # Homepage
│   │   ├── about/page.tsx
│   │   ├── auth/
│   │   │   ├── signin/page.tsx
│   │   │   └── signup/page.tsx
│   │   ├── announcements/page.tsx
│   │   ├── results/page.tsx
│   │   ├── fees/page.tsx
│   │   ├── programs/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── teachers/page.tsx
│   │   ├── contact/page.tsx
│   │   └── dashboard/page.tsx
│   └── components/
│       ├── Header.tsx              # Navigation header
│       └── Footer.tsx              # Footer with links
├── public/                         # Static assets
├── package.json
├── tailwind.config.js
├── next.config.js
└── README.md
```

## 🔧 Configuration

### Environment Variables
Create a `.env.local` file:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
```

### Tailwind CSS
Already configured with brand colors in `tailwind.config.js`

## 📞 Contact Information

- **Phone**: +234 805 357 2474 | +234 813 624 8892
- **Email**: visaacademy01@gmail.com
- **Address**: BOSCO Building, Alangua Close, Ilorin, Kwara State, Nigeria
- **Facebook**: https://www.facebook.com/viceroysacademy

## 📜 School Motto

> "Honing the Intellect, Moulding the Future and VISA to Global Success"

> "And say, 'My Lord, increase me in knowledge.'" (Qur'an 20:114)

## 📄 License

MIT License - © 2024 Viceroys Islamic Academy

## 🤝 Support

For support, contact the school administration or email the provided email addresses.

---

**Built with ❤️ for Viceroys Islamic Academy**