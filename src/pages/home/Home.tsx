import { Star } from '@mui/icons-material/'
import './home.scss'
import { services } from '../../utils/Utils'
import Blogs from '../../components/blogs/Blogs'
import Testimonials from '../../components/testimonials/Testimonials'

export default function Home() {
  return (
    <div className="homeWrapper">
      <div className="introSection">
        <div className="inner">
          <h1>
            Building Brands in the <span>Digital Age</span>
          </h1>
          <p>
            Your partner in navigating the ever-evolving landscape of digital
            marketing. From conceptualization to execution, we craft tailored
            solutions that drive results and elevate your brand to new heights.
          </p>
          <button>Learn More</button>
        </div>
        <div className="inner2">
          <img src="/images/intro.png" alt="home" />
          <div>
            <span>
              <Star style={{ color: '#F8BD38' }} />
              <span>PROJECTS</span>
            </span>
            <p>
              600+<span>Done</span>
            </p>
          </div>
        </div>
      </div>
      <div className="companySection">
        <p>Powering next-gen companies</p>
        <div>
          <img src="/images/company/company1.png" alt="c1" />
          <img src="/images/company/company2.png" alt="c2" />
          <img src="/images/company/company3.png" alt="c3" />
          <img src="/images/company/company4.png" alt="c4" />
          <img src="/images/company/company5.png" alt="c5" />
        </div>
      </div>
      <div className="servicesWrapper">
        <div className="heading">
          <h2>Explore Our Services</h2>
          <p>
            We are self-service data analytics software that lets you create
            visually.
          </p>
        </div>
        <div className="servicesData">
          {services.map((item, i) => {
            return (
              <div key={i}>
                <img src={item.icon} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            )
          })}
        </div>
        <button>Learn More</button>
      </div>
      <Testimonials />
      <Blogs />
    </div>
  )
}
