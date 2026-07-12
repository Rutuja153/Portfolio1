import { useState, useEffect } from "react";

function App()
{
    const words = [
    "Web Developer",
    "Frontend Developer",
    "JavaScript Programmer"
  ];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentWord.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1000);
        }
      } else {
        setText(currentWord.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex === 0) {
          setIsDeleting(false);
          setWordIndex((wordIndex + 1) % words.length);
        }
      }
    }, isDeleting ? 70 : 120);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, wordIndex]);

  return <>
      <style>{`
       
       *{
margin:0;
padding:0;
box-sizing:border-box;
font-family:Arial,Helvetica,sans-serif;
scroll-behavior:smooth;
}

body{
background:#9443c7;
color:white;
}

/* Navbar */

nav{
display:flex;
justify-content:space-between;
align-items:center;
padding:20px 8%;
background:#111827;
position:fixed;
width:100%;
top:0;
z-index:1000;
}

.logo{
font-size:28px;
font-weight:bold;
color:#38bdf8;
}

nav ul{
display:flex;
list-style:none;
}

nav ul li{
margin-left:30px;
}

nav ul li a{
text-decoration:none;
color:white;
font-size:18px;
transition:.3s;
}

nav ul li a:hover{
color:#38bdf8;
}

/* Hero */

.hero{
height:100vh;
display:flex;
align-items:center;
justify-content:space-between;
padding:0 8%;
}

.left{
width:50%;
}

.left h3{
font-size:28px;
margin-bottom:10px;
}

.left h1{
font-size:60px;
margin-bottom:10px;
}

.left h2{
font-size:25px;
color:#38bdf8;
margin-bottom:20px;
}

.left p{
line-height:28px;
margin-bottom:30px;
font-size:18px;
}

.btn{
padding:14px 30px;
background:#38bdf8;
border:none;
border-radius:30px;
font-size:18px;
cursor:pointer;
transition:.3s;
}

.btn:hover{
background:white;
color:black;
}

.right{
width:40%;
display:flex;
justify-content:center;
}

.right img{
width:350px;
height:350px;
border-radius:50%;
border:6px solid #a855f7;
    box-shadow:0 0 40px #a855f7;
object-fit:cover;
animation:float 3s infinite ease-in-out;
}

.about-container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 60px;
    flex-wrap: wrap;
}

.about-img{
    width:350px;
    height:350px;
    border-radius:50%;
    overflow:hidden;
    border:6px solid #a855f7;
    box-shadow:0 0 40px #a855f7;
    display: flex;
    justify-content: center;
    align-items: center;
}

.about-img img{
    width:100%;
    height:100%;
    object-fit:cover;
}/* Skills Section */

.skills-container{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px;
    margin-top: 40px;
}

.skill{
    width: 350px;
    background: #1e293b;
    padding: 20px;
    border-radius: 15px;
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
    transition: 0.4s;
}

.skill:hover{
    transform: translateY(-10px);
    box-shadow: 0 0 25px #c616da;
}

.skill h3{
    color: #38bdf8;
    margin-bottom: 10px;
}

.skill p{
    margin: 10px 0 15px;
    line-height: 26px;
    color: #d1d5db;
}

.progress{
    width: 100%;
    height: 20px;
    background: #444;
    border-radius: 10px;
    overflow: hidden;
}

.progress-bar{
    height: 100%;
    background: #38bdf8;
    text-align: center;
    color: white;
    line-height: 20px;
    font-size: 14px;
    font-weight: bold;
}
/* Projects Section */

.projects-container{
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-wrap: wrap;
    margin-top: 40px;
}

.project-card{
    width: 320px;
    background: #1e293b;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 0 20px rgba(0,0,0,0.4);
    transition: 0.4s;
    text-align: center;
    padding-bottom: 20px;
}

.project-card:hover{
    transform: translateY(-10px);
    box-shadow: 0 0 25px #ce1af3;
}

.project-card img{
    width:100%;
    height:220px;
    object-fit:cover;
}

.project-card h3{
    margin:15px 0;
    color:#38bdf8;
}

.project-card p{
    padding:0 20px;
    color:white;
    line-height:25px;
}

.project-card .btn{
    margin-top:15px;
}
/* Contact Section */

.contact-container{
    display:flex;
    justify-content:space-between;
    align-items:flex-start;
    gap:50px;
    flex-wrap:wrap;
    margin-top:40px;
}

.contact-info{
    flex:1;
    min-width:300px;
}

.contact-info h2{
    color:#38bdf8;
    margin-bottom:20px;
}

.contact-info p{
    font-size:18px;
    line-height:30px;
    margin-bottom:15px;
}

.contact-form{
    flex:1;
    min-width:320px;
}

.contact-form form{
    display:flex;
    flex-direction:column;
}

.contact-form input,
.contact-form textarea{
    padding:15px;
    margin-bottom:20px;
    border:none;
    outline:none;
    border-radius:10px;
    font-size:16px;
    background:#1e293b;
    color:white;
}

.contact-form textarea{
    resize:none;
}

.contact-form .btn{
    width:200px;
    cursor:pointer;
}

.contact-form .btn:hover{
    background:white;
    color:black;
}

/* Responsive */

@media(max-width:768px){

.contact-container{
    flex-direction:column;
}

.contact-form .btn{
    width:100%;
}

}
@keyframes float{

0%{
transform:translateY(0);
}

50%{
transform:translateY(-20px);
}

100%{
transform:translateY(0);
}

}

section{
padding:100px 8%;
}

.title{
text-align:center;
font-size:40px;
margin-bottom:60px;
color:#38bdf8;
}
      `}</style>


      {/* Navbar */}
      <nav>
        <div className="logo">Portfolio</div>

        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>


      {/* Hero */}
      <section className="hero" id="home">
        <div className="left">
          <h3>Hello, I'm</h3>

          <h1>Rutuja Shinde</h1><br></br>

          <h2>{text}</h2>

          <p>
         Passionate Java Developer with knowledge of HTML, CSS, JavaScript,
