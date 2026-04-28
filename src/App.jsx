/* ================================================================
   NETTRACEPRO, Full Site
   ================================================================ */

import React, { useState, useEffect, useRef } from "react";

// ── Real image imports from /src/assets ──
import navLogo from './assets/NettraceproLogo.png';
import footerLogo from './assets/NewLogo.png';
import teamPhoto from './assets/NewLogo.png';
import takweenImg from './assets/Takween.jpg';
import mysmartfitImg from './assets/MySmartfit.jpg';
import slayersImg from './assets/Slayersclub.jpg';
import simpletouchImg from './assets/SimpleTouch.jpg';
import webDevImg from './assets/DevWeb.png';
import mobileAppImg from './assets/Webdesign.jpg';
import seoImg from './assets/SEO.jpg';
import oldCpa from './assets/Old_CPA.jpg';
import newCpa from './assets/New_CPA.jpg';

// ── In-view fade helpers ──
const useV = (th = 0.12) => {
  const r = useRef(null);
  const [v, s] = useState(false);
  useEffect(() => {
    const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) s(true); }, { threshold: th });
    if (r.current) o.observe(r.current);
    return () => o.disconnect();
  }, []);
  return [r, v];
};
const F = ({ children, d = 0, c = "" }) => {
  const [r, v] = useV();
  return <div ref={r} className={c} style={{ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(28px)", transition: `all .7s ease ${d}s` }}>{children}</div>;
};
const FX = ({ children, d = 0, dir = "l" }) => {
  const [r, v] = useV();
  return <div ref={r} style={{ opacity: v ? 1 : 0, transform: v ? "translateX(0)" : `translateX(${dir === "l" ? "-40px" : "40px"})`, transition: `all .7s ease ${d}s` }}>{children}</div>;
};

// ── Icons ──
const A = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
const S = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const IC = {
  w: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  m: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
  s: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
  k: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>,
  u: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
};

// ── Hero particle network ──
const Particles = () => {
  const c = useRef(null);
  useEffect(() => {
    const cv = c.current; if (!cv) return;
    const ctx = cv.getContext('2d');
    let w = cv.width = cv.parentElement.offsetWidth;
    let h = cv.height = cv.parentElement.offsetHeight;
    const pts = Array.from({ length: 60 }, () => ({ x: Math.random()*w, y: Math.random()*h, vx:(Math.random()-.5)*.4, vy:(Math.random()-.5)*.4, r:Math.random()*2+1 }));
    let af;
    const draw = () => {
      ctx.clearRect(0,0,w,h);
      pts.forEach(p => {
        p.x+=p.vx; p.y+=p.vy;
        if(p.x<0||p.x>w)p.vx*=-1; if(p.y<0||p.y>h)p.vy*=-1;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle='rgba(0,230,118,0.5)'; ctx.fill();
        pts.forEach(q => {
          const dx=p.x-q.x, dy=p.y-q.y, d=Math.sqrt(dx*dx+dy*dy);
          if(d<120){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(0,230,118,${.15*(1-d/120)})`;ctx.lineWidth=.5;ctx.stroke();}
        });
      });
      af = requestAnimationFrame(draw);
    };
    draw();
    const rs = () => { w=cv.width=cv.parentElement.offsetWidth; h=cv.height=cv.parentElement.offsetHeight; };
    window.addEventListener('resize', rs);
    return () => { cancelAnimationFrame(af); window.removeEventListener('resize', rs); };
  }, []);
  return <canvas ref={c} style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:1}}/>;
};

const AboutParticles = () => {
  const c = useRef(null);
  useEffect(() => {
    const cv = c.current; if (!cv) return;
    const ctx = cv.getContext('2d');
    let w=cv.width=cv.offsetWidth, h=cv.height=cv.offsetHeight;
    const pts = Array.from({length:40},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.5+.5,p:Math.random()*Math.PI*2,sp:Math.random()*.015+.008}));
    let af;
    const draw = () => {
      ctx.clearRect(0,0,w,h);
      pts.forEach(p => {
        p.x+=p.vx; p.y+=p.vy; p.p+=p.sp;
        if(p.x<0||p.x>w)p.vx*=-1; if(p.y<0||p.y>h)p.vy*=-1;
        const g=.2+Math.sin(p.p)*.15;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(0,230,118,${g})`; ctx.fill();
        pts.forEach(q => {
          const dx=p.x-q.x, dy=p.y-q.y, d=Math.sqrt(dx*dx+dy*dy);
          if(d<100){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(0,230,118,${.08*(1-d/100)})`;ctx.lineWidth=.5;ctx.stroke();}
        });
      });
      af = requestAnimationFrame(draw);
    };
    draw();
    const rs = () => { w=cv.width=cv.offsetWidth; h=cv.height=cv.offsetHeight; };
    window.addEventListener('resize', rs);
    return () => { cancelAnimationFrame(af); window.removeEventListener('resize', rs); };
  }, []);
  return <canvas ref={c} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:1}}/>;
};

const ContactParticles = () => {
  const c = useRef(null);
  useEffect(() => {
    const cv = c.current; if (!cv) return;
    const ctx = cv.getContext('2d');
    let w=cv.width=cv.offsetWidth, h=cv.height=cv.offsetHeight;
    const nodes = Array.from({length:55},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,r:Math.random()*2+1,pulse:Math.random()*Math.PI*2,speed:Math.random()*.02+.01}));
    const sparks = Array.from({length:8},()=>({x:Math.random()*w,y:Math.random()*h,life:Math.random(),speed:Math.random()*.003+.002,size:Math.random()*60+30}));
    let af;
    const draw = () => {
      ctx.clearRect(0,0,w,h);
      sparks.forEach(s => {
        s.life+=s.speed; if(s.life>1)s.life=0;
        const alpha=Math.sin(s.life*Math.PI)*.15;
        const grad=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,s.size);
        grad.addColorStop(0,`rgba(0,230,118,${alpha})`); grad.addColorStop(1,'rgba(0,230,118,0)');
        ctx.beginPath(); ctx.arc(s.x,s.y,s.size,0,Math.PI*2); ctx.fillStyle=grad; ctx.fill();
      });
      nodes.forEach(p => {
        p.x+=p.vx; p.y+=p.vy; p.pulse+=p.speed;
        if(p.x<0||p.x>w)p.vx*=-1; if(p.y<0||p.y>h)p.vy*=-1;
        const glow=.3+Math.sin(p.pulse)*.2;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(0,230,118,${glow})`; ctx.fill();
        nodes.forEach(q => {
          const dx=p.x-q.x, dy=p.y-q.y, d=Math.sqrt(dx*dx+dy*dy);
          if(d<130){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(0,230,118,${.12*(1-d/130)})`;ctx.lineWidth=.6;ctx.stroke();}
        });
      });
      af = requestAnimationFrame(draw);
    };
    draw();
    const rs = () => { w=cv.width=cv.offsetWidth; h=cv.height=cv.offsetHeight; };
    window.addEventListener('resize', rs);
    return () => { cancelAnimationFrame(af); window.removeEventListener('resize', rs); };
  }, []);
  return <canvas ref={c} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:1}}/>;
};

// ── Data ──
const SV = [
  { id:"w", ic:"w", t:"Web Design & Development", sh:"Custom, responsive websites that convert visitors into customers.",
    fl:"Your website is the foundation of your online presence. NetTracePro crafts pixel-perfect, responsive websites optimized for speed, SEO, and conversions. As a trusted web design partner, we build sites that rank on Google and turn clicks into clients.",
    ft:["Custom responsive design","WordPress & CMS development","E-commerce solutions","Landing page optimization","Website maintenance","SEO-optimized architecture"],
    pr:["Discovery call","Wireframe & design","Development & testing","Launch & support"], img:webDevImg },
  { id:"m", ic:"m", t:"Mobile App Development", sh:"Native and cross-platform apps with intuitive design.",
    fl:"NetTracePro turns your app ideas into reality with native iOS/Android or cross-platform solutions that users love. From concept to App Store launch, our mobile development team handles it all, on time and on budget.",
    ft:["iOS & Android development","Cross-platform solutions","UI/UX mobile design","App store optimization","Push notifications","Ongoing maintenance"],
    pr:["Strategy & planning","UI/UX prototyping","Agile development","Testing & launch"], img:mobileAppImg },
  { id:"s", ic:"s", t:"Search Engine Optimization", sh:"Data-driven SEO strategies that boost your Google rankings.",
    fl:"NetTracePro's SEO strategies are built on real data, competitor analysis, and proven techniques that move the needle. We help businesses dominate search results and attract high-intent customers, month after month.",
    ft:["Technical SEO audits","Keyword research","On-page optimization","Link building","Local SEO setup","Monthly analytics"],
    pr:["Comprehensive audit","Strategy development","Implementation","Monitor & refine"], img:seoImg },
];

const PR = [
  { n:"AI Platform", c:"AI & Web Design", y:"2025", img:takweenImg, d:"A cutting-edge AI services platform with modern design, custom dashboards, and SEO-optimized architecture, built to convert visitors into clients." },
  { n:"Consulting Firm", c:"Professional Services", y:"2024", img:mysmartfitImg, d:"A high-trust, conversion-focused website for a professional consulting firm, clean, authoritative, and built to drive appointment bookings." },
  { n:"Creative Portfolio", c:"Portfolio & Branding", y:"2024", img:slayersImg, d:"A bold personal portfolio that showcases work beautifully, communicates brand identity, and turns visitors into opportunities." },
  { n:"Software Service", c:"SaaS & Web App", y:"2021", img:simpletouchImg, d:"A sleek, user-friendly web application with a companion mobile app, designed for daily business use and seamless retail management." }
];

const TE = [
  { q:"NetTracePro understands how to communicate with our customers. Their web design approach transformed our entire digital presence and we saw results within weeks.", a:"Takween AI", r:"Web Design Client", bg:"linear-gradient(135deg,#E8A020,#F0C060)" },
  { q:"We trusted NetTracePro and they delivered. Our new site looks incredible and has already brought in new clients we never would have found otherwise.", a:"M.A. CPA Inc.", r:"Accounting Firm Client", bg:"linear-gradient(135deg,#4CAF50,#2E7D32)" },
  { q:"NetTracePro's professionalism and dedication is unmatched. From web design to SEO, they consistently exceed expectations and keep us ahead of the competition.", a:"SimpleTouch POS", r:"Web Application Client", bg:"linear-gradient(135deg,#42A5F5,#1565C0)" }
];

const TRANSFORMS = [{
  client:"From dated to defining", category:"Website Redesign",
  beforeImg:oldCpa, afterImg:newCpa,
  stats:[{n:"340%",l:"Avg ROI Lift"},{n:"2×",l:"More Leads"},{n:"Page 1",l:"Search Ranking"}],
  desc:"We transform tired, template-driven websites into modern, conversion-focused platforms, sites that command trust, convert visitors, and rank where customers are searching."
}];

const FAQS = [
  { q:"What does NetTracePro do?", a:"NetTracePro is a full-service digital agency specializing in custom web design, web development, mobile app development, and search engine optimization (SEO). We help small businesses and growing brands build a powerful online presence that attracts customers and drives revenue." },
  { q:"Where does NetTracePro work?", a:"NetTracePro works remotely with clients everywhere. Whether you're across town or across the country, we deliver the same quality of design, development, and strategy, meetings on Zoom, deliverables on time, and clear communication throughout." },
  { q:"How much does a website cost with NetTracePro?", a:"NetTracePro offers flexible pricing tailored to your business size and goals. Every project starts with a free discovery call where we learn about your needs and build a custom quote. We believe every business deserves professional web design, reach out to get started." },
  { q:"How long does it take NetTracePro to build a website?", a:"Most NetTracePro website projects are completed within 3 to 6 weeks depending on complexity. Our streamlined process, from discovery and design to development and launch, is built for efficiency without sacrificing quality." },
  { q:"Does NetTracePro do SEO?", a:"Yes! SEO (Search Engine Optimization) is one of NetTracePro's core services. We offer technical SEO audits, keyword research, on-page optimization, link building, and local SEO. Our goal is simple: get you on page one of Google." },
  { q:"Can NetTracePro redesign my existing website?", a:"Absolutely. NetTracePro specializes in website redesigns that modernize your brand, improve performance, and dramatically boost your search rankings. We'll audit your current site and map out a clear upgrade plan." },
];


// ── Nav ──
const Nav = ({ go, sc }) => {
  const [mo, sm] = useState(false);
  const nav = (p) => { sm(false); go(p); };
  return (
    <nav className={`nv ${sc ? "sc" : ""}`} role="navigation" aria-label="Main navigation">
      <div className="nv-inner">
        <a href="#" onClick={e=>{e.preventDefault();nav("home")}} className="nl">
          <img src={navLogo} alt="NetTracePro" style={{height:36}}/>
        </a>
        <div className="nk">
          <a href="#" onClick={e=>{e.preventDefault();nav("services")}}>Services</a>
          <a href="#" onClick={e=>{e.preventDefault();nav("about")}}>About</a>
          <a href="#" onClick={e=>{e.preventDefault();nav("portfolio")}}>Portfolio</a>
          <a href="#" onClick={e=>{e.preventDefault();nav("testimonials")}}>Testimonials</a>
          <a href="#" onClick={e=>{e.preventDefault();nav("pricing")}}>Pricing</a>
          <a href="#" onClick={e=>{e.preventDefault();nav("contact")}} className="nc">Get Started</a>
        </div>
        <button className="nv-burger" onClick={()=>sm(!mo)} aria-label="Menu">
          <span className={mo?"bar bar1 open":"bar bar1"}/>
          <span className={mo?"bar bar2 open":"bar bar2"}/>
          <span className={mo?"bar bar3 open":"bar bar3"}/>
        </button>
      </div>
      {mo && (
        <div className="nv-mob">
          <a href="#" onClick={e=>{e.preventDefault();nav("services")}}>Services</a>
          <a href="#" onClick={e=>{e.preventDefault();nav("about")}}>About</a>
          <a href="#" onClick={e=>{e.preventDefault();nav("portfolio")}}>Portfolio</a>
          <a href="#" onClick={e=>{e.preventDefault();nav("testimonials")}}>Testimonials</a>
          <a href="#" onClick={e=>{e.preventDefault();nav("pricing")}}>Pricing</a>
          <a href="#" onClick={e=>{e.preventDefault();nav("contact")}} className="nmc">Get Started</a>
        </div>
      )}
    </nav>
  );
};

// ── Footer ──
const Ft = ({ go }) => (
  <footer className="ft">
    <div className="fw">
      <div className="fg">
        <div className="fb">
          <a href="#" onClick={e=>{e.preventDefault();go("home")}} className="nl"><img src={footerLogo} alt="NetTracePro" style={{height:50}}/></a>
          <p>NetTracePro, a full-service digital agency for web design, web development, mobile apps, and SEO. Empowering businesses with strategies that convert.</p>
        </div>
        <div className="fc"><h4>Company</h4>
          <a href="#" onClick={e=>{e.preventDefault();go("about")}}>About NetTracePro</a>
          <a href="#" onClick={e=>{e.preventDefault();go("testimonials")}}>Client Testimonials</a>
          <a href="#" onClick={e=>{e.preventDefault();go("portfolio")}}>Our Portfolio</a>
          <a href="#" onClick={e=>{e.preventDefault();go("pricing")}}>Pricing</a>
        </div>
        <div className="fc"><h4>Services</h4>
          {SV.map(s => <a key={s.id} href="#" onClick={e=>{e.preventDefault();go("services#"+s.id)}}>{s.t.split("&")[0].trim()}</a>)}
        </div>
        <div className="fc"><h4>Connect</h4>
          <a href="#" onClick={e=>{e.preventDefault();go("contact")}}>Contact NetTracePro</a>
          <a href="tel:+17132699658">(713) 269-9658</a>
          <a href="mailto:info@nettracepro.com">info@nettracepro.com</a>
          <span style={{fontSize:11,color:"var(--td)"}}>Working remotely worldwide</span>
        </div>
      </div>
      <div className="fbt"><p>© 2025 NetTracePro. All rights reserved. | Web Design · Mobile Apps · SEO</p></div>
    </div>
  </footer>
);

const PB = ({ l, t, s }) => (
  <div className="pb">
    <div className="pb-bg"/>
    <div className="pb-in">
      <F>
        <div className="label">{l}</div>
        <h1 className="pb-t">{t}</h1>
        {s && <p className="pb-s">{s}</p>}
      </F>
    </div>
  </div>
);

// ── Transform Section ──
const TransformSection = ({ go }) => {
  const [pos, sp] = useState(50);
  const [drag, sd] = useState(false);
  const ref = useRef(null);
  const t = TRANSFORMS[0];
  const move = e => {
    if (!drag || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const x = (e.touches ? e.touches[0].clientX : e.clientX) - r.left;
    sp(Math.min(Math.max((x/r.width)*100, 2), 98));
  };
  return (
    <section className="tf-sec">
      <F><div className="hdr" style={{textAlign:"center",marginBottom:48}}>
        <div className="label">Selected Transformations</div>
        <h2 className="title">See the NetTracePro Difference</h2>
        <p className="sub" style={{margin:"0 auto",textAlign:"center"}}>Drag the slider to reveal what NetTracePro transforms, outdated websites into high-converting digital experiences.</p>
      </div></F>
      <div className="tf-wrap">
        <div className="tf-slider" ref={ref}
          onMouseMove={move} onMouseUp={()=>sd(false)} onMouseLeave={()=>sd(false)}
          onTouchMove={move} onTouchEnd={()=>sd(false)}>
          <div className="tf-after" style={{backgroundImage:`url(${t.afterImg})`}}/>
          <div className="tf-before" style={{width:`${pos}%`,backgroundImage:`url(${t.beforeImg})`}}/>
          <div className="tf-lbl tf-lbl-b" style={{opacity:pos>18?1:0}}><span className="tf-lbl-dot tf-dot-b"/>Before</div>
          <div className="tf-lbl tf-lbl-a" style={{opacity:pos<82?1:0}}>After<span className="tf-lbl-dot tf-dot-a"/></div>
          <div className="tf-line" style={{left:`${pos}%`}}
            onMouseDown={e=>{e.preventDefault();sd(true)}}
            onTouchStart={()=>sd(true)}>
            <div className="tf-handle">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M8 4l-4 8 4 8M16 4l4 8-4 8"/></svg>
            </div>
          </div>
        </div>
        <div className="tf-info">
          <div className="tf-client-tag">{t.category}</div>
          <h3 className="tf-client-name">{t.client}</h3>
          <p className="tf-desc">{t.desc}</p>
          <div className="tf-stats">{t.stats.map((s,i) => <div key={i} className="tf-stat"><div className="tf-stat-n">{s.n}</div><div className="tf-stat-l">{s.l}</div></div>)}</div>
          <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg" style={{marginTop:8}}>Get Your Transformation <A/></a>
        </div>
      </div>
    </section>
  );
};

// ── FAQ ──
const FaqSection = () => {
  const [op, so] = useState(null);
  return (
    <section className="faq-sec">
      <F><div className="hdr" style={{textAlign:"center",marginBottom:48}}>
        <div className="label">Common Questions</div>
        <h2 className="title">Frequently Asked About NetTracePro</h2>
        <p className="sub" style={{margin:"0 auto",textAlign:"center"}}>Everything you need to know about working with NetTracePro, your trusted web design & SEO partner.</p>
      </div></F>
      <div className="faq-wrap">{FAQS.map((f,i) => (
        <F key={i} d={i*.05}>
          <div className={`faq-item ${op===i?"open":""}`} onClick={()=>so(op===i?null:i)}>
            <div className="faq-q"><span>{f.q}</span><div className="faq-icon">{op===i?"−":"+"}</div></div>
            {op===i && <div className="faq-a">{f.a}</div>}
          </div>
        </F>
      ))}</div>
    </section>
  );
};

// ── Home Project Grid ──
const HomeProjGrid = ({ go }) => {
  return (
    <div className="hpg-wrap">
      <div className="hpg-scene">
        <div className="hpg-grid">
          {PR.map((p,i) => (
            <div key={i} className="hpg-card">
              <div className="hpg-img-wrap">
                <img src={p.img} alt={`NetTracePro, ${p.n}`} className="hpg-img"/>
                <div className="hpg-overlay"/>
                <div className="hpg-cat">{p.c}</div>
              </div>
              <div className="hpg-info">
                <h3 className="hpg-name">{p.n}</h3>
                <p className="hpg-desc">{p.d}</p>
                <div className="hpg-year">{p.y}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div style={{textAlign:"center",marginTop:32,position:"relative",zIndex:10}}>
        <a href="#" onClick={e=>{e.preventDefault();go("portfolio")}} className="btn bg">View All Projects <A/></a>
      </div>
    </div>
  );
};

// ── Home Manifesto, full-viewport scroll-revealed conviction lines ──
const HpManifesto = ({ scY }) => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const top = r.top + window.scrollY;
    const h = r.height;
    const winH = window.innerHeight;
    // Trigger range: section starts entering at 70% viewport, fully revealed by exit
    const start = top - winH * 0.7;
    const end = top + h - winH * 0.5;
    const p = Math.max(0, Math.min(1, (scY - start) / (end - start)));
    setProgress(p);
  }, [scY]);

  const lines = [
    { t: "Most websites are forgettable.",                    trigger: 0.0  },
    { t: "Most agencies are too.",                            trigger: 0.18 },
    { t: "So we built something else.",                       trigger: 0.36, accent: true },
    { t: "Sites that earn attention.\nWork that earns trust.", trigger: 0.55, big: true },
  ];

  // Background canvas (faint drifting lights, only animate when in view)
  return (
    <section ref={ref} className="hp-manifesto">
      <HpManifestoParticles containerRef={ref}/>
      <div className="hp-mf-glow"/>
      <div className="hp-mf-grain"/>
      <div className="hp-mf-content">
        <div className="hp-mf-eyebrow">
          <div className="hp-mf-eb-line"/>
          <span>Why us</span>
          <div className="hp-mf-eb-line"/>
        </div>
        <div className="hp-mf-lines">
          {lines.map((line, i) => {
            const visible = progress >= line.trigger;
            return (
              <div
                key={i}
                className={`hp-mf-line ${line.accent ? "hp-mf-accent" : ""} ${line.big ? "hp-mf-big" : ""}`}
                style={{
                  opacity: visible ? 1 : 0.08,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  filter: visible ? "blur(0)" : "blur(2px)",
                }}
              >
                {line.t.split("\n").map((seg, j) => (
                  <span key={j} className="hp-mf-line-seg">{seg}</span>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// Manifesto background particles, slow horizontal lights drifting both directions
const HpManifestoParticles = ({ containerRef }) => {
  const canvasRef = useRef(null);
  const visibleRef = useRef(false);
  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv || !containerRef.current) return;
    const ctx = cv.getContext('2d');
    const parent = containerRef.current;
    let w = cv.width = parent.offsetWidth;
    let h = cv.height = parent.offsetHeight;

    const io = new IntersectionObserver(([e]) => { visibleRef.current = e.isIntersecting; }, { threshold: 0 });
    io.observe(parent);

    const lights = Array.from({ length: 16 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      dir: Math.random() > 0.5 ? 1 : -1,
      speed: 0.4 + Math.random() * 0.8,
      len: 80 + Math.random() * 160,
      thickness: 0.4 + Math.random() * 0.8,
      opacity: 0.1 + Math.random() * 0.25,
    }));

    let af;
    const draw = () => {
      if (!visibleRef.current) { af = requestAnimationFrame(draw); return; }
      ctx.fillStyle = 'rgba(4,4,4,0.18)';
      ctx.fillRect(0, 0, w, h);

      lights.forEach(L => {
        L.x += L.speed * L.dir;
        if (L.dir > 0 && L.x - L.len > w) {
          L.x = -L.len; L.y = Math.random() * h;
        } else if (L.dir < 0 && L.x + L.len < 0) {
          L.x = w + L.len; L.y = Math.random() * h;
        }
        const tailX = L.x - L.len * L.dir;
        const grad = ctx.createLinearGradient(tailX, L.y, L.x, L.y);
        grad.addColorStop(0, 'rgba(0,230,118,0)');
        grad.addColorStop(0.7, `rgba(0,230,118,${L.opacity * 0.4})`);
        grad.addColorStop(1, `rgba(0,230,118,${L.opacity})`);
        ctx.strokeStyle = grad;
        ctx.lineWidth = L.thickness;
        ctx.lineCap = 'round';
        ctx.beginPath();
        ctx.moveTo(tailX, L.y);
        ctx.lineTo(L.x, L.y);
        ctx.stroke();
        ctx.fillStyle = `rgba(0,230,118,${L.opacity * 1.4})`;
        ctx.beginPath();
        ctx.arc(L.x, L.y, L.thickness * 1.3, 0, Math.PI * 2);
        ctx.fill();
      });
      af = requestAnimationFrame(draw);
    };
    draw();

    const onResize = () => { w = cv.width = parent.offsetWidth; h = cv.height = parent.offsetHeight; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(af); window.removeEventListener('resize', onResize); io.disconnect(); };
  }, [containerRef]);
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}/>;
};

// ── Count-up stat (number animates from 0 to target when scrolled into view) ──
const CountStat = ({ num, suffix, label, delay = 0 }) => {
  const [ref, visible] = useV(0.4);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      const duration = 1400;
      const start = performance.now();
      let raf;
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(num * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => raf && cancelAnimationFrame(raf);
    }, delay);
    return () => clearTimeout(t);
  }, [visible, num, delay]);
  return (
    <div className="st" ref={ref}>
      <div className="stn">{val}{suffix}</div>
      <div className="stl">{label}</div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════
// HOME, act-structured cinematic overhaul
// Act 1 (Open): Hero → Manifesto
// Act 2 (Show): Stats moment → Services preview → Transform slider
// Act 3 (Prove): Projects → Testimonials
// Act 4 (Close): FAQ → Finale
// ═══════════════════════════════════════════════════════════════════

// ── Stats Moment, full-width cinematic counter row ──
const HpStatsMoment = ({ scY }) => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const top = r.top + window.scrollY;
    const winH = window.innerHeight;
    const start = top - winH;
    const end = top + r.height - winH * 0.5;
    setProgress(Math.max(0, Math.min(1, (scY - start) / (end - start))));
  }, [scY]);

  const stats = [
    { num: 15, suffix: "+", l: "Projects shipped",  d: "Each one custom-built." },
    { num: 4,  suffix: "+", l: "Years of practice", d: "Long enough to know better." },
    { num: 100, suffix: "%", l: "On-time delivery", d: "We hit the date we promised." },
    { num: 5, suffix: "★", l: "Average rating",     d: "Across every relationship." },
  ];

  return (
    <section ref={ref} className="hp-stats-moment">
      <div className="hp-stats-bg"/>
      <div className="hp-stats-orb hp-stats-orb-l"/>
      <div className="hp-stats-orb hp-stats-orb-r"/>
      <div className="hp-stats-content">
        <F><div className="hp-stats-eyebrow">
          <div className="hp-stats-eb-line"/>
          <span>By the numbers</span>
        </div></F>
        <F d={.08}><h2 className="hp-stats-h">
          Receipts, <span className="acc">not promises.</span>
        </h2></F>
        <div className="hp-stats-grid">
          {stats.map((s, i) => (
            <HpBigCounter
              key={i}
              num={s.num}
              suffix={s.suffix}
              label={s.l}
              detail={s.d}
              delay={i * 150}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ── Big counter for the stats moment ──
const HpBigCounter = ({ num, suffix, label, detail, delay = 0 }) => {
  const [ref, visible] = useV(0.3);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!visible) return;
    const t = setTimeout(() => {
      const duration = 1600;
      const start = performance.now();
      let raf;
      const tick = (now) => {
        const p = Math.min(1, (now - start) / duration);
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(Math.round(num * eased));
        if (p < 1) raf = requestAnimationFrame(tick);
      };
      raf = requestAnimationFrame(tick);
      return () => raf && cancelAnimationFrame(raf);
    }, delay);
    return () => clearTimeout(t);
  }, [visible, num, delay]);
  return (
    <div ref={ref} className="hp-big-counter">
      <div className="hp-counter-n">{val}<span className="hp-counter-suffix">{suffix}</span></div>
      <div className="hp-counter-l">{label}</div>
      <div className="hp-counter-d">{detail}</div>
    </div>
  );
};

// ── Cinematic Services Preview, three feature panels with hover lift ──
// ── Icon: Web Design (browser with cursor + sparkle, animates on hover) ──
const IconWeb = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="hp-icon-svg">
    {/* Browser frame outer */}
    <rect x="14" y="20" width="92" height="68" rx="8" stroke="currentColor" strokeWidth="2.5" fill="none" className="hp-icon-frame"/>
    {/* Browser top bar */}
    <line x1="14" y1="34" x2="106" y2="34" stroke="currentColor" strokeWidth="2.5"/>
    {/* Browser dots */}
    <circle cx="22" cy="27" r="1.8" fill="currentColor" className="hp-icon-dot hp-icon-dot-1"/>
    <circle cx="29" cy="27" r="1.8" fill="currentColor" className="hp-icon-dot hp-icon-dot-2"/>
    <circle cx="36" cy="27" r="1.8" fill="currentColor" className="hp-icon-dot hp-icon-dot-3"/>
    {/* Content blocks (animate on hover) */}
    <rect x="24" y="44" width="44" height="4" rx="2" fill="currentColor" opacity=".7" className="hp-icon-line hp-icon-line-1"/>
    <rect x="24" y="54" width="32" height="3" rx="1.5" fill="currentColor" opacity=".4" className="hp-icon-line hp-icon-line-2"/>
    <rect x="24" y="64" width="50" height="3" rx="1.5" fill="currentColor" opacity=".4" className="hp-icon-line hp-icon-line-3"/>
    {/* Cursor */}
    <path d="M 78 60 L 90 70 L 84 71 L 88 79 L 84 81 L 80 73 L 76 76 Z"
      fill="currentColor" className="hp-icon-cursor"/>
    {/* Sparkle */}
    <g className="hp-icon-sparkle">
      <path d="M 96 38 L 98 44 L 104 46 L 98 48 L 96 54 L 94 48 L 88 46 L 94 44 Z" fill="currentColor"/>
    </g>
  </svg>
);

// ── Icon: Mobile App (phone with rippling rings) ──
const IconMobile = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="hp-icon-svg">
    {/* Phone frame */}
    <rect x="40" y="14" width="40" height="92" rx="8" stroke="currentColor" strokeWidth="2.5" fill="none"/>
    {/* Notch */}
    <rect x="52" y="20" width="16" height="3" rx="1.5" fill="currentColor"/>
    {/* Screen content lines */}
    <rect x="46" y="32" width="28" height="2.5" rx="1" fill="currentColor" opacity=".7"/>
    <rect x="46" y="40" width="20" height="2" rx="1" fill="currentColor" opacity=".4"/>
    {/* App grid icons */}
    <rect x="46" y="52" width="8" height="8" rx="2" fill="currentColor" opacity=".6" className="hp-app-icon hp-app-icon-1"/>
    <rect x="58" y="52" width="8" height="8" rx="2" fill="currentColor" opacity=".6" className="hp-app-icon hp-app-icon-2"/>
    <rect x="70" y="52" width="8" height="8" rx="2" fill="currentColor" opacity=".6" className="hp-app-icon hp-app-icon-3"/>
    <rect x="46" y="64" width="8" height="8" rx="2" fill="currentColor" opacity=".6" className="hp-app-icon hp-app-icon-4"/>
    <rect x="58" y="64" width="8" height="8" rx="2" fill="currentColor" opacity=".6" className="hp-app-icon hp-app-icon-5"/>
    <rect x="70" y="64" width="8" height="8" rx="2" fill="currentColor" opacity=".6" className="hp-app-icon hp-app-icon-6"/>
    {/* Home indicator */}
    <rect x="54" y="98" width="12" height="2" rx="1" fill="currentColor" opacity=".6"/>
    {/* Tap ripples — animate on hover */}
    <circle cx="60" cy="60" r="22" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0" className="hp-tap-ring hp-tap-ring-1"/>
    <circle cx="60" cy="60" r="22" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0" className="hp-tap-ring hp-tap-ring-2"/>
    <circle cx="60" cy="60" r="22" stroke="currentColor" strokeWidth="1.5" fill="none" opacity="0" className="hp-tap-ring hp-tap-ring-3"/>
  </svg>
);

// ── Icon: SEO (rising bar chart with magnifier + arrow) ──
const IconSeo = () => (
  <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="hp-icon-svg">
    {/* Base line */}
    <line x1="20" y1="92" x2="100" y2="92" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Bars rising */}
    <rect x="26" y="74" width="10" height="18" rx="2" fill="currentColor" opacity=".4" className="hp-bar hp-bar-1"/>
    <rect x="42" y="62" width="10" height="30" rx="2" fill="currentColor" opacity=".55" className="hp-bar hp-bar-2"/>
    <rect x="58" y="48" width="10" height="44" rx="2" fill="currentColor" opacity=".7" className="hp-bar hp-bar-3"/>
    <rect x="74" y="32" width="10" height="60" rx="2" fill="currentColor" opacity=".85" className="hp-bar hp-bar-4"/>
    {/* Trend arrow */}
    <path d="M 28 68 L 48 56 L 64 42 L 82 26"
      stroke="currentColor" strokeWidth="2.5" fill="none"
      strokeLinecap="round" strokeLinejoin="round"
      className="hp-trend-line"
      pathLength="100"/>
    {/* Arrowhead */}
    <path d="M 75 26 L 88 22 L 84 35"
      stroke="currentColor" strokeWidth="2.5" fill="none"
      strokeLinecap="round" strokeLinejoin="round"
      className="hp-trend-arrow"/>
    {/* Magnifier circle */}
    <circle cx="36" cy="42" r="11" stroke="currentColor" strokeWidth="2.5" fill="none" className="hp-mag"/>
    {/* Magnifier handle */}
    <line x1="44" y1="50" x2="50" y2="56" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
    {/* Hash inside magnifier */}
    <text x="36" y="46" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" className="hp-mag-text">#1</text>
  </svg>
);

const HpServicesPreview = ({ go }) => {
  const PREV = [
    {
      id: "w", color: "#00E676",
      label: "Web Design & Development",
      title: "Web Design",
      Icon: IconWeb,
      particles: "data",
    },
    {
      id: "m", color: "#82AAFF",
      label: "Mobile App Development",
      title: "Mobile Apps",
      Icon: IconMobile,
      particles: "ripples",
    },
    {
      id: "s", color: "#C3E88D",
      label: "Search Engine Optimization",
      title: "SEO",
      Icon: IconSeo,
      particles: "ascend",
    },
  ];

  return (
    <section className="hp-prev">
      <div className="hp-prev-bg"/>
      <F><div className="hp-prev-header">
        <div className="hp-prev-eyebrow">
          <div className="hp-stats-eb-line"/>
          <span>What NetTracePro does</span>
        </div>
        <h2 className="hp-prev-h">Three things,<br/>done <span className="acc">properly.</span></h2>
      </div></F>
      <div className="hp-prev-grid">
        {PREV.map((s, i) => (
          <F key={s.id} d={i*.08}>
            <HpServiceCard service={s} onClick={()=>go("services#"+s.id)}/>
          </F>
        ))}
      </div>
      <div className="hp-prev-footer">
        <F><a href="#" onClick={e=>{e.preventDefault();go("services")}} className="hp-prev-all-link">
          See all services <A/>
        </a></F>
      </div>
    </section>
  );
};

// ── Individual service card with per-card mouse-tilt and particles ──
const HpServiceCard = ({ service, onClick }) => {
  const cardRef = useRef(null);
  const [tilt, setTilt] = useState({x:0, y:0, mx:50, my:50, hover:false});
  const Icon = service.Icon;
  // Detect touch devices once — skip tilt setup entirely for them
  const isTouch = typeof window !== 'undefined' && window.matchMedia('(hover:none) and (pointer:coarse)').matches;

  const handleMove = e => {
    if (isTouch || !cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    setTilt({
      x: ((y - cy) / cy) * -6,
      y: ((x - cx) / cx) * 6,
      mx: (x / rect.width) * 100,
      my: (y / rect.height) * 100,
      hover: true,
    });
  };

  const handleLeave = () => { if (!isTouch) setTilt({x:0, y:0, mx:50, my:50, hover:false}); };

  return (
    <div
      ref={cardRef}
      className={`hp-prev-card ${tilt.hover ? "hp-prev-hover" : ""}`}
      style={{
        "--svc": service.color,
        transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
        "--mx": `${tilt.mx}%`,
        "--my": `${tilt.my}%`,
      }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      onClick={onClick}
    >
      {/* Animated gradient mesh background */}
      <div className="hp-prev-mesh"/>
      {/* Scanning beam (sweeps across on hover) */}
      <div className="hp-prev-scan"/>
      {/* Spotlight following the cursor */}
      <div className="hp-prev-spotlight"/>
      {/* Per-service particles canvas */}
      <HpCardParticles type={service.particles} color={service.color}/>

      <div className="hp-prev-card-content">
        <div className="hp-prev-icon-wrap" style={{color: service.color}}>
          <div className="hp-prev-icon-glow"/>
          <Icon/>
        </div>
        <h3 className="hp-prev-card-title">{service.title}</h3>
        <div className="hp-prev-card-cta">
          <span>Explore</span>
          <div className="hp-prev-arrow"><A/></div>
        </div>
      </div>
    </div>
  );
};

// ── Per-card canvas particles (data, ripples, or ascend) ──
const HpCardParticles = ({ type, color }) => {
  const c = useRef(null);
  useEffect(() => {
    const cv = c.current; if (!cv) return;
    const ctx = cv.getContext('2d');
    const parent = cv.parentElement;
    let w = cv.width = parent.offsetWidth;
    let h = cv.height = parent.offsetHeight;
    const visibleRef = { current: false };
    const io = new IntersectionObserver(([e]) => { visibleRef.current = e.isIntersecting; }, { threshold: 0 });
    io.observe(parent);

    // Convert color hex to rgb for canvas
    const r = parseInt(color.slice(1,3), 16);
    const g = parseInt(color.slice(3,5), 16);
    const b = parseInt(color.slice(5,7), 16);
    const rgb = `${r},${g},${b}`;

    let particles;
    if (type === "data") {
      // Falling data dots — like rain
      particles = Array.from({length:24}, () => ({
        x: Math.random()*w,
        y: Math.random()*h,
        vy: 0.3 + Math.random()*0.6,
        size: 1 + Math.random()*1.5,
        opacity: 0.2 + Math.random()*0.4,
      }));
    } else if (type === "ripples") {
      // Concentric expanding ripples from random points
      particles = Array.from({length:5}, () => ({
        x: Math.random()*w,
        y: Math.random()*h,
        radius: Math.random()*40,
        maxRadius: 60 + Math.random()*40,
        speed: 0.3 + Math.random()*0.4,
      }));
    } else {
      // Ascending sparks (SEO - things going up)
      particles = Array.from({length:18}, () => ({
        x: Math.random()*w,
        y: h + Math.random()*60,
        vy: -(0.3 + Math.random()*0.7),
        size: 1 + Math.random()*1.5,
        opacity: 0.3 + Math.random()*0.5,
        phase: Math.random()*Math.PI*2,
        sp: 0.02 + Math.random()*0.02,
      }));
    }

    let af;
    const draw = () => {
      if (!visibleRef.current) { af = requestAnimationFrame(draw); return; }
      ctx.clearRect(0, 0, w, h);

      if (type === "data") {
        particles.forEach(p => {
          p.y += p.vy;
          if (p.y > h + 5) { p.y = -5; p.x = Math.random()*w; }
          // Trailing line
          const grad = ctx.createLinearGradient(p.x, p.y - 12, p.x, p.y);
          grad.addColorStop(0, `rgba(${rgb},0)`);
          grad.addColorStop(1, `rgba(${rgb},${p.opacity})`);
          ctx.strokeStyle = grad;
          ctx.lineWidth = p.size;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y - 12);
          ctx.lineTo(p.x, p.y);
          ctx.stroke();
        });
      } else if (type === "ripples") {
        particles.forEach(p => {
          p.radius += p.speed;
          if (p.radius > p.maxRadius) {
            p.radius = 0;
            p.x = Math.random()*w;
            p.y = Math.random()*h;
            p.maxRadius = 60 + Math.random()*40;
          }
          const opacity = 1 - (p.radius / p.maxRadius);
          ctx.strokeStyle = `rgba(${rgb},${opacity * 0.35})`;
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI*2);
          ctx.stroke();
        });
      } else {
        particles.forEach(p => {
          p.y += p.vy;
          p.phase += p.sp;
          p.x += Math.sin(p.phase) * 0.3;
          if (p.y < -10) { p.y = h + 10; p.x = Math.random()*w; }
          const flicker = 0.6 + Math.sin(p.phase * 2) * 0.4;
          // halo
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size*5);
          grad.addColorStop(0, `rgba(${rgb},${p.opacity * flicker * 0.5})`);
          grad.addColorStop(1, `rgba(${rgb},0)`);
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size*5, 0, Math.PI*2);
          ctx.fill();
          // core
          ctx.fillStyle = `rgba(${rgb},${p.opacity * flicker})`;
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.size, 0, Math.PI*2);
          ctx.fill();
        });
      }
      af = requestAnimationFrame(draw);
    };
    draw();

    const rs = () => { w = cv.width = parent.offsetWidth; h = cv.height = parent.offsetHeight; };
    window.addEventListener('resize', rs);
    return () => { cancelAnimationFrame(af); window.removeEventListener('resize', rs); io.disconnect(); };
  }, [type, color]);
  return <canvas ref={c} className="hp-prev-particles"/>;
};

// ── HOME ──
const Home = ({ go }) => {
  const [at, sa] = useState(0);
  const [hover, setHover] = useState(false);
  const [scY, setScY] = useState(0);
  useEffect(() => {
    if (hover) return;
    const i = setInterval(()=>sa(p=>(p+1)%TE.length), 5500);
    return ()=>clearInterval(i);
  }, [hover]);
  useEffect(() => {
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { setScY(window.scrollY); raf = null; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  return (
    <>
      {/* ════════ ACT 1, OPEN ════════ */}

      {/* HERO, cinematic, oversized, scroll-staggered */}
      <section className="hp-hero" aria-label="NetTracePro web design and development services">
        <Particles/>
        <div className="hp-hero-mesh"/>
        <div className="hp-hero-grid" style={{transform:`translate3d(0, ${scY*0.2}px, 0)`}}/>
        <div className="hp-hero-orb hp-hero-orb-1" style={{transform:`translate3d(0, ${scY*-0.4}px, 0)`}}/>
        <div className="hp-hero-orb hp-hero-orb-2" style={{transform:`translate3d(0, ${scY*-0.25}px, 0)`}}/>
        <div className="hp-hero-orb hp-hero-orb-3" style={{transform:`translate3d(0, ${scY*-0.55}px, 0)`}}/>

        <div className="hp-hero-inner">
          <div className="hp-hero-text">
            <F>
              <div className="hp-hero-badge">
                <div className="hp-hero-badge-dot"/>
                <span>Modern Web Design & SEO</span>
              </div>
            </F>
            <F d={.1}>
              <h1 className="hp-hero-h1">
                <span className="hp-hword hp-hword-1">NetTracePro</span>{" "}
                <span className="hp-hword hp-hword-2">builds</span>{" "}
                <span className="hp-hword hp-hword-3">websites&nbsp;that</span>
                <br/>
                <span className="hp-hword hp-hword-5">don't just exist.</span>
                <br/>
                <span className="hp-hword hp-hword-6 hp-hword-accent">They perform.</span>
              </h1>
              <p className="sr-only">NetTracePro is a full-service digital agency offering custom web design, web development, mobile app development, and search engine optimization (SEO) for businesses worldwide.</p>
            </F>
            <F d={.7}>
              <p className="hp-hero-sub">
                We build the websites, mobile apps, and SEO strategies that turn visitors into customers, without the agency markup, retainer traps, or vanishing acts after launch.
              </p>
            </F>
            <F d={.85}>
              <div className="hp-hero-btns">
                <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="hp-hero-cta-primary">
                  <span>Start your project</span>
                  <div className="hp-hero-cta-arrow"><A/></div>
                </a>
                <a href="#" onClick={e=>{e.preventDefault();go("portfolio")}} className="hp-hero-cta-secondary">
                  <span>See our work</span>
                  <A/>
                </a>
              </div>
            </F>
          </div>

          <F d={.3}>
            <div className="hp-hero-mock-wrap" style={{transform:`translate3d(0, ${scY*-0.05}px, 0)`}}>
              <div className="hp-hero-mock-bg"/>
              <div className="mock">
                {/* Browser chrome */}
                <div className="mock-ch">
                  <div className="dots"><div className="dot r"/><div className="dot y"/><div className="dot g"/></div>
                  <div className="url">
                    <span className="mock-url-lock">🔒</span>
                    <span className="mock-url-text">nettracepro.com</span>
                    <span className="mock-url-secure">SSL</span>
                  </div>
                  <div className="mock-tabs">
                    <div className="mock-tab-dot"/>
                    <div className="mock-tab-dot"/>
                    <div className="mock-tab-dot"/>
                  </div>
                </div>

                {/* Site nav */}
                <div className="mock-site-nav">
                  <div className="mock-site-logo">
                    <div className="mock-logo-dot"/>
                    <span>NetTracePro</span>
                  </div>
                  <div className="mock-site-links">
                    <span>Services</span>
                    <span>Work</span>
                    <span>About</span>
                    <span className="mock-site-cta">Get Started</span>
                  </div>
                </div>

                <div className="mock-bd">
                  {/* Hero */}
                  <div className="mock-hero">
                    <div className="mock-glow"/>
                    <div className="mock-glow mock-glow-2"/>
                    <div className="mock-grid"/>
                    <div className="mock-eyebrow">
                      <span className="mock-eb-dot"/>
                      <span>WEB · MOBILE · SEO</span>
                    </div>
                    <div className="mock-title">
                      Build something<br/>
                      <span className="mock-title-accent">worth showing off.</span>
                    </div>
                    <div className="mock-desc">
                      Custom-coded websites, native apps, and SEO that earn rankings month after month.
                    </div>
                    <div className="mock-cta-row">
                      <div className="mock-btn-g">
                        Start your project
                        <span className="mock-btn-arrow">→</span>
                      </div>
                      <div className="mock-btn-o">View work</div>
                    </div>
                  </div>

                  {/* Stats row */}
                  <div className="mock-stats">
                    <div className="mock-stat">
                      <div className="mock-stat-n">15<span>+</span></div>
                      <div className="mock-stat-l">Projects</div>
                    </div>
                    <div className="mock-stat-divider"/>
                    <div className="mock-stat">
                      <div className="mock-stat-n">100<span>%</span></div>
                      <div className="mock-stat-l">On-time</div>
                    </div>
                    <div className="mock-stat-divider"/>
                    <div className="mock-stat">
                      <div className="mock-stat-n">5<span>★</span></div>
                      <div className="mock-stat-l">Rating</div>
                    </div>
                  </div>

                  {/* Mini analytics chart */}
                  <div className="mock-chart">
                    <div className="mock-chart-head">
                      <div className="mock-chart-title">
                        <span className="mock-chart-label">SEARCH RANKINGS</span>
                        <span className="mock-chart-trend">▲ +47%</span>
                      </div>
                      <div className="mock-chart-period">Last 30 days</div>
                    </div>
                    <div className="mock-chart-graph">
                      <svg viewBox="0 0 200 60" preserveAspectRatio="none" className="mock-chart-svg">
                        {/* Grid lines */}
                        <line x1="0" y1="15" x2="200" y2="15" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
                        <line x1="0" y1="30" x2="200" y2="30" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
                        <line x1="0" y1="45" x2="200" y2="45" stroke="rgba(255,255,255,0.04)" strokeWidth="0.5"/>
                        {/* Area fill under line */}
                        <path
                          d="M 0,50 L 20,46 L 40,42 L 60,38 L 80,30 L 100,32 L 120,24 L 140,18 L 160,14 L 180,10 L 200,8 L 200,60 L 0,60 Z"
                          fill="url(#mockChartGrad)"
                        />
                        {/* Line */}
                        <path
                          d="M 0,50 L 20,46 L 40,42 L 60,38 L 80,30 L 100,32 L 120,24 L 140,18 L 160,14 L 180,10 L 200,8"
                          fill="none"
                          stroke="#00E676"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        {/* End dot */}
                        <circle cx="200" cy="8" r="2.5" fill="#00E676"/>
                        <circle cx="200" cy="8" r="5" fill="#00E676" opacity="0.3" className="mock-chart-pulse"/>
                        <defs>
                          <linearGradient id="mockChartGrad" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="0%" stopColor="#00E676" stopOpacity="0.3"/>
                            <stop offset="100%" stopColor="#00E676" stopOpacity="0"/>
                          </linearGradient>
                        </defs>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating tag attached to mockup */}
              <div className="hp-hero-mock-tag">
                <div className="hp-hero-mock-tag-dot"/>
                <span>Built by NetTracePro</span>
              </div>

              {/* Floating "live" badge */}
              <div className="hp-hero-mock-live">
                <span className="hp-hero-mock-live-dot"/>
                <span>Live preview</span>
              </div>
            </div>
          </F>
        </div>

        <div className="hp-hero-scroll" style={{opacity: Math.max(0, 1 - scY/300)}}>
          <div className="hp-hero-scroll-line"/>
          <span>Scroll</span>
        </div>
      </section>

      {/* MANIFESTO, already built, conviction moment */}
      <HpManifesto scY={scY}/>

      {/* ════════ ACT 2, SHOW ════════ */}

      {/* STATS MOMENT, cinematic counter row */}
      <HpStatsMoment scY={scY}/>

      {/* SERVICES PREVIEW, three cinematic cards */}
      <HpServicesPreview go={go}/>

      {/* TRANSFORM SLIDER, kept intact, you've said it works */}
      <TransformSection go={go}/>

      {/* ════════ ACT 3, PROVE ════════ */}

      {/* PROJECTS, kept the 3D parallax grid, but with a stronger lead-in */}
      <div className="hp-proj-wrap">
        <div className="hp-proj-bg"/>
        <div className="hp-proj-orb hp-proj-orb-1"/>
        <div className="hp-proj-orb hp-proj-orb-2"/>
        <div className="hp-proj-grid-pattern"/>
        <section className="sec hp-proj">
          <F><div className="hdr">
            <div className="label">Selected NetTracePro Work</div>
            <h2 className="title">The work speaks <span className="acc">for itself.</span></h2>
            <p className="sub">A small slice of what NetTracePro has built, and what we'd build for you.</p>
          </div></F>
        </section>
        <HomeProjGrid go={go}/>
      </div>

      {/* TESTIMONIALS, original carousel, with pause-on-hover */}
      <section className="sec-w ts"><div className="fw">
        <F><div className="hdr" style={{textAlign:"center"}}>
          <div className="label">NetTracePro Client Words</div>
          <h2 className="title">A few words from clients.</h2>
        </div>
          <div className="tcard" onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}><div className="tglow"/><div className="tcr tcr1"/><div className="tcr tcr2"/>
            <div className="tin">{TE.map((t,i) => (
              <div key={i} className={`ti ${at===i?"act":""}`}>
                <div className="tst">{[...Array(5)].map((_,j)=><span key={j}><S/></span>)}</div>
                <p className="tq">"{t.q}"</p>
                <div className="tar">
                  <div className="tav" style={{background:t.bg}}>{IC.u}</div>
                  <div>
                    <div className="ta">{t.a}</div>
                  </div>
                </div>
              </div>
            ))}</div>
            <div className="tds">{TE.map((_,i) => <button key={i} className={`tdt ${at===i?"act":""}`} onClick={()=>sa(i)}/>)}</div>
          </div>
        </F>
      </div></section>

      {/* ════════ ACT 4, CLOSE ════════ */}

      {/* FAQ, kept */}
      <FaqSection/>

      {/* FINALE CTA, full-viewport closing moment */}
      <section className="hp-finale">
        <div className="hp-finale-bg"/>
        <div className="hp-finale-orb hp-finale-orb-1"/>
        <div className="hp-finale-orb hp-finale-orb-2"/>
        <div className="hp-finale-orb hp-finale-orb-3"/>
        <div className="hp-finale-content">
          <F><div className="hp-finale-eyebrow">Let's begin</div></F>
          <F d={.1}>
            <h2 className="hp-finale-h">
              <span style={{display:"block"}}>Build something</span>
              <span className="acc" style={{display:"block"}}>worth showing off.</span>
            </h2>
          </F>
          <F d={.25}>
            <p className="hp-finale-sub">Every great project starts with a 60-minute call. No pitch deck. No pressure. Just a real conversation about what you need.</p>
          </F>
          <F d={.4}>
            <div className="hp-finale-btns">
              <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="hp-finale-cta">
                <span>Start your project</span>
                <div className="hp-finale-cta-arrow"><A/></div>
              </a>
              <a href="#" onClick={e=>{e.preventDefault();go("pricing")}} className="hp-finale-secondary">
                See pricing →
              </a>
            </div>
          </F>
        </div>
      </section>
    </>
  );
};


// ── PANEL PARTICLES ── per-service canvas particle systems
// Uses IntersectionObserver to only animate when the panel is visible (perf).
// Three distinct systems: data streams (Web), liquid blobs (Mobile), rising sparks (SEO).
const PanelParticles = ({ serviceId, color, containerRef }) => {
  const canvasRef = useRef(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv || !containerRef.current) return;
    const ctx = cv.getContext('2d');
    const parent = containerRef.current;

    let w = cv.width = parent.offsetWidth;
    let h = cv.height = parent.offsetHeight;

    // Parse hex color → rgb for rgba strings
    const hex = color.replace('#','');
    const r = parseInt(hex.slice(0,2), 16);
    const g = parseInt(hex.slice(2,4), 16);
    const b = parseInt(hex.slice(4,6), 16);
    const rgba = (a) => `rgba(${r},${g},${b},${a})`;

    // ── Visibility observer (perf gate) ──
    const io = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    io.observe(parent);

    let af;

    // ═══ SYSTEM 1: WEB → flowing data streams (horizontal trails) ═══
    if (serviceId === 'w') {
      const streams = Array.from({ length: 14 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        speed: 0.8 + Math.random() * 1.6,
        len: 60 + Math.random() * 140,
        thickness: 0.5 + Math.random() * 1.2,
        opacity: 0.15 + Math.random() * 0.4,
      }));

      const draw = () => {
        if (!visibleRef.current) { af = requestAnimationFrame(draw); return; }
        // Subtle fade trail
        ctx.fillStyle = 'rgba(4,4,4,0.18)';
        ctx.fillRect(0, 0, w, h);

        streams.forEach(s => {
          s.x += s.speed;
          if (s.x - s.len > w) {
            s.x = -s.len;
            s.y = Math.random() * h;
            s.speed = 0.8 + Math.random() * 1.6;
            s.opacity = 0.15 + Math.random() * 0.4;
          }
          // Draw the trail as a horizontal gradient
          const grad = ctx.createLinearGradient(s.x - s.len, s.y, s.x, s.y);
          grad.addColorStop(0, rgba(0));
          grad.addColorStop(0.7, rgba(s.opacity * 0.4));
          grad.addColorStop(1, rgba(s.opacity));
          ctx.strokeStyle = grad;
          ctx.lineWidth = s.thickness;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(s.x - s.len, s.y);
          ctx.lineTo(s.x, s.y);
          ctx.stroke();

          // Bright head
          ctx.fillStyle = rgba(s.opacity * 1.5);
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.thickness * 1.4, 0, Math.PI * 2);
          ctx.fill();
        });

        af = requestAnimationFrame(draw);
      };
      draw();
    }

    // ═══ SYSTEM 2: MOBILE → liquid metaballs (organic morphing blobs) ═══
    else if (serviceId === 'm') {
      const blobs = Array.from({ length: 6 }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        radius: 80 + Math.random() * 140,
        phase: Math.random() * Math.PI * 2,
        phaseSpeed: 0.005 + Math.random() * 0.008,
      }));

      const draw = () => {
        if (!visibleRef.current) { af = requestAnimationFrame(draw); return; }
        ctx.clearRect(0, 0, w, h);

        // Use 'lighter' blend so overlapping blobs glow brighter (metaball illusion)
        ctx.globalCompositeOperation = 'lighter';

        blobs.forEach(blob => {
          blob.x += blob.vx;
          blob.y += blob.vy;
          blob.phase += blob.phaseSpeed;

          // Bounce gently off edges
          if (blob.x < 0 || blob.x > w) blob.vx *= -1;
          if (blob.y < 0 || blob.y > h) blob.vy *= -1;

          // Pulse the radius with the phase for breathing effect
          const radius = blob.radius * (1 + Math.sin(blob.phase) * 0.15);

          const grad = ctx.createRadialGradient(blob.x, blob.y, 0, blob.x, blob.y, radius);
          grad.addColorStop(0, rgba(0.18));
          grad.addColorStop(0.4, rgba(0.06));
          grad.addColorStop(1, rgba(0));
          ctx.fillStyle = grad;
          ctx.beginPath();
          ctx.arc(blob.x, blob.y, radius, 0, Math.PI * 2);
          ctx.fill();
        });

        ctx.globalCompositeOperation = 'source-over';
        af = requestAnimationFrame(draw);
      };
      draw();
    }

    // ═══ SYSTEM 3: SEO → rising sparks (curved upward trails) ═══
    else if (serviceId === 's') {
      const makeSpark = () => ({
        x: Math.random() * w,
        y: h + 20,
        vy: -(0.6 + Math.random() * 1.2),
        vxAmp: (Math.random() - 0.5) * 1.2,        // sideways drift amplitude
        vxFreq: 0.005 + Math.random() * 0.01,      // wave frequency
        phase: Math.random() * Math.PI * 2,
        size: 1 + Math.random() * 2.2,
        life: 0,
        maxLife: 200 + Math.random() * 200,
        trail: [],
      });

      let sparks = Array.from({ length: 22 }, () => {
        const sp = makeSpark();
        sp.y = Math.random() * h;     // pre-populate so it's not empty at start
        sp.life = Math.random() * 100;
        return sp;
      });

      const draw = () => {
        if (!visibleRef.current) { af = requestAnimationFrame(draw); return; }
        // Soft fade to leave faint trails
        ctx.fillStyle = 'rgba(4,4,4,0.12)';
        ctx.fillRect(0, 0, w, h);

        sparks.forEach((s, idx) => {
          s.life++;
          s.phase += s.vxFreq;
          // Curved horizontal motion, sine wave drift
          const dx = Math.sin(s.phase) * s.vxAmp;
          s.x += dx;
          s.y += s.vy;

          // Track trail points
          s.trail.push({ x: s.x, y: s.y });
          if (s.trail.length > 12) s.trail.shift();

          // Fade out near top + as life depletes
          const lifeRatio = 1 - (s.life / s.maxLife);
          const heightRatio = s.y / h;
          const alpha = Math.max(0, Math.min(1, lifeRatio * heightRatio * 1.3));

          // Draw trail
          if (s.trail.length > 1) {
            ctx.strokeStyle = rgba(alpha * 0.3);
            ctx.lineWidth = s.size * 0.6;
            ctx.lineCap = 'round';
            ctx.beginPath();
            ctx.moveTo(s.trail[0].x, s.trail[0].y);
            for (let i = 1; i < s.trail.length; i++) {
              ctx.lineTo(s.trail[i].x, s.trail[i].y);
            }
            ctx.stroke();
          }

          // Draw spark head with glow
          ctx.fillStyle = rgba(alpha * 0.8);
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
          ctx.fill();

          // Outer glow
          const glowGrad = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.size * 5);
          glowGrad.addColorStop(0, rgba(alpha * 0.4));
          glowGrad.addColorStop(1, rgba(0));
          ctx.fillStyle = glowGrad;
          ctx.beginPath();
          ctx.arc(s.x, s.y, s.size * 5, 0, Math.PI * 2);
          ctx.fill();

          // Reset spark when it dies or leaves top
          if (s.life > s.maxLife || s.y < -20) {
            sparks[idx] = makeSpark();
          }
        });

        af = requestAnimationFrame(draw);
      };
      draw();
    }

    // ── Resize handler ──
    const onResize = () => {
      w = cv.width = parent.offsetWidth;
      h = cv.height = parent.offsetHeight;
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(af);
      window.removeEventListener('resize', onResize);
      io.disconnect();
    };
  }, [serviceId, color, containerRef]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: 1,
      }}
    />
  );
};

// ── SERVICES (cinematic / Apple-style / scroll-driven) ──
const Services = ({ go, anchorRef }) => {
  // Track scroll position globally for parallax
  const [scY, setScY] = useState(0);
  useEffect(() => {
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        setScY(window.scrollY);
        raf = null;
      });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  // Handle deep-link to a specific service panel (e.g. clicking "Mobile App Development" in footer)
  useEffect(() => {
    const anchor = anchorRef && anchorRef.current;
    if (!anchor) return;

    let cancelled = false;
    let lastY = -1;
    let stableFrames = 0;

    // Wait until layout is stable, then scroll to anchor.
    // "Stable" = the target's position hasn't changed for a few frames.
    const waitForStableThenScroll = () => {
      if (cancelled) return;
      const el = document.getElementById(`svc-${anchor}`);
      if (!el) {
        // Element not mounted yet, retry next frame
        requestAnimationFrame(waitForStableThenScroll);
        return;
      }
      const rect = el.getBoundingClientRect();
      const y = rect.top + window.scrollY;
      if (Math.abs(y - lastY) < 1) {
        stableFrames++;
      } else {
        stableFrames = 0;
        lastY = y;
      }
      // Once position has been stable for 3 consecutive frames, we know layout settled
      if (stableFrames >= 3) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        if (anchorRef) anchorRef.current = null;
        return;
      }
      requestAnimationFrame(waitForStableThenScroll);
    };

    // Kick off after a brief delay so React commits + canvases initialize
    const t = setTimeout(() => requestAnimationFrame(waitForStableThenScroll), 60);
    // Hard fallback after 1.5s in case stability check never converges
    const hardFallback = setTimeout(() => {
      if (cancelled) return;
      const el = document.getElementById(`svc-${anchor}`);
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      if (anchorRef) anchorRef.current = null;
    }, 1500);

    return () => {
      cancelled = true;
      clearTimeout(t);
      clearTimeout(hardFallback);
    };
  }, [anchorRef]);

  const SVCS = [
    {
      id: "w", color: "#00E676",
      eyebrow: "Web Design & Development",
      headline: "Websites that\nfeel inevitable.",
      pitch: "Every pixel deliberate. Every page tuned for speed. Every interaction earning its place.",
      bigClaim: "Built from scratch.",
      bigClaimSub: "No templates. No bloat. No compromises.",
      bullets: [
        { t: "Hand-coded foundation", d: "Custom React or Next.js, never a Wix template dressed up to look custom." },
        { t: "Sub-2-second loads", d: "Optimized images, lazy-loaded assets, edge-cached delivery. Fast on every device." },
        { t: "SEO baked in", d: "Schema markup, semantic HTML, Core Web Vitals tuned before launch, not after." },
        { t: "Built to scale", d: "A site that handles 10× your traffic without rebuilding it from the ground up." },
      ],
      stat: { n: "3-6", l: "weeks to launch" },
      img: webDevImg, go: "contact",
    },
    {
      id: "m", color: "#82AAFF",
      eyebrow: "Mobile App Development",
      headline: "Apps people\nactually open.",
      pitch: "Native performance. Thoughtful design. The kind of app that earns a spot on the home screen.",
      bigClaim: "iOS, Android, both.",
      bigClaimSub: "Native or cross-platform, we pick what fits, not what's easiest.",
      bullets: [
        { t: "Native or cross-platform", d: "Swift, Kotlin, React Native, Flutter, chosen for your project, not our convenience." },
        { t: "Designed for the thumb", d: "Real ergonomics. Real testing. Apps that feel right in five seconds, not five sessions." },
        { t: "Backend included", d: "APIs, auth, push notifications, analytics, the invisible work that makes apps feel alive." },
        { t: "Through to the App Store", d: "Submission, review handling, store assets. We don't stop until it's live." },
      ],
      stat: { n: "8-14", l: "weeks to ship" },
      img: mobileAppImg, go: "contact",
    },
    {
      id: "s", color: "#C3E88D",
      eyebrow: "Search Engine Optimization",
      headline: "Page one,\nmonth after month.",
      pitch: "Real audits. Real keywords. Real backlinks. The unglamorous work that moves rankings and stays moved.",
      bigClaim: "No tricks. No tools-as-strategy.",
      bigClaimSub: "Just the technical SEO and content work that actually compounds.",
      bullets: [
        { t: "Full technical audit", d: "Crawl your entire site. Find every issue blocking rankings. Fix them, in priority order." },
        { t: "Keywords that convert", d: "Not vanity terms. The phrases your customers actually type when they're ready to buy." },
        { t: "Local SEO setup", d: "Google Business Profile, citations, local schema. Win the map pack wherever your customers are searching." },
        { t: "Monthly transparency", d: "A dashboard showing what moved, why, and what's next. No black box. No mystery." },
      ],
      stat: { n: "Page 1", l: "the only goal" },
      img: seoImg, go: "contact",
    },
  ];

  return (
    <div className="svx-page">
      {/* ============ HERO ============ */}
      <section className="svx-hero">
        <div className="svx-hero-mesh"/>
        <div className="svx-hero-grain"/>
        <div className="svx-hero-content">
          <F>
            <div className="svx-hero-eyebrow">
              <span className="svx-eb-dot"/>
              What we do
            </div>
          </F>
          <F d={.15}>
            <h1 className="svx-hero-h1">
              <span className="svx-word">Three</span>{" "}
              <span className="svx-word svx-word-2">services.</span>{" "}
              <br/>
              <span className="svx-word svx-word-3">Built</span>{" "}
              <span className="svx-word svx-word-4">to</span>{" "}
              <span className="svx-word svx-word-5 svx-word-accent">outlast trends.</span>
            </h1>
          </F>
          <F d={.6}>
            <p className="svx-hero-sub">No retainers you can't escape. No agency markup. No surprise invoices. Just web, mobile, and SEO, done right, priced honestly, delivered when promised.</p>
          </F>
          <F d={.8}>
            <div className="svx-hero-scroll">
              <div className="svx-scroll-line"/>
              <span>Scroll</span>
            </div>
          </F>
        </div>
        <div className="svx-hero-glow svx-hero-glow-1" style={{transform:`translate3d(0, ${scY*-0.2}px, 0)`}}/>
        <div className="svx-hero-glow svx-hero-glow-2" style={{transform:`translate3d(0, ${scY*-0.35}px, 0)`}}/>
      </section>

      {/* ============ SERVICE PANELS ============ */}
      {SVCS.map((s, idx) => (
        <ServicePanel key={s.id} s={s} idx={idx} scY={scY} go={go}/>
      ))}

      {/* ============ CLOSING CTA ============ */}
      <section className="svx-finale">
        <div className="svx-finale-bg"/>
        <div className="svx-finale-orb svx-finale-orb-1"/>
        <div className="svx-finale-orb svx-finale-orb-2"/>
        <div className="svx-finale-orb svx-finale-orb-3"/>
        <div className="svx-finale-content">
          <F>
            <div className="svx-finale-eyebrow">Let's begin</div>
          </F>
          <F d={.1}>
            <h2 className="svx-finale-h">
              <span style={{display:"block"}}>Your next chapter</span>
              <span className="acc" style={{display:"block"}}>starts with a conversation.</span>
            </h2>
          </F>
          <F d={.25}>
            <p className="svx-finale-sub">Tell us what you're trying to build. We'll tell you what it takes, honestly. No pitch deck. No pressure. Just a real conversation.</p>
          </F>
          <F d={.4}>
            <div className="svx-finale-btns">
              <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="svx-finale-cta">
                <span>Start your project</span>
                <div className="svx-cta-arrow"><A/></div>
              </a>
              <a href="#" onClick={e=>{e.preventDefault();go("pricing")}} className="svx-finale-secondary">
                See pricing →
              </a>
            </div>
          </F>
        </div>
      </section>
    </div>
  );
};

// ── SERVICE PANEL, one cinematic full-viewport section per service ──
const ServicePanel = ({ s, idx, scY, go }) => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);
  const [inRange, setInRange] = useState(false);

  useEffect(() => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const top = r.top + window.scrollY;
    const h = r.height;
    const winH = window.innerHeight;
    // Progress: 0 when section enters from bottom, 1 when section exits at top
    const start = top - winH;
    const end = top + h;
    const p = Math.max(0, Math.min(1, (scY - start) / (end - start)));
    setProgress(p);
    setInRange(p > 0.05 && p < 0.95);
  }, [scY]);

  // Local progress within visible portion (smooth in/out)
  const visProgress = Math.max(0, Math.min(1, (progress - 0.15) / 0.7));
  const heroScale = 0.9 + visProgress * 0.15;
  const heroOpacity = visProgress < 0.1 ? visProgress * 10 : (visProgress > 0.9 ? (1 - visProgress) * 10 : 1);
  const headlineY = (1 - visProgress) * 40;

  return (
    <section ref={ref} id={`svc-${s.id}`} className="svx-panel" data-svc={s.id}>
      <div className="svx-panel-bg" style={{background:`radial-gradient(ellipse 1400px 700px at 50% 30%, ${s.color}0F, transparent 60%)`}}/>

      {/* Particle system per service */}
      <PanelParticles serviceId={s.id} color={s.color} containerRef={ref}/>

      <div className="svx-panel-inner">
        {/* LEFT: oversized headline + intro */}
        <div className="svx-panel-left" style={{transform:`translate3d(0, ${headlineY}px, 0)`, opacity: heroOpacity}}>
          <div className="svx-panel-eyebrow" style={{color:s.color}}>
            <div className="svx-panel-eb-line" style={{background:s.color}}/>
            {s.eyebrow}
          </div>
          <h2 className="svx-panel-h">
            {s.headline.split("\n").map((line, i) => (
              <span key={i} className="svx-panel-h-line">{line}</span>
            ))}
          </h2>
          <p className="svx-panel-pitch">{s.pitch}</p>

          <div className="svx-panel-stat">
            <div className="svx-panel-stat-n" style={{color:s.color}}>{s.stat.n}</div>
            <div className="svx-panel-stat-l">{s.stat.l}</div>
          </div>
        </div>

        {/* RIGHT: hero image with parallax + floating spec card */}
        <div className="svx-panel-right">
          <div className="svx-panel-img-frame" style={{
            transform:`translate3d(0, ${(1-visProgress)*-30}px, 0) scale(${heroScale})`,
            borderColor:`${s.color}33`,
          }}>
            <img src={s.img} alt={`NetTracePro ${s.eyebrow} services`} className="svx-panel-img"/>
            <div className="svx-panel-img-overlay" style={{
              background:`linear-gradient(135deg, transparent 0%, ${s.color}15 50%, transparent 100%)`
            }}/>
            <div className="svx-panel-img-vignette"/>
          </div>
          {/* Floating service tag */}
          <div className="svx-panel-floating-tag" style={{
            borderColor:`${s.color}40`,
            transform:`translate3d(0, ${(1-visProgress)*40}px, 0)`,
            opacity: heroOpacity * 0.95,
          }}>
            <div className="svx-tag-dot" style={{background:s.color, boxShadow:`0 0 12px ${s.color}`}}/>
            <span>Available now</span>
          </div>
        </div>
      </div>

      {/* BOTTOM: big claim band */}
      <div className="svx-panel-claim" style={{opacity: heroOpacity}}>
        <h3 className="svx-claim-h" style={{color:s.color}}>{s.bigClaim}</h3>
        <p className="svx-claim-p">{s.bigClaimSub}</p>
      </div>

      {/* BULLETS, 4-column stagger reveal */}
      <div className="svx-panel-grid">
        {s.bullets.map((b, i) => (
          <F key={i} d={i*.08}>
            <div className="svx-panel-cell" style={{"--svc": s.color}}>
              <div className="svx-cell-t">{b.t}</div>
              <div className="svx-cell-d">{b.d}</div>
            </div>
          </F>
        ))}
      </div>

      {/* CTA */}
      <div className="svx-panel-cta-row">
        <F>
          <a href="#" onClick={e=>{e.preventDefault();go(s.go)}} className="svx-panel-cta" style={{
            background:s.color, color:"#0a0a0a"
          }}>
            <span>Start your {s.eyebrow.split(" ")[0].toLowerCase()} project</span>
            <A/>
          </a>
        </F>
      </div>
    </section>
  );
};

// ── SERVICE DETAIL ──
const SvcDetail = ({ id, go }) => {
  const sv = SV.find(x => x.id === id) || SV[0];
  return (
    <>
      <PB l="NetTracePro Service" t={sv.t} s={sv.sh}/>
      <section className="sec">
        <div className="sdg">
          <FX dir="l">
            <div>
              <h2 className="title" style={{fontSize:26}}>Overview</h2>
              <p style={{color:"var(--tm)",lineHeight:1.8,fontWeight:300,marginBottom:28}}>{sv.fl}</p>
              <h3 style={{color:"var(--w)",fontSize:17,fontWeight:600,marginBottom:14}}>What's Included</h3>
              <div className="flist">{sv.ft.map((f,i) => (
                <div key={i} className="fitem"><div className="fchk">{IC.k}</div><span>{f}</span></div>
              ))}</div>
            </div>
          </FX>
          <FX dir="r">
            <div style={{display:"flex",flexDirection:"column",gap:16}}>
              <img src={sv.img} alt={`NetTracePro ${sv.t}`} style={{width:'100%',height:360,objectFit:'cover',borderRadius:10,background:'#0d0d0d'}}/>
              <div style={{background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,padding:24}}>
                <h3 style={{color:"var(--w)",fontSize:15,fontWeight:600,marginBottom:16}}>The NetTracePro Process</h3>
                {sv.pr.map((p,i) => (
                  <div key={i} className="prs"><div className="prn">0{i+1}</div><div className="prt">{p}</div></div>
                ))}
              </div>
              <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg" style={{textAlign:"center",justifyContent:"center"}}>Start With NetTracePro <A/></a>
            </div>
          </FX>
        </div>
      </section>
    </>
  );
};

// ── ABOUT (cinematic / origin-story / values-driven) ──
const About = ({ go }) => {
  const [scY, setScY] = useState(0);
  useEffect(() => {
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { setScY(window.scrollY); raf = null; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  const VALUES = [
    {
      eyebrow: "Belief 01",
      headline: "Good design is\nnot a luxury.",
      conviction: "It's the difference between being found and being forgotten.",
      expand: "Every business deserves a website that loads fast, ranks on Google, and converts visitors into customers, regardless of whether they can afford a six-figure agency budget. We exist to close that gap.",
      color: "#00E676",
      particleType: "embers",
    },
    {
      eyebrow: "Belief 02",
      headline: "Speed is a\nfeature, not\nan afterthought.",
      conviction: "If your site loads slowly, you're losing customers before they see you.",
      expand: "We optimize for Core Web Vitals from day one. No bloated page builders. No 4MB hero images. No third-party scripts loaded for vanity metrics. Sub-2-second loads, every time.",
      color: "#82AAFF",
      particleType: "ripples",
    },
    {
      eyebrow: "Belief 03",
      headline: "We don't believe\nin retainers\nyou can't escape.",
      conviction: "If we have to lock you in, we haven't earned your business.",
      expand: "Our pricing is transparent. Our contracts are fair. If you ever leave, we hand over every file, every line of code, every asset. That's it. No clawbacks, no hostage data.",
      color: "#C3E88D",
      particleType: "constellation",
    },
    {
      eyebrow: "Belief 04",
      headline: "Launch is the\nstarting line,\nnot the finish.",
      conviction: "A website is a living asset. We treat it like one.",
      expand: "Most agencies disappear the moment your site goes live. We're still there at month six, optimizing what's working and fixing what isn't. Your growth is ongoing, so is our work.",
      color: "#FFB86C",
      particleType: "trails",
    },
  ];

  return (
    <div className="ax-page">
      {/* ════════════════════════════════════════════════
          SECTION 1, ORIGIN HERO
          ════════════════════════════════════════════════ */}
      <section className="ax-hero">
        <AxHeroParticles/>
        <div className="ax-hero-grain"/>
        <div className="ax-hero-glow" style={{transform:`translate3d(0, ${scY*-0.3}px, 0)`}}/>

        <div className="ax-hero-content">
          <F>
            <div className="ax-hero-eyebrow">
              <div className="ax-eb-line"/>
              <span>Our story</span>
              <div className="ax-eb-line"/>
            </div>
          </F>
          <F d={.2}>
            <h1 className="ax-hero-h1">
              <span className="ax-hero-line">We started NetTracePro</span>
              <span className="ax-hero-line ax-hero-line-2">because good websites</span>
              <span className="ax-hero-line ax-hero-line-3">shouldn't be a <span className="ax-hero-accent">luxury.</span></span>
            </h1>
          </F>
          <F d={.7}>
            <div className="ax-hero-tag">
              <div className="ax-hero-pulse"/>
              <span>Read why →</span>
            </div>
          </F>
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 2, THE WHY (scroll-revealed conviction)
          ════════════════════════════════════════════════ */}
      <AxOriginStory scY={scY}/>

      {/* ════════════════════════════════════════════════
          SECTION 3, FOUR BELIEFS (cinematic value bands)
          ════════════════════════════════════════════════ */}
      {VALUES.map((v, idx) => (
        <AxValueBand key={idx} value={v} idx={idx} scY={scY}/>
      ))}

      {/* ════════════════════════════════════════════════
          SECTION 4, PROOF (what those beliefs produce)
          ════════════════════════════════════════════════ */}
      <section className="ax-proof">
        <div className="ax-proof-bg"/>
        <F>
          <div className="ax-proof-eyebrow">
            <div className="ax-eb-line"/>
            <span>What it produces</span>
          </div>
        </F>
        <F d={.1}>
          <h2 className="ax-proof-h">
            Beliefs are easy.<br/>
            <span className="acc">Results are the proof.</span>
          </h2>
        </F>
        <div className="ax-proof-grid">
          {[
            {n:"15+", l:"Projects shipped", d:"Each one custom-coded, never templated."},
            {n:"100%", l:"On-time delivery", d:"We hit the date we promised. Every time."},
            {n:"4+", l:"Years building", d:"Long enough to know what works. Not so long we got cynical."},
            {n:"5★", l:"Client rating", d:"Across every project, every relationship."},
          ].map((s,i) => (
            <F key={i} d={i*.08}>
              <div className="ax-proof-cell">
                <div className="ax-proof-n">{s.n}</div>
                <div className="ax-proof-l">{s.l}</div>
                <div className="ax-proof-d">{s.d}</div>
              </div>
            </F>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          SECTION 5, WHAT WE WON'T DO (closing)
          ════════════════════════════════════════════════ */}
      <section className="ax-wont">
        <div className="ax-wont-bg"/>
        <F>
          <div className="ax-wont-eyebrow">For the record</div>
        </F>
        <F d={.1}>
          <h2 className="ax-wont-h">
            What we <span className="ax-wont-strike">won't</span> do.
          </h2>
        </F>
        <div className="ax-wont-list">
          {[
            "We won't lock you into a retainer you can't escape.",
            "We won't build your site on a bloated WordPress template.",
            "We won't disappear the moment your site goes live.",
            "We won't promise page-one rankings in 30 days. Nobody can.",
            "We won't outsource your project and add 200% to the invoice.",
            "We won't keep your files hostage if you ever decide to leave.",
          ].map((line, i) => (
            <F key={i} d={i*.06}>
              <div className="ax-wont-line">
                <div className="ax-wont-x">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </div>
                <span>{line}</span>
              </div>
            </F>
          ))}
        </div>
      </section>

      {/* ════════════════════════════════════════════════
          CLOSING CTA
          ════════════════════════════════════════════════ */}
      <section className="ax-finale">
        <div className="ax-finale-bg"/>
        <div className="ax-finale-orb ax-finale-orb-1"/>
        <div className="ax-finale-orb ax-finale-orb-2"/>
        <div className="ax-finale-content">
          <F>
            <h2 className="ax-finale-h">
              Now you know <span className="acc">why we exist.</span>
            </h2>
          </F>
          <F d={.15}>
            <p className="ax-finale-sub">If our beliefs match yours, the rest of the conversation will be easy.</p>
          </F>
          <F d={.3}>
            <div className="ax-finale-btns">
              <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="ax-finale-cta">
                <span>Start the conversation</span>
                <div className="ax-cta-arrow"><A/></div>
              </a>
              <a href="#" onClick={e=>{e.preventDefault();go("services")}} className="ax-finale-secondary">
                See what we do →
              </a>
            </div>
          </F>
        </div>
      </section>
    </div>
  );
};

// ── HERO PARTICLES ── for About hero (slow drifting embers + faint network)
const AxHeroParticles = () => {
  const c = useRef(null);
  useEffect(() => {
    const cv = c.current; if (!cv) return;
    const ctx = cv.getContext('2d');
    let w = cv.width = cv.parentElement.offsetWidth;
    let h = cv.height = cv.parentElement.offsetHeight;
    const embers = Array.from({length:35},()=>({
      x:Math.random()*w, y:Math.random()*h,
      vx:(Math.random()-.5)*.15, vy:-(Math.random()*.3+.1),
      r:Math.random()*1.5+.5,
      phase:Math.random()*Math.PI*2,
      sp:Math.random()*.02+.01,
    }));
    let af;
    const draw = () => {
      ctx.fillStyle='rgba(4,4,4,0.08)';
      ctx.fillRect(0,0,w,h);
      embers.forEach(e=>{
        e.x+=e.vx; e.y+=e.vy; e.phase+=e.sp;
        if(e.y<-10){e.y=h+10; e.x=Math.random()*w;}
        if(e.x<0||e.x>w)e.vx*=-1;
        const flicker = .25 + Math.sin(e.phase)*.2;
        ctx.beginPath();
        ctx.arc(e.x,e.y,e.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(0,230,118,${flicker})`;
        ctx.fill();
        // Outer glow
        const g = ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,e.r*6);
        g.addColorStop(0,`rgba(0,230,118,${flicker*.3})`);
        g.addColorStop(1,'rgba(0,230,118,0)');
        ctx.fillStyle=g;
        ctx.beginPath();
        ctx.arc(e.x,e.y,e.r*6,0,Math.PI*2);
        ctx.fill();
      });
      af=requestAnimationFrame(draw);
    };
    draw();
    const rs=()=>{w=cv.width=cv.parentElement.offsetWidth;h=cv.height=cv.parentElement.offsetHeight;};
    window.addEventListener('resize',rs);
    return()=>{cancelAnimationFrame(af);window.removeEventListener('resize',rs);};
  },[]);
  return <canvas ref={c} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:1}}/>;
};

// ── ORIGIN STORY ── scroll-pinned section with revealed sentences
const AxOriginStory = ({ scY }) => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const top = r.top + window.scrollY;
    const h = r.height;
    const winH = window.innerHeight;
    const start = top - winH * 0.5;
    const end = top + h - winH * 0.5;
    const p = Math.max(0, Math.min(1, (scY - start) / (end - start)));
    setProgress(p);
  }, [scY]);

  const lines = [
    { t: "We saw what agencies were charging.", trigger: 0.0 },
    { t: "We saw what they were delivering.", trigger: 0.15 },
    { t: "It didn't add up.", trigger: 0.32, accent: true },
    { t: "Templates dressed up as custom work.", trigger: 0.45 },
    { t: "Retainers that locked you in.", trigger: 0.58 },
    { t: "Promises that vanished at launch.", trigger: 0.7 },
    { t: "So we built something different.", trigger: 0.84, accent: true, big: true },
  ];

  return (
    <section ref={ref} className="ax-origin">
      <div className="ax-origin-bg"/>
      <div className="ax-origin-content">
        <div className="ax-origin-eyebrow">Why we exist</div>
        <div className="ax-origin-lines">
          {lines.map((line, i) => {
            const visible = progress >= line.trigger;
            return (
              <div
                key={i}
                className={`ax-origin-line ${line.accent ? "ax-origin-accent" : ""} ${line.big ? "ax-origin-big" : ""}`}
                style={{
                  opacity: visible ? 1 : 0.08,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  filter: visible ? "blur(0)" : "blur(2px)",
                }}
              >
                {line.t}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

// ── VALUE BAND ── one full-width band per belief with unique particle effect
const AxValueBand = ({ value, idx, scY }) => {
  const ref = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    const top = r.top + window.scrollY;
    const h = r.height;
    const winH = window.innerHeight;
    const start = top - winH;
    const end = top + h;
    const p = Math.max(0, Math.min(1, (scY - start) / (end - start)));
    setProgress(p);
  }, [scY]);

  const visProgress = Math.max(0, Math.min(1, (progress - 0.15) / 0.7));
  const headlineY = (1 - visProgress) * 30;
  const opacity = visProgress < 0.1 ? visProgress * 10 : (visProgress > 0.9 ? (1 - visProgress) * 10 : 1);

  const align = idx % 2 === 0 ? "left" : "right";

  return (
    <section ref={ref} className={`ax-band ax-band-${align}`}>
      <AxValueParticles type={value.particleType} color={value.color} containerRef={ref}/>
      <div className="ax-band-bg" style={{
        background: `radial-gradient(ellipse 1400px 800px at 50% 50%, ${value.color}14, transparent 60%)`
      }}/>
      <div className="ax-band-content" style={{transform:`translate3d(0, ${headlineY}px, 0)`, opacity}}>
        <div className="ax-band-eyebrow" style={{color: value.color}}>
          <div className="ax-eb-line" style={{background: value.color}}/>
          <span>{value.eyebrow}</span>
        </div>
        <h2 className="ax-band-h">
          {value.headline.split("\n").map((line, i, arr) => (
            <span
              key={i}
              className="ax-band-h-line"
              style={i === arr.length - 1 ? {color: value.color} : undefined}
            >{line}</span>
          ))}
        </h2>
        <p className="ax-band-conviction" style={{color: value.color}}>
          "{value.conviction}"
        </p>
        <p className="ax-band-expand">{value.expand}</p>
      </div>
    </section>
  );
};

// ── VALUE BAND PARTICLES ── unique particle systems per belief
const AxValueParticles = ({ type, color, containerRef }) => {
  const canvasRef = useRef(null);
  const visibleRef = useRef(false);

  useEffect(() => {
    const cv = canvasRef.current;
    if (!cv || !containerRef.current) return;
    const ctx = cv.getContext('2d');
    const parent = containerRef.current;
    let w = cv.width = parent.offsetWidth;
    let h = cv.height = parent.offsetHeight;

    const hex = color.replace('#','');
    const r = parseInt(hex.slice(0,2), 16);
    const g = parseInt(hex.slice(2,4), 16);
    const b = parseInt(hex.slice(4,6), 16);
    const rgba = (a) => `rgba(${r},${g},${b},${a})`;

    const io = new IntersectionObserver(
      ([entry]) => { visibleRef.current = entry.isIntersecting; },
      { threshold: 0 }
    );
    io.observe(parent);

    let af;

    // ═══ EMBERS, slow rising particles with flicker ═══
    if (type === "embers") {
      const embers = Array.from({length:30},()=>({
        x:Math.random()*w, y:Math.random()*h,
        vx:(Math.random()-.5)*.15, vy:-(Math.random()*.3+.1),
        r:Math.random()*1.5+.5,
        phase:Math.random()*Math.PI*2,
        sp:Math.random()*.02+.01,
      }));
      const draw = () => {
        if (!visibleRef.current) { af = requestAnimationFrame(draw); return; }
        ctx.fillStyle='rgba(4,4,4,0.1)';
        ctx.fillRect(0,0,w,h);
        embers.forEach(e=>{
          e.x+=e.vx; e.y+=e.vy; e.phase+=e.sp;
          if(e.y<-10){e.y=h+10; e.x=Math.random()*w;}
          if(e.x<0||e.x>w)e.vx*=-1;
          const flicker = .3 + Math.sin(e.phase)*.25;
          const grad = ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,e.r*7);
          grad.addColorStop(0,rgba(flicker*.5));
          grad.addColorStop(1,rgba(0));
          ctx.fillStyle=grad;
          ctx.beginPath();
          ctx.arc(e.x,e.y,e.r*7,0,Math.PI*2);
          ctx.fill();
          ctx.fillStyle=rgba(flicker);
          ctx.beginPath();
          ctx.arc(e.x,e.y,e.r,0,Math.PI*2);
          ctx.fill();
        });
        af=requestAnimationFrame(draw);
      };
      draw();
    }

    // ═══ RIPPLES, expanding concentric circles from random origins ═══
    else if (type === "ripples") {
      const ripples = [];
      const maxRipples = 6;
      const spawnRipple = () => ({
        x: Math.random()*w, y: Math.random()*h,
        radius: 0,
        maxRadius: 200 + Math.random()*200,
        speed: .8 + Math.random()*.6,
      });
      // Pre-populate
      for (let i=0;i<maxRipples;i++) {
        const r = spawnRipple();
        r.radius = Math.random() * r.maxRadius;
        ripples.push(r);
      }
      const draw = () => {
        if (!visibleRef.current) { af = requestAnimationFrame(draw); return; }
        ctx.clearRect(0,0,w,h);
        ripples.forEach((rip, idx) => {
          rip.radius += rip.speed;
          const lifeRatio = 1 - (rip.radius / rip.maxRadius);
          if (lifeRatio <= 0) {
            ripples[idx] = spawnRipple();
            return;
          }
          ctx.strokeStyle = rgba(lifeRatio * 0.4);
          ctx.lineWidth = 1.2;
          ctx.beginPath();
          ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI*2);
          ctx.stroke();
          // Inner faint fill
          const innerGrad = ctx.createRadialGradient(rip.x,rip.y,0,rip.x,rip.y,rip.radius);
          innerGrad.addColorStop(0,rgba(0));
          innerGrad.addColorStop(0.85,rgba(0));
          innerGrad.addColorStop(1,rgba(lifeRatio*.15));
          ctx.fillStyle = innerGrad;
          ctx.beginPath();
          ctx.arc(rip.x, rip.y, rip.radius, 0, Math.PI*2);
          ctx.fill();
        });
        af=requestAnimationFrame(draw);
      };
      draw();
    }

    // ═══ CONSTELLATION, slow stars connected by faint lines ═══
    else if (type === "constellation") {
      const stars = Array.from({length:40},()=>({
        x:Math.random()*w, y:Math.random()*h,
        vx:(Math.random()-.5)*.12, vy:(Math.random()-.5)*.12,
        r:Math.random()*1.4+.4,
        phase:Math.random()*Math.PI*2,
        sp:.008+Math.random()*.012,
      }));
      const draw = () => {
        if (!visibleRef.current) { af = requestAnimationFrame(draw); return; }
        ctx.clearRect(0,0,w,h);
        stars.forEach(s=>{
          s.x+=s.vx; s.y+=s.vy; s.phase+=s.sp;
          if(s.x<0||s.x>w)s.vx*=-1;
          if(s.y<0||s.y>h)s.vy*=-1;
          const twinkle = .4 + Math.sin(s.phase)*.3;
          // Connection lines
          stars.forEach(o=>{
            const dx=s.x-o.x, dy=s.y-o.y;
            const d=Math.sqrt(dx*dx+dy*dy);
            if (d<140) {
              ctx.strokeStyle = rgba(.1*(1-d/140));
              ctx.lineWidth = .4;
              ctx.beginPath();
              ctx.moveTo(s.x,s.y);
              ctx.lineTo(o.x,o.y);
              ctx.stroke();
            }
          });
          // Star with glow
          const grad = ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r*4);
          grad.addColorStop(0,rgba(twinkle*.5));
          grad.addColorStop(1,rgba(0));
          ctx.fillStyle=grad;
          ctx.beginPath();
          ctx.arc(s.x,s.y,s.r*4,0,Math.PI*2);
          ctx.fill();
          ctx.fillStyle=rgba(twinkle);
          ctx.beginPath();
          ctx.arc(s.x,s.y,s.r,0,Math.PI*2);
          ctx.fill();
        });
        af=requestAnimationFrame(draw);
      };
      draw();
    }

    // ═══ TRAILS, diagonal motion lines ═══
    else if (type === "trails") {
      const trails = Array.from({length:18},()=>({
        x:Math.random()*w, y:Math.random()*h,
        angle: -Math.PI/4 + (Math.random()-.5)*.2,  // mostly diagonal
        speed:.6+Math.random()*1.2,
        len:80+Math.random()*120,
        thickness:.5+Math.random()*1,
        opacity:.15+Math.random()*.35,
      }));
      const draw = () => {
        if (!visibleRef.current) { af = requestAnimationFrame(draw); return; }
        ctx.fillStyle='rgba(4,4,4,0.15)';
        ctx.fillRect(0,0,w,h);
        trails.forEach(t=>{
          t.x += Math.cos(t.angle)*t.speed;
          t.y += Math.sin(t.angle)*t.speed;
          // Wrap around
          if (t.x > w + t.len || t.y < -t.len) {
            t.x = -t.len + Math.random()*100;
            t.y = h + Math.random()*100;
            t.opacity = .15+Math.random()*.35;
          }
          const tailX = t.x - Math.cos(t.angle)*t.len;
          const tailY = t.y - Math.sin(t.angle)*t.len;
          const grad = ctx.createLinearGradient(tailX,tailY,t.x,t.y);
          grad.addColorStop(0,rgba(0));
          grad.addColorStop(.7,rgba(t.opacity*.4));
          grad.addColorStop(1,rgba(t.opacity));
          ctx.strokeStyle = grad;
          ctx.lineWidth = t.thickness;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(tailX,tailY);
          ctx.lineTo(t.x,t.y);
          ctx.stroke();
          ctx.fillStyle = rgba(t.opacity*1.4);
          ctx.beginPath();
          ctx.arc(t.x,t.y,t.thickness*1.4,0,Math.PI*2);
          ctx.fill();
        });
        af=requestAnimationFrame(draw);
      };
      draw();
    }

    const onResize = () => { w = cv.width = parent.offsetWidth; h = cv.height = parent.offsetHeight; };
    window.addEventListener('resize', onResize);
    return () => { cancelAnimationFrame(af); window.removeEventListener('resize', onResize); io.disconnect(); };
  }, [type, color, containerRef]);

  return <canvas ref={canvasRef} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:1}}/>;
};

// ── PORTFOLIO ──
const Portfolio = ({ go }) => {
  const [tilt, setTilt] = useState({x:0,y:0});
  const [scY, setScY] = useState(0);
  useEffect(() => {
    // Skip mouse-tilt on touch devices — saves perf and avoids stuck tilt states
    if (typeof window !== 'undefined' && window.matchMedia('(hover:none) and (pointer:coarse)').matches) return;
    let raf = null;
    let pending = null;
    const onMove = e => {
      pending = e;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const cx = window.innerWidth/2, cy = window.innerHeight/2;
        setTilt({x:(pending.clientY-cy)/cy*4, y:-(pending.clientX-cx)/cx*4});
        raf = null;
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
  useEffect(() => {
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { setScY(window.scrollY); raf = null; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  const depths = [1,.75,.85,.65];
  return (
    <div className="pf-page">
      <PfShards/>
      <div className="pf-bg"/>
      <div className="pf-fog"/>
      <div className="pf-grid-pattern" style={{transform:`translate3d(0, ${scY*0.1}px, 0)`}}/>
      <div className="pf-orb pf-orb-1" style={{transform:`translate3d(0, ${scY*-0.2}px, 0)`}}/>
      <div className="pf-orb pf-orb-2" style={{transform:`translate3d(0, ${scY*-0.35}px, 0)`}}/>
      <div className="pf-orb pf-orb-3" style={{transform:`translate3d(0, ${scY*-0.15}px, 0)`}}/>
      <div className="pf-vignette"/>
      <div className="pf-header">
        <F><div className="label" style={{textAlign:"center"}}>NetTracePro Work</div></F>
        <F d={.08}><h1 className="pf-h1">Projects That <span className="acc">Speak For Themselves</span></h1></F>
        <F d={.15}><p className="pf-sub">Every project is built to perform — beautiful design backed by strategy and SEO that earns rankings.</p></F>
      </div>
      <div className="pf-scene" style={{transform:`perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`}}>
        <div className="pf-grid">
          {PR.map((p,i) => (
            <div key={i} className="pf-card" style={{transform:`translateZ(${(depths[i]-0.75)*70}px)`,animationDelay:`${i*0.5}s`}}>
              <div className="pf-img-wrap">
                <img src={p.img} alt={`NetTracePro, ${p.n}`} className="pf-img"/>
                <div className="pf-img-overlay"/>
                <div className="pf-cat">{p.c}</div>
              </div>
              <div className="pf-info">
                <h3 className="pf-name">{p.n}</h3>
                <p className="pf-desc">{p.d}</p>
                <div className="pf-year">{p.y}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="pf-cta">
        <F><div className="pf-cta-box">
          <h3>Have a project in mind?</h3>
          <p>Every great NetTracePro project starts with a conversation.</p>
          <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg">Start Your Project <A/></a>
        </div></F>
      </div>
    </div>
  );
};

// ── Portfolio drifting shards — floating geometric pieces in 3D space ──
const PfShards = () => {
  const c = useRef(null);
  useEffect(() => {
    const cv = c.current; if (!cv) return;
    const ctx = cv.getContext('2d');
    let w = cv.width = cv.parentElement.offsetWidth;
    let h = cv.height = cv.parentElement.offsetHeight;
    // Mix of small rectangles and short lines drifting slowly
    const shards = Array.from({length:32},()=>{
      const isLine = Math.random() > 0.5;
      const depth = Math.random();  // 0 = far, 1 = near
      return {
        x: Math.random()*w,
        y: Math.random()*h,
        vx: (Math.random()-.5)*.15,
        vy: -(Math.random()*.18+.05),
        rot: Math.random()*Math.PI*2,
        rotSp: (Math.random()-.5)*.003,
        depth,
        size: isLine ? (20 + Math.random()*40) : (4 + Math.random()*8),
        thick: isLine ? (.6 + Math.random()*.8) : (3 + Math.random()*5),
        isLine,
        opacity: 0.08 + depth*0.18,  // closer = more visible
        hue: Math.random()>0.7 ? '130,170,255' : '0,230,118', // mostly green, occasional blue
      };
    });
    let af;
    const draw = () => {
      ctx.clearRect(0,0,w,h);
      shards.forEach(s => {
        s.x += s.vx;
        s.y += s.vy;
        s.rot += s.rotSp;
        // Wrap at edges
        if (s.y < -50) { s.y = h + 50; s.x = Math.random()*w; }
        if (s.x < -50) s.x = w + 50;
        if (s.x > w + 50) s.x = -50;

        ctx.save();
        ctx.translate(s.x, s.y);
        ctx.rotate(s.rot);

        if (s.isLine) {
          // Drifting line shard
          ctx.strokeStyle = `rgba(${s.hue},${s.opacity})`;
          ctx.lineWidth = s.thick;
          ctx.lineCap = 'round';
          ctx.beginPath();
          ctx.moveTo(-s.size/2, 0);
          ctx.lineTo(s.size/2, 0);
          ctx.stroke();
        } else {
          // Drifting square
          ctx.strokeStyle = `rgba(${s.hue},${s.opacity*1.2})`;
          ctx.lineWidth = .8;
          ctx.strokeRect(-s.size/2, -s.size/2, s.size, s.size);
          // Subtle inner glow
          ctx.fillStyle = `rgba(${s.hue},${s.opacity*0.3})`;
          ctx.fillRect(-s.size/2, -s.size/2, s.size, s.size);
        }
        ctx.restore();
      });
      af = requestAnimationFrame(draw);
    };
    draw();
    const rs = () => { w=cv.width=cv.parentElement.offsetWidth; h=cv.height=cv.parentElement.offsetHeight; };
    window.addEventListener('resize', rs);
    return () => { cancelAnimationFrame(af); window.removeEventListener('resize', rs); };
  }, []);
  return <canvas ref={c} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:1}}/>;
};


// ── TESTIMONIALS (single hero containing everything, no glow effects) ──
const Testimonials = ({ go }) => {
  const [scY, setScY] = useState(0);
  const [tilt, setTilt] = useState({x:0,y:0});
  useEffect(() => {
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { setScY(window.scrollY); raf = null; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);
  useEffect(() => {
    // Skip mouse-tilt on touch devices
    if (typeof window !== 'undefined' && window.matchMedia('(hover:none) and (pointer:coarse)').matches) return;
    let raf = null;
    let pending = null;
    const onMove = e => {
      pending = e;
      if (raf) return;
      raf = requestAnimationFrame(() => {
        const cx = window.innerWidth/2, cy = window.innerHeight/2;
        const dx = (pending.clientX-cx)/cx, dy = (pending.clientY-cy)/cy;
        setTilt({x:dy*3.5, y:-dx*3.5});
        raf = null;
      });
    };
    window.addEventListener('mousemove', onMove, { passive: true });
    return () => {
      window.removeEventListener('mousemove', onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  const TESTIMONIALS = [
    {
      name: "Takween AI",
      role: "AI Platform Client",
      bg: "linear-gradient(135deg,#E8A020,#F0C060)",
      quote: "NetTracePro transformed our entire digital presence. Results within weeks.",
    },
    {
      name: "M.A. CPA Inc.",
      role: "Consulting Client",
      bg: "linear-gradient(135deg,#4CAF50,#2E7D32)",
      quote: "Our new site looks incredible and brought in new clients we never would have found.",
    },
    {
      name: "SimpleTouch",
      role: "Software Client",
      bg: "linear-gradient(135deg,#42A5F5,#1565C0)",
      quote: "Professionalism and dedication unmatched. They consistently exceed expectations.",
    },
    {
      name: "E-Commerce Owner",
      role: "Online Store",
      bg: "linear-gradient(135deg,#9C27B0,#6A1B9A)",
      quote: "Best investment we made for our business. The website practically sells itself.",
    },
    {
      name: "Creative Studio",
      role: "Portfolio Client",
      bg: "linear-gradient(135deg,#00BCD4,#00838F)",
      quote: "They delivered exactly what we envisioned, on time and on budget. Truly exceptional.",
    },
    {
      name: "Service Business",
      role: "SEO Client",
      bg: "linear-gradient(135deg,#26A69A,#00695C)",
      quote: "Our Google rankings jumped to page one within two months. Incredible SEO work.",
    },
    {
      name: "Startup Founder",
      role: "Full Package",
      bg: "linear-gradient(135deg,#FF7043,#D84315)",
      quote: "NetTracePro genuinely cares. They checked in throughout the whole process.",
    },
    {
      name: "Tech Company",
      role: "Web App Client",
      bg: "linear-gradient(135deg,#66BB6A,#2E7D32)",
      quote: "Clean code, beautiful design, and they explained everything along the way.",
    },
    {
      name: "Retail Business",
      role: "Redesign Client",
      bg: "linear-gradient(135deg,#FFA726,#EF6C00)",
      quote: "Worth every penny. Our old site was costing us customers. This one converts.",
    },
  ];

  return (
    <div className="tx-page">
      {/* Single full-page hero containing everything */}
      <section className="tx-hero">
        <TxHeroParticles/>
        <div className="tx-hero-glow" style={{transform:`translate3d(0, ${scY*-0.15}px, 0)`}}/>

        <div className="tx-hero-inner">
          {/* Hero header */}
          <div className="tx-hero-header">
            <F>
              <div className="tx-hero-eyebrow">
                <div className="tx-eb-line"/>
                <span>Client Testimonials</span>
                <div className="tx-eb-line"/>
              </div>
            </F>
            <F d={.15}>
              <h1 className="tx-hero-h1">
                NetTracePro<br/>
                <span className="tx-hero-accent">Clients Love Us</span>
              </h1>
            </F>
            <F d={.45}>
              <p className="tx-hero-sub">
                Don't take our word for it. Here's what businesses say after working with NetTracePro.
              </p>
            </F>
            <F d={.6}>
              <div className="tx-hero-rating">
                <div className="tx-hero-stars">
                  {[...Array(5)].map((_,i) => <span key={i} className="tx-hero-star">★</span>)}
                </div>
                <span className="tx-hero-rating-text">5.0 average across all projects</span>
              </div>
            </F>
          </div>

          {/* Grid of 9 testimonial cards with 3D mouse-tilt */}
          <div
            className="tx-grid-scene"
            style={{transform:`perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`}}
          >
            <div className="tx-grid">
              {TESTIMONIALS.map((c, i) => (
                <F key={i} d={(i%3)*.08}>
                  <div className={`tx-card tx-card-col-${(i%3)+1}`}>
                    <div className="tx-card-head">
                      <div className="tx-card-avatar" style={{background:c.bg}}>{IC.u}</div>
                      <div className="tx-card-id">
                        <div className="tx-card-name">{c.name}</div>
                        <div className="tx-card-role">{c.role}</div>
                      </div>
                      <div className="tx-card-stars">
                        {[...Array(5)].map((_,j) => <span key={j}>★</span>)}
                      </div>
                    </div>
                    <p className="tx-card-quote">"{c.quote}"</p>
                    <div className="tx-card-divider"/>
                    <div className="tx-card-verified">
                      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>
                      <span>Verified Client</span>
                    </div>
                  </div>
                </F>
              ))}
            </div>
          </div>

          {/* Stat strip */}
          <F d={.4}>
            <div className="tx-stats">
              <div className="tx-stat">
                <div className="tx-stat-n">15<span>+</span></div>
                <div className="tx-stat-l">Projects</div>
              </div>
              <div className="tx-stat-divider"/>
              <div className="tx-stat">
                <div className="tx-stat-n">100<span>%</span></div>
                <div className="tx-stat-l">Satisfaction</div>
              </div>
              <div className="tx-stat-divider"/>
              <div className="tx-stat">
                <div className="tx-stat-n">5<span>★</span></div>
                <div className="tx-stat-l">Rating</div>
              </div>
              <div className="tx-stat-divider"/>
              <div className="tx-stat">
                <div className="tx-stat-n">4<span>+</span></div>
                <div className="tx-stat-l">Years</div>
              </div>
            </div>
          </F>

          {/* CTA */}
          <F d={.55}>
            <div className="tx-cta-row">
              <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="tx-cta">
                <span>Start Your Project with NetTracePro</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="5" y1="12" x2="19" y2="12"/>
                  <polyline points="12 5 19 12 12 19"/>
                </svg>
              </a>
            </div>
          </F>
        </div>
      </section>
    </div>
  );
};

// ── Hero particles for testimonials — golden warm flicker ──
const TxHeroParticles = () => {
  const c = useRef(null);
  useEffect(() => {
    const cv = c.current; if (!cv) return;
    const ctx = cv.getContext('2d');
    let w = cv.width = cv.parentElement.offsetWidth;
    let h = cv.height = cv.parentElement.offsetHeight;
    const sparks = Array.from({length:45},()=>({
      x:Math.random()*w, y:Math.random()*h,
      vx:(Math.random()-.5)*.18, vy:-(Math.random()*.25+.05),
      r:Math.random()*1.4+.4,
      phase:Math.random()*Math.PI*2,
      sp:Math.random()*.018+.008,
      hue:Math.random()>.5,
    }));
    let af;
    const draw = () => {
      ctx.fillStyle='rgba(4,4,4,0.1)';
      ctx.fillRect(0,0,w,h);
      sparks.forEach(s => {
        s.x+=s.vx; s.y+=s.vy; s.phase+=s.sp;
        if(s.y<-10){s.y=h+10; s.x=Math.random()*w;}
        if(s.x<0||s.x>w)s.vx*=-1;
        const flicker = .25 + Math.sin(s.phase)*.2;
        const color = s.hue ? '0,230,118' : '232,160,32'; // green or warm gold
        // Outer halo
        const grad = ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,s.r*7);
        grad.addColorStop(0,`rgba(${color},${flicker*.4})`);
        grad.addColorStop(1,`rgba(${color},0)`);
        ctx.fillStyle=grad;
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r*7,0,Math.PI*2); ctx.fill();
        // Core
        ctx.fillStyle=`rgba(${color},${flicker})`;
        ctx.beginPath(); ctx.arc(s.x,s.y,s.r,0,Math.PI*2); ctx.fill();
      });
      af=requestAnimationFrame(draw);
    };
    draw();
    const rs=()=>{w=cv.width=cv.parentElement.offsetWidth;h=cv.height=cv.parentElement.offsetHeight;};
    window.addEventListener('resize',rs);
    return()=>{cancelAnimationFrame(af);window.removeEventListener('resize',rs);};
  },[]);
  return <canvas ref={c} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:1}}/>;
};

// ── CONTACT ──
// ── CONTACT (one section / dramatic background / two CTAs) ──
const Contact = () => {
  return (
    <div className="cx-page">
      <section className="cx-stage">
        {/* Dramatic background layers */}
        <CxAuroraBg/>
        <CxGridLines/>
        <div className="cx-aurora-glow"/>
        <div className="cx-aurora-vignette"/>

        <div className="cx-content">
          <F>
            <div className="cx-eyebrow">
              <div className="cx-eb-line"/>
              <span>Get in touch</span>
              <div className="cx-eb-line"/>
            </div>
          </F>

          <F d={.15}>
            <h1 className="cx-h1">
              Let's build<br/>
              <span className="cx-h1-accent">something great.</span>
            </h1>
          </F>

          <F d={.4}>
            <p className="cx-sub">
              Pick whichever way is easiest. We'll take it from there.
            </p>
          </F>

          <div className="cx-actions">
            <F d={.55}>
              <a href="tel:+17132699658" className="cx-action cx-action-call">
                <div className="cx-action-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                  </svg>
                </div>
                <span>Call (713) 269-9658</span>
              </a>
            </F>
            <F d={.7}>
              <a href="mailto:info@nettracepro.com" className="cx-action cx-action-email">
                <div className="cx-action-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="4" width="20" height="16" rx="2"/>
                    <path d="M22 7l-10 7L2 7"/>
                  </svg>
                </div>
                <span>info@nettracepro.com</span>
              </a>
            </F>
          </div>
        </div>
      </section>
    </div>
  );
};

// ── Aurora particles — flowing horizontal beams of light, unique to Contact ──
const CxAuroraBg = () => {
  const c = useRef(null);
  useEffect(() => {
    const cv = c.current; if (!cv) return;
    const ctx = cv.getContext('2d');
    let w = cv.width = cv.parentElement.offsetWidth;
    let h = cv.height = cv.parentElement.offsetHeight;
    // Aurora beams — flowing horizontal ribbons of green light
    const beams = Array.from({length:6}, (_, i) => ({
      y: (h / 7) * (i + 1) + (Math.random()-.5)*60,
      baseY: (h / 7) * (i + 1),
      amp: 30 + Math.random()*60,
      freq: 0.0008 + Math.random()*0.0014,
      phase: Math.random()*Math.PI*2,
      speed: 0.0008 + Math.random()*0.0012,
      width: 100 + Math.random()*200,
      opacity: 0.08 + Math.random()*0.12,
      hue: i % 2 === 0 ? '0,230,118' : '130,200,180', // mostly green, occasional cool-green
    }));
    // Floating dust motes
    const motes = Array.from({length:50}, () => ({
      x: Math.random()*w,
      y: Math.random()*h,
      vx: (Math.random()-.5)*.15,
      vy: -(Math.random()*.18+.04),
      r: Math.random()*1.4 + .3,
      phase: Math.random()*Math.PI*2,
      sp: Math.random()*.013 + .005,
    }));
    let time = 0;
    let af;
    const draw = () => {
      time += 1;
      ctx.clearRect(0, 0, w, h);

      // Draw aurora beams as flowing curves
      beams.forEach(b => {
        b.phase += b.speed;
        ctx.save();
        // Gradient stretching across the beam
        const grad = ctx.createLinearGradient(0, b.baseY - b.width/2, 0, b.baseY + b.width/2);
        grad.addColorStop(0, `rgba(${b.hue},0)`);
        grad.addColorStop(0.5, `rgba(${b.hue},${b.opacity})`);
        grad.addColorStop(1, `rgba(${b.hue},0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, b.baseY);
        // Draw wavy curve across the screen
        for (let x = 0; x <= w; x += 12) {
          const y = b.baseY + Math.sin(x * b.freq + b.phase) * b.amp;
          ctx.lineTo(x, y);
        }
        for (let x = w; x >= 0; x -= 12) {
          const y = b.baseY + Math.sin(x * b.freq + b.phase) * b.amp + b.width;
          ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.filter = 'blur(40px)';
        ctx.fill();
        ctx.filter = 'none';
        ctx.restore();
      });

      // Draw dust motes on top
      motes.forEach(m => {
        m.x += m.vx; m.y += m.vy; m.phase += m.sp;
        if (m.y < -10) { m.y = h + 10; m.x = Math.random()*w; }
        if (m.x < 0 || m.x > w) m.vx *= -1;
        const flicker = 0.3 + Math.sin(m.phase) * 0.25;
        // Halo
        const grad = ctx.createRadialGradient(m.x, m.y, 0, m.x, m.y, m.r * 6);
        grad.addColorStop(0, `rgba(0,230,118,${flicker * 0.4})`);
        grad.addColorStop(1, `rgba(0,230,118,0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r * 6, 0, Math.PI * 2);
        ctx.fill();
        // Core
        ctx.fillStyle = `rgba(0,230,118,${flicker})`;
        ctx.beginPath();
        ctx.arc(m.x, m.y, m.r, 0, Math.PI * 2);
        ctx.fill();
      });

      af = requestAnimationFrame(draw);
    };
    draw();
    const rs = () => { w = cv.width = cv.parentElement.offsetWidth; h = cv.height = cv.parentElement.offsetHeight; };
    window.addEventListener('resize', rs);
    return () => { cancelAnimationFrame(af); window.removeEventListener('resize', rs); };
  }, []);
  return <canvas ref={c} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:1}}/>;
};

// ── Subtle perspective grid lines drifting forward ──
const CxGridLines = () => {
  return (
    <svg className="cx-grid-svg" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" viewBox="0 0 1000 800">
      <defs>
        <linearGradient id="cxGridFade" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="rgba(0,230,118,0)"/>
          <stop offset="50%" stopColor="rgba(0,230,118,.2)"/>
          <stop offset="100%" stopColor="rgba(0,230,118,0)"/>
        </linearGradient>
      </defs>
      {/* Horizontal perspective lines (vanish toward center) */}
      {[...Array(8)].map((_, i) => {
        const offset = i * 100;
        return (
          <line
            key={i}
            x1="0"
            y1={400 + offset - 350}
            x2="1000"
            y2={400 + offset - 350}
            stroke="url(#cxGridFade)"
            strokeWidth="0.5"
          />
        );
      })}
    </svg>
  );
};

// ── PRICING (cinematic / hierarchy-driven / honest) ──
const Pricing = ({ go }) => {
  const [scY, setScY] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);
  useEffect(() => {
    let raf;
    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => { setScY(window.scrollY); raf = null; });
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => { window.removeEventListener('scroll', onScroll); if (raf) cancelAnimationFrame(raf); };
  }, []);

  const INCLUDED = [
    {
      ic: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
      t: "Custom-coded website",
      d: "Hand-built, never templated. React or Next.js, optimized for speed.",
    },
    {
      ic: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
      t: "SEO from day one",
      d: "Schema markup, semantic HTML, technical SEO baked into the foundation.",
    },
    {
      ic: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
      t: "Hosting & uptime",
      d: "Edge-cached delivery, SSL, 99.9% uptime. We monitor it for you.",
    },
    {
      ic: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
      t: "Priority support",
      d: "Direct access to us — not a ticket queue. Phone, email, or text.",
    },
    {
      ic: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-.08-4.43"/></svg>,
      t: "Monthly updates",
      d: "Content changes, copy tweaks, new pages — included, not extra.",
    },
    {
      ic: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
      t: "Mobile-first design",
      d: "Built for the phone first. Tablets and desktops follow naturally.",
    },
  ];

  const FAQ_PRICING = [
    {
      q: "Why no monthly retainer trap?",
      a: "Because retainers don't measure value, they measure how long you've been a client. We'd rather earn your stay every month than hold you hostage. After year one, you can leave with everything we built — or stay at $100/mo to keep us maintaining it. Your call.",
    },
    {
      q: "What's not included in the price?",
      a: "Anything outside the scope we agree on at the start. Custom integrations with niche third-party tools, professional photography, video production, paid advertising spend, or major redesigns mid-project. We quote those separately and only if you actually need them.",
    },
    {
      q: "Can I cancel mid-project?",
      a: "Yes. You'll be invoiced for completed work to that point — no penalty, no kill fee, no contract trap. We'll hand off whatever has been built, including source code and assets. Cancellation has never happened in practice, but the option is yours.",
    },
    {
      q: "Why is the Full Pay plan so much cheaper?",
      a: "Because paying upfront removes the risk for us. The Flex Plan covers our risk by spreading payment over 12 months. If you can pay it all at once, we pass the savings ($1,100 over 12 months) directly to you. Same exact deliverable.",
    },
    {
      q: "Do you charge for revisions?",
      a: "No, within reason. Most projects include unlimited revisions during the design phase and three rounds of revisions after development starts. If you change direction completely halfway through, we'll have a conversation about scope — but normal feedback never costs extra.",
    },
    {
      q: "What if I want SEO or a mobile app, not just a website?",
      a: "These prices are for websites. SEO services and mobile apps are quoted separately based on scope. The shortest answer: book a discovery call and we'll give you a transparent estimate for whatever you actually need.",
    },
  ];

  return (
    <div className="px-page">
      {/* ════════ HERO ════════ */}
      <section className="px-hero">
        <PxHeroParticles/>
        <div className="px-hero-glow" style={{transform:`translate3d(0, ${scY*-0.2}px, 0)`}}/>
        <div className="px-hero-content">
          <F>
            <div className="px-hero-eyebrow">
              <div className="px-eb-line"/>
              <span>Honest pricing</span>
              <div className="px-eb-line"/>
            </div>
          </F>
          <F d={.15}>
            <h1 className="px-hero-h1">
              No retainers.<br/>
              No markup.<br/>
              <span className="px-hero-accent">No surprises.</span>
            </h1>
          </F>
          <F d={.55}>
            <p className="px-hero-sub">
              Two plans. One price for everything. Pay monthly or upfront — your call. Maintenance, hosting, and support included for a full year.
            </p>
          </F>
        </div>
      </section>

      {/* ════════ PRICING CARDS — the main decision moment ════════ */}
      <section className="px-cards-section">
        <div className="px-cards-bg"/>
        <div className="px-cards-orb px-cards-orb-1"/>
        <div className="px-cards-orb px-cards-orb-2"/>

        <div className="px-cards-wrap">
          {/* FLEX PLAN */}
          <F d={.05}>
            <div className="px-card px-card-flex">
              <div className="px-card-glow" style={{background:"radial-gradient(circle at 70% 0%, rgba(0,230,118,.18), transparent 60%)"}}/>
              <div className="px-card-corner-tag">Most popular</div>
              <div className="px-card-content">
                <div className="px-plan-eyebrow">FLEX PLAN</div>
                <div className="px-plan-name">Pay as you go.</div>
                <div className="px-plan-pitch">For businesses that want to spread the cost.</div>

                <div className="px-price-display">
                  <div className="px-price-row">
                    <span className="px-price-currency">$</span>
                    <span className="px-price-num">500</span>
                    <span className="px-price-suffix">to start</span>
                  </div>
                  <div className="px-price-monthly">
                    <span className="px-price-plus">+</span>
                    <span className="px-price-mo-num">$150</span>
                    <span className="px-price-mo-suffix">/mo for 12 months</span>
                  </div>
                  <div className="px-price-total">Year 1 total: $2,300</div>
                </div>

                <div className="px-card-divider"/>

                <ul className="px-card-list">
                  <li><PxCheck color="#00E676"/><span>Everything in "What's included"</span></li>
                  <li><PxCheck color="#00E676"/><span>12 months of hosting & maintenance</span></li>
                  <li><PxCheck color="#00E676"/><span>Cancel anytime — no contract</span></li>
                  <li><PxCheck color="#00E676"/><span>Year 2+: keep it running for $100/mo</span></li>
                </ul>

                <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="px-card-cta px-card-cta-flex">
                  <span>Choose Flex Plan</span>
                  <div className="px-cta-arrow"><A/></div>
                </a>
              </div>
            </div>
          </F>

          {/* FULL PAY PLAN */}
          <F d={.15}>
            <div className="px-card px-card-full">
              <div className="px-card-glow" style={{background:"radial-gradient(circle at 30% 0%, rgba(130,170,255,.18), transparent 60%)"}}/>
              <div className="px-card-corner-tag px-card-corner-tag-blue">Save $1,100</div>
              <div className="px-card-content">
                <div className="px-plan-eyebrow px-plan-eyebrow-blue">FULL PAY</div>
                <div className="px-plan-name">Pay once. Done.</div>
                <div className="px-plan-pitch">For businesses ready to skip the monthly invoice.</div>

                <div className="px-price-display">
                  <div className="px-price-row">
                    <span className="px-price-currency px-price-currency-blue">$</span>
                    <span className="px-price-num px-price-num-blue">1,200</span>
                    <span className="px-price-suffix">one time</span>
                  </div>
                  <div className="px-price-savings">Same deliverable. $1,100 less than Flex.</div>
                  <div className="px-price-total">Year 1 total: $1,200</div>
                </div>

                <div className="px-card-divider"/>

                <ul className="px-card-list">
                  <li><PxCheck color="#82AAFF"/><span>Everything in "What's included"</span></li>
                  <li><PxCheck color="#82AAFF"/><span>12 months of hosting & maintenance</span></li>
                  <li><PxCheck color="#82AAFF"/><span>No further charges for a year</span></li>
                  <li><PxCheck color="#82AAFF"/><span>Year 2+: keep it running for $100/mo</span></li>
                </ul>

                <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="px-card-cta px-card-cta-full">
                  <span>Choose Full Pay</span>
                  <div className="px-cta-arrow"><A/></div>
                </a>
              </div>
            </div>
          </F>
        </div>

        {/* Comparison context */}
        <F d={.3}>
          <div className="px-context">
            <div className="px-context-row">
              <div className="px-context-cell">
                <div className="px-context-label">Most agencies charge</div>
                <div className="px-context-value px-context-value-strike">$5,000 – $25,000</div>
                <div className="px-context-detail">For the same scope</div>
              </div>
              <div className="px-context-arrow">→</div>
              <div className="px-context-cell px-context-cell-us">
                <div className="px-context-label">NetTracePro</div>
                <div className="px-context-value">$1,200 – $2,300</div>
                <div className="px-context-detail">All-in, year one</div>
              </div>
            </div>
          </div>
        </F>
      </section>

      {/* ════════ WHAT'S INCLUDED — expanded ════════ */}
      <section className="px-included-section">
        <div className="px-included-bg"/>
        <F>
          <div className="px-included-eyebrow">
            <div className="px-eb-line"/>
            <span>Everything you get</span>
          </div>
        </F>
        <F d={.08}>
          <h2 className="px-included-h">
            One price. <span className="acc">Six things included.</span>
          </h2>
        </F>
        <F d={.18}>
          <p className="px-included-sub">
            No upsells, no surprise add-ons. The price you see is the price for everything below.
          </p>
        </F>

        <div className="px-included-grid">
          {INCLUDED.map((item, i) => (
            <F key={i} d={i*.06}>
              <div className="px-included-cell">
                <div className="px-included-icon">{item.ic}</div>
                <div className="px-included-t">{item.t}</div>
                <div className="px-included-d">{item.d}</div>
              </div>
            </F>
          ))}
        </div>
      </section>

      {/* ════════ HANDOFF GUARANTEE ════════ */}
      <section className="px-handoff-section">
        <div className="px-handoff-bg"/>
        <F>
          <div className="px-handoff-card">
            <div className="px-handoff-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.6">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
            </div>
            <div className="px-handoff-text">
              <div className="px-handoff-eyebrow">The Handoff Guarantee</div>
              <h3 className="px-handoff-h">If you ever leave, you leave with everything.</h3>
              <p className="px-handoff-p">
                One-time $200 handoff fee. We hand over your source code, design files, hosting transfer, and admin credentials. No clawbacks. No held files. No drama.
              </p>
            </div>
          </div>
        </F>
      </section>

      {/* ════════ PRICING FAQ ════════ */}
      <section className="px-faq-section">
        <F>
          <div className="px-faq-eyebrow">
            <div className="px-eb-line"/>
            <span>Common questions</span>
          </div>
        </F>
        <F d={.08}>
          <h2 className="px-faq-h">
            Before you decide, <span className="acc">a few honest answers.</span>
          </h2>
        </F>
        <div className="px-faq-list">
          {FAQ_PRICING.map((f, i) => (
            <F key={i} d={i*.04}>
              <div
                className={`px-faq-item ${openFaq === i ? "px-faq-open" : ""}`}
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <div className="px-faq-q">
                  <span>{f.q}</span>
                  <div className="px-faq-icon">{openFaq === i ? "−" : "+"}</div>
                </div>
                {openFaq === i && <div className="px-faq-a">{f.a}</div>}
              </div>
            </F>
          ))}
        </div>
      </section>

      {/* ════════ FINALE ════════ */}
      <section className="px-finale">
        <div className="px-finale-bg"/>
        <div className="px-finale-orb px-finale-orb-1"/>
        <div className="px-finale-orb px-finale-orb-2"/>
        <div className="px-finale-content">
          <F><div className="px-finale-eyebrow">Still deciding</div></F>
          <F d={.1}>
            <h2 className="px-finale-h">
              Not sure which plan?<br/>
              <span className="acc">We'll help you pick.</span>
            </h2>
          </F>
          <F d={.25}>
            <p className="px-finale-sub">
              Tell us about your project. We'll recommend Flex or Full Pay based on what actually fits — and we'll never push you toward the more expensive option.
            </p>
          </F>
          <F d={.4}>
            <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="px-finale-cta">
              <span>Talk to us first</span>
              <div className="px-cta-arrow"><A/></div>
            </a>
          </F>
        </div>
      </section>
    </div>
  );
};

// Reusable check icon for pricing card lists
const PxCheck = ({ color }) => (
  <div className="px-check" style={{borderColor:`${color}40`, background:`${color}15`}}>
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3">
      <path d="M20 6L9 17l-5-5"/>
    </svg>
  </div>
);

// Hero particles for pricing — slow, calm green-blue mix
const PxHeroParticles = () => {
  const c = useRef(null);
  useEffect(() => {
    const cv = c.current; if (!cv) return;
    const ctx = cv.getContext('2d');
    let w = cv.width = cv.parentElement.offsetWidth;
    let h = cv.height = cv.parentElement.offsetHeight;
    const dots = Array.from({length:50},()=>({
      x:Math.random()*w, y:Math.random()*h,
      vx:(Math.random()-.5)*.2, vy:(Math.random()-.5)*.2,
      r:Math.random()*1.4+.4,
      phase:Math.random()*Math.PI*2,
      sp:Math.random()*.014+.006,
      hue:Math.random(),
    }));
    let af;
    const draw = () => {
      ctx.clearRect(0,0,w,h);
      dots.forEach(d => {
        d.x+=d.vx; d.y+=d.vy; d.phase+=d.sp;
        if(d.x<0||d.x>w)d.vx*=-1;
        if(d.y<0||d.y>h)d.vy*=-1;
        const flicker = .25 + Math.sin(d.phase)*.2;
        const color = d.hue > 0.6 ? '130,170,255' : '0,230,118';
        const grad = ctx.createRadialGradient(d.x,d.y,0,d.x,d.y,d.r*6);
        grad.addColorStop(0,`rgba(${color},${flicker*.4})`);
        grad.addColorStop(1,`rgba(${color},0)`);
        ctx.fillStyle=grad;
        ctx.beginPath(); ctx.arc(d.x,d.y,d.r*6,0,Math.PI*2); ctx.fill();
        ctx.fillStyle=`rgba(${color},${flicker*.85})`;
        ctx.beginPath(); ctx.arc(d.x,d.y,d.r,0,Math.PI*2); ctx.fill();
      });
      af=requestAnimationFrame(draw);
    };
    draw();
    const rs=()=>{w=cv.width=cv.parentElement.offsetWidth;h=cv.height=cv.parentElement.offsetHeight;};
    window.addEventListener('resize',rs);
    return()=>{cancelAnimationFrame(af);window.removeEventListener('resize',rs);};
  },[]);
  return <canvas ref={c} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:1}}/>;
};

// ── ROOT APP ──
export default function App() {
  const [pg, sp] = useState("home");
  const [sc, ss] = useState(false);
  useEffect(() => {
    const fn = () => ss(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  // Stash service anchor in a ref so Services can read it once rendered
  const svcAnchorRef = useRef(null);
  const go = p => {
    if (p.includes("#")) {
      // "services#w" → route to services, scroll to anchor
      const [target, anchor] = p.split("#");
      svcAnchorRef.current = anchor;
      sp(target);
      // Jump to top instantly so the smooth-scroll-to-anchor feels intentional
      window.scrollTo({ top: 0, behavior: "auto" });
    } else {
      svcAnchorRef.current = null;
      sp(p);
      window.scrollTo({top:0,behavior:"smooth"});
    }
  };

  let page;
  if (pg === "home") page = <Home go={go}/>;
  else if (pg === "services") page = <Services go={go} anchorRef={svcAnchorRef}/>;
  else if (pg === "about") page = <About go={go}/>;
  else if (pg === "portfolio") page = <Portfolio go={go}/>;
  else if (pg === "testimonials") page = <Testimonials go={go}/>;
  else if (pg === "contact") page = <Contact/>;
  else if (pg === "pricing") page = <Pricing go={go}/>;
  else if (pg.startsWith("sv-")) page = <SvcDetail id={pg.slice(3)} go={go}/>;
  else page = <Home go={go}/>;

  return (
    <>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
:root{--bg:#0A0A0A;--sf:#111;--bd:#222;--bl:#2a2a2a;--g:#00E676;--gd:rgba(0,230,118,.08);--gk:#00C853;--w:#FFF;--t:#F0F0F0;--tm:#B0B0B0;--td:#707070}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:'Poppins',sans-serif;background:var(--bg);color:var(--t);overflow-x:hidden;-webkit-font-smoothing:antialiased}
/* Screen-reader only — visible to search engines & assistive tech, hidden visually */
.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}

/* ═══════════════════════════════════════════════════════════
   TOUCH DEVICE UX FIXES
   Mouse-tilt transforms are a desktop-only effect. On touch
   devices they leave cards stuck in awkward tilted positions
   (no mouseleave fires on touch), so we zero them out.
   ═══════════════════════════════════════════════════════════ */
@media (hover:none) and (pointer:coarse){
  .pf-scene,.tx-grid-scene,.ab-scene,.tm-scene{transform:none !important}
  .hp-prev-card{transform:none !important}
}
.nv{position:fixed;top:0;left:0;right:0;z-index:1000;transition:all .4s}.nv.sc{background:rgba(10,10,10,.97);backdrop-filter:blur(20px);border-bottom:1px solid var(--bd)}
.nv-inner{display:flex;align-items:center;justify-content:space-between;padding:18px 60px;max-width:1400px;margin:0 auto;width:100%}
.nl{display:flex;align-items:center;text-decoration:none}.nl img{background:transparent !important;display:block}
.nk{display:flex;gap:28px;align-items:center}.nk a{color:var(--tm);text-decoration:none;font-size:13px;font-weight:500;transition:color .3s}.nk a:hover{color:var(--g)}.nc{background:var(--g)!important;color:var(--bg)!important;padding:10px 24px!important;border-radius:6px;font-weight:600!important}
.nv-burger{display:none;flex-direction:column;gap:5px;background:none;border:none;cursor:pointer;padding:4px;z-index:1001}
.bar{display:block;width:22px;height:2px;background:var(--w);border-radius:2px;transition:all .3s}
.bar1.open{transform:rotate(45deg) translate(5px,5px)}
.bar2.open{opacity:0}
.bar3.open{transform:rotate(-45deg) translate(5px,-5px)}
.nv-mob{display:none;flex-direction:column;background:rgba(10,10,10,.98);backdrop-filter:blur(20px);border-top:1px solid var(--bd);padding:20px 24px;gap:4px}
.nv-mob a{color:var(--t);text-decoration:none;font-size:15px;font-weight:500;padding:14px 0;border-bottom:1px solid var(--bd);display:block;transition:color .3s}.nv-mob a:last-child{border-bottom:none}.nv-mob a:hover{color:var(--g)}
.nmc{background:var(--g)!important;color:var(--bg)!important;padding:14px 24px!important;border-radius:8px;font-weight:700!important;text-align:center;margin-top:8px;border:none!important}
.hero{min-height:100vh;display:flex;align-items:center;padding:140px 60px 100px;position:relative;overflow:hidden}
.hero::before{content:'';position:absolute;top:0;right:0;width:70%;height:100%;background:radial-gradient(ellipse at 70% 40%,rgba(0,230,118,.08),transparent 55%);pointer-events:none;animation:hg 5s ease-in-out infinite}@keyframes hg{0%,100%{opacity:.5;transform:scale(1)}50%{opacity:1;transform:scale(1.1)}}
.hg{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);background-size:60px 60px;pointer-events:none;animation:gd 15s linear infinite}@keyframes gd{0%{background-position:0 0}100%{background-position:60px 60px}}
.ho{position:absolute;border-radius:50%;pointer-events:none;filter:blur(50px)}.ho1{width:350px;height:350px;background:rgba(0,230,118,.08);top:15%;right:5%;animation:o1 7s ease-in-out infinite}.ho2{width:250px;height:250px;background:rgba(130,170,255,.05);bottom:15%;left:3%;animation:o2 9s ease-in-out infinite}.ho3{width:180px;height:180px;background:rgba(0,200,83,.06);top:55%;right:30%;animation:o3 11s ease-in-out infinite}
@keyframes o1{0%,100%{transform:translate(0,0)}50%{transform:translate(30px,-40px)}}@keyframes o2{0%,100%{transform:translate(0,0)}50%{transform:translate(-25px,30px)}}@keyframes o3{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(15px,-25px) scale(1.15)}}
.hm{animation:mf 5s ease-in-out infinite}@keyframes mf{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
.hi{display:grid;grid-template-columns:1fr 1.1fr;gap:60px;align-items:center;max-width:1280px;margin:0 auto;width:100%;position:relative;z-index:2}
.badge{display:inline-flex;align-items:center;gap:8px;background:var(--gd);border:1px solid rgba(0,230,118,.15);padding:6px 16px;border-radius:100px;font-size:11px;font-weight:600;color:var(--g);text-transform:uppercase;letter-spacing:1.5px;margin-bottom:24px}.badge::before{content:'';width:6px;height:6px;background:var(--g);border-radius:50%;display:inline-block;animation:pu 2s infinite}@keyframes pu{0%,100%{opacity:1}50%{opacity:.3}}
.h1h{font-size:clamp(36px,4.5vw,56px);font-weight:800;color:var(--w);line-height:1.12;margin-bottom:20px;letter-spacing:-1px}
.acc{color:var(--g);display:inline-block;animation:ag 3s ease-in-out infinite}@keyframes ag{0%,100%{text-shadow:none}50%{text-shadow:0 0 30px rgba(0,230,118,.3)}}
.hsub{font-size:16px;line-height:1.7;color:var(--tm);font-weight:300;max-width:460px;margin-bottom:36px}
.btns{display:flex;gap:14px;flex-wrap:wrap}.btn{padding:14px 32px;border:none;border-radius:6px;font-size:14px;font-weight:600;cursor:pointer;display:inline-flex;align-items:center;gap:8px;transition:all .3s;text-decoration:none;font-family:'Poppins',sans-serif}
.bg{background:var(--g);color:var(--bg);position:relative;overflow:hidden}.bg:hover{background:var(--gk);transform:translateY(-2px);box-shadow:0 8px 30px rgba(0,230,118,.25)}.bg::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.25),transparent);animation:sh 2.5s ease-in-out infinite}@keyframes sh{0%{left:-100%}50%{left:200%}100%{left:200%}}
.bo{background:transparent;color:var(--w);border:1px solid var(--bl)}.bo:hover{border-color:var(--g);color:var(--g)}
/* ── REDESIGNED HERO MOCKUP ── */
.mock{
  background:linear-gradient(180deg,#161616 0%,#0d0d0d 100%);
  border-radius:14px;
  border:1px solid rgba(255,255,255,.08);
  overflow:hidden;
  box-shadow:
    0 40px 100px rgba(0,0,0,.6),
    0 0 0 1px rgba(255,255,255,.02),
    0 80px 120px rgba(0,230,118,.05);
  transform:perspective(1200px) rotateX(2deg) rotateY(-3deg);
  transition:transform .8s cubic-bezier(0.2,0.8,0.2,1);
}
.mock:hover{
  transform:perspective(1200px) rotateX(0deg) rotateY(0deg);
}

/* Browser chrome */
.mock-ch{
  display:flex;align-items:center;gap:10px;
  padding:10px 14px;
  background:#0e0e0e;
  border-bottom:1px solid rgba(255,255,255,.06);
}
.dots{display:flex;gap:6px}
.dot{width:11px;height:11px;border-radius:50%}
.dot.r{background:#ff5f57}.dot.y{background:#ffbd2e}.dot.g{background:#28ca42}
.url{
  flex:1;background:#1a1a1a;border-radius:6px;
  padding:6px 12px;
  display:flex;align-items:center;gap:8px;
  margin-left:10px;font-size:11px;color:#888;
  border:1px solid rgba(255,255,255,.04);
}
.mock-url-lock{color:#28ca42;font-size:9px}
.mock-url-text{flex:1;font-weight:500;letter-spacing:.2px}
.mock-url-secure{
  font-size:8px;font-weight:700;letter-spacing:1px;
  color:#28ca42;
  background:rgba(40,202,66,.1);
  padding:2px 6px;border-radius:3px;
}
.mock-tabs{display:flex;gap:4px;margin-left:6px}
.mock-tab-dot{
  width:6px;height:6px;border-radius:50%;
  background:rgba(255,255,255,.15);
}

/* Site nav inside mockup */
.mock-site-nav{
  display:flex;align-items:center;justify-content:space-between;
  padding:12px 18px;
  background:#0a0a0a;
  border-bottom:1px solid rgba(255,255,255,.04);
}
.mock-site-logo{
  display:flex;align-items:center;gap:6px;
  font-size:10px;font-weight:700;color:#fff;
  letter-spacing:.3px;
}
.mock-logo-dot{
  width:8px;height:8px;border-radius:50%;
  background:#00E676;
  box-shadow:0 0 8px #00E676;
}
.mock-site-links{display:flex;align-items:center;gap:14px}
.mock-site-links span{
  font-size:9px;color:rgba(255,255,255,.5);
  font-weight:500;letter-spacing:.3px;
}
.mock-site-cta{
  background:#00E676 !important;
  color:#0a0a0a !important;
  padding:5px 10px !important;
  border-radius:4px !important;
  font-weight:700 !important;
}

/* Body */
.mock-bd{padding:20px 18px 22px}

/* Hero panel */
.mock-hero{
  background:linear-gradient(135deg,#0a0a0a,#141414);
  border-radius:8px;
  padding:28px 22px 24px;
  margin-bottom:14px;
  position:relative;overflow:hidden;
  border:1px solid rgba(255,255,255,.04);
}
.mock-glow{
  position:absolute;
  top:-30px;right:-30px;
  width:140px;height:140px;
  background:radial-gradient(circle,rgba(0,230,118,.18),transparent 70%);
  pointer-events:none;
  animation:mockGlowPulse 4s ease-in-out infinite;
}
.mock-glow-2{
  top:auto;right:auto;
  bottom:-40px;left:-40px;
  width:120px;height:120px;
  background:radial-gradient(circle,rgba(130,170,255,.12),transparent 70%);
  animation:mockGlowPulse 5s ease-in-out infinite reverse;
}
@keyframes mockGlowPulse{
  0%,100%{opacity:.6;transform:scale(1)}
  50%{opacity:1;transform:scale(1.15)}
}
.mock-grid{
  position:absolute;inset:0;pointer-events:none;
  background-image:
    linear-gradient(rgba(255,255,255,.02) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.02) 1px,transparent 1px);
  background-size:20px 20px;
  mask-image:radial-gradient(ellipse at center,black,transparent 80%);
}
.mock-eyebrow{
  display:inline-flex;align-items:center;gap:5px;
  font-size:7px;font-weight:700;letter-spacing:1.2px;
  color:#00E676;
  margin-bottom:10px;
  padding:3px 7px;
  background:rgba(0,230,118,.08);
  border:1px solid rgba(0,230,118,.2);
  border-radius:100px;
  position:relative;z-index:2;
}
.mock-eb-dot{
  width:4px;height:4px;border-radius:50%;
  background:#00E676;
  box-shadow:0 0 6px #00E676;
  animation:pu 2s infinite;
}
.mock-title{
  font-weight:800;font-size:17px;color:#fff;
  line-height:1.18;margin-bottom:8px;
  letter-spacing:-.4px;
  position:relative;z-index:2;
}
.mock-title-accent{
  background:linear-gradient(135deg,#00E676 0%,#82E0AA 100%);
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;color:transparent;
}
.mock-desc{
  font-size:8.5px;color:rgba(255,255,255,.55);
  line-height:1.55;margin-bottom:14px;
  max-width:200px;font-weight:300;
  position:relative;z-index:2;
}
.mock-cta-row{display:flex;gap:6px;position:relative;z-index:2}
.mock-btn-g{
  background:#00E676;color:#0a0a0a;
  padding:6px 12px;border-radius:5px;
  font-size:8px;font-weight:700;letter-spacing:.2px;
  display:inline-flex;align-items:center;gap:5px;
  box-shadow:0 4px 12px rgba(0,230,118,.3);
  position:relative;overflow:hidden;
}
.mock-btn-g::after{
  content:'';position:absolute;
  top:0;left:-100%;width:60%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);
  animation:sh 2.5s ease-in-out infinite;
}
.mock-btn-arrow{font-weight:900}
.mock-btn-o{
  border:1px solid rgba(255,255,255,.15);
  color:rgba(255,255,255,.7);
  padding:6px 12px;border-radius:5px;
  font-size:8px;font-weight:600;letter-spacing:.2px;
}

/* Stats row */
.mock-stats{
  display:flex;align-items:center;gap:0;
  background:#0a0a0a;
  border:1px solid rgba(255,255,255,.04);
  border-radius:8px;
  padding:10px 14px;
  margin-bottom:14px;
}
.mock-stat{flex:1;text-align:center}
.mock-stat-n{
  font-size:14px;font-weight:800;color:#fff;
  letter-spacing:-.4px;line-height:1;
  font-variant-numeric:tabular-nums;
}
.mock-stat-n span{color:#00E676;font-size:.75em;margin-left:1px}
.mock-stat-l{
  font-size:7px;color:rgba(255,255,255,.45);
  text-transform:uppercase;letter-spacing:1px;
  margin-top:3px;font-weight:600;
}
.mock-stat-divider{
  width:1px;height:20px;
  background:rgba(255,255,255,.06);
}

/* Mini analytics chart */
.mock-chart{
  background:#0a0a0a;
  border:1px solid rgba(255,255,255,.04);
  border-radius:8px;
  padding:12px 14px;
}
.mock-chart-head{
  display:flex;align-items:flex-end;justify-content:space-between;
  margin-bottom:10px;
}
.mock-chart-title{display:flex;flex-direction:column;gap:2px}
.mock-chart-label{
  font-size:7px;font-weight:700;letter-spacing:1.2px;
  color:rgba(255,255,255,.5);
}
.mock-chart-trend{
  font-size:11px;font-weight:800;color:#00E676;
  letter-spacing:-.3px;
}
.mock-chart-period{
  font-size:7px;color:rgba(255,255,255,.4);
  font-weight:500;letter-spacing:.5px;
}
.mock-chart-graph{
  height:40px;
  position:relative;
}
.mock-chart-svg{
  width:100%;height:100%;
  display:block;
}
.mock-chart-pulse{
  animation:mockChartPulse 2s ease-in-out infinite;
  transform-origin:center;
}
@keyframes mockChartPulse{
  0%,100%{opacity:.3;r:5}
  50%{opacity:.6;r:7}
}
.stw{padding:0 60px}.sts{display:flex;background:var(--sf);border:1px solid var(--bd);border-radius:10px;overflow:hidden;max-width:1280px;margin:-40px auto 0;position:relative;z-index:10}
.st{flex:1;padding:24px;text-align:center;border-right:1px solid var(--bd)}.st:last-child{border-right:none}.stn{font-size:28px;font-weight:800;color:var(--g);line-height:1}.stl{font-size:10px;color:var(--td);text-transform:uppercase;letter-spacing:1.5px;margin-top:4px}
.sec{padding:80px 60px;max-width:1400px;margin:0 auto}.sec-w{padding:80px 60px}.fw{max-width:1280px;margin:0 auto}
.label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:2px;color:var(--g);margin-bottom:14px}.title{font-size:clamp(26px,3vw,40px);font-weight:700;color:var(--w);line-height:1.2;margin-bottom:16px;letter-spacing:-.5px}.sub{font-size:15px;line-height:1.7;color:var(--tm);max-width:500px;font-weight:300}.hdr{margin-bottom:48px}
.sg{display:flex;flex-wrap:wrap;gap:20px;justify-content:center}.sg>div{flex:0 0 calc(33.333% - 14px);min-width:280px}
.scard{background:var(--sf);border:1px solid var(--bd);border-radius:10px;padding:36px 28px;transition:all .4s;cursor:pointer;position:relative;overflow:hidden;height:100%}.scard:hover{border-color:rgba(0,230,118,.3);transform:translateY(-4px)}.scard::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--g),transparent);transform:scaleX(0);transition:transform .5s}.scard:hover::before{transform:scaleX(1)}
.si{width:48px;height:48px;background:var(--gd);border-radius:10px;display:flex;align-items:center;justify-content:center;color:var(--g);margin-bottom:20px;transition:all .3s}.scard:hover .si{background:var(--g);color:var(--bg);transform:scale(1.1) rotate(-5deg)}
.scard h3{font-size:18px;font-weight:600;color:var(--w);margin-bottom:10px}.scard p{font-size:14px;line-height:1.65;color:var(--tm);font-weight:300;margin-bottom:18px}.sl{display:inline-flex;align-items:center;gap:6px;color:var(--g);font-size:12px;font-weight:600;text-transform:uppercase;letter-spacing:.5px;transition:gap .3s}.scard:hover .sl{gap:12px}
.pg{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}.pc{background:var(--sf);border:1px solid var(--bd);border-radius:12px;overflow:hidden;transition:all .4s}.pc:hover{border-color:rgba(0,230,118,.3);transform:translateY(-4px)}
.piw{overflow:hidden;position:relative}.piw::after{content:'';position:absolute;inset:0;background:linear-gradient(0deg,rgba(10,10,10,.7),transparent 50%);pointer-events:none}.pim{width:100%;aspect-ratio:16/10;object-fit:contain;display:block;transition:transform .6s;background:#0d0d0d}.pc:hover .pim,.ptc:hover .pim{transform:scale(1.06)}
.pn{font-size:48px;font-weight:800;color:rgba(0,230,118,.12);position:absolute;top:12px;right:16px;line-height:1;z-index:2}.pbd{padding:20px 24px}.pct{font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--g);font-weight:600;margin-bottom:6px}.pc h3,.ptb h3{font-size:20px;font-weight:700;color:var(--w);margin-bottom:4px}.py{font-size:12px;color:var(--td)}
.ts{background:var(--sf);border-top:1px solid var(--bd);border-bottom:1px solid var(--bd)}
.tcard{max-width:700px;margin:0 auto;background:var(--bg);border:1px solid var(--bd);border-radius:16px;padding:44px 40px 32px;position:relative;overflow:hidden;text-align:center}.tglow{position:absolute;top:-60px;left:50%;transform:translateX(-50%);width:300px;height:200px;background:radial-gradient(ellipse,rgba(0,230,118,.06),transparent 70%);pointer-events:none}
.tcr{position:absolute;width:40px;height:40px;border:2px solid rgba(0,230,118,.15)}.tcr1{top:12px;left:12px;border-right:none;border-bottom:none;border-radius:4px 0 0 0}.tcr2{bottom:12px;right:12px;border-left:none;border-top:none;border-radius:0 0 4px 0}
.tin{position:relative;min-height:180px}.ti{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:all .5s;opacity:0;transform:translateX(30px);pointer-events:none}.ti.act{opacity:1;transform:translateX(0);pointer-events:auto}
.tq{font-size:18px;line-height:1.65;color:var(--t);font-weight:300;font-style:italic;margin:14px 0 20px}.tst{display:flex;gap:4px;color:var(--g);justify-content:center}
.ta{font-size:13px;font-weight:600;color:var(--g);text-transform:uppercase;letter-spacing:1px;text-align:left}.tar{display:flex;align-items:center;gap:12px;justify-content:center}.tav{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.tds{display:flex;gap:8px;justify-content:center;margin-top:24px;position:relative;z-index:2}.tdt{width:8px;height:8px;border-radius:50%;background:var(--bl);border:none;cursor:pointer;transition:all .4s}.tdt.act{background:var(--g);width:28px;border-radius:8px;box-shadow:0 0 12px rgba(0,230,118,.4)}
.cta{padding:80px 60px;text-align:center;position:relative;overflow:hidden}.cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(0,230,118,.06),transparent 55%)}.cta-h{font-size:clamp(28px,3.5vw,44px);font-weight:700;color:var(--w);margin-bottom:16px;position:relative}.cta-p{font-size:16px;color:var(--tm);max-width:480px;margin:0 auto 36px;font-weight:300;line-height:1.7;position:relative}
/* ── CONTACT PAGE ── */
.ct-page{min-height:100vh;position:relative;overflow:hidden;display:flex;align-items:center;padding:120px 60px 80px;background:#070a0d}
.ct-bg-glow{position:absolute;inset:0;background:radial-gradient(ellipse at 25% 60%,rgba(0,230,118,.16),transparent 45%),radial-gradient(ellipse at 75% 20%,rgba(0,180,80,.09),transparent 40%),radial-gradient(ellipse at 60% 85%,rgba(100,150,255,.08),transparent 38%);pointer-events:none}
.ct-bg-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(0,230,118,.07) 1px,transparent 1px),linear-gradient(90deg,rgba(0,230,118,.07) 1px,transparent 1px);background-size:44px 44px;pointer-events:none;mask-image:radial-gradient(ellipse at 25% 50%,black 15%,rgba(0,0,0,.3) 45%,transparent 70%);animation:gd 20s linear infinite}
.ct-bg-orb{display:none}

@keyframes rp{from{transform:translate(-50%,-50%) rotate(0deg)}to{transform:translate(-50%,-50%) rotate(360deg)}}
.ct-scanline{position:absolute;inset:0;background:repeating-linear-gradient(0deg,transparent,transparent 3px,rgba(0,0,0,.03) 3px,rgba(0,0,0,.03) 4px);pointer-events:none;z-index:0}
.ct-content{display:grid;grid-template-columns:1.1fr 1fr;gap:80px;align-items:center;max-width:1280px;margin:0 auto;width:100%;position:relative;z-index:2}
.ct-left{display:flex;flex-direction:column;gap:20px}
.ct-h1{font-size:clamp(36px,4vw,58px);font-weight:800;color:var(--w);line-height:1.1;letter-spacing:-1.5px}
.ct-body{font-size:15px;line-height:1.8;color:var(--tm);font-weight:300;max-width:500px}
.ct-badges{display:flex;flex-wrap:wrap;gap:10px;margin-top:8px}
.ct-badge{background:rgba(0,230,118,.06);border:1px solid rgba(0,230,118,.18);color:var(--g);font-size:11px;font-weight:600;padding:6px 14px;border-radius:100px;letter-spacing:.5px;transition:all .3s}.ct-badge:hover{background:rgba(0,230,118,.12);border-color:rgba(0,230,118,.35)}
.ct-right{display:flex;flex-direction:column;gap:16px}
.ct-action-card{background:rgba(17,17,17,.9);backdrop-filter:blur(12px);border:1px solid var(--bd);border-radius:16px;padding:32px;position:relative;overflow:hidden;transition:all .4s}
.ct-action-card:hover{transform:translateY(-5px);box-shadow:0 30px 60px rgba(0,0,0,.5)}
.ct-phone{border-color:rgba(0,230,118,.2)}.ct-phone:hover{border-color:rgba(0,230,118,.4);box-shadow:0 30px 60px rgba(0,0,0,.5),0 0 40px rgba(0,230,118,.06)}
.ct-email{border-color:rgba(130,170,255,.15)}.ct-email:hover{border-color:rgba(130,170,255,.3);box-shadow:0 30px 60px rgba(0,0,0,.5),0 0 40px rgba(130,170,255,.05)}
.ct-ac-glow{position:absolute;top:-50px;right:-50px;width:220px;height:220px;background:radial-gradient(circle,rgba(0,230,118,.1),transparent 70%);pointer-events:none;animation:hg 4s ease-in-out infinite}
.ct-glow-blue{background:radial-gradient(circle,rgba(130,170,255,.1),transparent 70%)}
.ct-ac-pulse{position:absolute;top:20px;right:20px;width:8px;height:8px;border-radius:50%;background:var(--g);box-shadow:0 0 8px var(--g);animation:pu 2s infinite}
.ct-ac-top{display:flex;align-items:center;gap:16px;margin-bottom:14px}
.ct-ac-icon{width:50px;height:50px;background:rgba(0,230,118,.1);border:1px solid rgba(0,230,118,.25);border-radius:12px;display:flex;align-items:center;justify-content:center;color:var(--g);flex-shrink:0;transition:all .4s}.ct-action-card:hover .ct-ac-icon{background:rgba(0,230,118,.18);transform:scale(1.08)}
.ct-icon-blue{background:rgba(130,170,255,.1);border-color:rgba(130,170,255,.25);color:#82AAFF}.ct-email:hover .ct-icon-blue{background:rgba(130,170,255,.2)}
.ct-ac-label{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;color:var(--td);margin-bottom:4px}
.ct-ac-val{font-size:20px;font-weight:700;color:var(--w)}
.ct-ac-desc{font-size:13px;line-height:1.75;color:var(--tm);font-weight:300;margin-bottom:20px}
.ct-ac-btn{display:inline-flex;align-items:center;gap:8px;padding:12px 26px;border-radius:8px;font-size:13px;font-weight:600;text-decoration:none;transition:all .3s;width:fit-content;position:relative;overflow:hidden}
.ct-ac-btn::after{content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:sh 2.5s ease-in-out infinite}
.ct-btn-green{background:var(--g);color:var(--bg)}.ct-btn-green:hover{background:var(--gk);transform:translateY(-2px);box-shadow:0 10px 28px rgba(0,230,118,.3)}
.ct-btn-blue{background:rgba(130,170,255,.12);color:#82AAFF;border:1px solid rgba(130,170,255,.25)}.ct-btn-blue:hover{background:rgba(130,170,255,.22);transform:translateY(-2px);box-shadow:0 10px 28px rgba(130,170,255,.15)}
.ct-stat-row{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
.ct-mini-stat{background:rgba(17,17,17,.8);backdrop-filter:blur(8px);border:1px solid var(--bd);border-radius:10px;padding:18px 12px;text-align:center;transition:all .3s;position:relative;overflow:hidden}.ct-mini-stat::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--g),transparent);transform:scaleX(0);transition:transform .4s}.ct-mini-stat:hover{border-color:rgba(0,230,118,.25);transform:translateY(-2px)}.ct-mini-stat:hover::before{transform:scaleX(1)}
.ct-mini-n{font-size:22px;font-weight:800;color:var(--g);line-height:1}
.ct-mini-l{font-size:10px;color:var(--td);text-transform:uppercase;letter-spacing:1px;margin-top:5px;line-height:1.3}
.ft{padding:50px 60px 24px;border-top:1px solid var(--bd)}.fg{display:grid;grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;margin-bottom:32px}.fb p{font-size:12px;line-height:1.7;color:var(--td);font-weight:300;margin-top:12px;max-width:260px}.fc h4{font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--g);font-weight:600;margin-bottom:14px}.fc a{display:block;font-size:12px;color:var(--td);text-decoration:none;margin-bottom:8px;font-weight:300}.fc a:hover{color:var(--g)}.fc span{display:block;font-size:12px;margin-bottom:8px}.fbt{border-top:1px solid var(--bd);padding-top:16px}.fbt p{font-size:11px;color:var(--td)}
.pb{padding:160px 60px 80px;position:relative;overflow:hidden;text-align:center}.pb-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 30%,rgba(0,230,118,.06),transparent 60%);animation:hg 5s ease-in-out infinite}.pb-in{position:relative;z-index:2;max-width:700px;margin:0 auto}.pb-t{font-size:clamp(30px,4vw,50px);font-weight:800;color:var(--w);line-height:1.15;margin-bottom:16px}.pb-s{font-size:16px;color:var(--tm);font-weight:300;line-height:1.7}
.svr{display:flex;gap:50px;align-items:center;margin-bottom:16px}.svr-img{flex:1;min-width:0}.svr-txt{flex:1;min-width:0}.ftag{display:inline-flex;align-items:center;gap:6px;background:var(--gd);border:1px solid rgba(0,230,118,.1);padding:6px 14px;border-radius:6px;font-size:12px;color:var(--g);font-weight:500}
.sdg{display:grid;grid-template-columns:1.2fr 1fr;gap:50px;align-items:start}.flist{display:flex;flex-direction:column;gap:10px}.fitem{display:flex;align-items:center;gap:10px;font-size:14px;color:var(--tm);font-weight:300}.fchk{flex-shrink:0}.prs{display:flex;gap:12px;align-items:center;margin-bottom:14px}.prn{width:32px;height:32px;background:var(--gd);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--g);font-size:12px;font-weight:700;flex-shrink:0}.prt{font-size:13px;color:var(--tm);font-weight:300}
.abg{display:grid;grid-template-columns:1.2fr 1fr;gap:50px;align-items:start}.abst{background:var(--sf);border:1px solid var(--bd);border-radius:10px;padding:18px;text-align:center;transition:border-color .3s}.abst:hover{border-color:rgba(0,230,118,.2)}
.prg{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}.prc{background:var(--sf);border:1px solid var(--bd);border-radius:12px;padding:28px 20px;text-align:center;position:relative;overflow:hidden;transition:all .4s}.prc:hover{border-color:rgba(0,230,118,.3);transform:translateY(-4px)}.prc-n{position:absolute;top:8px;right:12px;font-size:44px;font-weight:800;color:rgba(0,230,118,.05);line-height:1}
.ptg{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}.ptc{background:var(--sf);border:1px solid var(--bd);border-radius:14px;overflow:hidden;transition:all .4s}.ptc:hover{border-color:rgba(0,230,118,.3);transform:translateY(-6px);box-shadow:0 25px 50px rgba(0,230,118,.08)}
.ptw{position:relative;overflow:hidden}.pto{position:absolute;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .4s}.ptc:hover .pto{opacity:1}.ptb{padding:20px 24px}.cta-box{background:var(--sf);border:1px solid var(--bd);border-radius:16px;padding:44px 36px;max-width:560px;margin:0 auto;position:relative;overflow:hidden}
.teg{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}.tec{background:var(--sf);border:1px solid var(--bd);border-radius:14px;padding:28px 24px;transition:all .4s;display:flex;flex-direction:column;gap:14px}.tec:hover{border-color:rgba(0,230,118,.2);transform:translateY(-4px)}.tec-top{display:flex;align-items:center;gap:12px}
.ctg{display:grid;grid-template-columns:1fr 1.3fr;gap:50px;align-items:start}.ctfc{background:var(--sf);border:1px solid var(--bd);border-radius:14px;padding:32px 28px;position:relative;overflow:hidden}.ctfg{position:absolute;top:-40px;right:-40px;width:200px;height:200px;background:radial-gradient(circle,rgba(0,230,118,.06),transparent 70%);pointer-events:none}
.tf-sec{padding:80px 60px;border-top:1px solid var(--bd);border-bottom:1px solid var(--bd);background:linear-gradient(180deg,var(--bg) 0%,rgba(0,230,118,.02) 50%,var(--bg) 100%)}
.tf-wrap{display:grid;grid-template-columns:1.6fr 1fr;gap:48px;align-items:center;max-width:1280px;margin:0 auto}
.tf-slider{position:relative;border-radius:16px;overflow:hidden;aspect-ratio:16/9;cursor:col-resize;user-select:none;box-shadow:0 40px 80px rgba(0,0,0,.6);border:1px solid var(--bd)}
.tf-after{position:absolute;inset:0;background-size:cover;background-position:center top}
.tf-before{position:absolute;top:0;left:0;bottom:0;overflow:hidden;background-size:cover;background-position:left top;border-right:none}
.tf-line{position:absolute;top:0;bottom:0;width:3px;background:var(--g);transform:translateX(-50%);z-index:10;cursor:col-resize;box-shadow:0 0 20px rgba(0,230,118,.6)}
.tf-handle{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:44px;height:44px;background:var(--g);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--bg);box-shadow:0 0 0 4px rgba(0,230,118,.2),0 8px 24px rgba(0,0,0,.4);transition:transform .2s}.tf-handle:hover{transform:translate(-50%,-50%) scale(1.1)}
.tf-lbl{position:absolute;top:16px;display:flex;align-items:center;gap:6px;padding:6px 14px;border-radius:100px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;transition:opacity .3s;z-index:9}
.tf-lbl-b{left:14px;background:rgba(255,80,80,.15);color:#FF6464;border:1px solid rgba(255,80,80,.35)}
.tf-lbl-a{right:14px;background:rgba(0,230,118,.15);color:var(--g);border:1px solid rgba(0,230,118,.3)}
.tf-lbl-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.tf-dot-b{background:#FF6464;box-shadow:0 0 8px #FF6464}.tf-dot-a{background:var(--g);box-shadow:0 0 8px var(--g)}
.tf-info{display:flex;flex-direction:column;gap:18px}
.tf-client-tag{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:2px;color:var(--g)}
.tf-client-name{font-size:28px;font-weight:800;color:var(--w);line-height:1.2;letter-spacing:-.5px}
.tf-desc{font-size:14px;line-height:1.75;color:var(--tm);font-weight:300}
.tf-stats{display:flex;gap:16px;flex-wrap:wrap}
.tf-stat{background:var(--sf);border:1px solid var(--bd);border-radius:10px;padding:14px 18px;flex:1;min-width:80px;transition:border-color .3s}.tf-stat:hover{border-color:rgba(0,230,118,.3)}
.tf-stat-n{font-size:22px;font-weight:800;color:var(--g);line-height:1}
.tf-stat-l{font-size:10px;color:var(--td);text-transform:uppercase;letter-spacing:1px;margin-top:4px}
/* ── HOME PROJECT GRID ── */
.hpg-wrap{padding:0 60px 80px;max-width:1400px;margin:0 auto;position:relative}
.hpg-scene{transition:transform .12s ease-out;width:100%}
.hpg-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
.hpg-card{background:rgba(12,12,12,.95);border:1px solid rgba(255,255,255,.07);border-radius:18px;overflow:hidden;transition:transform .35s ease,border-color .35s,box-shadow .35s;animation:tmFloat 7s ease-in-out infinite;cursor:pointer}
.hpg-card:hover{border-color:rgba(0,230,118,.35);box-shadow:0 40px 80px rgba(0,0,0,.7),0 0 50px rgba(0,230,118,.08);transform:translateY(-16px) scale(1.02)}
.hpg-img-wrap{position:relative;overflow:hidden;height:300px}
.hpg-img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block;transition:transform .6s ease}
.hpg-card:hover .hpg-img{transform:scale(1.05)}
.hpg-overlay{position:absolute;inset:0;background:linear-gradient(0deg,rgba(5,5,5,.92) 0%,rgba(5,5,5,.2) 55%,transparent 100%)}
.hpg-cat{position:absolute;bottom:16px;left:16px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:2px;color:var(--g);background:rgba(0,230,118,.1);border:1px solid rgba(0,230,118,.25);padding:5px 14px;border-radius:100px;transition:all .3s}.hpg-card:hover .hpg-cat{background:rgba(0,230,118,.2);border-color:rgba(0,230,118,.5)}
.hpg-info{padding:22px 24px}
.hpg-name{font-size:20px;font-weight:700;color:var(--w);margin-bottom:8px;transition:color .3s}.hpg-card:hover .hpg-name{color:var(--g)}
.hpg-desc{font-size:13px;color:var(--tm);font-weight:300;line-height:1.65;margin-bottom:10px}
.hpg-year{font-size:11px;color:var(--td)}
/* ── HOME PROJECTS SECTION BACKGROUND EFFECTS ── */
.hp-proj-wrap{
  position:relative;
  overflow:hidden;
}
.hp-proj-bg{
  position:absolute;
  inset:0;
  pointer-events:none;
  z-index:0;
  background:
    radial-gradient(ellipse 1200px 700px at 30% 20%, rgba(0,230,118,.04), transparent 60%),
    radial-gradient(ellipse 900px 600px at 75% 80%, rgba(130,170,255,.03), transparent 60%);
}
.hp-proj-orb{
  position:absolute;
  border-radius:50%;
  filter:blur(80px);
  pointer-events:none;
  z-index:0;
}
.hp-proj-orb-1{
  width:480px;height:480px;
  background:radial-gradient(circle, rgba(0,230,118,.06), transparent 70%);
  top:-120px;left:-150px;
  animation:o1 13s ease-in-out infinite;
}
.hp-proj-orb-2{
  width:380px;height:380px;
  background:radial-gradient(circle, rgba(130,170,255,.05), transparent 70%);
  bottom:-100px;right:-120px;
  animation:o2 16s ease-in-out infinite;
}
.hp-proj-grid-pattern{
  position:absolute;
  inset:0;
  pointer-events:none;
  z-index:0;
  background-image:
    linear-gradient(rgba(255,255,255,.012) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.012) 1px, transparent 1px);
  background-size:80px 80px;
  mask-image:radial-gradient(ellipse at center, black 30%, transparent 80%);
  -webkit-mask-image:radial-gradient(ellipse at center, black 30%, transparent 80%);
}
/* Make sure content sits above the effects */
.hp-proj-wrap .hp-proj,
.hp-proj-wrap .hpg-wrap{
  position:relative;
  z-index:2;
}

/* ── ABOUT LOGO ── */
.ab-logo-wrap{position:relative;width:100px;height:100px;margin:0 auto 28px;display:flex;align-items:center;justify-content:center}
.ab-logo-ring{position:absolute;border-radius:50%;border:1px solid rgba(0,230,118,.15)}
.ab-ring1{width:100px;height:100px;animation:rp 12s linear infinite}
.ab-ring2{width:140px;height:140px;animation:rp 18s linear infinite reverse;border-color:rgba(0,230,118,.08)}
.ab-ring3{width:180px;height:180px;animation:rp 25s linear infinite;border-color:rgba(0,230,118,.05)}
.ab-logo-img{width:70px;height:70px;object-fit:contain;position:relative;z-index:2;filter:drop-shadow(0 0 20px rgba(0,230,118,.3));animation:hg 4s ease-in-out infinite}
.ab-mission-pills{display:flex;flex-wrap:wrap;gap:10px;justify-content:center;margin-top:8px}
.ab-pill{background:rgba(0,230,118,.06);border:1px solid rgba(0,230,118,.18);color:var(--g);font-size:11px;font-weight:600;padding:6px 16px;border-radius:100px;letter-spacing:.5px;transition:all .3s}.ab-pill:hover{background:rgba(0,230,118,.14);border-color:rgba(0,230,118,.4)}
/* ── ABOUT PAGE BG ── */
.ab-page{min-height:100vh;background:#040a06;display:flex;flex-direction:column;align-items:center;overflow:hidden;position:relative;padding-bottom:0;width:100%}
.ab-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 20%,rgba(0,230,118,.1),transparent 50%),radial-gradient(ellipse at 85% 70%,rgba(0,80,200,.06),transparent 40%),radial-gradient(ellipse at 15% 60%,rgba(0,180,80,.05),transparent 40%);pointer-events:none}
.ab-fog1{position:absolute;width:1000px;height:500px;background:rgba(0,230,118,.05);top:0%;left:50%;transform:translateX(-50%);filter:blur(80px);animation:hg 6s ease-in-out infinite;pointer-events:none}
.ab-fog2{position:absolute;width:600px;height:400px;background:rgba(0,60,180,.04);bottom:20%;right:5%;filter:blur(70px);animation:hg 9s ease-in-out infinite reverse;pointer-events:none}
.ab-hero{text-align:center;padding:110px 24px 50px;position:relative;z-index:2;max-width:700px}
.ab-h1{font-size:clamp(34px,4.5vw,58px);font-weight:800;color:var(--w);line-height:1.1;margin-bottom:16px;letter-spacing:-1.5px}
.ab-sub{font-size:16px;color:var(--tm);font-weight:300;line-height:1.75;margin-bottom:20px}
.ab-scene{width:100%;max-width:1100px;padding:0 40px 40px;transition:transform .12s ease-out;position:relative;z-index:2}
.ab-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.ab-card{background:rgba(14,14,14,.95);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:28px 22px;transition:transform .35s ease,border-color .35s,box-shadow .35s;animation:tmFloat 6s ease-in-out infinite;position:relative;overflow:hidden;cursor:pointer}
.ab-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--g),transparent);transform:scaleX(0);transition:transform .4s}
.ab-card:hover{border-color:rgba(0,230,118,.3);box-shadow:0 28px 56px rgba(0,0,0,.6),0 0 30px rgba(0,230,118,.07);transform:translateY(-14px) scale(1.04)}.ab-card:hover::before{transform:scaleX(1)}
.ab-card-icon{width:44px;height:44px;background:rgba(0,230,118,.08);border:1px solid rgba(0,230,118,.15);border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;transition:all .3s}.ab-card:hover .ab-card-icon{background:rgba(0,230,118,.15);border-color:rgba(0,230,118,.35);transform:scale(1.1)}
.ab-card-t{font-size:15px;font-weight:700;color:var(--w);margin-bottom:8px;transition:color .3s}.ab-card:hover .ab-card-t{color:var(--g)}
.ab-card-d{font-size:12px;color:var(--tm);font-weight:300;line-height:1.65}
.ab-stats{display:flex;gap:0;margin:8px auto 48px;border:1px solid var(--bd);border-radius:12px;overflow:hidden;background:rgba(17,17,17,.8);backdrop-filter:blur(10px);position:relative;z-index:2}
.ab-stat{padding:20px 36px;text-align:center;border-right:1px solid var(--bd)}.ab-stat:last-child{border-right:none}
.ab-stat-n{font-size:26px;font-weight:800;color:var(--g);line-height:1}
.ab-stat-l{font-size:10px;color:var(--td);text-transform:uppercase;letter-spacing:1.2px;margin-top:4px}
.ab-process{text-align:center;padding:48px 40px 64px;position:relative;z-index:2;width:100%;max-width:900px}
.ab-process-h{font-size:26px;font-weight:700;color:var(--w);margin-bottom:32px;letter-spacing:-.5px}
.ab-steps{display:flex;justify-content:center;gap:0;border:1px solid var(--bd);border-radius:12px;overflow:hidden;background:rgba(14,14,14,.8)}
.ab-step{flex:1;padding:24px 16px;text-align:center;border-right:1px solid var(--bd);position:relative;transition:all .3s;cursor:default}.ab-step:last-child{border-right:none}.ab-step:hover{background:rgba(0,230,118,.04)}
.ab-step-i{width:40px;height:40px;background:rgba(0,230,118,.08);border:1px solid rgba(0,230,118,.15);border-radius:10px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;transition:all .3s}.ab-step:hover .ab-step-i{background:rgba(0,230,118,.15);transform:translateY(-3px)}
.ab-step-t{font-size:13px;font-weight:700;color:var(--w);transition:color .3s}.ab-step:hover .ab-step-t{color:var(--g)}
/* ── TESTIMONIALS - all cards uniform hover ── */
.tm-card{background:rgba(14,14,14,.95);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:24px;position:relative;overflow:hidden;transition:transform .3s ease,box-shadow .3s ease,border-color .3s ease;animation:tmFloat 6s ease-in-out infinite;cursor:pointer}
.tm-card:hover{border-color:rgba(0,230,118,.3);box-shadow:0 28px 60px rgba(0,0,0,.7),0 0 40px rgba(0,230,118,.07);transform:translateY(-16px) scale(1.03)}
.pf-page{min-height:100vh;background:#050505;display:flex;flex-direction:column;align-items:center;padding-top:100px;overflow:hidden;position:relative}
.pf-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 10%,rgba(0,230,118,.07),transparent 50%),radial-gradient(ellipse at 20% 80%,rgba(0,100,200,.05),transparent 40%);pointer-events:none}
.pf-fog{position:absolute;width:1000px;height:500px;background:rgba(0,230,118,.03);top:20%;left:50%;transform:translateX(-50%);filter:blur(80px);animation:hg 7s ease-in-out infinite;pointer-events:none}

