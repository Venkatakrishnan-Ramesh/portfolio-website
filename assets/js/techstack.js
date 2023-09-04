AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");

const techStack = [
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is my go-to for ML algorithms, data analysis, and backend development</li>",
  },
  {
    langImage: "assets/images/techstack-page/cpp.png",
    langName: "C++",
    langDesc: "<li>Used C++ for high-performance algorithms, computational methods, and academic projects</li>",
  },
  {
    langImage: "assets/images/techstack-page/tensorflow.png",
    langName: "TensorFlow",
    langDesc: "<li>An open-source platform for machine learning to build and train models</li>",
  },
  {
    langImage: "assets/images/techstack-page/pytorch.png",
    langName: "PyTorch",
    langDesc: "<li>Another ML framework that I've used for natural language processing and computer vision tasks</li>",
  },
  {
    langImage: "assets/images/techstack-page/matlab.png",
    langName: "MATLAB",
    langDesc: "<li>Used for numerical simulations and custom tool development</li>",
  },
  {
    langImage: "assets/images/techstack-page/hadoop.png",
    langName: "Hadoop",
    langDesc: "<li>Big data framework used for storage and large-scale processing</li>",
  },
  {
    langImage: "assets/images/techstack-page/numpy.png",
    langName: "NumPy",
    langDesc: "<li>Python library for numerical computations and data manipulation</li>",
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Version control system for tracking changes and collaborating on projects</li>",
  },
  {
    langImage: "assets/images/techstack-page/cloud.png",
    langName: "Cloud Computing",
    langDesc: "<li>Experience in deploying and maintaining cloud-based solutions</li>",
  },
];


const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
