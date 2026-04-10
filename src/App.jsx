import takweenImg from './assets/Takween.jpg'
import mysmartfitImg from './assets/MySmartfit.jpg'
import slayersImg from './assets/Slayersclub.jpg'
import simpletouchImg from './assets/SimpleTouch.jpg'
import navLogo from './assets/NettraceproLogo.png'
import footerLogo from './assets/NewLogo.png'
import teamPhoto from './assets/NettraceproLogo.png'
import webDevImg from './assets/DevWeb.png'
import mobileAppImg from './assets/Webdesign.jpg'
import seoImg from './assets/SEO.jpg'

import { useState, useEffect, useRef } from "react";

// ── SEO: inject <title>, <meta description>, <meta keywords> dynamically ──────
const useSEO = ({ title, description, keywords }) => {
  useEffect(() => {
    document.title = title;
    let md = document.querySelector('meta[name="description"]');
    if (!md) { md = document.createElement('meta'); md.name = 'description'; document.head.appendChild(md); }
    md.content = description;
    let mk = document.querySelector('meta[name="keywords"]');
    if (!mk) { mk = document.createElement('meta'); mk.name = 'keywords'; document.head.appendChild(mk); }
    mk.content = keywords;
    // Google Search Console Verification
    let gv = document.querySelector('meta[name="google-site-verification"]');
    if (!gv) { gv = document.createElement('meta'); gv.name = 'google-site-verification'; document.head.appendChild(gv); }
    gv.content = 'xSarrO6mi5mMopaaWrAAzPgyOAUOBbJrOP8UKnRsqTQ';
    // Open Graph
    const og = (prop, val) => {
      let el = document.querySelector(`meta[property="${prop}"]`);
      if (!el) { el = document.createElement('meta'); el.setAttribute('property', prop); document.head.appendChild(el); }
      el.content = val;
    };
    og('og:title', title);
    og('og:description', description);
    og('og:site_name', 'NetTracePro');
    og('og:type', 'website');
  }, [title, description, keywords]);
};

const SEO_DEFAULTS = {
  title: "NetTracePro | Web Design, Development & SEO Agency — Houston, TX",
  description: "NetTracePro is Houston's premier web design, web development, mobile app, and SEO agency. We build custom websites and digital strategies that grow your business online.",
  keywords: "NetTracePro, nettracepro.com, web design Houston, web development Houston, SEO agency Houston, mobile app development Houston, custom website design, digital marketing Houston, responsive websites, NetTracePro Houston, affordable web design Texas, local SEO Houston"
};

const useV=(th=.12)=>{const r=useRef(null);const[v,s]=useState(false);useEffect(()=>{const o=new IntersectionObserver(([e])=>{if(e.isIntersecting)s(true)},{threshold:th});if(r.current)o.observe(r.current);return()=>o.disconnect()},[]);return[r,v]};
const F=({children,d=0,c=""})=>{const[r,v]=useV();return<div ref={r} className={c} style={{opacity:v?1:0,transform:v?"translateY(0)":"translateY(28px)",transition:`all .7s ease ${d}s`}}>{children}</div>};
const FX=({children,d=0,dir="l"})=>{const[r,v]=useV();return<div ref={r} style={{opacity:v?1:0,transform:v?"translateX(0)":`translateX(${dir==="l"?"-40px":"40px"})`,transition:`all .7s ease ${d}s`}}>{children}</div>};
const LN=navLogo;
const LF=footerLogo;
const PJ = {
  t: takweenImg,
  m: mysmartfitImg,
  s: slayersImg,
  p: simpletouchImg
};
const A=()=><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>;
const S=()=><svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>;
const Particles = () => {
  const c = useRef(null);
  useEffect(() => {
    const cv = c.current;
    const ctx = cv.getContext('2d');
    let w = cv.width = window.innerWidth;
    let h = cv.height = window.innerHeight;
    const pts = Array.from({length: 80}, () => ({
      x: Math.random() * w, y: Math.random() * h,
      vx: (Math.random() - .5) * .4, vy: (Math.random() - .5) * .4,
      r: Math.random() * 2 + 1
    }));
    let af;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      pts.forEach(p => {
        p.x += p.vx; p.y += p.vy;
        if (p.x < 0 || p.x > w) p.vx *= -1;
        if (p.y < 0 || p.y > h) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(0,230,118,0.5)';
        ctx.fill();
        pts.forEach(q => {
          const dx = p.x - q.x, dy = p.y - q.y;
          const d = Math.sqrt(dx*dx + dy*dy);
          if (d < 120) {
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = `rgba(0,230,118,${.15*(1-d/120)})`;
            ctx.lineWidth = .5;
            ctx.stroke();
          }
        });
      });
      af = requestAnimationFrame(draw);
    };
    draw();
    const rs = () => { w = cv.width = window.innerWidth; h = cv.height = window.innerHeight; };
    window.addEventListener('resize', rs);
    return () => { cancelAnimationFrame(af); window.removeEventListener('resize', rs); };
  }, []);
  return <canvas ref={c} style={{position:'absolute',inset:0,pointerEvents:'none',zIndex:1}}/>;
};
const IC={
w:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
m:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>,
s:<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>,
k:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>,
u:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>,
};
const SV=[
{id:"w",ic:"w",t:"Web Design & Development",sh:"Custom, responsive websites that convert visitors into customers.",fl:"Your website is the foundation of your online presence. NetTracePro crafts pixel-perfect, responsive websites optimized for speed, SEO, and conversions. As Houston's trusted web design agency, we build sites that rank on Google and turn clicks into clients.",ft:["Custom responsive design","WordPress & CMS development","E-commerce solutions","Landing page optimization","Website maintenance","SEO-optimized architecture"],pr:["Discovery call","Wireframe & design","Development & testing","Launch & support"],img:webDevImg},
{id:"m",ic:"m",t:"Mobile App Development",sh:"Native and cross-platform apps with intuitive design.",fl:"NetTracePro turns your app ideas into reality with native iOS/Android or cross-platform solutions that users love. From concept to App Store launch, our Houston mobile development team handles it all — on time and on budget.",ft:["iOS & Android development","Cross-platform solutions","UI/UX mobile design","App store optimization","Push notifications","Ongoing maintenance"],pr:["Strategy & planning","UI/UX prototyping","Agile development","Testing & launch"],img:mobileAppImg},
{id:"s",ic:"s",t:"Search Engine Optimization",sh:"Data-driven SEO strategies that boost your Google rankings.",fl:"NetTracePro's SEO strategies are built on real data, competitor analysis, and proven techniques that move the needle. We help Houston businesses dominate local search results and attract high-intent customers — month after month.",ft:["Technical SEO audits","Keyword research","On-page optimization","Link building","Local SEO Houston","Monthly analytics"],pr:["Comprehensive audit","Strategy development","Implementation","Monitor & refine"],img:seoImg},
];
const PR=[
{n:"AI Platform",c:"AI & Web Design",y:"2025",img:PJ.t,d:"A cutting-edge AI services platform with modern design, custom dashboards, and SEO-optimized architecture — built to convert visitors into clients."},
{n:"Consulting Firm",c:"Professional Services",y:"2024",img:PJ.m,d:"A high-trust, conversion-focused website for a professional consulting firm — clean, authoritative, and built to drive appointment bookings."},
{n:"Creative Portfolio",c:"Portfolio & Branding",y:"2024",img:PJ.s,d:"A bold personal portfolio that showcases work beautifully, communicates brand identity, and turns visitors into opportunities."},
{n:"Software Service",c:"SaaS & Web App",y:"2021",img:PJ.p,d:"A sleek, user-friendly web application with a companion mobile app — designed for daily business use and seamless retail management."}
];
const TE=[
{q:"NetTracePro understands how to communicate with our customers. Their web design approach transformed our entire digital presence and we saw results within weeks.",a:"Takween AI",r:"Web Design Client",bg:"linear-gradient(135deg,#E8A020,#F0C060)"},
{q:"We trusted NetTracePro and they delivered. Our new site looks incredible and has already brought in new clients we never would have found otherwise.",a:"M.A. CPA Inc.",r:"Accounting Firm Client",bg:"linear-gradient(135deg,#4CAF50,#2E7D32)"},
{q:"NetTracePro's professionalism and dedication is unmatched. From web design to SEO, they consistently exceed expectations and keep us ahead of the competition.",a:"SimpleTouch POS",r:"Web Application Client",bg:"linear-gradient(135deg,#42A5F5,#1565C0)"}
];

