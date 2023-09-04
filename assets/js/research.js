/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Transformer-Based Models for Named Entity Recognition: A Comparative Study",
    authors: "Venkatakrishnan R",
    conferences: "The 14th International Conference on Computing, Communication and Networking Technologies (ICCCNT)",
    researchYr: 2023,
    citebox: "popup1",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJBImv2mFtAw8ox-8G_lomtu-Vc1rifSZXvrlBDED2hBl-2nmluolNth0GRHOKTxts8Nw&usqp=CAU",
    citation: {
      vancouver: "Venkatakrishnan R. Transformer-Based Models for Named Entity Recognition: A Comparative Study. ICCCNT 2023.",
    },
    abstract: "Evaluated and compared BERT, ALBERT, and XLM-RoBERTa on the CoNLL dataset, achieving up to 99.50% accuracy.",
    absbox: "absPopup1",
  },
  {
    title: "Transformer-Based Models for Language Identification: A Comparative Study",
    authors: "Venkatakrishnan R",
    conferences: "International Conference on System, Computation, Automation and Networking 2023",
    researchYr: 2023,
    citebox: "popup2",
    image: "https://miro.medium.com/v2/resize:fit:1400/1*hXcPKv1nTiKj7yzTdOlSoQ.gif",
    citation: {
      vancouver: "Venkatakrishnan R. Transformer-Based Models for Language Identification: A Comparative Study. ICSCAN 2023.",
    },
    abstract: "Compared DistilBERT, ALBERT, and XLM-RoBERTa for Language Identification, highlighting DistilBERT's efficiency and accuracy.",
    absbox: "absPopup2",
  },
  {
    title: "Unveiling the Power of Question-Answering Systems: Evolution, Design, and Advancements in NLP",
    authors: "Venkatakrishnan R",
    conferences: "Yet to submit",
    researchYr: "TBA",
    citebox: "popup3",
    image: "https://miro.medium.com/max/1400/1*Qo7mzv5qzKx0qyXV6h8ndata:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATkAAAChCAMAAACLfThZAAAAk1BMVEX///+216jCwsLVsMGyZ4uy1aP3+/bp8+a526u/3LO42qq73q2kwJi+4a+z06VXXlVwfmqpx51eZ1uFmHyvzqJ4iHFVW1NDQkOSqYh/kXdISUebtZCHnH5ha12Qp4aMooPa6tNseWd6i3NNUEw+Oz/n0twtIjGYsY7h7tzF37o5NDpoc2MmFiswJzMjESnE6LTRproVl+geAAAEc0lEQVR4nO3ba2/iRgCFYabbzU7mZntsD/gCjjFbt6Ft+v9/XcdsUAJJ2tUR4QM+rxRbOAmWHo1hxojFLwuGRTk0yqFdV+77l6ue7lO7rtyXX696uk+NcmiUQ6McGuXQ3pO7u2Qnz3zrcl8v2f3rZ755OXHBKEe5syiHRjk0yqFRDu0duQfK/Uxv5B6+XhRuNnKXdpuL3IP4bzdJuZdeyX003gohVHHYVwDd7ct9ON60H6X7LVOmFjurpiMqbtVhO+2PHR4rdf7vty737ePXN9mWulm2uivF0q2KSDM2Uhk3mgnQCJU5VWSyWBkppBndmd2tyy1+/+MjO2USW3Zr24/usd8unQjbfWqDr+pRxQHZ2KG1/crUbeh0ua+WxczkFou7D/FqNchBL53bWbs2XalVLRJjN6kUqqtc4u0gTCGauDe2yWYnt5jw7t/B0+vN2paboN1S67Upg/fBJUauopwoks3KZ4nNfL/3cRvyuV2tx+4e7s/tZDt0uhnKZ7m8erJah2c5HRLR+tbuxyeTyJWVfqXmKRe7O6NT5s9Cqb9GWTxGucbVVe71YOSmj3KyCrr4O9N50obE+rSrzXzl3qz4XRP5GidEo5QplOs2Lj5UxcGoyJRq4hyl6Yr467HN5nq1Tr15qVMvP8dJ2/HQ64NqjvO5k3iv5GeiHNr/yempk+Xqy0y3OJv0/kie/vlc5ZxP1j5JXyyUCfpIlG/fuwOQ1j3lpnHl+tYVQmmtpk1csCZa/RiFMq9sPBoHWdxKGQ/H4Sar3qav76nMVk7otIsr+c0wNDILdSqjXJYM+0muXYflKGVaB6Orfpmt0+V+8m1Lyk0+aRdncYNVO500T/04rf/NU9rKSc4Wj7JKbbbTaarcztgkzumyk0X/vOVknpTlLuuGvNBxzIk8TXI5Xa1SexMyFbfpSrohDtC49lqerCJmLleVxhgni03dxDHnNy4/yiXZJJdk6eZZThZbvre+ulprJ6q4VtVpa4IdjPCTXJuI7FHmvTRLPcnVQvdxzBlBuYNcPsZ3zjGETmY+pCpLdRN8FeXUqvJDo+Q2+LjiH5Xbx/V/owpPuWe6w6r0OCuZPgCb9tMVqQ7zkedZiTp8NDbtNOUuEuUodxbl0CiHRjk0yqFRDo1yaJRD43dw0N6T+3bJTr74detynxfl0CiHRjk0yqFRDo1yaJRDoxwa5dAoh0Y5NMqhUQ6NcmiUQ6McGuXQKIdGOTTKoVEOjXJolEOjHBrl0CiHRjk0yqFRDo1yaJRDoxwa5dAoh0Y5NMqhUQ6NcmiUQ6McGuXQKIdGOTTKoVEOjXJolEOjHBrl0CiHRjk0yqFRDo1yaJRDoxwa5dAoh0Y5NMqhUQ6NcmiUQ6McGuXQKIdGOTTKoVEOjXJolEOjHBrl0CiHRjk0yqFRDo1yaJRDoxwa5dAoh0Y5NMqhUQ6NcmiUQ6McGuXQKIdGOTTKoVEOjXJolEOjHBrl0CiHRjk0yqFRDo1yaJRD+/7PVU/3qV1X7paiHBrlwP4FXWJPv7NDKhgAAAAASUVORK5CYII=Ug.gif",
    citation: {
      vancouver: "Venkatakrishnan R. Unveiling the Power of Question-Answering Systems: Evolution, Design, and Advancements in NLP. Yet to submit.",
    },
    abstract: "Reviewed the history, evolution, and advancements in question-answering systems in the context of NLP.",
    absbox: "absPopup3",
  },
  {
    title: "Comparison of Deep learning approaches for DNA-binding protein classification using CNN and hybrid models",
    authors: "Siva Jyoti Natha Reddy B, Sarthak Yadav, Venkatakrishnan R, I.R Oviya",
    conferences: "WCAIAA 2023, Springer",
    researchYr: "Not specified",
    citebox: "popup1",
    image: "assets/images/research-page/DNA-binding.png",
    citation: {
      vancouver: "Siva Jyoti Natha Reddy B, Sarthak Yadav, Venkatakrishnan R, I.R Oviya. Comparison of Deep learning approaches for DNA-binding protein classification using CNN and hybrid models."
    },
    abstract: "Focused on the classification of DNA sequences using various deep learning models like CNN, CNN-LSTM, and CNN-BiLSTM.",
    absbox: "absPopup1"
  },
  {
    title: "Enhancing Breast Cancer Detection in Mammography Images: A Comprehensive Analysis",
    authors: "Venkatakrishnan R, S Sudharson, R Annamalai",
    conferences: "Not specified",
    researchYr: "Not specified",
    citebox: "popup2",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcREVtMRuvca85i5Cgsy84dgr_ghn49WpwYZOA&usqp=CAU",
    citation: {
      vancouver: "Venkatakrishnan R, S Sudharson, R Annamalai. Enhancing Breast Cancer Detection in Mammography Images: A Comprehensive Analysis."
    },
    abstract: "A comprehensive analysis of deep learning techniques for breast cancer detection, focusing on data augmentation and model evaluation.",
    absbox: "absPopup2"
  },
  {
    title: "Food Classification and Calorie Prediction using YOLO",
    authors: "Sudhorson S, Venkatakrishnan R, Harrieni Shankar, Harini K, Y Sree Harshitha, M Nikhil Reddy",
    conferences: "Not yet submitted",
    researchYr: "2023",
    citebox: "popup3",
    image: "https://2.bp.blogspot.com/-BueSEUV6LLw/VYZSZCLSyzI/AAAAAAAAjPg/qcU2NyIbucU/s1600/Food%252Bpyramid.jpg",
    citation: {
      vancouver: "Sudhorson S, Venkatakrishnan R, Harrieni Shankar, Harini K, Y Sree Harshitha, M Nikhil Reddy. Food Classification and Calorie Prediction using YOLO."
    },
    abstract: "Proposed a methodology for food image classification using the YOLO framework, evaluated using multiple metrics.",
    absbox: "absPopup3"
  },
];

AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
