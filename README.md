# Yash Raj - Portfolio Website

A modern, animation-rich personal portfolio website built with React Router, Tailwind CSS, and Framer Motion.

---

## 🎨 Features

- ⚡ **Fast Development** with Vite HMR
- 🎬 **Professional Animations** powered by Framer Motion
- 🎨 **Modern UI** with Tailwind CSS
- 📱 **Fully Responsive** design
- 🔧 **TypeScript** for type safety
- 🚀 **Optimized** production builds
- ✨ **Premium Design** with dark theme

---

## 📦 Technology Stack

- **Framework**: React Router 7
- **Styling**: Tailwind CSS 4
- **Build Tool**: Vite 6
- **Language**: TypeScript
- **Icons**: Lucide React
- **Animations**: Framer Motion 12
- **UI Components**: Custom React components

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd YashDoesThings-Portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Access the website**
   - Local: http://localhost:4000/
   - Network: http://10.204.209.2:4000/

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint

---

## 🎬 Animations Overview

This portfolio features comprehensive animations across all sections, powered by **Framer Motion** and **CSS animations**.

### Animation Categories

1. **Page Load Animations** - Initial page entry effects
2. **Scroll Animations** - Triggered when elements enter viewport
3. **Continuous Animations** - Infinite loops (rotations, breathing)
4. **Hover Animations** - Interactive feedback on user actions

---

## 🎯 Hero Section

### Stagger Container Animation
- **Sequential reveal** of all hero elements
- Initial delay: 0.3s
- Stagger delay: 0.2s between children

### Name Rows - Slide Up
```javascript
// "yash" and "raj" slide up from 60px below
{
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
}
```

### Tagline - Fade In
- Pure opacity transition
- 1 second duration
- Appears after name rows

### Animation Timeline
```
0.0s  → Page loads
0.3s  → Container fades in, "yash" starts
0.5s  → "yash" completes
0.7s  → "raj" starts
0.9s  → "raj" completes
1.2s  → Tagline completes
∞     → Sparkles rotate continuously
```

**Component**: `src/components/HeroSection.jsx`

---

## 🌸 Flowers Section

### Continuous Rotation ⭐
```javascript
{
  rotate: 360,
  transition: {
    duration: 20,        // 20 seconds per rotation
    repeat: Infinity,    // Never stops
    ease: "linear"
  }
}
```

### Features
- ✅ Flowers rotate continuously (20s & 25s cycles)
- ✅ Stems start from flower center
- ✅ Breathing stem animation (3s cycles)
- ✅ Scroll-triggered fade up
- ✅ Different rotation speeds for variety

### Animation Flow
```
User scrolls to section
    ↓
20% visible → Triggers animation
    ↓
Flowers fade up + rotation begins
    ↓
Continuous:
  → Flower 1: 360° every 20s
  → Flower 2: 360° every 25s
  → Stems: Breathing (1.0 → 1.05 → 1.0)
```

**Component**: `src/components/FlowersSection.jsx`

---

## 💼 Skills Section

### Stagger Container
```javascript
{
  delayChildren: 0.2,      // Initial delay
  staggerChildren: 0.07    // 0.07s between skills
}
```

### Individual Skill Tags
- **Entry**: Slide up from 60px below
- **Duration**: 0.8 seconds
- **Easing**: ease-out

### Hover Effects
```javascript
{
  scale: 1.1,              // 10% larger
  transition: { duration: 0.2 }
}
```

**Visual Changes on Hover:**
- Background: transparent → #444
- Text: #999 → white
- Border: #444
- Scale: 1.0 → 1.1

### Skills Included (28 Total)
- **Frontend**: React, Next.js, TypeScript, JavaScript, HTML5, CSS3, Tailwind CSS, Framer Motion
- **Animation/3D**: GSAP, Three.js
- **Backend**: Node.js, Express, MongoDB, JWT, REST APIs
- **Tools**: Git, Vite, Webpack, npm
- **Design**: UI/UX Design, Figma, Responsive Design, Performance Optimization, Accessibility, SEO
- **State Management**: Redux, Context API
- **Routing**: React Router

**Component**: `src/components/SkillsSection.jsx`

---

## 🎨 CSS Animations

### Page Load Animations

**Navigation Entry**
```css
.animate-nav-enter {
  animation: slideDownFadeIn 0.8s ease-out;
}
```

**Slide Animations**
- `animate-slide-left` - Slides in from left
- `animate-slide-right` - Slides in from right
- `animate-grow-down` - Grows downward
- `animate-fade-scale` - Fades and scales

### Scroll Animations

**Fade Up**
```css
.scroll-fade-up {
  animation: fadeUp 0.8s ease-out forwards;
}
```

**Fade In**
```css
.scroll-fade-in {
  animation: fadeIn 1s ease-out forwards;
}
```

