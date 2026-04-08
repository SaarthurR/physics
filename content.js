export const FORMULA_STRIP = [
  { label: "Wave speed", value: "v = &lambda;f = &lambda;/T" },
  { label: "Doppler", value: "f<sub>obs</sub> = v / (v &plusmn; v<sub>s</sub>) &times; f<sub>s</sub>" },
  { label: "Interference", value: "&Delta;&Phi; = -2&pi;&Delta;x/&lambda; + &Delta;&phi;<sub>0</sub>" },
];

export const QUICK_PROMPTS = [
  "Explain transverse vs longitudinal like I'm learning it for the first time.",
  "Why does the minus sign mean the wave moves right?",
  "Quiz me on Doppler effect sign conventions.",
  "Walk me through the pond interference problem.",
];

export const STUDY_GUIDE = {
  title: "Waves: Complete Study Guide",
  subtitle: "PW-Style | DL 1 - DL 3 | Acts 8.1 through 8.10",
  chapters: [
    {
      id: "chapter-1",
      number: "01",
      title: "What Is a Wave?",
      summary:
        "Start with the central idea: a wave is a disturbance that carries energy without transporting the medium itself.",
      tags: ["disturbance", "energy transfer", "transverse", "longitudinal", "1D / 2D / 3D"],
      plainText: `
        A wave is a disturbance that moves through a medium carrying energy without transporting the medium.
        Stadium wave: people move up and down but the disturbance travels around the stadium.
        Boat example: the boat bobs up and down but water does not flow to shore with the wave.
        Transverse waves: medium moves perpendicular to the direction of travel. Rope and water surface examples.
        Longitudinal waves: medium moves parallel to the direction of travel. Sound and slinky examples.
        Common confusion: particles oscillate around equilibrium, they do not move with the wave from source to observer.
        Dimensionality means the number of directions the wave travels, not the dimensions of the medium.
        1D wave: string. 2D wave: water ripples. 3D wave: sound spreading outward.
      `,
      sections: [
        {
          label: "Hook",
          title: "Feel It Before You Name It",
          html: `
            <p>Picture a stadium wave. Each person only lifts and lowers their arms, but the disturbance runs around the whole arena. That is the cleanest first picture of a wave: motion passing through a crowd even though the crowd itself does not travel with it.</p>
            <p>The same thing happens with ocean waves under a boat. The boat rises and falls, but the water below it is not marching to shore. The energy moves. The medium mostly stays near its own place.</p>
          `,
        },
        {
          label: "Core concept",
          title: "Transverse vs. Longitudinal",
          html: `
            <p><strong>Transverse waves</strong> move the medium <strong>perpendicular</strong> to the direction of travel. Shake a rope up and down and the disturbance runs sideways while the rope itself moves vertically.</p>
            <p><strong>Longitudinal waves</strong> move the medium <strong>parallel</strong> to the direction of travel. Sound is the classic case: compressions and rarefactions move in the same direction the sound travels.</p>
            <div class="formula-box">Common trap: longitudinal does <em>not</em> mean the air or slinky coils travel from source to observer. The particles only oscillate around equilibrium.</div>
          `,
        },
        {
          label: "Dimension",
          title: "Wave Dimensionality",
          html: `
            <p>The dimensionality of a wave means the number of directions the wave spreads in, not the number of dimensions the medium has.</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Wave type</th>
                  <th>What it means</th>
                  <th>Example</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1D</td>
                  <td>Travels in one direction</td>
                  <td>Wave on a string</td>
                </tr>
                <tr>
                  <td>2D</td>
                  <td>Spreads in a plane</td>
                  <td>Water ripples</td>
                </tr>
                <tr>
                  <td>3D</td>
                  <td>Spreads outward in all directions</td>
                  <td>Sound from a speaker</td>
                </tr>
              </tbody>
            </table>
            <p>Sound exists in 3D because it spreads outward in all directions, not just because air itself is 3D.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-2",
      number: "02",
      title: "The Sinusoidal Wave Equation",
      summary:
        "This chapter turns wave behavior into an equation you can read symbol by symbol instead of memorizing blindly.",
      tags: ["amplitude", "period", "frequency", "wavelength", "phase", "direction"],
      plainText: `
        The full wave equation is y(x,t) - y0 = A sin(2pi t/T +/- 2pi x/lambda + phi0) = A sin(Phi).
        Amplitude is the maximum displacement. Period is time for one cycle. Frequency is 1/T. Wavelength is distance for one full cycle.
        Wave speed is v = lambda/T = lambda f.
        Speed depends on medium. Frequency and period depend on source. Wavelength depends on both.
        Phi is total phase. Phi0 is the fixed phase constant from initial conditions.
        Direction rule: minus on the x term means the wave moves right. Plus on the x term means left.
        Worked example: T = 6 s, lambda = 20 m, A = 0.5 m, left-moving wave with phi0 = pi/2 gives y = 0.5 sin(2pi t/6 + 2pi x/20 + pi/2).
      `,
      sections: [
        {
          label: "Equation",
          title: "Read the Wave's ID Card",
          html: `
            <p>Every wave has a fingerprint. The equation below packages that fingerprint into one line, but the point is not to memorize symbols mechanically. The point is to know what each symbol is saying about the motion.</p>
            <div class="formula-box">y(x, t) - y<sub>0</sub> = A sin(2&pi;t/T &plusmn; 2&pi;x/&lambda; + &phi;<sub>0</sub>) = A sin(&Phi;)</div>
          `,
        },
        {
          label: "Decode it",
          title: "What Each Symbol Means",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Symbol</th>
                  <th>Meaning</th>
                  <th>What controls it</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td>Amplitude, the maximum displacement from equilibrium</td>
                  <td>Source</td>
                </tr>
                <tr>
                  <td>T</td>
                  <td>Period, time for one full cycle</td>
                  <td>Source</td>
                </tr>
                <tr>
                  <td>f = 1/T</td>
                  <td>Frequency, cycles per second</td>
                  <td>Source</td>
                </tr>
                <tr>
                  <td>&lambda;</td>
                  <td>Wavelength, spatial length of one cycle</td>
                  <td>Both source and medium</td>
                </tr>
                <tr>
                  <td>v = &lambda;f</td>
                  <td>Wave speed, how fast the disturbance moves</td>
                  <td>Medium</td>
                </tr>
                <tr>
                  <td>&Phi;</td>
                  <td>Total phase, where the wave is in its cycle</td>
                  <td>All terms together</td>
                </tr>
                <tr>
                  <td>&phi;<sub>0</sub></td>
                  <td>Fixed phase constant from initial conditions</td>
                  <td>Source</td>
                </tr>
              </tbody>
            </table>
            <p>Key idea: same source in a different medium means the frequency stays the same, but the speed and wavelength can change.</p>
          `,
        },
        {
          label: "Direction rule",
          title: "The Sign Trap Almost Everyone Hits",
          html: `
            <p>The sign on the position term tells direction:</p>
            <div class="formula-box">-2&pi;x/&lambda; &rarr; wave moves in +x (to the right)<br />+2&pi;x/&lambda; &rarr; wave moves in -x (to the left)</div>
            <p>Why does the minus sign mean right-moving? Because for a crest to show up at a larger <code>x</code> later, the phase must fall with increasing position when time is held fixed.</p>
          `,
        },
        {
          label: "Worked example",
          title: "Boat and Buoy Problem",
          html: `
            <p><strong>Given:</strong> crest every 6 s, crest spacing 20 m, amplitude 0.5 m. That means <code>T = 6 s</code>, <code>&lambda; = 20 m</code>, and <code>A = 0.5 m</code>.</p>
            <p>Wave speed follows immediately:</p>
            <div class="formula-box">v = &lambda;/T = 20/6 &asymp; 3.33 m/s</div>
            <p>If the boat at <code>x = 0</code> is at a crest when <code>t = 0</code>, then <code>sin(&phi;<sub>0</sub>) = 1</code>, so <code>&phi;<sub>0</sub> = &pi;/2</code>.</p>
            <div class="formula-box">y(x, t) = 0.5 sin(2&pi;t/6 + 2&pi;x/20 + &pi;/2)</div>
            <p>At <code>x = 5 m</code> and <code>t = 2 s</code>, the phase is <code>2&pi;/3 + &pi; &asymp; 5.76</code>, giving <code>y &asymp; -0.25 m</code>.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-3",
      number: "03",
      title: "Reading Wave Graphs",
      summary:
        "Learn how to move between pictures of waves and full equations without guessing.",
      tags: ["snapshot", "time history", "amplitude", "period", "wavelength", "direction"],
      plainText: `
        y(x) graph is a snapshot in time with wavelength read from the x-axis.
        y(t) graph is a time history at one point with period read from the t-axis.
        To build the wave equation: read amplitude, read period from y(t), read wavelength from y(x), infer direction, solve for phase constant with a known point.
        Two y(t) graphs at nearby positions reveal direction. If the farther position is shifted later in time, the wave moves in the positive x direction.
      `,
      sections: [
        {
          label: "Graph types",
          title: "Snapshot vs. Time History",
          html: `
            <p><strong>y(x)</strong> is a photo of the wave at one instant. Time is frozen, so space changes and the repeat distance on the x-axis is the wavelength.</p>
            <p><strong>y(t)</strong> is a movie of one point on the medium. Position is fixed, so time changes and the repeat distance on the time axis is the period.</p>
          `,
        },
        {
          label: "Workflow",
          title: "How to Go from Graphs to an Equation",
          html: `
            <ol>
              <li>Read <strong>A</strong> from the peak height.</li>
              <li>Read <strong>T</strong> from the <code>y(t)</code> graph.</li>
              <li>Read <strong>&lambda;</strong> from the <code>y(x)</code> graph.</li>
              <li>Infer direction from context or from two time-history graphs.</li>
              <li>Plug in one known point to solve for <strong>&phi;<sub>0</sub></strong>.</li>
            </ol>
            <p>This chapter is mostly about keeping the roles of <code>x</code> and <code>t</code> straight. Mix them up once and the whole equation slides off course.</p>
          `,
        },
        {
          label: "Direction clue",
          title: "Two y(t) Graphs at Different Positions",
          html: `
            <p>If you compare <code>y(t)</code> at <code>x = 1.0 m</code> and <code>x = 1.1 m</code>, the shift tells you direction.</p>
            <div class="formula-box">If the farther point's graph is shifted to the right in time, the wave is moving to the right.</div>
            <p>Translation: the same phase reaches the farther point later, so the disturbance must be traveling in that direction.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-4",
      number: "04",
      title: "Waves in 2D and 3D",
      summary:
        "This chapter explains wavefronts, rays, intensity falloff, and why loudness uses decibels.",
      tags: ["wavefronts", "rays", "intensity", "inverse square law", "decibels"],
      plainText: `
        Wavefronts connect points with the same phase. Rays point in the direction of travel and are perpendicular to wavefronts.
        Intensity is power per area: I = P/Area.
        In 2D, area grows like circumference 2pi r, so I is proportional to 1/r.
        In 3D, area grows like surface area 4pi r^2, so I is proportional to 1/r^2.
        Since intensity is proportional to amplitude squared, amplitude falls as 1/sqrt(r) in 2D and 1/r in 3D.
        Decibel definition: D - D0 = 10 log10(I / I0).
        A 10 dB increase means 10 times intensity but only about twice as loud. 3 dB is about twice the intensity.
        Two equal 70 dB speakers together make 76 dB because intensity quadruples.
      `,
      sections: [
        {
          label: "Visual tools",
          title: "Wavefronts and Rays",
          html: `
            <p><strong>Wavefronts</strong> connect points that share the same phase. In 2D they are lines; in 3D they are surfaces. Adjacent crests are separated by one wavelength.</p>
            <p><strong>Rays</strong> point in the direction the wave travels. They are always perpendicular to wavefronts.</p>
          `,
        },
        {
          label: "Intensity",
          title: "Why Loud Things Fade with Distance",
          html: `
            <p>Intensity is power spread over area, so if the same power has to cover a bigger wavefront, each square meter gets less of it.</p>
            <div class="formula-box">I = P / Area</div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Case</th>
                  <th>Wavefront size</th>
                  <th>Intensity trend</th>
                  <th>Amplitude trend</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>2D</td>
                  <td>2&pi;r</td>
                  <td>I &prop; 1/r</td>
                  <td>A &prop; 1/&radic;r</td>
                </tr>
                <tr>
                  <td>3D</td>
                  <td>4&pi;r<sup>2</sup></td>
                  <td>I &prop; 1/r<sup>2</sup></td>
                  <td>A &prop; 1/r</td>
                </tr>
              </tbody>
            </table>
          `,
        },
        {
          label: "Decibels",
          title: "Why Sound Uses a Log Scale",
          html: `
            <div class="formula-box">D - D<sub>0</sub> = 10 log<sub>10</sub>(I / I<sub>0</sub>)</div>
            <p>Our ears compress huge physical intensity changes into smaller perceived loudness changes. That is why the decibel scale is logarithmic instead of linear.</p>
            <ul>
              <li><strong>+10 dB</strong> means <strong>10 times</strong> the intensity, but only about <strong>2 times louder</strong> to human hearing.</li>
              <li><strong>+3 dB</strong> is about <strong>2 times</strong> the intensity.</li>
            </ul>
          `,
        },
        {
          label: "Worked example",
          title: "Two Speakers at 70 dB Each",
          html: `
            <p>Two identical speakers add amplitudes, so the combined amplitude is <code>2A</code>. Since intensity scales as <code>A<sup>2</sup></code>, the intensity ratio becomes <code>(2A)<sup>2</sup> / A<sup>2</sup> = 4</code>.</p>
            <div class="formula-box">D - 70 = 10 log<sub>10</sub>(4) &asymp; 6 dB &nbsp;&rarr;&nbsp; Combined level = 76 dB</div>
            <p>That is the classic surprise: <code>76 dB</code> is louder, but it is nowhere near "twice as loud" in the way people casually imagine.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-5",
      number: "05",
      title: "The Doppler Effect",
      summary:
        "Understand why moving sources squeeze or stretch wavelengths, and how the sign choices affect observed frequency.",
      tags: ["Doppler", "moving source", "moving observer", "sign convention", "ambulance"],
      plainText: `
        Doppler effect means observed frequency changes when source and observer move relative to each other.
        Moving toward you compresses wavelength and raises observed frequency.
        Moving away stretches wavelength and lowers observed frequency.
        Moving source formula: f_observed = (v / (v +/- v_source)) times f_source.
        Toward observer uses minus in the denominator. Away uses plus in the denominator.
        Full formula with moving observer: f_observed = ((v +/- v_observer) / (v +/- v_source)) times f_source.
        Observer toward source uses plus in the numerator. Observer away uses minus in the numerator.
        The effect is not symmetric between moving source and moving observer.
      `,
      sections: [
        {
          label: "Hook",
          title: "That Classic Ambulance Sound",
          html: `
            <p>When an ambulance approaches, the pitch sounds higher. After it passes, the pitch drops. The siren did not suddenly retune itself. What changed was the spacing of the wave crests reaching you.</p>
          `,
        },
        {
          label: "Intuition",
          title: "Why the Pitch Changes",
          html: `
            <p>If the source moves toward you, each new crest starts from a point slightly closer to you than the previous one. That squeezes the wavelength in front of the source and pushes the observed frequency up.</p>
            <p>If the source moves away, the wavelength behind it gets stretched, so the observed frequency drops.</p>
            <div class="formula-box">&lambda;<sub>forward</sub> &lt; &lambda;<sub>stationary</sub> &lt; &lambda;<sub>backward</sub></div>
          `,
        },
        {
          label: "Formula",
          title: "Moving Source, Then Moving Observer",
          html: `
            <div class="formula-box">f<sub>observed</sub> = (v / (v &plusmn; v<sub>source</sub>)) &times; f<sub>source</sub></div>
            <p><strong>Source toward observer</strong> uses <strong>minus</strong> in the denominator. Smaller denominator means larger observed frequency.</p>
            <p><strong>Source away from observer</strong> uses <strong>plus</strong> in the denominator.</p>
            <div class="formula-box">f<sub>observed</sub> = ((v &plusmn; v<sub>observer</sub>) / (v &plusmn; v<sub>source</sub>)) &times; f<sub>source</sub></div>
            <p>For the observer term, moving <strong>toward</strong> the source means <strong>plus</strong> in the numerator; moving <strong>away</strong> means <strong>minus</strong>.</p>
          `,
        },
        {
          label: "Worked example",
          title: "Ambulance Problem",
          html: `
            <p>Let <code>v = 350 m/s</code>, <code>v<sub>s</sub> = 50 m/s</code>, and <code>f<sub>s</sub> = 50 Hz</code>.</p>
            <p>After <code>0.02 s</code>, the first crest has moved <code>7 m</code>, while the ambulance has moved <code>1 m</code>. So the wavelength ahead of the ambulance is <code>7 - 1 = 6 m</code>, and behind it is <code>7 + 1 = 8 m</code>.</p>
            <div class="formula-box">f<sub>Eppie</sub> = 350 / 6 &asymp; 58.3 Hz<br />f<sub>Silas</sub> = 350 / 8 = 43.75 Hz</div>
            <p>The formula check matches perfectly:</p>
            <div class="formula-box">f<sub>Eppie</sub> = (350 / (350 - 50)) &times; 50 &asymp; 58.3 Hz</div>
          `,
        },
      ],
    },
    {
      id: "chapter-6",
      number: "06",
      title: "Superposition and Interference",
      summary:
        "When waves overlap, their displacements add. The interesting part is how phase difference decides whether the result amplifies or cancels.",
      tags: ["superposition", "constructive", "destructive", "phase difference", "path difference"],
      plainText: `
        Superposition means y_total = y1 + y2.
        Waves pass through each other and continue unchanged. Only the displacements add.
        Constructive interference happens when phase difference is 0, 2pi, 4pi, etc.
        Destructive interference happens when phase difference is pi, 3pi, 5pi, etc.
        Partial interference is anything else.
        Phase chart method: time term cancels, leaving Delta Phi = -2pi Delta x / lambda + Delta phi0.
        If Delta phi0 = 0 then constructive means Delta x = n lambda and destructive means Delta x = (n + 1/2) lambda.
        Pond example: path difference 1 m gives constructive interference when lambda is 1 m, 0.5 m, 0.33 m, etc.
      `,
      sections: [
        {
          label: "Hook",
          title: "When Waves Collide",
          html: `
            <p>If two speakers push the air toward you at the same moment, the pushes add. If one pushes while the other pulls, they can cancel. That is the whole emotional core of interference: same place, same time, different phase.</p>
          `,
        },
        {
          label: "Principle",
          title: "The Superposition Rule",
          html: `
            <div class="formula-box">y<sub>total</sub>(x, t) = y<sub>1</sub>(x, t) + y<sub>2</sub>(x, t)</div>
            <p>There is no mysterious collision rule. The waves simply add their displacements, pass through each other, and keep going.</p>
          `,
        },
        {
          label: "Outcomes",
          title: "Three Types of Interference",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Phase difference</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Constructive</td>
                  <td>0, 2&pi;, 4&pi;, ...</td>
                  <td>Maximum amplitude, up to 2A</td>
                </tr>
                <tr>
                  <td>Destructive</td>
                  <td>&pi;, 3&pi;, 5&pi;, ...</td>
                  <td>Complete cancellation</td>
                </tr>
                <tr>
                  <td>Partial</td>
                  <td>Anything else</td>
                  <td>Amplitude between 0 and 2A</td>
                </tr>
              </tbody>
            </table>
          `,
        },
        {
          label: "Phase chart",
          title: "The Systematic Method",
          html: `
            <p>Build the phase chart so you can see what cancels and what survives.</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Time term</th>
                  <th>Position term</th>
                  <th>Phase constant</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wave 1</td>
                  <td>same for both</td>
                  <td>-2&pi;x<sub>1</sub>/&lambda;</td>
                  <td>&phi;<sub>1</sub></td>
                </tr>
                <tr>
                  <td>Wave 2</td>
                  <td>same for both</td>
                  <td>-2&pi;x<sub>2</sub>/&lambda;</td>
                  <td>&phi;<sub>2</sub></td>
                </tr>
                <tr>
                  <td>Difference</td>
                  <td>0</td>
                  <td>-2&pi;&Delta;x/&lambda;</td>
                  <td>&Delta;&phi;<sub>0</sub></td>
                </tr>
              </tbody>
            </table>
            <div class="formula-box">&Delta;&Phi; = -2&pi;(&Delta;x)/&lambda; + &Delta;&phi;<sub>0</sub></div>
          `,
        },
        {
          label: "Conditions",
          title: "Constructive and Destructive Conditions",
          html: `
            <p>General forms:</p>
            <div class="formula-box">Constructive: &Delta;x = n&lambda; - (&Delta;&phi;<sub>0</sub>&lambda;)/(2&pi;)<br />Destructive: &Delta;x = (n + 1/2)&lambda; - (&Delta;&phi;<sub>0</sub>&lambda;)/(2&pi;)</div>
            <p>Special case when both sources start in phase:</p>
            <div class="formula-box">Constructive: &Delta;x = n&lambda;<br />Destructive: &Delta;x = (n + 1/2)&lambda;</div>
          `,
        },
        {
          label: "Worked example",
          title: "The Pond Problem",
          html: `
            <p>Bob is <code>3 m</code> from An and <code>4 m</code> from Carla, so the path difference is:</p>
            <div class="formula-box">&Delta;x = |3 - 4| = 1 m</div>
            <p>If An and Carla start in phase and Bob is at constructive interference, then <code>1 m = n&lambda;</code>. That gives allowed wavelengths like <code>1 m</code>, <code>0.5 m</code>, <code>0.33 m</code>, and so on.</p>
            <p>If the wave speed is <code>3 m/s</code>, then for <code>&lambda; = 1 m</code>, the frequency is <code>f = v/&lambda; = 3 Hz</code>.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-7",
      number: "07",
      title: "Master Formula Reference",
      summary:
        "A clean last-stop table for the formulas, what they mean, and the one warning you should not forget.",
      tags: ["reference", "formula sheet", "watch out"],
      plainText: `
        Master formulas: v = lambda f = lambda/T, f = 1/T, y(x,t) = A sin(2pi t/T +/- 2pi x/lambda + phi0),
        I proportional to A squared, I proportional to 1/r^2 in 3D and 1/r in 2D,
        D - D0 = 10 log10(I/I0),
        f_obs = v/(v +/- v_s) times f_s,
        f_obs = (v +/- v_o)/(v +/- v_s) times f_s,
        Delta Phi = -2pi Delta x/lambda + Delta phi0.
      `,
      sections: [
        {
          label: "Reference",
          title: "Formula Sheet with the Trap Right Next to It",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Formula</th>
                  <th>What it means</th>
                  <th>Watch out</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>v = &lambda;f = &lambda;/T</td>
                  <td>Wave speed</td>
                  <td>v depends on medium; f depends on source</td>
                </tr>
                <tr>
                  <td>f = 1/T</td>
                  <td>Frequency is inverse period</td>
                  <td>Units are Hz = s<sup>-1</sup></td>
                </tr>
                <tr>
                  <td>y(x,t) = A sin(2&pi;t/T &plusmn; 2&pi;x/&lambda; + &phi;<sub>0</sub>)</td>
                  <td>Full 1D wave equation</td>
                  <td>Minus = right-moving; plus = left-moving</td>
                </tr>
                <tr>
                  <td>I &prop; A<sup>2</sup></td>
                  <td>Intensity scales with amplitude squared</td>
                  <td>Double A means 4 times intensity</td>
                </tr>
                <tr>
                  <td>I &prop; 1/r<sup>2</sup> (3D), 1/r (2D)</td>
                  <td>Geometric spreading laws</td>
                  <td>No dissipation assumed</td>
                </tr>
                <tr>
                  <td>D - D<sub>0</sub> = 10 log<sub>10</sub>(I/I<sub>0</sub>)</td>
                  <td>Decibel definition</td>
                  <td>+10 dB means 10 times intensity</td>
                </tr>
                <tr>
                  <td>f<sub>obs</sub> = v/(v &plusmn; v<sub>s</sub>) &times; f<sub>s</sub></td>
                  <td>Doppler with moving source</td>
                  <td>Toward observer uses minus in denominator</td>
                </tr>
                <tr>
                  <td>f<sub>obs</sub> = (v &plusmn; v<sub>o</sub>)/(v &plusmn; v<sub>s</sub>) &times; f<sub>s</sub></td>
                  <td>Doppler with moving observer too</td>
                  <td>Toward source uses plus in numerator</td>
                </tr>
                <tr>
                  <td>&Delta;&Phi; = -2&pi;&Delta;x/&lambda; + &Delta;&phi;<sub>0</sub></td>
                  <td>Phase difference for two-source problems</td>
                  <td>Core equation for interference</td>
                </tr>
              </tbody>
            </table>
          `,
        },
      ],
    },
  ],
  recap: {
    title: "Final Recap",
    subtitle: "The Short Version",
    list: [
      "A wave is energy traveling through a medium; the medium itself does not travel with the disturbance.",
      "Transverse means perpendicular motion of the medium. Longitudinal means parallel motion.",
      "The 1D wave equation y = A sin(2pit/T +/- 2pix/lambda + phi0) packages the full motion.",
      "Wave speed v = lambda f. Speed depends on medium, frequency depends on source, wavelength depends on both.",
      "In 3D, intensity falls as 1/r^2 and amplitude falls as 1/r.",
      "Decibels are logarithmic: +10 dB means 10 times intensity but only about 2 times louder.",
      "Doppler effect comes from compressed or stretched wavelengths caused by relative motion.",
      "For Doppler with a moving source, approaching uses minus in the denominator and receding uses plus.",
      "Superposition means displacements add algebraically. Constructive means phase matches; destructive means phase opposes.",
      "The phase chart is the safest route through interference problems because it makes the cancellations obvious.",
    ],
    note:
      "Waves is one of those units that feels slippery because it mixes space thinking and time thinking in the same problem. That is exactly why this version is broken into small study pieces. If you can explain one chapter at a time, you are already turning the hard part into something manageable.",
  },
};
