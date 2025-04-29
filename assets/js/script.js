// ======== ======== ======== ======== ======== ======== ======== ======== //
//                                                                         //
//                   ALWAYS KEEP ALL THE DATA UP TO DATE                   //
//                                                                         //
// ======== ======== ======== ======== ======== ======== ======== ======== //

// ========== User Data ==========
const userData = {
    userName: "Md. Jahidul Islam Sujan",
    userTitles: [
        "Mentor - ICT Flow by Jahid",
        "Mentor - Statistics Kingdom",
        "Passionate Educator",
        "Web Designer & Developer",
        "Web Analyst & Optimizer",
        "Web Analytics Specialist",
        "WordPress Specialist",
        "UI & UX Design Specialist",
        "Collaborative Problem Solver",
    ],
    userAbout: "Dedicated mentor in ICT and statistics, guiding students while professionally excelling in web design, analytics, WordPress, and UI/UX design.",
    coverAlt: "Hello World!",
    coverUrl: "assets/img/cover.png",
    profileAlt: "Jahid",
    profileUrl: "assets/img/Jahid.png",
    socialLinks: [
        { href: "https://www.mrjis.com", imgSrc: "assets/img/svg/globe.svg", alt: "website", class: "icon-globe" },
        { href: "mailto:info@mrjis.com", imgSrc: "assets/img/svg/envelope.svg", alt: "email", class: "icon-envelope" },
        { href: "tel:+8801956185620", imgSrc: "assets/img/svg/phone.svg", alt: "phone", class: "icon-telephone" },
        { href: "https://wa.me/+8801956185620", imgSrc: "assets/img/svg/whatsapp.svg", alt: "whatsapp", class: "icon-whatsapp" },
        { href: "https://t.me/mrdeveloperjis", imgSrc: "assets/img/svg/telegram.svg", alt: "telegram", class: "icon-telegram" },
        { href: "https://www.linkedin.com/in/mrdeveloperjis", imgSrc: "assets/img/svg/linkedin.svg", alt: "linkedin", class: "icon-linkedin" },
        { href: "https://www.facebook.com/mrdeveloperjis", imgSrc: "assets/img/svg/facebook.svg", alt: "facebook", class: "icon-facebook" },
        { href: "https://www.instagram.com/mrdeveloperjis", imgSrc: "assets/img/svg/instagram.svg", alt: "instagram", class: "icon-instagram" },
        { href: "https://www.x.com/mrdeveloperjis", imgSrc: "assets/img/svg/x.svg", alt: "x", class: "icon-x" },
        { href: "https://github.com/mrdeveloperjis", imgSrc: "assets/img/svg/github.svg", alt: "github", class: "icon-github" },
    ]
};

// ======== ======== ======== ======== ======== ======== ======== ======== //
//                                                                         //
//                       NEVER MODIFY ANY CODE BELOW                       //
//                                                                         //
// ======== ======== ======== ======== ======== ======== ======== ======== //

// ========== Selectors ==========
const coverPicBox = document.querySelector('.cover-pic');
const profilePicBox = document.querySelector('.profile-pic');
const userNameBox = document.querySelector('.name');
const userTitleBox = document.querySelector('.title');
const userAboutBox = document.querySelector('.bio');
const socialBox = document.querySelector('.social');

// ========== Images ==========
const profileImg = document.createElement("img");
profileImg.src = userData.profileUrl;
profileImg.alt = userData.profileAlt;

const coverImg = document.createElement("img");
coverImg.src = userData.coverUrl;
coverImg.alt = userData.coverAlt;

// ========== Typing Effect Setup ==========
let titleIndex = 0;
let charIndex = 0;
let currentTitle = "";
let isDeleting = false;

// ========== Social Section Loading ==========
// Step 1: Remove skeleton class after 1s
// Step 2: Insert skeleton icons
// Step 3: Replace with actual icons after another 1s
setTimeout(() => {
    document.querySelectorAll(".social").forEach(el => el.classList.remove("skeleton"));
    insertSocialIcons();
}, 1000);

// ========== After 2s ==========
// Insert user details and activate gradient
setTimeout(() => {
    insertUserDetails();
    removeSkeleton();
    activateGradient();
}, 2000);

// ========== Functions ==========

// Insert User Details
function insertUserDetails() {
    userNameBox.textContent = userData.userName;
    userAboutBox.textContent = userData.userAbout;
    profilePicBox.appendChild(profileImg);
    coverPicBox.appendChild(coverImg);

    setTimeout(() => startTypingEffect(userData.userTitles), 500);
}

// Insert Social Icons
function insertSocialIcons() {
    socialBox.innerHTML = "";

    // Step 1: Insert fake skeleton icons
    for (let i = 0; i < userData.socialLinks.length; i++) {
        const skeletonDiv = document.createElement('div');
        skeletonDiv.className = 'icon skeleton';
        socialBox.appendChild(skeletonDiv);
    }

    // Step 2: After 1 second, replace skeletons with real icons
    setTimeout(() => {
        socialBox.innerHTML = "";
        userData.socialLinks.forEach(link => {
            const a = document.createElement('a');
            a.href = link.href;
            a.target = "_blank";
            a.className = `icon ${link.class}`;

            const img = document.createElement('img');
            img.src = link.imgSrc;
            img.alt = link.alt;

            a.appendChild(img);
            socialBox.appendChild(a);
        });
    }, 1000);
}

// Remove Skeleton Classes
function removeSkeleton() {
    document.querySelectorAll(".skeleton").forEach(el => el.classList.remove("skeleton"));
}

// Activate Background Gradient
function activateGradient() {
    document.querySelector("main").classList.add("active-gradient");
}

// Start Typing Animation
function startTypingEffect(titles) {
    if (titleIndex >= titles.length) titleIndex = 0;

    currentTitle = titles[titleIndex] + " ";
    let displayedText = isDeleting
        ? currentTitle.substring(0, charIndex--)
        : currentTitle.substring(0, charIndex++);

    userTitleBox.textContent = displayedText;

    let typingSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentTitle.length) {
        typingSpeed = 3000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        titleIndex++;
        typingSpeed = 100;
    }

    setTimeout(() => startTypingEffect(titles), typingSpeed);
}

// ======== ======== ======== ======== ======== ======== ======== ======== //
//                                                                         //
//                       NEVER MODIFY ANY CODE ABOVE                       //
//                                                                         //
// ======== ======== ======== ======== ======== ======== ======== ======== //