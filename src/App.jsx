import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  BarChart3,
  CalendarDays,
  Headphones,
  Database,
  FileSpreadsheet,
  RefreshCcw,
  BriefcaseBusiness,
  Star,
  ArrowRight,
  Menu,
  X,
  Target,
  ClipboardCheck,
  MessageCircle,
  TrendingUp,
  Workflow,
  Search,
  Award,
  ShieldCheck,
  Clock3,
  Send,
  Download,
  Sparkles,
  Zap,
  Users,
} from "lucide-react";

const pages = ["Home", "About", "Services", "Results", "Feedback", "Certificates", "Process", "Portfolio", "Experience", "Tools", "Contact"];

const techStack = ["React", "Vite", "Tailwind CSS", "Framer Motion", "Lucide Icons", "GitHub Pages"];

const websiteFeatures = [
  "Premium responsive layout",
  "Animated page transitions",
  "Downloadable resume and certificates",
  "Customer feedback section",
  "Contact form connected to email",
  "GitHub Pages deployment workflow",
];

const customerFeedback = [
  "Very friendly and beyond helpful.",
  "Pleasant, knowledgeable and helpful.",
  "Very helpful.",
  "Very polite and great customer service.",
  "Excellent resource. Very courteous and helpful.",
  "Did a great job helping.",
  "Mariecris was lovely! She did an excellent job.",
  "She was excellent.",
  "One of the best. Thanks for your help. Quick and easy to fix everything.",
  "Very good and helpful representative.",
  "Very professional. I got great service from her.",
  "Great customer service.",
  "Mariecris is very helpful. She is excellent in every aspect as a call centre representative. Very knowledgeable and highly recommendable.",
];

