import img1 from './imgs/mock.png'
import img2 from './imgs/mock2.png'
import react, {useState, useEffect} from 'react';


function App() {

const [img, setImg] = useState(img2);

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
  handleTimeout(handleImg); // Pass handleImg without parentheses
}, [img]);
  return (
<div>
  <div className='home-container '>
    <div className='container-fluid px-1 px-md-2 px-lg-3 px-xl-5 home-container-inner'> 
      <div className='row home-container-inner '>
        <div className='col-12 col-lg-6'>
          <div className='img-container' style={{backgroundImage: `url(${img})`}}>
          <div className='img-overlay-box'>
          <div className="content-wrapper p-3 img-overlay-box-inner">
          <h1 className='my-0'>Hello, I'm Nikola, and <br></br><a>I design experience!</a></h1>
          <p className='text-muted'>Based in: Zagreb, Croatia</p>
          </div>
          </div>
          </div>
        </div>
        <div className='col-12 col-lg-6 text-container-outer d-flex flex-column align-items-center'>

            <div className='text-container-inner px-3'>
              <p className='home-text-large'>I'm a passionate UX/UI professional with 12 years of experience in tech and over 6 years in UX research, with a background in graphic design (branding / creating marketing assets / DTP / social media / packaging) for different B2B or B2C products.
              </p>
              <br></br>
              <p className='home-text-supporting my-1 my-xl-3'>I can provide you with <b>Employee Experience</b> and <b>consistency</b> based on new or current designs <b>through all platforms,</b> and across all <b>marketing materials.</b>
              </p>
              <br></br>
              <p className='home-text-supporting  my-1 my-xl-3'>
              Strongly focused on user experience <b>research</b>, human behavior, and <b>psychology</b> as well.
              </p>
              <br></br>
               <p className='home-text-supporting  my-1 my-xl-3'>I’m a <b>product nerd</b> with a focused goal of improving people's lives through simple user-focused design solutions.
              </p>
              <br></br>
              <p className='home-text-supporting my-1  my-xl-3'>
              By improving people’s life I mean the<b> value of their time</b>. <b>Currently looking for new opportunities</b>. If you have questions please feel free to contact me at any time.
              </p>
              </div>
              <div className='nav-container mt-auto me-auto px-3'>

              <a className='navlink-item  '><p className='fixed my-1 my-xl-3'>WORKING EXPERIENCE</p></a><br></br>
              <a className='navlink-item'><p className='fixed my-1  my-xl-3'>CASE STUDIES</p></a><br></br>
              <a className='navlink-item'><p className='fixed my-1  my-xl-3'>SKILLS</p></a>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}

export default App;