### Continuous Animations

**Rotation**
- `animate-rotate-slow` - 20s rotation
- `animate-rotate-medium` - 15s rotation
- `animate-rotate-fast` - 10s rotation

**Breathing**
```css
.animate-breathe {
  animation: breathe 3s ease-in-out infinite;
}
```

### Hover Effects

**Logo Hover**
```css
.logo-hover:hover {
  transform: scale(1.1);
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

**Device Hover**
```css
.device-hover:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 20px rgba(255, 255, 255, 0.1);
}
```

**Arrow Hover**
```css
.arrow-left:hover,
.arrow-right:hover {
  transform: scale(1.2);
  opacity: 1;
}
```

---

## 🎯 Animation Timing Reference

### Delay Classes
```css
.delay-100  { animation-delay: 0.1s; }
.delay-200  { animation-delay: 0.2s; }
.delay-300  { animation-delay: 0.3s; }
...
.delay-1400 { animation-delay: 1.4s; }
```

### Duration Reference
- **Fast**: 0.2s - 0.4s (hover effects)
- **Medium**: 0.6s - 1s (entry animations)
- **Slow**: 1.5s - 3s (continuous effects)
- **Very Slow**: 8s - 25s (rotations)

---

## 📁 Project Structure

```
YashDoesThings-Portfolio/
├── public/                    # Static assets
├── src/
│   ├── app/
│   │   ├── global.css        # Global styles & animations
│   │   ├── page.jsx          # Main page component
│   │   └── root.tsx          # Root layout
│   ├── components/
│   │   ├── HeroSection.jsx   # Hero with Framer Motion
│   │   ├── FlowersSection.jsx # Rotating flowers
│   │   └── SkillsSection.jsx # Skills with stagger
│   └── routes.ts             # Route configuration
├── ANIMATIONS.md             # Animation documentation
├── FRAMER_MOTION_SKILLS.md   # Skills section docs
├── HERO_FLOWERS_ANIMATIONS.md # Hero & Flowers docs
├── QUICK_REFERENCE.md        # Quick testing guide
├── package.json
├── tailwind.config.js
├── tsconfig.json
└── vite.config.ts
```

---

## 🧪 Testing Animations

### Page Load Animations
1. **Hard refresh** the page (Ctrl+Shift+R)
2. Watch the sequence:
   - Navigation slides down
   - Hero elements appear with stagger
   - Decorative elements fade in
   - Sparkles begin rotating

### Scroll Animations
1. **Scroll slowly** down the page
2. Observe:
   - Flowers fade up and start rotating
   - Bio section fades in
   - Skills cascade in (0.07s stagger)
   - Footer sparkles appear

### Hover Effects
1. **Hover over**:
   - Logo (scales 1.1x)
   - Device wireframes (lift up)
   - Arrows (scale 1.2x)
   - Skill tags (scale 1.1x, color invert)

### Continuous Animations
- **Sparkles**: Rotate continuously (8s cycles)
- **Flowers**: Rotate continuously (20s & 25s)
- **Stems**: Breathe gently (3s cycles)

---

## 🎨 Customization Guide

### Adjust Stagger Speed

**Skills Section:**
```javascript
// In SkillsSection.jsx
staggerChildren: 0.05  // Faster (was 0.07)
```

**Hero Section:**
```javascript
// In HeroSection.jsx
staggerChildren: 0.15  // Slower (was 0.2)
```

### Change Animation Durations

**CSS Animations:**
```css
/* In global.css */
@keyframes fadeUp {
  /* Adjust duration in animation property */
  animation: fadeUp 1.2s ease-out; /* was 0.8s */
}
```

**Framer Motion:**
```javascript
transition: {
  duration: 1.0  // Adjust as needed
}
```

### Modify Hover Effects

**Skill Tags:**
```css
.skill-tag-motion:hover {
  background-color: #00ff00; /* Custom color */
  transform: scale(1.15);    /* Larger scale */
}
```

### Flower Rotation Speed

```javascript
// In FlowersSection.jsx
transition: {
  duration: 15,  // Faster (was 20)
  repeat: Infinity,
  ease: "linear"
}
```

---

## 🐛 Troubleshooting

### Animations Not Playing

**Check:**
- ✅ Browser supports CSS animations
- ✅ JavaScript is enabled
- ✅ Framer Motion is installed: `npm list framer-motion`
- ✅ No console errors

**Solutions:**
```bash
# Reinstall dependencies
npm install

# Clear cache and restart
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Scroll Animations Not Triggering

**Check:**
- ✅ Intersection Observer API supported
- ✅ Elements have correct refs
- ✅ Viewport threshold set correctly (0.2)

**Debug:**
```javascript
// Add console logs in useEffect
console.log('Observer initialized');
console.log('Element observed:', entry.target);
```

