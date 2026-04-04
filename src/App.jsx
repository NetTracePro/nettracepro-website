import takweenImg from './assets/Takween.jpg'
import mysmartfitImg from './assets/MySmartfit.jpg'
import slayersImg from './assets/Slayersclub.jpg'
import simpletouchImg from './assets/SimpleTouch.jpg'
import navLogo from './assets/NettraceproLogo.png'
import footerLogo from './assets/NewLogo.png'
import teamPhoto from './assets/NewLogo.png'
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
{n:"Takween AI",c:"Web Design & AI",y:"2025",img:PJ.t,d:"NetTracePro built a cutting-edge AI services platform with modern design and SEO-optimized architecture."},
{n:"M.A. CPA Inc.",c:"Accounting & Finance",y:"2024",img:PJ.m,d:"Developed a professional, conversion-focused website for a certified public accounting firm."},
{n:"Personal Portfolio",c:"Portfolio & Branding",y:"2024",img:PJ.s,d:"Designed and built a sleek personal portfolio showcasing work, skills, and brand identity."},
{n:"SimpleTouch POS",c:"Web Application",y:"2021",img:PJ.p,d:"NetTracePro designed a full point-of-sale web app with a companion mobile app for seamless retail management."}
];
const TE=[
{q:"NetTracePro understands how to communicate with our customers. Their web design approach transformed our entire digital presence and we saw results within weeks.",a:"Takween AI",r:"Web Design Client",bg:"linear-gradient(135deg,#E8A020,#F0C060)"},
{q:"We trusted NetTracePro and they delivered. Our new site looks incredible and has already brought in new clients we never would have found otherwise.",a:"M.A. CPA Inc.",r:"Accounting Firm Client",bg:"linear-gradient(135deg,#4CAF50,#2E7D32)"},
{q:"NetTracePro's professionalism and dedication is unmatched. From web design to SEO, they consistently exceed expectations and keep us ahead of the competition.",a:"SimpleTouch POS",r:"Web Application Client",bg:"linear-gradient(135deg,#42A5F5,#1565C0)"}
];

