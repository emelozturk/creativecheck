export default function AddProfilePage() {
  return (
    <section
      id="add-profile"
      className="max-w-3xl mx-auto px-8 py-24"
    >
      <div className="bg-white rounded-3xl shadow-xl p-10 border border-gray-100">

        <h2 className="text-4xl font-extrabold mb-3">
          Add Your Profile
        </h2>

        <p className="text-gray-500 mb-10">
          Join the CreativeCheck directory.
        </p>

        <form className="grid gap-5">

          <input
            type="text"
            placeholder="Full Name"
            className="rounded-2xl border border-gray-200 px-5 py-4"
          />

          <input
            type="email"
            placeholder="Email"
            className="rounded-2xl border border-gray-200 px-5 py-4"
          />

          <input
            type="text"
            placeholder="Profession"
            className="rounded-2xl border border-gray-200 px-5 py-4"
          />

          <input
            type="text"
            placeholder="Category"
            className="rounded-2xl border border-gray-200 px-5 py-4"
          />

          <input
            type="text"
            placeholder="City"
            className="rounded-2xl border border-gray-200 px-5 py-4"
          />

          <input
            type="text"
            placeholder="Country"
            className="rounded-2xl border border-gray-200 px-5 py-4"
          />

          <textarea
            placeholder="Short Bio"
            rows="5"
            className="rounded-2xl border border-gray-200 px-5 py-4"
          />

          <button
            type="submit"
            className="bg-black text-white rounded-2xl py-4 font-semibold hover:opacity-90 transition"
          >
            Submit Profile
          </button>

        </form>
      </div>
    </section>
  )
}
