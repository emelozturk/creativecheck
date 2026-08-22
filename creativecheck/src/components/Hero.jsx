import LogoIcon from './LogoIcon'

export default function Hero({
  searchQuery,
  setSearchQuery
}) {
  const upcoming = [
    ['✧', 'AI Matching', 'Smart connections'],
    ['▤', 'Projects & Opportunities', 'New opportunities every day'],
    ['▧', 'Contracts & Invoices', 'Professional tools for creatives'],
    ['▦', 'Events & Workshops', 'Learn, connect and grow'],
    ['♧', 'Business & Legal Connections', 'Connect with trusted advisors']
  ]

  return (
    <section
      id="discover"
      className="
        relative
        w-full
        overflow-hidden
      "
      style={{
        background: '#f4e5df',
        color: '#11172e'
      }}
    >

      {/* HEADER */}

      <header
        className="
          relative
          z-30
          w-full
          h-[68px]
          flex
          items-center
          justify-between
          px-[38px]
          bg-[#f4e5df]
          border-b
          border-[#e8d8d2]
          box-border
        "
      >

        {/* BRAND */}

        <a
          href="#discover"
          className="
            flex
            items-center
            gap-3
            no-underline
            shrink-0
          "
        >

          <div
            className="
              relative
              w-[38px]
              h-[48px]
              flex
              items-center
              justify-center
            "
          >
            <LogoIcon size={42} />
          </div>

          <div className="leading-none">

            <div
              className="
                text-[17px]
                font-extrabold
                tracking-[3px]
                text-[#11172e]
              "
            >
              CREATIVECHECK
            </div>

            <div
              className="
                mt-[5px]
                text-[8px]
                font-semibold
                tracking-[2px]
                text-[#11172e]
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
            gap-[34px]
            text-[14px]
            font-semibold
            whitespace-nowrap
          "
        >

          <a
            href="#discover"
            className="
              relative
              text-[#11172e]
              no-underline
              pb-[10px]
            "
          >
            Discover

            <span
              className="
                absolute
                left-0
                right-0
                bottom-0
                h-[2px]
                bg-[#c58a32]
              "
            />
          </a>

          <a
            href="#categories"
            className="text-[#11172e] no-underline"
          >
            Professionals
          </a>

          <a
            href="#categories"
            className="text-[#11172e] no-underline"
          >
            Businesses
          </a>

          <a
            href="#founder"
            className="text-[#11172e] no-underline"
          >
            Founder
          </a>

          <a
            href="#about"
            className="text-[#11172e] no-underline"
          >
            About
          </a>

          <a
            href="#resources"
            className="text-[#11172e] no-underline"
          >
            Resources⌄
          </a>

        </nav>


        {/* HEADER ACTIONS */}

        <div
          className="
            flex
            items-center
            gap-[22px]
            text-[14px]
            font-semibold
            whitespace-nowrap
          "
        >

          <button
            type="button"
            aria-label="Search"
            onClick={() =>
              document
                .getElementById('creative-search')
                ?.focus()
            }
            className="
              hidden
              sm:block
              border-0
              bg-transparent
              text-[22px]
              leading-none
              text-[#11172e]
              cursor-pointer
              p-0
            "
          >
            ⌕
          </button>

          <a
            href="#login"
            className="
              hidden
              sm:block
              text-[#11172e]
              no-underline
            "
          >
            Log in
          </a>

          <a
            href="#add-profile"
            className="
              bg-[#111a36]
              text-white
              no-underline
              rounded-[7px]
              px-[18px]
              py-[12px]
              font-bold
              text-[14px]
              shadow-none
            "
          >
            Join CreativeCheck
          </a>

        </div>

      </header>


      {/* HERO */}

      <div
        className="
          relative
          min-h-[420px]
          w-full
          overflow-hidden
          box-border
          bg-[#f4e5df]
        "
      >

        {/* HERO ART */}

        <div
          className="
            absolute
            top-0
            right-0
            bottom-0
            w-[56%]
            overflow-hidden
            pointer-events-none
            z-0
          "
        >
          <img
            src="/assets/hero-art.jpg"
            alt=""
            className="
              absolute
              top-0
              right-0
              h-full
              w-full
              object-contain
              object-right
            "
          />
        </div>


        {/* LEFT CONTENT */}

        <div
          className="
            relative
            z-10
            w-full
            px-[50px]
            pt-[18px]
            pb-[10px]
            box-border
          "
        >

          <div
            className="
              w-[47%]
              max-w-[700px]
              min-w-0
            "
          >

            {/* HEADLINE */}

            <h1
              className="
                m-0
                mt-[5px]
                mb-[10px]
                font-medium
                text-[clamp(42px,4vw,62px)]
                leading-none
                tracking-[-2px]
                text-[#11172e]
              "
              style={{
                fontFamily: 'Georgia, "Times New Roman", serif'
              }}
            >
              The Home of

              <br />

              <em
                className="
                  text-[#73406f]
                  not-italic
                  italic
                "
                style={{
                  fontFamily: 'Georgia, "Times New Roman", serif'
                }}
              >
                Creative Minds
              </em>
            </h1>


            {/* DESCRIPTION */}

            <p
              className="
                m-0
                max-w-[430px]
                text-[16px]
                leading-[1.45]
                text-[#30354a]
              "
            >
              Discover and connect with creative professionals
              <br className="hidden sm:block" />
              and creative businesses worldwide.
            </p>


            {/* SEARCH */}

            <div
              className="
                mt-[12px]
                w-[600px]
                max-w-full
                h-[44px]
                flex
                items-center
                border
                border-[#d8c9c4]
                rounded-[24px]
                bg-white/45
                px-[15px]
                box-border
              "
            >

              <span
                className="
                  shrink-0
                  text-[18px]
                  text-[#30354a]
                  mr-2
                "
              >
                ⌕
              </span>

              <input
                id="creative-search"
                type="text"
                value={searchQuery}
                onChange={(e) =>
                  setSearchQuery(e.target.value)
                }
                placeholder="Search creatives, skills or services..."
                aria-label="Search creatives, skills or services"
                className="
                  min-w-0
                  flex-1
                  bg-transparent
                  border-0
                  outline-none
                  text-[13px]
                  text-[#30354a]
                  placeholder:text-[#77717a]
                "
              />

              <span
                className="
                  hidden
                  sm:block
                  h-[24px]
                  w-px
                  bg-[#ddd0cc]
                  mx-[14px]
                "
              />

              <span
                className="
                  hidden
                  sm:block
                  shrink-0
                  text-[13px]
                  font-semibold
                  text-[#30354a]
                  whitespace-nowrap
                "
              >
                All categories⌄
              </span>

              <button
                type="button"
                onClick={() =>
                  document
                    .getElementById('categories')
                    ?.scrollIntoView({
                      behavior: 'smooth'
                    })
                }
                className="
                  shrink-0
                  ml-[12px]
                  w-[38px]
                  h-[38px]
                  rounded-full
                  border-0
                  bg-[#111a36]
                  text-white
                  text-[20px]
                  leading-none
                  flex
                  items-center
                  justify-center
                  cursor-pointer
                "
              >
                →
              </button>

            </div>


            {/* COMING NEXT */}

            <div
              className="
                mt-[14px]
                text-[10px]
                tracking-[3px]
                font-bold
                text-[#11172e]
              "
            >
              COMING NEXT
            </div>


            {/* UPCOMING CARDS */}

            <div
              className="
                mt-[6px]
                flex
                gap-[10px]
                w-full
                overflow-hidden
              "
            >

              {upcoming.map(([icon, title, text]) => (

                <div
                  key={title}
                  className="
                    flex
                    gap-[8px]
                    w-[132px]
                    min-w-[132px]
                    h-[76px]
                    border
                    border-[#dbcac4]
                    rounded-[8px]
                    p-[11px]
                    bg-white/20
                    box-border
                    overflow-hidden
                  "
                >

                  <span
                    className="
                      shrink-0
                      text-[18px]
                      leading-none
                      text-[#73406f]
                    "
                  >
                    {icon}
                  </span>

                  <div className="min-w-0">

                    <strong
                      className="
                        block
                        text-[12px]
                        leading-[1.15]
                        font-bold
                        text-[#11172e]
                      "
                    >
                      {title}
                    </strong>

                    <small
                      className="
                        block
                        mt-[5px]
                        text-[10px]
                        leading-[1.25]
                        text-[#4e4b58]
                      "
                    >
                      {text}
                    </small>

                  </div>

                </div>

              ))}

            </div>


            {/* NOTICE */}

            <div
              className="
                mt-[10px]
                max-w-[700px]
                rounded-[8px]
                border
                border-[#d7b9a8]
                bg-[#ead4c5]
                px-[14px]
                py-[10px]
                text-[12px]
                leading-[1.35]
                text-[#30303a]
                box-border
              "
            >
              <b>Important:</b> CreativeCheck is a connection platform only.

              <br />

              We do not provide legal, business or financial advice.
              We connect you with the right professionals.
            </div>

          </div>

        </div>

      </div>

    </section>
  )
}