// ── WHY NETTRACEPRO — keyword-rich differentiators section ─────────────────────
const WHY = [
  {i:"🏆",t:"Houston's Top-Rated Agency",d:"NetTracePro is consistently ranked among the top web design and digital marketing agencies in Houston, TX. Our work speaks for itself — 15+ projects, 100% client satisfaction."},
  {i:"⚡",t:"Websites That Actually Rank",d:"Every NetTracePro website is built SEO-first. We structure your site so Google finds it, indexes it, and ranks it above the competition for your target keywords."},
  {i:"🎯",t:"Strategy Before Design",d:"We don't just make pretty websites. NetTracePro digs into your business, your customers, and your market to craft a digital strategy that drives measurable growth."},
  {i:"📱",t:"Mobile-First Development",d:"Over 60% of web traffic is mobile. Every NetTracePro project is built responsive and mobile-first, ensuring your customers get a flawless experience on any device."},
  {i:"🔒",t:"Transparent & Reliable",d:"No hidden fees, no surprises. NetTracePro gives you clear timelines, honest pricing, and regular updates. You'll always know exactly where your project stands."},
  {i:"🚀",t:"Fast Turnaround Times",d:"We know time is money. NetTracePro's streamlined process gets your website designed, developed, and launched faster than traditional agencies — without cutting corners."},
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

const Nav=({go,sc})=><nav className={`nv ${sc?"sc":""}`} aria-label="NetTracePro Main Navigation"><a href="#" onClick={e=>{e.preventDefault();go("home")}} className="nl" aria-label="NetTracePro Home"><img src={LN} alt="NetTracePro Logo" style={{height:36}}/></a><div className="nk">
<a href="#" onClick={e=>{e.preventDefault();go("services")}}>Services</a>
<a href="#" onClick={e=>{e.preventDefault();go("about")}}>About</a><a href="#" onClick={e=>{e.preventDefault();go("portfolio")}}>Portfolio</a><a href="#" onClick={e=>{e.preventDefault();go("testimonials")}}>Testimonials</a><a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="nc">Get Started</a></div></nav>;

const Ft=({go})=><footer className="ft" aria-label="NetTracePro Footer"><div className="fw"><div className="fg"><div className="fb"><a href="#" onClick={e=>{e.preventDefault();go("home")}} className="nl" aria-label="NetTracePro Home"><img src={LF} alt="NetTracePro" style={{height:50}}/></a><p>NetTracePro — Houston's full-service digital agency for web design, web development, mobile apps, and SEO. Empowering businesses with strategies that convert.</p></div>
<div className="fc"><h4>Company</h4><a href="#" onClick={e=>{e.preventDefault();go("about")}}>About NetTracePro</a><a href="#" onClick={e=>{e.preventDefault();go("testimonials")}}>Client Testimonials</a><a href="#" onClick={e=>{e.preventDefault();go("portfolio")}}>Our Portfolio</a></div>
<div className="fc"><h4>Services</h4>{SV.map(s=><a key={s.id} href="#" onClick={e=>{e.preventDefault();go("sv-"+s.id)}}>{s.t.split("&")[0].trim()}</a>)}</div>
<div className="fc"><h4>Connect</h4><a href="#" onClick={e=>{e.preventDefault();go("contact")}}>Contact NetTracePro</a><a href="tel:+17132699658">(713) 269-9658</a><a href="mailto:info@nettracepro.com">info@nettracepro.com</a><span style={{fontSize:11,color:"var(--td)"}}>Houston, TX</span></div></div>
<div className="fbt"><p>© 2025 NetTracePro. All rights reserved. | Web Design Houston | SEO Houston | Mobile Apps Houston</p></div></div></footer>;

const PB=({l,t,s})=><div className="pb"><div className="pb-bg"/><div className="pb-in"><F><div className="label">{l}</div><h1 className="pb-t">{t}</h1>{s&&<p className="pb-s">{s}</p>}</F></div></div>;

/* ── WHY NETTRACEPRO SECTION ── */
const WhySection=()=><section className="why-sec" aria-labelledby="why-heading">
  <F><div className="hdr" style={{textAlign:"center",marginBottom:48}}>
    <div className="label">Why NetTracePro</div>
    <h2 className="title" id="why-heading">The NetTracePro Difference</h2>
    <p className="sub" style={{margin:"0 auto",textAlign:"center"}}>Houston businesses choose NetTracePro because we combine great design, technical excellence, and real marketing strategy — all under one roof.</p>
  </div></F>
  <div className="why-grid">{WHY.map((w,i)=><F key={i} d={i*.07}><div className="why-card">
    <div className="why-icon">{w.i}</div>
    <h3>{w.t}</h3>
    <p>{w.d}</p>
  </div></F>)}</div>
</section>;

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

<WhySection/>

<section className="sec" aria-labelledby="projects-heading"><F><div className="hdr"><div className="label">NetTracePro Work</div><h2 className="title" id="projects-heading">Real Projects. Real Results.</h2><p className="sub">Every NetTracePro project is built to perform — beautiful design backed by strategy and SEO.</p></div></F>
<div className="pg">{PR.map((p,i)=><F key={i} d={i*.08}><div className="pc"><div className="piw"><img className="pim" src={p.img} alt={`NetTracePro project — ${p.n}`}/><div className="pn">0{i+1}</div></div><div className="pbd"><div className="pct">{p.c}</div><h3>{p.n}</h3><div className="py">{p.y}</div></div></div></F>)}</div>
<div style={{textAlign:"center",marginTop:40}}><a href="#" onClick={e=>{e.preventDefault();go("portfolio")}} className="btn bg">View All Projects <A/></a></div></section>

<section className="sec-w ts" aria-labelledby="testimonials-heading"><div className="fw"><F><div className="hdr" style={{textAlign:"center"}}><div className="label">Client Testimonials</div><h2 className="title" id="testimonials-heading">What NetTracePro Clients Say</h2></div>
<div className="tcard"><div className="tglow"/><div className="tcr tcr1"/><div className="tcr tcr2"/>
<div className="tin">{TE.map((t,i)=><div key={i} className={`ti ${at===i?"act":""}`}><div className="tst">{[...Array(5)].map((_,j)=><span key={j}><S/></span>)}</div><p className="tq">"{t.q}"</p><div className="tar"><div className="tav" style={{background:t.bg}}>{IC.u}</div><div><div className="ta">{t.a}</div><div style={{fontSize:11,color:"var(--td)"}}>Verified NetTracePro Client</div></div></div></div>)}</div>
<div className="tds">{TE.map((_,i)=><button key={i} className={`tdt ${at===i?"act":""}`} onClick={()=>sa(i)}/>)}</div></div></F></div></section>

<FaqSection/>

<div className="cta"><F><h2 className="cta-h">Ready to Build Something <span className="acc">Great</span> with NetTracePro?</h2><p className="cta-p">Houston's most results-driven web design & SEO agency is ready to grow your business. Let's talk.</p><a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg" style={{position:"relative"}}>Start Your Project <A/></a></F></div></>;};

/* === SERVICES OVERVIEW === */
const Services=({go})=>{
  useSEO({
    title:"NetTracePro Services | Web Design, Mobile Apps & SEO — Houston, TX",
    description:"Explore NetTracePro's full range of digital services: custom web design, mobile app development, and SEO in Houston, TX. Built to rank, designed to convert.",
    keywords:"NetTracePro services, web design Houston, mobile app development Houston, SEO agency Houston, digital marketing services, NetTracePro"
  });
  return<><PB l="NetTracePro Services" t="What We Offer" s="Full-service digital solutions from Houston's trusted agency — NetTracePro."/>
<section className="sec">{SV.map((s,i)=><F key={s.id} d={i*.1}><div className="svr" style={{flexDirection:i%2===1?"row-reverse":"row"}}><div className="svr-img"><img src={s.img} alt={`NetTracePro — ${s.t}`} style={{width:'100%',height:400,objectFit:'contain',borderRadius:10,background:'#0d0d0d'}}/></div><div className="svr-txt"><div className="si" style={{marginBottom:16}}>{IC[s.ic]}</div><h2 className="title" style={{fontSize:26}}>{s.t}</h2><p style={{color:"var(--tm)",lineHeight:1.7,fontWeight:300,marginBottom:20}}>{s.fl}</p><div style={{display:"flex",flexWrap:"wrap",gap:8,marginBottom:24}}>{s.ft.slice(0,4).map((f,j)=><span key={j} className="ftag">{IC.k} {f}</span>)}</div><a href="#" onClick={e=>{e.preventDefault();go("sv-"+s.id)}} className="btn bg">Learn More <A/></a></div></div>{i<SV.length-1&&<div style={{height:1,background:"var(--bd)",margin:"50px 0"}}/>}</F>)}</section>
<WhySection/>
<div className="cta"><F><h2 className="cta-h">Ready to Get Started with NetTracePro?</h2><p className="cta-p">Let's discuss which services are right for your Houston business.</p><a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg" style={{position:"relative"}}>Contact NetTracePro <A/></a></F></div></>;
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
<FX dir="r"><div style={{display:"flex",flexDirection:"column",gap:16}}><img src={sv.img} alt={`NetTracePro ${sv.t}`} style={{width:'100%',height:350,objectFit:'contain',borderRadius:10,background:'#0d0d0d'}}/><div style={{background:"var(--sf)",border:"1px solid var(--bd)",borderRadius:12,padding:24}}><h3 style={{color:"var(--w)",fontSize:15,fontWeight:600,marginBottom:16}}>The NetTracePro Process</h3>{sv.pr.map((p,i)=><div key={i} className="prs"><div className="prn">0{i+1}</div><div className="prt">{p}</div></div>)}</div><a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg" style={{textAlign:"center",justifyContent:"center"}}>Start With NetTracePro <A/></a></div></FX></div></section></>
};

/* === ABOUT === */
const About=({go})=>{
  useSEO({
    title:"About NetTracePro | Houston Web Design & Digital Agency",
    description:"Learn about NetTracePro — Houston's trusted web design and digital marketing agency. 4+ years, 15+ projects, 100% client satisfaction. We build websites that grow businesses.",
    keywords:"about NetTracePro, NetTracePro Houston, Houston web agency, web design company Houston, digital marketing Houston, NetTracePro team"
  });
  return<><PB l="About NetTracePro" t="Your Success Is Our Mission" s="NetTracePro — not just building websites, building partnerships that last."/>
<section className="sec"><div className="abg"><FX dir="l"><div><div className="label">Our Story</div><h2 className="title" style={{fontSize:26}}>We Started Where You Are Now</h2>
<p style={{color:"var(--tm)",lineHeight:1.8,fontWeight:300,marginBottom:18}}>NetTracePro was founded in Houston, TX with one belief: <strong style={{color:"var(--w)"}}>every business deserves a digital presence that drives real results.</strong></p>
<p style={{color:"var(--tm)",lineHeight:1.8,fontWeight:300,marginBottom:18}}>We've felt the frustration of a website that doesn't convert and agencies that talk big but don't deliver. That's exactly why NetTracePro does things differently — strategy first, design second, results always.</p>
<p style={{color:"var(--tm)",lineHeight:1.8,fontWeight:300}}>When you work with NetTracePro, you're getting a team that <strong style={{color:"var(--g)"}}>listens first, understands your goals, and builds something tailored to your customers.</strong> Every pixel, every keyword, every strategy is crafted with YOUR business in mind.</p></div></FX>
<FX dir="r"><div style={{display:"flex",flexDirection:"column",gap:14}}><img src={teamPhoto} alt="NetTracePro Team — Houston Web Design Agency" style={{width:'50%', height:280, objectFit:'contain', borderRadius:10, display:'block', margin:'0 auto'}}/><div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:12}}>{[{n:"15+",l:"Happy Clients"},{n:"4+",l:"Years Strong"},{n:"100%",l:"Satisfaction"},{n:"24/7",l:"Support"}].map((s,i)=><div key={i} className="abst"><div className="stn" style={{fontSize:22}}>{s.n}</div><div style={{fontSize:10,color:"var(--td)",textTransform:"uppercase",letterSpacing:1}}>{s.l}</div></div>)}</div></div></FX></div></section>
<section className="sec" style={{paddingTop:0}}><F><div className="hdr" style={{textAlign:"center"}}><div className="label">The NetTracePro Process</div><h2 className="title">How We Take Care of You</h2><p className="sub" style={{margin:"0 auto",textAlign:"center"}}>Every NetTracePro project follows our proven process — designed to keep you informed and confident from day one.</p></div></F>
<div className="prg">{[{n:"01",t:"We Listen",d:"We start with a real conversation about your vision, customers, and goals. No templates — just your unique needs.",i:"💬"},{n:"02",t:"We Plan",d:"Together we map out strategy, timelines, and deliverables. NetTracePro believes in zero surprises.",i:"📋"},{n:"03",t:"We Build",d:"Our Houston team brings your vision to life with clean code, stunning design, and SEO built in from the start.",i:"⚡"},{n:"04",t:"We Launch",d:"Go-live is just the beginning. NetTracePro provides ongoing support as your business grows.",i:"🚀"}].map((s,i)=><F key={i} d={i*.1}><div className="prc"><div className="prc-n">{s.n}</div><div style={{fontSize:28,marginBottom:10}}>{s.i}</div><h3 style={{color:"var(--w)",fontSize:17,fontWeight:600,marginBottom:6}}>{s.t}</h3><p style={{color:"var(--tm)",fontSize:13,lineHeight:1.6,fontWeight:300}}>{s.d}</p></div></F>)}</div></section>
<FaqSection/>
<div className="cta"><F><h2 className="cta-h">Let's Build <span className="acc">Together</span> with NetTracePro</h2><p className="cta-p">Your vision. NetTracePro's expertise. A website that works hard for your Houston business.</p><a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg" style={{position:"relative"}}>Start the Conversation <A/></a></F></div></>;
};