function Button({ children, className = "", variant = "primary", ...props }) {
  const base = "inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-bold transition active:scale-[0.98]";
  const variants = {
    primary: "bg-slate-950 text-white hover:bg-slate-800 shadow-lg shadow-slate-900/10",
    white: "bg-white text-slate-950 hover:bg-slate-100 shadow-lg shadow-white/20",
    outline: "border border-white/30 bg-white/10 text-white hover:bg-white hover:text-slate-950",
    gradient: "bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-500 text-white hover:opacity-90 shadow-lg shadow-fuchsia-500/20",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-white/70 bg-white/92 shadow-xl shadow-slate-900/5 backdrop-blur ${className}`}>{children}</div>;
}

const highlights = [
  ["14 Years", "Customer service and BPO experience"],
  ["KPI Driven", "Sales, support, quality, and retention metrics"],
  ["Lead Focused", "Cold leads, warm leads, follow-ups, and bookings"],
  ["Systems Strong", "Google Sheets, Apps Script, CRM, and trackers"],
];

const painPoints = [
  [Clock3, "Leads get cold", "When follow-ups are delayed, customers lose interest. I help reconnect before the opportunity disappears.", "from-cyan-500 to-blue-600"],
  [MessageCircle, "Customers stop replying", "I use a warm and professional approach to rebuild trust, answer concerns, and guide them back to the next step.", "from-fuchsia-500 to-pink-600"],
  [Database, "CRM gets messy", "I keep notes, statuses, outcomes, and next follow-ups organized so the team knows exactly what to do next.", "from-violet-500 to-indigo-600"],
  [Target, "Objections are not handled", "I probe the real reason, explain the value clearly, and offer the best solution based on process.", "from-amber-500 to-orange-600"],
  [BarChart3, "KPIs are hard to track", "I support clean tracking for calls, follow-ups, conversions, retention, and booking progress.", "from-emerald-500 to-teal-600"],
  [ShieldCheck, "Revenue leaks quietly", "Consistent follow-up, better documentation, and stronger customer handling help protect every opportunity.", "from-rose-500 to-red-600"],
];

const services = [
  {
    icon: RefreshCcw,
    gradient: "from-indigo-600 to-cyan-500",
    title: "Lead Activation and Customer Re-Engagement",
    text: "I help reconnect with cold leads, warm leads, and inactive customers using clear follow-ups, value-based conversations, and organized CRM updates.",
    items: ["Outbound calls", "Warm lead follow-ups", "Cold lead reactivation", "Customer re-engagement", "Booking support"],
  },
  {
    icon: Headphones,
    gradient: "from-fuchsia-600 to-rose-500",
    title: "Customer Service Support",
    text: "I support customers through phone, email, and chat while keeping every conversation warm, clear, professional, and solution-focused.",
    items: ["Phone support", "Email support", "Chat support", "Complaint handling", "Escalation support"],
  },
  {
    icon: Star,
    gradient: "from-amber-500 to-orange-600",
    title: "Account Retention",
    text: "I help reduce cancellations by listening to customer concerns, identifying the real issue, handling objections, and offering the right solution based on company process.",
    items: ["Retention calls", "Save attempts", "Objection handling", "Customer trust building", "Retention documentation"],
  },
  {
    icon: FileSpreadsheet,
    gradient: "from-emerald-500 to-teal-600",
    title: "Google Sheets and Tracker Creation",
    text: "I create clean trackers from scratch for leads, follow-ups, bookings, tasks, reports, and KPI tracking so the team can see what needs attention.",
    items: ["Lead trackers", "KPI trackers", "Booking trackers", "Follow-up trackers", "Simple dashboards"],
  },
  {
    icon: Database,
    gradient: "from-violet-600 to-indigo-700",
    title: "CRM and Back Office Support",
    text: "I keep records accurate, document customer interactions, organize data, update tickets, and follow SOPs so operations stay smooth.",
    items: ["CRM updates", "Ticket documentation", "Data entry", "Record updates", "Report preparation"],
  },
  {
    icon: CalendarDays,
    gradient: "from-sky-500 to-cyan-600",
    title: "Calendar Management",
    text: "I help teams stay on schedule by managing appointments, deadlines, reminders, availability checks, and follow-up schedules.",
    items: ["Appointment setting", "Schedule updates", "Deadline tracking", "Calendar reminders", "Follow-up scheduling"],
  },
];

const kpis = [
  "Conversion Rate",
  "Talk Time",
  "Call Quality",
  "Customer Satisfaction",
  "Follow-Up Rate",
  "Daily Sales Targets",
  "Monthly Sales Targets",
  "First Call Resolution",
  "Retention Results",
  "CRM Accuracy",
  "Response Time",
  "Booking Completion",
];

const process = [
  {
    icon: Search,
    gradient: "from-cyan-500 to-blue-600",
    title: "Understand the lead or customer",
    text: "Review the customer history, source, last interaction, offer, concern, and next best action before reaching out.",
  },
  {
    icon: MessageCircle,
    gradient: "from-fuchsia-500 to-pink-600",
    title: "Reconnect with the right tone",
    text: "Use a warm, confident, and professional approach to rebuild interest without sounding pushy.",
  },
  {
    icon: Target,
    gradient: "from-amber-500 to-orange-600",
    title: "Probe needs and handle objections",
    text: "Ask the right questions, identify the real concern, explain the value, and offer the best solution based on the company process.",
  },
  {
    icon: ClipboardCheck,
    gradient: "from-emerald-500 to-teal-600",
    title: "Guide the next step",
    text: "Move the customer toward a confirmed booking, saved account, completed follow-up, scheduled call, or next action.",
  },
  {
    icon: Database,
    gradient: "from-violet-600 to-indigo-700",
    title: "Document and track clearly",
    text: "Update CRM notes, call outcome, follow-up date, status, and next step so the team has clean visibility.",
  },
];

const portfolioSamples = [
  {
    title: "Lead Follow-Up Tracker",
    text: "A tracker for lead name, contact details, lead source, offer, status, last touchpoint, next follow-up date, notes, and conversion status.",
  },
  {
    title: "Booking and Reservation Tracker",
    text: "A tracker for customer details, booking status, payment status, reservation notes, follow-up needs, and confirmation updates.",
  },
  {
    title: "KPI Tracker",
    text: "A simple performance tracker for calls made, contacts reached, follow-ups completed, conversions, customer saves, and daily targets.",
  },
  {
    title: "CRM Cleanup Workflow",
    text: "A process for checking missing information, updating notes, tagging customer status, and making sure follow-ups are not missed.",
  },
];

const tools = [
  "Google Workspace",
  "Google Sheets",
  "Google Apps Script",
  "Google Calendar",
  "Google Docs",
  "Google Drive",
  "Microsoft Office",
  "Microsoft Excel",
  "Salesforce",
  "Zendesk",
  "Shopify",
  "Amazon",
  "eBay",
  "Wix",
  "Canva",
  "Facebook Ads",
  "WhatsApp",
  "Instagram",
  "TikTok",
];

const training = [
  "Leadership Performance Training",
  "Globe Telecommunications Product Knowledge and Customer Service",
  "AT&T Product Knowledge and Customer Service",
  "Advanced Excel Operations",
  "Amazon E-Commerce Product Knowledge and Customer Service",
  "Salesforce Navigation",
  "Zendesk Navigation",
  "Basic Facebook Ads",
  "Shopify 101",
  "eBay Product Listings",
  "Shopify and Amazon Product Research",
  "Wix Website Creation",
  "Koodo Product Knowledge and Customer Service",
];


const certificates = [
  {
    title: "Certificate of Recognition - Best in RGU",
    detail: "Achieved a total score of 218.57% in January 2026 at TELUS Digital.",
    image: assetPath("certificates/certificate-1.jpg"),
  },
  {
    title: "Certificate of Recognition - Best in RCT",
    detail: "Achieved a total score of 94.86% in January 2026 at TELUS Digital.",
    image: assetPath("certificates/certificate-2.jpg"),
  },
  {
    title: "Best in RCT",
    detail: "Recognized for achieving the highest RCT average for the months of July and August.",
    image: assetPath("certificates/certificate-3.jpg"),
  },
  {
    title: "Best in RGU",
    detail: "Recognized for achieving the highest RGU average for the months of July and August.",
    image: assetPath("certificates/certificate-4.jpg"),
  },
];

const experience = [
  {
    company: "TELUS International Philippines Inc.",
    role: "Customer Service Representative, Loyalty Specialist, Technical Support Representative",
    date: "Full-Time | 2015 to April 2026",
    details: "Handled customer service, technical support, loyalty support, account concerns, customer retention, documentation, and sales support in a fast-paced, KPI-driven environment.",
  },
  {
    company: "Convergys and Concentrix",
    role: "Customer Technical Support Representative",
    date: "Full-Time | 2012 to 2015",
    details: "Provided technical support, troubleshooting, account assistance, customer guidance, and support documentation through clear step-by-step communication.",
  },
  {
    company: "Aegis People Support",
    role: "Customer Service Representative, Globe Telecommunications Account",
    date: "Full-Time | 2012 to 2013",
    details: "Handled customer inquiries, account support, technical concerns, documentation, and customer communication through phone, email, and chat.",
  },
];

const pageVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

function PageShell({ children, tone = "default" }) {
  const bg = {
    default: "bg-gradient-to-br from-white via-indigo-50 to-fuchsia-50",
    blue: "bg-gradient-to-br from-cyan-50 via-white to-indigo-100",
    pink: "bg-gradient-to-br from-rose-50 via-white to-fuchsia-100",
    green: "bg-gradient-to-br from-emerald-50 via-white to-cyan-100",
    amber: "bg-gradient-to-br from-amber-50 via-white to-rose-100",
    dark: "bg-gradient-to-br from-indigo-950 via-slate-950 to-fuchsia-950 text-white",
  };
  return (
    <motion.main initial="hidden" animate="visible" variants={pageVariants} transition={{ duration: 0.4 }} className={`${bg[tone]} relative overflow-hidden px-5 py-20`}>
      <div className="pointer-events-none absolute -left-24 top-12 h-80 w-80 rounded-full bg-fuchsia-300/30 blur-3xl" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-300/30 blur-3xl" />
      <div className="relative">{children}</div>
    </motion.main>
  );
}

function Nav({ currentPage, setCurrentPage }) {
  const [open, setOpen] = useState(false);
  const goTo = (page) => {
    setCurrentPage(page);
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <button onClick={() => goTo("Home")} className="text-left">
          <p className="bg-gradient-to-r from-indigo-700 to-fuchsia-600 bg-clip-text text-lg font-black tracking-tight text-transparent">Mariecris Olorvida</p>
          <p className="text-xs font-medium text-slate-500">14-Year Customer Service VA</p>
        </button>
        <nav className="hidden items-center gap-1 lg:flex">
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => goTo(page)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition ${currentPage === page ? "bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white shadow-lg shadow-fuchsia-500/20" : "text-slate-600 hover:bg-slate-100 hover:text-slate-950"}`}
            >
              {page}
            </button>
          ))}
        </nav>
        <Button onClick={() => goTo("Contact")} variant="gradient" className="hidden lg:inline-flex">Hire Me</Button>
        <button onClick={() => setOpen(!open)} className="rounded-full border border-slate-200 bg-white p-2 lg:hidden">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-4 lg:hidden">
          <div className="grid gap-2 sm:grid-cols-2">
            {pages.map((page) => (
              <button key={page} onClick={() => goTo(page)} className={`rounded-xl px-4 py-3 text-left text-sm font-semibold ${currentPage === page ? "bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white" : "bg-slate-50 text-slate-700"}`}>{page}</button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function SectionIntro({ eyebrow, title, text, light = false }) {
  return (
    <div className="mx-auto mb-10 max-w-3xl text-center">
      <p className={`mb-3 text-sm font-black uppercase tracking-[0.25em] ${light ? "text-cyan-200" : "text-indigo-600"}`}>{eyebrow}</p>
      <h2 className={`text-3xl font-black tracking-tight md:text-5xl ${light ? "text-white" : "text-slate-950"}`}>{title}</h2>
      {text && <p className={`mt-4 text-base leading-8 md:text-lg ${light ? "text-slate-200" : "text-slate-600"}`}>{text}</p>}
    </div>
  );
}

function CheckList({ items }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <div key={item} className="flex gap-3 text-sm text-slate-600">
          <CheckCircle className="mt-0.5 h-4 w-4 flex-none text-indigo-600" />
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
}

function Home({ setCurrentPage }) {
  return (
    <motion.main initial="hidden" animate="visible" variants={pageVariants} transition={{ duration: 0.4 }}>
      <section className="relative overflow-hidden bg-gradient-to-br from-indigo-950 via-slate-950 to-rose-950 px-5 py-20 text-white md:py-28">
        <div className="absolute -left-24 top-10 h-80 w-80 rounded-full bg-fuchsia-500/30 blur-3xl" />
        <div className="absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-amber-300/20 blur-3xl" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="mb-5 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-medium text-slate-100 shadow-lg backdrop-blur">
              <Sparkles className="mr-2 h-4 w-4 text-amber-200" /> 14-Year Customer Service VA | Lead Activation | Retention | CRM
            </p>
            <h1 className="text-4xl font-black tracking-tight md:text-6xl">Your warm leads should not go cold.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200">Missed follow-ups, cold leads, messy CRM notes, and slow customer responses can quietly cost a company real revenue. I help businesses reconnect with customers, rebuild interest, and turn conversations into confirmed bookings, retained accounts, or completed transactions.</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button onClick={() => setCurrentPage("Contact")} variant="white">Work With Me <ArrowRight className="ml-2 h-4 w-4" /></Button>
              <Button onClick={() => setCurrentPage("Portfolio")} variant="outline">View Portfolio</Button>
              <a href={assetPath("Mariecris_Olorvida_ATS_Resume.pdf")} download className="inline-flex items-center justify-center rounded-full border border-white/30 bg-white/10 px-5 py-3 text-sm font-bold text-white transition hover:bg-white hover:text-slate-950">
                <Download className="mr-2 h-4 w-4" /> Resume
              </a>
            </div>
          </div>
          <Card className="border-white/15 bg-gradient-to-br from-indigo-500/25 via-slate-800/60 to-cyan-500/20 text-white shadow-2xl backdrop-blur-xl">
            <div className="p-8">
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-white text-indigo-950"><BriefcaseBusiness size={32} /></div>
              <h3 className="text-2xl font-bold">What I bring to your team</h3>
              <div className="mt-6 grid gap-4">
                {["14 years in customer service and BPO support", "Outbound and inbound call experience", "Account retention and lead activation", "KPI-driven sales and support background", "Strong Google Sheets and tracker creation skills"].map((item) => (
                  <div key={item} className="flex gap-3 text-white"><CheckCircle className="mt-1 h-5 w-5 flex-none text-cyan-200" /> <span>{item}</span></div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-cyan-50 to-fuchsia-50 px-5 py-16">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-4">
          {highlights.map(([big, small], index) => (
            <Card key={big} className="transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="p-6 text-center">
                <p className={`text-3xl font-black ${index % 2 ? "text-fuchsia-700" : "text-indigo-700"}`}>{big}</p>
                <p className="mt-2 text-sm text-slate-500">{small}</p>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-br from-indigo-50 via-white to-rose-50 px-5 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-8 max-w-3xl">
            <p className="mb-3 text-sm font-black uppercase tracking-[0.25em] text-indigo-600">Company Pain Points</p>
            <h2 className="text-3xl font-black tracking-tight text-slate-950 md:text-5xl">Small gaps in follow-up can become lost revenue.</h2>
            <p className="mt-4 text-lg leading-8 text-slate-600">I help close those gaps by combining customer service, lead reactivation, CRM discipline, and clean tracking.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {painPoints.map(([Icon, title, text, gradient]) => (
              <Card key={title} className="transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="p-6">
                  <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg`}><Icon size={24} /></div>
                  <h3 className="text-xl font-bold text-slate-950">{title}</h3>
                  <p className="mt-3 leading-7 text-slate-600">{text}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-white via-cyan-50 to-fuchsia-50 px-5 py-20">
        <SectionIntro eyebrow="Customer Proof" title="Customers describe her as polite, helpful, professional, and knowledgeable" text="Customer verbatim feedback shows consistent positive support experience, excellent agent performance, and last call resolution marked as Yes." />
        <div className="mx-auto mb-8 grid max-w-7xl gap-5 md:grid-cols-3">
          {customerFeedback.slice(0, 3).map((quote) => (
            <Card key={quote} className="transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="p-6">
                <div className="mb-4 flex items-center gap-2">{[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 text-indigo-600" />)}</div>
                <p className="leading-7 text-slate-700">“{quote}”</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="mx-auto max-w-7xl text-center">
          <div className="mt-6 flex flex-wrap gap-3">
          <Button onClick={() => setCurrentPage("Feedback")} variant="gradient">View More Feedback <ArrowRight className="ml-2 h-4 w-4" /></Button>
          <Button onClick={() => setCurrentPage("Certificates")} variant="primary">View Certificates <Award className="ml-2 h-4 w-4" /></Button>
        </div>
        </div>
      </section>
    </motion.main>
  );
}

function About() {
  return (
    <PageShell tone="blue">
      <SectionIntro eyebrow="About Me" title="A process-focused VA who knows how to support customers and teams" text="I bring years of experience in customer service, account retention, technical support, sales support, CRM documentation, and back-office operations." />
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.8fr_1.2fr]">
        <Card className="border-white/20 bg-gradient-to-br from-indigo-950 via-slate-950 to-fuchsia-950 text-white">
          <div className="p-8">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-cyan-200">Profile</p>
            <h3 className="mt-4 text-3xl font-black">Mariecris Olorvida</h3>
            <p className="mt-3 text-slate-300">Customer Service VA, Lead Activation Specialist, Account Retention Support, Google Sheets and CRM Support</p>
            <div className="mt-8 grid gap-4 text-sm text-slate-300">
              <div className="flex gap-3"><Phone size={18} /> <span>+63 994 655 9491</span></div>
              <div className="flex gap-3"><Mail size={18} /> <span>mariecrisolorvida01@gmail.com</span></div>
              <div className="flex gap-3"><MapPin size={18} /> <span>Bulacan, Philippines</span></div>
            </div>
          </div>
        </Card>
        <div className="grid gap-6">
          <Card>
            <div className="p-8">
              <h3 className="text-2xl font-black text-slate-950">My working style</h3>
              <p className="mt-4 leading-8 text-slate-600">I am not just here to complete tasks. I am here to help make your process easier, your customers better supported, and your daily operations more organized. I can follow your process, adapt to your tools, and help keep work moving with professionalism and care.</p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {["Clear communication", "Warm customer handling", "Organized tracking", "Consistent follow-up", "Reliable documentation", "Process-focused work", "KPI awareness", "Willingness to learn"].map((item, index) => <div key={item} className={`flex items-center gap-3 rounded-2xl p-3 text-sm font-semibold ${index % 2 ? "bg-fuchsia-50 text-fuchsia-900" : "bg-indigo-50 text-indigo-900"}`}><CheckCircle className="h-4 w-4" /> {item}</div>)}
              </div>
            </div>
          </Card>
          <Card className="border-indigo-100 bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50">
            <div className="p-8">
              <h3 className="text-2xl font-black text-slate-950">Strong hook</h3>
              <p className="mt-4 text-xl leading-9 text-slate-700">When leads get cold and customers stop responding, the right follow-up can bring them back, rebuild interest, and turn the conversation into a confirmed booking.</p>
            </div>
          </Card>
        </div>
      </div>
    </PageShell>
  );
}

function Services() {
  return (
    <PageShell tone="pink">
      <SectionIntro eyebrow="Services" title="Support that keeps customers, leads, and operations moving" text="Each service is focused on communication, consistency, tracking, and better customer experience." />
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const Icon = service.icon;
          return (
            <Card key={service.title} className="transition hover:-translate-y-1 hover:shadow-2xl">
              <div className="p-7">
                <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${service.gradient} text-white shadow-lg`}><Icon size={24} /></div>
                <h3 className="text-xl font-black text-slate-950">{service.title}</h3>
                <p className="mt-3 min-h-[112px] leading-7 text-slate-600">{service.text}</p>
                <div className="mt-5"><CheckList items={service.items} /></div>
              </div>
            </Card>
          );
        })}
      </div>
    </PageShell>
  );
}

function Results() {
  return (
    <PageShell tone="green">
      <SectionIntro eyebrow="Results Focus" title="Fewer missed leads and better customer follow-through" text="I focus on practical outcomes that help businesses stay organized, protect revenue, and create a better customer experience." />
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-3">
        {[
          [TrendingUp, "Increase follow-up consistency", "Warm leads can quickly become cold. I help keep follow-ups active, clear, and tracked.", "from-emerald-500 to-teal-600"],
          [ShieldCheck, "Protect customer relationships", "I handle concerns with patience and professionalism so customers feel heard and supported.", "from-indigo-600 to-violet-700"],
          [BarChart3, "Support KPI visibility", "I document calls, statuses, and outcomes so the team can see what is working and what needs attention.", "from-fuchsia-600 to-rose-500"],
        ].map(([Icon, title, text, gradient]) => (
          <Card key={title} className="transition hover:-translate-y-1 hover:shadow-2xl">
            <div className="p-8">
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${gradient} text-white shadow-lg`}><Icon size={24} /></div>
              <h3 className="text-xl font-black text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-7xl rounded-3xl bg-gradient-to-br from-indigo-950 via-slate-950 to-fuchsia-950 p-8 text-white shadow-2xl md:p-10">
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
          <div><BarChart3 className="mb-4 h-10 w-10 text-cyan-200" /><h3 className="text-3xl font-black">KPIs I understand</h3><p className="mt-4 leading-8 text-slate-300">Customer service and sales support need both a warm experience and measurable performance.</p></div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">{kpis.map((kpi) => <div key={kpi} className="rounded-2xl bg-white/10 p-4 text-center text-sm font-semibold text-slate-100">{kpi}</div>)}</div>
        </div>
      </div>
    </PageShell>
  );
}

function Feedback() {
  return (
    <PageShell tone="blue">
      <SectionIntro eyebrow="Customer Feedback" title="Real customer comments from support interactions" text="These comments highlight the kind of customer experience Mariecris is known for: polite communication, helpful support, professionalism, and clear issue handling." />
      <div className="mx-auto mb-10 grid max-w-7xl gap-6 md:grid-cols-3">
        {[
          ["Excellent", "Agent Performance"],
          ["Yes", "Last Call Resolution"],
          ["Consistent", "Positive Customer Verbatim"],
        ].map(([big, small]) => (
          <Card key={small} className="transition hover:-translate-y-1 hover:shadow-2xl">
            <div className="p-6 text-center">
              <p className="text-3xl font-black text-indigo-700">{big}</p>
              <p className="mt-2 text-sm text-slate-500">{small}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 lg:grid-cols-3">
        {customerFeedback.map((quote, index) => (
          <Card key={quote} className="transition hover:-translate-y-1 hover:shadow-2xl">
            <div className="p-6">
              <div className="mb-4 flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => <Star key={star} className="h-4 w-4 text-indigo-600" />)}
              </div>
              <p className="leading-7 text-slate-700">“{quote}”</p>
              <p className="mt-4 text-sm font-semibold text-slate-500">Customer Feedback #{index + 1}</p>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}


function Certificates() {
  return (
    <PageShell tone="default">
      <SectionIntro eyebrow="Certificates" title="Recognition certificates from TELUS Digital" text="These certificates show performance recognition in RGU and RCT, including best-in-category results and strong customer support performance." />
      <div className="mx-auto mb-10 flex flex-col items-center gap-4 text-center">
        <a href={assetPath("certificates/Mariecris_Olorvida_Certificates.pdf")} download className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-500 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90">
          <Download className="mr-2 h-4 w-4" /> Download Full Certificate PDF
        </a>
        <p className="text-sm text-slate-500">Certificate file is included for employer reference.</p>
      </div>
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {certificates.map((certificate, index) => (
          <Card key={certificate.title} className="overflow-hidden transition hover:-translate-y-1 hover:shadow-2xl">
            <div className="bg-gradient-to-br from-indigo-50 via-white to-fuchsia-50 p-4">
              <a href={certificate.image} target="_blank" rel="noreferrer">
                <img src={certificate.image} alt={certificate.title} className="h-auto w-full rounded-2xl border border-slate-200 bg-white object-cover shadow-md" />
              </a>
            </div>
            <div className="p-7">
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${index % 2 ? "from-fuchsia-600 to-rose-500" : "from-indigo-600 to-cyan-500"} text-white shadow-lg`}>
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-950">{certificate.title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{certificate.detail}</p>
            </div>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}

function Process() {
  return (
    <PageShell tone="amber">
      <SectionIntro eyebrow="Process" title="A clear workflow for lead recovery and customer support" text="The process is built around preparation, warm communication, objection handling, next-step guidance, and clean documentation." />
      <div className="mx-auto max-w-5xl">
        <div className="grid gap-5">
          {process.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="transition hover:-translate-y-1 hover:shadow-2xl">
                <div className="grid gap-5 p-7 md:grid-cols-[80px_1fr] md:items-start">
                  <div className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br ${step.gradient} text-white shadow-lg`}><Icon size={26} /></div>
                  <div>
                    <p className="text-sm font-black uppercase tracking-[0.2em] text-indigo-600">Step {index + 1}</p>
                    <h3 className="mt-2 text-2xl font-black text-slate-950">{step.title}</h3>
                    <p className="mt-3 leading-8 text-slate-600">{step.text}</p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </PageShell>
  );
}

function Portfolio() {
  return (
    <PageShell tone="default">
      <SectionIntro eyebrow="Portfolio Samples" title="Systems and support examples I can build or manage" text="These are sample work areas that show how I can support leads, bookings, CRM, KPIs, and daily operations." />
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
        {portfolioSamples.map((sample, index) => (
          <Card key={sample.title} className="transition hover:-translate-y-1 hover:shadow-2xl">
            <div className="p-8">
              <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br ${index % 2 ? "from-fuchsia-600 to-rose-500" : "from-indigo-600 to-cyan-500"} text-white shadow-lg`}><FileSpreadsheet className="h-6 w-6" /></div>
              <h3 className="text-2xl font-black text-slate-950">{sample.title}</h3>
              <p className="mt-4 leading-8 text-slate-600">{sample.text}</p>
            </div>
          </Card>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-7xl">
        <SectionIntro eyebrow="Training" title="Training and certificates" text="Certificates are included on a dedicated page and can also be downloaded for reference." />
        <div className="mb-8 flex justify-center">
          <a href={assetPath("certificates/Mariecris_Olorvida_Certificates.pdf")} download className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-fuchsia-600 to-rose-500 px-5 py-3 text-sm font-bold text-white shadow-lg shadow-fuchsia-500/20 transition hover:opacity-90"><Download className="mr-2 h-4 w-4" /> Download Certificates</a>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {training.map((item) => <div key={item} className="rounded-2xl border border-white/60 bg-white/80 p-4 text-sm font-semibold text-slate-700 shadow-lg shadow-slate-900/5"><Award className="mb-2 h-5 w-5 text-fuchsia-600" />{item}</div>)}
        </div>
      </div>
    </PageShell>
  );
}

function Experience() {
  return (
    <PageShell tone="blue">
      <SectionIntro eyebrow="Experience" title="Professional Experience" text="A long background in customer service, retention, technical support, sales support, and fast-paced BPO operations." />
      <div className="mx-auto max-w-4xl">
        <div className="relative border-l-2 border-indigo-200 pl-6">
          {experience.map((job, index) => (
            <div key={job.company} className="relative mb-8">
              <div className={`absolute -left-[35px] top-2 h-5 w-5 rounded-full border-4 border-white bg-gradient-to-br ${index === 0 ? "from-fuchsia-600 to-rose-500" : "from-indigo-600 to-cyan-500"}`} />
              <Card>
                <div className="p-7">
                  <p className="text-sm font-black uppercase tracking-[0.2em] text-indigo-600">{job.date}</p>
                  <h3 className="mt-3 text-2xl font-black text-slate-950">{job.company}</h3>
                  <p className="mt-2 font-semibold text-slate-700">{job.role}</p>
                  <p className="mt-4 leading-8 text-slate-600">{job.details}</p>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}

function Tools() {
  return (
    <PageShell tone="pink">
      <SectionIntro eyebrow="Tools and Tech Stack" title="Platforms, tools, and website tech stack" text="I can adapt to your current process and help keep your systems updated, organized, and easy to track. This portfolio is built using modern tools like React, Tailwind CSS, Vite, Framer Motion, and GitHub Pages." />
      <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {tools.map((tool, index) => <div key={tool} className={`rounded-2xl border border-white/60 bg-white/80 p-5 text-center font-bold shadow-lg shadow-slate-900/5 ${index % 3 === 0 ? "text-indigo-700" : index % 3 === 1 ? "text-fuchsia-700" : "text-teal-700"}`}>{tool}</div>)}
      </div>
      <div className="mx-auto mt-12 max-w-6xl rounded-3xl border border-white/60 bg-white/85 p-8 shadow-xl shadow-slate-900/5 backdrop-blur">
        <h3 className="text-2xl font-black text-slate-950">Website Tech Stack</h3>
        <p className="mt-3 leading-7 text-slate-600">This portfolio version uses a premium front-end stack for a modern, responsive, and professional design.</p>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {techStack.map((item) => <div key={item} className="rounded-2xl bg-gradient-to-r from-indigo-50 to-fuchsia-50 p-4 text-center font-bold text-indigo-800">{item}</div>)}
        </div>
        <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {websiteFeatures.map((item) => <div key={item} className="flex items-center gap-2 rounded-2xl bg-white p-4 text-sm font-semibold text-slate-700 shadow-sm"><CheckCircle className="h-4 w-4 text-fuchsia-600" />{item}</div>)}
        </div>
      </div>

      <div className="mx-auto mt-12 grid max-w-6xl gap-6 md:grid-cols-2">
        <Card><div className="p-8"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-cyan-500 text-white"><Workflow className="h-6 w-6" /></div><h3 className="text-2xl font-black text-slate-950">Google Apps Script support</h3><p className="mt-4 leading-8 text-slate-600">I can run and work with Apps Script to support simple automation, auto-updates, reminders, data syncing, and workflow improvements inside Google Workspace.</p></div></Card>
        <Card><div className="p-8"><div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-fuchsia-600 to-rose-500 text-white"><Clock3 className="h-6 w-6" /></div><h3 className="text-2xl font-black text-slate-950">Fast-paced ready</h3><p className="mt-4 leading-8 text-slate-600">I am used to fast-paced environments where accuracy, documentation, call handling, and time management are important every day.</p></div></Card>
      </div>
    </PageShell>
  );
}

function Contact() {
  return (
    <PageShell tone="dark">
      <SectionIntro light eyebrow="Contact" title="Let’s turn warm leads into real results" text="Reach out for customer service, lead activation, retention, Google Sheets, CRM, and back-office support." />
      <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Card className="border-white/15 bg-gradient-to-br from-indigo-500/20 via-slate-900/55 to-fuchsia-500/20 text-white backdrop-blur-xl">
          <div className="p-8">
            <h3 className="text-2xl font-black">Contact Details</h3>
            <div className="mt-8 grid gap-5 text-slate-200">
              <div className="flex gap-3"><Phone size={20} /> <span>+63 994 655 9491</span></div>
              <div className="flex gap-3"><Mail size={20} /> <span>mariecrisolorvida01@gmail.com</span></div>
              <div className="flex gap-3"><MapPin size={20} /> <span>Bulacan, Philippines</span></div>
            </div>
            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5"><p className="text-sm leading-7 text-slate-200">Available for remote virtual assistant roles, customer service support, sales support, lead activation, account retention, CRM support, and Google Sheets support.</p></div>
          </div>
        </Card>
        <Card className="border-white/50 bg-white/95 text-slate-900">
          <div className="p-8">
            <h3 className="text-2xl font-black text-slate-950">Send a Message</h3>
            <p className="mt-3 leading-7 text-slate-600">Fill out the form below and your message will be sent to Mariecris.</p>
            <form action="https://formsubmit.co/mariecrisolorvida01@gmail.com" method="POST" className="mt-6 grid gap-4">
              <input type="hidden" name="_subject" value="New Portfolio Website Inquiry" />
              <input type="hidden" name="_template" value="table" />
              <input type="text" name="name" required placeholder="Your Name" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-fuchsia-600" />
              <input type="email" name="email" required placeholder="Your Email" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-fuchsia-600" />
              <input type="text" name="company" placeholder="Company or Business Name" className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-fuchsia-600" />
              <textarea name="message" required placeholder="How can I help you?" rows={6} className="rounded-2xl border border-slate-200 px-4 py-3 text-sm outline-none focus:border-fuchsia-600" />
              <Button type="submit" variant="gradient"><Send className="mr-2 h-4 w-4" /> Submit Message</Button>
            </form>
          </div>
        </Card>
      </div>
    </PageShell>
  );
}

export default function App() {
  const [currentPage, setCurrentPage] = useState("Home");
  const renderPage = () => {
    switch (currentPage) {
      case "About": return <About />;
      case "Services": return <Services />;
      case "Results": return <Results />;
      case "Feedback": return <Feedback />;
      case "Certificates": return <Certificates />;
      case "Process": return <Process />;
      case "Portfolio": return <Portfolio />;
      case "Experience": return <Experience />;
      case "Tools": return <Tools />;
      case "Contact": return <Contact />;
      default: return <Home setCurrentPage={setCurrentPage} />;
    }
  };
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Nav currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {renderPage()}
      <footer className="border-t border-white/60 bg-gradient-to-r from-indigo-950 via-slate-950 to-fuchsia-950 px-5 py-8 text-center text-sm text-slate-300">
        <p>© 2026 Mariecris Olorvida. Customer Service VA, Lead Activation, Retention, CRM and Google Sheets Support.</p>
      </footer>
    </div>
  );
}