/* New: animated grid pattern with mask falloff */
.pf-grid-pattern{
  position:absolute;
  inset:0;
  background-image:
    linear-gradient(rgba(0,230,118,.025) 1px, transparent 1px),
    linear-gradient(90deg, rgba(0,230,118,.025) 1px, transparent 1px);
  background-size:60px 60px;
  pointer-events:none;
  mask-image:radial-gradient(ellipse at center, black 30%, transparent 80%);
  -webkit-mask-image:radial-gradient(ellipse at center, black 30%, transparent 80%);
  z-index:1;
  will-change:transform;
}

/* New: ambient drifting orbs at multiple depths */
.pf-orb{
  position:absolute;
  border-radius:50%;
  filter:blur(70px);
  pointer-events:none;
  z-index:1;
  will-change:transform;
}
.pf-orb-1{
  width:500px;height:500px;
  background:radial-gradient(circle, rgba(0,230,118,.15), transparent 70%);
  top:-100px;right:-150px;
  animation:o1 11s ease-in-out infinite;
}
.pf-orb-2{
  width:400px;height:400px;
  background:radial-gradient(circle, rgba(130,170,255,.10), transparent 70%);
  bottom:20%;left:-120px;
  animation:o2 14s ease-in-out infinite;
}
.pf-orb-3{
  width:280px;height:280px;
  background:radial-gradient(circle, rgba(195,232,141,.08), transparent 70%);
  top:55%;right:30%;
  animation:o3 13s ease-in-out infinite;
}