/* === PORTFOLIO === */
const Portfolio=({go})=>{
  useSEO({
    title:"NetTracePro Portfolio | Web Design & Development Projects — Houston",
    description:"Browse NetTracePro's portfolio of web design, development, and SEO projects. Real results for Houston businesses across industries.",
    keywords:"NetTracePro portfolio, web design portfolio Houston, NetTracePro projects, website examples Houston, digital agency work"
  });
  return<><PB l="NetTracePro Work" t="Projects That Speak For Themselves" s="Real NetTracePro results for real Houston businesses."/>
<section className="sec"><div className="ptg">{PR.map((p,i)=><F key={i} d={i*.12}><div className="ptc"><div className="ptw"><img className="pim" src={p.img} alt={`NetTracePro — ${p.n}`}/><div className="pn">0{i+1}</div></div><div className="ptb"><div className="pct">{p.c}</div><h3 style={{color:"var(--w)",fontSize:20,fontWeight:700,marginBottom:6}}>{p.n}</h3><p style={{color:"var(--tm)",fontSize:13,lineHeight:1.6,fontWeight:300}}>{p.d}</p></div></div></F>)}</div>
<F><div style={{textAlign:"center",marginTop:50}}><div className="cta-box"><h3 style={{color:"var(--w)",fontSize:22,fontWeight:700,marginBottom:10,position:"relative"}}>Have a Project in Mind?</h3><p style={{color:"var(--tm)",fontSize:13,lineHeight:1.6,fontWeight:300,marginBottom:20,position:"relative"}}>Every great NetTracePro project starts with a conversation. Let's build something together.</p><a href="#" onClick={e=>{e.preventDefault();go("contact")}} className="btn bg" style={{position:"relative"}}>Start Your Project with NetTracePro <A/></a></div></div></F></section></>;
};

