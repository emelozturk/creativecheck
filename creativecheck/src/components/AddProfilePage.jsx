export default function AddProfilePage() {
  return (
    <section id="add-profile" className="max-w-3xl mx-auto px-8 py-24">
      <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">
        <h2 className="text-4xl font-extrabold mb-3">
          Add Your Profile
        </h2>

        <p className="text-gray-500 mb-10">
          Join the CreativeCheck directory.
        </p>

        <form
          action="https://formspree.io/f/mkoebgly"
          method="POST"
          target="_blank"
          className="grid gap-5"
        >
          <input name="full_name" placeholder="Full Name" required className="rounded-2xl border border-gray-200 px-5 py-4" />
          <input name="email" type="email" placeholder="Email" required className="rounded-2xl border border-gray-200 px-5 py-4" />
          <input name="profession" placeholder="Profession" required className="rounded-2xl border border-gray-200 px-5 py-4" />
          <input name="category" placeholder="Category" required className="rounded-2xl border border-gray-200 px-5 py-4" />
          <input name="city" placeholder="City" className="rounded-2xl border border-gray-200 px-5 py-4" />
          <input name="country" placeholder="Country" className="rounded-2xl border border-gray-200 px-5 py-4" />
          <input name="website" type="url" placeholder="Website" className="rounded-2xl border border-gray-200 px-5 py-4" />
          <input name="instagram" type="url" placeholder="Instagram URL" className="rounded-2xl border border-gray-200 px-5 py-4" />
          <input name="portfolio_url" type="url" placeholder="Portfolio URL" className="rounded-2xl border border-gray-200 px-5 py-4" />

          <textarea name="bio" placeholder="Short Bio" rows="5" className="rounded-2xl border border-gray-200 px-5 py-4" />

          <button type="submit" className="bg-black text-white rounded-2xl py-4 font-semibold hover:opacity-90 transition">
            Submit Profile
          </button>
        </form>
      </div>
    </section>
  )
}
