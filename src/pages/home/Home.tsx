import { Star } from '@mui/icons-material/'
import './home.scss'
import { blogs, services, testimonials } from '../../utils/Utils'
import { Carousel } from 'react-responsive-carousel'
import { useState } from 'react'

export default function Home() {
  const [currentTestimonialSlide, setCurrentTestimonialSlide] = useState(0)

  const handleArrowClick = (side: String) => {
    if (side === 'left') {
      setCurrentTestimonialSlide(
        (prevSlide) =>
          (prevSlide - 1 + testimonials.length) % testimonials.length,
      )
    } else {
      setCurrentTestimonialSlide(
        (prevSlide) => (prevSlide + 1) % testimonials.length,
      )
    }
  }
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
      <div className="testimonialWrapper">
        <Carousel
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
          selectedItem={currentTestimonialSlide}
          autoPlay={true}
          interval={2000}
          onChange={(index) => setCurrentTestimonialSlide(index)}
        >
          {testimonials.map((testimonial, i) => (
            <div key={i} className="testimonial">
              <img src={testimonial.image} alt={testimonial.title} />
              <div>
                <p>{testimonial.desc}</p>
                <p style={{ fontSize: '18px' }}>
                  <span style={{ fontWeight: '600' }}>{testimonial.title}</span>{' '}
                  - {testimonial.designation}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
        <div className="arrows">
          <svg
            onClick={() => handleArrowClick('left')}
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
          >
            <path
              d="M21 11H1"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 21L1 11L11 1"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            onClick={() => handleArrowClick('right')}
          >
            <path
              d="M1 11H21"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M11 21L21 11L11 1"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="blogSection">
        <h2>Our Blogs</h2>
        <div className="blogsWrapper">
          {blogs.map((blog, i) => {
            return (
              <div className="blog" key={i}>
                <img src={blog.image} alt={blog.title} />
                <div>
                  <h3>{blog.title}</h3>
                  <p>{blog.desc}</p>
                  <span>
                    <img src="images/rightArrow.png" alt="" />
                  </span>
                </div>
              </div>
            )
          })}
        </div>
        <button>View all posts</button>
      </div>
    </div>
  )
}
