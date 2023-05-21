import img1 from './imgs/mock.png'
import img2 from './imgs/mock.png'
import react, {useState, useEffect} from 'react';
import chevron from './imgs/icons/down-chevron.png'
import CaseStudies from './CaseStudies';
function App() {

const [img, setImg] = useState(img2);
const [ visibility, setVisiblity ] = useState(false)
const handleImg = () => {
  if (img === img1) {
    setImg(img2);
  } else {
    setImg(img1);
  }
};
const handleTimeout = (fn) => {
  setTimeout(fn, 3000);
};

useEffect(() => {
  handleTimeout(handleImg);
}, [img]);

//handle the case studies "modal"
const handleVisibility = () => {
  if (visibility == false) {
    console.log('false to true')
    return setVisiblity(true)
  }
  else if ( visibility == true) {
    console.log('true to false')
    return setVisiblity(false)
  }
}

  return (
<div>
  <div className='home-container '>
    <div className='container-fluid px-1 px-lg-5 home-container-inner'> 
      <div className='row home-container-inner '>
        <div className='col-12 col-lg-6 splash-left'>
          <div className='img-container' style={{backgroundImage: `url(${img})`}}>
            <div className='img-overlay-box' onClick={handleVisibility}>
              <div className="content-wrapper p-3 img-overlay-box-inner">
                <h1 className='my-0'>Hello, I'm Nikola, and <br></br><a>I design experience!</a></h1>
                <p className='text-muted'>Based in: Zagreb, Croatia</p>
              </div>
            </div>
            <div className='down-arrow-box'>
              <img className='down-arrow-img' src={chevron}></img>
            </div>
          </div>

        </div>
        <div className='col-12 col-lg-6 text-container-outer d-flex flex-column align-items-center splash-right'>

            <div className='text-container-inner px-3'>
              <p className='home-text-large'>I'm a passionate UX/UI professional with 12 years of experience in tech and over 6 years in UX research, with a background in graphic design (branding / creating marketing assets / DTP / social media / packaging) for different B2B or B2C products.
              </p>
              <br></br>
              <p className='home-text-supporting my-3'>I can provide you with <b>Employee Experience</b> and <b>consistency</b> based on new or current designs <b>through all platforms,</b> and across all <b>marketing materials.</b>
              </p>
              <br></br>
              <p className='home-text-supporting my-3'>
              Strongly focused on user experience <b>research</b>, human behavior, and <b>psychology</b> as well.
              </p>
              <br></br>
               <p className='home-text-supporting my-3'>I’m a <b>product nerd</b> with a focused goal of improving people's lives through simple user-focused design solutions.
              </p>
              <br></br>
              <p className='home-text-supporting my-3'>
              By improving people’s life I mean the<b> value of their time</b>. <b>Currently looking for new opportunities</b>. If you have questions please feel free to contact me at any time.
              </p>
              </div>
              <div className='nav-container mt-auto me-auto px-3 '>

              <a className='navlink-item  '><p className='fixed'>WORKING EXPERIENCE</p></a><br></br>
              <a className='navlink-item'><p className='fixed'>CASE STUDIES</p></a><br></br>
              <a className='navlink-item'><p className='fixed'>SKILLS</p></a>

          </div>
        </div>
      </div>
    </div>
  </div>
  <CaseStudies visibility={visibility == false ? "hidden" : "visible"} />
</div>
  );
}

export default App;
