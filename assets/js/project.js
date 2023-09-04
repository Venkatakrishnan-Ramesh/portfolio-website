AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "OperationalML",
    cardImage: "assets/images/project-page/operationalml.jpg",
    description: "Enhances ML model-building by 50%.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/tensorflow-2-555397.png",
    Previewlink: "#",  // Add the preview link here
    Githublink: "#",  // Add the GitHub link here
  },
  {
    title: "Whatify",
    cardImage: "assets/images/project-page/whatify.jpg",
    description: "Curbs online antisocial behavior by 70%.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/pytorch-282507.png",
    Previewlink: "#",  // Add the preview link here
    Githublink: "#",  // Add the GitHub link here
  },
  {
    title: "Hadoop-based Text Mining",
    cardImage: "assets/images/project-page/hadoop.jpg",
    description: "A text mining system based on Hadoop.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/hadoop-6-1175073.png",
    Previewlink: "#",  // Add the preview link here
    Githublink: "#",  // Add the GitHub link here
  },
  {
    title: "DNA-binding Protein Classification",
    cardImage: "assets/images/project-page/dna-binding.jpg",
    description: "Research on DNA-binding protein classification.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/matlab-282292.png",
    Previewlink: "#",  // Add the preview link here
    Githublink: "#",  // Add the GitHub link here
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