/* New: subtle vignette to keep edges focused */
.pf-vignette{
  position:absolute;
  inset:0;
  background:radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,.35) 100%);
  pointer-events:none;
  z-index:2;
}

.pf-header{text-align:center;padding:0 24px 60px;position:relative;z-index:10;max-width:700px}
.pf-h1{font-size:clamp(32px,4vw,52px);font-weight:800;color:var(--w);line-height:1.15;margin-bottom:14px;letter-spacing:-1px}
.pf-sub{font-size:15px;color:var(--tm);font-weight:300;line-height:1.7}
.pf-scene{width:100%;max-width:1300px;padding:0 40px 60px;transition:transform .12s ease-out;position:relative;z-index:5}
.pf-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:28px}
.pf-card{background:rgba(12,12,12,.95);border:1px solid rgba(255,255,255,.07);border-radius:18px;overflow:hidden;transition:transform .35s ease,border-color .35s,box-shadow .35s;animation:tmFloat 7s ease-in-out infinite;cursor:pointer}
.pf-card:hover{border-color:rgba(0,230,118,.35);box-shadow:0 40px 80px rgba(0,0,0,.7),0 0 50px rgba(0,230,118,.08);transform:translateY(-16px) scale(1.02) !important}
.pf-img-wrap{position:relative;overflow:hidden;height:340px}
.pf-img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block;transition:transform .6s ease}
.pf-card:hover .pf-img{transform:scale(1.06)}
.pf-img-overlay{position:absolute;inset:0;background:linear-gradient(0deg,rgba(5,5,5,.95) 0%,rgba(5,5,5,.2) 60%,transparent 100%)}
.pf-cat{position:absolute;bottom:18px;left:18px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:2px;color:var(--g);background:rgba(0,230,118,.1);border:1px solid rgba(0,230,118,.25);padding:5px 14px;border-radius:100px;transition:all .3s}.pf-card:hover .pf-cat{background:rgba(0,230,118,.2);border-color:rgba(0,230,118,.5)}
.pf-info{padding:22px 24px;transition:all .3s}
.pf-name{font-size:20px;font-weight:700;color:var(--w);margin-bottom:8px;transition:color .3s}.pf-card:hover .pf-name{color:var(--g)}
.pf-desc{font-size:13px;color:var(--tm);font-weight:300;line-height:1.65;margin-bottom:12px}
.pf-year{font-size:11px;color:var(--td)}
.pf-cta{padding:20px 24px 80px;text-align:center;position:relative;z-index:10;width:100%}
.pf-cta-box{background:rgba(17,17,17,.8);backdrop-filter:blur(10px);border:1px solid var(--bd);border-radius:16px;padding:40px;max-width:560px;margin:0 auto}
.pf-cta-box h3{font-size:22px;font-weight:700;color:var(--w);margin-bottom:8px}
.pf-cta-box p{font-size:14px;color:var(--tm);font-weight:300;margin-bottom:24px}
/* ── 3D ABOUT PAGE ── */
.ab-page{min-height:100vh;background:#050505;display:flex;flex-direction:column;align-items:center;overflow:hidden;position:relative;padding-bottom:0;width:100%}
.ab-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 15%,rgba(0,230,118,.08),transparent 45%),radial-gradient(ellipse at 85% 70%,rgba(0,80,200,.05),transparent 40%);pointer-events:none}
.ab-fog1{position:absolute;width:800px;height:400px;background:rgba(0,230,118,.04);top:5%;left:50%;transform:translateX(-50%);filter:blur(70px);animation:hg 6s ease-in-out infinite;pointer-events:none}
.ab-fog2{position:absolute;width:500px;height:300px;background:rgba(0,60,180,.04);bottom:30%;right:10%;filter:blur(60px);animation:hg 9s ease-in-out infinite reverse;pointer-events:none}
.ab-hero{text-align:center;padding:120px 24px 60px;position:relative;z-index:10;max-width:680px}
.ab-h1{font-size:clamp(34px,4.5vw,58px);font-weight:800;color:var(--w);line-height:1.1;margin-bottom:16px;letter-spacing:-1.5px}
.ab-sub{font-size:16px;color:var(--tm);font-weight:300;line-height:1.75}
.ab-scene{width:100%;max-width:1100px;padding:0 40px 40px;transition:transform .12s ease-out;transform-style:preserve-3d;position:relative;z-index:5;perspective:1200px}
.ab-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
.ab-card{background:rgba(14,14,14,.95);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:28px 22px;transition:transform .35s ease,border-color .35s,box-shadow .35s;animation:tmFloat 6s ease-in-out infinite;position:relative;overflow:hidden;cursor:pointer}
.ab-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--g),transparent);transform:scaleX(0);transition:transform .4s}
.ab-card:hover{border-color:rgba(0,230,118,.3);box-shadow:0 28px 56px rgba(0,0,0,.6),0 0 30px rgba(0,230,118,.07);transform:translateY(-14px) scale(1.04) !important}.ab-card:hover::before{transform:scaleX(1)}
.ab-card-icon{width:44px;height:44px;background:rgba(0,230,118,.08);border:1px solid rgba(0,230,118,.15);border-radius:10px;display:flex;align-items:center;justify-content:center;margin-bottom:16px;transition:all .3s}.ab-card:hover .ab-card-icon{background:rgba(0,230,118,.15);border-color:rgba(0,230,118,.35);transform:scale(1.1)}
.ab-card-t{font-size:15px;font-weight:700;color:var(--w);margin-bottom:8px;transition:color .3s}.ab-card:hover .ab-card-t{color:var(--g)}
.ab-card-d{font-size:12px;color:var(--tm);font-weight:300;line-height:1.65}
.ab-stats{display:flex;gap:0;margin:8px auto 48px;border:1px solid var(--bd);border-radius:12px;overflow:hidden;background:rgba(17,17,17,.8);backdrop-filter:blur(10px);position:relative;z-index:10}
.ab-stat{padding:20px 36px;text-align:center;border-right:1px solid var(--bd)}.ab-stat:last-child{border-right:none}
.ab-stat-n{font-size:26px;font-weight:800;color:var(--g);line-height:1}
.ab-stat-l{font-size:10px;color:var(--td);text-transform:uppercase;letter-spacing:1.2px;margin-top:4px}
.ab-process{text-align:center;padding:48px 40px 64px;position:relative;z-index:10;width:100%;max-width:900px}
.ab-process-h{font-size:26px;font-weight:700;color:var(--w);margin-bottom:32px;letter-spacing:-.5px}
.faq-sec{background:var(--sf);border-top:1px solid var(--bd);border-bottom:1px solid var(--bd);padding:80px 60px;width:100%}
.ab-steps{display:flex;justify-content:center;gap:0;border:1px solid var(--bd);border-radius:12px;overflow:hidden;background:rgba(14,14,14,.8)}
.ab-step{flex:1;padding:24px 16px;text-align:center;border-right:1px solid var(--bd);position:relative;transition:all .3s;cursor:default}.ab-step:last-child{border-right:none}.ab-step:hover{background:rgba(0,230,118,.04)}
.ab-step-i{width:40px;height:40px;background:rgba(0,230,118,.08);border:1px solid rgba(0,230,118,.15);border-radius:10px;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;transition:all .3s}.ab-step:hover .ab-step-i{background:rgba(0,230,118,.15);transform:translateY(-3px)}
.ab-step-t{font-size:13px;font-weight:700;color:var(--w);transition:color .3s}.ab-step:hover .ab-step-t{color:var(--g)}
.tm-page{min-height:100vh;background:#050505;position:relative;overflow:hidden;display:flex;flex-direction:column;align-items:center;padding-top:100px}
.tm-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 0%,rgba(0,230,118,.07),transparent 50%),radial-gradient(ellipse at 80% 100%,rgba(0,100,255,.05),transparent 45%);pointer-events:none}
.tm-fog{position:absolute;pointer-events:none;border-radius:50%;filter:blur(80px)}
.tm-fog1{width:900px;height:400px;background:rgba(0,230,118,.04);top:20%;left:50%;transform:translateX(-50%);animation:hg 6s ease-in-out infinite}
.tm-fog2{width:600px;height:300px;background:rgba(0,80,200,.04);bottom:10%;left:50%;transform:translateX(-50%);animation:hg 8s ease-in-out infinite reverse}
.tm-header{text-align:center;padding:0 24px 60px;position:relative;z-index:10;max-width:700px}
.tm-h1{font-size:clamp(32px,4vw,52px);font-weight:800;color:var(--w);line-height:1.15;margin-bottom:14px;letter-spacing:-1px}
.tm-sub{font-size:15px;color:var(--tm);font-weight:300;line-height:1.7;margin-bottom:20px}
.tm-stars{display:flex;align-items:center;gap:4px;color:var(--g);justify-content:center}
.tm-rating{font-size:12px;color:var(--td);margin-left:8px;font-weight:500}
.tm-scene{width:100%;max-width:1300px;padding:0 24px 40px;transition:transform .1s ease-out;transform-style:preserve-3d;position:relative;z-index:5}
.tm-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
.tm-col{display:flex;flex-direction:column;gap:20px;transform-style:preserve-3d}