/* === TESTIMONIALS === */
const Testimonials=({go})=>{
  useSEO({
    title:"NetTracePro Reviews & Testimonials | Houston Web Design Agency",
    description:"Read what NetTracePro clients say about our web design, development, and SEO services. 100% client satisfaction. 5-star reviews from Houston businesses.",
    keywords:"NetTracePro reviews, NetTracePro testimonials, web design agency Houston reviews, client feedback NetTracePro"
  });
  return<><PB l="Client Testimonials" t="NetTracePro Clients Love Us" s="Don't just take our word for it — hear from Houston businesses NetTracePro has helped grow."/>
<section className="sec"><div className="teg">{TE.map((t,i)=><F key={i} d={i*.15}><div className="tec"><div className="tec-top"><div className="tav" style={{background:t.bg,width:48,height:48}}>{IC.u}</div><div><div style={{color:"var(--w)",fontWeight:600,fontSize:14}}>{t.a}</div><div style={{color:"var(--td)",fontSize:12}}>{t.r}</div></div></div>
<div className="tst" style={{justifyContent:"flex-start",margin:"14px 0"}}>{[...Array(5)].map((_,j)=><S key={j}/>)}</div>
<p style={{color:"var(--tm)",fontSize:14,lineHeight:1.7,fontWeight:300,fontStyle:"italic"}}>"{t.q}"</p></div></F>)}</div>
<F><div style={{display:"flex",justifyContent:"center",gap:36,flexWrap:"wrap",marginTop:50,paddingTop:36,borderTop:"1px solid var(--bd)"}}>{[{n:"15+",l:"Projects Completed"},{n:"100%",l:"On-Time Delivery"},{n:"100%",l:"Client Satisfaction"},{n:"5★",l:"Average Rating"}].map((s,i)=><div key={i} style={{textAlign:"center"}}><div className="stn" style={{fontSize:30}}>{s.n}</div><div style={{fontSize:10,color:"var(--td)",textTransform:"uppercase",letterSpacing:1.5,marginTop:4}}>{s.l}</div></div>)}</div></F></section></>;
};

