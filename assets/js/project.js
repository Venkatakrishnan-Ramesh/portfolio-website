AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "OperationalML",
    cardImage: "https://www.datascience-pm.com/wp-content/uploads/2021/06/ml-ops-venn-diagram-600.png",
    description: "Enhances ML model-building by 50%.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/tensorflow-2-555397.png",
    Previewlink: "https://github.com/Venkatakrishnan-Ramesh/OperationalML",  // Add the preview link here
    Githublink: "https://github.com/Venkatakrishnan-Ramesh/OperationalML",  // Add the GitHub link here
  },
  {
    title: "Whatify",
    cardImage: "https://d112y698adiu2z.cloudfront.net/photos/production/software_photos/002/233/266/datas/medium.jpeg",
    description: "Curbs online antisocial behavior by 70%.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/pytorch-282507.png",
    Previewlink: "https://youtu.be/_fpT53F6WX8",  // Add the preview link here
    Githublink: "https://github.com/Venkatakrishnan-Ramesh/Whatify",  // Add the GitHub link here
  },
  {
    title: "Hadoop-based Text Mining",
    cardImage: "https://cdn.educba.com/academy/wp-content/uploads/2019/11/How-MapReduce-Works.png",
    description: "A text mining system based on Hadoop.",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/hadoop-6-1175073.png",
    Previewlink: "https://github.com/Venkatakrishnan-Ramesh/MapReduce-Based-Text-Mining-and-Categorization-System",  // Add the preview link here
    Githublink: "https://github.com/Venkatakrishnan-Ramesh/MapReduce-Based-Text-Mining-and-Categorization-System#",  // Add the GitHub link here
  },
  // {
  //   title: "DNA-binding Protein Classification",
  //   cardImage: "assets/images/project-page/dna-binding.jpg",
  //   description: "Research on DNA-binding protein classification.",
  //   tagimg: "https://cdn.iconscout.com/icon/free/png-512/matlab-282292.png",
  //   Previewlink: "#",  // Add the preview link here
  //   Githublink: "#",  // Add the GitHub link here
  // },
  {
    title: "HDRisk",
    cardImage: "https://media.licdn.com/dms/image/D562DAQGKrybnS796xQ/profile-treasury-document-cover-images_480/0/1688409693909?e=1694502000&v=beta&t=5XTDDdQRqkR912vG1ykflObVVY-_NFA_Oonu_hux-8o",
    description: "Hard disk failure prediction is a critical task aimed at anticipating when a hard disk drive (HDD) is likely to fail based on its historical performance data. Approached using two main methods: supervised learning and unsupervised learning.",
    Previewlink: "https://www.linkedin.com/in/venkatakrishnan-ramesh-997409214/overlay/1635531745919/single-media-viewer?type=DOCUMENT&profileId=ACoAADYqckMBhl7TxpPaB5_W0wmlgxEH35Qf03k&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BssUehh8RQVajBdwALjmVKQ%3D%3D",
    Githublink: "https://github.com/Venkatakrishnan-Ramesh/HDRisk"
  },
  {
    title: "NFL Sports Analytics",
    cardImage: "https://media.licdn.com/dms/image/D562DAQGti5ZaeUw2CA/profile-treasury-document-cover-images_480/0/1688409297669?e=1694502000&v=beta&t=6vAn8GtggqbIIe7RcYMEAnAHjIrdey9IHRTyQx5BrrI",
    description: "Rugby Performance evaluation and player best alignment selection for sport analytics uses several datasets to categorize the best alignment of the players, utilizing next-generation stats player monitoring data.",
    Previewlink: "https://www.linkedin.com/in/venkatakrishnan-ramesh-997409214/overlay/1635531748282/single-media-viewer?type=DOCUMENT&profileId=ACoAADYqckMBhl7TxpPaB5_W0wmlgxEH35Qf03k&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BssUehh8RQVajBdwALjmVKQ%3D%3D",
    Githublink: "https://www.linkedin.com/in/venkatakrishnan-ramesh-997409214/overlay/1635531748282/single-media-viewer?type=DOCUMENT&profileId=ACoAADYqckMBhl7TxpPaB5_W0wmlgxEH35Qf03k&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BssUehh8RQVajBdwALjmVKQ%3D%3D"
  },
  {
    title: "Early Detection of Breast Cancer",
    cardImage: "https://user-images.githubusercontent.com/74406604/265603086-c433f4d7-aba3-45af-8647-6d9ad233b325.png",
    description: "Focuses on the lack of awareness and technology for breast cancer treatment. Inspired by a teammate's family experience, the project aims to improve early detection and treatment.",
    Previewlink: "https://www.youtube.com/watch?v=dZ8ItRV4ys8",
    Githublink: "https://github.com/Venkatakrishnan-Ramesh/Breast-Cancer-Detection/blob/main/README.md"
  },
  {
    title: "Sentimental Analysis on Omicron",
    cardImage: "https://media.istockphoto.com/id/1356111039/vector/cute-omicron-21-covid-variant-b-1-1-529-coronavirus-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=aFkmy_YvN1xaH7rNk0QZQck7NR3-zC9fCXJPDjWxvkw=",
    description: "Analyzes public sentiment on the emergence of the Omicron variant of COVID-19. Covers a range of emotions like fear, concern, frustration, and fatigue.",
    Previewlink: "https://www.facebook.com/100064293213228/videos/4592610324190236/",
    Githublink: "https://github.com/Venkatakrishnan-Ramesh/Sentimental-Analysis-of-Omicron"
  },
  {
    title: "Genomic Analysis and Chaos Game representation of Ratg13 and Sarscov2",
    cardImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2xoVi77s4gk3CMVf3EWfMIsqXi8m7wzrXFRNLleNH3uk1jfF7pJG2zviwchwMU_4CGj4&usqp=CAU",
    description: "Uses Chaos Game Representation (CGR) to visualize the genomic sequences of Ratg13 and Sarscov2, revealing distinct structural characteristics.",
    Previewlink: "https://github.com/Venkatakrishnan-Ramesh/Genomic-Analysis-and-Chaos-Game-representation-of-ratg13-and-sars-cov2/tree/main",
    Githublink: "https://github.com/Venkatakrishnan-Ramesh/Genomic-Analysis-and-Chaos-Game-representation-of-ratg13-and-sars-cov2/tree/main"
  },
  {
    title: "GymAI",
    cardImage: "https://media.licdn.com/dms/image/D562DAQEdqHx0BjCRWw/profile-treasury-image-shrink_800_800/0/1689388846306?e=1694502000&v=beta&t=5QV8s-M6KuRPvKW2xjlVMxMYkL2doiMB4aYhyeDWMJI",
    description: "Investigates the effectiveness of the AI-Powered Gym Trainer for Correct Form. Provides real-time feedback on form and technique, reducing the risk of injury and improving overall fitness outcomes.",
    Previewlink: "GymAI.png",
    Githublink: "#"
  },
  {
    title: "Time Series Analysis Of COVID-19 In India",
    cardImage: "https://user-images.githubusercontent.com/74406604/265608231-ecac5c72-e935-43a1-92f6-af017999d5fb.png",
    description: "Provides insights into the spread of COVID-19 in India through time series analysis. Covers key findings like rapid spread, regional differences, impact of mitigation efforts, and vaccination.",
    Previewlink: "https://github.com/Venkatakrishnan-Ramesh/Time-Series-Analysis-Of-COVID-19-In-India",
    Githublink: "https://github.com/Venkatakrishnan-Ramesh/Time-Series-Analysis-Of-COVID-19-In-India"
  }
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