@keyframes tmFloat{0%,100%{transform:translateY(0)}50%{transform:translateY(-8px)}}

.tm-card-top{display:flex;align-items:center;gap:10px;margin-bottom:14px}
.tm-av{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.tm-name{font-size:13px;font-weight:700;color:var(--w);line-height:1.2}
.tm-role{font-size:10px;color:var(--td);text-transform:uppercase;letter-spacing:1px}
.tm-card-stars{margin-left:auto;display:flex;gap:2px;color:var(--g)}
.tm-quote{font-size:13px;line-height:1.7;color:var(--tm);font-style:italic;font-weight:300;flex:1}
.tm-card-bottom{margin-top:14px;padding-top:12px;border-top:1px solid rgba(255,255,255,.05)}
.tm-verified{display:flex;align-items:center;gap:5px;font-size:10px;color:var(--td);text-transform:uppercase;letter-spacing:1px}
.tm-stats-bar{display:flex;gap:0;margin:20px auto 32px;border:1px solid var(--bd);border-radius:12px;overflow:hidden;background:rgba(17,17,17,.8);backdrop-filter:blur(10px);position:relative;z-index:10}
.tm-stat{padding:20px 40px;text-align:center;border-right:1px solid var(--bd)}.tm-stat:last-child{border-right:none}
.tm-stat-n{font-size:26px;font-weight:800;color:var(--g);line-height:1}
.tm-stat-l{font-size:10px;color:var(--td);text-transform:uppercase;letter-spacing:1.5px;margin-top:4px}
.faq-wrap{max-width:800px;margin:0 auto;display:flex;flex-direction:column;gap:12px}
.faq-item{background:var(--bg);border:1px solid var(--bd);border-radius:10px;padding:20px 24px;cursor:pointer;transition:all .3s}
.faq-item:hover,.faq-item.open{border-color:rgba(0,230,118,.3)}
.faq-q{display:flex;justify-content:space-between;align-items:center;gap:16px}
.faq-q span{font-size:15px;font-weight:600;color:var(--w);line-height:1.4}
.faq-icon{width:28px;height:28px;background:var(--gd);border-radius:6px;display:flex;align-items:center;justify-content:center;color:var(--g);font-size:18px;font-weight:300;flex-shrink:0;transition:all .3s;line-height:1}
.faq-item.open .faq-icon{background:var(--g);color:var(--bg)}
.faq-a{margin-top:14px;font-size:14px;line-height:1.75;color:var(--tm);font-weight:300;padding-top:14px;border-top:1px solid var(--bd)}
/* ── SERVICES SHOWCASE PAGE ── */
.sv-page{min-height:100vh;background:#050a06;display:flex;flex-direction:column;align-items:center;overflow:hidden;position:relative}
.sv-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 10%,rgba(0,230,118,.08),transparent 50%),radial-gradient(ellipse at 90% 60%,rgba(130,170,255,.04),transparent 40%);pointer-events:none}
.sv-fog1{position:absolute;width:1100px;height:600px;background:rgba(0,230,118,.04);top:0;left:50%;transform:translateX(-50%);filter:blur(90px);animation:hg 7s ease-in-out infinite;pointer-events:none}
.sv-fog2{position:absolute;width:600px;height:400px;background:rgba(0,60,180,.04);bottom:20%;right:0;filter:blur(70px);animation:hg 10s ease-in-out infinite reverse;pointer-events:none}
.sv-header{text-align:center;padding:120px 24px 50px;position:relative;z-index:2;max-width:640px}
.sv-h1{font-size:clamp(36px,4.5vw,60px);font-weight:800;color:var(--w);line-height:1.08;margin-bottom:16px;letter-spacing:-1.5px}
.sv-sub{font-size:16px;color:var(--tm);font-weight:300;line-height:1.75}
.sv-showcase{width:100%;max-width:1200px;padding:0 40px 60px;position:relative;z-index:2}
.sv-tabs{display:flex;gap:0;border:1px solid var(--bd);border-radius:14px;overflow:hidden;background:rgba(10,10,10,.8);backdrop-filter:blur(12px);margin-bottom:40px}
.sv-tab{flex:1;display:flex;flex-direction:column;align-items:center;gap:8px;padding:24px 20px;background:none;border:none;border-right:1px solid var(--bd);cursor:pointer;transition:all .3s;color:var(--td);position:relative;font-family:"Poppins",sans-serif}.sv-tab:last-child{border-right:none}.sv-tab:hover{background:rgba(255,255,255,.03);color:var(--t)}
.sv-tab-act{background:rgba(255,255,255,.04)!important;color:var(--w)!important}
.sv-tab-icon{opacity:.7;transition:opacity .3s}.sv-tab-act .sv-tab-icon,.sv-tab:hover .sv-tab-icon{opacity:1}
.sv-tab-label{font-size:13px;font-weight:600;letter-spacing:.3px}
.sv-tab-bar{position:absolute;bottom:0;left:0;right:0;height:3px;border-radius:3px 3px 0 0}
.sv-panel{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center;animation:svIn .4s ease}
@keyframes svIn{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:translateY(0)}}
.sv-panel-left{display:flex;flex-direction:column;gap:20px;position:relative}
.sv-panel-num{font-size:120px;font-weight:800;line-height:1;position:absolute;top:-20px;right:0;pointer-events:none;letter-spacing:-4px}
.sv-panel-title{font-size:clamp(30px,3.5vw,46px);font-weight:800;color:var(--w);line-height:1.1;letter-spacing:-1px;position:relative;z-index:1}
.sv-panel-pitch{font-size:15px;line-height:1.75;color:var(--t);font-weight:300}
.sv-panel-bullets{display:flex;flex-direction:column;gap:10px}
.sv-panel-bullet{display:flex;align-items:center;gap:10px;font-size:14px;color:var(--t);font-weight:400}
.sv-panel-actions{display:flex;gap:12px;flex-wrap:wrap;padding-top:4px}
.sv-panel-right{position:relative}
.sv-panel-img-wrap{border-radius:16px;overflow:hidden;border:1px solid;height:360px;position:relative;transition:box-shadow .4s}.sv-panel-img-wrap:hover{box-shadow:0 30px 60px rgba(0,0,0,.5)}
.sv-panel-img{width:100%;height:100%;object-fit:cover;object-position:top center;display:block;transition:transform .6s ease}.sv-panel-img-wrap:hover .sv-panel-img{transform:scale(1.04)}
.sv-panel-img-glow{position:absolute;inset:0;pointer-events:none}
/* ── PRICING PAGE ── */
.pr-page{min-height:100vh;background:#040a06;display:flex;flex-direction:column;align-items:center;overflow:hidden;position:relative;padding-bottom:0;width:100%}
.pr-bg{position:absolute;inset:0;background:radial-gradient(ellipse at 50% 15%,rgba(0,230,118,.09),transparent 50%),radial-gradient(ellipse at 85% 70%,rgba(130,170,255,.05),transparent 40%);pointer-events:none}
.pr-fog1{position:absolute;width:1000px;height:500px;background:rgba(0,230,118,.04);top:0;left:50%;transform:translateX(-50%);filter:blur(80px);animation:hg 6s ease-in-out infinite;pointer-events:none}
.pr-fog2{position:absolute;width:600px;height:400px;background:rgba(100,130,255,.04);bottom:15%;right:5%;filter:blur(70px);animation:hg 9s ease-in-out infinite reverse;pointer-events:none}
.pr-header{text-align:center;padding:120px 24px 40px;position:relative;z-index:2;max-width:620px}
.pr-h1{font-size:clamp(34px,4.5vw,58px);font-weight:800;color:var(--w);line-height:1.1;margin-bottom:14px;letter-spacing:-1.5px}
.pr-sub{font-size:16px;color:var(--t);font-weight:300;line-height:1.75}
.pr-incl{display:flex;gap:12px;flex-wrap:wrap;justify-content:center;max-width:760px;width:100%;padding:0 24px 48px;position:relative;z-index:2}
.pr-incl-item{display:flex;align-items:center;gap:8px;background:rgba(0,230,118,.06);border:1px solid rgba(0,230,118,.15);border-radius:100px;padding:8px 16px;font-size:12px;font-weight:600;color:var(--t)}
.pr-incl-icon{display:flex;align-items:center;flex-shrink:0}
.pr-cards{display:grid;grid-template-columns:repeat(2,1fr);gap:24px;max-width:860px;width:100%;padding:0 24px 32px;position:relative;z-index:2}
.pr-card{background:rgba(10,14,10,.97);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:36px 32px;position:relative;overflow:hidden;display:flex;flex-direction:column;gap:18px;transition:all .35s}
.pr-card-green{border-color:rgba(0,230,118,.15)}
.pr-card-blue{border-color:rgba(130,170,255,.12)}
.pr-card-glow{position:absolute;inset:0;pointer-events:none}
.pr-card-hov{transform:translateY(-10px)}.pr-card-green.pr-card-hov{border-color:rgba(0,230,118,.4);box-shadow:0 40px 80px rgba(0,0,0,.5),0 0 50px rgba(0,230,118,.08)}.pr-card-blue.pr-card-hov{border-color:rgba(130,170,255,.35);box-shadow:0 40px 80px rgba(0,0,0,.5),0 0 50px rgba(130,170,255,.07)}
.pr-hot-badge{display:inline-flex;align-items:center;gap:6px;background:rgba(0,230,118,.1);border:1px solid rgba(0,230,118,.25);color:#00E676;font-size:11px;font-weight:700;padding:5px 14px;border-radius:100px;letter-spacing:.5px;width:fit-content}
.pr-plan-name{font-size:28px;font-weight:800;color:#00E676;letter-spacing:-.5px}
.pr-price-row{display:flex;align-items:baseline;gap:10px}
.pr-price{font-size:60px;font-weight:800;line-height:1;letter-spacing:-2px}
.pr-price-sub{font-size:16px;color:var(--td);font-weight:400}
.pr-plus-row{display:flex;align-items:baseline;gap:8px}
.pr-plus{font-size:24px;font-weight:700;color:var(--td)}
.pr-mo-price{font-size:32px;font-weight:800;letter-spacing:-1px}
.pr-mo-label{font-size:13px;color:var(--td);font-weight:300}
.pr-savings-tag{display:inline-block;background:rgba(130,170,255,.1);border:1px solid rgba(130,170,255,.2);color:#82AAFF;font-size:12px;font-weight:700;padding:5px 14px;border-radius:100px;width:fit-content}
.pr-card-note{font-size:13px;color:var(--tm);font-weight:300;line-height:1.6}
.pr-divider{height:1px;background:rgba(255,255,255,.07)}
.pr-renewal-box{display:flex;flex-direction:column;gap:10px}
.pr-renewal-title{font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:1.5px;color:var(--td)}
.pr-renewal-opt{display:flex;align-items:center;gap:8px;padding:12px 16px;border-radius:10px;border:1px solid;font-size:14px}
.pr-cta-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;padding:15px 28px;border-radius:10px;color:#0a0a0a;font-size:14px;font-weight:700;text-decoration:none;transition:all .3s;position:relative;overflow:hidden;margin-top:4px}.pr-cta-btn::after{content:"";position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg,transparent,rgba(255,255,255,.2),transparent);animation:sh 2.5s ease-in-out infinite}.pr-cta-btn:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(0,0,0,.4)}
.pr-cta-green{background:#00E676}
.pr-handoff{display:flex;align-items:flex-start;gap:14px;background:rgba(17,17,17,.9);border:1px solid rgba(0,230,118,.18);border-radius:12px;padding:20px 24px;max-width:860px;width:calc(100% - 48px);margin:0 24px 60px;position:relative;z-index:2}
.pr-handoff p{font-size:13px;color:var(--tm);line-height:1.7;font-weight:300}
.pr-handoff svg{flex-shrink:0;margin-top:2px}
@media(max-width:1024px){
.sv-showcase{padding:0 16px 40px}
.sv-panel{grid-template-columns:1fr}
.sv-panel-right{display:none}
.sv-header,.pr-header{padding:100px 24px 40px}
.nv-inner{padding:14px 24px}
.nk{display:none}
.nv-burger{display:flex}
.nv-mob{display:flex}
.hero{padding:100px 24px 60px}
.hi{grid-template-columns:1fr;gap:32px}
.hm{display:none}
.sec,.sec-w{padding:50px 24px}
.stw{padding:0 16px}
.sts{flex-wrap:wrap}
.st{min-width:50%;padding:16px 12px}
.sg>div{flex:0 0 100%}
.pg,.ptg{grid-template-columns:1fr}
.abg,.sdg,.ctg{grid-template-columns:1fr;gap:24px}
.svr{flex-direction:column!important;gap:24px}
.prg,.teg{grid-template-columns:1fr 1fr}
.fg{grid-template-columns:1fr 1fr;gap:16px}
.cta{padding:50px 24px}
.ft{padding:40px 24px 16px}
.pb{padding:110px 24px 50px}
.fr{grid-template-columns:1fr}
.faq-sec{padding:50px 24px}
.tf-wrap{grid-template-columns:1fr}
.tf-sec{padding:50px 24px}
.ct-content{grid-template-columns:1fr;gap:32px}
.ct-page{padding:90px 24px 50px}
.ct-stat-row{grid-template-columns:repeat(3,1fr)}
.tm-grid{grid-template-columns:1fr 1fr}
.tm-stats-bar{flex-wrap:wrap}
.tm-stat{min-width:calc(50% - 1px);padding:16px 20px}
.pf-grid{grid-template-columns:1fr}
.ab-grid{grid-template-columns:1fr 1fr}
.ab-steps{flex-wrap:wrap}
.ab-step{min-width:calc(50% - 1px)}
.ab-stats{flex-wrap:wrap}
.ab-stat{min-width:calc(50% - 1px)}
.pf-scene{padding:0 16px 40px}
.ab-scene{padding:0 16px 32px}
.tm-scene{padding:0 16px 32px}
.h1h{font-size:clamp(28px,7vw,44px)!important}
.tf-client-name{font-size:22px}
}
@media(max-width:600px){
.nv-inner{padding:12px 16px}
.h1h{font-size:28px!important}
.ct-h1{font-size:30px!important}
.ab-h1{font-size:30px!important}
.pf-h1{font-size:28px!important}
.tm-h1{font-size:28px!important}
.btns{flex-direction:column;align-items:stretch}
.ct-hero-btns{flex-direction:column;align-items:stretch}
.fg{grid-template-columns:1fr}
.prg,.teg{grid-template-columns:1fr}
.st{min-width:50%}
.ct-mini-l{font-size:9px}
.tm-grid{grid-template-columns:1fr}
.tm-scene{transform:none!important}
.ab-grid{grid-template-columns:1fr 1fr}
.ab-scene{transform:none!important}
.pf-scene{transform:none!important}.hpg-scene{transform:none!important}.hpg-grid{grid-template-columns:1fr}.hpg-img-wrap{height:220px}.ab-mission-pills{gap:8px}
.pf-img-wrap{height:220px}
.pf-grid{grid-template-columns:1fr}
.ab-stats{flex-direction:row;flex-wrap:wrap}
.ab-stat{min-width:calc(50% - 1px)}
.ct-content{gap:24px}
.ct-page{padding:80px 16px 40px}
.ct-action-card{padding:24px 20px}
.ct-stat-row{grid-template-columns:repeat(3,1fr);gap:8px}
.ct-mini-stat{padding:14px 8px}
.ct-mini-n{font-size:18px}
.faq-sec{padding:40px 16px}
.faq-wrap{padding:0}
.sec,.sec-w{padding:40px 16px}
.cta{padding:40px 16px}
.pb{padding:100px 16px 40px}
.pb-t{font-size:clamp(26px,7vw,40px)}
.title{font-size:clamp(22px,6vw,32px)}
.sts{margin:0 -16px}
.stw{padding:0}
.ab-steps{flex-wrap:nowrap}
.ab-step{flex:1;padding:16px 8px}
.ab-step-i{width:36px;height:36px}
.ab-step-t{font-size:11px}
.tm-stats-bar{flex-wrap:wrap}
.tm-stat{min-width:calc(50% - 1px);padding:14px 10px}
.tm-stat-n{font-size:20px}
.tf-wrap{gap:28px}
.tf-client-name{font-size:20px}
.svr-img img{height:240px!important}
.ft{padding:32px 16px 16px}
.fg{grid-template-columns:1fr}
.pf-cta{padding:10px 16px 60px}
.pf-cta-box{padding:28px 20px}
.ab-hero{padding:90px 16px 40px}
.ab-process{padding:32px 16px 48px}
.ab-process-h{font-size:22px}
.ct-ac-val{font-size:17px}
.mock{display:none}
.hp-hero-mock-tag,.hp-hero-mock-live{display:none}
}

/* ============================================
   SERVICES PAGE, REDESIGNED
   Technical / clarity-focused / horizontal cards
   ============================================ */
.sv2-page{min-height:100vh;background:#0a0a0a;position:relative;overflow:hidden;padding:120px 60px 0}
.sv2-bg{position:absolute;inset:0;background:
  radial-gradient(ellipse 1200px 600px at 50% -10%,rgba(0,230,118,.05),transparent 60%),
  radial-gradient(ellipse 800px 500px at 90% 30%,rgba(130,170,255,.03),transparent 60%);
  pointer-events:none;z-index:0}
.sv2-page::before{content:'';position:absolute;inset:0;background-image:
  linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),
  linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px);
  background-size:80px 80px;pointer-events:none;z-index:0}

/* HEADER */
.sv2-header{position:relative;z-index:2;max-width:900px;margin:0 auto;text-align:center;padding-bottom:72px}
.sv2-header .label{display:inline-block}
.sv2-h1{font-size:clamp(40px,5vw,68px);font-weight:800;color:var(--w);line-height:1.05;letter-spacing:-2px;margin:18px 0 22px}
.sv2-sub{font-size:17px;color:var(--tm);font-weight:300;line-height:1.7;max-width:640px;margin:0 auto}

/* CARD GRID */
.sv2-grid{position:relative;z-index:2;max-width:1400px;margin:0 auto;display:grid;grid-template-columns:repeat(3,1fr);gap:24px;padding-bottom:80px;align-items:stretch}
.sv2-grid > div{display:flex}

/* INDIVIDUAL CARD */
.sv2-card{
  background:linear-gradient(180deg,rgba(20,20,20,.95) 0%,rgba(12,12,12,.95) 100%);
  border:1px solid rgba(255,255,255,.06);
  border-radius:20px;
  padding:40px 32px 32px;
  display:flex;
  flex-direction:column;
  position:relative;
  overflow:hidden;
  transition:border-color .4s ease, transform .4s ease, box-shadow .4s ease;
  width:100%;
}
.sv2-card::before{
  content:'';position:absolute;top:0;left:0;right:0;height:3px;
  background:linear-gradient(90deg,transparent,var(--svc),transparent);
  opacity:0;transition:opacity .4s ease;
}
.sv2-card::after{
  content:'';position:absolute;top:-100px;right:-100px;width:240px;height:240px;border-radius:50%;
  background:radial-gradient(circle,var(--svc),transparent 70%);
  opacity:.04;pointer-events:none;transition:opacity .4s ease;
}
.sv2-card:hover{
  border-color:color-mix(in srgb,var(--svc) 40%,transparent);
  transform:translateY(-6px);
  box-shadow:0 30px 60px rgba(0,0,0,.5),0 0 60px color-mix(in srgb,var(--svc) 8%,transparent);
}
.sv2-card:hover::before{opacity:1}
.sv2-card:hover::after{opacity:.08}

/* CARD HEAD */
.sv2-card-head{position:relative;z-index:2;margin-bottom:8px}
.sv2-icon{
  width:48px;height:48px;border-radius:12px;
  background:color-mix(in srgb,var(--svc) 10%,transparent);
  border:1px solid color-mix(in srgb,var(--svc) 25%,transparent);
  color:var(--svc);
  display:flex;align-items:center;justify-content:center;
  margin-bottom:24px;transition:all .3s ease;
}
.sv2-card:hover .sv2-icon{
  background:color-mix(in srgb,var(--svc) 18%,transparent);
  transform:scale(1.05) rotate(-3deg);
}
.sv2-card-title{
  font-size:22px;font-weight:700;color:var(--w);
  line-height:1.25;letter-spacing:-.5px;margin-bottom:14px;
}
.sv2-card-tag{
  font-size:14px;color:var(--tm);font-weight:300;line-height:1.65;
}

/* DIVIDER */
.sv2-card-divider{
  height:1px;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent);
  margin:28px 0 24px;position:relative;z-index:2;
}

/* SECTIONS */
.sv2-section{position:relative;z-index:2;margin-bottom:24px}
.sv2-section-label{
  font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:2px;
  color:var(--svc);margin-bottom:14px;
  display:flex;align-items:center;gap:8px;
}
.sv2-section-label::before{
  content:'';width:14px;height:1px;background:var(--svc);opacity:.4;
}

/* LIST */
.sv2-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:10px}
.sv2-list li{
  display:flex;align-items:flex-start;gap:12px;
  font-size:13px;color:var(--t);line-height:1.55;font-weight:400;
}
.sv2-bullet{
  flex-shrink:0;width:6px;height:6px;border-radius:50%;
  background:var(--svc);margin-top:7px;
  box-shadow:0 0 8px color-mix(in srgb,var(--svc) 50%,transparent);
}

/* TAGS / STACK */
.sv2-tags{display:flex;flex-wrap:wrap;gap:6px}
.sv2-tag{
  font-size:11px;font-weight:500;
  padding:5px 11px;border-radius:6px;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.08);
  color:var(--tm);
  transition:all .25s ease;
}
.sv2-card:hover .sv2-tag{
  border-color:color-mix(in srgb,var(--svc) 20%,transparent);
  color:var(--t);
}

/* PROCESS DIAGRAM */
.sv2-process{display:flex;flex-direction:column;gap:0}
.sv2-step{display:flex;gap:14px;position:relative}
.sv2-step-marker{
  position:relative;flex-shrink:0;width:14px;
  display:flex;flex-direction:column;align-items:center;
}
.sv2-step-dot{
  width:10px;height:10px;border-radius:50%;
  background:var(--svc);
  box-shadow:0 0 0 4px color-mix(in srgb,var(--svc) 12%,transparent),
             0 0 12px color-mix(in srgb,var(--svc) 40%,transparent);
  margin-top:4px;flex-shrink:0;
}
.sv2-step-line{
  width:1px;flex:1;
  background:linear-gradient(180deg,color-mix(in srgb,var(--svc) 35%,transparent),color-mix(in srgb,var(--svc) 8%,transparent));
  margin-top:2px;min-height:18px;
}
.sv2-step-body{padding-bottom:18px;flex:1}
.sv2-step:last-child .sv2-step-body{padding-bottom:0}
.sv2-step-title{
  font-size:13px;font-weight:600;color:var(--w);
  margin-bottom:3px;letter-spacing:-.2px;
}
.sv2-step-desc{
  font-size:12px;color:var(--tm);line-height:1.55;font-weight:300;
}

/* SPECS GRID */
.sv2-specs{
  position:relative;z-index:2;
  display:grid;grid-template-columns:1fr;gap:14px;
  background:rgba(255,255,255,.02);
  border:1px solid rgba(255,255,255,.05);
  border-radius:10px;
  padding:16px;
  margin-top:8px;margin-bottom:24px;
}
.sv2-spec{display:flex;flex-direction:column;gap:4px}
.sv2-spec-label{
  font-size:9px;font-weight:700;text-transform:uppercase;letter-spacing:1.5px;
  color:var(--td);
}
.sv2-spec-value{
  font-size:12px;color:var(--t);font-weight:500;line-height:1.4;
}

/* CARD CTA, pinned to bottom */
.sv2-card-cta{
  position:relative;z-index:2;
  display:flex;align-items:center;justify-content:center;gap:8px;
  margin-top:auto;
  padding:14px 20px;border-radius:10px;
  background:transparent;
  border:1px solid color-mix(in srgb,var(--svc) 30%,transparent);
  color:var(--svc);
  font-size:13px;font-weight:600;
  text-decoration:none;
  transition:all .3s ease;
}
.sv2-card-cta:hover{
  background:var(--svc);
  color:#0a0a0a;
  border-color:var(--svc);
  transform:translateY(-1px);
  box-shadow:0 8px 24px color-mix(in srgb,var(--svc) 25%,transparent);
}

/* PROOF STRIP */
.sv2-proof{position:relative;z-index:2;max-width:1400px;margin:0 auto;padding:60px 0 80px}
.sv2-proof-inner{
  display:grid;grid-template-columns:repeat(4,1fr);
  background:linear-gradient(180deg,rgba(20,20,20,.6),rgba(12,12,12,.6));
  border:1px solid rgba(255,255,255,.06);
  border-radius:14px;overflow:hidden;
}
.sv2-proof-stat{
  padding:32px 24px;text-align:center;
  border-right:1px solid rgba(255,255,255,.05);
}
.sv2-proof-stat:last-child{border-right:none}
.sv2-proof-n{font-size:36px;font-weight:800;color:var(--g);line-height:1;letter-spacing:-1px}
.sv2-proof-l{font-size:11px;color:var(--td);text-transform:uppercase;letter-spacing:1.5px;margin-top:8px;font-weight:500}

/* CLOSING CTA */
.sv2-cta{position:relative;z-index:2;text-align:center;padding:80px 24px 100px;max-width:700px;margin:0 auto}
.sv2-cta-h{font-size:clamp(28px,3vw,40px);font-weight:700;color:var(--w);letter-spacing:-1px;margin-bottom:14px}
.sv2-cta-p{font-size:15px;color:var(--tm);font-weight:300;line-height:1.7;margin-bottom:28px}
.sv2-cta-btns{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}

/* RESPONSIVE */
@media(max-width:1100px){
  .sv2-grid{grid-template-columns:1fr;gap:20px;max-width:600px}
  .sv2-page{padding:100px 24px 0}
  .sv2-card{padding:32px 24px 24px}
}
@media(max-width:600px){
  .sv2-h1{font-size:32px;letter-spacing:-1px}
  .sv2-header{padding-bottom:48px}
  .sv2-proof-inner{grid-template-columns:repeat(2,1fr)}
  .sv2-proof-stat{border-right:none;border-bottom:1px solid rgba(255,255,255,.05)}
  .sv2-proof-stat:nth-child(odd){border-right:1px solid rgba(255,255,255,.05)}
  .sv2-proof-stat:nth-child(n+3){border-bottom:none}
  .sv2-cta-btns{flex-direction:column;align-items:stretch}
}

/* ═══════════════════════════════════════════════════════════
   SERVICES, CINEMATIC REDESIGN (svx-*)
   Apple-style scroll-driven page with full-viewport panels
   ═══════════════════════════════════════════════════════════ */
.svx-page{background:#040404;color:var(--w);position:relative;overflow:hidden}

/* ---------- HERO ---------- */
.svx-hero{
  min-height:100vh;
  display:flex;align-items:center;justify-content:center;
  position:relative;overflow:hidden;
  padding:140px 60px 100px;
  background:#040404;
}
.svx-hero-mesh{
  position:absolute;inset:0;
  background:
    radial-gradient(ellipse 1200px 800px at 30% 20%, rgba(0,230,118,.18), transparent 50%),
    radial-gradient(ellipse 1000px 700px at 80% 70%, rgba(130,170,255,.10), transparent 55%),
    radial-gradient(ellipse 800px 500px at 50% 100%, rgba(195,232,141,.08), transparent 60%);
  filter:blur(20px);
  opacity:.9;animation:svxMesh 20s ease-in-out infinite;
  pointer-events:none;
}
@keyframes svxMesh{
  0%,100%{transform:scale(1) rotate(0deg);opacity:.85}
  50%{transform:scale(1.1) rotate(2deg);opacity:1}
}
.svx-hero-grain{
  position:absolute;inset:0;pointer-events:none;opacity:.4;
  background-image:
    linear-gradient(rgba(255,255,255,.015) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.015) 1px,transparent 1px);
  background-size:80px 80px;
  mask-image:radial-gradient(ellipse at center, black 20%, transparent 70%);
}
.svx-hero-glow{
  position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none;will-change:transform;
}
.svx-hero-glow-1{
  width:600px;height:600px;background:radial-gradient(circle,rgba(0,230,118,.15),transparent 70%);
  top:-100px;right:-200px;
}
.svx-hero-glow-2{
  width:400px;height:400px;background:radial-gradient(circle,rgba(130,170,255,.08),transparent 70%);
  bottom:-50px;left:-100px;
}
.svx-hero-content{
  position:relative;z-index:5;
  text-align:center;max-width:1100px;margin:0 auto;
}
.svx-hero-eyebrow{
  display:inline-flex;align-items:center;gap:10px;
  font-size:13px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:rgba(255,255,255,.55);
  padding:10px 20px;
  border:1px solid rgba(255,255,255,.1);
  border-radius:100px;
  background:rgba(255,255,255,.02);
  backdrop-filter:blur(10px);
  margin-bottom:36px;
}
.svx-eb-dot{
  width:6px;height:6px;border-radius:50%;
  background:var(--g);
  box-shadow:0 0 12px var(--g);
  animation:pu 2s infinite;
}
.svx-hero-h1{
  font-size:clamp(44px, 8vw, 112px);
  font-weight:800;
  line-height:1.1;
  letter-spacing:-3px;
  color:var(--w);
  margin-bottom:32px;
  font-family:'Poppins',sans-serif;
}
.svx-word{
  display:inline-block;
  animation:svxWordIn 1s cubic-bezier(0.2, 0.8, 0.2, 1) backwards;
}
.svx-word-2{animation-delay:.1s}
.svx-word-3{animation-delay:.25s}
.svx-word-4{animation-delay:.35s}
.svx-word-5{animation-delay:.45s}
.svx-word-accent{
  background:linear-gradient(135deg, #00E676 0%, #82E0AA 50%, #00E676 100%);
  background-size:200% 100%;
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;color:transparent;
  animation:svxWordIn 1s cubic-bezier(0.2, 0.8, 0.2, 1) backwards .45s, svxShine 4s ease-in-out infinite 1.5s;
}
@keyframes svxWordIn{
  from{opacity:0;transform:translateY(60px) rotateX(20deg)}
  to{opacity:1;transform:translateY(0) rotateX(0deg)}
}
@keyframes svxShine{
  0%,100%{background-position:0% 50%}
  50%{background-position:100% 50%}
}
.svx-hero-sub{
  font-size:clamp(15px, 1.4vw, 19px);
  color:rgba(255,255,255,.55);
  font-weight:300;line-height:1.7;
  max-width:640px;margin:0 auto 60px;
}
.svx-hero-scroll{
  display:inline-flex;flex-direction:column;align-items:center;gap:12px;
  font-size:11px;font-weight:600;text-transform:uppercase;letter-spacing:3px;
  color:rgba(255,255,255,.4);
}
.svx-scroll-line{
  width:1px;height:40px;
  background:linear-gradient(180deg, transparent, var(--g), transparent);
  animation:svxScroll 2.2s ease-in-out infinite;
  position:relative;
}
@keyframes svxScroll{
  0%{transform:scaleY(0);transform-origin:top}
  50%{transform:scaleY(1);transform-origin:top}
  51%{transform:scaleY(1);transform-origin:bottom}
  100%{transform:scaleY(0);transform-origin:bottom}
}

/* ---------- SERVICE PANELS ---------- */
.svx-panel{
  min-height:100vh;
  position:relative;
  padding:120px 60px 120px;
  display:flex;flex-direction:column;justify-content:center;
  overflow:hidden;
  border-top:1px solid rgba(255,255,255,.04);
  scroll-margin-top:72px;
}
.svx-panel-bg{position:absolute;inset:0;pointer-events:none;z-index:0}

.svx-panel-inner{
  display:grid;
  grid-template-columns:1fr 1fr;
  gap:80px;
  align-items:center;
  max-width:1400px;margin:0 auto;width:100%;
  position:relative;z-index:3;
  margin-bottom:80px;
}
.svx-panel-left{will-change:transform,opacity}
.svx-panel-eyebrow{
  display:inline-flex;align-items:center;gap:14px;
  font-size:12px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;
  margin-bottom:32px;
}
.svx-panel-eb-line{
  width:30px;height:1px;
}
.svx-panel-h{
  font-size:clamp(40px,5.5vw,80px);
  font-weight:800;
  line-height:1.1;
  letter-spacing:-2.5px;
  color:var(--w);
  margin-bottom:32px;
  font-family:'Poppins',sans-serif;
}
.svx-panel-h-line{
  display:block;
}
.svx-panel-pitch{
  font-size:clamp(15px,1.3vw,18px);
  color:rgba(255,255,255,.6);
  font-weight:300;line-height:1.7;
  max-width:520px;
  margin-bottom:48px;
}
.svx-panel-stat{
  display:flex;align-items:baseline;gap:20px;
  padding-top:24px;
  border-top:1px solid rgba(255,255,255,.08);
}
.svx-panel-stat-n{
  font-size:clamp(36px,4vw,56px);
  font-weight:800;
  letter-spacing:-2px;
  line-height:1;
  font-variant-numeric:tabular-nums;
}
.svx-panel-stat-l{
  font-size:13px;font-weight:500;
  color:rgba(255,255,255,.5);
  letter-spacing:1px;text-transform:uppercase;
}
.svx-panel-right{
  position:relative;
  perspective:1200px;
}
.svx-panel-img-frame{
  position:relative;
  aspect-ratio:4/3;
  border-radius:20px;
  border:1px solid rgba(255,255,255,.08);
  overflow:hidden;
  box-shadow:0 60px 120px rgba(0,0,0,.6), 0 0 0 1px rgba(255,255,255,.02);
  transform-style:preserve-3d;
  will-change:transform;
}
.svx-panel-img{
  width:100%;height:100%;object-fit:cover;
  display:block;
  transition:transform 1s ease;
}
.svx-panel-img-overlay{
  position:absolute;inset:0;
  pointer-events:none;
  mix-blend-mode:overlay;
}
.svx-panel-img-vignette{
  position:absolute;inset:0;
  pointer-events:none;
  background:
    radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,.5) 100%),
    linear-gradient(180deg, transparent 60%, rgba(0,0,0,.4) 100%);
}
.svx-panel-floating-tag{
  position:absolute;
  bottom:-20px;left:30px;
  display:inline-flex;align-items:center;gap:10px;
  padding:12px 20px;border-radius:100px;
  background:rgba(10,10,10,.85);
  backdrop-filter:blur(20px);
  border:1px solid rgba(0,230,118,.25);
  font-size:12px;font-weight:600;letter-spacing:1px;
  color:rgba(255,255,255,.85);
  z-index:5;
  will-change:transform,opacity;
}
.svx-tag-dot{
  width:6px;height:6px;border-radius:50%;
  animation:pu 2s infinite;
}
.svx-panel-claim{
  text-align:center;
  max-width:900px;
  margin:60px auto 80px;
  position:relative;z-index:3;
  padding:48px 24px;
  border-top:1px solid rgba(255,255,255,.06);
  border-bottom:1px solid rgba(255,255,255,.06);
  will-change:opacity;
}
.svx-claim-h{
  font-size:clamp(28px,3.5vw,48px);
  font-weight:700;
  letter-spacing:-1px;
  line-height:1.1;
  margin-bottom:14px;
}
.svx-claim-p{
  font-size:clamp(14px,1.2vw,17px);
  color:rgba(255,255,255,.55);
  font-weight:300;
  line-height:1.6;
}
.svx-panel-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:1px;
  max-width:1400px;margin:0 auto;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.04);
  border-radius:20px;
  overflow:hidden;
  position:relative;z-index:3;
}
.svx-panel-cell{
  background:#0a0a0a;
  padding:32px 28px 36px;
  position:relative;
  transition:background .4s ease;
  cursor:default;
  min-height:200px;
}
.svx-panel-cell:hover{
  background:#111;
}
.svx-cell-t{
  font-size:17px;font-weight:600;
  color:var(--w);
  margin-bottom:10px;
  letter-spacing:-.3px;
  line-height:1.3;
}
.svx-cell-d{
  font-size:13px;
  color:rgba(255,255,255,.5);
  font-weight:300;
  line-height:1.65;
}
.svx-panel-cta-row{
  text-align:center;
  margin-top:60px;
  position:relative;z-index:3;
}
.svx-panel-cta{
  display:inline-flex;align-items:center;gap:12px;
  padding:18px 36px;
  border-radius:100px;
  font-size:15px;font-weight:600;letter-spacing:.3px;
  text-decoration:none;
  transition:all .4s cubic-bezier(0.2, 0.8, 0.2, 1);
  position:relative;overflow:hidden;
}
.svx-panel-cta:hover{
  transform:translateY(-3px);
  box-shadow:0 20px 60px rgba(0,230,118,.25);
}
.svx-panel-cta::after{
  content:'';position:absolute;
  top:0;left:-100%;width:60%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.3),transparent);
  animation:sh 2.5s ease-in-out infinite;
}

