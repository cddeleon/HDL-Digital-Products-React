import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>HDL Digital Products</title>
        <meta property="og:title" content="HDL Digital Products" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100">#</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101">#</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102">#</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103">#</span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105">Products</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Search</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Cart</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110">
              Welcome to our digital products store
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111">
              Explore our collection of digital products
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112">
              Learn more about our store and team
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113">
              Get in touch with us for any inquiries
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114">Main action</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115">Secondary action</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in eros elementum tristique. Duis cursus,
              mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam
              libero vitae erat.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117">
              Medium length hero headline goes here
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118">Digital Product 1</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119">Digital Product 2</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120">Digital Product 3</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121">
              Description of digital product 1
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122">
              Description of digital product 2
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123">
              Description of digital product 3
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Browse Now</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125">
              Explore our collection of unique and high-quality digital products
              available for purchase on Etsy.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126">Discover our digital products</span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127">Unique Digital Designs</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128">Easy Navigation</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129">Direct Etsy Link</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130">
              Discover a collection of unique and creative digital designs that
              stand out from the rest.
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131">
              Effortlessly browse through our catalog with user-friendly
              navigation that ensures a seamless experience.
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132">
              Easily access the products for sale on Etsy by following the
              direct links provided for each item.
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133">Basic plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134">Business plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135">Enterprise plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text141">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text142">$10</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text143">$20</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text144">$30</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text145">Add to Cart</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text146">$200/yr</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text147">or $200 yearly</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text148">Add to Cart</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text149">$299/yr</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text150">or $299 yearly</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text151">Add to Cart</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text152">$499/yr</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text153">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text154">Get started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text155">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text156">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text157">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text158">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text159">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text160">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text161">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text162">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text163">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text164">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text165">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text166">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text167">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text168">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text169">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text170">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text171">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text172">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text173">Feature text goes here</span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text174">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text175">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text176">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text177">Feature text goes here</span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text178">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text179">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text180">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text181">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text182">Feature text goes here</span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text183">Feature text goes here</span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text184">
              Browse through our digital products
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text185">
              Add your favorite items to the cart
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text186">
              Complete your purchase securely
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text187">
              Download your digital products instantly
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text188">
              Explore our curated collection of digital products ranging from
              art prints to digital planners.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text189">
              Simply click on the product you love and add it to your cart to
              proceed to checkout.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text190">
              Enjoy a seamless checkout process on Etsy&apos;s secure platform
              to finalize your purchase.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text191">
              Once your purchase is complete, download your digital products
              instantly and start using them right away.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text192">Highly recommend!</span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text193">Great resource for creatives!</span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text194">
              Fantastic collection of digital products!
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text195">
              Impressed with the range of products available!
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text196">
              I love the quality and uniqueness of the digital products
              available on this platform. It has helped me enhance my design
              projects effortlessly.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text197">Testimonials</span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text198">Sara Johnson</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text199">Michael Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text200">Emily Davis</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text201">Alex Rodriguez</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text202">Graphic Designer</span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text203">Photographer</span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text204">Blogger</span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text205">Web Developer</span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text206">
              Have a question or feedback? Feel free to reach out to us!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text207">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text208">Email: contact@website.com</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text209">Social Media: @websitehandle</span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text210">
              Drop us an email and we&apos;ll get back to you as soon as
              possible.
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text211">
              Connect with us on social media for updates and more.
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text212">About Us</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text213">Contact Us</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text214">FAQ</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text215">Shipping &amp; Returns</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text216">Blog</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text217">Terms and Conditions</span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text218">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text219">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
