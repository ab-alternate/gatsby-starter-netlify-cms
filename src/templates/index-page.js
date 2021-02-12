import React from 'react';
import Layout from '../components/Layout';

export const IndexPageTemplate = () => (
  <div id="home">
  <div id="wrapper">
		<div id="header" className="section" data-limit=".15">
  <div className="header-bg"></div>
  <div className="header-inner">
    <a href="/" id="logo">
      <svg version="1.1" x="0px" y="0px" viewBox="0 0 400 50">
        <title>SpaceX Logo</title>
        <g className="letter_s">
          <path className="fill-white" d="M37.5,30.5H10.9v-6.6h34.3c-0.9-2.8-3.8-5.4-8.9-5.4H11.4c-5.7,0-9,2.1-9,6.7v4.9c0,4,3.4,6.3,8.4,6.3h26.9v7H1.5
          c0.9,3.8,3.8,5.8,9,5.8h27.1c5.7,0,8.5-2.2,8.5-6.9v-4.9C46.1,33.1,42.8,30.8,37.5,30.5z"/>
        </g>
        <g className="letter_p">
          <path className="fill-white" d="M91.8,18.6H59v30.7h9.3V37.5h24.2c6.7,0,10.4-2.3,10.4-7.7v-3.4C102.8,21.4,98.6,18.6,91.8,18.6z M94.8,28.4
          c0,2.2-0.4,3.4-4,3.4H68.3l0.1-8h22c4,0,4.5,1.2,4.5,3.3V28.4z"/>
        </g>
        <g className="letter_a">
          <polygon className="fill-white" points="129.9,17.3 124.3,24.2 133.8,37.3 114,37.3 109.1,42.5 137.7,42.5 142.6,49.3 153.6,49.3 	"/>
        </g>
        <g className="letter_c">
          <path className="fill-white" d="M171.4,23.9h34.8c-0.9-3.6-4.4-5.4-9.4-5.4h-26c-4.5,0-8.8,1.8-8.8,6.7v17.2c0,4.9,4.3,6.7,8.8,6.7h26.3
          c6,0,8.1-1.7,9.1-5.8h-34.8V23.9z"/>
        </g>
        <g className="letter_e">
          <polygon className="fill-white" points="228.3,43.5 228.3,34.1 247,34.1 247,28.9 218.9,28.9 218.9,49.3 260.4,49.3 260.4,43.5 	"/>
          <rect className="fill-white" x="219.9" y="18.6" width="41.9" height="5.4"/>
        </g>
        <g className="letter_x">
          <path className="fill-white" d="M287.6,18.6H273l17.2,12.6c2.5-1.7,5.4-3.5,8-5L287.6,18.6z"/>
          <path className="fill-white" d="M308.8,34.3c-2.5,1.7-5,3.6-7.4,5.4l13,9.5h14.7L308.8,34.3z"/>
        </g>
        <g className="letter_swoosh">
          <path className="fill-white" d="M399,0.7c-80,4.6-117,38.8-125.3,46.9l-1.7,1.6h14.8C326.8,9.1,384.3,2,399,0.7L399,0.7z"/>
        </g>
      </svg>
    </a>
    <div id="navigation">
      <ul className="nav-links">
        <li className="nav-item"><a href="/vehicles/falcon-9/">Falcon 9</a></li>
        <li className="nav-item"><a href="/vehicles/falcon-heavy/">Falcon Heavy</a></li>
        <li className="nav-item"><a href="/vehicles/dragon/">Dragon</a></li>
        <li className="nav-item"><a href="/vehicles/starship/">Starship</a></li>
        <li className="nav-item"><a href="/human-spaceflight/">Human Spaceflight</a></li>
        <li className="nav-item"><a href="/rideshare/">Rideshare</a></li>
      </ul>
    </div>
  </div>

  <div id="navigation-right">
    <ul className="nav-links">
      <li className="nav-item"><a href="https://shop.spacex.com/" rel="noopener noreferrer" target="_blank">SHOP</a></li>
    </ul>
  </div>

  <div id="menu-close"></div>
  <div id="menu">
    <div id="menu-background"></div>
    <div id="menu-navigation">
      <ul className="nav-links">
        <li className="nav-item primary"><a href="/vehicles/falcon-9/">Falcon 9</a></li>
        <li className="nav-item primary"><a href="/vehicles/falcon-heavy/">Falcon Heavy</a></li>
        <li className="nav-item primary"><a href="/vehicles/dragon/">Dragon</a></li>
        <li className="nav-item primary"><a href="/vehicles/starship/">Starship</a></li>
        <li className="nav-item primary"><a href="/human-spaceflight/">Human Spaceflight</a></li>
        <li className="nav-item primary"><a href="/rideshare/">Rideshare</a></li>
        <li className="nav-item secondary"><a href="/mission/">Mission</a></li>
        <li className="nav-item secondary"><a href="/launches/">Launches</a></li>
        <li className="nav-item secondary"><a href="/careers/">Careers</a></li>
        <li className="nav-item secondary"><a href="/updates/">Updates</a></li>
        <li className="nav-item secondary"><a href="https://shop.spacex.com/" rel="noopener noreferrer" target="_blank">Shop</a></li>
      </ul>
    </div>
  </div>
  <button id="hamburger" aria-expanded="false" aria-controls="menu" aria-label="Menu">
    <div id="bar1" className="bar"></div>
    <div id="bar2" className="bar"></div>
    <div id="bar3" className="bar"></div>
  </button>
</div>

			<div id="feature" className="section">
				<div id="parallax" className="background background-video-cover" data-desktop="img/StarlinkL18_05_DSC_3713.jpg" data-mobile="img/StarlinkL18_05_DSC_3713.jpg"></div>
				<div className="section-inner feature">
					<div className="inner-left-bottom">
						<h4 className="animate">RECENT LAUNCH</h4>
						<h1 className="animate shadowed">STARLINK MISSION</h1>
						<a className="btn animate" tabIndex="0" href="/launches/">
							<div className="hover"></div>
							<span className="text">Replay</span>
						</a>
					</div>
					<div id="scrollme">
						<svg width="30px" height="20px">
							<path stroke="#ffffff" strokeWidth="2px" d="M2.000,5.000 L15.000,18.000 L28.000,5.000 "/>
						</svg>
					</div>
				</div>
			</div>

      <div className="section">
				<div className="background" data-preload data-speed="0.001" data-desktop="img/Starshipascent.jpg" data-mobile="img/Starshipascent.jpg"></div>
				<div className="section-inner feature">
					<div className="inner-left-bottom">
						<h2 className="animate shadowed">Starship</h2>
						<p className="animate">Starship is SpaceX’s fully reusable transportation system designed to carry both crew and cargo to the Earth’s orbit, the Moon, Mars, and beyond.</p>
						<a className="btn animate" tabIndex="0" href="/vehicles/starship">
							<div className="hover"></div>
							<span className="text">LEARN MORE</span>
						</a>
					</div>
				</div>
			</div>

			<div className="section" data-title="Crew-1 Recap">
				<div className="background" data-preload data-speed="0.001" data-desktop="img/dragon-window-desktop.jpg" data-mobile="img/dragon-window.jpg"></div>
				<div className="section-inner feature">
					<div className="inner-left-bottom">
						<h2 className="animate shadowed">CREW-1 MISSION</h2>
						<p className="animate shadowed">Watch the Crew-1 mission from the beginning.</p>
						<a className="btn animate" tabIndex="0" href="/updates/crew-1-docks-to-iss">
							<div className="hover"></div>
							<span className="text">LEARN MORE</span>
						</a>
					</div>
				</div>
			</div>

			<div className="section" data-title="ISS Docking Simulator">
				<div className="background" data-preload data-desktop="img/iss_game.jpg" data-mobile="img/iss_game.jpg"></div>
				<div className="section-inner resize">
					<div className="inner-left-bottom">
						<h2 className="animate shadowed">DRAGON DOCKING SIMULATOR</h2>
						<p className="animate shadowed">Dragon is designed to autonomously dock and undock with the International Space Station. However, the crew can take manual control of the spacecraft if necessary.</p>
						<a className="btn animate" tabIndex="0" href="https://iss-sim.spacex.com/" target="_blank" rel="noopener noreferrer">
							<div className="hover"></div>
							<span className="text">TRY NOW</span>
						</a>
					</div>
				</div>
			</div>

			<div id="footer">
  <p>
    <span>SpaceX &copy; 2021</span>
    <a href="https://twitter.com/spacex" rel="noopener noreferrer" target="_blank" className="social">TWITTER</a>
    <a href="https://www.youtube.com/spacex" rel="noopener noreferrer" target="_blank" className="social">YOUTUBE</a>
    <a href="https://www.instagram.com/spacex/" rel="noopener noreferrer" target="_blank" className="social">INSTAGRAM</a>
    <a href="https://www.flickr.com/photos/spacex" rel="noopener noreferrer" target="_blank" className="social">FLICKR</a>
    <a href="https://www.linkedin.com/company/spacex" rel="noopener noreferrer" target="_blank" className="social">LINKEDIN</a>
    <a href="/media/privacy_policy_spacex.pdf" target="_blank" className="social">PRIVACY POLICY</a>
  </p>
</div>

    </div>

	<div id="modal" className="modal" aria-modal>
<div className="modal-transform">
<div className="modal-bg"></div>
			<div className="modal-inner">
<div className="youtube-wrapper"></div>
				<span></span>
			</div>
			<a href="#" className="modal-close">
				<svg version="1.1" x="0px" y="0px" viewBox="0 0 50 50" enableBackground="new 0 0 50 50">
					<line className="line1" fill="none" x1="13" y1="13" x2="33" y2="33" strokeLinecap="square"/>
					<line className="line2" fill="none" x1="13" y1="33" x2="33" y2="13" strokeLinecap="square"/>
				</svg>
			</a>
</div>
	</div>
  </div>
);


const SpacexHomePage = () => {
  return (
    <Layout>
      <IndexPageTemplate />
    </Layout>
  );
};

export default SpacexHomePage
