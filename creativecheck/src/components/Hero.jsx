import LogoIcon from './LogoIcon'

export default function Hero({
  searchQuery,
  setSearchQuery
}) {
  return (
    <section
      id="discover"
      className="
        relative
        w-full
        min-h-[calc(100vh-96px)]
        overflow-hidden
        bg-[#f7eee8]
      "
    >

      {/* =====================================================
          HEADER
      ===================================================== */}

      <header
        className="
          relative
          z-30
          w-full
          h-[92px]
          bg-[#f8eee8]
          border-b
          border-[#e8d9d0]
          flex
          items-center
        "
      >
        <div
          className="
            w-full
            max-w-[1500px]
            mx-auto
            px-6
            lg:px-10
            flex
            items-center
            justify-between
            gap-8
          "
        >

          {/* LOGO */}

          <a
            href="#discover"
            className="
              flex
              items-center
              gap-3
              shrink-0
            "
          >
            <LogoIcon size={42} />

            <div className="leading-none">
              <div
                className="
                  text-[21px]
                  lg:text-[24px]
                  font-bold
                  tracking-[2px]
                  text-[#101a35]
                "
              >
                CREATIVECHECK
              </div>

              <div
                className="
                  mt-1
                  text-[7px]
                  lg:text-[8px]
                  tracking-[3px]
                  font-semibold
                  text-[#101a35]
                "
              >
                CONNECT · COLLABORATE · CREATE
              </div>
            </div>
          </a>


          {/* NAVIGATION */}

          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-7
              xl:gap-9
              text-[14px]
              xl:text-[15px]
              font-semibold
              text-[#101a35]
              whitespace-nowrap
            "
          >
            <a
              href="#discover"
              className="hover:text-[#b06a42] transition"
            >
              Discover
            </a>

            <a
              href="#categories"
              className="hover:text-[#b06a42] transition"
            >
              Professionals
            </a>

            <a
              href="#businesses"
              className="hover:text-[#b06a42] transition"
            >
              Businesses
            </a>

            <a
              href="#founder"
              className="hover:text-[#b06a42] transition"
            >
              Founder
            </a>

            <a
              href="#about"
              className="hover:text-[#b06a42] transition"
            >
              About
            </a>

            <a
              href="#resources"
              className="hover:text-[#b06a42] transition"
            >
              Resources⌄
            </a>
          </nav>


          {/* RIGHT ACTIONS */}

          <div
            className="
              flex
              items-center
              gap-4
              shrink-0
            "
          >

            <button
              type="button"
              aria-label="Search"
              className="
                hidden
                sm:flex
                items-center
                justify-center
                w-9
                h-9
                text-[#101a35]
                text-xl
              "
            >
              ⌕
            </button>

            <a
              href="#login"
              className="
                hidden
                sm:block
                text-[14px]
                font-semibold
                text-[#101a35]
                hover:text-[#b06a42]
              "
            >
              Log in
            </a>

            <a
              href="#add-profile"
              className="
                bg-[#101a35]
                text-white
                px-5
                xl:px-6
                py-3
                rounded-[8px]
                text-[13px]
                xl:text-[14px]
                font-semibold
                whitespace-nowrap
                hover:bg-[#1c2a50]
                transition
              "
            >
              Join CreativeCheck
            </a>

          </div>

        </div>
      </header>


      {/* =====================================================
          HERO
      ===================================================== */}

      <div
        className="
          relative
          w-full
          min-h-[calc(100vh-92px)]
          grid
          grid-cols-1
          lg:grid-cols-[49%_51%]
          overflow-hidden
        "
      >

        {/* ===================================================
            LEFT CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-20
            flex
            items-center
            bg-[#f8eee8]
            px-6
            sm:px-10
            lg:px-12
            xl:px-16
            py-12
            lg:py-14
          "
        >

          <div
            className="
              w-full
              max-w-[690px]
              mx-auto
              lg:mx-0
            "
          >

            {/* EYEBROW */}

            <div
              className="
                mb-5
                text-[10px]
                sm:text-[11px]
                uppercase
                tracking-[4px]
                font-bold
                text-[#8d4d7c]
              "
            >
              THE HOME OF
            </div>


            {/* TITLE */}

            <h2
              className="
                m-0
                font-serif
                text-[#101a35]
                leading-[0.9]
                tracking-[-3px]
                text-[52px]
                sm:text-[64px]
                lg:text-[68px]
                xl:text-[76px]
                2xl:text-[82px]
              "
            >
              The Home of
              <br />

              <span
                className="
                  italic
                  text-[#7d4a73]
                "
              >
                Creative Minds
              </span>
            </h2>


            {/* DESCRIPTION */}

            <p
              className="
                mt-7
                max-w-[500px]
                text-[16px]
                lg:text-[17px]
                leading-[1.55]
                text-[#20283d]
              "
            >
              Discover and connect with creative professionals
              and creative businesses worldwide.
            </p>


            {/* SEARCH */}

            <div
              className="
                mt-7
                w-full
                max-w-[690px]
                h-[58px]
                rounded-full
                bg-white/75
                border
                border-[#dfd4cf]
                flex
                items-center
                px-4
                shadow-[0_5px_20px_rgba(40,25,20,0.05)]
              "
            >

              <span
                className="
                  text-[#101a35]
                  text-[20px]
                  shrink-0
                  mr-3
                "
              >
                ⌕
              </span>

              <input
                type="text"
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                placeholder="Search creatives, skills or services..."
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  outline-none
                  text-[14px]
                  text-[#101a35]
                  placeholder:text-[#7b7f89]
                "
              />

              <div
                className="
                  hidden
                  sm:flex
                  items-center
                  h-[32px]
                  pl-5
                  ml-3
                  border-l
                  border-[#ddd4d0]
                  text-[13px]
                  font-medium
                  text-[#303548]
                  whitespace-nowrap
                "
              >
                All categories⌄
              </div>

              <button
                type="button"
                className="
                  ml-3
                  shrink-0
                  w-[42px]
                  h-[42px]
                  rounded-full
                  bg-[#101a35]
                  text-white
                  flex
                  items-center
                  justify-center
                  text-[20px]
                  hover:bg-[#25345d]
                  transition
                "
              >
                →
              </button>

            </div>


            {/* COMING NEXT */}

            <div
              className="
                mt-5
                text-[10px]
                font-bold
                tracking-[3px]
                text-[#101a35]
              "
            >
              COMING NEXT
            </div>


            {/* FEATURE CARDS */}

            <div
              className="
                mt-3
                grid
                grid-cols-2
                sm:grid-cols-3
                lg:grid-cols-5
                gap-2
                w-full
              "
            >

              {[
                ['✧', 'AI Matching', 'Smart connections'],
                ['▤', 'Projects & Opportunities', 'New opportunities every day'],
                ['▧', 'Contracts & Invoices', 'Professional tools for creatives'],
                ['▦', 'Events & Workshops', 'Learn, connect and grow'],
                ['♧', 'Business & Legal Connections', 'Connect with trusted advisors']
              ].map(([icon, title, text]) => (
                <div
                  key={title}
                  className="
                    min-w-0
                    min-h-[96px]
                    rounded-[10px]
                    border
                    border-[#dfd2cb]
                    bg-[#faf2ed]/75
                    px-3
                    py-3
                    flex
                    flex-col
                  "
                >

                  <div
                    className="
                      text-[19px]
                      leading-none
                      text-[#8d4d7c]
                    "
                  >
                    {icon}
                  </div>

                  <div
                    className="
                      mt-2
                      text-[11px]
                      leading-[1.2]
                      font-bold
                      text-[#20263a]
                    "
                  >
                    {title}
                  </div>

                  <div
                    className="
                      mt-1
                      text-[9px]
                      leading-[1.25]
                      text-[#5e6370]
                    "
                  >
                    {text}
                  </div>

                </div>
              ))}

            </div>


            {/* IMPORTANT NOTICE */}

            <div
              className="
                mt-3
                w-full
                rounded-[9px]
                border
                border-[#e3cdbd]
                bg-[#f0ded1]
                px-4
                py-3
                text-[10px]
                sm:text-[11px]
                leading-[1.4]
                text-[#30313a]
              "
            >
              <strong>Important:</strong> CreativeCheck is a connection platform only.
              <br className="hidden sm:block" />
              We do not provide legal, business or financial advice.
              We connect you with the right professionals.
            </div>

          </div>

        </div>


        {/* ===================================================
            RIGHT VISUAL
            IMPORTANT:
            NO TEXT OVERLAY.
            THE ARTWORK IS CONTAINED INSIDE THIS COLUMN.
        =================================================== */}

        <div
          className="
            relative
            min-h-[420px]
            lg:min-h-0
            overflow-hidden
            bg-[#f4e9e2]
          "
        >

          <img
            src="/assets/hero-art.jpg"
            alt=""
            className="
              absolute
              inset-0
              w-full
              h-full
              object-cover
              object-center
            "
          />

          {/* Soft edge between content and artwork */}

          <div
            className="
              absolute
              left-0
              top-0
              bottom-0
              w-10
              bg-gradient-to-r
              from-[#f8eee8]/35
              to-transparent
              pointer-events-none
            "
          />

        </div>

      </div>

    </section>
  )
}