// ── TRANSFORMATION DATA ────────────────────────────────────────────────────────
const TRANSFORMS = [
  {
    client: "M.A. CPA Inc.",
    category: "Accounting & Finance",
    beforeImg: "/Old_CPA.jpg",
    afterImg: "/New_CPA.jpg",
    stats: [{n:"340%",l:"ROI Increase"},{n:"2×",l:"More Leads"},{n:"Page 1",l:"Google Ranking"}],
    desc: "From a basic template to a stunning, conversion-focused platform that commands trust and drives consultations."
  }
];

// ── FAQ SECTION ───────────────────────────────────────────────────────────────
const FAQS = [
  {q:"What does NetTracePro do?", a:"NetTracePro is a full-service digital agency based in Houston, TX specializing in custom web design, web development, mobile app development, and search engine optimization (SEO). We help small businesses and growing brands build a powerful online presence that attracts customers and drives revenue."},
  {q:"Where is NetTracePro located?", a:"NetTracePro is headquartered in Houston, Texas. We serve clients across the Greater Houston area and throughout the United States. Whether you're in Houston, Dallas, Austin, or anywhere else, NetTracePro delivers world-class digital solutions remotely or in person."},
  {q:"How much does a website cost with NetTracePro?", a:"NetTracePro offers flexible pricing tailored to your business size and goals. Every project starts with a free discovery call where we learn about your needs and build a custom quote. We believe every business deserves professional web design — reach out to get started."},
  {q:"How long does it take NetTracePro to build a website?", a:"Most NetTracePro website projects are completed within 3–6 weeks depending on complexity. Our streamlined process — from discovery and design to development and launch — is built for efficiency without sacrificing quality."},
  {q:"Does NetTracePro do SEO?", a:"Yes! SEO (Search Engine Optimization) is one of NetTracePro's core services. We offer technical SEO audits, keyword research, on-page optimization, link building, and local SEO for Houston businesses. Our goal is simple: get you on page one of Google."},
  {q:"Can NetTracePro redesign my existing website?", a:"Absolutely. NetTracePro specializes in website redesigns that modernize your brand, improve performance, and dramatically boost your search rankings. We'll audit your current site and map out a clear upgrade plan."},
];

const Nav=({go,sc})=>{
  const[mo,sm]=useState(false);
  const nav=(p)=>{sm(false);go(p);};
  return<nav className={`nv ${sc?"sc":""}`} aria-label="NetTracePro Main Navigation">
    <div className="nv-inner">
      <a href="#" onClick={e=>{e.preventDefault();nav("home")}} className="nl" aria-label="NetTracePro Home"><img src={LN} alt="NetTracePro Logo" style={{height:36}}/></a>
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
    {mo&&<div className="nv-mob">
      <a href="#" onClick={e=>{e.preventDefault();nav("services")}}>Services</a>
      <a href="#" onClick={e=>{e.preventDefault();nav("about")}}>About</a>
      <a href="#" onClick={e=>{e.preventDefault();nav("portfolio")}}>Portfolio</a>
      <a href="#" onClick={e=>{e.preventDefault();nav("testimonials")}}>Testimonials</a>
      <a href="#" onClick={e=>{e.preventDefault();nav("pricing")}}>Pricing</a>
      <a href="#" onClick={e=>{e.preventDefault();nav("contact")}} className="nmc">Get Started</a>
    </div>}
  </nav>;
};

const Ft=({go})=><footer className="ft" aria-label="NetTracePro Footer"><div className="fw"><div className="fg"><div className="fb"><a href="#" onClick={e=>{e.preventDefault();go("home")}} className="nl" aria-label="NetTracePro Home"><img src={LF} alt="NetTracePro" style={{height:50}}/></a><p>NetTracePro — Houston's full-service digital agency for web design, web development, mobile apps, and SEO. Empowering businesses with strategies that convert.</p></div>
<div className="fc"><h4>Company</h4><a href="#" onClick={e=>{e.preventDefault();go("about")}}>About NetTracePro</a><a href="#" onClick={e=>{e.preventDefault();go("testimonials")}}>Client Testimonials</a><a href="#" onClick={e=>{e.preventDefault();go("portfolio")}}>Our Portfolio</a><a href="#" onClick={e=>{e.preventDefault();go("pricing")}}>Pricing</a></div>
<div className="fc"><h4>Services</h4>{SV.map(s=><a key={s.id} href="#" onClick={e=>{e.preventDefault();go("sv-"+s.id)}}>{s.t.split("&")[0].trim()}</a>)}</div>
<div className="fc"><h4>Connect</h4><a href="#" onClick={e=>{e.preventDefault();go("contact")}}>Contact NetTracePro</a><a href="tel:+17132699658">(713) 269-9658</a><a href="mailto:info@nettracepro.com">info@nettracepro.com</a><span style={{fontSize:11,color:"var(--td)"}}>Houston, TX</span></div></div>
<div className="fbt"><p>© 2025 NetTracePro. All rights reserved. | Web Design Houston | SEO Houston | Mobile Apps Houston</p></div></div></footer>;

const PB=({l,t,s})=><div className="pb"><div className="pb-bg"/><div className="pb-in"><F><div className="label">{l}</div><h1 className="pb-t">{t}</h1>{s&&<p className="pb-s">{s}</p>}</F></div></div>;

/* ── TRANSFORMATION BEFORE/AFTER SECTION ── */
const TransformSection=({go})=>{
  const[pos,sp]=useState(50);
  const[drag,sd]=useState(false);
  const[active,sa]=useState(0);
  const ref=useRef(null);
  const t=TRANSFORMS[active];
  const move=e=>{
    if(!drag||!ref.current)return;
    const r=ref.current.getBoundingClientRect();
    const x=(e.touches?e.touches[0].clientX:e.clientX)-r.left;
    const pct=Math.min(Math.max((x/r.width)*100,2),98);
    sp(pct);
  };
  return<section className="tf-sec" aria-labelledby="tf-heading">
  <F><div className="hdr" style={{textAlign:"center",marginBottom:48}}>
    <div className="label">Real Transformations</div>
    <h2 className="title" id="tf-heading">See the NetTracePro Difference</h2>
    <p className="sub" style={{margin:"0 auto",textAlign:"center"}}>Drag the slider to reveal what NetTracePro transforms — outdated websites into high-converting digital experiences.</p>
  </div></F>
  <div className="tf-wrap">
    <div className="tf-slider" ref={ref}
      onMouseMove={move} onMouseUp={()=>sd(false)} onMouseLeave={()=>sd(false)}
      onTouchMove={move} onTouchEnd={()=>sd(false)}>
      {/* AFTER — full background */}
      <div className="tf-after" style={{backgroundImage:`url(${t.afterImg})`}}/>
      {/* BEFORE — clipped to left of divider */}
      <div className="tf-before" style={{width:`${pos}%`,backgroundImage:`url(${t.beforeImg})`}}/>
      {/* Labels */}
      <div className="tf-lbl tf-lbl-b" style={{opacity:pos>18?1:0}}>
        <span className="tf-lbl-dot tf-dot-b"/>Before
      </div>
      <div className="tf-lbl tf-lbl-a" style={{opacity:pos<82?1:0}}>
        After<span className="tf-lbl-dot tf-dot-a"/>
      </div>
      {/* Divider handle */}
      <div className="tf-line" style={{left:`${pos}%`}}
        onMouseDown={e=>{e.preventDefault();sd(true)}}
        onTouchStart={e=>{sd(true)}}>
        <div className="tf-handle">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M8 4l-4 8 4 8M16 4l4 8-4 8"/>
          </svg>
        </div>
      </div>
    </div>
    {/* Info panel */}
    <div className="tf-info">
      <div className="tf-client-tag">{t.category}</div>
      <h3 className="tf-client-name">{t.client}</h3>
      <p className="tf-desc">{t.desc}</p>
      <div className="tf-stats">{t.stats.map((s,i)=><div key={i} className="tf-stat">
        <div className="tf-stat-n">{s.n}</div>
        <div className="tf-stat-l">{s.l}</div>
      </div>)}</div>
      <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg" style={{marginTop:8}}>Get Your Transformation <A/></a>
    </div>
  </div>
</section>};

