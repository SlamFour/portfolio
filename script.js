window.addEventListener("load", () => {
  changeText();
  autoScrollDesc()

});

document.getElementById("language-button").addEventListener("click", function() {
  var dropdown = document.getElementById("language-dropdown");
  dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
});

document.querySelectorAll(".language-dropdown a").forEach(function(link) {
  link.addEventListener("click", function(e) {
      e.preventDefault();
      var lang = this.getAttribute("id");
      console.log(lang)
      var languageButton = document.getElementById('language-button');
      var backStory = document.getElementById('backstory');
      var hlDescription = document.getElementById('hl-description');
      var seeMoreBtn = document.getElementById('see-more-btn');
      var contactDescription = document.getElementById('contact-description');
      var contactButton = document.getElementById('contact-btn');
      var certs = document.getElementById('certs')

      switch (lang) {
        case 'de':
          languageButton.textContent = "Sprache...";
          break;
        case 'en':
          languageButton.textContent = "Language...";
          backStory.innerHTML = `<div>
                                <p>
                                Hello, my name is <b>Tijs</b>! I'm currently a <b>software developer</b> studying at <b>Sint-Lucas</b>, and I've been interested in programming since the age of <b>10</b>. Since then, I have furthered developing this interest in <b>college</b>. That's why I currently have several different <b>programming languages</b> under my belt. 
                                <br><br>
                                I'm a developer with experience in <b>HTML, JavaScript, C# and CSS</b> and I like playing around with <b>functions</b> and making things do what they are <b>supposed</b> to. 
                                <br><br>
                                I like to think of my <b>development journey</b> as a <b>snowball</b> rolling down a <b>hill</b>; it keeps on <b>growing</b>.
                                <br><br>
                                You'll be <b>learning</b> more about <b>me</b> on this <b>webpage</b>.
                                </p>
                                </div>`;
            hlDescription.innerText = "A recreation of Pong fully made within Unity."
            seeMoreBtn.innerText = "View More...";
            contactDescription.innerHTML = "<b>Press</b> on the button below if you'd like to contact me.";
            contactButton.innerText = "Contact";
            certs.children[1].textContent = "Student at SintLucas"; 
          break;
        case 'es':
          languageButton.textContent = "Idioma...";
          break;
        case 'nl':
          languageButton.textContent = "Taal...";
          backStory.innerHTML = `<div>
                                <p>
                                Hello, mijn naam is <b>Tijs</b>! Ik ben op dit moment een studerende software developer op het <b>Sint-Lucas</b>, en ik toonde toen ik <b>10</b> was al interesse in programmeren. Sindsdien heb ik de groei voortgezet op het <b>beroepsonderwijs</b>. Daardoor heb ik nu verschillende <b>programmeertalen</b> onder de knie. 
                                <br><br>
                                Ik ben een developer met ervaring in <b>HTML, JavaScript, C# and CSS</b> en ik vind het leuk om rond te spelen met <b>function</b> en dingen te laten werken zoals ze <b>horen</b>. 
                                <br><br>
                                Ik beschouw mijn groeipad als <b>developer</b> als een <b>sneeuwbal</b> die van een <b>heuvel</b> af rolt; hij blijft <b>groeien</b>.
                                <br><br>
                                Over <b>mij</b> ga je meer <b>leren</b> op deze <b>webpagina</b>.
                                </p>
                                </div>`;
          hlDescription.innerText = "Een recreatie van Pong volledig gemaakt met Unity";
          seeMoreBtn.innerText = "Meer Bekijken...";
          contactDescription.innerHTML = "<b>Klik</b> op de knop hieronder als je me wilt contacteren.";
          contactButton.innerText = "Contacteren";
          certs.children[1].textContent = "Student aan het SintLucas"; 
          break;
      }
      // Implement language switching logic here
      // For example, you can use if/switch statements to change the text content based on the selected language.
      // Update text on the page with text in the selected language.
      // For simplicity, I'm just changing the text of the button in this example.
      document.getElementById("language-dropdown").style.display = "none";
  });
});



function changeText() {
  const texts = ["I am", "Ik ben", "Soy", "Ich bin", "Je suis", "Sou", "Sono", "Я", "~です", "我是", "Tôi là"];

  function setText() {
    const randomIndex = Math.floor(Math.random() * texts.length);
    const e = document.getElementById("intro1");
    if (e) {
      e.textContent = texts[randomIndex];
      console.log(randomIndex);
    } else {
      console.error("Element with ID 'intro1' not found.");
    }
  }

  setInterval(setText, 2000);
}

const descContainer = document.getElementById('hl-description');
let isScrollingRight = true;
let scrollSpeed = 1;
const scrollInterval = 20;
let isPaused = false;

function autoScrollDesc() {
  if (!isPaused) {
    if (isScrollingRight) {
      descContainer.scrollLeft += scrollSpeed;
      if (descContainer.scrollLeft >= descContainer.scrollWidth - descContainer.offsetWidth) {
        isScrollingRight = false;
        isPaused = true;
        setTimeout(() => {
          isPaused = false;
        }, 200);
      }
    } else {
      descContainer.scrollLeft -= scrollSpeed;
      if (descContainer.scrollLeft <= 0) {
        isScrollingRight = true;
        isPaused = true;
        setTimeout(() => {
          isPaused = false;
        }, 200);
      }
    }
  }
}

setInterval(autoScrollDesc, scrollInterval);

const projectsContainer = document.getElementById('projects');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

const scrollAmount = 400;

leftArrow.addEventListener('click', () => {
    projectsContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

rightArrow.addEventListener('click', () => {
    projectsContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

const seeMoreBtn = document.getElementById('see-more-btn');
const showcase = document.getElementById('showcase');
const content = document.getElementById('content');

seeMoreBtn.addEventListener('click', function() {
    const rect = showcase.getBoundingClientRect();
    
    const scrollPosition = rect.top + rect.height / 2 + content.scrollTop - (content.clientHeight / 2);

    content.scrollTo({
        top: scrollPosition,
        behavior: 'smooth'
    });
});



const contactButton = document.getElementById('contact-btn');

function sendEmail() {
  const subject = encodeURIComponent('I want to hire you!');
  const body = encodeURIComponent('I am interested in giving you an opportunity at my company!');

  const mailtoLink = `mailto:tijsvdheijden88@gmail.com?subject=${subject}&body=${body}`;
  window.location.href = mailtoLink;
}

contactButton.addEventListener('click', () => {
  sendEmail();
})
