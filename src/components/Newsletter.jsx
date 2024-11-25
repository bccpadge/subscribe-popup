import { newsletterInfo } from "../constants"
export const Newsletter = () => {
  return (
    <section className="grid gap-4 p-5 bg-white rounded-lg shadow-card lg:grid-cols-minmax" aria-labelledby="newsletter-title">
      <figure>
        <img src={newsletterInfo.banner} width={380} height={380} alt="A man holding a megaphone" />
        <figcaption className="sr-only">A man holding a megaphone</figcaption>
      </figure>
      <article className="flex flex-col justify-around gap-4">
        <div>
          <h2 className="text-[1.7rem] leading-[1.1] font-bold mt-4" id="newsletter-title">{newsletterInfo.title}
          </h2>
          <p className="text-[1.25rem] mt-[0.625rem] text-neutral-700 font-bold">{newsletterInfo.description}
          </p>
        </div>
        <form action="#" className="flex flex-col gap-4">
          <label htmlFor="email" className="sr-only">Enter your email</label>
          <input className="p-3 border rounded border-accent"
            type="email" name="email" id="email" placeholder="Enter your email" required />
          <button className="p-3 font-bold uppercase transition duration-300 ease-in-out rounded-lg shadow-md bg-accent hover:bg-accent/50">
            Subscribe
            <span className="sr-only">to our newsletter for new updates</span>
          </button>
        </form>
      </article>
    </section>
  )
}