/* ── FAQ SECTION ── */
const FaqSection=()=>{const[op,so]=useState(null);
return<section className="faq-sec" aria-labelledby="faq-heading">
  <F><div className="hdr" style={{textAlign:"center",marginBottom:48}}>
    <div className="label">Common Questions</div>
    <h2 className="title" id="faq-heading">Frequently Asked About NetTracePro</h2>
    <p className="sub" style={{margin:"0 auto",textAlign:"center"}}>Everything you need to know about working with NetTracePro, Houston's trusted web design & SEO agency.</p>
  </div></F>
  <div className="faq-wrap">{FAQS.map((f,i)=><F key={i} d={i*.05}><div className={`faq-item ${op===i?"open":""}`} onClick={()=>so(op===i?null:i)}>
    <div className="faq-q"><span>{f.q}</span><div className="faq-icon">{op===i?"−":"+"}</div></div>
    {op===i&&<div className="faq-a">{f.a}</div>}
  </div></F>)}</div>
</section>};

/* === HOME PROJECT 3D GRID ===  */
const HomeProjGrid=({go})=>{
  const[tilt,setTilt]=useState({x:0,y:0});
  useEffect(()=>{
    const onMove=e=>{
      const cx=window.innerWidth/2,cy=window.innerHeight/2;
      setTilt({x:(e.clientY-cy)/cy*4,y:-(e.clientX-cx)/cx*4});
    };
    window.addEventListener('mousemove',onMove);
    return()=>window.removeEventListener('mousemove',onMove);
  },[]);
  return<div className="hpg-wrap">
    <div className="hpg-scene" style={{transform:`perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`}}>
      <div className="hpg-grid">
        {PR.map((p,i)=><div key={i} className="hpg-card" style={{animationDelay:`${i*0.5}s`}}>
          <div className="hpg-img-wrap">
            <img src={p.img} alt={`NetTracePro — ${p.n}`} className="hpg-img"/>
            <div className="hpg-overlay"/>
            <div className="hpg-cat">{p.c}</div>
          </div>
          <div className="hpg-info">
            <h3 className="hpg-name">{p.n}</h3>
            <p className="hpg-desc">{p.d}</p>
            <div className="hpg-year">{p.y}</div>
          </div>
        </div>)}
      </div>
    </div>
    <div style={{textAlign:"center",marginTop:32,position:"relative",zIndex:10}}>
      <a href="#" onClick={e=>{e.preventDefault();go("portfolio")}} className="btn bg">View All Projects <A/></a>
    </div>
  </div>;
};