/* === CONTACT === */
const Contact=({go})=>{
  useSEO({
    title:"Contact NetTracePro | Houston Web Design & SEO Agency",
    description:"Contact NetTracePro — Houston's top web design and SEO agency. Call (713) 269-9658 or email info@nettracepro.com. Free discovery call available.",
    keywords:"contact NetTracePro, NetTracePro Houston phone, hire web designer Houston, get a website quote Houston, NetTracePro email"
  });
  const[f,sf]=useState({n:"",e:"",p:"",s:"",m:""});
  return<><PB l="Contact NetTracePro" t="Let's Start Something Great" s="Tell NetTracePro about your project — we'll respond within 24 hours."/>
<section className="sec"><div className="ctg"><FX dir="l"><div><h2 className="title" style={{fontSize:22}}>Get in Touch with NetTracePro</h2><p style={{color:"var(--tm)",lineHeight:1.7,fontWeight:300,marginBottom:28}}>Whether you have a detailed brief or just a rough idea, NetTracePro would love to hear from you. No pressure — just a real conversation about your Houston business goals.</p>
{[{i:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>,t:<a href="tel:+17132699658">(713) 269-9658</a>},
{i:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="M22 7l-10 7L2 7"/></svg>,t:<a href="mailto:info@nettracepro.com">info@nettracepro.com</a>},
{i:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>,t:"Houston, TX"},
{i:<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>,t:"Available 10AM–5PM CT"}
].map((c,i)=><div key={i} className="cd"><div className="cdi">{c.i}</div><div className="cdt">{c.t}</div></div>)}</div></FX>
<FX dir="r"><div className="ctfc"><div className="ctfg"/><h3 style={{color:"var(--w)",fontSize:18,fontWeight:600,marginBottom:18,position:"relative"}}>Send NetTracePro a Message</h3>
<div className="fm"><div className="fr"><input className="fi" placeholder="Your Name" value={f.n} onChange={e=>sf({...f,n:e.target.value})}/><input className="fi" placeholder="Your Email" value={f.e} onChange={e=>sf({...f,e:e.target.value})}/></div><div className="fr"><input className="fi" placeholder="Phone" value={f.p} onChange={e=>sf({...f,p:e.target.value})}/><input className="fi" placeholder="Subject" value={f.s} onChange={e=>sf({...f,s:e.target.value})}/></div>
<textarea className="fi fta" placeholder="Tell NetTracePro about your project..." value={f.m} onChange={e=>sf({...f,m:e.target.value})}/><button className="fbt" onClick={()=>{alert("Thank you! NetTracePro will be in touch within 24 hours.");sf({n:"",e:"",p:"",s:"",m:""})}}>Send Message <A/></button></div></div></FX></div></section></>
};

