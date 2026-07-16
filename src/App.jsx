import { useState, useEffect, useRef } from "react";

function App() {
  const words = ["Web Developer", "Frontend Developer", "JavaScript Programmer"];
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [stars, setStars] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Action state for the Problem Solver card
  const [solvedCount, setSolvedCount] = useState(142);
  const [isJiggling, setIsJiggling] = useState(false);

  const handleSolveAction = () => {
    setSolvedCount(prev => prev + 1);
    setIsJiggling(true);
    setTimeout(() => setIsJiggling(false), 500);
  };

  // Audio Play Handler safely triggered
  useEffect(() => {
    const startAudio = () => {
      if (audioRef.current && !isPlaying) {
        audioRef.current.play()
          .then(() => setIsPlaying(true))
          .catch(err => console.log("Autoplay blocked: ", err));
      }
    };
    window.addEventListener("click", startAudio);
    window.addEventListener("scroll", startAudio);
    return () => {
      window.removeEventListener("click", startAudio);
      window.removeEventListener("scroll", startAudio);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(err => console.log(err));
    }
    setIsPlaying(!isPlaying);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! I will get back to you soon.");
    e.target.reset();
  };

  // Background colorful stars generation
  useEffect(() => {
    const starCount = 120;
    // Ultra-saturated, glowing neon star colors
    const starColors = [
      "rgba(129, 140, 248, 0.95)", // Electric Indigo
      "rgba(244, 114, 182, 0.95)", // Neon Pink
      "rgba(192, 132, 252, 0.95)", // Laser Purple
      "rgba(45, 212, 191, 0.95)",  // Bright Cyan
      "rgba(251, 146, 60, 0.95)"   // Vivid Orange
    ];

    const generatedStars = Array.from({ length: starCount }).map((_, i) => ({
      id: i,
      top: Math.random() * 100,
      left: Math.random() * 100,
      size: Math.random() * 3 + 1,
      delay: Math.random() * -20,
      duration: Math.random() * 15 + 15,
      color: starColors[Math.floor(Math.random() * starColors.length)]
    }));
    setStars(generatedStars);
  }, []);

  // Typing calculation logic
  useEffect(() => {
    const currentWord = words[wordIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);
        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);
        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 40 : 80);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  const skillsData = [
    {name:'HTML',per:90,desc:'HTML is the backbone of every website. I use HTML5 to create well-structured, semantic, and accessible web pages.',color:'#4f46e5'},
    {name:'CSS',per:85,desc:'I use CSS3 to design beautiful, responsive, and modern websites with animations, transitions, Flexbox, and Media Queries.',color:'#6366f1'},
    {name:'JavaScript',per:75,desc:'Helps me create interactive websites. Experience includes DOM manipulation, events, functions, promises, and API integrations.',color:'#818cf8'},
    {name:'React JS',per:65,desc:'Intermediate knowledge of React. I can build modular components, manage local hooks states, and handle single-page apps.',color:'#a5b4fc'},
    {name:'Git & GitHub',per:70,desc:'I actively use Git and GitHub for version control, repository management, tracking changes, and project collaboration.',color:'#c7d2fe'}
  ];

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
      <audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3" loop />

      {/* Backdrop Ambient Elements with Colorful Dark Space Background */}
      <div className="magical-bg">
        <div className="rays"></div>
        <div className="glow-orb orb-1"></div>
        <div className="glow-orb orb-2"></div>
        <div className="glow-orb orb-3"></div>
        <div className="glow-orb orb-4"></div>
        <div className="stars-layer">
          {stars.map((star) => (
            <div key={star.id} className="star" style={{
              top: `${star.top}%`,
              left: `${star.left}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animationDelay: `${star.delay}s`,
              animationDuration: `${star.duration}s`,
              background: star.color,
              boxShadow: `0 0 6px ${star.color}, 0 0 12px ${star.color}`
            }}/>
          ))}
        </div>
      </div>

      <style>{`
        * {margin: 0; padding: 0; box-sizing: border-box; font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif; scroll-behavior: smooth;}
        body {background: transparent; color: #f1f5f9; overflow-x: hidden;}

        /* Deep near-black background to let neon light elements stand out */
        .magical-bg {
          position: fixed;
          top: 0; left: 0; width: 100vw; height: 100vh;
          z-index: -1; pointer-events: none; overflow: hidden;
          background: radial-gradient(circle at 50% 50%, #03010c 0%, #000000 100%);
        }

        /* Highly colorful, higher-opacity revolving light rays */
        .rays {
          position: absolute; top: 50%; left: 50%; width: 220%; height: 220%;
          background:
            conic-gradient(from 0deg, transparent, rgba(99, 102, 241, 0.22), transparent 25%),
            conic-gradient(from 90deg, transparent, rgba(236, 72, 153, 0.16), transparent 25%),
            conic-gradient(from 180deg, transparent, rgba(168, 85, 247, 0.18), transparent 25%),
            conic-gradient(from 270deg, transparent, rgba(6, 182, 212, 0.16), transparent 25%);
          transform: translate(-50%, -50%); animation: rotateRays 35s linear infinite; mix-blend-mode: screen;
        }
        @keyframes rotateRays {
          0% {transform: translate(-50%, -50%) rotate(0deg);}
          100% {transform: translate(-50%, -50%) rotate(360deg);}
        }

        .stars-layer { position: absolute; top: 0; left: 0; width: 100%; height: 100%; }
        .star {
          position: absolute; border-radius: 50%; opacity: 0.15;
          animation: floatAndTwinkle infinite linear;
        }
        @keyframes floatAndTwinkle {
          0% {transform: translate(0, 0) scale(0.8); opacity: 0.25;}
          50% {transform: translate(30px, -30px) scale(1.4); opacity: 1;}
          100% {transform: translate(60px, -60px) scale(0.8); opacity: 0.25;}
        }

        /* Vivid neon orbs floating smoothly */
        .glow-orb {position: absolute; border-radius: 50%; filter: blur(140px); opacity: 0.32; mix-blend-mode: screen; animation: floatOrb 25s infinite ease-in-out alternate;}
        .orb-1 {width: 500px; height: 500px; background: radial-gradient(circle, rgba(99, 102, 241, 0.55) 0%, transparent 80%); top: -10%; left: -10%;}
        .orb-2 {width: 600px; height: 600px; background: radial-gradient(circle, rgba(236, 72, 153, 0.35) 0%, transparent 80%); bottom: -10%; right: -10%; animation-duration: 35s;}
        .orb-3 {width: 450px; height: 450px; background: radial-gradient(circle, rgba(168, 85, 247, 0.45) 0%, transparent 80%); top: 40%; left: 60%; animation-duration: 20s;}
        .orb-4 {width: 350px; height: 350px; background: radial-gradient(circle, rgba(6, 182, 212, 0.35) 0%, transparent 80%); bottom: 20%; left: 10%; animation-duration: 30s;}
        @keyframes floatOrb {
          0% {transform: translate(0, 0) scale(1) rotate(0deg);}
          50% {transform: translate(60px, -60px) scale(1.15) rotate(180deg);}
          100% {transform: translate(-40px, 40px) scale(0.9) rotate(360deg);}
        }

        /* Transparent background containers on sections */
        section { position: relative; z-index: 1; background: transparent !important; }

        /* Navigation Header Block with dark blur */
        nav {display: flex; justify-content: space-between; align-items: center; padding: 20px 10%; background: rgba(3, 1, 10, 0.6); backdrop-filter: blur(20px); position: fixed; width: 100%; top: 0; z-index: 1000; border-bottom: 1px solid rgba(255, 255, 255, 0.03);}
        .logo {
          font-size: 26px; font-weight: 900; color: #f8fafc; letter-spacing: 1.5px; text-transform: uppercase;
          background: linear-gradient(135deg, #ffffff 30%, #a5b4fc 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          position: relative; cursor: pointer; transition: transform 0.3s ease;
        }
        .logo::after { content: ''; position: absolute; width: 6px; height: 6px; background: #6366f1; bottom: 6px; right: -8px; border-radius: 50%; box-shadow: 0 0 8px #6366f1; }
        .logo:hover { transform: scale(1.03); }

        nav ul {display: flex; list-style: none;} nav ul li {margin-left: 30px;}
        nav ul li a {text-decoration: none; color: #94a3b8; font-size: 15px; font-weight: 500; transition:.2s ease;}
        nav ul li a:hover {color: #6366f1;}

        .hero {min-height: 100vh; display: flex; align-items: center; justify-content: space-between; padding: 140px 10% 80px; gap: 60px; flex-wrap: wrap;}
        .left {flex: 1.2; min-width: 300px;}
        .left h3 {font-size: 16px; font-weight: 600; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 12px; color: #6366f1;}
        .left h1 {font-size: 52px; font-weight: 800; color: #f8fafc; margin-bottom: 15px;}
        .left h2 {font-size: 32px; color: #cbd5e1; height: 45px; margin-bottom: 25px;}
        .left p {line-height: 1.7; margin-bottom: 35px; font-size: 17px; color: #94a3b8;}
        .hero-actions {display: flex; gap: 15px; margin-bottom: 35px; flex-wrap: wrap;}

        .btn {
          padding: 12px 28px; background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); border: none; border-radius: 8px; font-size: 15px; color: white; font-weight: 600; text-decoration: none; cursor: pointer; display: inline-block; text-align: center; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 14 rgba(99, 102, 241, 0.3);
        }
        .btn:hover { background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5); }
        .btn:active { transform: translateY(0); }
        .btn-outline { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.12); color: #f1f5f9; box-shadow: none; }
        .btn-outline:hover { background: rgba(255, 255, 255, 0.06); border-color: #6366f1; color: white; box-shadow: 0 4px 14px rgba(99, 102, 241, 0.15); }

        .social-icons {display: flex; gap: 15px;}
        .social-icon, .music-social-btn {
          display: flex; align-items: center; justify-content: center; width: 44px; height: 44px; border-radius: 10px; background: rgba(15, 23, 42, 0.45); color: #94a3b8; border: 1px solid rgba(255, 255, 255, 0.04); cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); font-size: 16px;
        }
        .social-icon:hover, .music-social-btn:hover { background: #6366f1; color: white; transform: translateY(-3px); box-shadow: 0 4px 12px rgba(99, 102, 241, 0.35); border-color: rgba(255, 255, 255, 0.2); }
        .whatsapp-icon:hover { background: #22c55e !important; box-shadow: 0 4px 12px rgba(34, 197, 94, 0.35) !important; }
        .music-social-btn.playing { background: #6366f1; color: white; box-shadow: 0 0 15px rgba(99, 102, 241, 0.6); }
        
        .right {flex: 0.9; display: flex; justify-content: center; position: relative;}
        .right::before { content: ''; position: absolute; width: 350px; height: 350px; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; background: linear-gradient(45deg, #6366f1, #a5b4fc); filter: blur(30px); opacity: 0.4; z-index: -1; animation: morphGlow 8s ease-in-out infinite alternate; }
        .profile-img-wrapper { width: 340px; height: 340px; border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; overflow: hidden; border: 3px solid rgba(255, 255, 255, 0.12); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.5); animation: advancedFloat 6s infinite ease-in-out alternate, morphShape 8s ease-in-out infinite alternate; transition: transform 0.3s ease, border-color 0.3s ease; }
        .profile-img-wrapper:hover { transform: scale(1.03) rotate(1deg); border-color: #6366f1; }
        .profile-img-wrapper img { width: 100%; height: 100%; object-fit: cover; transition: transform 0.5s ease; }
        .profile-img-wrapper:hover img { transform: scale(1.05); }

        @keyframes advancedFloat {0% {transform: translateY(0);} 100% {transform: translateY(-15px);}}
        @keyframes morphShape { 0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; } 100% { border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%; } }
        @keyframes morphGlow { 0% { border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; transform: scale(1); } 100% { border-radius: 50% 50% 30% 70% / 50% 60% 40% 50%; transform: scale(1.1); } }
        .music-spin {animation: spin 3s linear infinite;} @keyframes spin { 100% { transform: rotate(360deg); } }

        /* About Section Layout */
        #about { padding: 120px 10%; position: relative; }
        .about-grid-wrapper { display: flex; gap: 50px; align-items: center; max-width: 1100px; margin: 0 auto; }
        .about-graphic-side { flex: 0.8; display: flex; justify-content: center; position: relative; min-width: 280px; }
        
        .about-glow-card {
          width: 100%; max-width: 320px; aspect-ratio: 1;
          background: rgba(15, 23, 42, 0.45);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 24px; backdrop-filter: blur(12px);
          display: flex; flex-direction: column; align-items: center; justify-content: center;
          box-shadow: 0 20px 40px rgba(0,0,0,0.3); cursor: pointer; user-select: none;
          transition: transform 0.2s ease, border-color 0.4s ease, box-shadow 0.4s ease;
        }
        .about-glow-card:hover { border-color: rgba(99, 102, 241, 0.4); box-shadow: 0 20px 40px rgba(99, 102, 241, 0.08); }
        .about-glow-card.jiggle { animation: cardJiggle 0.4s ease-in-out; }
        @keyframes cardJiggle { 0%, 100% { transform: scale(1); } 25% { transform: scale(0.96) rotate(-2deg); } 75% { transform: scale(1.04) rotate(2deg); } }
        
        .about-glow-card i {
          font-size: 56px; background: linear-gradient(135deg, #a5b4fc 0%, #6366f1 100%);
          -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 12px; filter: drop-shadow(0 0 15px rgba(99, 102, 241, 0.3));
        }
        .about-glow-card .counter-num { font-size: 42px; font-weight: 800; color: #f8fafc; line-height: 1.1; }
        .about-glow-card span { font-size: 12px; color: #94a3b8; text-transform: uppercase; letter-spacing: 2px; margin-top: 4px; }
        .about-glow-card .action-hint { font-size: 11px; color: #6366f1; margin-top: 15px; background: rgba(99, 102, 241, 0.12); padding: 4px 10px; border-radius: 20px; letter-spacing: 0.5px; font-weight: 600; }
        
        .about-content-side { flex: 1.2; }
        .about-tagline { display: inline-flex; align-items: center; gap: 8px; background: rgba(99, 102, 241, 0.08); border: 1px solid rgba(99, 102, 241, 0.15); color: #a5b4fc; padding: 6px 16px; border-radius: 30px; font-size: 13px; font-weight: 600; margin-bottom: 20px; text-transform: uppercase; letter-spacing: 0.5px; }
        .about-content-side h2 { font-size: 38px; font-weight: 800; color: #f8fafc; margin-bottom: 20px; line-height: 1.2; }
        .about-content-side h2 span { background: linear-gradient(135deg, #cbd5e1 30%, #94a3b8 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
        .about-desc { font-size: 16px; color: #94a3b8; line-height: 1.8; margin-bottom: 35px; }
        .about-desc b { color: #f1f5f9; }
        
        .about-stats-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 20px; }
        .about-stat-box { background: rgba(15, 23, 42, 0.45); border: 1px solid rgba(255, 255, 255, 0.04); border-radius: 16px; padding: 22px 20px; position: relative; overflow: hidden; transition: all 0.3s ease; }
        .about-stat-box:hover { background: rgba(15, 23, 42, 0.55); border-color: rgba(99, 102, 241, 0.2); transform: translateY(-3px); }
        .about-stat-box::before { content: ''; position: absolute; top: 0; left: 0; width: 4px; height: 100%; background: linear-gradient(180deg, #6366f1, transparent); opacity: 0; transition: opacity 0.3s; }
        .about-stat-box:hover::before { opacity: 1; }
        .about-stat-box h4 { font-size: 28px; font-weight: 800; color: #6366f1; margin-bottom: 4px; display: flex; align-items: center; gap: 2px; }
        .about-stat-box p { font-size: 14px; color: #64748b; font-weight: 500; }

        /* Education Component Items */
        #education {padding: 120px 10%;}
        .edu-container { max-width: 750px; margin: 0 auto; position: relative; padding-left: 30px; }
        .edu-container::before { content: ''; position: absolute; left: 0; top: 10px; bottom: 10px; width: 3px; background: linear-gradient(180deg, #6366f1 0%, rgba(99, 102, 241, 0.05) 100%); border-radius: 2px; }
        
        .edu-box { 
          background: rgba(15, 23, 42, 0.45); 
          backdrop-filter: blur(16px); padding: 35px; border-radius: 20px; 
          border: 1px solid rgba(255, 255, 255, 0.04); margin-bottom: 40px; 
          position: relative; transition: transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease; 
        }
        .edu-box:hover { transform: translateX(8px); border-color: rgba(99, 102, 241, 0.3); box-shadow: 0 10px 30px rgba(99, 102, 241, 0.05); }
        .edu-box::before { content: ''; position: absolute; left: -37px; top: 35px; width: 14px; height: 14px; border-radius: 50%; background: #000000; border: 3px solid #6366f1; box-shadow: 0 0 10px #6366f1; z-index: 2; transition: background-color 0.3s ease; }
        .edu-box:hover::before { background: #f8fafc; }
        .edu-box h3 { font-size: 20px; font-weight: 700; color: #f8fafc; margin-bottom: 6px; }
        .edu-box h4 { font-size: 15px; font-weight: 500; color: #a5b4fc; margin-bottom: 15px; display: flex; align-items: center; gap: 8px; }
        .edu-box p { color: #94a3b8; font-size: 15px; line-height: 1.6; margin-bottom: 20px; }
        .edu-badge { position: absolute; top: 35px; right: 35px; background: rgba(99, 102, 241, 0.12); color: #cbd5e1; padding: 6px 14px; border-radius: 30px; font-size: 12px; font-weight: 600; border: 1px solid rgba(99, 102, 241, 0.15); text-transform: uppercase; letter-spacing: 0.5px; }
        .edu-btn { padding: 8px 18px; font-size: 13px; border-radius: 6px; }

        /* Skill Stack Display Modules */
        #skills {padding: 120px 10% 220px;}
        .skills-stack {max-width: 550px; margin: 0 auto;}
        
        .skill-card {
          position: sticky; top: 100px; 
          background: rgba(15, 23, 42, 0.45); 
          border: 1px solid rgba(255, 255, 255, 0.04);
          backdrop-filter: blur(12px); padding: 30px; border-radius: 16px; margin-bottom: 30px;
        }
        .progress {width: 100%; height: 8px; background: rgba(255, 255, 255, 0.04); border-radius: 4px;}
        .progress-bar {height: 100%; border-radius: 4px; transition: width 1.2s ease-in-out;}

        /* Showcase Cards Grid */
        #projects {padding: 120px 10%;}
        .projects-container {display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;}
        
        .project-card { 
          width: 320px; 
          background: rgba(15, 23, 42, 0.45); 
          backdrop-filter: blur(12px); border-radius: 16px; overflow: hidden; 
          border: 1px solid rgba(255, 255, 255, 0.04); transition: transform 0.3s ease, border-color 0.3s ease; 
        }
        .project-card:hover { transform: translateY(-5px); border-color: rgba(99, 102, 241, 0.3); }
        .project-card img {width: 100%; height: 180px; object-fit: cover; filter: brightness(0.95);}
        .project-info {padding: 24px;}
        .project-info h3 {font-size: 20px; color: #f8fafc; margin-bottom: 8px;}
        .project-info p {font-size: 14px; color: #94a3b8; margin-bottom: 20px; min-height: 42px; line-height: 1.5;}
        .project-info .btn {width: 100%;}

        /* Form Submissions Block */
        #contact {padding: 120px 10%;}
        .contact-container {max-width: 580px; margin: 0 auto; background: rgba(15, 23, 42, 0.45); backdrop-filter: blur(16px); padding: 40px; border-radius: 20px; border: 1px solid rgba(255, 255, 255, 0.04);}
        
        .contact-form input, .contact-form textarea { 
          width: 100%; padding: 14px; margin-bottom: 20px; border: 1px solid rgba(255, 255, 255, 0.04); 
          border-radius: 10px; background: rgba(5, 5, 10, 0.5); color: white; outline: none; transition: border-color 0.3s; 
        }
        .contact-form input:focus, .contact-form textarea:focus { border-color: #6366f1; }
        
        .form-btn { width: 100%; padding: 14px; background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); color: white; border: none; border-radius: 10px; font-weight: 600; font-size: 16px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 14 rgba(99, 102, 241, 0.3); }
        .form-btn:hover { background: linear-gradient(135deg, #4f46e5 0%, #4338ca 100%); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(99, 102, 241, 0.5); }
        .form-btn:active { transform: translateY(0); }

        /* Unified Header Layout Structure */
        .title {
          text-align: center; font-size: 36px; font-weight: 800; margin-bottom: 60px; letter-spacing: 2px; text-transform: uppercase;
          background: linear-gradient(135deg, #ffffff 40%, #a5b4fc 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent;
          position: relative; display: block; width: max-content; margin-left: auto; margin-right: auto;
        }
        .title::after { content: ''; position: absolute; bottom: -12px; left: 50%; transform: translateX(-50%); width: 60px; height: 3px; background: linear-gradient(90deg, transparent, #6366f1, transparent); border-radius: 2px; box-shadow: 0 0 8px rgba(99, 102, 241, 0.6); }
        
        .thank-you-footer { padding: 80px 10% 40px; text-align: center; position: relative; z-index: 1; background: transparent !important; }
        .thank-you-text { font-size: 36px; font-weight: 900; letter-spacing: 4px; color: #ffffff; text-shadow: 0 0 20px rgba(99, 102, 241, 0.6); position: relative; display: inline-block; padding-bottom: 15px; }
        .thank-you-text::after { content: ''; position: absolute; bottom: 0; left: 50%; transform: translateX(-50%); width: 80px; height: 3px; background: linear-gradient(90deg, transparent, #6366f1, transparent); border-radius: 2px; }
        .thank-you-sub { font-size: 14px; color: #64748b; margin-top: 15px; letter-spacing: 1px; }

        /* Media Responsive Viewports */
        @media(max-width: 900px) {
          .about-grid-wrapper { flex-direction: column; text-align: center; gap: 40px; }
          .about-graphic-side { min-width: 100%; }
        }
        @media(max-width: 768px) {
          nav ul {display: none;}
          .hero {flex-direction: column-reverse; text-align: center;}
          .left h1 {font-size: 36px;}
          .profile-img-wrapper {width: 250px; height: 250px;}
          .right::before {width: 260px; height: 260px;}
          .title { font-size: 28px; }
          .thank-you-text {font-size: 26px; letter-spacing: 2px;}
          .edu-container {padding-left: 20px;}
          .edu-box {padding: 25px;}
          .edu-box::before {left: -27px; top: 28px;}
          .edu-badge {position: relative; top: 0; right: 0; display: inline-block; margin-bottom: 15px;}
        }
      `}</style>

      {/* Navbar Container */}
      <nav>
        <div className="logo">RS</div>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      {/* Hero Container */}
      <section className="hero" id="home">
        <div className="left">
          <h3>Hello, I'm</h3>
          <h1>Rutuja Shinde</h1>
          <h2>{text}</h2>
          <p>Passionate Java and Frontend Developer with knowledge of HTML, CSS, JavaScript, and responsive website design.</p>
          <div className="hero-actions">
            <a href="/resume.pdf" download="Rutuja_Shinde_Resume.pdf" className="btn">Download Resume</a>
            <a href="#contact" className="btn btn-outline">Hire Me</a>
          </div>
          <div className="social-icons">
            <a href="https://github.com/Rutuja153" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-github"></i></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/917559111512" target="_blank" rel="noreferrer" className="social-icon whatsapp-icon"><i className="fab fa-whatsapp"></i></a>
            <button className={`music-social-btn ${isPlaying ? 'playing' : ''}`} onClick={togglePlay}>
              <i className={`fas fa-compact-disc ${isPlaying ? 'music-spin' : ''}`}></i>
            </button>
          </div>
        </div>
        <div className="right">
          <div className="profile-img-wrapper">
            <img src="/rutuja.jpeg" alt="Rutuja Shinde" onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=360&h=360&q=80" }} />
          </div>
        </div>
      </section>

      {/* Action-Oriented About Section */}
      <section id="about">
        <h1 className="title">About Me</h1>
        <div className="about-grid-wrapper">
          <div className="about-graphic-side">
            <div 
              className={`about-glow-card ${isJiggling ? 'jiggle' : ''}`} 
              onClick={handleSolveAction}
            >
              <i className="fas fa-terminal"></i>
              <div className="counter-num">{solvedCount}</div>
              <span>Bugs & Problems Squashed</span>
              <div className="action-hint"><i className="fas fa-hammer"></i> Click to Fix Another!</div>
            </div>
          </div>
          <div className="about-content-side">
            <div className="about-tagline">
              <i className="fas fa-bolt" style={{marginRight: '6px'}}></i> Actively Engineering Solutions
            </div>
            <h2>Turning Complex Logic <span>Into Smooth User Interactions</span></h2>
            <p className="about-desc">
              Hello! My name is <b>Rutuja Shinde</b>. I don't just write lines of code; I architecture functional web layouts and break down structural bottlenecks. Currently completing my Computer Engineering training, I aggressively debug issues, refactor UI elements, and integrate custom logic to make platforms perform smoothly.
            </p>
            <div className="about-stats-grid">
              <div className="about-stat-box">
                <h4>2+<span style={{color: '#a5b4fc'}}>y</span></h4>
                <p>Coding & Building</p>
              </div>
              <div className="about-stat-box">
                <h4>5+</h4>
                <p>Tools Deployed</p>
              </div>
              <div className="about-stat-box">
                <h4>3+</h4>
                <p>Live Applications</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Container */}
      <section id="education">
        <h1 className="title">Education</h1>
        <div className="edu-container">
          <div className="edu-box">
            <span className="edu-badge">Current</span>
            <h3>Diploma in Computer Engineering</h3>
            <h4><i className="fas fa-university"></i> Government Polytechnic</h4>
            <p>Actively learning advanced aspects of data structures, algorithms, object-oriented concepts, and modern frontend development principles.</p>
            <button className="btn edu-btn">View Certificates</button>
          </div>
          <div className="edu-box">
            <span className="edu-badge">Completed</span>
            <h3>Secondary School Certificate (SSC)</h3>
            <h4><i className="fas fa-school"></i> Maharashtra State Board</h4>
            <p>Successfully completed core baseline schooling requirements with excellent marks and strong foundational academic performances.</p>
            <button className="btn btn-outline edu-btn">View Marksheet</button>
          </div>
        </div>
      </section>

      {/* Skills Container */}
      <section id="skills">
        <h1 className="title">My Technical Stack</h1>
        <div className="skills-stack">
          {skillsData.map((skill, index) => (
            <div className="skill-card" key={skill.name} style={{zIndex: index + 1}}>
              <h3>{skill.name}</h3><p>{skill.desc}</p>
              <div className="progress"><div className="progress-bar" style={{width: `${skill.per}%`, background: skill.color}}></div></div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Container */}
      <section id="projects">
        <h1 className="title">Featured Projects</h1>
        <div className="projects-container">
          <div className="project-card"><img src="https://picsum.photos/400/250?random=10" alt="Project 1"/><div className="project-info"><h3>Portfolio Website</h3><p>Modern and responsive personal portfolio website.</p><button className="btn">View Project</button></div></div>
          <div className="project-card"><img src="https://picsum.photos/400/250?random=11" alt="Project 2"/><div className="project-info"><h3>Amazon Clone</h3><p>Fully responsive e-commerce layout using HTML5, CSS3 and JavaScript.</p><button className="btn">View Project</button></div></div>
          <div className="project-card"><img src="https://picsum.photos/400/250?random=12" alt="Project 3"/><div className="project-info"><h3>Calculator</h3><p>Clean calculator using semantic design and JavaScript.</p><button className="btn">View Project</button></div></div>
        </div>
      </section>

      {/* Contact Container Form */}
      <section id="contact">
        <h1 className="title">Let's Connect</h1>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleFormSubmit}>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <textarea rows="5" placeholder="Your Message..." required></textarea>
            <button type="submit" className="form-btn">Send Message</button>
          </form>
        </div>
      </section>

      {/* Footer Container */}
      <footer className="thank-you-footer">
        <h2 className="thank-you-text">THANK YOU FOR VISITING</h2>
        <p className="thank-you-sub">© {new Date().getFullYear()} Rutuja Shinde. All Rights Reserved.</p>
      </footer>
    </>
  );
}

export default App;