/* === HOME === */
const Home=({go})=>{
  useSEO({
    title:"NetTracePro | Web Design & Development Agency — Houston, TX",
    description:"NetTracePro is Houston's premier web design, development, and SEO agency. We build custom websites that grow your business and rank on Google. Call (713) 269-9658.",
    keywords:"NetTracePro, web design Houston, web development Houston, SEO Houston, digital marketing agency Houston, custom websites, nettracepro.com"
  });
  const[at,sa]=useState(0);
  useEffect(()=>{const i=setInterval(()=>sa(p=>(p+1)%TE.length),5500);return()=>clearInterval(i)},[]);
return<><section className="hero" aria-label="NetTracePro — Houston Web Design Agency"><Particles/><div className="hg"/><div className="ho ho1"/><div className="ho ho2"/><div className="ho ho3"/>
<div className="hi"><div><F><div className="badge">Houston Web Design Agency</div></F><F d={.1}><h1 className="h1h">NetTracePro Builds <br/> Websites That <span className="acc">Grow Businesses</span></h1></F>
<F d={.2}><p className="hsub">NetTracePro delivers custom web design, development, and digital marketing solutions in Houston, TX — turning your website into your most powerful sales tool.</p></F>
<F d={.3}><div className="btns"><a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg">Start Your Project <A/></a><a href="#" onClick={e=>{e.preventDefault();go("portfolio")}} className="btn bo">View Our Work</a></div></F></div>
<F d={.2}><div className="hm"><div className="mock"><div className="mock-ch"><div className="dots"><div className="dot r"/><div className="dot y"/><div className="dot g"/></div><div className="url">🔒 nettracepro.com</div></div>
<div className="mock-bd"><div className="mock-hero"><div className="mock-glow"/><div className="mock-nav-dots"><div className="mnd a"/><div className="mnd"/><div className="mnd"/></div><div className="mock-title">NetTracePro<br/><span style={{color:"#00E676"}}>Web Design</span></div><div className="mock-desc">Houston's trusted agency for websites that rank & convert.</div><div style={{display:"flex",gap:8}}><div className="mock-btn-g">Get Started</div><div className="mock-btn-o">Learn More</div></div></div>
<div style={{display:"flex",gap:10}}>{[{i:"🎨",l:"UI Design",c:"#00E676"},{i:"📱",l:"Responsive",c:"#82AAFF"},{i:"⚡",l:"Fast SEO",c:"#C3E88D"}].map((x,j)=><div key={j} className="mock-feat"><div style={{fontSize:16,marginBottom:4}}>{x.i}</div><div style={{fontSize:8,color:x.c,fontWeight:600}}>{x.l}</div></div>)}</div>
</div></div></div></F></div></section>
<div className="stw"><F><div className="sts">{[{n:"15+",l:"Projects"},{n:"4+",l:"Years"},{n:"100%",l:"Satisfaction"},{n:"3",l:"Services"}].map((s,i)=><div className="st" key={i}><div className="stn">{s.n}</div><div className="stl">{s.l}</div></div>)}</div></F></div>
<section className="sec" aria-labelledby="services-heading"><F><div className="hdr"><div className="label">NetTracePro Services</div><h2 className="title" id="services-heading">Everything Your Business Needs to Win Online</h2><p className="sub">From web design to SEO, NetTracePro provides end-to-end digital solutions for Houston businesses ready to grow.</p></div></F>
<div className="sg">{SV.map((s,i)=><F key={i} d={i*.08}><div className="scard" onClick={()=>go("sv-"+s.id)}><div className="si">{IC[s.ic]}</div><h3>{s.t}</h3><p>{s.sh}</p><span className="sl">Learn More <A/></span></div></F>)}</div></section>

<TransformSection go={go}/>

<section className="sec hp-proj" aria-labelledby="projects-heading"><F><div className="hdr"><div className="label">NetTracePro Work</div><h2 className="title" id="projects-heading">Real Projects. Real Results.</h2><p className="sub">Every NetTracePro project is built to perform — beautiful design backed by strategy and SEO.</p></div></F></section>
<HomeProjGrid go={go}/>

<section className="sec-w ts" aria-labelledby="testimonials-heading"><div className="fw"><F><div className="hdr" style={{textAlign:"center"}}><div className="label">Client Testimonials</div><h2 className="title" id="testimonials-heading">What NetTracePro Clients Say</h2></div>
<div className="tcard"><div className="tglow"/><div className="tcr tcr1"/><div className="tcr tcr2"/>
<div className="tin">{TE.map((t,i)=><div key={i} className={`ti ${at===i?"act":""}`}><div className="tst">{[...Array(5)].map((_,j)=><span key={j}><S/></span>)}</div><p className="tq">"{t.q}"</p><div className="tar"><div className="tav" style={{background:t.bg}}>{IC.u}</div><div><div className="ta">{t.a}</div><div style={{fontSize:11,color:"var(--td)"}}>Verified NetTracePro Client</div></div></div></div>)}</div>
<div className="tds">{TE.map((_,i)=><button key={i} className={`tdt ${at===i?"act":""}`} onClick={()=>sa(i)}/>)}</div></div></F></div></section>

<FaqSection/>

<div className="cta"><F><h2 className="cta-h">Ready to Build Something <span className="acc">Great</span> with NetTracePro?</h2><p className="cta-p">Houston's most results-driven web design & SEO agency is ready to grow your business. Let's talk.</p><a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg" style={{position:"relative"}}>Start Your Project <A/></a></F></div></>;};

/* === SERVICES === */
const Services=({go})=>{
  useSEO({
    title:"NetTracePro Services | Web Design, Mobile Apps & SEO — Houston, TX",
    description:"Explore NetTracePro's full range of digital services: custom web design, mobile app development, and SEO in Houston, TX. Built to rank, designed to convert.",
    keywords:"NetTracePro services, web design Houston, mobile app development Houston, SEO agency Houston, digital marketing services, NetTracePro"
  });
  const[active,setActive]=useState(0);
  const SVDATA=[
    {
      id:"w", num:"01",
      title:"Web Design &\nDevelopment",
      pitch:"Your website is your hardest-working employee — it should be open 24/7, look sharp on every device, and turn visitors into paying customers.",
      bullets:["Custom design tailored to your brand","SEO-optimized from day one","Mobile-first & lightning fast","Built to convert visitors into leads"],
      img:SV[0].img,
      go:"sv-w",
      color:"#00E676",
      icon:<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
    },
    {
      id:"m", num:"02",
      title:"Mobile App\nDevelopment",
      pitch:"Your customers live on their phones. We build native iOS & Android apps — and cross-platform solutions — that feel premium and perform flawlessly.",
      bullets:["iOS & Android, native or cross-platform","UI/UX designed for real users","App Store & Google Play launch support","Ongoing updates & maintenance"],
      img:SV[1].img,
      go:"sv-m",
      color:"#82AAFF",
      icon:<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#82AAFF" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>
    },
    {
      id:"s", num:"03",
      title:"Search Engine\nOptimization",
      pitch:"Ranking on page one isn't luck — it's strategy. We audit, optimize, and build your authority so Google sends customers to you instead of the competition.",
      bullets:["Technical SEO & site audits","Local SEO for Houston businesses","Keyword research & content strategy","Monthly rankings report"],
      img:SV[2].img,
      go:"sv-s",
      color:"#C3E88D",
      icon:<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#C3E88D" strokeWidth="1.5"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>
    },
  ];
  const cur=SVDATA[active];
  return<div className="sv-page">
    <div className="sv-bg"/><div className="sv-fog1"/><div className="sv-fog2"/>
    {/* HERO */}
    <div className="sv-header">
      <F><span className="label">NetTracePro Services</span></F>
      <F d={.08}><h1 className="sv-h1">Built to <span className="acc">Perform.</span><br/>Designed to <span className="acc">Convert.</span></h1></F>
      <F d={.15}><p className="sv-sub">Every service we offer is built around one goal — growing your business online.</p></F>
    </div>
    {/* TABBED SHOWCASE */}
    <div className="sv-showcase">
      {/* TABS */}
      <div className="sv-tabs">
        {SVDATA.map((s,i)=><button key={i} className={`sv-tab ${active===i?"sv-tab-act":""}`}
          style={active===i?{borderColor:s.color,color:s.color}:{}}
          onClick={()=>setActive(i)}>
          <span className="sv-tab-icon">{s.icon}</span>
          <span className="sv-tab-label">{s.title.replace("\n"," ")}</span>
          {active===i&&<span className="sv-tab-bar" style={{background:s.color}}/>}
        </button>)}
      </div>
      {/* PANEL */}
      <div className="sv-panel" key={active}>
        <div className="sv-panel-left">
          <div className="sv-panel-num" style={{color:cur.color+"22"}}>{cur.num}</div>
          <h2 className="sv-panel-title" style={{color:"var(--w)"}}>
            {cur.title.split("\n").map((line,i)=><span key={i}>{i===0?<span style={{color:cur.color}}>{line}</span>:line}<br/></span>)}
          </h2>
          <p className="sv-panel-pitch">{cur.pitch}</p>
          <div className="sv-panel-bullets">
            {cur.bullets.map((b,i)=><div key={i} className="sv-panel-bullet">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={cur.color} strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
              <span>{b}</span>
            </div>)}
          </div>
          <div className="sv-panel-actions">
            <a href="#" onClick={e=>{e.preventDefault();go(cur.go)}} className="btn bg" style={{background:cur.color,color:"#0a0a0a"}}>See How It Works <A/></a>
            <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bo">Get a Free Quote <A/></a>
          </div>
        </div>
        <div className="sv-panel-right">
          <div className="sv-panel-img-wrap" style={{borderColor:cur.color+"33"}}>
            <img src={cur.img} alt={cur.title} className="sv-panel-img"/>
            <div className="sv-panel-img-glow" style={{background:`radial-gradient(ellipse at 50% 100%,${cur.color}22,transparent 60%)`}}/>
          </div>
        </div>
      </div>
    </div>
    <TransformSection go={go}/>
    <div className="cta"><F><h2 className="cta-h">Ready to Get Started?</h2><p className="cta-p">Let's talk about what your business needs and build something that actually works.</p><a href="#" onClick={e=>{e.preventDefault();go("pricing")}} className="btn bg" style={{position:"relative",marginRight:12}}>View Pricing <A/></a><a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bo">Get a Free Quote <A/></a></F></div>
  </div>;
};

/* === SERVICE DETAIL === */
const SvcDetail=({id,go})=>{
  const sv=SV.find(x=>x.id===id)||SV[0];
  useSEO({
    title:`${sv.t} | NetTracePro — Houston, TX`,
    description:`NetTracePro offers professional ${sv.t.toLowerCase()} services in Houston, TX. ${sv.sh} Contact us today.`,
    keywords:`NetTracePro ${sv.t.toLowerCase()}, ${sv.t.toLowerCase()} Houston, NetTracePro Houston, ${sv.t.split("&")[0].trim().toLowerCase()} agency`
  });
  return<><PB l="NetTracePro Service" t={sv.t} s={sv.sh}/>
<section className="sec"><div className="sdg"><FX dir="l"><div><h2 className="title" style={{fontSize:26}}>Overview</h2><p style={{color:"var(--tm)",lineHeight:1.8,fontWeight:300,marginBottom:28}}>{sv.fl}</p><h3 style={{color:"var(--w)",fontSize:17,fontWeight:600,marginBottom:14}}>What's Included</h3><div className="flist">{sv.ft.map((f,i)=><div key={i} className="fitem"><div className="fchk">{IC.k}</div><span>{f}</span></div>)}</div></div></FX>
<FX dir="r"><div style={{display:"flex",flexDirection:"column",gap:16}}><img src={sv.img} alt={`NetTracePro ${sv.t}`} style={{width:'100%',height:360,objectFit:'contain',borderRadius:10,background:'#0d0d0d',padding:'8px'}}/><div style={{background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,padding:24}}><h3 style={{color:"var(--w)",fontSize:15,fontWeight:600,marginBottom:16}}>The NetTracePro Process</h3>{sv.pr.map((p,i)=><div key={i} className="prs"><div className="prn">0{i+1}</div><div className="prt">{p}</div></div>)}</div><a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg" style={{textAlign:"center",justifyContent:"center"}}>Start With NetTracePro <A/></a></div></FX></div></section></>
};

/* === ABOUT === */
const AboutParticles=()=>{
  const c=useRef(null);
  useEffect(()=>{
    const cv=c.current;const ctx=cv.getContext('2d');
    let w=cv.width=cv.offsetWidth,h=cv.height=cv.offsetHeight;
    const pts=Array.from({length:40},()=>({x:Math.random()*w,y:Math.random()*h,vx:(Math.random()-.5)*.3,vy:(Math.random()-.5)*.3,r:Math.random()*1.5+.5,p:Math.random()*Math.PI*2,sp:Math.random()*.015+.008}));
    let af;
    const draw=()=>{
      ctx.clearRect(0,0,w,h);
      pts.forEach(p=>{p.x+=p.vx;p.y+=p.vy;p.p+=p.sp;if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;
        const g=.2+Math.sin(p.p)*.15;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle=`rgba(0,230,118,${g})`;ctx.fill();
        pts.forEach(q=>{const dx=p.x-q.x,dy=p.y-q.y,d=Math.sqrt(dx*dx+dy*dy);if(d<100){ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);ctx.strokeStyle=`rgba(0,230,118,${.08*(1-d/100)})`;ctx.lineWidth=.5;ctx.stroke();}});
      });af=requestAnimationFrame(draw);
    };draw();
    const rs=()=>{w=cv.width=cv.offsetWidth;h=cv.height=cv.offsetHeight;};
    window.addEventListener('resize',rs);return()=>{cancelAnimationFrame(af);window.removeEventListener('resize',rs);};
  },[]);
  return<canvas ref={c} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:1}}/>;
};

