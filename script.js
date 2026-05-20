const profile = {
  name: 'Manish Solanki',
  title: 'SEO Specialist & Full Stack Developer',
  location: 'India',
  email: 'solankimanish7017@gmail.com',
  summary: 'SEO specialist with 1 year of hands-on ranking experience and 8 months of full stack development. I combine search optimization, AI research, and web development to help education, scholarship, and IT services clients grow organically.',
  about: '<p>I craft SEO-first digital experiences by blending on-page, off-page, technical SEO, SMO, research, and development expertise. I use AI research tools to optimize performance, content strategy, and technical site health.</p><p>My work focuses on ranking websites on Google through strong keyword strategy, fast-loading pages, and clean, responsive development using Python, PHP, MySQL, and frontend technologies. I deliver results for education, scholarship, and IT services projects by balancing organic visibility with real user experience.</p>',
  linkedin: 'https://www.linkedin.com/in/manish-solanki-6b4168238/',
  image: 'profilephoto.png'
};

const skills = [
  { name: 'SEO Strategy', level: 'Advanced' },
  { name: 'On-page SEO', level: 'Advanced' },
  { name: 'Off-page SEO', level: 'Advanced' },
  { name: 'Technical SEO', level: 'Advanced' },
  { name: 'SMO', level: 'Advanced' },
  { name: 'AI Research Tools', level: 'Advanced' },
  { name: 'Python Full Stack', level: 'Intermediate' },
  { name: 'MySQL', level: 'Intermediate' },
  { name: 'PHP', level: 'Intermediate' },
];

const projects = [
  {
    title: 'Smart Voice Assistant',
    subtitle: 'Python NLP, speech recognition, and TTS',
    description: 'Built a Python-powered voice assistant that listens, understands, and responds to voice commands with natural language intelligence. The project combines speech recognition, NLP intent parsing, text-to-speech, and command automation for a seamless hands-free experience.',
    link: 'https://github.com/Manish-Solanki7017/Voice-Assistant-Project'
  },
  {
    title: 'Student Registration Login System',
    subtitle: 'Tkinter desktop portal with MySQL backend',
    description: 'Developed a secure student registration and login system using Tkinter and MySQL, including user authentication, form validation, password protection, and database-driven record management for student details and institution workflows.',
    link: 'https://github.com/Manish-Solanki7017/Student-Registration-login-System'
  },
  {
    title: 'Personal Portfolio Design',
    subtitle: 'Modern branding with responsive UI/UX',
    description: 'Designed and implemented a premium personal portfolio with polished visuals, clear information hierarchy, and mobile-first responsiveness. The project focused on strong developer branding, smooth interactions, and performance-minded front-end delivery.',
    link: '#projects'
  }
];

const heroName = document.getElementById('hero-name');
const heroTitle = document.getElementById('hero-title');
const heroSummary = document.getElementById('hero-summary');
const profileImage = document.getElementById('profile-image');
const aboutText = document.getElementById('about-text');
const contactLocation = document.getElementById('contact-location');
const contactEmail = document.getElementById('contact-email');
const contactLinkedin = document.getElementById('contact-linkedin');
const skillsGrid = document.getElementById('skills-grid');
const projectsGrid = document.getElementById('projects-grid');

function renderProfile() {
  heroName.textContent = '';
  heroName.classList.add('typing');
  heroTitle.textContent = '';
  heroSummary.textContent = profile.summary;
  profileImage.src = profile.image;
  aboutText.innerHTML = profile.about;
  contactLocation.textContent = profile.location;
  contactEmail.href = `mailto:${profile.email}`;
  contactEmail.textContent = profile.email;
  contactLinkedin.href = profile.linkedin;
  contactLinkedin.textContent = profile.linkedin.replace('https://', '');
}

function animateTypingText(text, targetElement) {
  let index = 0;
  let isDeleting = false;
  const typingSpeed = 90;
  const pauseAfterFull = 1200;
  const pauseAfterEmpty = 600;

  targetElement.classList.add('typing');
  function step() {
    if (!isDeleting) {
      targetElement.textContent = text.slice(0, index + 1);
      index += 1;
      if (index > text.length) {
        isDeleting = true;
        setTimeout(step, pauseAfterFull);
        return;
      }
    } else {
      targetElement.textContent = text.slice(0, index - 1);
      index -= 1;
      if (index <= 0) {
        isDeleting = false;
        setTimeout(step, pauseAfterEmpty);
        return;
      }
    }

    const delay = isDeleting ? typingSpeed * 0.8 : typingSpeed;
    setTimeout(step, delay);
  }

  step();
}

function renderSkills() {
  skillsGrid.innerHTML = skills
    .map(
      (skill) => `
      <article class="card">
        <h3 class="card-title">${skill.name}</h3>
        <p class="card-text">${skill.level}</p>
      </article>
    `
    )
    .join('');
}

function renderProjects() {
  projectsGrid.innerHTML = projects
    .map(
      (project) => `
      <article class="card">
        <h3 class="card-title">${project.title}</h3>
        <p class="card-subtitle">${project.subtitle}</p>
        <p class="card-text">${project.description}</p>
        <a class="btn secondary-btn" href="${project.link}">View details</a>
      </article>
    `
    )
    .join('');
}

function init() {
  if (window.history.scrollRestoration) {
    window.history.scrollRestoration = 'manual';
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  renderProfile();
  animateTypingText(profile.name, heroName);

  const idleLoad = () => {
    renderSkills();
    renderProjects();
  };

  if ('requestIdleCallback' in window) {
    requestIdleCallback(idleLoad, { timeout: 500 });
  } else {
    setTimeout(idleLoad, 250);
  }

  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');
  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
}

init();