/* ---------- FINALE ---------- */
.svx-finale{
  min-height:80vh;
  display:flex;align-items:center;justify-content:center;
  position:relative;overflow:hidden;
  padding:120px 60px;
  background:#020202;
  border-top:1px solid rgba(255,255,255,.04);
}
.svx-finale-bg{
  position:absolute;inset:0;pointer-events:none;
  background:
    radial-gradient(ellipse 1200px 800px at 50% 50%, rgba(0,230,118,.12), transparent 60%);
}
.svx-finale-orb{
  position:absolute;border-radius:50%;filter:blur(60px);pointer-events:none;
}
.svx-finale-orb-1{
  width:300px;height:300px;background:radial-gradient(circle,rgba(0,230,118,.2),transparent 70%);
  top:10%;left:10%;animation:o1 8s ease-in-out infinite;
}
.svx-finale-orb-2{
  width:220px;height:220px;background:radial-gradient(circle,rgba(130,170,255,.12),transparent 70%);
  bottom:15%;right:12%;animation:o2 10s ease-in-out infinite;
}
.svx-finale-orb-3{
  width:180px;height:180px;background:radial-gradient(circle,rgba(195,232,141,.1),transparent 70%);
  top:50%;right:30%;animation:o3 12s ease-in-out infinite;
}
.svx-finale-content{
  position:relative;z-index:3;
  text-align:center;max-width:900px;
}
.svx-finale-eyebrow{
  font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:var(--g);
  margin-bottom:24px;
}
.svx-finale-h{
  font-size:clamp(38px,5vw,76px);
  font-weight:800;
  line-height:1.15;
  letter-spacing:-2px;
  color:var(--w);
  margin-bottom:28px;
  font-family:'Poppins',sans-serif;
}
.svx-finale-sub{
  font-size:clamp(15px,1.3vw,18px);
  color:rgba(255,255,255,.55);
  font-weight:300;line-height:1.7;
  max-width:560px;margin:0 auto 48px;
}
.svx-finale-btns{
  display:flex;gap:24px;justify-content:center;align-items:center;flex-wrap:wrap;
}
.svx-finale-cta{
  display:inline-flex;align-items:center;gap:14px;
  padding:20px 36px 20px 40px;
  border-radius:100px;
  background:var(--g);
  color:#0a0a0a;
  font-size:15px;font-weight:600;letter-spacing:.3px;
  text-decoration:none;
  transition:all .4s cubic-bezier(0.2, 0.8, 0.2, 1);
  position:relative;overflow:hidden;
  box-shadow:0 12px 40px rgba(0,230,118,.3);
}
.svx-finale-cta:hover{
  transform:translateY(-3px) scale(1.02);
  box-shadow:0 24px 60px rgba(0,230,118,.45);
}
.svx-finale-cta::after{
  content:'';position:absolute;
  top:0;left:-100%;width:60%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);
  animation:sh 3s ease-in-out infinite;
}
.svx-cta-arrow{
  width:32px;height:32px;border-radius:50%;
  background:rgba(0,0,0,.15);
  display:flex;align-items:center;justify-content:center;
  transition:transform .3s ease;
}
.svx-finale-cta:hover .svx-cta-arrow{
  transform:translateX(4px);
}
.svx-finale-secondary{
  font-size:14px;font-weight:500;
  color:rgba(255,255,255,.65);
  text-decoration:none;
  padding:18px 24px;
  transition:color .3s ease;
}
.svx-finale-secondary:hover{
  color:var(--g);
}