and responsive website design. I enjoy creating attractive,
user-friendly, and modern websites.
          </p>

          <button className="btn">
            Download Resume
          </button>
        </div>

        <div className="right">
          <img src="/rutuja.jpeg" alt="Rutuja" />
        </div>
      </section>


      {/* About */}
      <section id="about">
        <h1 className="title">About Me</h1>

        <h2>Frontend Developer</h2>

        <p>
         Hello! My name is <b>Rutuja Shinde</b>, an enthusiastic  Developer currently pursuing
my education in Computer Science. I love learning new technologies
and building creative websites. My goal is to become a Full Stack
Developer and work on innovative projects.
        </p>

        <button class="btn">Read More</button>

      </section>


      {/* Skills */}
      <section id="skills">
        <h1 className="title">My Skills</h1>

        <p class="skill-info"><h2>I have a strong foundation in frontend web development and continuously work on improving my technical skills. 
    I enjoy creating responsive, interactive, and user-friendly websites using modern web technologies.
     I am always eager to learn new frameworks, tools, and programming concepts to enhance my knowledge and build 
     high-quality web applications.</h2></p>

<div class="skills-container">

<div class="skill">
<h3>HTML</h3>
<p>
<h2>HTML is the backbone of every website. I use HTML5 to create well-structured, semantic, and accessible web pages.</h2>
</p>

<div class="progress">
<div class="progress-bar html">90%</div>
</div>
</div>


<div class="skill">
<h3>CSS</h3>
<p>
<h2>I use CSS3 to design beautiful, responsive, and modern websites with animations, transitions, Flexbox, Grid, and media queries.</h2>
</p>

<div class="progress">
<div class="progress-bar css">85%</div>
</div>
</div>


<div class="skill">
<h3>JavaScript</h3>
<p>
<h2>helps me create interactive websites. I have experience with DOM manipulation, events, functions, loops, arrays, 
    objects, promises, async/await, and API integration.</h2>
</p>

<div class="progress">
<div class="progress-bar js">75%</div>
</div>
</div>


<div class="skill">
<h3>React JS</h3>
<p>
<h2>have basic knowledge of React and can build reusable components, manage state, and create single-page applications.</h2>
</p>

<div class="progress">
<div class="progress-bar react">65%</div>
</div>
</div>

<div class="skill">
<h3>Git & GitHub</h3>
<p>
<h2>I use Git and GitHub for version control, project management, and collaboration while developing web applications.</h2>
</p>

<div class="progress">
<div class="progress-bar git">70%</div>
</div>
</div>
</div>
      </section>





      {/* Projects */}


<section id="projects">

<h1 class="title">My Projects</h1>

<div class="projects-container">

<div class="project-card">

<img src="https://picsum.photos/400/250?random=10"/>

<h3>Portfolio Website</h3>

<p>
Modern responsive portfolio website.
</p>

<button class="btn">View Project</button>

</div>

<div class="project-card">

<img src="https://picsum.photos/400/250?random=11"/>

<h3>Amazon Clone</h3>

<p>
<h2>Shopping website using HTML CSS JavaScript.</h2>
</p>

<button class="btn">View Project</button>

</div>


<div class="project-card">

<img src="https://picsum.photos/400/250?random=12"/>

<h3>Calculator</h3>

<p>
<h2>Simple calculator using JavaScript.</h2>
</p>

<button class="btn">View Project</button>

</div>

</div>

</section>


{/* Contact */}
<section id="contact">

<h1 class="title">Contact Me</h1>

<div class="contact-container">

<div class="contact-info">

<h2>Get In Touch</h2>

<p>
<h3>If you have any questions or would like to work together,
feel free to contact me. I will get back to you as soon as possible.</h3>
</p>

<p><b>Name:</b> Rutuja Shinde</p>

<p><b>Email:</b> rutushinde670@gmail.com</p>

<p><b>Phone:</b> +91 7559111512</p>

</div>

<div class="contact-form">

<form>

<input type="text" placeholder="Enter Your Name" required/>

<input type="email" placeholder="Enter Your Email" required/>

<input type="tel" placeholder="Enter Your Phone Number" required/>

<textarea rows="6" placeholder="Enter Your Message" required></textarea>

<button type="submit" class="btn">Send Message</button>

</form>

</div>

</div>


</section>

</>
}


export default App;