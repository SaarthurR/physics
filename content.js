export const FORMULA_STRIP = [
  { label: "Wave speed", value: "v = λf = λ / T" },
  {
    label: "Doppler",
    value: "f_obs = (v / (v ± v_s)) × f_s",
  },
  {
    label: "Interference",
    value: "ΔΦ = -2πΔx / λ + Δφ₀",
  },
];

export const QUICK_PROMPTS = [
  "Explain transverse vs longitudinal like I am learning it for the first time.",
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
      title: "Chapter 1 - What Is a Wave?",
      plainText: `
Physics 7C Unit 8 Waves Complete Study Guide Chapter 1 What Is a Wave.
The Hook Feel It Before You Name It.
You are at a stadium. The crowd does a wave. The individuals do not travel. They just move up and down. But the disturbance travels all the way around the stadium.
That is a wave in one sentence: a disturbance that moves through a medium, carrying energy, without actually transporting the medium itself.
Think about it. When an ocean wave passes under a boat, the boat bobs up and down. But the water under the boat is not flowing to shore. The energy travels. The water stays roughly in place.
Core Concept Transverse vs Longitudinal.
Transverse Waves. The medium moves perpendicular at 90 degrees to the direction the wave travels. Example: a rope wave. You shake one end up and down. The disturbance travels horizontally. The rope moves vertically.
Also water waves. The surface moves up and down while the wave moves outward.
Longitudinal Waves. The medium moves parallel to the direction the wave travels.
Example: sound. Air molecules are squeezed together in compressions and spread apart in rarefactions in the same direction the sound is moving. Push a slinky from one end and the coils compress and expand along the slinky length.
Common confusion: longitudinal does not mean the medium travels with the wave. Air molecules oscillate back and forth around a fixed point.
Wave Dimensionality. The dimensionality of a wave is the number of directions the wave travels, not the dimensions of the medium.
One dimensional wave: travels in only one direction. Example: a wave on a string.
Two dimensional and three dimensional waves: spreads in 2 or 3 directions. Example: water ripples are 2D, sound from a speaker is 3D.
A sound wave exists in 3D space because it travels outward in all directions, not just because air is 3D.
      `.trim(),
      sections: [
        {
          id: "chapter-1-hook",
          title: "The Hook - Feel It Before You Name It",
          html: `
            <p>You're at a stadium. The crowd does a "wave" - people raise their arms section by section. The individuals don't travel; they just move up and down. But something - the disturbance - travels all the way around the stadium.</p>
            <p>That's a wave in one sentence: a disturbance that moves through a medium, carrying energy, without actually transporting the medium itself.</p>
            <p>Think about it - when an ocean wave passes under a boat, the boat bobs up and down. But the water under the boat isn't flowing to shore. The energy travels; the water stays roughly in place.</p>
          `,
        },
        {
          id: "chapter-1-core",
          title: "Core Concept: Transverse vs. Longitudinal",
          html: `
            <h4>Transverse Waves</h4>
            <p>The medium moves perpendicular (at 90 degrees) to the direction the wave travels.</p>
            <p><strong>Example:</strong> A rope wave. You shake one end up-and-down. The disturbance travels horizontally. The rope moves vertically. Those two directions are perpendicular - that's transverse.</p>
            <p><strong>Also:</strong> Water waves (the surface moves up/down, wave moves outward).</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter1-transverse-wave-example.png" alt="Transverse wave displacement graph from DL1" />
              <figcaption>DL1 includes a transverse-wave rope example, which pairs well with this section's discussion of perpendicular motion.</figcaption>
            </figure>
            <h4>Longitudinal Waves</h4>
            <p>The medium moves parallel to (in the same direction as) the wave travel.</p>
            <p><strong>Example:</strong> Sound. Air molecules are squeezed together (compressions) and spread apart (rarefactions) in the same direction the sound is moving. Push a slinky from one end - the coils compress and expand along the slinky's length.</p>
            <div class="callout">
              <strong>Common Confusion:</strong> People think "longitudinal" means the medium travels with the wave. It doesn't. Air molecules in a sound wave oscillate back and forth around a fixed point - they don't travel from the speaker to your ear. Only the disturbance travels.
            </div>
          `,
        },
        {
          id: "chapter-1-dimensionality",
          title: "Wave Dimensionality",
          html: `
            <p>The dimensionality of a wave = the number of directions the wave travels, NOT the dimensions of the medium.</p>
            <h4>1-D Wave</h4>
            <p>Travels in only one direction.</p>
            <p><strong>Example:</strong> a wave on a string.</p>
            <h4>2-D / 3-D Waves</h4>
            <p>Spreads in 2 or 3 directions.</p>
            <p><strong>Example:</strong> water ripples (2-D), sound from a speaker (3-D).</p>
            <p>A sound wave exists in 3-D space but it is 3-D because it travels outward in all directions - not just because air is 3-D.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-2",
      number: "02",
      title: "Chapter 2 - The Sinusoidal Wave Equation",
      plainText: `
Chapter 2 The Sinusoidal Wave Equation.
The Hook Reading the Wave's ID Card. Every wave has a fingerprint - a set of numbers that describe exactly how it moves. The wave equation is how we write that fingerprint mathematically. Once you understand what each piece means, you can read a wave like reading a sentence.
The Equation: y(x, t) - y0 = A sin(2pi t/T +/- 2pi x/lambda + phi0) = A sin(Phi).
Decoding Each Symbol One at a Time.
A amplitude maximum displacement from equilibrium. Source dependent.
T period time for one complete oscillation. Source dependent.
f frequency cycles per second. f = 1/T. Units Hz.
lambda wavelength distance between consecutive crests or equivalent points.
v wave speed. v = lambda/T = lambda f. Medium dependent. Same source in different medium means same frequency but different speed and wavelength.
Phi total phase. Phi = 2pi t/T +/- 2pi x/lambda + phi0.
phi0 fixed phase constant from initial conditions.
Direction rule. Minus sign on x term means wave moves in plus x direction to the right. Plus sign means wave moves in minus x direction to the left.
Source vs Medium table. Period source. Frequency source. Wave speed medium. Wavelength both. Amplitude source. Phase constant source.
Worked Example Boat and Buoy Problem.
Given T = 6 s, lambda = 20 m, A = 0.5 m. Wave speed v = 20/6 = 3.33 m/s. Boat at x = 0 at crest when t = 0 means sin(phi0) = 1 so phi0 = pi/2.
Wave equation y(x,t) = 0.5 sin(2pi t/6 + 2pi x/20 + pi/2).
At x = 5 m and t = 2 s, phase is about 5.76 rad and displacement is about -0.25 m.
      `.trim(),
      sections: [
        {
          id: "chapter-2-hook",
          title: "The Hook - Reading the Wave's ID Card",
          html: `
            <p>Every wave has a fingerprint - a set of numbers that describe exactly how it moves. The wave equation is how we write that fingerprint mathematically. Once you understand what each piece means, you can read a wave like reading a sentence.</p>
          `,
        },
        {
          id: "chapter-2-equation",
          title: "The Equation",
          html: `
            <div class="formula-box">y(x, t) - y₀ = A sin(2πt/T ± 2πx/λ + φ₀) = A sin(Φ)</div>
          `,
        },
        {
          id: "chapter-2-symbols",
          title: "Decoding Each Symbol - One at a Time",
          html: `
            <h4>A - Amplitude</h4>
            <p>The maximum displacement from equilibrium. How "tall" the wave is.</p>
            <p><strong>Real life:</strong> Turn up the volume on a speaker - you're increasing the amplitude of the sound wave. The wave gets "bigger" but not faster.</p>
            <p><strong>Source or medium?</strong> Source-dependent. You control the amplitude by how hard you shake the source.</p>

            <h4>T - Period</h4>
            <p>Time for one complete oscillation (one full cycle). Units: seconds.</p>
            <p><strong>Real life:</strong> The period of a clock's pendulum is about 2 seconds (tick...tock = one cycle).</p>
            <p><strong>Source or medium?</strong> Source-dependent. Set by whatever is generating the wave.</p>

            <h4>f - Frequency</h4>
            <p>How many cycles per second. The reciprocal of period.</p>
            <div class="formula-inline">f = 1/T &nbsp;&nbsp;&nbsp; Units: Hz (Hertz = cycles per second)</div>
            <p>Period and frequency are opposites. High frequency = short period. Low frequency = long period. A 440 Hz musical note (concert A) has a period of about 0.0023 seconds - tiny!</p>

            <h4>λ - Wavelength</h4>
            <p>The spatial analogue of period. The distance the wave travels in one full cycle. It's the distance between two consecutive crests (or troughs, or any equivalent points).</p>
            <p><strong>Medium or source?</strong> Both. It depends on wave speed (medium) AND frequency (source). See the relationship below.</p>

            <h4>v - Wave Speed</h4>
            <p>How fast the disturbance moves through the medium. NOT the same as how fast the medium's particles move.</p>
            <div class="formula-inline">v = λ / T = λf</div>
            <p><strong>Medium-dependent:</strong> Change the tension on a string → change the wave speed. The source doesn't control this.</p>
            <p><strong>Key insight:</strong> Same source, different medium → same frequency, different speed → different wavelength.</p>

            <h4>Φ - Total Phase</h4>
            <p>The argument of the sine function. It tells you exactly where in the oscillation cycle the wave is at any given (x, t). Units: radians.</p>
            <div class="formula-inline">Φ = 2πt/T ± 2πx/λ + φ₀</div>
            <p>If Φ increases by 2π, you complete one full cycle and return to the same state. That's it.</p>

            <h4>φ₀ - Fixed Phase Constant</h4>
            <p>The "starting phase" - where the wave is in its cycle at t = 0, x = 0. A source-dependent property set by initial conditions.</p>
          `,
        },
        {
          id: "chapter-2-direction",
          title: "The ± Sign - Wave Direction",
          html: `
            <h4>DIRECTION RULE:</h4>
            <ul>
              <li>Minus sign (-2πx/λ) → wave moves in the +x direction (to the right)</li>
              <li>Plus sign (+2πx/λ) → wave moves in the -x direction (to the left)</li>
            </ul>
            <p>This trips almost everyone up. The minus sign means right-moving. Yes, it seems backwards. Think of it this way: a right-moving wave at position x arrives at x+dx slightly later in time - the phase must decrease with increasing x at a fixed time, hence the minus.</p>
          `,
        },
        {
          id: "chapter-2-source-medium",
          title: "Source vs. Medium - The Big Table",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th>Depends On</th>
                  <th>Why</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Period T</td>
                  <td>Source</td>
                  <td>Set by how fast you vibrate the source</td>
                </tr>
                <tr>
                  <td>Frequency f</td>
                  <td>Source</td>
                  <td>Same as period (f = 1/T)</td>
                </tr>
                <tr>
                  <td>Wave Speed v</td>
                  <td>Medium</td>
                  <td>Tension, density, elasticity of medium</td>
                </tr>
                <tr>
                  <td>Wavelength λ</td>
                  <td>Both</td>
                  <td>λ = v/f - depends on both speed AND frequency</td>
                </tr>
                <tr>
                  <td>Amplitude A</td>
                  <td>Source</td>
                  <td>How energetically you disturb the medium</td>
                </tr>
                <tr>
                  <td>Phase constant φ₀</td>
                  <td>Source</td>
                  <td>Initial conditions when wave is created</td>
                </tr>
              </tbody>
            </table>
          `,
        },
        {
          id: "chapter-2-worked-example",
          title: "Worked Example - The Boat and Buoy Problem",
          html: `
            <p><strong>Problem:</strong> Ocean waves pass your boat. A crest passes every 6 seconds. Crests are spaced 20 m apart. When your boat is at a peak, it is 0.5 m above the buoy 10 m to your right. Write the wave equation.</p>
            <h4>Step 1 - What do we know?</h4>
            <ul>
              <li>Period T = 6 s (one crest every 6 seconds)</li>
              <li>Wavelength λ = 20 m (spacing between crests)</li>
              <li>The peak is 0.5 m above the buoy → boat is 0.5 m above equilibrium, buoy is at equilibrium → Amplitude A = 0.5 m</li>
            </ul>
            <h4>Step 2 - Wave speed:</h4>
            <div class="formula-inline">v = λ / T = 20 m / 6 s ≈ 3.33 m/s</div>
            <h4>Step 3 - Build the equation.</h4>
            <p>Wave moves LEFT (positive x direction convention here means we use + sign). Boat at x = 0. At t = 0, boat is at crest → y(0,0) = A, so sin(φ₀) = 1 → φ₀ = π/2:</p>
            <div class="formula-box">y(x, t) = 0.5 sin(2πt/6 + 2πx/20 + π/2) meters</div>
            <h4>Step 4 - Find displacement at x = 5 m, t = 2 s:</h4>
            <div class="formula-inline">Φ = 2π(2)/6 + 2π(5)/20 + π/2 = 2π/3 + π/2 + π/2 = 2π/3 + π ≈ 5.76 rad</div>
            <div class="formula-inline">y = 0.5 × sin(5.76) ≈ 0.5 × (-0.50) ≈ -0.25 m</div>
          `,
        },
      ],
    },
    {
      id: "chapter-3",
      number: "03",
      title: "Chapter 3 - Reading Wave Graphs",
      plainText: `
Chapter 3 Reading Wave Graphs.
Two Types of Wave Graphs.
y(x) snapshot in time like a photograph of the wave. t fixed. x varies. Spatial period is wavelength lambda.
y(t) time history at one point. x fixed. t varies. Temporal period is T.
How to Go From Graphs to Wave Equation: read amplitude, period, wavelength, determine direction, determine phase constant.
Tricky: Two y(t) Graphs at Different Positions. If the farther position graph is shifted later in time, the wave is moving in positive x direction.
      `.trim(),
      sections: [
        {
          id: "chapter-3-two-types",
          title: "Two Types of Wave Graphs",
          html: `
            <h4>y(x) - Snapshot in Time</h4>
            <p>Like a photograph of the wave. t is fixed. x varies. The spatial period = wavelength λ.</p>
            <p>Read λ from the x-axis: distance between identical points.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter3-wave-snapshot.png" alt="Snapshot graph of displacement versus position" />
              <figcaption>This worksheet graph is a clean y(x) snapshot: it shows the wave's shape across space at one instant.</figcaption>
            </figure>
            <h4>y(t) - Time History at One Point</h4>
            <p>Like a recording of one point on the wave. x is fixed. t varies. The temporal period = T.</p>
            <p>Read T from the t-axis: time between identical points.</p>
          `,
        },
        {
          id: "chapter-3-graphs-to-equation",
          title: "How to Go From Graphs -> Wave Equation",
          html: `
            <p>This is the core skill. Work through it systematically every time:</p>
            <ol>
              <li>Read A (amplitude) from either graph - peak height.</li>
              <li>Read T from the y(t) graph (time between crests).</li>
              <li>Read λ from the y(x) graph (distance between crests).</li>
              <li>Determine direction from context (given or inferred from two y(t) graphs at different positions).</li>
              <li>Determine φ₀ by plugging in a known (x, t, y) point and solving.</li>
            </ol>
          `,
        },
        {
          id: "chapter-3-tricky",
          title: "Tricky: Two y(t) Graphs at Different Positions",
          html: `
            <p>If you have y(t) at x = 1.0 m AND y(t) at x = 1.1 m, you can determine direction. The wave at x = 1.1 m looks like the x = 1.0 m wave shifted in time. If the x = 1.1 m graph is shifted to the right (later in time), the wave is moving in the +x direction (to the right).</p>
            <p>This is the key: the phase you observe at the farther position was emitted earlier from the source, so it arrives later.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter3-position-time-comparison.png" alt="Two position or time graphs used to compare phase at different points" />
              <figcaption>The DL graph pair is exactly the kind of comparison you use to infer the wave's direction from timing.</figcaption>
            </figure>
          `,
        },
      ],
    },
    {
      id: "chapter-4",
      number: "04",
      title: "Chapter 4 - Waves in 2D and 3D",
      plainText: `
Chapter 4 Waves in 2D and 3D.
Wavefronts and rays. Wavefronts connect points with same phase. Rays point in direction of travel and are perpendicular to wavefronts.
Intensity is power per unit area. I = P / Area.
For 2D waves area = circumference = 2pi r so I proportional to 1/r.
For 3D waves area = 4pi r^2 so I proportional to 1/r^2.
Since I proportional to A^2, amplitude in 2D falls as 1/sqrt(r), in 3D as 1/r.
Decibels: D - D0 = 10 log10(I/I0).
Key facts: +10 dB = 10x more intense but sounds only 2x louder. +3 dB approximately 2x more intense.
Two 70 dB speakers together produce 76 dB.
      `.trim(),
      sections: [
        {
          id: "chapter-4-wavefronts",
          title: "Wavefronts and Rays",
          html: `
            <p>When a wave travels in more than one dimension, we use two tools to visualize it:</p>
            <h4>Wavefronts</h4>
            <p>Lines (2D) or surfaces (3D) connecting all points with the same phase.</p>
            <p>Solid lines = crests. Dashed lines = troughs. Distance between adjacent solid lines = λ.</p>
            <figure class="concept-figure concept-figure-small">
              <img src="./assets/figures/chapter4-wavefronts.png" alt="Concentric wavefront circles from the worksheet" />
              <figcaption>The higher-dimensional wave worksheet shows the circular wavefront picture used in this section.</figcaption>
            </figure>
            <h4>Rays</h4>
            <p>Arrows pointing in the direction of wave travel.</p>
            <p>Rays are always perpendicular to wavefronts.</p>
          `,
        },
        {
          id: "chapter-4-intensity",
          title: "Intensity - Why Loud Things Fade With Distance",
          html: `
            <p>Stand next to a speaker: deafening. Walk 100 meters away: barely audible. The speaker didn't get quieter. The energy just spread over a larger area.</p>
            <p>Intensity = power per unit area of the wavefront.</p>
            <div class="formula-inline">I = P / Area</div>
            <p>If no energy is lost (no dissipation), the total power crossing each wavefront stays constant. But the area of the wavefront grows.</p>
            <h4>2D Waves (circles)</h4>
            <p>Area = circumference = 2πr</p>
            <div class="formula-inline">I ∝ 1/r</div>
            <h4>3D Waves (spheres)</h4>
            <p>Area = 4πr²</p>
            <div class="formula-inline">I ∝ 1/r² (inverse square law)</div>
            <p>Since I ∝ A², amplitude in 2D falls as A ∝ 1/√r, and in 3D as A ∝ 1/r.</p>
            <p>Our ears detect intensity, not power. That's why the same speaker sounds quieter from far away - the intensity at your ear decreased, even though total power output of the speaker didn't change.</p>
          `,
        },
        {
          id: "chapter-4-decibels",
          title: "Decibels - Why Sound Uses a Log Scale",
          html: `
            <p>If you double the number of speakers, the sound gets louder - but you don't hear it as twice as loud. Human hearing compresses big differences into smaller perceived changes. This is why we use a logarithmic scale.</p>
            <div class="formula-box">D - D₀ = 10 × log₁₀(I / I₀)</div>
            <h4>Key facts to memorize:</h4>
            <ul>
              <li>+10 dB = 10× more intense, but sounds only 2× louder</li>
              <li>+3 dB ≈ 2× more intense (since log₁₀(2) ≈ 0.3)</li>
            </ul>
          `,
        },
        {
          id: "chapter-4-two-speakers",
          title: "Worked: Two Speakers Each at 70 dB",
          html: `
            <p>Two identical speakers playing simultaneously. Each alone = 70 dB. What is the combined level?</p>
            <p>Combined amplitude = 2A (amplitudes add). Combined intensity: since I ∝ A², ratio I/I₀ = (2A)²/A² = 4.</p>
            <div class="formula-inline">D - 70 = 10 × log₁₀(4) = 10 × 0.602 ≈ 6 dB</div>
            <div class="formula-inline">Combined = 76 dB</div>
            <p>76 dB is NOT twice as loud as 70 dB. To sound twice as loud, you need 80 dB (+10 dB). So two speakers sounding together doesn't even come close to sounding twice as loud as one.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-5",
      number: "05",
      title: "Chapter 5 - The Doppler Effect",
      plainText: `
Chapter 5 The Doppler Effect.
The Hook That Classic Ambulance Sound.
The observed frequency changes when source and observer are moving relative to each other.
Toward observer squeezes wavelength and raises frequency. Away stretches wavelength and lowers frequency.
Moving source formula: f_observed = (v / (v +/- v_source)) x f_source. Toward observer uses minus in denominator. Away uses plus.
Full formula with moving observer: f_observed = ((v +/- v_observer) / (v +/- v_source)) x f_source.
Observer toward source uses plus in numerator. Away uses minus.
Worked example: v_s = 50 m/s, f_s = 50 Hz, sound speed v = 350 m/s. Forward wavelength 6 m gives 58.3 Hz. Backward wavelength 8 m gives 43.75 Hz.
      `.trim(),
      sections: [
        {
          id: "chapter-5-hook",
          title: "The Hook - That Classic Ambulance Sound",
          html: `
            <p>An ambulance passes you at full speed. As it approaches: high-pitched wail. As it passes and moves away: the pitch drops noticeably. The siren's actual frequency never changed. What changed is your perception - and it's completely explained by physics.</p>
            <p>The Doppler Effect: the observed frequency of a wave changes when the source and observer are moving relative to each other.</p>
          `,
        },
        {
          id: "chapter-5-intuition",
          title: "Why It Happens - Intuition First",
          html: `
            <p>Imagine the ambulance emitting crests at regular intervals. When the ambulance moves toward you, each successive crest is emitted from a position slightly closer to you than the last. So the crests are squeezed together - shorter wavelength - which means higher frequency for you.</p>
            <p>When the ambulance moves away, each crest is emitted from farther away. The crests are stretched out - longer wavelength - lower frequency.</p>
            <div class="formula-inline">λ_forward &lt; λ_stationary &lt; λ_backward</div>
          `,
        },
        {
          id: "chapter-5-moving-source",
          title: "The Formula - Moving Source",
          html: `
            <div class="formula-box">f_observed = (v / (v ± v_source)) × f_source</div>
            <h4>Sign convention - get this right:</h4>
            <ul>
              <li>Source moving TOWARD observer → use MINUS in denominator → smaller denominator → f_observed is HIGHER</li>
              <li>Source moving AWAY from observer → use PLUS in denominator → larger denominator → f_observed is LOWER</li>
            </ul>
            <p>Sanity check: if source is stationary (v_source = 0), you get f_observed = f_source. Correct!</p>
          `,
        },
        {
          id: "chapter-5-full-formula",
          title: "The Full Formula - Moving Observer Too",
          html: `
            <div class="formula-box">f_observed = ((v ± v_observer) / (v ± v_source)) × f_source</div>
            <p><strong>For the observer:</strong></p>
            <ul>
              <li>Observer moving TOWARD source → use PLUS in numerator (higher f)</li>
              <li>Observer moving AWAY from source → use MINUS in numerator (lower f)</li>
            </ul>
            <p>Is it symmetric? NO. A source moving toward a stationary observer gives a different frequency than a stationary source with an observer moving toward it at the same speed. The formulas are NOT the same - test a number and you'll see.</p>
          `,
        },
        {
          id: "chapter-5-worked-example",
          title: "Worked Example - Ambulance Problem (FNT 2)",
          html: `
            <p><strong>Setup:</strong> ambulance at v_s = 50 m/s, siren f_s = 50 Hz, sound speed v = 350 m/s. Silas is behind, Eppie is ahead.</p>
            <div class="concept-gallery">
              <figure class="concept-figure">
                <img src="./assets/figures/chapter5-doppler-setup.png" alt="Ambulance halfway between Silas and Eppie at t equals 0 seconds" />
                <figcaption>Figure 1 from the PDF sets up the original ambulance position.</figcaption>
              </figure>
              <figure class="concept-figure">
                <img src="./assets/figures/chapter5-doppler-motion.png" alt="Ambulance shifted forward after a short time interval" />
                <figcaption>Figure 2 shows the source after moving forward, which is what squeezes the forward wavelength.</figcaption>
              </figure>
            </div>
            <p>At t = 0: siren emits a crest. At t = 0.02 s: ambulance has moved x = v × t = 50 × 0.02 = 1 m forward.</p>
            <p>The siren completes f × t = 50 × 0.02 = 1 full cycle. So at t = 0.02 s, the siren is back to emitting a crest.</p>
            <p>The t = 0 crest has traveled: 350 × 0.02 = 7 m in all directions. So the t = 0 forward crest is 7 m ahead, while the new t = 0.02 s crest is at the ambulance (1 m ahead of start).</p>
            <p>Wavelength toward Eppie: 7 - 1 = 6 m. Wavelength toward Silas: 7 + 1 = 8 m.</p>
            <div class="formula-inline">f_Eppie = v / λ_forward = 350 / 6 ≈ 58.3 Hz (higher - ambulance coming toward her)</div>
            <div class="formula-inline">f_Silas = v / λ_backward = 350 / 8 = 43.75 Hz (lower - ambulance going away)</div>
            <p>Verify with the formula:</p>
            <div class="formula-inline">f_Eppie = (350 / (350 - 50)) × 50 = (350/300) × 50 ≈ 58.3 Hz</div>
          `,
        },
      ],
    },
    {
      id: "chapter-6",
      number: "06",
      title: "Chapter 6 - Superposition and Interference",
      plainText: `
Chapter 6 Superposition and Interference.
The Hook When Waves Collide.
Superposition principle: y_total(x,t) = y1(x,t) + y2(x,t).
Constructive interference phase difference 0, 2pi, 4pi. Destructive interference pi, 3pi, 5pi. Partial is anything else.
Phase chart method leads to Delta Phi = -2pi Delta x / lambda + Delta phi0.
Constructive: Delta x = n lambda - (Delta phi0 lambda)/(2pi).
Destructive: Delta x = (n + 1/2) lambda - (Delta phi0 lambda)/(2pi).
If Delta phi0 = 0 then constructive Delta x = n lambda and destructive Delta x = (n + 1/2) lambda.
Pond problem: Bob 3 m from An and 4 m from Carla gives path difference 1 m and constructive interference when lambda is 1 m or 0.5 m etc.
      `.trim(),
      sections: [
        {
          id: "chapter-6-hook",
          title: "The Hook - When Waves Collide",
          html: `
            <p>Two speakers aimed at the same spot. One makes the air push toward you; the other pushes at exactly the same moment. The combined push is double. Now flip one speaker: one pushes while the other pulls - the net effect is zero. Dead silence at a specific point, even though both speakers are blasting. That's interference.</p>
          `,
        },
        {
          id: "chapter-6-superposition",
          title: "The Superposition Principle",
          html: `
            <div class="formula-box">y_total(x, t) = y_1(x, t) + y_2(x, t)</div>
            <p>The displacements add algebraically - that's it. No special interaction between waves. They pass through each other and continue unchanged.</p>
          `,
        },
        {
          id: "chapter-6-types",
          title: "Three Types of Interference",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Type</th>
                  <th>Phase Difference ΔΦ</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Constructive</td>
                  <td>ΔΦ = 0, 2π, 4π, ... (n × 2π)</td>
                  <td>Max amplitude (2A). Crests align.</td>
                </tr>
                <tr>
                  <td>Destructive</td>
                  <td>ΔΦ = π, 3π, 5π, ... ((2n+1) × π)</td>
                  <td>Zero amplitude. Complete cancellation.</td>
                </tr>
                <tr>
                  <td>Partial</td>
                  <td>Anything else</td>
                  <td>Amplitude between 0 and 2A.</td>
                </tr>
              </tbody>
            </table>
          `,
        },
        {
          id: "chapter-6-phase-chart",
          title: "The Phase Chart Method",
          html: `
            <p>This is the systematic tool for interference problems. Build a chart like this:</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter6-speaker-paths.png" alt="Two speakers with two different path lengths to the observer" />
              <figcaption>The two-speaker setup from DL3 is the physical picture behind the path-difference terms in the phase chart.</figcaption>
            </figure>
            <table class="data-table">
              <thead>
                <tr>
                  <th></th>
                  <th>2πt / T (time term)</th>
                  <th>-2πx / λ (pos term)</th>
                  <th>φ₀</th>
                  <th>Total Phase Φ</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wave 1</td>
                  <td>same for both</td>
                  <td>-2πx₁ / λ</td>
                  <td>φ₁</td>
                  <td>Φ₁</td>
                </tr>
                <tr>
                  <td>Wave 2</td>
                  <td>same for both</td>
                  <td>-2πx₂ / λ</td>
                  <td>φ₂</td>
                  <td>Φ₂</td>
                </tr>
                <tr>
                  <td>Difference</td>
                  <td>0 (cancels out)</td>
                  <td>-2πΔx / λ</td>
                  <td>Δφ₀</td>
                  <td>ΔΦ = C / D / P?</td>
                </tr>
              </tbody>
            </table>
            <p>Key insight: the time term cancels in the difference (both waves exist at the same time at the same point). What remains: path length difference and phase constant difference.</p>
            <div class="formula-inline">ΔΦ = -2π(Δx)/λ + Δφ₀</div>
            <div class="concept-gallery">
              <figure class="concept-figure">
                <img src="./assets/figures/chapter6-wave-pair-a.png" alt="One pair of interference comparison waves from DL3" />
                <figcaption>One worksheet case showing how the two waves can line up differently at x₁ and x₂.</figcaption>
              </figure>
              <figure class="concept-figure">
                <img src="./assets/figures/chapter6-wave-pair-b.png" alt="Another pair of interference comparison waves from DL3" />
                <figcaption>A second case that changes the phase relationship and therefore the interference result.</figcaption>
              </figure>
            </div>
          `,
        },
        {
          id: "chapter-6-conditions",
          title: "Conditions for Constructive and Destructive",
          html: `
            <p><strong>Constructive</strong> (ΔΦ = n × 2π): Δx = nλ - (Δφ₀ × λ)/(2π)</p>
            <p><strong>Destructive</strong> (ΔΦ = (2n+1) × π): Δx = (n + 1/2)λ - (Δφ₀ × λ)/(2π)</p>
            <p><strong>Special case:</strong> same phase constants (Δφ₀ = 0):</p>
            <ul>
              <li>Constructive: Δx = nλ (path difference is a whole number of wavelengths)</li>
              <li>Destructive: Δx = (n + 1/2)λ (path difference is a half-integer wavelength)</li>
            </ul>
          `,
        },
        {
          id: "chapter-6-pond-problem",
          title: "Superposition in 2D - The Pond Problem",
          html: `
            <p>An and Carla bob in a pond. Bob is 3 m from An and 4 m from Carla. An and Carla start in phase. For constructive interference at Bob:</p>
            <figure class="concept-figure concept-figure-small">
              <img src="./assets/figures/chapter6-pond-problem.png" alt="Pond problem diagram with An, Bob, and Carla distances" />
              <figcaption>The DL3 pond diagram gives the exact 2 m, 3 m, and 4 m distances used in this example.</figcaption>
            </figure>
            <div class="formula-inline">Δx = |distance to An - distance to Carla| = |3 - 4| = 1 m = nλ</div>
            <p>So λ = 1 m (or 0.5 m, 0.33 m, etc. for n = 1, 2, 3...)</p>
            <p>v = 3 m/s, f = v/λ = 3/1 = 3 Hz (or 6 Hz, 9 Hz, ...)</p>
          `,
        },
      ],
    },
    {
      id: "chapter-7",
      number: "07",
      title: "Chapter 7 - Master Formula Reference",
      plainText: `
Chapter 7 Master Formula Reference.
v = lambda f = lambda/T wave speed.
f = 1/T frequency inverse of period.
y(x,t) = A sin(2pi t/T +/- 2pi x/lambda + phi0) full wave equation.
I proportional to A^2 intensity proportional to amplitude squared.
I proportional to 1/r^2 in 3D and 1/r in 2D.
D - D0 = 10 log10(I/I0) decibel definition.
f_obs = v/(v +/- v_s) x f_s for moving source.
f_obs = (v +/- v_o)/(v +/- v_s) x f_s for moving source and observer.
Delta Phi = -2pi Delta x/lambda + Delta phi0 phase difference.
Constructive Delta Phi = 2npi. Destructive Delta Phi = (2n+1)pi.
      `.trim(),
      sections: [
        {
          id: "chapter-7-reference",
          title: "Master Formula Reference",
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
                  <td>v = λf = λ/T</td>
                  <td>Wave speed = wavelength × frequency</td>
                  <td>v depends on medium; f on source</td>
                </tr>
                <tr>
                  <td>f = 1/T</td>
                  <td>Frequency is inverse of period</td>
                  <td>Units of f are Hz (s⁻¹)</td>
                </tr>
                <tr>
                  <td>y(x,t) = A sin(2πt/T ± 2πx/λ + φ₀)</td>
                  <td>Full wave equation</td>
                  <td>Minus = right-moving; Plus = left</td>
                </tr>
                <tr>
                  <td>I ∝ A²</td>
                  <td>Intensity proportional to amplitude squared</td>
                  <td>Double A → 4× intensity</td>
                </tr>
                <tr>
                  <td>I ∝ 1/r² (3D), 1/r (2D)</td>
                  <td>Inverse square/linear law</td>
                  <td>No dissipation assumed</td>
                </tr>
                <tr>
                  <td>D - D₀ = 10 log₁₀(I/I₀)</td>
                  <td>Decibel definition</td>
                  <td>+10 dB = 10× intensity</td>
                </tr>
                <tr>
                  <td>f_obs = v/(v ± v_s) × f_s</td>
                  <td>Doppler, moving source</td>
                  <td>Minus = source toward observer</td>
                </tr>
                <tr>
                  <td>f_obs = (v ± v_o)/(v ± v_s) × f_s</td>
                  <td>Doppler, source + observer moving</td>
                  <td>Observer toward: plus in numerator</td>
                </tr>
                <tr>
                  <td>ΔΦ = -2πΔx/λ + Δφ₀</td>
                  <td>Phase difference from two sources</td>
                  <td>Key to all interference problems</td>
                </tr>
                <tr>
                  <td>Constructive: ΔΦ = 2nπ</td>
                  <td>In-phase condition</td>
                  <td>n = 0, ±1, ±2, ...</td>
                </tr>
                <tr>
                  <td>Destructive: ΔΦ = (2n+1)π</td>
                  <td>Anti-phase condition</td>
                  <td>n = 0, ±1, ±2, ...</td>
                </tr>
              </tbody>
            </table>
          `,
        },
      ],
    },
  ],
  recap: {
    id: "final-recap",
    title: "Final Recap - The Short Version",
    plainText: `
Waves 101 in 10 sentences.
1. A wave is energy traveling through a medium - the medium itself doesn't travel.
2. Transverse = medium moves perpendicular to travel. Longitudinal = parallel.
3. The wave equation y = A sin(2pi t/T +/- 2pi x/lambda + phi0) encodes everything about a 1D wave.
4. Speed v = lambda f. Speed is medium-dependent. Frequency is source-dependent. Wavelength depends on both.
5. In 3D, intensity falls as 1/r^2. Amplitude falls as 1/r.
6. Decibels are logarithmic. +10 dB = 10x more intense but only sounds 2x louder.
7. Doppler effect: moving source compresses or stretches wavelengths, shifting observed frequency.
8. f_obs = v/(v ∓ v_s) x f_s. Minus when approaching, plus when receding.
9. Superposition: wave displacements add algebraically. Constructive Delta Phi = 2npi or destructive odd times pi.
10. The phase chart is your best friend for interference - build it systematically every time.
This was a lot and waves is genuinely one of the trickier units because it mixes spatial and temporal thinking simultaneously. The fact that you worked through the full DL 1-3 material means when this shows up on an exam, the concepts will land somewhere familiar. You already know this.
    `.trim(),
    sections: [
      {
        id: "final-recap-10",
        title: "Waves 101 in 10 Sentences",
        html: `
          <ol class="long-list">
            <li>A wave is energy traveling through a medium - the medium itself doesn't travel.</li>
            <li>Transverse = medium moves perpendicular to travel (rope). Longitudinal = parallel (sound).</li>
            <li>The wave equation y = A sin(2πt/T ± 2πx/λ + φ₀) encodes everything about a 1-D wave.</li>
            <li>Speed v = λf. Speed is medium-dependent. Frequency is source-dependent. Wavelength depends on both.</li>
            <li>In 3D, intensity falls as 1/r² (inverse square law). Amplitude falls as 1/r.</li>
            <li>Decibels are logarithmic. +10 dB = 10× more intense but only sounds 2× louder.</li>
            <li>Doppler effect: moving source compresses or stretches wavelengths, shifting observed frequency.</li>
            <li>f_obs = v/(v ∓ v_s) × f_s. Minus when approaching, plus when receding.</li>
            <li>Superposition: wave displacements add algebraically. Constructive (ΔΦ = 2nπ) or destructive (ΔΦ = odd × π).</li>
            <li>The phase chart is your best friend for interference - build it systematically every time.</li>
          </ol>
        `,
      },
      {
        id: "final-recap-close",
        title: "Closing Note",
        html: `
          <p>This was a lot - and waves is genuinely one of the trickier units because it mixes spatial and temporal thinking simultaneously. The fact that you worked through the full DL 1-3 material means when this shows up on an exam, the concepts will land somewhere familiar. You already know this.</p>
        `,
      },
    ],
  },
};

export const QUIZ_BANK = {
  "chapter-1": [
    {
      id: "c1-mc-1",
      type: "mc",
      prompt: "Which statement best defines a wave?",
      choices: [
        "A medium physically moves from the source to the observer.",
        "A disturbance carries energy without transporting the medium itself.",
        "Only matter moves, not energy.",
        "Waves only exist in water.",
      ],
      answer: 1,
      explanation: "A wave is a disturbance that carries energy while the medium only oscillates around its position.",
    },
    {
      id: "c1-mc-2",
      type: "mc",
      prompt: "In a transverse wave, the medium moves:",
      choices: [
        "Parallel to the wave's travel.",
        "In a circular path only.",
        "Perpendicular to the wave's travel.",
        "Only forward with the wave.",
      ],
      answer: 2,
      explanation: "Transverse means the medium motion is perpendicular to the direction the wave travels.",
    },
    {
      id: "c1-mc-3",
      type: "mc",
      prompt: "Which example from the guide is longitudinal?",
      choices: ["A rope wave", "Water ripples", "Sound in air", "A pendulum"],
      answer: 2,
      explanation: "Sound is longitudinal because the air molecules move back and forth parallel to the wave direction.",
    },
    {
      id: "c1-mc-4",
      type: "mc",
      prompt: "Wave dimensionality depends on:",
      choices: [
        "The shape of the source",
        "The dimensions of the medium",
        "The number of directions the wave spreads",
        "How fast the wave moves",
      ],
      answer: 2,
      explanation: "The guide says dimensionality means how many directions the wave travels, not the dimensions of the medium.",
    },
    {
      id: "c1-short-1",
      type: "short",
      prompt: "In a longitudinal wave, how do particles move compared with the wave's travel direction?",
      expected: "They move parallel to the direction of wave travel, oscillating back and forth.",
      rubric: "Mark correct if the answer says parallel, same direction, or back-and-forth along the direction of travel.",
    },
    {
      id: "c1-short-2",
      type: "short",
      prompt: "What does the boat-on-a-wave example show?",
      expected: "It shows that energy travels while the water mostly stays in place.",
      rubric: "Mark correct if the answer mentions that the disturbance or energy moves, but the water or medium does not travel with the wave.",
    },
  ],
  "chapter-2": [
    {
      id: "c2-mc-1",
      type: "mc",
      prompt: "Which wave property is medium-dependent?",
      choices: ["Frequency", "Period", "Wave speed", "Amplitude from the source"],
      answer: 2,
      explanation: "Wave speed depends on the medium, while frequency and period are set by the source.",
    },
    {
      id: "c2-mc-2",
      type: "mc",
      prompt: "In the wave equation, a minus sign on the x-term means the wave moves:",
      choices: ["To the left", "To the right", "Nowhere", "Only upward"],
      answer: 1,
      explanation: "The guide's direction rule says the minus sign means a right-moving wave, or motion in the +x direction.",
    },
    {
      id: "c2-mc-3",
      type: "mc",
      prompt: "Which formula gives wave speed?",
      choices: ["v = f/T", "v = λf = λ/T", "v = A/T", "v = φ/T"],
      answer: 1,
      explanation: "Wave speed equals wavelength times frequency, and also wavelength divided by period.",
    },
    {
      id: "c2-mc-4",
      type: "mc",
      prompt: "Wavelength depends on:",
      choices: ["Only the source", "Only the medium", "Both the source and the medium", "Neither"],
      answer: 2,
      explanation: "Because λ = v/f, wavelength depends on both speed in the medium and the source frequency.",
    },
    {
      id: "c2-short-1",
      type: "short",
      prompt: "What is amplitude?",
      expected: "Amplitude is the maximum displacement from equilibrium.",
      rubric: "Mark correct if the answer says maximum displacement, distance from equilibrium at the largest point, or wave height from equilibrium.",
    },
    {
      id: "c2-short-2",
      type: "short",
      prompt: "If the same source enters a new medium, what stays the same?",
      expected: "The frequency stays the same.",
      rubric: "Mark correct if the answer says frequency stays the same; period is also acceptable because it is tied to frequency.",
    },
  ],
  "chapter-3": [
    {
      id: "c3-mc-1",
      type: "mc",
      prompt: "A y(x) graph is mainly used to read:",
      choices: ["Frequency", "Wavelength", "Power", "Intensity"],
      answer: 1,
      explanation: "A y(x) graph is a snapshot in space, so it lets you read wavelength.",
    },
    {
      id: "c3-mc-2",
      type: "mc",
      prompt: "A y(t) graph is mainly used to read:",
      choices: ["Wavelength", "Amplitude only", "Period", "Wavefront area"],
      answer: 2,
      explanation: "A y(t) graph shows how one point changes in time, so it gives you the period.",
    },
    {
      id: "c3-mc-3",
      type: "mc",
      prompt: "If the farther-position graph is shifted later in time, the wave is moving:",
      choices: ["In the +x direction", "In the -x direction", "Straight up", "In a circle"],
      answer: 0,
      explanation: "If the farther point sees the same phase later, the wave is traveling to the right, or +x.",
    },
    {
      id: "c3-mc-4",
      type: "mc",
      prompt: "To determine φ₀ from graphs, you should:",
      choices: [
        "Ignore all known points",
        "Use only the chapter title",
        "Plug in a known x, t, y point",
        "Always set it to zero",
      ],
      answer: 2,
      explanation: "The guide says to solve for φ₀ by plugging in a known point from the graph.",
    },
    {
      id: "c3-short-1",
      type: "short",
      prompt: "From which graph do you read λ?",
      expected: "You read λ from the y(x) graph.",
      rubric: "Mark correct if the answer says y(x), position graph, or spatial snapshot.",
    },
    {
      id: "c3-short-2",
      type: "short",
      prompt: "From which graph do you read T?",
      expected: "You read T from the y(t) graph.",
      rubric: "Mark correct if the answer says y(t), time graph, or time history.",
    },
  ],
  "chapter-4": [
    {
      id: "c4-mc-1",
      type: "mc",
      prompt: "For a 3D wave with no dissipation, intensity falls as:",
      choices: ["1/r", "1/r²", "r²", "constant"],
      answer: 1,
      explanation: "In 3D the wavefront is spherical, so intensity follows the inverse square law.",
    },
    {
      id: "c4-mc-2",
      type: "mc",
      prompt: "Rays are always:",
      choices: ["Parallel to wavefronts", "Perpendicular to wavefronts", "Circular", "Random"],
      answer: 1,
      explanation: "The guide states that rays point in the direction of travel and are perpendicular to wavefronts.",
    },
    {
      id: "c4-mc-3",
      type: "mc",
      prompt: "A +10 dB increase means the sound is:",
      choices: ["10 times more intense", "2 times more intense", "100 times more intense", "Unchanged"],
      answer: 0,
      explanation: "+10 dB means intensity increases by a factor of 10.",
    },
    {
      id: "c4-mc-4",
      type: "mc",
      prompt: "Two identical 70 dB speakers together give about:",
      choices: ["73 dB", "74 dB", "76 dB", "80 dB"],
      answer: 2,
      explanation: "The worked example in the guide gives a combined level of 76 dB.",
    },
    {
      id: "c4-short-1",
      type: "short",
      prompt: "Why does a speaker sound quieter when you move farther away?",
      expected: "Because the same energy spreads over a larger area, so intensity decreases.",
      rubric: "Mark correct if the answer mentions the wave spreading out over a larger area or lower intensity at greater distance.",
    },
    {
      id: "c4-short-2",
      type: "short",
      prompt: "How does amplitude fall with distance in 3D?",
      expected: "Amplitude falls as 1/r in 3D.",
      rubric: "Mark correct if the answer says 1/r or inversely with distance in 3D.",
    },
  ],
  "chapter-5": [
    {
      id: "c5-mc-1",
      type: "mc",
      prompt: "For a source moving toward the observer, the Doppler denominator uses:",
      choices: ["A plus sign", "A minus sign", "No sign", "A square root"],
      answer: 1,
      explanation: "Toward the observer means a smaller denominator, so you use the minus sign.",
    },
    {
      id: "c5-mc-2",
      type: "mc",
      prompt: "For an observer moving toward the source, the numerator uses:",
      choices: ["A plus sign", "A minus sign", "Zero", "A division by λ"],
      answer: 0,
      explanation: "The full Doppler formula uses a plus in the numerator for an observer moving toward the source.",
    },
    {
      id: "c5-mc-3",
      type: "mc",
      prompt: "When an ambulance approaches you, the observed pitch is:",
      choices: ["Lower", "Higher", "Zero", "Always unchanged"],
      answer: 1,
      explanation: "Approaching means the wavefronts are squeezed together, so the observed frequency is higher.",
    },
    {
      id: "c5-mc-4",
      type: "mc",
      prompt: "A moving source toward a stationary observer compared with a moving observer toward a stationary source is:",
      choices: ["Exactly symmetric", "Not symmetric", "Always equal to zero", "Only different for light"],
      answer: 1,
      explanation: "The guide explicitly says these situations are not symmetric.",
    },
    {
      id: "c5-short-1",
      type: "short",
      prompt: "Why are the forward wave crests closer together when the source moves toward you?",
      expected: "Because each new crest is emitted from a position closer to the observer, compressing the wavelength.",
      rubric: "Mark correct if the answer says the source moves forward between emissions so the crests are squeezed together or the wavelength is shorter.",
    },
    {
      id: "c5-short-2",
      type: "short",
      prompt: "In the Doppler effect, what changes for you: the source frequency or the observed frequency?",
      expected: "The observed frequency changes.",
      rubric: "Mark correct if the answer says observed frequency, heard frequency, or perceived pitch changes while the source frequency stays the same.",
    },
  ],
  "chapter-6": [
    {
      id: "c6-mc-1",
      type: "mc",
      prompt: "The superposition principle says:",
      choices: [
        "Waves destroy each other permanently",
        "Total displacement is the algebraic sum of the individual displacements",
        "Only amplitudes multiply",
        "Waves stop when they meet",
      ],
      answer: 1,
      explanation: "Superposition means y_total = y₁ + y₂.",
    },
    {
      id: "c6-mc-2",
      type: "mc",
      prompt: "If two sources start in phase, constructive interference occurs when path difference is:",
      choices: ["nλ", "(n + 1/2)λ", "π only", "zero intensity only"],
      answer: 0,
      explanation: "With no phase-constant difference, constructive interference happens when Δx = nλ.",
    },
    {
      id: "c6-mc-3",
      type: "mc",
      prompt: "Destructive interference occurs when phase difference is:",
      choices: ["0, 2π, 4π", "π, 3π, 5π", "Any value", "Only λ"],
      answer: 1,
      explanation: "Destructive interference happens at odd multiples of π.",
    },
    {
      id: "c6-mc-4",
      type: "mc",
      prompt: "In the phase chart method, what cancels when comparing the two waves?",
      choices: ["The time term", "The wavelength", "The amplitude", "The phase constant"],
      answer: 0,
      explanation: "The time term cancels because both waves are compared at the same place and time.",
    },
    {
      id: "c6-short-1",
      type: "short",
      prompt: "What happens if two identical waves arrive exactly out of phase?",
      expected: "They destructively interfere and cancel to zero amplitude.",
      rubric: "Mark correct if the answer says cancellation, destructive interference, or zero net amplitude.",
    },
    {
      id: "c6-short-2",
      type: "short",
      prompt: "If Δφ₀ = 0 and the path difference is half a wavelength, what kind of interference do you get?",
      expected: "Destructive interference.",
      rubric: "Mark correct if the answer says destructive interference or complete cancellation.",
    },
  ],
  "chapter-7": [
    {
      id: "c7-mc-1",
      type: "mc",
      prompt: "Which is a correct wave speed formula?",
      choices: ["v = λf", "v = A/T", "v = φ/T", "v = I/r"],
      answer: 0,
      explanation: "The master reference gives v = λf = λ/T.",
    },
    {
      id: "c7-mc-2",
      type: "mc",
      prompt: "Which formula is the full wave equation?",
      choices: [
        "I = P/Area",
        "f = 1/T",
        "y(x,t) = A sin(2πt/T ± 2πx/λ + φ₀)",
        "ΔΦ = 2nπ",
      ],
      answer: 2,
      explanation: "That full sine expression is the complete 1-D wave equation from the reference table.",
    },
    {
      id: "c7-mc-3",
      type: "mc",
      prompt: "Which formula defines decibels?",
      choices: [
        "D - D₀ = 10 log₁₀(I/I₀)",
        "D = I/A",
        "D = 2π/T",
        "D = λf",
      ],
      answer: 0,
      explanation: "The reference table defines decibels with D - D₀ = 10 log₁₀(I/I₀).",
    },
    {
      id: "c7-mc-4",
      type: "mc",
      prompt: "Which formula gives phase difference for interference?",
      choices: [
        "ΔΦ = -2πΔx/λ + Δφ₀",
        "ΔΦ = λ/T",
        "ΔΦ = A²/r²",
        "ΔΦ = f/T",
      ],
      answer: 0,
      explanation: "That is the key phase-difference formula used throughout interference problems.",
    },
    {
      id: "c7-short-1",
      type: "short",
      prompt: "Which depends on the medium: v or f?",
      expected: "v depends on the medium.",
      rubric: "Mark correct if the answer says v, wave speed, or speed depends on the medium.",
    },
    {
      id: "c7-short-2",
      type: "short",
      prompt: "If amplitude doubles, what happens to intensity?",
      expected: "Intensity becomes four times as large.",
      rubric: "Mark correct if the answer says it quadruples, becomes 4 times larger, or 4× intensity.",
    },
  ],
};