/* ---------- RESPONSIVE ---------- */
@media(max-width:1024px){
  .svx-hero{padding:120px 24px 80px}
  .svx-panel{padding:100px 24px;min-height:auto}
  .svx-panel-inner{grid-template-columns:1fr;gap:48px;margin-bottom:60px}
  .svx-panel-grid{grid-template-columns:repeat(2,1fr)}
  .svx-finale{padding:80px 24px;min-height:60vh}
}
@media(max-width:600px){
  .svx-hero-h1{font-size:48px;letter-spacing:-1.5px}
  .svx-panel-h{font-size:40px;letter-spacing:-1.5px}
  .svx-panel-grid{grid-template-columns:1fr}
  .svx-finale-h{font-size:36px;letter-spacing:-1px}
  .svx-finale-btns{flex-direction:column;width:100%}
  .svx-finale-cta{width:100%;justify-content:center}
}

/* ═══════════════════════════════════════════════════════════
   ABOUT, CINEMATIC REDESIGN (ax-*)
   Origin story + values exploration
   ═══════════════════════════════════════════════════════════ */
.ax-page{background:#040404;color:var(--w);position:relative;overflow:hidden}

/* Shared eyebrow line */
.ax-eb-line{
  width:30px;height:1px;
  background:rgba(255,255,255,.3);
  flex-shrink:0;
}

/* ---------- HERO ---------- */
.ax-hero{
  min-height:100vh;
  display:flex;align-items:center;justify-content:center;
  position:relative;overflow:hidden;
  padding:140px 60px 100px;
  background:#020202;
}
.ax-hero-grain{
  position:absolute;inset:0;pointer-events:none;opacity:.5;
  background-image:
    linear-gradient(rgba(255,255,255,.012) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.012) 1px,transparent 1px);
  background-size:60px 60px;
  mask-image:radial-gradient(ellipse at center, black 30%, transparent 80%);
  z-index:2;
}
.ax-hero-glow{
  position:absolute;
  bottom:-200px;left:50%;
  transform:translateX(-50%);
  width:1000px;height:600px;
  border-radius:50%;
  background:radial-gradient(circle, rgba(0,230,118,.18), transparent 60%);
  filter:blur(80px);
  pointer-events:none;
  z-index:1;
  will-change:transform;
}
.ax-hero-content{
  position:relative;z-index:5;
  text-align:center;max-width:1200px;
}
.ax-hero-eyebrow{
  display:inline-flex;align-items:center;gap:14px;
  font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:rgba(255,255,255,.55);
  margin-bottom:48px;
}
.ax-hero-h1{
  font-size:clamp(40px, 7vw, 96px);
  font-weight:800;
  line-height:1.18;
  letter-spacing:-2.5px;
  color:var(--w);
  margin-bottom:48px;
  font-family:'Poppins',sans-serif;
}
.ax-hero-line{
  display:block;
  animation:axLineIn 1s cubic-bezier(0.2,0.8,0.2,1) backwards;
}
.ax-hero-line-2{animation-delay:.2s}
.ax-hero-line-3{animation-delay:.4s}
@keyframes axLineIn{
  from{opacity:0;transform:translateY(40px)}
  to{opacity:1;transform:translateY(0)}
}
.ax-hero-accent{
  background:linear-gradient(135deg,#00E676 0%, #82E0AA 50%, #00E676 100%);
  background-size:200% 100%;
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;color:transparent;
  animation:svxShine 5s ease-in-out infinite 1.5s;
  font-style:italic;
}
.ax-hero-tag{
  display:inline-flex;align-items:center;gap:10px;
  padding:10px 22px;
  border-radius:100px;
  background:rgba(255,255,255,.04);
  border:1px solid rgba(255,255,255,.08);
  font-size:12px;font-weight:500;letter-spacing:1px;
  color:rgba(255,255,255,.7);
}
.ax-hero-pulse{
  width:6px;height:6px;border-radius:50%;
  background:var(--g);
  box-shadow:0 0 12px var(--g);
  animation:pu 2s infinite;
}

/* ---------- ORIGIN STORY (Section 2) ---------- */
.ax-origin{
  min-height:120vh;
  position:relative;
  display:flex;align-items:center;justify-content:center;
  padding:100px 60px;
  border-top:1px solid rgba(255,255,255,.04);
  overflow:hidden;
}
.ax-origin-bg{
  position:absolute;inset:0;
  background:
    radial-gradient(ellipse 800px 600px at 50% 50%, rgba(0,230,118,.04), transparent 60%);
  pointer-events:none;
}
.ax-origin-content{
  position:relative;z-index:2;
  max-width:1100px;width:100%;
  text-align:center;
}
.ax-origin-eyebrow{
  font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:var(--g);
  margin-bottom:60px;
  opacity:.7;
}
.ax-origin-lines{
  display:flex;flex-direction:column;gap:44px;
}
.ax-origin-line{
  font-size:clamp(26px, 4.5vw, 56px);
  font-weight:700;
  line-height:1.25;
  letter-spacing:-1.5px;
  color:rgba(255,255,255,.9);
  transition:opacity .8s ease, transform .8s ease, filter .8s ease;
  font-family:'Poppins',sans-serif;
}
.ax-origin-accent{
  color:var(--g);
  font-style:italic;
}
.ax-origin-big{
  font-size:clamp(36px, 6vw, 80px);
  font-weight:800;
  letter-spacing:-2.5px;
  line-height:1.15;
  margin-top:24px;
  background:linear-gradient(135deg,#00E676 0%, #ffffff 80%);
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;color:transparent;
}

/* ---------- VALUE BAND (Section 3) ---------- */
.ax-band{
  min-height:90vh;
  position:relative;overflow:hidden;
  padding:120px 60px;
  display:flex;align-items:center;justify-content:center;
  border-top:1px solid rgba(255,255,255,.04);
}
.ax-band-bg{position:absolute;inset:0;pointer-events:none;z-index:0}
.ax-band-content{
  position:relative;z-index:5;
  max-width:900px;
  width:100%;
  margin:0 auto;
  text-align:center;
  will-change:transform,opacity;
}
.ax-band-eyebrow{
  display:inline-flex;align-items:center;justify-content:center;gap:14px;
  font-size:12px;font-weight:600;letter-spacing:2.5px;text-transform:uppercase;
  margin-bottom:32px;
}
.ax-band-h{
  font-size:clamp(40px, 6vw, 84px);
  font-weight:800;
  line-height:1.1;
  letter-spacing:-2.5px;
  color:var(--w);
  margin-bottom:32px;
  font-family:'Poppins',sans-serif;
}
.ax-band-h-line{
  display:block;
  transition:text-shadow .6s ease;
}
.ax-band-h-line[style*="color"]{
  text-shadow:0 0 40px currentColor;
  opacity:.95;
}
.ax-band-conviction{
  font-size:clamp(18px, 1.6vw, 22px);
  font-weight:500;
  font-style:italic;
  line-height:1.5;
  margin-bottom:24px;
  letter-spacing:-.3px;
}
.ax-band-expand{
  font-size:clamp(14px, 1.2vw, 16px);
  color:rgba(255,255,255,.6);
  font-weight:300;
  line-height:1.75;
  max-width:620px;
  margin:0 auto;
}

/* ---------- PROOF (Section 4) ---------- */
.ax-proof{
  position:relative;overflow:hidden;
  padding:120px 60px;
  border-top:1px solid rgba(255,255,255,.04);
  text-align:center;
}
.ax-proof-bg{
  position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(ellipse 1000px 600px at 50% 50%, rgba(0,230,118,.05), transparent 60%);
}
.ax-proof-eyebrow{
  display:inline-flex;align-items:center;gap:14px;
  font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:rgba(255,255,255,.55);
  margin-bottom:24px;
  position:relative;z-index:2;
}
.ax-proof-eyebrow .ax-eb-line{background:var(--g);opacity:.4}
.ax-proof-h{
  font-size:clamp(36px, 5vw, 64px);
  font-weight:800;
  line-height:1.18;
  letter-spacing:-2px;
  color:var(--w);
  margin-bottom:64px;
  font-family:'Poppins',sans-serif;
  position:relative;z-index:2;
}
.ax-proof-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:24px;
  max-width:1300px;
  margin:0 auto;
  position:relative;z-index:2;
}
.ax-proof-cell{
  background:rgba(20,20,20,.5);
  border:1px solid rgba(255,255,255,.06);
  border-radius:16px;
  padding:36px 24px;
  transition:all .4s ease;
  text-align:left;
}
.ax-proof-cell:hover{
  border-color:rgba(0,230,118,.3);
  background:rgba(20,20,20,.8);
  transform:translateY(-4px);
}
.ax-proof-n{
  font-size:48px;
  font-weight:800;
  color:var(--g);
  letter-spacing:-2px;
  line-height:1;
  margin-bottom:16px;
  font-variant-numeric:tabular-nums;
}
.ax-proof-l{
  font-size:14px;
  font-weight:600;
  color:var(--w);
  margin-bottom:8px;
  letter-spacing:-.2px;
}
.ax-proof-d{
  font-size:13px;
  color:rgba(255,255,255,.55);
  font-weight:300;
  line-height:1.6;
}

/* ---------- WHAT WE WON'T DO (Section 5) ---------- */
.ax-wont{
  position:relative;overflow:hidden;
  padding:120px 60px;
  border-top:1px solid rgba(255,255,255,.04);
  background:#030303;
}
.ax-wont-bg{
  position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(ellipse 800px 500px at 30% 30%, rgba(255,80,80,.04), transparent 60%);
}
.ax-wont-eyebrow{
  font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:rgba(255,80,80,.7);
  margin-bottom:24px;
  text-align:center;
  position:relative;z-index:2;
}
.ax-wont-h{
  font-size:clamp(40px, 6vw, 84px);
  font-weight:800;
  line-height:1.15;
  letter-spacing:-2.5px;
  color:var(--w);
  margin-bottom:60px;
  font-family:'Poppins',sans-serif;
  text-align:center;
  position:relative;z-index:2;
}
.ax-wont-strike{
  position:relative;
  display:inline-block;
  color:#FF6464;
  font-style:italic;
}
.ax-wont-strike::after{
  content:'';position:absolute;
  left:-4%;right:-4%;top:55%;
  height:6px;
  background:#FF6464;
  border-radius:2px;
  transform:rotate(-2deg);
  opacity:.95;
}
.ax-wont-list{
  max-width:840px;
  margin:0 auto;
  position:relative;z-index:2;
  display:flex;flex-direction:column;gap:14px;
}
.ax-wont-line{
  display:flex;align-items:center;gap:18px;
  padding:22px 28px;
  background:rgba(20,20,20,.6);
  border:1px solid rgba(255,255,255,.05);
  border-radius:12px;
  font-size:clamp(15px, 1.3vw, 17px);
  color:rgba(255,255,255,.85);
  font-weight:400;
  line-height:1.5;
  transition:all .3s ease;
}
.ax-wont-line:hover{
  border-color:rgba(255,80,80,.25);
  background:rgba(25,15,15,.6);
  transform:translateX(4px);
}
.ax-wont-x{
  flex-shrink:0;
  width:32px;height:32px;
  border-radius:50%;
  background:rgba(255,80,80,.1);
  border:1px solid rgba(255,80,80,.25);
  color:#FF6464;
  display:flex;align-items:center;justify-content:center;
}

/* ---------- FINALE ---------- */
.ax-finale{
  min-height:60vh;
  display:flex;align-items:center;justify-content:center;
  position:relative;overflow:hidden;
  padding:120px 60px;
  background:#020202;
  border-top:1px solid rgba(255,255,255,.04);
}
.ax-finale-bg{
  position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(ellipse 1200px 700px at 50% 50%, rgba(0,230,118,.12), transparent 60%);
}
.ax-finale-orb{
  position:absolute;border-radius:50%;filter:blur(60px);pointer-events:none;
}
.ax-finale-orb-1{
  width:300px;height:300px;background:radial-gradient(circle,rgba(0,230,118,.2),transparent 70%);
  top:15%;left:15%;animation:o1 8s ease-in-out infinite;
}
.ax-finale-orb-2{
  width:250px;height:250px;background:radial-gradient(circle,rgba(130,170,255,.12),transparent 70%);
  bottom:15%;right:15%;animation:o2 11s ease-in-out infinite;
}
.ax-finale-content{
  position:relative;z-index:3;
  text-align:center;max-width:900px;
}
.ax-finale-h{
  font-size:clamp(36px, 5vw, 72px);
  font-weight:800;
  line-height:1.18;
  letter-spacing:-2px;
  color:var(--w);
  margin-bottom:24px;
  font-family:'Poppins',sans-serif;
}
.ax-finale-sub{
  font-size:clamp(15px, 1.3vw, 18px);
  color:rgba(255,255,255,.55);
  font-weight:300;line-height:1.7;
  max-width:560px;margin:0 auto 48px;
}
.ax-finale-btns{
  display:flex;gap:24px;justify-content:center;align-items:center;flex-wrap:wrap;
}
.ax-finale-cta{
  display:inline-flex;align-items:center;gap:14px;
  padding:20px 36px 20px 40px;
  border-radius:100px;
  background:var(--g);
  color:#0a0a0a;
  font-size:15px;font-weight:600;letter-spacing:.3px;
  text-decoration:none;
  transition:all .4s cubic-bezier(0.2,0.8,0.2,1);
  position:relative;overflow:hidden;
  box-shadow:0 12px 40px rgba(0,230,118,.3);
}
.ax-finale-cta:hover{
  transform:translateY(-3px) scale(1.02);
  box-shadow:0 24px 60px rgba(0,230,118,.45);
}
.ax-finale-cta::after{
  content:'';position:absolute;
  top:0;left:-100%;width:60%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);
  animation:sh 3s ease-in-out infinite;
}
.ax-cta-arrow{
  width:32px;height:32px;border-radius:50%;
  background:rgba(0,0,0,.15);
  display:flex;align-items:center;justify-content:center;
  transition:transform .3s ease;
}
.ax-finale-cta:hover .ax-cta-arrow{transform:translateX(4px)}
.ax-finale-secondary{
  font-size:14px;font-weight:500;
  color:rgba(255,255,255,.65);
  text-decoration:none;
  padding:18px 24px;
  transition:color .3s ease;
}
.ax-finale-secondary:hover{color:var(--g)}