/* === APP === */
export default function App(){
  useSEO(SEO_DEFAULTS);
  const[pg,sp]=useState("home");const[sc,ss]=useState(false);
  useEffect(()=>{const fn=()=>ss(window.scrollY>40);window.addEventListener("scroll",fn);return()=>window.removeEventListener("scroll",fn)},[]);
  const go=p=>{sp(p);window.scrollTo({top:0,behavior:"smooth"})};
return<><style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');
:root{--bg:#0A0A0A;--sf:#111;--bd:#222;--bl:#2a2a2a;--g:#00E676;--gd:rgba(0,230,118,.08);--gk:#00C853;--w:#FFF;--t:#E0E0E0;--tm:#888;--td:#555}
*{margin:0;padding:0;box-sizing:border-box}html{scroll-behavior:smooth}body{font-family:'Poppins',sans-serif;background:var(--bg);color:var(--t);overflow-x:hidden;-webkit-font-smoothing:antialiased}
.nv{position:fixed;top:0;left:0;right:0;z-index:1000;padding:20px 60px;display:flex;align-items:center;justify-content:space-between;transition:all .4s}.nv.sc{background:rgba(10,10,10,.95);backdrop-filter:blur(20px);padding:14px 60px;border-bottom:1px solid var(--bd)}
.nl{display:flex;align-items:center;text-decoration:none}.nl img{background:transparent !important;display:block}.nk{display:flex;gap:28px;align-items:center}.nk a{color:var(--tm);text-decoration:none;font-size:13px;font-weight:500;transition:color .3s}.nk a:hover{color:var(--g)}.nc{background:var(--g)!important;color:var(--bg)!important;padding:10px 24px!important;border-radius:6px;font-weight:600!important}
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
.piw{overflow:hidden;position:relative}.piw::after{content:'';position:absolute;inset:0;background:linear-gradient(0deg,rgba(10,10,10,.7),transparent 50%);pointer-events:none}.pim{width:100%;aspect-ratio:16/10;object-fit:contain;display:block;transition:transform .6s}.pc:hover .pim,.ptc:hover .pim{transform:scale(1.06)}
.pn{font-size:48px;font-weight:800;color:rgba(0,230,118,.12);position:absolute;top:12px;right:16px;line-height:1;z-index:2}.pbd{padding:20px 24px}.pct{font-size:10px;text-transform:uppercase;letter-spacing:1.5px;color:var(--g);font-weight:600;margin-bottom:6px}.pc h3,.ptb h3{font-size:20px;font-weight:700;color:var(--w);margin-bottom:4px}.py{font-size:12px;color:var(--td)}
.ts{background:var(--sf);border-top:1px solid var(--bd);border-bottom:1px solid var(--bd)}
.tcard{max-width:700px;margin:0 auto;background:var(--bg);border:1px solid var(--bd);border-radius:16px;padding:44px 40px 32px;position:relative;overflow:hidden;text-align:center}.tglow{position:absolute;top:-60px;left:50%;transform:translateX(-50%);width:300px;height:200px;background:radial-gradient(ellipse,rgba(0,230,118,.06),transparent 70%);pointer-events:none}
.tcr{position:absolute;width:40px;height:40px;border:2px solid rgba(0,230,118,.15)}.tcr1{top:12px;left:12px;border-right:none;border-bottom:none;border-radius:4px 0 0 0}.tcr2{bottom:12px;right:12px;border-left:none;border-top:none;border-radius:0 0 4px 0}
.tin{position:relative;min-height:180px}.ti{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;transition:all .5s;opacity:0;transform:translateX(30px);pointer-events:none}.ti.act{opacity:1;transform:translateX(0);pointer-events:auto}
.tq{font-size:18px;line-height:1.65;color:var(--t);font-weight:300;font-style:italic;margin:14px 0 20px}.tst{display:flex;gap:4px;color:var(--g);justify-content:center}
.ta{font-size:13px;font-weight:600;color:var(--g);text-transform:uppercase;letter-spacing:1px;text-align:left}.tar{display:flex;align-items:center;gap:12px;justify-content:center}.tav{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0}
.tds{display:flex;gap:8px;justify-content:center;margin-top:24px;position:relative;z-index:2}.tdt{width:8px;height:8px;border-radius:50%;background:var(--bl);border:none;cursor:pointer;transition:all .4s}.tdt.act{background:var(--g);width:28px;border-radius:8px;box-shadow:0 0 12px rgba(0,230,118,.4)}
.cta{padding:80px 60px;text-align:center;position:relative;overflow:hidden}.cta::before{content:'';position:absolute;inset:0;background:radial-gradient(ellipse at center,rgba(0,230,118,.06),transparent 55%)}.cta-h{font-size:clamp(28px,3.5vw,44px);font-weight:700;color:var(--w);margin-bottom:16px;position:relative}.cta-p{font-size:16px;color:var(--tm);max-width:480px;margin:0 auto 36px;font-weight:300;line-height:1.7;position:relative}
.cd{display:flex;align-items:center;gap:14px;margin-bottom:18px}.cdi{width:40px;height:40px;background:var(--gd);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--g);flex-shrink:0;transition:all .3s}.cd:hover .cdi{background:var(--g);color:var(--bg)}.cdt{font-size:14px;color:var(--tm)}.cdt a{color:var(--t);text-decoration:none}.cdt a:hover{color:var(--g)}
.fm{display:flex;flex-direction:column;gap:14px}.fr{display:grid;grid-template-columns:1fr 1fr;gap:14px}.fi{width:100%;padding:13px 16px;background:var(--bg);border:1px solid var(--bd);border-radius:6px;font-size:14px;font-family:'Poppins',sans-serif;font-weight:300;color:var(--t);outline:none;transition:all .4s}.fi:focus{border-color:var(--g);box-shadow:0 0 15px rgba(0,230,118,.1)}.fi::placeholder{color:var(--td)}.fta{resize:vertical;min-height:110px}
.fbt{background:var(--g);color:var(--bg);padding:14px 36px;border:none;border-radius:6px;font-size:14px;font-weight:600;cursor:pointer;font-family:'Poppins',sans-serif;transition:all .3s;align-self:flex-start;display:inline-flex;align-items:center;gap:8px}.fbt:hover{background:var(--gk);transform:translateY(-2px)}
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
.why-sec{background:linear-gradient(180deg,var(--bg) 0%,rgba(0,230,118,.025) 50%,var(--bg) 100%);padding:80px 60px;border-top:1px solid var(--bd);border-bottom:1px solid var(--bd)}
.why-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px;max-width:1280px;margin:0 auto}
.why-card{background:var(--sf);border:1px solid var(--bd);border-radius:14px;padding:32px 26px;transition:all .4s;position:relative;overflow:hidden}
.why-card::before{content:'';position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,transparent,var(--g),transparent);transform:scaleX(0);transition:transform .5s}
.why-card:hover{border-color:rgba(0,230,118,.3);transform:translateY(-5px);box-shadow:0 20px 40px rgba(0,0,0,.3)}.why-card:hover::before{transform:scaleX(1)}
.why-icon{font-size:32px;margin-bottom:14px}.why-card h3{font-size:16px;font-weight:700;color:var(--w);margin-bottom:10px}.why-card p{font-size:13px;line-height:1.7;color:var(--tm);font-weight:300}
.faq-sec{background:var(--sf);border-top:1px solid var(--bd);border-bottom:1px solid var(--bd);padding:80px 60px}
.faq-wrap{max-width:800px;margin:0 auto;display:flex;flex-direction:column;gap:12px}
.faq-item{background:var(--bg);border:1px solid var(--bd);border-radius:10px;padding:20px 24px;cursor:pointer;transition:all .3s}
.faq-item:hover,.faq-item.open{border-color:rgba(0,230,118,.3)}
.faq-q{display:flex;justify-content:space-between;align-items:center;gap:16px}
.faq-q span{font-size:15px;font-weight:600;color:var(--w);line-height:1.4}
.faq-icon{width:28px;height:28px;background:var(--gd);border-radius:6px;display:flex;align-items:center;justify-content:center;color:var(--g);font-size:18px;font-weight:300;flex-shrink:0;transition:all .3s;line-height:1}
.faq-item.open .faq-icon{background:var(--g);color:var(--bg)}
.faq-a{margin-top:14px;font-size:14px;line-height:1.75;color:var(--tm);font-weight:300;padding-top:14px;border-top:1px solid var(--bd)}
@media(max-width:1024px){.nv{padding:16px 24px}.nk{display:none}.hero{padding:120px 24px 80px}.hi{grid-template-columns:1fr;gap:40px}.sec,.sec-w{padding:60px 24px}.stw{padding:0 24px}.sts{flex-wrap:wrap}.st{min-width:50%;padding:18px 14px}.sg>div{flex:0 0 100%}.pg,.ptg{grid-template-columns:1fr}.abg,.sdg,.ctg{grid-template-columns:1fr;gap:28px}.svr{flex-direction:column!important;gap:28px}.prg,.teg{grid-template-columns:1fr 1fr}.fg{grid-template-columns:1fr 1fr;gap:16px}.cta{padding:60px 24px}.ft{padding:40px 24px 16px}.pb{padding:120px 24px 60px}.fr{grid-template-columns:1fr}.why-grid{grid-template-columns:1fr 1fr}.why-sec,.faq-sec{padding:60px 24px}}
@media(max-width:600px){.h1h{font-size:28px!important}.btns{flex-direction:column;align-items:stretch}.fg{grid-template-columns:1fr}.prg,.teg{grid-template-columns:1fr}.st{min-width:50%}.why-grid{grid-template-columns:1fr}}
`}</style>
<Nav go={go} sc={sc}/>
{pg==="home"&&<Home go={go}/>}
{pg==="services"&&<Services go={go}/>}
{pg.startsWith("sv-")&&<SvcDetail id={pg.replace("sv-","")} go={go}/>}
{pg==="about"&&<About go={go}/>}
{pg==="portfolio"&&<Portfolio go={go}/>}
{pg==="testimonials"&&<Testimonials go={go}/>}
{pg==="contact"&&<Contact go={go}/>}
<Ft go={go}/>
</>;
}
