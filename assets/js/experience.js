AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "3D Data Science Intern",
    cardImage:"https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.licdn.com%2Fdms%2Fimage%2FC4D0BAQGlWgjUubMBLg%2Fcompany-logo_200_200%2F0%2F1655103522405%2Fairendertechnology_logo%3Fe%3D2147483647%26v%3Dbeta%26t%3DAMfCz9rgArrMuquY_RYWKZTOTAH1n4-X43rof0qwMxE&tbnid=VFnk4Z4Exx_ooM&vet=12ahUKEwjvkrbao7yDAxVHSWwGHanXDFUQMygAegQIARBX..i&imgrefurl=https%3A%2F%2Fin.linkedin.com%2Fcompany%2Fairendertechnology&docid=Lwa62Gbo4E8SeM&w=200&h=200&q=airender%3D&client=ubuntu&ved=2ahUKEwjvkrbao7yDAxVHSWwGHanXDFUQMygAegQIARBX",
    place: "Airender Technology", 
    time: "(Jul - Present)",
    desp: "<li>Led a pioneering project employing Gaussian splatting methods to create high-definition 3D video reconstructions,enhancing visual fidelity and depth perception. </li> <li>Pioneered the integration of advanced masking algorithms with Neural Networks to engineer a robust 3D surface sreconstruction system, significantly boosting rendering speeds and enhancing overall model precision.</li> <li>Implemented a 3D model of a human body using 3D data.</li>",


  }

  {
    title: "SURE Intern",
    cardImage: "https://upload.wikimedia.org/wikipedia/en/thumb/1/19/IIT_Hyderabad_Insignia.svg/1200px-IIT_Hyderabad_Insignia.svg.png",
    place: "IIT Hyderabad",
    time: "(May 2023 - July 2023)",
    desp: "<li>Developed a project titled Training GANs on Long-tailed Training Data.</li> <li>This imbalance can lead to biased models, as traditional GANs tend to favor generating samples from dominant classes, resulting in poor performance on underrepresented classes.</li> <li> Implemented VANILLA GAN and WGAN and experimented on benchmark datasets with 90 % accuracy.</li>",
  },
  {
    title: "Research Intern (Deep Learning)",
    cardImage: "data:image/png;base64,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",
    place: "IBM",
    time: "(Jan 2023 - Mar 2023)",
    desp: "<li>Worked  for a project Entitled Early Detection of Breast Cancer.</li><li>Utilised IBM's Snapml to increase the performance of the machine learning and deep learning model.</li><li>rained and developed a comprehensive report of increase in performance of Snapml vs Sklearn using random forest and Deep neural networks.</li>",
  },
  {
    title: "Project Intern (NLP)",
    cardImage: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0aYezDjv0_JSuxk1O0Jzh75sK4zgPcjTQjw&usqp=CAU",
    place: "BUDDI AI",
    time: "(Dec, 19 - Jan, 20)",
    desp: "<li> Leveraged NLP techniques to analyze and interpret Electronic Health Records (EHR), enhancing data-driven decision-making in healthcare delivery and operations..</li> <li>Utilized transformer-based models for summarizing extensive EHR datasets, aiding in quick and accurate clinical decisions</li> <li> Improved healthcare research outcomes by applying advanced machine learning algorithms to EHR data, identifying patterns and insights </li>",
  },
  
  {
    title: "AI Domain Mentor & Coordinator , Cognizance",
    cardImage: "https://media.licdn.com/dms/image/C560BAQGGMqVvONSiuQ/company-logo_200_200/0/1647876335377?e=1701907200&v=beta&t=4axtGvPSbuG7P0RqTcctMWhfi7bXyBvJBaWKey7BBnk",
    place: "Amrita School of Engineering, Chennai",
    time: "Dec 2021 - Jun 2022 · 7 mos",
    desp: "<li>Was Responsible for coordination of symposiums and hackathons for 200+ member Student Community.</li> <li>A well-known mentor in the domain of AI and ML.</li> <li>Skills: Data Analytics, TensorFlow, Mentoring, Organizational Leadership, Python, Problem Solving, Machine Learning.</li>",
  },
  {
    title: "President & Founder of AMC Foss",
    // cardImage: "https://media.licdn.com/dms/image/C560BAQEspRqzNAyDgw/company-logo_200_200/0/1660756869443/amcfoss_logo?e=1701907200&v=beta&t=gjPIk_wKcnYpdjL9lo7l8rg-HDQQIWewgjz1lzWrysI",
    cardImage:"https://amcfossclub.web.app/images/background.png",
    place: "Amrita School of Engineering, Chennai",
    time: "Oct 2021 - Sep 2022 · 1 yr",
    desp: "<li>A Technical Club to promote Opensource softwares.</li> <li>Provided strategic direction and developed annual goals for the 200+ member student community.</li> <li>Organized board and general meetings.</li> <li>Conducted various activities, programs for the enrichment of Student Community.</li>",
  },
  {
    title: "Summer Intern , Summer",
    cardImage: "https://www.roboticvision.org/annualreport2020/wp-content/uploads/2019/12/rv-logo.svg",
    place: "Australian Centre for Robotic Vision",
    time: "Feb 2022 · 1 mo",
    desp: "<li>A week long residential intensive course on fundamental and advanced topics in robotic vision.</li> <li>Hands-on workshop project delivered by leading national and international researchers.</li>",
  },
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "GirlScript Summer Of Code 2020",
    cardImage: "assets/images/experience-page/1.jpg",
    description:
      "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
  },
  // {
  //   title: "StudentCode-in 2020",
  //   cardImage: "assets/images/experience-page/2.jpg",
  //   description:
  //     "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
  // },
  // {
  //   title: "PClub Summer Of Code 2020",
  //   cardImage: "assets/images/experience-page/3.jpg",
  //   description:
  //     "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
  // },
  // {
  //   title: "Hakin-Codes",
  //   cardImage: "assets/images/experience-page/4.jpg",
  //   description:
  //     "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
  // },
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: "IBM zDatathon for Social Good 2022",
    subtitle: "Ranked 2nd Globally",
    image: "https://media.licdn.com/dms/image/C5622AQGmUJ5dyDa4Zg/feedshare-shrink_800/0/1668794444389?e=1696464000&v=beta&t=yr9h7ZyN5YpC5mSfkobRUtpr5CkypP0TleTwtcmCSgE",
    desp: "Ranked Global position 2nd in IBM zDatathon for social good 2022 by IBM and University of California.",
    href: "https://ibmz-cal.devpost.com/",
  },
  {
    title: "IBM Z Day Conference 2022",
    subtitle: "Top 10 Big Learner Winner",
    image: "https://media.licdn.com/dms/image/C5622AQGHs9cfE0bOtQ/feedshare-shrink_800/0/1664870069815?e=1696464000&v=beta&t=do2VjZsVmVLOaXgpnt2tUSHIXPg6syuTFSYZDy7-i4w",
    desp: "Honored as one of the Top 10 Big Learner Winners in IBM Z Day Conference 2022.",
    href: "https://www.ibm.com/community/z/ibm-zday-2022/",
  },
  {
    title: "YAH 2k22! by ACM, SVCE",
    subtitle: "2nd Place in Healthcare Solution",
    image: "https://yah2k22.netlify.app/static/media/yahlogo.447c23c7.png",
    desp: "Secured 2nd place for healthcare solution in YAH 2k22! by Association for Computing Machinery (ACM), SVCE.",
    href: "https://yah2k22.netlify.app",
  },
  {
    title: "HACKERRUPT’22 by ACE, SVCE",
    subtitle: "2nd Place",
    image: "https://www.knowafest.com/files/uploads/Poster%202%20(6)-2022100308.jpg",
    desp: "Rewarded 2nd place in HACKERRUPT’22 organized by Association of Computer Engineers (ACE), SVCE.",
    href: "#", // Update this with the actual URL
  },
  {
    title: "AWS Deep Racer Student July League",
    subtitle: "Global Rank 221",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcCKDbJuUzQBGv_Pc0anrZc-jamsnAEwDZwg&usqp=CAU",
    desp: "Secured Global Rank 221 out of 2500 in AWS Deep Racer Student July league by Amazon (Top 8 %).",
    href: "#", // Update this with the actual URL
  },
  {
    title: "PHOBOS’21 & PHOBOS’22 by Cognizance",
    subtitle: "Runner",
    image: "https://cognizance-amrita.in/static/media/logo.85036f48c6391ce220e0.png",
    desp: "Runner of PHOBOS’21 & PHOBOS’22, the intra college hackathons of Amrita Vishwa Vidyapeetam, Chennai.",
    href: "#", // Update this with the actual URL
  },
  {
    title: "Break the shackels 3.0 by IEEE BPIT",
    subtitle: "2nd Place",
    image: "https://media.licdn.com/dms/image/C510BAQGExkJjVcVB1Q/company-logo_200_200/0/1547995253254?e=2147483647&v=beta&t=RRklyhfwSejaZUa4Fu_qfFWSHLUxvWTzLMqtXhEKylQ",
    desp: "Awarded 2nd place in BTS 3.0 conducted by Institute of Electrical and Electronics Engineers (IEEE), BPIT.",
    href: "https://www.linkedin.com/posts/venkatakrishnan-ramesh-997409214_ieeebpit-activity-6866789279595597824-UzJX?utm_source=share&utm_medium=member_desktop", // Update this with the actual URL
  },
  
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