/* ---------- RESPONSIVE ---------- */
@media(max-width:1024px){
  .ax-hero,.ax-band,.ax-origin,.ax-proof,.ax-wont,.ax-finale{padding:80px 24px}
  .ax-hero{padding:120px 24px 80px}
  .ax-band{min-height:auto}
  .ax-proof-grid{grid-template-columns:repeat(2,1fr)}
  .ax-origin{min-height:100vh}
}
@media(max-width:600px){
  .ax-hero-h1{font-size:42px;letter-spacing:-1.5px}
  .ax-band-h{font-size:42px;letter-spacing:-1.5px}
  .ax-origin-line{font-size:24px;letter-spacing:-1px}
  .ax-origin-big{font-size:32px;letter-spacing:-1.5px}
  .ax-wont-h{font-size:36px;letter-spacing:-1px}
  .ax-finale-h{font-size:32px;letter-spacing:-1px}
  .ax-proof-grid{grid-template-columns:1fr}
  .ax-finale-btns{flex-direction:column;width:100%}
  .ax-finale-cta{width:100%;justify-content:center}
  .ax-wont-line{padding:18px 20px;gap:14px}
}

/* ═══════════════════════════════════════════════════════════
   HOME PAGE, FULL OVERHAUL (cinematic, act-structured)
   ═══════════════════════════════════════════════════════════ */

/* ───── HERO ───── */
.hp-hero{
  min-height:100vh;
  position:relative;
  overflow:hidden;
  display:flex;align-items:center;
  padding:140px 60px 120px;
  background:#040404;
}
.hp-hero-mesh{
  position:absolute;inset:0;pointer-events:none;
  background:
    radial-gradient(ellipse 1200px 800px at 25% 25%, rgba(0,230,118,.18), transparent 55%),
    radial-gradient(ellipse 1000px 700px at 80% 75%, rgba(130,170,255,.10), transparent 60%),
    radial-gradient(ellipse 800px 500px at 50% 100%, rgba(195,232,141,.08), transparent 60%);
  filter:blur(20px);
  animation:svxMesh 20s ease-in-out infinite;
}
.hp-hero-grid{
  position:absolute;inset:0;pointer-events:none;
  background-image:
    linear-gradient(rgba(255,255,255,.012) 1px,transparent 1px),
    linear-gradient(90deg,rgba(255,255,255,.012) 1px,transparent 1px);
  background-size:80px 80px;
  mask-image:radial-gradient(ellipse at center, black 25%, transparent 75%);
  will-change:transform;
}
.hp-hero-orb{
  position:absolute;border-radius:50%;filter:blur(60px);pointer-events:none;
  will-change:transform;
}
.hp-hero-orb-1{
  width:500px;height:500px;
  background:radial-gradient(circle, rgba(0,230,118,.18), transparent 70%);
  top:-100px;right:-100px;
  animation:o1 8s ease-in-out infinite;
}
.hp-hero-orb-2{
  width:380px;height:380px;
  background:radial-gradient(circle, rgba(130,170,255,.10), transparent 70%);
  bottom:-50px;left:-50px;
  animation:o2 11s ease-in-out infinite;
}
.hp-hero-orb-3{
  width:280px;height:280px;
  background:radial-gradient(circle, rgba(0,230,118,.08), transparent 70%);
  top:40%;right:35%;
  animation:o3 13s ease-in-out infinite;
}
.hp-hero-inner{
  display:grid;
  grid-template-columns:1fr 1.05fr;
  gap:80px;
  align-items:center;
  max-width:1320px;
  margin:0 auto;
  width:100%;
  position:relative;
  z-index:5;
}
.hp-hero-text{display:flex;flex-direction:column;gap:0}
.hp-hero-badge{
  display:inline-flex;align-items:center;gap:10px;
  padding:8px 18px;border-radius:100px;
  background:rgba(0,230,118,.06);
  border:1px solid rgba(0,230,118,.18);
  font-size:11px;font-weight:600;letter-spacing:1.8px;text-transform:uppercase;
  color:var(--g);
  width:fit-content;margin-bottom:32px;
}
.hp-hero-badge-dot{
  width:6px;height:6px;border-radius:50%;
  background:var(--g);box-shadow:0 0 12px var(--g);
  animation:pu 2s infinite;
}
.hp-hero-h1{
  font-size:clamp(36px, 4.6vw, 68px);
  font-weight:800;
  line-height:1.1;
  letter-spacing:-2px;
  color:var(--w);
  margin-bottom:36px;
  font-family:'Poppins',sans-serif;
  max-width:100%;
}
.hp-hword{
  display:inline-block;
  white-space:nowrap;
  animation:hpWordIn 1s cubic-bezier(0.2,0.8,0.2,1) backwards;
}
.hp-hword-1{animation-delay:.05s}
.hp-hword-2{animation-delay:.15s}
.hp-hword-3{animation-delay:.25s}
.hp-hword-4{animation-delay:.4s}
.hp-hword-5{animation-delay:.5s}
.hp-hword-6{animation-delay:.65s}
@keyframes hpWordIn{
  from{opacity:0;transform:translateY(40px) rotateX(15deg)}
  to{opacity:1;transform:translateY(0) rotateX(0)}
}
.hp-hword-accent{
  background:linear-gradient(135deg, #00E676 0%, #82E0AA 50%, #00E676 100%);
  background-size:200% 100%;
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;color:transparent;
  animation:hpWordIn 1s cubic-bezier(0.2,0.8,0.2,1) backwards .65s, svxShine 5s ease-in-out infinite 1.8s;
  white-space:nowrap;
}
.hp-hero-sub{
  font-size:clamp(15px,1.3vw,18px);
  color:rgba(255,255,255,.6);
  font-weight:300;
  line-height:1.7;
  max-width:540px;
  margin-bottom:36px;
}
.hp-hero-btns{display:flex;gap:14px;flex-wrap:wrap;align-items:center}
.hp-hero-cta-primary{
  display:inline-flex;align-items:center;gap:12px;
  padding:18px 28px 18px 32px;
  border-radius:100px;
  background:var(--g);color:#0a0a0a;
  font-size:14px;font-weight:600;letter-spacing:.3px;
  text-decoration:none;
  transition:all .4s cubic-bezier(0.2,0.8,0.2,1);
  position:relative;overflow:hidden;
  box-shadow:0 12px 40px rgba(0,230,118,.3);
}
.hp-hero-cta-primary:hover{
  transform:translateY(-3px);
  box-shadow:0 20px 56px rgba(0,230,118,.4);
}
.hp-hero-cta-primary::after{
  content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);
  animation:sh 3s ease-in-out infinite;
}
.hp-hero-cta-arrow{
  width:28px;height:28px;border-radius:50%;
  background:rgba(0,0,0,.15);
  display:flex;align-items:center;justify-content:center;
  transition:transform .3s ease;
}
.hp-hero-cta-primary:hover .hp-hero-cta-arrow{transform:translateX(4px)}
.hp-hero-cta-secondary{
  display:inline-flex;align-items:center;gap:10px;
  padding:18px 24px;
  font-size:14px;font-weight:500;
  color:rgba(255,255,255,.7);
  text-decoration:none;
  transition:color .3s ease;
}
.hp-hero-cta-secondary:hover{color:var(--g)}

/* Hero mockup */
.hp-hero-mock-wrap{
  position:relative;
  will-change:transform;
}
.hp-hero-mock-bg{
  position:absolute;
  inset:-30px;
  border-radius:24px;
  background:radial-gradient(ellipse at center, rgba(0,230,118,.08), transparent 70%);
  filter:blur(20px);
  z-index:-1;
}
.hp-hero-mock-tag{
  position:absolute;
  bottom:-18px;left:24px;
  display:inline-flex;align-items:center;gap:10px;
  padding:10px 18px;border-radius:100px;
  background:rgba(10,10,10,.85);
  backdrop-filter:blur(20px);
  border:1px solid rgba(0,230,118,.25);
  font-size:11px;font-weight:600;letter-spacing:1px;
  color:rgba(255,255,255,.85);
  z-index:5;
}
.hp-hero-mock-tag-dot{
  width:6px;height:6px;border-radius:50%;
  background:var(--g);box-shadow:0 0 10px var(--g);
  animation:pu 2s infinite;
}

/* Floating "Live preview" badge in top-right of mockup */
.hp-hero-mock-live{
  position:absolute;
  top:-14px;right:24px;
  display:inline-flex;align-items:center;gap:8px;
  padding:8px 14px;border-radius:100px;
  background:rgba(10,10,10,.92);
  backdrop-filter:blur(20px);
  border:1px solid rgba(255,80,80,.25);
  font-size:10px;font-weight:600;letter-spacing:.8px;
  color:rgba(255,255,255,.85);
  z-index:5;
  text-transform:uppercase;
}
.hp-hero-mock-live-dot{
  width:6px;height:6px;border-radius:50%;
  background:#FF5757;
  box-shadow:0 0 10px #FF5757;
  animation:pu 1.5s infinite;
}

/* Hero scroll cue */
.hp-hero-scroll{
  position:absolute;
  bottom:32px;left:50%;
  transform:translateX(-50%);
  display:flex;flex-direction:column;align-items:center;gap:10px;
  font-size:10px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:rgba(255,255,255,.4);
  z-index:5;pointer-events:none;
  transition:opacity .4s ease;
}
.hp-hero-scroll-line{
  width:1px;height:36px;
  background:linear-gradient(180deg, transparent, var(--g), transparent);
  animation:svxScroll 2.2s ease-in-out infinite;
}

/* ───── STATS MOMENT ───── */
.hp-stats-moment{
  position:relative;overflow:hidden;
  padding:120px 60px;
  background:#030303;
  border-top:1px solid rgba(255,255,255,.04);
}
.hp-stats-bg{
  position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(ellipse 1200px 600px at 50% 50%, rgba(0,230,118,.05), transparent 60%);
}
.hp-stats-orb{
  position:absolute;border-radius:50%;filter:blur(70px);pointer-events:none;
}
.hp-stats-orb-l{
  width:400px;height:400px;
  background:radial-gradient(circle, rgba(0,230,118,.12), transparent 70%);
  top:50%;left:-100px;transform:translateY(-50%);
  animation:o1 9s ease-in-out infinite;
}
.hp-stats-orb-r{
  width:320px;height:320px;
  background:radial-gradient(circle, rgba(130,170,255,.08), transparent 70%);
  top:50%;right:-80px;transform:translateY(-50%);
  animation:o2 12s ease-in-out infinite;
}
.hp-stats-content{
  position:relative;z-index:3;
  max-width:1300px;margin:0 auto;
  text-align:center;
}
.hp-stats-eyebrow{
  display:inline-flex;align-items:center;gap:14px;
  font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:rgba(255,255,255,.55);
  margin-bottom:28px;
}
.hp-stats-eb-line{width:24px;height:1px;background:rgba(0,230,118,.4)}
.hp-stats-h{
  font-size:clamp(36px,5vw,68px);
  font-weight:800;
  line-height:1.15;
  letter-spacing:-2px;
  color:var(--w);
  margin-bottom:80px;
  font-family:'Poppins',sans-serif;
}
.hp-stats-grid{
  display:grid;
  grid-template-columns:repeat(4,1fr);
  gap:0;
  border:1px solid rgba(255,255,255,.06);
  border-radius:20px;
  background:rgba(20,20,20,.5);
  overflow:hidden;
}
.hp-big-counter{
  padding:48px 28px;
  border-right:1px solid rgba(255,255,255,.06);
  text-align:left;
  position:relative;
  transition:background .3s ease;
}
.hp-big-counter:last-child{border-right:none}
.hp-big-counter:hover{background:rgba(20,20,20,.8)}
.hp-counter-n{
  font-size:clamp(48px,6vw,84px);
  font-weight:800;
  color:var(--g);
  letter-spacing:-3px;
  line-height:1;
  margin-bottom:16px;
  font-variant-numeric:tabular-nums;
  display:flex;align-items:flex-start;
}
.hp-counter-suffix{
  font-size:.6em;
  margin-left:2px;
  font-weight:700;
  opacity:.85;
}
.hp-counter-l{
  font-size:14px;
  font-weight:600;
  color:var(--w);
  margin-bottom:8px;
  letter-spacing:-.2px;
}
.hp-counter-d{
  font-size:13px;
  color:rgba(255,255,255,.55);
  font-weight:300;
  line-height:1.5;
}

/* ───── SERVICES PREVIEW ───── */
.hp-prev{
  position:relative;overflow:hidden;
  padding:120px 60px;
  background:#0a0a0a;
}
.hp-prev-bg{
  position:absolute;inset:0;pointer-events:none;
  background:
    radial-gradient(ellipse 1000px 600px at 20% 30%, rgba(0,230,118,.04), transparent 60%),
    radial-gradient(ellipse 800px 500px at 80% 70%, rgba(130,170,255,.03), transparent 60%);
}
.hp-prev-header{
  text-align:center;
  max-width:900px;margin:0 auto 80px;
  position:relative;z-index:2;
}
.hp-prev-eyebrow{
  display:inline-flex;align-items:center;gap:14px;
  font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:rgba(255,255,255,.55);
  margin-bottom:24px;
}
.hp-prev-h{
  font-size:clamp(36px,5vw,68px);
  font-weight:800;
  line-height:1.1;
  letter-spacing:-2px;
  color:var(--w);
  font-family:'Poppins',sans-serif;
}
.hp-prev-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:24px;
  max-width:1320px;margin:0 auto;
  position:relative;z-index:2;
}

/* ── Icon-driven service card ── */
.hp-prev-card{
  position:relative;
  background:linear-gradient(180deg, rgba(20,20,20,.95), rgba(10,10,10,.98));
  border:1px solid rgba(255,255,255,.08);
  border-radius:24px;
  padding:48px 32px 36px;
  overflow:hidden;
  cursor:pointer;
  display:flex;flex-direction:column;
  min-height:440px;
  transform-style:preserve-3d;
  transition:transform .15s ease-out, border-color .4s ease, box-shadow .4s ease;
  will-change:transform;
}
.hp-prev-card.hp-prev-hover{
  border-color:color-mix(in srgb, var(--svc) 50%, transparent);
  box-shadow:
    0 30px 70px rgba(0,0,0,.6),
    0 0 80px color-mix(in srgb, var(--svc) 15%, transparent);
}

/* Animated mesh gradient that shifts based on cursor position */
.hp-prev-mesh{
  position:absolute;inset:0;
  background:
    radial-gradient(circle 600px at var(--mx) var(--my), color-mix(in srgb, var(--svc) 15%, transparent), transparent 60%),
    radial-gradient(circle 400px at calc(100% - var(--mx)) calc(100% - var(--my)), color-mix(in srgb, var(--svc) 10%, transparent), transparent 70%);
  pointer-events:none;
  opacity:.5;
  transition:opacity .4s ease;
  z-index:1;
}
.hp-prev-card.hp-prev-hover .hp-prev-mesh{opacity:1}

/* Cursor-following spotlight */
.hp-prev-spotlight{
  position:absolute;inset:0;
  background:radial-gradient(circle 250px at var(--mx) var(--my), rgba(255,255,255,.06), transparent 60%);
  pointer-events:none;
  opacity:0;
  transition:opacity .4s ease;
  z-index:2;
}
.hp-prev-card.hp-prev-hover .hp-prev-spotlight{opacity:1}

/* Diagonal scanning beam — sweeps on hover */
.hp-prev-scan{
  position:absolute;
  top:-100%;left:-50%;
  width:200%;height:200%;
  background:linear-gradient(110deg,
    transparent 40%,
    color-mix(in srgb, var(--svc) 20%, transparent) 50%,
    transparent 60%);
  pointer-events:none;
  opacity:0;
  transition:transform 1s ease, opacity .3s ease;
  z-index:2;
}
.hp-prev-card.hp-prev-hover .hp-prev-scan{
  opacity:1;
  transform:translate(50%, 50%);
}

/* Particles canvas */
.hp-prev-particles{
  position:absolute;inset:0;
  width:100%;height:100%;
  pointer-events:none;
  z-index:1;
  opacity:.6;
}
.hp-prev-card.hp-prev-hover .hp-prev-particles{
  opacity:1;
  transition:opacity .4s ease;
}

/* Card content layer */
.hp-prev-card-content{
  position:relative;
  z-index:5;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  flex:1;
}

.hp-prev-card-label{
  font-size:11px;
  font-weight:700;
  letter-spacing:2px;
  text-transform:uppercase;
  margin-bottom:32px;
}

/* Icon — the visual centerpiece */
.hp-prev-icon-wrap{
  position:relative;
  width:180px;
  height:180px;
  margin-bottom:40px;
  display:flex;
  align-items:center;
  justify-content:center;
}
.hp-prev-icon-glow{
  position:absolute;
  top:50%;left:50%;
  transform:translate(-50%,-50%);
  width:240px;height:240px;
  border-radius:50%;
  background:radial-gradient(circle, color-mix(in srgb, var(--svc) 30%, transparent), transparent 60%);
  filter:blur(24px);
  opacity:.4;
  transition:opacity .4s ease, transform .4s ease;
  pointer-events:none;
}
.hp-prev-card.hp-prev-hover .hp-prev-icon-glow{
  opacity:.9;
  transform:translate(-50%,-50%) scale(1.15);
}
.hp-icon-svg{
  position:relative;
  z-index:2;
  width:100%;
  height:100%;
  transition:transform .5s cubic-bezier(0.2,0.8,0.2,1);
}
.hp-prev-card.hp-prev-hover .hp-icon-svg{
  transform:scale(1.05);
}

/* Web icon animations */
.hp-icon-cursor{
  transform-origin:78px 60px;
  transition:transform .5s cubic-bezier(0.2,0.8,0.2,1);
}
.hp-prev-card.hp-prev-hover .hp-icon-cursor{
  animation:webCursor 1.4s ease-in-out infinite;
}
@keyframes webCursor{
  0%,100%{transform:translate(0,0)}
  50%{transform:translate(-12px,-8px)}
}
.hp-icon-sparkle{
  transform-origin:96px 46px;
  opacity:0;
  transition:opacity .3s ease;
}
.hp-prev-card.hp-prev-hover .hp-icon-sparkle{
  opacity:1;
  animation:sparkleSpin 2s linear infinite;
}
@keyframes sparkleSpin{
  from{transform:rotate(0deg)}
  to{transform:rotate(360deg)}
}
.hp-icon-line{
  transform-origin:left center;
  transition:transform .4s ease;
}
.hp-prev-card.hp-prev-hover .hp-icon-line-1{animation:lineGrow 1.5s ease-in-out infinite}
.hp-prev-card.hp-prev-hover .hp-icon-line-2{animation:lineGrow 1.5s ease-in-out infinite .15s}
.hp-prev-card.hp-prev-hover .hp-icon-line-3{animation:lineGrow 1.5s ease-in-out infinite .3s}
@keyframes lineGrow{
  0%,100%{transform:scaleX(.85);opacity:.4}
  50%{transform:scaleX(1);opacity:.9}
}

/* Mobile icon animations — tap ripples */
.hp-tap-ring{
  transform-origin:60px 60px;
}
.hp-prev-card.hp-prev-hover .hp-tap-ring-1{
  animation:tapRing 1.8s ease-out infinite;
}
.hp-prev-card.hp-prev-hover .hp-tap-ring-2{
  animation:tapRing 1.8s ease-out infinite .6s;
}
.hp-prev-card.hp-prev-hover .hp-tap-ring-3{
  animation:tapRing 1.8s ease-out infinite 1.2s;
}
@keyframes tapRing{
  0%{opacity:.7;transform:scale(.3)}
  100%{opacity:0;transform:scale(1.4)}
}
.hp-app-icon{transition:opacity .3s ease}
.hp-prev-card.hp-prev-hover .hp-app-icon-1{animation:appBlink 2s ease-in-out infinite}
.hp-prev-card.hp-prev-hover .hp-app-icon-3{animation:appBlink 2s ease-in-out infinite .3s}
.hp-prev-card.hp-prev-hover .hp-app-icon-5{animation:appBlink 2s ease-in-out infinite .6s}
@keyframes appBlink{
  0%,100%{opacity:.6}
  50%{opacity:1}
}

/* SEO icon animations */
.hp-bar{
  transform-origin:bottom;
  transition:transform .4s ease;
}
.hp-prev-card.hp-prev-hover .hp-bar-1{animation:barGrow 1.5s ease-in-out infinite}
.hp-prev-card.hp-prev-hover .hp-bar-2{animation:barGrow 1.5s ease-in-out infinite .15s}
.hp-prev-card.hp-prev-hover .hp-bar-3{animation:barGrow 1.5s ease-in-out infinite .3s}
.hp-prev-card.hp-prev-hover .hp-bar-4{animation:barGrow 1.5s ease-in-out infinite .45s}
@keyframes barGrow{
  0%,100%{transform:scaleY(.85)}
  50%{transform:scaleY(1.05)}
}
.hp-trend-line{
  stroke-dasharray:100;
  stroke-dashoffset:0;
  transition:stroke-dashoffset .8s ease;
}
.hp-prev-card.hp-prev-hover .hp-trend-line{
  animation:trendDraw 2.5s ease-in-out infinite;
}
@keyframes trendDraw{
  0%{stroke-dashoffset:100}
  50%,100%{stroke-dashoffset:0}
}
.hp-mag{
  transform-origin:36px 42px;
  transition:transform .4s ease;
}
.hp-prev-card.hp-prev-hover .hp-mag{
  animation:magBounce 2s ease-in-out infinite;
}
@keyframes magBounce{
  0%,100%{transform:scale(1)}
  50%{transform:scale(1.15)}
}

/* Title — the largest text */
.hp-prev-card-title{
  font-size:clamp(28px,3vw,40px);
  font-weight:800;
  line-height:1.1;
  letter-spacing:-1.2px;
  color:var(--w);
  margin-bottom:auto;
  font-family:'Poppins',sans-serif;
}

.hp-prev-card-cta{
  display:inline-flex;align-items:center;gap:10px;
  margin-top:32px;
  font-size:13px;font-weight:600;letter-spacing:.3px;
  color:var(--svc);
  transition:gap .3s ease;
}
.hp-prev-card.hp-prev-hover .hp-prev-card-cta{gap:14px}
.hp-prev-arrow{
  width:26px;height:26px;border-radius:50%;
  background:color-mix(in srgb, var(--svc) 12%, transparent);
  border:1px solid color-mix(in srgb, var(--svc) 30%, transparent);
  display:flex;align-items:center;justify-content:center;
  transition:all .3s ease;
}
.hp-prev-card.hp-prev-hover .hp-prev-arrow{
  background:var(--svc);
  color:#0a0a0a;
}

.hp-prev-footer{
  text-align:center;margin-top:48px;
  position:relative;z-index:2;
}
.hp-prev-all-link{
  display:inline-flex;align-items:center;gap:10px;
  font-size:14px;font-weight:600;
  color:rgba(255,255,255,.85);
  text-decoration:none;
  padding:14px 24px;
  border:1px solid rgba(255,255,255,.12);
  border-radius:100px;
  transition:all .3s ease;
}
.hp-prev-all-link:hover{
  border-color:var(--g);
  color:var(--g);
  transform:translateY(-2px);
}

/* ───── FINALE ───── */
.hp-finale{
  min-height:80vh;
  display:flex;align-items:center;justify-content:center;
  position:relative;overflow:hidden;
  padding:120px 60px;
  background:#020202;
  border-top:1px solid rgba(255,255,255,.04);
}
.hp-finale-bg{
  position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(ellipse 1200px 800px at 50% 50%, rgba(0,230,118,.10), transparent 60%);
}
.hp-finale-orb{
  position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none;
}
/* Single calm orb, no scale pulsing — just a slow gentle drift */
.hp-finale-orb-1{
  width:520px;height:520px;
  background:radial-gradient(circle, rgba(0,230,118,.18), transparent 70%);
  top:50%;left:50%;
  transform:translate(-50%,-50%);
  animation:hpFinaleDrift 18s ease-in-out infinite;
}
/* Hide the secondary orbs entirely — they were the noise */
.hp-finale-orb-2,
.hp-finale-orb-3{display:none}
@keyframes hpFinaleDrift{
  0%,100%{transform:translate(-50%,-50%)}
  50%{transform:translate(-48%,-52%)}
}
.hp-finale-content{
  position:relative;z-index:3;
  text-align:center;max-width:920px;
}
.hp-finale-eyebrow{
  font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:var(--g);
  margin-bottom:28px;
}
.hp-finale-h{
  font-size:clamp(40px,5.5vw,80px);
  font-weight:800;
  line-height:1.08;
  letter-spacing:-2.5px;
  color:var(--w);
  margin-bottom:28px;
  font-family:'Poppins',sans-serif;
}
.hp-finale-sub{
  font-size:clamp(15px,1.3vw,18px);
  color:rgba(255,255,255,.55);
  font-weight:300;line-height:1.7;
  max-width:580px;margin:0 auto 48px;
}
.hp-finale-btns{
  display:flex;gap:24px;justify-content:center;align-items:center;flex-wrap:wrap;
}
.hp-finale-cta{
  display:inline-flex;align-items:center;gap:14px;
  padding:20px 36px 20px 40px;
  border-radius:100px;
  background:var(--g);color:#0a0a0a;
  font-size:15px;font-weight:600;letter-spacing:.3px;
  text-decoration:none;
  transition:all .4s cubic-bezier(0.2,0.8,0.2,1);
  position:relative;overflow:hidden;
  box-shadow:0 12px 40px rgba(0,230,118,.3);
}
.hp-finale-cta:hover{
  transform:translateY(-3px) scale(1.02);
  box-shadow:0 24px 60px rgba(0,230,118,.45);
}
.hp-finale-cta::after{
  content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);
  transition:left .8s ease;
}
.hp-finale-cta:hover::after{
  left:200%;
}
.hp-finale-cta-arrow{
  width:32px;height:32px;border-radius:50%;
  background:rgba(0,0,0,.15);
  display:flex;align-items:center;justify-content:center;
  transition:transform .3s ease;
}
.hp-finale-cta:hover .hp-finale-cta-arrow{transform:translateX(4px)}
.hp-finale-secondary{
  font-size:14px;font-weight:500;
  color:rgba(255,255,255,.65);
  text-decoration:none;
  padding:18px 24px;
  transition:color .3s ease;
}
.hp-finale-secondary:hover{color:var(--g)}

/* Stats counter, already uses .stn but make sure number transitions feel smooth */
.stn{font-variant-numeric:tabular-nums}

