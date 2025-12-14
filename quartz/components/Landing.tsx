import { QuartzComponent, QuartzComponentConstructor } from "./types"
import style from "./styles/landing.scss"

const hydrangeaArt = String.raw`                                      ..-----..------..-----...
                                    ...------..------..------....
                                ... .--------------------------.....
                               .----------------.....---------------..
                            ....---------------......---------------....
                           ..--------...-----..------..-----...--------.
                       ..---------------.....----------.....---------------.
                       ..---------------.   .----------..  .---------------.
                       ..---------------.  ..----------..  .---------------..
                       ...------------.-...--..------..-......------------...
                    .......----------..------..------..-----...----------.......
                    ..-------...---..-----------....-----------...--...-------..
                    ..--------..-.-.------------.. .------------....-.--------..
                    ..----------...-------------....--------------..-----------.
                    ....--------...-------------..  .-------------..--------....
                    ....------......----------.-....-..---------..--..------....
                    ..-------...---..--------..------..--------...--...--------.
                    ..-----..--------........----------........--------..------.
                    ......--------------.   .----------.   .--------------......
                         ..-------------.....----------.....-------------..
                         ..---------------...----------...----------------..
                         ..------------------..------..-------------------..
                         ..------------------...-----..------------------..
                          ...--------...--------....--------...--------....
                            ....---..--------------------------...--....
                               .--...--------------------------...--..
                               ......--------------------------.    .
                                    ....-----..-+++++..-----....
                                      ..-----..-+++++..-----..
                 ...................          .-+++++.          ...................
                 .-+++++++++++++++-.          .-+++++..         ..+++++++++++++++..
                 .-++++++++++++++++-----.     .-+++++.      .-----+++++++++++++++-.
                 .-++++++++++++++++++++-....  .-+++++.  ....-++++++++++++++++++++-.
                  ...-++++++++++++++++++++..  .-+++++.. ..-+++++++++++++++++++-.
                    .-+++++++---++++++++++..  .-+++++.. ..++++++++++---+++++++-.
                    .-+++++++-..++++++++++..  .-+++++.  ..++++++++++-..+++++++-.
                    .-+++++++++-..  .+++++..  .-+++++.  ..+++++..  .++++++++++-.
                    ....++++++++-----..-++..  .-++++-.  ..+++-------++++++++-...
                      ..+++++++++++++..-++-....-++++-....-++-..+++++++++++++-.
                       .+++++++++++++++++++++..-++++-..+++++++++++++++++++++-.
                       ...-++++++++++++-..-+++++++++++++++-.-++++++++++++-....
                         ..-------------..--+++++++++++++-...---+---------..
                                         ....++++++++++-..  ...
                                            ...-++++-....
                                              .-++++-..
                                              .-+++++..
                                              .-+++++.
                                              .-+++++.
                                              .-+++++.
                                              .-+++++.
                                              :._+++_.`

const cloudArt = [
  String.raw`      .-~~~-.
  .- ~ ~-(       )_ _
 /                     ~ -.
|                           \
 \                         .'
   ~- . _____________ . -~`,
  String.raw`     .-~~~-.
 .- ~ ~-(       )
/                ~ -.
|                     \
 \                    /
  ~- . ______ .-~ .'`,
  String.raw`   .-~~~-.
.- ~   ~(     )_ _
/                   ~-.
|                      \
 \                     /
   ~- . _____ .-~ .'''`,
]

const folders = [
  { label: "about", href: "/about" },
  { label: "musings", href: "/musings" },
  { label: "resume", href: "/resume" },
  { label: "portfolio", href: "/portfolio" },
]

const Landing: QuartzComponent = () => {
  return (
    <section class="landing-page">
      <div class="landing-clouds" aria-hidden="true">
        {cloudArt.map((cloud, idx) => (
          <pre class={`cloud cloud${idx + 1}`} key={idx}>
            {cloud}
          </pre>
        ))}
      </div>

      <div class="landing-shell">
        <div class="landing-header">
          <span class="landing-name">Tina Zeng</span>
          <span class="landing-sub">notes, experiments, musings</span>
        </div>

        <div class="landing-hero">
          <div class="landing-ascii" role="img" aria-label="ASCII hydrangea illustration">
            <pre>{hydrangeaArt}</pre>
          </div>

          <div class="landing-folders" aria-label="Featured sections">
            {folders.map((folder) => (
              <a class="landing-folder" href={folder.href} key={folder.label}>
                <span class="folder-icon" aria-hidden="true">
                  <span class="folder-tab" />
                </span>
                <span class="folder-label">{folder.label}</span>
              </a>
            ))}
          </div>
        </div>

        <p class="landing-tagline">
          𖥧𖤣.᪥𖥧𖤣᪥ hydrangeas in purple, my favorite flowers, symbolize the desire to deeply understand.
          ᪥.𖤣𖥧᪥.𖤣𖥧
        </p>

        <div class="landing-footer">
          <div class="landing-social">
            <a href="mailto:tina.zeng@yale.edu" class="social-chip" aria-label="Email">
              ✉
            </a>
            <a
              href="https://www.linkedin.com/in/xinjie-tina-zeng/"
              class="social-chip"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              in
            </a>
            <a
              href="https://github.com/txinjiez"
              class="social-chip"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              GH
            </a>
            <a
              href="https://bsky.app/profile/tinazeng.bsky.social"
              class="social-chip"
              target="_blank"
              rel="noreferrer"
              aria-label="Bluesky"
            >
              𐐒
            </a>
          </div>
          <div class="landing-email">tina.zeng@yale.edu</div>
          <div class="landing-copy">Tina Zeng © 2025</div>
        </div>
      </div>
    </section>
  )
}

Landing.css = style

export default (() => Landing) satisfies QuartzComponentConstructor