const About=({go})=>{
  useSEO({
    title:"About NetTracePro | Houston Web Design & Digital Agency",
    description:"Learn about NetTracePro — Houston's trusted web design and digital marketing agency. 4+ years, 15+ projects, 100% client satisfaction. We build websites that grow businesses.",
    keywords:"about NetTracePro, NetTracePro Houston, Houston web agency, web design company Houston, digital marketing Houston, NetTracePro team"
  });
  const[tilt,setTilt]=useState({x:0,y:0});
  useEffect(()=>{
    const onMove=e=>{const cx=window.innerWidth/2,cy=window.innerHeight/2;setTilt({x:(e.clientY-cy)/cy*4,y:-(e.clientX-cx)/cx*4});};
    window.addEventListener('mousemove',onMove);return()=>window.removeEventListener('mousemove',onMove);
  },[]);
  const values=[
    {i:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l3 3"/></svg>,t:"Strategy First",d:"We plan before we build. Every decision is tied to your goals."},
    {i:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,t:"Built to Rank",d:"SEO is baked into every site we create, not bolted on after."},
    {i:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,t:"Real Partnership",d:"You get direct access to us, not a project manager or account rep."},
    {i:<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>,t:"Beyond Launch",d:"We support you after go-live. Your growth is ongoing, so is our work."},
  ];
  return<div className="ab-page">
    <AboutParticles/>
    <div className="ab-bg"/><div className="ab-fog1"/><div className="ab-fog2"/>

    {/* HERO — logo + mission */}
    <div className="ab-hero" style={{position:"relative",zIndex:2}}>
      <F><div className="ab-logo-wrap">
        <div className="ab-logo-ring ab-ring1"/><div className="ab-logo-ring ab-ring2"/><div className="ab-logo-ring ab-ring3"/>
        <img src={teamPhoto} alt="NetTracePro" className="ab-logo-img"/>
      </div></F>
      <F d={.1}><span className="label">About NetTracePro</span></F>
      <F d={.18}><h1 className="ab-h1">Affordable Websites.<br/><span className="acc">Extraordinary Results.</span></h1></F>
      <F d={.25}><p className="ab-sub">We built NetTracePro for small business owners who deserve a professional digital presence without the agency price tag. Beautiful, fast, and built to rank on Google — every time.</p></F>
      <F d={.32}><div className="ab-mission-pills">
        {["Small Business Focused","Houston Based","Transparent Pricing","SEO Built In","Real Support"].map((p,i)=>
          <span key={i} className="ab-pill">{p}</span>
        )}
      </div></F>
    </div>

    {/* 3D VALUES GRID */}
    <div className="ab-scene" style={{transform:`perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,position:"relative",zIndex:2}}>
      <div className="ab-grid">
        {values.map((v,i)=><div key={i} className="ab-card" style={{animationDelay:`${i*0.4}s`}}>
          <div className="ab-card-icon">{v.i}</div>
          <h3 className="ab-card-t">{v.t}</h3>
          <p className="ab-card-d">{v.d}</p>
        </div>)}
      </div>
    </div>

    {/* STATS ROW */}
    <div className="ab-stats" style={{position:"relative",zIndex:2}}>
      {[{n:"15+",l:"Projects Delivered"},{n:"4+",l:"Years in Houston"},{n:"100%",l:"Client Satisfaction"},{n:"24/7",l:"Support"}].map((s,i)=>
        <F key={i} d={i*.06}><div className="ab-stat">
          <div className="ab-stat-n">{s.n}</div>
          <div className="ab-stat-l">{s.l}</div>
        </div></F>
      )}
    </div>

    {/* PROCESS */}
    <div className="ab-process" style={{position:"relative",zIndex:2}}>
      <F><h2 className="ab-process-h">How We Work</h2></F>
      <div className="ab-steps">
        {[
          {t:"We Listen",i:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>},
          {t:"We Plan",i:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/></svg>},
          {t:"We Build",i:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>},
          {t:"We Launch",i:<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="1.8"><path d="M22 2L11 13"/><path d="M22 2L15 22l-4-9-9-4 20-7z"/></svg>},
        ].map((s,i)=>
          <F key={i} d={i*.08}><div className="ab-step">
            <div className="ab-step-i">{s.i}</div>
            <div className="ab-step-t">{s.t}</div>
          </div></F>
        )}
      </div>
    </div>
    <FaqSection/>
    <div className="cta" style={{position:"relative",zIndex:2}}><F><h2 className="cta-h">Let's Build <span className="acc">Together</span></h2><p className="cta-p">Your vision. NetTracePro's expertise. A website that works for your Houston business.</p><a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg" style={{position:"relative"}}>Start the Conversation <A/></a></F></div>
  </div>;
};

/* === PORTFOLIO === */
const Portfolio=({go})=>{
  useSEO({
    title:"NetTracePro Portfolio | Web Design & Development Projects — Houston",
    description:"Browse NetTracePro's portfolio of web design, development, and SEO projects. Real results for Houston businesses across industries.",
    keywords:"NetTracePro portfolio, web design portfolio Houston, NetTracePro projects, website examples Houston, digital agency work"
  });
  const sceneRef=useRef(null);
  const[tilt,setTilt]=useState({x:0,y:0});
  useEffect(()=>{
    const onMove=e=>{
      const cx=window.innerWidth/2,cy=window.innerHeight/2;
      setTilt({x:(e.clientY-cy)/cy*5,y:-(e.clientX-cx)/cx*5});
    };
    window.addEventListener('mousemove',onMove);
    return()=>window.removeEventListener('mousemove',onMove);
  },[]);
  const depths=[1,.75,.85,.65];
  return<div className="pf-page">
    <div className="pf-bg"/><div className="pf-fog"/>
    {/* HEADER */}
    <div className="pf-header">
      <F><div className="label" style={{textAlign:"center"}}>NetTracePro Work</div></F>
      <F d={.08}><h1 className="pf-h1">Projects That <span className="acc">Speak For Themselves</span></h1></F>
      <F d={.15}><p className="pf-sub">Every project is built to perform. Beautiful design backed by strategy, SEO, and real results for real Houston businesses.</p></F>
    </div>
    {/* 3D GRID */}
    <div className="pf-scene" style={{transform:`perspective(1400px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`}} ref={sceneRef}>
      <div className="pf-grid">
        {PR.map((p,i)=><div key={i} className="pf-card" style={{
          transform:`translateZ(${(depths[i]-0.75)*70}px)`,
          animationDelay:`${i*0.5}s`
        }}>
          <div className="pf-img-wrap">
            <img src={p.img} alt={`NetTracePro — ${p.n}`} className="pf-img"/>
            <div className="pf-img-overlay"/>
            <div className="pf-cat">{p.c}</div>
          </div>
          <div className="pf-info">
            <h3 className="pf-name">{p.n}</h3>
            <p className="pf-desc">{p.d}</p>
            <div className="pf-year">{p.y}</div>
          </div>
        </div>)}
      </div>
    </div>
    {/* CTA */}
    <div className="pf-cta">
      <F><div className="pf-cta-box">
        <h3>Have a project in mind?</h3>
        <p>Every great NetTracePro project starts with a conversation.</p>
        <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg">Start Your Project <A/></a>
      </div></F>
    </div>
  </div>;
};

/* === TESTIMONIALS === */
const Testimonials=({go})=>{
  useSEO({
    title:"NetTracePro Reviews & Testimonials | Houston Web Design Agency",
    description:"Read what NetTracePro clients say about our web design, development, and SEO services. 100% client satisfaction. 5-star reviews from Houston businesses.",
    keywords:"NetTracePro reviews, NetTracePro testimonials, web design agency Houston reviews, client feedback NetTracePro"
  });
  const sceneRef=useRef(null);
  const[tilt,setTilt]=useState({x:0,y:0});
  useEffect(()=>{
    const onMove=e=>{
      const cx=window.innerWidth/2,cy=window.innerHeight/2;
      const dx=(e.clientX-cx)/cx,dy=(e.clientY-cy)/cy;
      setTilt({x:dy*8,y:-dx*8});
    };
    window.addEventListener('mousemove',onMove);
    return()=>window.removeEventListener('mousemove',onMove);
  },[]);

  // Extended testimonials for the grid
  const ALL_TE=[
    {q:"NetTracePro transformed our entire digital presence. Results within weeks.",a:"Takween AI",r:"AI Platform Client",bg:"linear-gradient(135deg,#E8A020,#F0C060)",s:5},
    {q:"Our new site looks incredible and brought in new clients we never would have found.",a:"M.A. CPA Inc.",r:"Consulting Client",bg:"linear-gradient(135deg,#4CAF50,#2E7D32)",s:5},
    {q:"Professionalism and dedication unmatched. They consistently exceed expectations.",a:"SimpleTouch",r:"Software Client",bg:"linear-gradient(135deg,#42A5F5,#1565C0)",s:5},
    {q:"Best investment we made for our business. The website practically sells itself.",a:"E-Commerce Owner",r:"Online Store",bg:"linear-gradient(135deg,#AB47BC,#6A1B9A)",s:5},
    {q:"They delivered exactly what we envisioned, on time and on budget. Truly exceptional.",a:"Creative Studio",r:"Portfolio Client",bg:"linear-gradient(135deg,#EF5350,#B71C1C)",s:5},
    {q:"Our Google rankings jumped to page one within two months. Incredible SEO work.",a:"Service Business",r:"SEO Client",bg:"linear-gradient(135deg,#26C6DA,#00838F)",s:5},
    {q:"NetTracePro genuinely cares. They checked in throughout the whole process.",a:"Startup Founder",r:"Full Package",bg:"linear-gradient(135deg,#FF7043,#BF360C)",s:5},
    {q:"Clean code, beautiful design, and they explained everything along the way.",a:"Tech Company",r:"Web App Client",bg:"linear-gradient(135deg,#66BB6A,#1B5E20)",s:5},
    {q:"Worth every penny. Our old site was costing us customers. This one converts.",a:"Retail Business",r:"Redesign Client",bg:"linear-gradient(135deg,#FFA726,#E65100)",s:5},
  ];

  // Layout: 3 columns, items at different depths for parallax
  const cols=[[0,3,6],[1,4,7],[2,5,8]];
  const depths=[1,0.7,0.85,0.6,1,0.75,0.9,0.65,1];

  return<div className="tm-page" ref={sceneRef}>
    {/* BG */}
    <div className="tm-bg"/>
    <div className="tm-fog tm-fog1"/><div className="tm-fog tm-fog2"/>

    {/* HEADER */}
    <div className="tm-header">
      <F><div className="label" style={{justifyContent:"center",display:"flex"}}>Client Testimonials</div></F>
      <F d={.08}><h1 className="tm-h1">NetTracePro <span className="acc">Clients Love Us</span></h1></F>
      <F d={.15}><p className="tm-sub">Don't take our word for it. Here's what Houston businesses say after working with NetTracePro.</p></F>
      <F d={.2}><div className="tm-stars">{[...Array(5)].map((_,i)=><S key={i}/>)}<span className="tm-rating">5.0 average across all projects</span></div></F>
    </div>

    {/* 3D GRID */}
    <div className="tm-scene" style={{transform:`perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`}}>
      <div className="tm-grid">
        {cols.map((col,ci)=><div key={ci} className="tm-col" style={{marginTop:`${ci===1?-40:ci===2?20:0}px`}}>
          {col.map((ti,ri)=>{
            const t=ALL_TE[ti];
            const d=depths[ti];
            return<div key={ri} className="tm-card" style={{
              animationDelay:`${ti*0.4}s`
            }}>
              <div className="tm-card-top">
                <div className="tm-av" style={{background:t.bg}}>{IC.u}</div>
                <div>
                  <div className="tm-name">{t.a}</div>
                  <div className="tm-role">{t.r}</div>
                </div>
                <div className="tm-card-stars">{[...Array(t.s)].map((_,j)=><S key={j}/>)}</div>
              </div>
              <p className="tm-quote">"{t.q}"</p>
              <div className="tm-card-bottom">
                <div className="tm-verified">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="var(--g)"><path d="M20 6L9 17l-5-5"/></svg>
                  Verified Client
                </div>
              </div>
            </div>;
          })}
        </div>)}
      </div>
    </div>

    {/* STATS */}
    <div className="tm-stats-bar">
      {[{n:"15+",l:"Projects"},{n:"100%",l:"Satisfaction"},{n:"5★",l:"Rating"},{n:"4+",l:"Years"}].map((s,i)=>
        <F key={i} d={i*.08}><div className="tm-stat">
          <div className="tm-stat-n">{s.n}</div>
          <div className="tm-stat-l">{s.l}</div>
        </div></F>
      )}
    </div>

    <div style={{textAlign:"center",paddingBottom:60,position:"relative",zIndex:10}}>
      <F><a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg">Start Your Project with NetTracePro <A/></a></F>
    </div>
  </div>;
};

/* === CONTACT === */
const ContactParticles=()=>{
  const c=useRef(null);
  useEffect(()=>{
    const cv=c.current;const ctx=cv.getContext('2d');
    let w=cv.width=cv.offsetWidth,h=cv.height=cv.offsetHeight;
    const nodes=Array.from({length:55},()=>({
      x:Math.random()*w,y:Math.random()*h,
      vx:(Math.random()-.5)*.5,vy:(Math.random()-.5)*.5,
      r:Math.random()*2+1,
      pulse:Math.random()*Math.PI*2,
      speed:Math.random()*.02+.01
    }));
    const sparks=Array.from({length:8},()=>({
      x:Math.random()*w,y:Math.random()*h,
      life:Math.random(),speed:Math.random()*.003+.002,
      size:Math.random()*60+30
    }));
    let af;
    const draw=()=>{
      ctx.clearRect(0,0,w,h);
      // floating spark glows
      sparks.forEach(s=>{
        s.life+=s.speed;if(s.life>1)s.life=0;
        const alpha=Math.sin(s.life*Math.PI)*.15;
        const grad=ctx.createRadialGradient(s.x,s.y,0,s.x,s.y,s.size);
        grad.addColorStop(0,`rgba(0,230,118,${alpha})`);
        grad.addColorStop(1,'rgba(0,230,118,0)');
        ctx.beginPath();ctx.arc(s.x,s.y,s.size,0,Math.PI*2);
        ctx.fillStyle=grad;ctx.fill();
      });
      // nodes
      nodes.forEach(p=>{
        p.x+=p.vx;p.y+=p.vy;p.pulse+=p.speed;
        if(p.x<0||p.x>w)p.vx*=-1;if(p.y<0||p.y>h)p.vy*=-1;
        const glow=.3+Math.sin(p.pulse)*.2;
        ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
        ctx.fillStyle=`rgba(0,230,118,${glow})`;ctx.fill();
        // connections
        nodes.forEach(q=>{
          const dx=p.x-q.x,dy=p.y-q.y,d=Math.sqrt(dx*dx+dy*dy);
          if(d<130){
            ctx.beginPath();ctx.moveTo(p.x,p.y);ctx.lineTo(q.x,q.y);
            ctx.strokeStyle=`rgba(0,230,118,${.12*(1-d/130)})`;
            ctx.lineWidth=.6;ctx.stroke();
          }
        });
      });
      af=requestAnimationFrame(draw);
    };
    draw();
    const rs=()=>{w=cv.width=cv.offsetWidth;h=cv.height=cv.offsetHeight;};
    window.addEventListener('resize',rs);
    return()=>{cancelAnimationFrame(af);window.removeEventListener('resize',rs);};
  },[]);
  return<canvas ref={c} style={{position:'absolute',inset:0,width:'100%',height:'100%',pointerEvents:'none',zIndex:1}}/>;
};

const Contact=({go})=>{
  useSEO({
    title:"Contact NetTracePro | Houston Web Design & SEO Agency",
    description:"Contact NetTracePro, Houston's top web design and SEO agency. Call (713) 269-9658 or email info@nettracepro.com. Free discovery call available.",
    keywords:"contact NetTracePro, NetTracePro Houston phone, hire web designer Houston, get a website quote Houston, NetTracePro email"
  });
  return<div className="ct-page">
    {/* CANVAS PARTICLE NETWORK */}
    <ContactParticles/>
    {/* LAYERED BACKGROUND EFFECTS */}
    <div className="ct-bg-glow"/>
    <div className="ct-bg-grid"/>

    <div className="ct-scanline"/>

    {/* MAIN CONTENT */}
    <div className="ct-content">
      {/* LEFT */}
      <div className="ct-left">
        <F><span className="label">Houston, TX</span></F>
        <F d={.08}><h1 className="ct-h1">Let's build something <span className="acc">worth talking about.</span></h1></F>
        <F d={.15}><p className="ct-body">We started NetTracePro because we were tired of agencies that hide behind forms, charge too much, and disappear after launch. When you reach out to us, you get a real person who actually cares whether your business grows.</p></F>
        <F d={.2}><p className="ct-body">No pitch deck. No pressure. Just a straight conversation about what you need and whether we're the right fit.</p></F>
        <F d={.25}><div className="ct-badges">
          {["100% Satisfaction","4+ Years","15+ Projects","Houston Based"].map((b,i)=><span key={i} className="ct-badge">{b}</span>)}
        </div></F>
      </div>

      {/* RIGHT */}
      <div className="ct-right">
        <F d={.1}><div className="ct-action-card ct-phone">
          <div className="ct-ac-glow"/>
          <div className="ct-ac-pulse"/>
          <div className="ct-ac-top">
            <div className="ct-ac-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <div>
              <div className="ct-ac-label">Call us directly</div>
              <div className="ct-ac-val">(713) 269-9658</div>
            </div>
          </div>
          <p className="ct-ac-desc">Pick up the phone and call us. We answer. No voicemail maze, no call center. Mon to Fri, 10AM to 5PM CT.</p>
          <a href="tel:+17132699658" className="ct-ac-btn ct-btn-green">Call Now <A/></a>
        </div></F>

        <F d={.18}><div className="ct-action-card ct-email">
          <div className="ct-ac-glow ct-glow-blue"/>
          <div className="ct-ac-top">
            <div className="ct-ac-icon ct-icon-blue">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>
            </div>
            <div>
              <div className="ct-ac-label">Send an email</div>
              <div className="ct-ac-val">info@nettracepro.com</div>
            </div>
          </div>
          <p className="ct-ac-desc">Prefer email? Send us a message anytime, even at midnight. We read every one and reply fast.</p>
          <a href="mailto:info@nettracepro.com" className="ct-ac-btn ct-btn-blue">Email Us <A/></a>
        </div></F>

        <F d={.26}><div className="ct-stat-row">
          {[{n:"24hr",l:"Max response time"},{n:"Free",l:"First consultation"},{n:"5★",l:"Client rating"}].map((s,i)=>
            <div key={i} className="ct-mini-stat">
              <div className="ct-mini-n">{s.n}</div>
              <div className="ct-mini-l">{s.l}</div>
            </div>
          )}
        </div></F>
      </div>
    </div>
  </div>;
};

/* === PRICING === */
const Pricing=({go})=>{
  useSEO({
    title:"NetTracePro Pricing | Affordable Web Design Plans — Houston, TX",
    description:"Simple, transparent pricing from NetTracePro. No hidden fees. Get a professional website starting at $500 down. Houston web design that fits your budget.",
    keywords:"NetTracePro pricing, affordable web design Houston, website cost Houston, NetTracePro plans"
  });
  const[hov,sh]=useState(null);
  const INCL=[
    {ic:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>, t:"Custom Website"},
    {ic:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35"/></svg>, t:"SEO Setup"},
    {ic:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>, t:"Hosting & Uptime"},
    {ic:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>, t:"Priority Support"},
    {ic:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-.08-4.43"/></svg>, t:"Monthly Updates"},
    {ic:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2"><rect x="5" y="2" width="14" height="20" rx="2"/><path d="M12 18h.01"/></svg>, t:"Mobile Friendly"},
  ];
  return<div className="pr-page">
    <div className="pr-bg"/><div className="pr-fog1"/><div className="pr-fog2"/>
    <div className="pr-header">
      <F><span className="label">NetTracePro Pricing</span></F>
      <F d={.08}><h1 className="pr-h1">One Price. <span className="acc">Everything Included.</span></h1></F>
      <F d={.14}><p className="pr-sub">No agency markup. No surprise invoices. Just a professional website that grows with you.</p></F>
    </div>
    {/* WHAT'S INCLUDED STRIP */}
    <F d={.1}><div className="pr-incl">
      {INCL.map((x,i)=><div key={i} className="pr-incl-item">
        <div className="pr-incl-icon">{x.ic}</div>
        <span>{x.t}</span>
      </div>)}
    </div></F>
    {/* PLAN CARDS */}
    <div className="pr-cards">
      {/* FLEX PLAN */}
      <F d={.1}><div className={`pr-card pr-card-green ${hov===0?"pr-card-hov":""}`}
        onMouseEnter={()=>sh(0)} onMouseLeave={()=>sh(null)}>
        <div className="pr-card-glow" style={{background:"radial-gradient(circle at top right,rgba(0,230,118,.14),transparent 65%)"}}/>
        <div className="pr-hot-badge">⭐ Most Popular</div>
        <div className="pr-plan-name">Flex Plan</div>
        <div className="pr-price-row">
          <span className="pr-price" style={{color:"#00E676"}}>$500</span>
          <span className="pr-price-sub">to start</span>
        </div>
        <div className="pr-plus-row">
          <span className="pr-plus">+</span>
          <span className="pr-mo-price" style={{color:"#00E676"}}>$150</span>
          <span className="pr-mo-label">/mo for 12 months</span>
        </div>
        <div className="pr-card-note">Hosting & maintenance included. No contract.</div>
        <div className="pr-divider"/>
        <div className="pr-renewal-box">
          <div className="pr-renewal-title">After Year 1 — Stay for less:</div>
          <div className="pr-renewal-opt" style={{background:"rgba(0,230,118,.08)",borderColor:"rgba(0,230,118,.25)"}}>
            <span style={{color:"#00E676",fontWeight:700}}>$100/mo</span>
            <span style={{color:"var(--tm)",fontSize:12}}>— keep everything running</span>
          </div>
        </div>
        <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="pr-cta-btn pr-cta-green">
          Get Started — Flex Plan <A/>
        </a>
      </div></F>
      {/* FULL PAY PLAN */}
      <F d={.18}><div className={`pr-card pr-card-blue ${hov===1?"pr-card-hov":""}`}
        onMouseEnter={()=>sh(1)} onMouseLeave={()=>sh(null)}>
        <div className="pr-card-glow" style={{background:"radial-gradient(circle at top right,rgba(130,170,255,.12),transparent 65%)"}}/>
        <div className="pr-hot-badge" style={{background:"rgba(130,170,255,.12)",color:"#82AAFF",border:"1px solid rgba(130,170,255,.3)"}}>💰 Best Value</div>
        <div className="pr-plan-name" style={{color:"#82AAFF"}}>Full Pay Plan</div>
        <div className="pr-price-row">
          <span className="pr-price" style={{color:"#82AAFF"}}>$1,200</span>
          <span className="pr-price-sub">one time</span>
        </div>
        <div className="pr-savings-tag">Saves you $1,100 vs Flex Plan</div>
        <div className="pr-card-note">Full year of hosting & maintenance. Pay once, done.</div>
        <div className="pr-divider"/>
        <div className="pr-renewal-box">
          <div className="pr-renewal-title">After Year 1 — Stay for less:</div>
          <div className="pr-renewal-opt" style={{background:"rgba(130,170,255,.08)",borderColor:"rgba(130,170,255,.25)"}}>
            <span style={{color:"#82AAFF",fontWeight:700}}>$100/mo</span>
            <span style={{color:"var(--tm)",fontSize:12}}>— keep everything running</span>
          </div>
        </div>
        <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="pr-cta-btn" style={{background:"#82AAFF"}}>
          Get Started — Full Pay <A/>
        </a>
      </div></F>
    </div>
    {/* HANDOFF NOTE */}
    <F><div className="pr-handoff">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#00E676" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
      <p><strong style={{color:"var(--w)"}}>Handoff Package — $200</strong> &nbsp;·&nbsp; If you ever leave, we hand over all your files, code, and assets. Mandatory, one-time, no surprises.</p>
    </div></F>
    <div className="cta" style={{position:"relative",zIndex:2}}><F>
      <h2 className="cta-h">Not sure which plan is right for you?</h2>
      <p className="cta-p">We'll help you pick. Reach out — no pressure, no pitch.</p>
      <a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg" style={{position:"relative"}}>Talk to Us First <A/></a>
    </F></div>
  </div>;
};

/* === APP === */
export default function App(){
  useSEO(SEO_DEFAULTS);
  const[pg,sp]=useState("home");const[sc,ss]=useState(false);
  useEffect(()=>{const fn=()=>ss(window.scrollY>40);window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn)},[]);
  const go=p=>{sp(p);window.scrollTo({top:0,behavior:"smooth"})};
return<><style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
:root{--bg:#0A0A0A;--sf:#111;--bd:#222;--bl:#2a2a2a;--g:#00E676;--gd:rgba(0,230,118,.08);--gk:#00C853;--w:#FFF;--t:#F0F0F0;--tm:#B0B0B0;--td:#707070}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:'Poppins',sans-serif;background:var(--bg);color:var(--t);overflow-x:hidden;-webkit-font-smoothing:antialiased}
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
.mock{background:#161616;border-radius:12px;border:1px solid #2a2a2a;overflow:hidden;box-shadow:0 40px 80px rgba(0,0,0,.5)}.mock-ch{display:flex;align-items:center;gap:8px;padding:12px 16px;background:#1a1a1a;border-bottom:1px solid #2a2a2a}.dots{display:flex;gap:6px}.dot{width:10px;height:10px;border-radius:50%}.dot.r{background:#ff5f57}.dot.y{background:#ffbd2e}.dot.g{background:#28ca42}.url{flex:1;background:#0d0d0d;border-radius:6px;padding:6px 14px;display:flex;align-items:center;gap:8px;margin-left:8px;font-size:12px;color:#666}
.mock-bd{padding:24px 24px 28px}.mock-hero{background:linear-gradient(135deg,#0d0d0d,#1a1a1a);border-radius:10px;padding:28px 24px;margin-bottom:14px;position:relative;overflow:hidden}.mock-glow{position:absolute;top:-20px;right:-20px;width:120px;height:120px;background:radial-gradient(circle,rgba(0,230,118,.12),transparent 70%);pointer-events:none}
.mock-nav-dots{display:flex;gap:6px;margin-bottom:16px}.mnd{width:20px;height:4px;border-radius:2px;background:#333}.mnd.a{width:28px;background:#00E676}
.mock-title{font-weight:800;font-size:18px;color:#fff;line-height:1.2;margin-bottom:6px}.mock-desc{font-size:8px;color:#666;line-height:1.6;margin-bottom:14px;max-width:180px}
.mock-btn-g{background:#00E676;color:#0a0a0a;padding:5px 14px;border-radius:4px;font-size:8px;font-weight:700}.mock-btn-o{border:1px solid #333;color:#888;padding:5px 14px;border-radius:4px;font-size:8px}
.mock-feat{flex:1;background:#0d0d0d;border:1px solid #1e1e1e;border-radius:8px;padding:14px 10px;text-align:center}
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
.tf-lbl-b{left:14px;background:rgba(0,0,0,.7);color:#aaa;border:1px solid rgba(255,255,255,.1)}
.tf-lbl-a{right:14px;background:rgba(0,230,118,.15);color:var(--g);border:1px solid rgba(0,230,118,.3)}
.tf-lbl-dot{width:7px;height:7px;border-radius:50%;flex-shrink:0}
.tf-dot-b{background:#666}.tf-dot-a{background:var(--g);box-shadow:0 0 8px var(--g)}
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

@keyframes tmFloat{0%,100%{margin-top:0px}50%{margin-top:-8px}}

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
}
`}</style>
<Nav go={go} sc={sc}/>
{pg==="home"&&<Home go={go}/>}
{pg==="services"&&<Services go={go}/>}
{pg.startsWith("sv-")&&<SvcDetail id={pg.replace("sv-","")} go={go}/>}
{pg==="about"&&<About go={go}/>}
{pg==="portfolio"&&<Portfolio go={go}/>}
{pg==="testimonials"&&<Testimonials go={go}/>}
{pg==="contact"&&<Contact go={go}/>}
{pg==="pricing"&&<Pricing go={go}/>}
<Ft go={go}/>
</>;
}