/* ── Home Manifesto, full-viewport scroll-revealed conviction ── */
.hp-manifesto{
  min-height:100vh;
  position:relative;
  overflow:hidden;
  display:flex;align-items:center;justify-content:center;
  padding:120px 60px;
  background:#020202;
  border-top:1px solid rgba(255,255,255,.04);
  border-bottom:1px solid rgba(255,255,255,.04);
}
.hp-mf-glow{
  position:absolute;
  top:50%;left:50%;
  transform:translate(-50%,-50%);
  width:1100px;height:600px;
  border-radius:50%;
  background:radial-gradient(ellipse, rgba(0,230,118,.12), transparent 60%);
  filter:blur(80px);
  pointer-events:none;
  z-index:0;
}
.hp-mf-grain{
  position:absolute;inset:0;pointer-events:none;
  background-image:
    linear-gradient(rgba(255,255,255,.012) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,.012) 1px, transparent 1px);
  background-size:60px 60px;
  mask-image:radial-gradient(ellipse at center, black 30%, transparent 80%);
  z-index:2;
}
.hp-mf-content{
  position:relative;z-index:5;
  max-width:1100px;width:100%;
  text-align:center;
}
.hp-mf-eyebrow{
  display:inline-flex;align-items:center;gap:14px;
  font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:rgba(255,255,255,.5);
  margin-bottom:64px;
}
.hp-mf-eb-line{
  width:24px;height:1px;
  background:rgba(0,230,118,.4);
}
.hp-mf-lines{
  display:flex;flex-direction:column;
  gap:44px;
}
.hp-mf-line{
  font-size:clamp(28px, 4.5vw, 56px);
  font-weight:700;
  line-height:1.25;
  letter-spacing:-1.5px;
  color:rgba(255,255,255,.92);
  font-family:'Poppins',sans-serif;
  transition:opacity .9s ease, transform .9s ease, filter .9s ease;
}
.hp-mf-line-seg{
  display:block;
}
.hp-mf-accent{
  color:var(--g);
  font-style:italic;
}
.hp-mf-big{
  font-size:clamp(34px, 5.5vw, 72px);
  font-weight:800;
  letter-spacing:-2px;
  line-height:1.18;
  margin-top:18px;
  background:linear-gradient(135deg, #00E676 0%, #ffffff 80%);
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;color:transparent;
}

/* Mobile responsiveness for manifesto */
@media(max-width:1024px){
  .hp-manifesto{padding:80px 24px;min-height:90vh}
  .hp-mf-eyebrow{margin-bottom:48px}
  .hp-mf-lines{gap:32px}
  .hp-mf-glow{width:700px;height:400px}
}
@media(max-width:600px){
  .hp-manifesto{padding:80px 20px;min-height:80vh}
  .hp-mf-line{
    font-size:24px;
    letter-spacing:-1px;
    line-height:1.3;
  }
  .hp-mf-big{
    font-size:30px;
    letter-spacing:-1.5px;
    line-height:1.2;
  }
  .hp-mf-lines{gap:26px}
  .hp-mf-eyebrow{
    font-size:10px;
    letter-spacing:2px;
    margin-bottom:36px;
  }
  .hp-mf-eb-line{width:18px}
  .hp-mf-glow{width:380px;height:280px}
}

/* Hide hero mockup floating tags on mobile/touch — they're tied to the desktop mockup */
@media(max-width:1100px){
  .hp-hero-mock-tag,
  .hp-hero-mock-live{display:none !important}
}

/* ── Mobile-first responsive, Home overhaul ── */
@media(max-width:1100px){
  .hp-hero{padding:120px 28px 80px}
  .hp-hero-inner{
    grid-template-columns:1fr;
    gap:56px;
    text-align:center;
  }
  .hp-hero-text{align-items:center}
  .hp-hero-badge{margin:0 auto 28px}
  .hp-hero-sub{margin-left:auto;margin-right:auto}
  .hp-hero-btns{justify-content:center}
  .hp-hero-mock-wrap{max-width:480px;margin:0 auto;width:100%}
  .hp-hero-mock-wrap .mock{transform:perspective(1200px) rotateX(0deg) rotateY(0deg)}
  .hp-hero-orb-1{width:380px;height:380px;top:-80px;right:-80px}
  .hp-hero-orb-2{width:280px;height:280px}
  .hp-hero-orb-3{width:220px;height:220px;top:60%;right:10%}

  .hp-stats-moment,.hp-prev,.hp-finale{padding:80px 24px}
  .hp-stats-grid{grid-template-columns:repeat(2,1fr)}
  .hp-big-counter{padding:36px 24px;border-right:none;border-bottom:1px solid rgba(255,255,255,.06)}
  .hp-big-counter:nth-child(odd){border-right:1px solid rgba(255,255,255,.06)}
  .hp-big-counter:nth-child(n+3){border-bottom:none}
  .hp-stats-h{margin-bottom:48px}

  .hp-prev-grid{grid-template-columns:1fr;max-width:520px;gap:18px}
  .hp-prev-card{min-height:380px;padding:40px 30px 30px}
  .hp-prev-header{margin-bottom:48px}
  .hp-prev-icon-wrap{width:150px;height:150px;margin-bottom:32px}
  .hp-prev-icon-glow{width:200px;height:200px}
}
@media(max-width:600px){
  .hp-hero{padding:110px 20px 60px;min-height:auto}
  .hp-hero-h1{
    font-size:36px;
    letter-spacing:-1.2px;
    line-height:1.18;
  }
  /* On phones, let "don't just exist." wrap if needed instead of overflowing */
  .hp-hero-h1 .hp-hword{white-space:normal}
  .hp-hero-sub{font-size:14px}
  .hp-hero-btns{flex-direction:column;align-items:stretch;width:100%;gap:10px}
  .hp-hero-cta-primary{width:100%;justify-content:center;padding:16px 24px;font-size:14px}
  .hp-hero-cta-secondary{width:100%;justify-content:center;padding:14px 16px}
  .hp-hero-cta-arrow{width:24px;height:24px}
  .hp-hero-orb-1{width:280px;height:280px;top:-50px;right:-80px;opacity:.7}
  .hp-hero-orb-2{width:200px;height:200px;opacity:.7}
  .hp-hero-orb-3{width:160px;height:160px;opacity:.7}
  .hp-hero-scroll{
    bottom:16px;font-size:9px;letter-spacing:2px;gap:6px;
  }
  .hp-hero-scroll-line{height:24px}

  .hp-stats-h{font-size:32px;letter-spacing:-1px;margin-bottom:36px}
  .hp-stats-grid{grid-template-columns:1fr}
  .hp-big-counter{
    padding:28px 22px;
    border-right:none !important;
    border-bottom:1px solid rgba(255,255,255,.06);
  }
  .hp-big-counter:last-child{border-bottom:none}
  .hp-counter-n{font-size:48px;letter-spacing:-2px}

  .hp-prev{padding:70px 20px}
  .hp-prev-h{font-size:34px;letter-spacing:-1.2px}
  .hp-prev-card-title{font-size:30px;letter-spacing:-1px}
  .hp-prev-card{min-height:340px;padding:36px 26px 28px}
  .hp-prev-icon-wrap{width:128px;height:128px;margin-bottom:26px}
  .hp-prev-icon-glow{width:170px;height:170px}

  .hp-finale{padding:80px 20px;min-height:auto}
  .hp-finale-h{font-size:38px;letter-spacing:-1.5px;line-height:1.12}
  .hp-finale-btns{flex-direction:column;width:100%;gap:14px}
  .hp-finale-cta{width:100%;justify-content:center;padding:18px 24px}
  .hp-finale-orb-1,.hp-finale-orb-2,.hp-finale-orb-3{opacity:.6}

  .stn{font-size:24px}
}

/* ═══════════════════════════════════════════════════════════
   TESTIMONIALS — Single hero containing everything
   No card glow effects. Background lives at the page level.
   ═══════════════════════════════════════════════════════════ */
.tx-page{background:#040404;color:var(--w);position:relative;overflow:hidden}

.tx-eb-line{
  width:30px;height:1px;
  background:rgba(255,255,255,.3);
  flex-shrink:0;
}

/* ───── HERO (entire page) ───── */
.tx-hero{
  min-height:100vh;
  position:relative;
  overflow:hidden;
  padding:140px 60px 120px;
  background:#020202;
}

/* Background — single subtle, evenly distributed glow */
.tx-hero-glow{
  position:absolute;
  top:50%;left:50%;
  transform:translate(-50%,-50%);
  width:1400px;height:900px;
  border-radius:50%;
  background:radial-gradient(ellipse,
    rgba(0,230,118,.10) 0%,
    rgba(232,160,32,.05) 40%,
    transparent 70%);
  filter:blur(90px);
  pointer-events:none;
  z-index:1;
  will-change:transform;
}

.tx-hero-inner{
  position:relative;
  z-index:5;
  max-width:1300px;
  margin:0 auto;
  width:100%;
}

/* ───── HEADER ───── */
.tx-hero-header{
  text-align:center;
  margin-bottom:80px;
}
.tx-hero-eyebrow{
  display:inline-flex;align-items:center;gap:14px;
  font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:rgba(255,255,255,.55);
  margin-bottom:32px;
}
.tx-hero-h1{
  font-size:clamp(42px, 7vw, 100px);
  font-weight:800;
  line-height:1.08;
  letter-spacing:-2.5px;
  color:var(--w);
  margin-bottom:32px;
  font-family:'Poppins',sans-serif;
}
.tx-hero-accent{
  background:linear-gradient(135deg,#00E676 0%,#82E0AA 50%,#00E676 100%);
  background-size:200% 100%;
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;color:transparent;
  animation:svxShine 6s ease-in-out infinite;
}
.tx-hero-sub{
  font-size:clamp(15px,1.4vw,19px);
  color:rgba(255,255,255,.55);
  font-weight:300;line-height:1.7;
  max-width:680px;margin:0 auto;
}
.tx-hero-rating{
  display:inline-flex;align-items:center;gap:14px;
  margin-top:32px;
}
.tx-hero-stars{
  display:inline-flex;gap:2px;
  font-size:18px;
  color:#00E676;
  letter-spacing:1px;
}
.tx-hero-rating-text{
  font-size:13px;
  color:rgba(255,255,255,.55);
  font-weight:400;
  letter-spacing:.2px;
}

/* ───── 3D GRID SCENE ───── */
.tx-grid-scene{
  margin:0 auto 80px;
  transition:transform .25s ease-out;
  transform-style:preserve-3d;
  will-change:transform;
}
.tx-grid{
  display:grid;
  grid-template-columns:repeat(3, 1fr);
  gap:24px;
  align-items:start;
}
.tx-card-col-2{margin-top:48px}
.tx-card-col-3{margin-top:24px}

/* Card — flat, no glow */
.tx-card{
  position:relative;
  padding:28px 26px 26px;
  background:linear-gradient(180deg,rgba(20,20,20,.95) 0%,rgba(12,12,12,.95) 100%);
  border:1px solid rgba(255,255,255,.08);
  border-radius:18px;
  overflow:hidden;
  transition:transform .4s cubic-bezier(0.2,0.8,0.2,1),
             border-color .4s ease;
  display:flex;flex-direction:column;
}
.tx-card:hover{
  transform:translateY(-4px);
  border-color:rgba(255,255,255,.18);
}

.tx-card-head{
  display:flex;align-items:center;gap:12px;
  margin-bottom:20px;
}
.tx-card-avatar{
  width:42px;height:42px;border-radius:50%;
  display:flex;align-items:center;justify-content:center;
  flex-shrink:0;
  color:#fff;
}
.tx-card-id{flex:1;min-width:0}
.tx-card-name{
  font-size:14px;font-weight:700;color:var(--w);
  letter-spacing:-.2px;
  margin-bottom:2px;
}
.tx-card-role{
  font-size:10px;
  color:rgba(255,255,255,.5);
  font-weight:600;
  letter-spacing:.5px;
  text-transform:uppercase;
}
.tx-card-stars{
  display:inline-flex;gap:1px;
  color:#00E676;
  font-size:13px;
  letter-spacing:.5px;
  flex-shrink:0;
}

.tx-card-quote{
  font-size:14px;
  color:rgba(255,255,255,.85);
  line-height:1.65;
  font-weight:300;
  font-style:italic;
  margin-bottom:auto;
}

.tx-card-divider{
  height:1px;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent);
  margin:22px 0 14px;
}

.tx-card-verified{
  display:inline-flex;align-items:center;gap:6px;
  font-size:10px;font-weight:600;letter-spacing:1px;
  text-transform:uppercase;
  color:rgba(0,230,118,.85);
}

/* ───── STATS ───── */
.tx-stats{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:0;
  max-width:760px;
  margin:0 auto 56px;
  padding:28px 36px;
  background:rgba(20,20,20,.5);
  border:1px solid rgba(255,255,255,.08);
  border-radius:16px;
  backdrop-filter:blur(10px);
}
.tx-stat{flex:1;text-align:center}
.tx-stat-n{
  font-size:32px;
  font-weight:800;
  color:var(--g);
  letter-spacing:-1px;
  line-height:1;
  font-variant-numeric:tabular-nums;
  margin-bottom:6px;
}
.tx-stat-n span{color:var(--g);font-size:.8em;margin-left:1px}
.tx-stat-l{
  font-size:11px;
  color:rgba(255,255,255,.5);
  text-transform:uppercase;
  letter-spacing:1.5px;
  font-weight:600;
}
.tx-stat-divider{
  width:1px;height:36px;
  background:rgba(255,255,255,.1);
}

/* ───── CTA ───── */
.tx-cta-row{
  text-align:center;
}
.tx-cta{
  display:inline-flex;align-items:center;gap:14px;
  padding:18px 32px;
  border-radius:100px;
  background:#00E676;
  color:#0a0a0a;
  font-size:15px;
  font-weight:700;
  letter-spacing:-.2px;
  text-decoration:none;
  font-family:'Poppins',sans-serif;
  box-shadow:0 12px 36px rgba(0,230,118,.3);
  transition:all .35s cubic-bezier(0.2,0.8,0.2,1);
  position:relative;
  overflow:hidden;
}
.tx-cta:hover{
  transform:translateY(-3px) scale(1.02);
  box-shadow:0 20px 56px rgba(0,230,118,.45);
}
.tx-cta::after{
  content:'';
  position:absolute;
  top:0;left:-100%;
  width:60%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);
  transition:left .8s ease;
}
.tx-cta:hover::after{left:200%}

/* ───── RESPONSIVE ───── */
@media(max-width:1100px){
  .tx-hero{padding:120px 24px 80px}

  .tx-hero-header{margin-bottom:56px}

  .tx-grid{
    grid-template-columns:repeat(2, 1fr);
    gap:18px;
    max-width:760px;
    margin:0 auto;
  }
  .tx-card-col-2{margin-top:32px}
  .tx-card-col-3{margin-top:0}

  .tx-grid-scene{transform:none !important}

  .tx-stats{
    flex-wrap:wrap;
    gap:14px 0;
    padding:24px 20px;
  }
  .tx-stat{flex:1 1 40%}
  .tx-stat-divider{display:none}
}
@media(max-width:600px){
  .tx-hero{padding:110px 20px 60px;min-height:auto}
  .tx-hero-h1{font-size:42px;letter-spacing:-1.5px}
  .tx-hero-eyebrow{font-size:10px;letter-spacing:2px;gap:10px;margin-bottom:24px}
  .tx-hero-rating{flex-direction:column;gap:8px;margin-top:24px}
  .tx-hero-header{margin-bottom:48px}

  .tx-grid{
    grid-template-columns:1fr;
    max-width:480px;
    gap:16px;
  }
  .tx-card-col-1,.tx-card-col-2,.tx-card-col-3{margin-top:0}

  .tx-card{padding:24px 20px 20px}
  .tx-card-quote{font-size:13px}

  .tx-stat-n{font-size:26px}
  .tx-stat-l{font-size:10px;letter-spacing:1px}

  .tx-cta{
    width:100%;
    justify-content:center;
    padding:16px 24px;
    font-size:14px;
  }
}




/* ═══════════════════════════════════════════════════════════
   PRICING — CINEMATIC REDESIGN (px-*)
   ═══════════════════════════════════════════════════════════ */
.px-page{background:#040404;color:var(--w);position:relative;overflow:hidden}

.px-eb-line{
  width:30px;height:1px;
  background:rgba(255,255,255,.3);
  flex-shrink:0;
}

/* ───── HERO ───── */
.px-hero{
  min-height:90vh;
  position:relative;overflow:hidden;
  display:flex;align-items:center;justify-content:center;
  padding:140px 60px 100px;
  background:#020202;
}
.px-hero-glow{
  position:absolute;
  bottom:-200px;left:50%;
  transform:translateX(-50%);
  width:1100px;height:600px;
  border-radius:50%;
  background:radial-gradient(ellipse,
    rgba(0,230,118,.16) 0%,
    rgba(130,170,255,.08) 50%,
    transparent 70%);
  filter:blur(80px);
  pointer-events:none;
  z-index:1;will-change:transform;
}
.px-hero-content{
  position:relative;z-index:5;
  text-align:center;max-width:1100px;
}
.px-hero-eyebrow{
  display:inline-flex;align-items:center;gap:14px;
  font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:rgba(255,255,255,.55);
  margin-bottom:48px;
}
.px-hero-h1{
  font-size:clamp(42px, 6.5vw, 92px);
  font-weight:800;
  line-height:1.06;
  letter-spacing:-2.5px;
  color:var(--w);
  margin-bottom:32px;
  font-family:'Poppins',sans-serif;
}
.px-hero-accent{
  background:linear-gradient(135deg,#00E676 0%,#82E0AA 50%,#00E676 100%);
  background-size:200% 100%;
  -webkit-background-clip:text;background-clip:text;
  -webkit-text-fill-color:transparent;color:transparent;
  animation:svxShine 5s ease-in-out infinite;
}
.px-hero-sub{
  font-size:clamp(15px,1.4vw,19px);
  color:rgba(255,255,255,.55);
  font-weight:300;line-height:1.7;
  max-width:640px;margin:0 auto;
}

/* ───── PRICING CARDS SECTION ───── */
.px-cards-section{
  position:relative;overflow:hidden;
  padding:100px 60px;
  background:#040404;
}
.px-cards-bg{
  position:absolute;inset:0;pointer-events:none;
  background:
    radial-gradient(ellipse 1000px 600px at 30% 30%, rgba(0,230,118,.05), transparent 60%),
    radial-gradient(ellipse 800px 500px at 70% 70%, rgba(130,170,255,.04), transparent 60%);
}
.px-cards-orb{
  position:absolute;border-radius:50%;filter:blur(80px);pointer-events:none;
}
.px-cards-orb-1{
  width:500px;height:500px;
  background:radial-gradient(circle,rgba(0,230,118,.10),transparent 70%);
  top:10%;left:-150px;
  animation:o1 11s ease-in-out infinite;
}
.px-cards-orb-2{
  width:420px;height:420px;
  background:radial-gradient(circle,rgba(130,170,255,.08),transparent 70%);
  bottom:10%;right:-120px;
  animation:o2 14s ease-in-out infinite;
}

.px-cards-wrap{
  display:grid;
  grid-template-columns:repeat(2,1fr);
  gap:28px;
  max-width:1200px;
  margin:0 auto;
  position:relative;z-index:2;
}

/* Card */
.px-card{
  position:relative;
  background:linear-gradient(180deg,rgba(20,20,20,.95) 0%,rgba(12,12,12,.95) 100%);
  border:1px solid rgba(255,255,255,.08);
  border-radius:24px;
  overflow:hidden;
  transition:transform .5s cubic-bezier(0.2,0.8,0.2,1),
             border-color .4s ease,
             box-shadow .4s ease;
}
.px-card-flex{
  border-color:rgba(0,230,118,.25);
}
.px-card-flex:hover{
  transform:translateY(-8px);
  border-color:rgba(0,230,118,.5);
  box-shadow:0 30px 70px rgba(0,0,0,.6), 0 0 80px rgba(0,230,118,.12);
}
.px-card-full{
  border-color:rgba(130,170,255,.25);
}
.px-card-full:hover{
  transform:translateY(-8px);
  border-color:rgba(130,170,255,.5);
  box-shadow:0 30px 70px rgba(0,0,0,.6), 0 0 80px rgba(130,170,255,.12);
}

.px-card-glow{
  position:absolute;inset:0;
  pointer-events:none;
  opacity:.7;
  transition:opacity .4s ease;
}
.px-card:hover .px-card-glow{opacity:1}

.px-card-corner-tag{
  position:absolute;
  top:18px;right:18px;
  font-size:10px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;
  padding:6px 12px;border-radius:100px;
  background:rgba(0,230,118,.15);
  border:1px solid rgba(0,230,118,.35);
  color:#00E676;
  z-index:5;
}
.px-card-corner-tag-blue{
  background:rgba(130,170,255,.15);
  border-color:rgba(130,170,255,.35);
  color:#82AAFF;
}

.px-card-content{
  position:relative;z-index:2;
  padding:48px 36px 36px;
  display:flex;flex-direction:column;
}

.px-plan-eyebrow{
  font-size:11px;
  font-weight:700;
  letter-spacing:3px;
  color:#00E676;
  margin-bottom:14px;
}
.px-plan-eyebrow-blue{color:#82AAFF}

.px-plan-name{
  font-size:32px;
  font-weight:800;
  color:var(--w);
  letter-spacing:-1px;
  line-height:1.1;
  margin-bottom:8px;
  font-family:'Poppins',sans-serif;
}
.px-plan-pitch{
  font-size:14px;
  color:rgba(255,255,255,.55);
  font-weight:300;
  line-height:1.5;
  margin-bottom:32px;
}

/* Price display */
.px-price-display{
  background:rgba(255,255,255,.02);
  border:1px solid rgba(255,255,255,.05);
  border-radius:14px;
  padding:24px;
  margin-bottom:8px;
}
.px-price-row{
  display:flex;
  align-items:baseline;
  gap:8px;
  margin-bottom:6px;
}
.px-price-currency{
  font-size:24px;
  font-weight:600;
  color:#00E676;
  line-height:1;
}
.px-price-currency-blue{color:#82AAFF}
.px-price-num{
  font-size:64px;
  font-weight:800;
  color:#00E676;
  letter-spacing:-3px;
  line-height:1;
  font-variant-numeric:tabular-nums;
}
.px-price-num-blue{color:#82AAFF}
.px-price-suffix{
  font-size:13px;
  color:rgba(255,255,255,.5);
  font-weight:500;
  margin-left:4px;
}
.px-price-monthly{
  display:flex;
  align-items:baseline;
  gap:6px;
  margin-bottom:8px;
}
.px-price-plus{
  font-size:18px;
  font-weight:600;
  color:rgba(255,255,255,.4);
}
.px-price-mo-num{
  font-size:22px;
  font-weight:700;
  color:#00E676;
  letter-spacing:-.5px;
  font-variant-numeric:tabular-nums;
}
.px-price-mo-suffix{
  font-size:12px;
  color:rgba(255,255,255,.5);
}
.px-price-savings{
  display:inline-block;
  font-size:11px;
  font-weight:600;
  color:#82AAFF;
  background:rgba(130,170,255,.1);
  border:1px solid rgba(130,170,255,.2);
  padding:5px 10px;
  border-radius:100px;
  margin-bottom:12px;
}
.px-price-total{
  font-size:11px;
  color:rgba(255,255,255,.4);
  font-weight:600;
  letter-spacing:.5px;
  text-transform:uppercase;
  padding-top:8px;
  border-top:1px solid rgba(255,255,255,.05);
}

.px-card-divider{
  height:1px;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.08),transparent);
  margin:28px 0 24px;
}

.px-card-list{
  list-style:none;
  padding:0;
  margin:0 0 36px;
  display:flex;flex-direction:column;
  gap:14px;
}
.px-card-list li{
  display:flex;
  align-items:flex-start;
  gap:12px;
  font-size:14px;
  color:rgba(255,255,255,.85);
  font-weight:400;
  line-height:1.5;
}

.px-check{
  flex-shrink:0;
  width:22px;height:22px;border-radius:50%;
  border:1px solid;
  display:flex;align-items:center;justify-content:center;
  margin-top:1px;
}

.px-card-cta{
  display:inline-flex;align-items:center;justify-content:center;gap:14px;
  padding:18px 24px;border-radius:100px;
  font-size:14px;font-weight:700;letter-spacing:.3px;
  text-decoration:none;
  transition:all .4s cubic-bezier(0.2,0.8,0.2,1);
  position:relative;overflow:hidden;
}
.px-card-cta-flex{
  background:#00E676;color:#0a0a0a;
  box-shadow:0 12px 36px rgba(0,230,118,.3);
}
.px-card-cta-flex:hover{
  transform:translateY(-2px);
  box-shadow:0 20px 50px rgba(0,230,118,.4);
}
.px-card-cta-full{
  background:#82AAFF;color:#0a0a0a;
  box-shadow:0 12px 36px rgba(130,170,255,.3);
}
.px-card-cta-full:hover{
  transform:translateY(-2px);
  box-shadow:0 20px 50px rgba(130,170,255,.4);
}
.px-card-cta::after{
  content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);
  animation:sh 3s ease-in-out infinite;
}
.px-cta-arrow{
  width:28px;height:28px;border-radius:50%;
  background:rgba(0,0,0,.15);
  display:flex;align-items:center;justify-content:center;
  transition:transform .3s ease;
}
.px-card-cta:hover .px-cta-arrow{transform:translateX(4px)}

/* Comparison context */
.px-context{
  max-width:900px;margin:80px auto 0;
  position:relative;z-index:2;
  padding:36px 32px;
  background:rgba(20,20,20,.4);
  border:1px solid rgba(255,255,255,.06);
  border-radius:18px;
}
.px-context-row{
  display:grid;
  grid-template-columns:1fr auto 1fr;
  gap:32px;
  align-items:center;
}
.px-context-cell{
  text-align:center;
}
.px-context-label{
  font-size:11px;font-weight:600;letter-spacing:1.5px;text-transform:uppercase;
  color:rgba(255,255,255,.45);
  margin-bottom:10px;
}
.px-context-value{
  font-size:clamp(26px,3vw,38px);
  font-weight:800;
  letter-spacing:-1px;
  color:rgba(255,255,255,.6);
  margin-bottom:6px;
  font-family:'Poppins',sans-serif;
  font-variant-numeric:tabular-nums;
}
.px-context-value-strike{
  text-decoration:line-through;
  text-decoration-color:rgba(255,80,80,.5);
  text-decoration-thickness:2px;
}
.px-context-cell-us .px-context-value{
  color:#00E676;
}
.px-context-detail{
  font-size:12px;
  color:rgba(255,255,255,.45);
  font-weight:400;
}
.px-context-arrow{
  font-size:24px;
  color:#00E676;
  font-weight:700;
}

/* ───── INCLUDED SECTION ───── */
.px-included-section{
  position:relative;overflow:hidden;
  padding:120px 60px;
  background:#020202;
  border-top:1px solid rgba(255,255,255,.04);
  text-align:center;
}
.px-included-bg{
  position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(ellipse 1000px 600px at 50% 30%, rgba(0,230,118,.05), transparent 60%);
}
.px-included-eyebrow{
  display:inline-flex;align-items:center;gap:14px;
  font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:rgba(255,255,255,.55);
  margin-bottom:24px;
  position:relative;z-index:2;
}
.px-included-h{
  font-size:clamp(36px,5vw,68px);
  font-weight:800;
  line-height:1.1;
  letter-spacing:-2px;
  color:var(--w);
  margin-bottom:24px;
  font-family:'Poppins',sans-serif;
  position:relative;z-index:2;
}
.px-included-sub{
  font-size:clamp(14px,1.2vw,17px);
  color:rgba(255,255,255,.55);
  font-weight:300;
  line-height:1.7;
  max-width:560px;margin:0 auto 64px;
  position:relative;z-index:2;
}
.px-included-grid{
  display:grid;
  grid-template-columns:repeat(3,1fr);
  gap:24px;
  max-width:1200px;
  margin:0 auto;
  position:relative;z-index:2;
}
.px-included-cell{
  background:rgba(20,20,20,.5);
  border:1px solid rgba(255,255,255,.06);
  border-radius:16px;
  padding:36px 28px;
  text-align:left;
  transition:all .4s ease;
}
.px-included-cell:hover{
  border-color:rgba(0,230,118,.3);
  background:rgba(20,20,20,.8);
  transform:translateY(-4px);
}
.px-included-icon{
  width:48px;height:48px;
  border-radius:12px;
  background:rgba(0,230,118,.1);
  border:1px solid rgba(0,230,118,.25);
  color:#00E676;
  display:flex;align-items:center;justify-content:center;
  margin-bottom:24px;
  transition:all .3s ease;
}
.px-included-cell:hover .px-included-icon{
  background:rgba(0,230,118,.18);
  transform:scale(1.05) rotate(-3deg);
}
.px-included-t{
  font-size:18px;font-weight:700;color:var(--w);
  margin-bottom:8px;letter-spacing:-.3px;
}
.px-included-d{
  font-size:13px;color:rgba(255,255,255,.55);
  font-weight:300;line-height:1.6;
}

/* ───── HANDOFF SECTION ───── */
.px-handoff-section{
  position:relative;overflow:hidden;
  padding:80px 60px;
  background:#040404;
  border-top:1px solid rgba(255,255,255,.04);
}
.px-handoff-bg{
  position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(ellipse 700px 400px at 50% 50%, rgba(0,230,118,.05), transparent 60%);
}
.px-handoff-card{
  max-width:900px;margin:0 auto;
  display:flex;align-items:center;gap:32px;
  padding:36px 40px;
  background:linear-gradient(135deg,rgba(0,230,118,.04) 0%,rgba(20,20,20,.6) 100%);
  border:1px solid rgba(0,230,118,.18);
  border-radius:18px;
  position:relative;z-index:2;
}
.px-handoff-icon{
  flex-shrink:0;
  width:64px;height:64px;
  border-radius:14px;
  background:rgba(0,230,118,.1);
  border:1px solid rgba(0,230,118,.3);
  display:flex;align-items:center;justify-content:center;
}
.px-handoff-eyebrow{
  font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;
  color:#00E676;
  margin-bottom:10px;
}
.px-handoff-h{
  font-size:clamp(20px,2.2vw,28px);
  font-weight:700;
  color:var(--w);
  letter-spacing:-.5px;
  margin-bottom:10px;
  line-height:1.25;
}
.px-handoff-p{
  font-size:14px;
  color:rgba(255,255,255,.6);
  font-weight:300;
  line-height:1.65;
}

/* ───── PRICING FAQ ───── */
.px-faq-section{
  position:relative;overflow:hidden;
  padding:120px 60px;
  background:#020202;
  border-top:1px solid rgba(255,255,255,.04);
  text-align:center;
}
.px-faq-eyebrow{
  display:inline-flex;align-items:center;gap:14px;
  font-size:11px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:rgba(255,255,255,.55);
  margin-bottom:24px;
}
.px-faq-h{
  font-size:clamp(34px,4.5vw,60px);
  font-weight:800;
  line-height:1.1;
  letter-spacing:-1.8px;
  color:var(--w);
  margin-bottom:60px;
  font-family:'Poppins',sans-serif;
}
.px-faq-list{
  max-width:820px;margin:0 auto;
  display:flex;flex-direction:column;gap:12px;
  text-align:left;
}
.px-faq-item{
  background:rgba(20,20,20,.5);
  border:1px solid rgba(255,255,255,.06);
  border-radius:14px;
  cursor:pointer;
  transition:all .3s ease;
  overflow:hidden;
}
.px-faq-item:hover{
  border-color:rgba(0,230,118,.25);
}
.px-faq-item.px-faq-open{
  border-color:rgba(0,230,118,.4);
  background:rgba(20,20,20,.8);
}
.px-faq-q{
  display:flex;align-items:center;justify-content:space-between;
  padding:22px 28px;
  font-size:16px;font-weight:600;
  color:var(--w);
  letter-spacing:-.2px;
}
.px-faq-icon{
  width:32px;height:32px;
  border-radius:50%;
  background:rgba(0,230,118,.1);
  color:#00E676;
  display:flex;align-items:center;justify-content:center;
  font-size:20px;font-weight:300;
  flex-shrink:0;margin-left:18px;
  transition:transform .3s ease;
}
.px-faq-item.px-faq-open .px-faq-icon{transform:rotate(180deg)}
.px-faq-a{
  padding:0 28px 24px;
  font-size:14px;
  line-height:1.75;
  color:rgba(255,255,255,.65);
  font-weight:300;
}

/* ───── FINALE ───── */
.px-finale{
  min-height:60vh;
  display:flex;align-items:center;justify-content:center;
  position:relative;overflow:hidden;
  padding:120px 60px;
  background:#020202;
  border-top:1px solid rgba(255,255,255,.04);
}
.px-finale-bg{
  position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(ellipse 1100px 700px at 50% 50%, rgba(0,230,118,.12), transparent 60%);
}
.px-finale-orb{
  position:absolute;border-radius:50%;filter:blur(60px);pointer-events:none;
}
.px-finale-orb-1{
  width:340px;height:340px;
  background:radial-gradient(circle,rgba(0,230,118,.22),transparent 70%);
  top:15%;left:15%;
  animation:o1 9s ease-in-out infinite;
}
.px-finale-orb-2{
  width:260px;height:260px;
  background:radial-gradient(circle,rgba(130,170,255,.14),transparent 70%);
  bottom:18%;right:15%;
  animation:o2 11s ease-in-out infinite;
}
.px-finale-content{
  position:relative;z-index:3;
  text-align:center;max-width:900px;
}
.px-finale-eyebrow{
  font-size:12px;font-weight:600;letter-spacing:3px;text-transform:uppercase;
  color:#00E676;
  margin-bottom:28px;
}
.px-finale-h{
  font-size:clamp(36px,5vw,72px);
  font-weight:800;
  line-height:1.1;
  letter-spacing:-2px;
  color:var(--w);
  margin-bottom:28px;
  font-family:'Poppins',sans-serif;
}
.px-finale-sub{
  font-size:clamp(15px,1.3vw,18px);
  color:rgba(255,255,255,.55);
  font-weight:300;line-height:1.7;
  max-width:580px;margin:0 auto 48px;
}
.px-finale-cta{
  display:inline-flex;align-items:center;gap:14px;
  padding:20px 36px 20px 40px;
  border-radius:100px;
  background:#00E676;color:#0a0a0a;
  font-size:15px;font-weight:600;letter-spacing:.3px;
  text-decoration:none;
  transition:all .4s cubic-bezier(0.2,0.8,0.2,1);
  position:relative;overflow:hidden;
  box-shadow:0 12px 40px rgba(0,230,118,.3);
}
.px-finale-cta:hover{
  transform:translateY(-3px) scale(1.02);
  box-shadow:0 24px 60px rgba(0,230,118,.45);
}
.px-finale-cta::after{
  content:'';position:absolute;top:0;left:-100%;width:60%;height:100%;
  background:linear-gradient(90deg,transparent,rgba(255,255,255,.4),transparent);
  animation:sh 3s ease-in-out infinite;
}

/* ───── RESPONSIVE ───── */
@media(max-width:1100px){
  .px-hero,.px-cards-section,.px-included-section,.px-handoff-section,.px-faq-section,.px-finale{padding:80px 24px}
  .px-hero{padding:120px 24px 80px}

  .px-cards-wrap{
    grid-template-columns:1fr;
    max-width:520px;
    gap:20px;
  }

  .px-included-grid{
    grid-template-columns:repeat(2,1fr);
  }

  .px-context{padding:28px 24px;margin-top:48px}
  .px-context-row{
    grid-template-columns:1fr;
    gap:14px;
    text-align:center;
  }
  .px-context-arrow{
    transform:rotate(90deg);
    font-size:20px;
  }
}
@media(max-width:600px){
  .px-hero{padding:110px 20px 60px;min-height:auto}
  .px-hero-h1{font-size:42px;letter-spacing:-1.5px}
  .px-hero-eyebrow{font-size:10px;letter-spacing:2px;gap:10px;margin-bottom:32px}

  .px-cards-section,.px-included-section,.px-handoff-section,.px-faq-section,.px-finale{padding:70px 20px}

  .px-card-content{padding:36px 24px 28px}
  .px-plan-name{font-size:26px;letter-spacing:-.8px}
  .px-price-num{font-size:52px;letter-spacing:-2px}
  .px-card-corner-tag{top:14px;right:14px;font-size:9px;padding:5px 10px}

  .px-included-h{font-size:32px;letter-spacing:-1.2px;margin-bottom:48px}
  .px-included-grid{grid-template-columns:1fr}
  .px-included-cell{padding:30px 24px}

  .px-handoff-card{
    flex-direction:column;
    text-align:center;
    padding:30px 24px;
    gap:20px;
  }

  .px-faq-h{font-size:30px;letter-spacing:-1px;margin-bottom:40px}
  .px-faq-q{padding:18px 22px;font-size:14px}
  .px-faq-a{padding:0 22px 20px;font-size:13px}

  .px-finale-h{font-size:34px;letter-spacing:-1.2px}
  .px-finale-orb-1,.px-finale-orb-2{opacity:.6}
}




/* ═══════════════════════════════════════════════════════════
   CONTACT — Simple cinematic (cx-*)
   One section. Title. Two CTAs. Dramatic background.
   ═══════════════════════════════════════════════════════════ */
.cx-page{
  background:#020202;
  color:var(--w);
  position:relative;
  overflow:hidden;
  min-height:100vh;
}
.cx-stage{
  min-height:100vh;
  position:relative;
  overflow:hidden;
  display:flex;
  align-items:center;
  justify-content:center;
  padding:120px 40px 100px;
}

/* Background layers */
.cx-aurora-glow{
  position:absolute;
  top:50%;left:50%;
  transform:translate(-50%,-50%);
  width:1300px;height:800px;
  border-radius:50%;
  background:radial-gradient(ellipse,
    rgba(0,230,118,.20) 0%,
    rgba(0,230,118,.06) 30%,
    transparent 65%);
  filter:blur(90px);
  pointer-events:none;
  z-index:2;
  animation:cxGlowBreathe 9s ease-in-out infinite;
}
@keyframes cxGlowBreathe{
  0%,100%{opacity:.7;transform:translate(-50%,-50%) scale(1)}
  50%{opacity:1;transform:translate(-50%,-50%) scale(1.08)}
}
.cx-aurora-vignette{
  position:absolute;inset:0;
  background:radial-gradient(ellipse at center, transparent 30%, rgba(2,2,2,.6) 80%);
  pointer-events:none;
  z-index:3;
}
.cx-grid-svg{
  position:absolute;
  inset:0;
  width:100%;height:100%;
  pointer-events:none;
  z-index:2;
  opacity:.5;
}

/* Content */
.cx-content{
  position:relative;
  z-index:5;
  text-align:center;
  max-width:1000px;
}

.cx-eyebrow{
  display:inline-flex;
  align-items:center;
  gap:14px;
  font-size:11px;
  font-weight:600;
  letter-spacing:3px;
  text-transform:uppercase;
  color:rgba(255,255,255,.55);
  margin-bottom:36px;
}
.cx-eb-line{
  width:30px;height:1px;
  background:rgba(255,255,255,.3);
}

.cx-h1{
  font-size:clamp(48px, 7.5vw, 108px);
  font-weight:800;
  line-height:1.05;
  letter-spacing:-3px;
  color:var(--w);
  margin-bottom:32px;
  font-family:'Poppins',sans-serif;
}
.cx-h1-accent{
  background:linear-gradient(135deg, #00E676 0%, #82E0AA 50%, #00E676 100%);
  background-size:200% 100%;
  -webkit-background-clip:text;
  background-clip:text;
  -webkit-text-fill-color:transparent;
  color:transparent;
  animation:svxShine 6s ease-in-out infinite;
}
.cx-sub{
  font-size:clamp(15px, 1.4vw, 19px);
  color:rgba(255,255,255,.6);
  font-weight:300;
  line-height:1.65;
  max-width:540px;
  margin:0 auto 56px;
}

/* Two CTAs */
.cx-actions{
  display:flex;
  align-items:center;
  justify-content:center;
  gap:20px;
  flex-wrap:wrap;
}
.cx-action{
  display:inline-flex;
  align-items:center;
  gap:14px;
  padding:20px 32px 20px 26px;
  border-radius:100px;
  text-decoration:none;
  font-size:16px;
  font-weight:700;
  letter-spacing:-.2px;
  font-family:'Poppins',sans-serif;
  transition:transform .35s cubic-bezier(0.2,0.8,0.2,1),
             box-shadow .35s ease,
             background .35s ease;
  position:relative;
  overflow:hidden;
}
.cx-action-call{
  background:#00E676;
  color:#0a0a0a;
  box-shadow:0 12px 40px rgba(0,230,118,.3);
}
.cx-action-call:hover{
  transform:translateY(-3px) scale(1.03);
  box-shadow:0 20px 56px rgba(0,230,118,.45);
}
.cx-action-call::after{
  content:'';
  position:absolute;
  top:0;left:-100%;
  width:60%;height:100%;
  background:linear-gradient(90deg, transparent, rgba(255,255,255,.4), transparent);
  transition:left .8s ease;
}
.cx-action-call:hover::after{left:200%}

.cx-action-email{
  background:rgba(255,255,255,.04);
  color:var(--w);
  border:1px solid rgba(255,255,255,.15);
  backdrop-filter:blur(10px);
}
.cx-action-email:hover{
  background:rgba(130,170,255,.10);
  border-color:rgba(130,170,255,.4);
  transform:translateY(-3px);
}

.cx-action-icon{
  display:flex;
  align-items:center;
  justify-content:center;
  width:32px;height:32px;
  border-radius:50%;
  flex-shrink:0;
}
.cx-action-call .cx-action-icon{
  background:rgba(0,0,0,.15);
}
.cx-action-email .cx-action-icon{
  background:rgba(130,170,255,.15);
  color:#82AAFF;
}

/* Responsive */
@media(max-width:1100px){
  .cx-stage{padding:120px 24px 80px}
  .cx-h1{font-size:64px;letter-spacing:-2px}
  .cx-aurora-glow{width:900px;height:600px}
}
@media(max-width:600px){
  .cx-stage{padding:110px 20px 60px;min-height:auto}
  .cx-eyebrow{font-size:10px;letter-spacing:2px;gap:10px;margin-bottom:28px}
  .cx-h1{font-size:46px;letter-spacing:-1.5px}
  .cx-sub{font-size:14px;margin-bottom:40px}
  .cx-actions{
    flex-direction:column;
    width:100%;
    gap:12px;
  }
  .cx-action{
    width:100%;
    justify-content:center;
    padding:18px 24px;
    font-size:15px;
  }
  .cx-aurora-glow{width:600px;height:400px}
}
`}</style>
      <Nav go={go} sc={sc}/>
      {page}
      <Ft go={go}/>
    </>
  );
}
