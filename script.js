const translations = {
fr:{navHome:"Accueil",navAbout:"À propos",navSkills:"Compétences",navEducation:"Formation",navCert:"Certifications",navContact:"Contact",heroHello:"👋 Bonjour, je suis",heroDescription:"Passionné par la programmation, le développement web et la création de solutions numériques modernes.",heroSkills:"Voir mes compétences",heroCV:"Télécharger mon CV",aboutTag:"À PROPOS",aboutTitle:"Construire des solutions, apprendre chaque jour.",aboutCardTitle:"Mon profil",aboutText:"Étudiant en formation de Technicien Spécialisé en Développement Informatique, passionné par la programmation et la conception d'applications. Je possède des connaissances en développement logiciel, développement web, bases de données et modélisation UML/Merise.",highlight1Title:"Motivé",highlight1Text:"Toujours prêt à apprendre et évoluer.",highlight2Title:"Curieux",highlight2Text:"Passionné par les nouvelles technologies.",highlight3Title:"Créatif",highlight3Text:"J'aime transformer les idées en solutions.",skillsTag:"COMPÉTENCES",skillsTitle:"Mes technologies",skillsSubtitle:"Les technologies et outils avec lesquels je développe et j'apprends.",programming:"Programmation",database:"Bases de données",tools:"Outils & Modélisation",educationTag:"FORMATION",educationTitle:"Mon parcours",degree:"Technicien Spécialisé en Développement Informatique",certTag:"CERTIFICATIONS",certTitle:"Apprentissage & Certifications",languagesTag:"LANGUES",languagesTitle:"Communication internationale",arabic:"العربية",native:"Langue maternelle",contactTag:"CONTACT",contactTitle:"Travaillons ensemble.",contactText:"Vous avez une opportunité, un projet ou souhaitez simplement échanger ? Contactez-moi.",rights:"Tous droits réservés.",role:"Développeur Full Stack"},
en:{navHome:"Home",navAbout:"About",navSkills:"Skills",navEducation:"Education",navCert:"Certifications",navContact:"Contact",heroHello:"👋 Hello, I am",heroDescription:"Passionate about programming, web development and building modern digital solutions.",heroSkills:"View my skills",heroCV:"Download my CV",aboutTag:"ABOUT",aboutTitle:"Building solutions, learning every day.",aboutCardTitle:"My profile",aboutText:"Student training as an IT Development Specialist, passionate about programming and application design. I have knowledge in software development, web development, databases and UML/Merise modeling.",highlight1Title:"Motivated",highlight1Text:"Always ready to learn and grow.",highlight2Title:"Curious",highlight2Text:"Passionate about new technologies.",highlight3Title:"Creative",highlight3Text:"I enjoy turning ideas into solutions.",skillsTag:"SKILLS",skillsTitle:"My technologies",skillsSubtitle:"Technologies and tools I use to develop and learn.",programming:"Programming",database:"Databases",tools:"Tools & Modeling",educationTag:"EDUCATION",educationTitle:"My journey",degree:"Specialized Technician in IT Development",certTag:"CERTIFICATIONS",certTitle:"Learning & Certifications",languagesTag:"LANGUAGES",languagesTitle:"International communication",arabic:"العربية",native:"Native language",contactTag:"CONTACT",contactTitle:"Let's work together.",contactText:"Do you have an opportunity, a project or simply want to connect? Contact me.",rights:"All rights reserved.",role:"Full Stack Developer"},
ar:{navHome:"الرئيسية",navAbout:"نبذة عني",navSkills:"المهارات",navEducation:"التعليم",navCert:"الشهادات",navContact:"تواصل",heroHello:"👋 مرحباً، أنا",heroDescription:"شغوف بالبرمجة وتطوير الويب وإنشاء حلول رقمية حديثة.",heroSkills:"عرض مهاراتي",heroCV:"تحميل السيرة الذاتية",aboutTag:"نبذة عني",aboutTitle:"أبني الحلول وأتعلم كل يوم.",aboutCardTitle:"ملفي الشخصي",aboutText:"طالب في تكوين تقني متخصص في تطوير المعلوميات، شغوف بالبرمجة وتصميم التطبيقات. لدي معارف في تطوير البرمجيات وتطوير الويب وقواعد البيانات ونمذجة UML وMerise.",highlight1Title:"طموح",highlight1Text:"دائماً مستعد للتعلم والتطور.",highlight2Title:"فضولي",highlight2Text:"شغوف بالتقنيات الحديثة.",highlight3Title:"مبدع",highlight3Text:"أحب تحويل الأفكار إلى حلول.",skillsTag:"المهارات",skillsTitle:"تقنياتي",skillsSubtitle:"التقنيات والأدوات التي أستخدمها للتطوير والتعلم.",programming:"البرمجة",database:"قواعد البيانات",tools:"الأدوات والنمذجة",educationTag:"التعليم",educationTitle:"مسيرتي التعليمية",degree:"تقني متخصص في تطوير المعلوميات",certTag:"الشهادات",certTitle:"التعلم والشهادات",languagesTag:"اللغات",languagesTitle:"التواصل الدولي",arabic:"العربية",native:"اللغة الأم",contactTag:"تواصل",contactTitle:"لنعمل معاً.",contactText:"هل لديك فرصة أو مشروع أو ترغب في التواصل؟ راسلني.",rights:"جميع الحقوق محفوظة.",role:"مطور Full Stack"}
};

let currentLang="fr";
const langBtn=document.getElementById("languageBtn"),langMenu=document.getElementById("languageMenu");
langBtn.onclick=()=>langMenu.classList.toggle("show");
document.querySelectorAll("[data-lang]").forEach(btn=>btn.onclick=()=>{
 currentLang=btn.dataset.lang; const t=translations[currentLang];
 document.querySelectorAll("[data-i18n]").forEach(el=>el.textContent=t[el.dataset.i18n]||el.textContent);
 document.documentElement.lang=currentLang; document.body.dir=currentLang==="ar"?"rtl":"ltr";
 langBtn.textContent=btn.textContent+" ▾"; langMenu.classList.remove("show"); startTyping();
});
document.addEventListener("click",e=>{if(!e.target.closest(".language-selector"))langMenu.classList.remove("show")});

let typingTimer;
function startTyping(){
 clearInterval(typingTimer); const text=translations[currentLang].role; const el=document.getElementById("typedText"); let i=0; el.textContent="";
 typingTimer=setInterval(()=>{el.textContent=text.slice(0,++i);if(i>=text.length){clearInterval(typingTimer)}},70);
}
startTyping();

const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("active")}),{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));
document.getElementById("year").textContent=new Date().getFullYear();

const menuBtn=document.getElementById("menuBtn"),nav=document.getElementById("navLinks");
menuBtn.onclick=()=>nav.classList.toggle("open");
document.querySelectorAll(".nav-links a").forEach(a=>a.onclick=()=>nav.classList.remove("open"));
