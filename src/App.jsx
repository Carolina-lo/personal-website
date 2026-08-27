import profilePicture from './assets/headshot.webp'
import './App.css'

function App() {
  return (
    <div className="site">

      {/* LEFT NAVIGATION */}
      <aside className="sidebar">
        <nav>
          <a href="#about">about</a>
          <a href="#projects">projects</a>
          <a href="#contact">contact</a>
        </nav>
      </aside>


      {/* MAIN CONTENT */}
      <main className="content">

        {/* ABOUT */}
        <section id="about" className="about-section">

          <div className="about-header">
            <div className="about-text">

              <h1>Carolina Lopez</h1>

              <p>
                I build software and am interested in financial technology,
                high-performance systems, and solving interesting technical
                problems.
              </p>

              <p>
                I'm studying Computer Science at Caltech and building my experience as
                a software engineer. I enjoy working on systems that combine
                software, data, and real-world problems.
              </p>

              <p>
                In my free time, I like to run, hike, read, and play pickleball. 
              </p>

              <p>
                You can learn more about my background through my{' '}
                <a href="#projects">projects</a>, or{' '}
                <a href="#contact">connect</a> with me if you'd like to
                collaborate or chat.
              </p>

            </div>

            <div className="profile-container">
              <img
                src={profilePicture}
                alt="Carolina Lopez"
              />
            </div>
          </div>

        </section>


        {/* PROJECTS */}
        <section id="projects" className="section">

          <h2>Projects</h2>

          <div className="project-list">

           <a
                href="https://github.com/Carolina-lo/Custom-CUDA-Kernel"
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
                >
            <article className="project">
              <span className="project-number">01</span>

              <div>
              <h3>
                Custom CUDA Kernel
              </h3>
                <p>
                Custom CUDA softmax kernel optimized from naive to warp-parallel
                to float4-vectorized. 
                Matches PyTorch's native kernel speed at 
                production tensor shapes.
                </p>
              </div>
            </article>
            </a>
            <a
              href="https://github.com/Carolina-lo/credit-rates-backtester"
              target="_blank"
              rel="noopener noreferrer"
              className="project-link"
            >
              <article className="project">
                <span className="project-number">02</span>

                <div>
                  <h3>Credit/Rates Signal & Execution Backtester</h3>
                  <p>
                  A backtesting pipeline for a credit-spread mean-reversion 
                  strategy, incorporating realistic execution costs and 
                  per-trade attribution to isolate genuine signal edge from 
                  crisis-period returns.
                  </p>
                </div>
              </article>
            </a>
          </div>

        </section>


        {/* CONTACT */}
        <section id="contact" className="section contact-section">

          <h2>Contact</h2>

          <p>
            I'd love to hear from you. Feel free to reach out if you'd like
            to talk about software, technology, or potential opportunities.
          </p>

          <p>
            <a href="mailto:carolinalopezc228@gmail.com">
              carolinalopezc228@gmail.com
            </a>
          </p>

          <p>
            <a href="https://www.linkedin.com/in/carolina-lopez-197670208/" target="_blank">LinkedIn</a>
            {' · '}
            <a href="https://github.com/Carolina-lo" target="_blank">GitHub</a>
          </p>

        </section>

      </main>
    </div>
  )
}

export default App