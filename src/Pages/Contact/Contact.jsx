import { Helmet } from "react-helmet-async";

const Contact = () => {
  return (
    <section className="py-6 bg-slate-200 text-black">
      <Helmet>
        <title>Real Estate|Contact</title>
      </Helmet>
      <div className="grid max-w-6xl grid-cols-1 px-6 mx-auto lg:px-8 md:grid-cols-2 md:divide-x">
        <div className="py-6 animate__animated animate__backInLeft mt-16 md:py-0 md:px-6">
          <h1 className="text-4xl font-bold">Get in touch</h1>
          <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          <div className="space-y-4">
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
              </svg>
              <span>23 Main Stree,Washington</span>
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
              </svg>
              <span>123456789</span>
            </p>
            <p className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
              <span>contact@business.com</span>
            </p>
          </div>
        </div>
        <form className="w-full bg-white mx-auto p-9 my-10 space-y-3 rounded">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Email:</span>
            </label>
            <input type="email" placeholder="email" name="email" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold text-base">Password:</span>
            </label>
            <input type="password" placeholder="password" name="password" className="input input-bordered" required />
          </div>

          <div className="form-control">
            <label className="block">
              <span className="font-semibold text-base">Message:</span>
              <textarea rows="3" className="block w-full rounded-md border-2"></textarea>
            </label>
          </div>
          <div className="form-control">
            <button className="btn mt-6 bg-[#23BE0A] text-white text-lg mb-3 uppercase">Sign In</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;