### Framer Motion Issues

**Check:**
- ✅ `"use client"` directive at top of component
- ✅ Correct import: `import { motion } from "framer-motion"`
- ✅ Variants properly defined
- ✅ `initial` and `animate` props set

### Performance Issues

**Optimize:**
- ✅ Reduce number of simultaneous animations
- ✅ Use `will-change` CSS property sparingly
- ✅ Set `viewport={{ once: true }}` for scroll animations
- ✅ Disable animations on low-end devices

---

## 📊 Performance Metrics

### Animation Performance
- **GPU Accelerated**: All transforms use GPU
- **60fps**: Smooth animations on modern browsers
- **Optimized**: Framer Motion auto-optimizes
- **Lazy**: Scroll animations only when visible

### Bundle Size
- **Framer Motion**: ~60KB gzipped
- **Total CSS**: ~15KB (including Tailwind)
- **Components**: Modular and tree-shakeable

---

## 🎓 Key Concepts

### Framer Motion Variants
```javascript
const variants = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0 }
};

<motion.div
  variants={variants}
  initial="hidden"
  animate="visible"
/>
```

### Stagger Children
```javascript
const container = {
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

### Scroll Triggers
```javascript
<motion.div
  whileInView="visible"
  viewport={{ once: true, amount: 0.2 }}
/>
```

### Infinite Loops
```javascript
<motion.div
  animate={{ rotate: 360 }}
  transition={{
    repeat: Infinity,
    duration: 20,
    ease: "linear"
  }}
/>
```

---

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Deploy to Netlify

```bash
# Build
npm run build

# Deploy dist folder to Netlify
```

---

## 📝 Animation Files Reference

### Documentation Files
- **ANIMATIONS.md** - Complete animation catalog
- **FRAMER_MOTION_SKILLS.md** - Skills section technical docs
- **FRAMER_MOTION_SUMMARY.md** - Quick implementation summary
- **HERO_FLOWERS_ANIMATIONS.md** - Hero & Flowers detailed docs
- **QUICK_REFERENCE.md** - Testing checklist
- **SKILLS_SECTION.md** - Skills section guide

### Component Files
- **src/components/HeroSection.jsx** - Hero animations
- **src/components/FlowersSection.jsx** - Flower rotations
- **src/components/SkillsSection.jsx** - Skills stagger

### Style Files
- **src/app/global.css** - All CSS animations & keyframes

---

## 🎉 Features Implemented

### Hero Section ✨
- ✅ Stagger container (0.2s between elements)
- ✅ Name rows slide up (60px offset)
- ✅ Tagline fade in
- ✅ Decorative elements with delays
- ✅ Continuous sparkle rotation

### Flowers Section 🌸
- ✅ Continuous 360° rotation (20s & 25s)
- ✅ Stems start from flower center
- ✅ Breathing stem animation
- ✅ Scroll-triggered fade up
- ✅ Different rotation speeds

### Skills Section 💼
- ✅ Stagger container (0.07s between skills)
- ✅ Cloud layout with 28 skills
- ✅ Slide up from 60px
- ✅ Hover effects (scale 1.1x, color invert)
- ✅ Responsive design

### Bio Section 📝
- ✅ Scroll-triggered fade in
- ✅ Tooltip with close button
- ✅ Staggered text animations

### Footer ✨
- ✅ Rotating sparkles (slow, medium, fast)
- ✅ Scroll-triggered appearance

---

## 🎨 Design Principles

1. **Progressive Disclosure** - Information reveals gradually
2. **Visual Hierarchy** - Important elements animate first
3. **Micro-interactions** - Hover effects provide feedback
4. **Smooth Transitions** - All animations use proper easing
5. **Performance** - GPU-accelerated transforms
6. **Accessibility** - Respects reduced motion preferences

---

## 🔗 Resources

### Framer Motion
- [Documentation](https://www.framer.com/motion/)
- [Variants Guide](https://www.framer.com/motion/animation/#variants)
- [Scroll Animations](https://www.framer.com/motion/scroll-animations/)

### Tailwind CSS
- [Documentation](https://tailwindcss.com/docs)
- [Animation Utilities](https://tailwindcss.com/docs/animation)

### React Router
- [Documentation](https://reactrouter.com/)

---

## 📄 License

This project is private and proprietary.

---

## 👤 Author

**Yash Raj**
- Portfolio: [Your Portfolio URL]
- GitHub: [Your GitHub]
- LinkedIn: [Your LinkedIn]

---

## 🙏 Acknowledgments

- **Framer Motion** - For amazing animation library
- **Tailwind CSS** - For utility-first CSS framework
- **React Router** - For routing solution
- **Vite** - For blazing fast build tool

---

**Built with ❤️ and lots of animations** ✨