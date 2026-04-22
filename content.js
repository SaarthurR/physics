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
  {
    label: "Beats",
    value: "f_beat = |f₁ - f₂|",
  },
  {
    label: "Double slit",
    value: "nλ = d sin θ",
  },
];

export const QUIZ_2_FORMULA_STRIP = [
  { label: "Wave speed", value: "v = λf" },
  { label: "Total phase", value: "ΔΦ = -2πΔx / λ + Δφ₀" },
  { label: "Doppler", value: "f_obs = f_s ((v ± v_o) / (v ∓ v_s))" },
  { label: "Beats", value: "f_beat = |f₁ - f₂|" },
  { label: "Double slit", value: "Δx = d sin θ" },
  { label: "de Broglie", value: "λ = h / p" },
];

export const STUDY_GUIDE = {
  title: "Waves: Complete Study Guide",
  subtitle: "PW-Style | DL 1 - DL 5 | Acts 8.1 through 8.15",
  chapters: [
    {
      id: "chapter-1",
      number: "01",
      title: "Chapter 1 - What Is a Wave?",
      plainText: `
Physics 7C Unit 8 Waves Complete Study Guide Chapter 1 What Is a Wave.
The Hook Feel It Before You Name It.
You are at a stadium. The crowd does a wave. The individuals do not travel. They just move up and down. But the disturbance travels all the way around the stadium.
For the mechanical waves we start with, that is a wave in one sentence: a disturbance that moves through a medium, carrying energy, without actually transporting the medium itself.
Think about it. When an ocean wave passes under a boat, the boat bobs up and down. But the water under the boat is not flowing to shore. The energy travels. The water stays roughly in place.
Core Concept Transverse vs Longitudinal.
Transverse Waves. The medium moves perpendicular at 90 degrees to the direction the wave travels. Example: a rope wave. You shake one end up and down. The disturbance travels horizontally. The rope moves vertically.
In the simple surface-wave picture used here, water waves are treated as transverse because the visible surface motion is mostly up and down while the disturbance moves outward.
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
            <p>For the mechanical waves we start with, that's a wave in one sentence: a disturbance that moves through a medium, carrying energy, without actually transporting the medium itself.</p>
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
            <p><strong>Also:</strong> In the simple surface-wave model used in this class, water waves are treated as transverse because the surface moves up/down while the disturbance moves outward.</p>
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
A amplitude maximum displacement from equilibrium. In the simple model it is mainly source-set.
T period time for one complete oscillation. Source dependent.
f frequency cycles per second. f = 1/T. Units Hz.
lambda wavelength distance between consecutive crests or equivalent points.
v wave speed. v = lambda/T = lambda f. Medium dependent. Same source in different medium means same frequency but different speed and wavelength.
Phi total phase. Phi = 2pi t/T +/- 2pi x/lambda + phi0.
phi0 fixed phase constant set by the initial conditions together with the chosen origin for x and t.
Direction rule. Minus sign on x term means wave moves in plus x direction to the right. Plus sign means wave moves in minus x direction to the left.
Source vs Medium table. Period and frequency are source-set. Wave speed is medium-set. Wavelength depends on both. Amplitude is mainly source-set in the simple model. Phase constant is fixed by initial conditions and the chosen origin.
Worked Example Boat and Buoy Problem.
Harbor boat problem asks what moves, the wave speed, the amplitude, whether the boat and buoy share the same height, the wave equation assuming the wave moves left, the buoy motion, and the displacement at x = 5 m and t = 2 s.
Given T = 6 s, lambda = 20 m, A = 0.5 m, and boat at x = 0 on a crest when t = 0.
Wave speed v = 20/6 = 3.33 m/s.
Because the original prompt explicitly says to assume the wave moves left, y(x,t) = 0.5 sin(2pi t/6 + 2pi x/20 + pi/2).
The buoy at x = 10 m follows y_buoy(t) = 0.5 sin(2pi t/6 + 3pi/2).
At x = 5 m and t = 2 s, y ≈ -0.25 m.
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
            <p><strong>Source or medium?</strong> In the simple model it is mainly source-set. You usually control it by how hard you shake the source, though real transmitted amplitude can also depend on the setup.</p>

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
            <p>The "starting phase" - where the wave is in its cycle at t = 0, x = 0. It is fixed by the initial conditions together with your chosen origin for position and time.</p>
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
                  <td>Mainly source (simple model)</td>
                  <td>Mostly set by how energetically you disturb the medium, though real transmitted amplitude can also depend on the setup</td>
                </tr>
                <tr>
                  <td>Phase constant φ₀</td>
                  <td>Initial conditions / coordinate choice</td>
                  <td>Fixed once you choose where x = 0 and t = 0 and specify the wave's starting phase</td>
                </tr>
              </tbody>
            </table>
          `,
        },
        {
          id: "chapter-2-worked-example",
          title: "Worked Example - The Boat and Buoy Problem",
          html: `
            <div class="problem-prompt">
              <p><strong>Problem:</strong> You are in a small boat anchored in a harbor. Ocean waves are moving past you such that a wave crest passes by every six seconds. You observe that these crests are spaced 20 m apart. You also notice that a buoy anchored 10 m to the right of you is also bobbing along with the waves.</p>
              <ol>
                <li>Exactly what is moving as the waves propagate?</li>
                <li>What is the speed of the wave?</li>
                <li>When your boat is at a wave peak, you notice that it is 0.5 m above the buoy. A few seconds later when your boat is at a trough, it is 0.5 m lower than the buoy. What is the amplitude of this wave? Will the buoy and your boat ever be at the same height? (Draw a physical picture of the boat and buoy and label relevant distances.)</li>
                <li>Write an equation to describe this wave, assuming the wave moves to the left, your boat is at position x = 0, and that at time t = 0, your boat is on a crest. Explain all values.</li>
                <li>Using your answer in 3), write an equation to describe the motion of the buoy. On your board, graph the buoy&rsquo;s motion as a function of time, being sure to show at least two full periods.</li>
                <li>What is the displacement from equilibrium at x = 5 m and t = 2 s?</li>
              </ol>
            </div>
            <h4>1 - What is actually moving?</h4>
            <p>The water mostly oscillates around equilibrium. The thing that propagates from place to place is the disturbance and the energy it carries, not a chunk of water sailing across the harbor.</p>
            <h4>2 - Wave speed</h4>
            <div class="formula-inline">v = λ / T = 20 m / 6 s ≈ 3.33 m/s</div>
            <h4>3 - Amplitude and boat/buoy relationship</h4>
            <p>The boat is 0.5 m above the buoy at one instant and 0.5 m below a little later, so each object sits 0.5 m from equilibrium at its extreme position.</p>
            <div class="formula-inline">A = 0.5 m</div>
            <p>The boat and buoy are separated by 10 m, which is λ/2. That means they are always out of phase by π: when one is at a crest the other is at a trough, and they pass through equilibrium at the same height twice per cycle.</p>
            <h4>4 - Wave equation</h4>
            <p>The original DL1 prompt explicitly says to assume the wave moves to the left, so the sign on the x-term is plus. At x = 0 and t = 0 the boat is on a crest, so sin(φ₀) = 1 and φ₀ = π/2.</p>
            <div class="formula-box">y(x, t) = 0.5 sin(2πt/6 + 2πx/20 + π/2) meters</div>
            <h4>5 - Buoy motion</h4>
            <p>The buoy stays at x = 10 m, so plug x = 10 into the same wave equation:</p>
            <div class="formula-inline">y_buoy(t) = 0.5 sin(2πt/6 + 2π(10)/20 + π/2)</div>
            <div class="formula-inline">y_buoy(t) = 0.5 sin(2πt/6 + 3π/2) meters</div>
            <p>That matches the physical picture: when the boat is on a crest at t = 0, the buoy is 0.5 m below equilibrium.</p>
            <h4>6 - Displacement at x = 5 m, t = 2 s</h4>
            <div class="formula-inline">Φ = 2π(2)/6 + 2π(5)/20 + π/2 = 2π/3 + π/2 + π/2 = 2π/3 + π ≈ 5.76 rad</div>
            <div class="formula-inline">y ≈ 0.5 × sin(5.76) ≈ -0.25 m</div>
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
The sign of the position itself does not determine direction. What matters is whether the same feature reaches the larger-x point later or earlier.
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
            <p>If you have y(t) at x = 1.0 m and y(t) at x = 1.1 m, you can determine direction by comparing when the <em>same feature</em> arrives at the two points. The fact that x = 1.1 m is positive does <strong>not</strong> mean the wave moves left. It only means that point is farther to the right on the x-axis.</p>
            <p>If the x = 1.1 m graph is shifted to the right in time, that means the crest or trough reaches the farther-right point <em>later</em>. So the disturbance is traveling from x = 1.0 m toward x = 1.1 m: the wave is moving in the +x direction (to the right).</p>
            <p>If the x = 1.1 m graph were shifted to the left instead, the farther-right point would experience the same feature earlier, which would mean the wave is moving in the -x direction (to the left).</p>
            <p>You can see the same thing from the right-moving equation y = A sin(ωt - kx + φ₀). At a larger x, you need a larger t to keep the same phase, so the time graph at the farther point is delayed.</p>
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
            <p>Two identical speakers playing simultaneously. Each alone = 70 dB. Assuming the two waves arrive in phase at the listener so their amplitudes add, what is the combined level?</p>
            <p>Combined amplitude = 2A. Then, since I ∝ A², the intensity ratio is I/I₀ = (2A)²/A² = 4.</p>
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
Full formula with moving observer: f_observed = ((v +/- v_observer) / (v ∓ v_source)) x f_source.
Observer toward source uses plus in numerator. Away uses minus.
Worked example: v_s = 50 m/s, f_s = 50 Hz, sound speed v = 350 m/s. Forward wavelength 6 m gives 58.3 Hz. Backward wavelength 8 m gives 43.75 Hz.
The original setup also asks you to compare those wavelengths to the stationary value lambda = 7 m.
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
            <div class="formula-box">f_observed = ((v ± v_observer) / (v ∓ v_source)) × f_source</div>
            <p><strong>For the observer:</strong></p>
            <ul>
              <li>Observer moving TOWARD source → use PLUS in numerator (higher f)</li>
              <li>Observer moving AWAY from source → use MINUS in numerator (lower f)</li>
            </ul>
            <p><strong>For the source:</strong> use MINUS in the denominator when the source moves toward the observer, and PLUS when it moves away.</p>
            <p>Is it symmetric? NO. A source moving toward a stationary observer gives a different frequency than a stationary source with an observer moving toward it at the same speed. The formulas are NOT the same - test a number and you'll see.</p>
          `,
        },
        {
          id: "chapter-5-worked-example",
          title: "Worked Example - Ambulance Problem (FNT 2)",
          html: `
            <div class="problem-prompt">
              <p><strong>Setup:</strong> Consider an ambulance racing towards an accident at speed v = 50 m/s. The ambulance is equipped with a siren that emits a sine wave with frequency f = 50 Hz. At time t = 0 s, it is exactly halfway between two observers (Silas and Eppie), as shown in Figure 1 below. Furthermore, at t = 0 s, the siren is emitting a crest.</p>
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
              <ol>
                <li>What is the distance, x, that the ambulance has traveled between t = 0 s and t = 0.02 s?</li>
                <li>If the ambulance siren was emitting a crest at time t = 0, what is the siren doing at time t = 0.02 s? Is it emitting a crest or trough, or is it somewhere else in the cycle? How do you know?</li>
                <li>If sound travels in the air at 350 m/s, how far has the crest that was emitted at time t = 0 s traveled at time t = 0.02 s? Where is the t = 0 s crest that was emitted forward towards Eppie at time t = 0.02 s? Where is the t = 0 s crest that was emitted backwards towards Silas at time t = 0.02 s?</li>
                <li>Recall that the wavelength of a wave is defined to be the distance between successive crests. Based on your answers above, what is the wavelength of the wave traveling forward towards Eppie? What is the wavelength of the wave traveling backward towards Silas?</li>
                <li>How do your answers compare to the wavelength you would calculate using the equation v = λf (i.e., the wavelength observed if the ambulance were stationary)?</li>
              </ol>
            </div>
            <h4>1 - Ambulance displacement</h4>
            <div class="formula-inline">x = v<sub>s</sub>t = 50 × 0.02 = 1 m</div>
            <h4>2 - What is the siren doing at t = 0.02 s?</h4>
            <p>The siren completes f × t = 50 × 0.02 = 1 full cycle, so at t = 0.02 s it is emitting another crest.</p>
            <h4>3 - Where is the original crest?</h4>
            <div class="formula-inline">distance = vt = 350 × 0.02 = 7 m</div>
            <p>So the crest emitted at t = 0 has moved 7 m away from the original position in every direction, while the new crest is emitted from the ambulance's shifted position.</p>
            <h4>4 - Forward and backward wavelengths</h4>
            <p>Toward Eppie, the new crest starts 1 m closer to the old crest, so the wavelength is shorter. Toward Silas, the new crest starts 1 m farther away, so the wavelength is longer.</p>
            <div class="formula-inline">λ<sub>forward</sub> = 7 - 1 = 6 m</div>
            <div class="formula-inline">λ<sub>backward</sub> = 7 + 1 = 8 m</div>
            <div class="formula-inline">λ<sub>stationary</sub> = v / f = 350 / 50 = 7 m</div>
            <p>So the moving source compresses the forward wavelength below 7 m and stretches the backward wavelength above 7 m.</p>
            <h4>5 - Observed frequencies</h4>
            <div class="formula-inline">f_Eppie = v / λ<sub>forward</sub> = 350 / 6 ≈ 58.3 Hz</div>
            <div class="formula-inline">f_Silas = v / λ<sub>backward</sub> = 350 / 8 = 43.75 Hz</div>
            <p>Eppie hears the higher pitch because the ambulance is moving toward her. Silas hears the lower pitch because the ambulance is moving away from him.</p>
            <p>Verify with the Doppler formulas:</p>
            <div class="formula-inline">f_Eppie = (350 / (350 - 50)) × 50 = (350/300) × 50 ≈ 58.3 Hz</div>
            <div class="formula-inline">f_Silas = (350 / (350 + 50)) × 50 = (350/400) × 50 = 43.75 Hz</div>
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
Pond problem: Bob is 4 m from An and 2 m from Carla while An and Carla are 3 m apart.
If Bob is the source and T = 4/3 s, then lambda = 4 m.
If An and Carla are the sources and want constructive interference at Bob, the path difference is |4 - 2| = 2 m = n lambda, so possible wavelengths are 2 m, 1 m, 2/3 m, and so on.
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
            <p>The table below assumes the two waves have the same amplitude, which is why the extremes come out cleanly as 2A and 0.</p>
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
                  <td>Max amplitude (2A for equal amplitudes). Crests align.</td>
                </tr>
                <tr>
                  <td>Destructive</td>
                  <td>ΔΦ = π, 3π, 5π, ... ((2n+1) × π)</td>
                  <td>Zero amplitude only for equal amplitudes. Otherwise you get the smallest possible result, not total cancellation.</td>
                </tr>
                <tr>
                  <td>Partial</td>
                  <td>Anything else</td>
                  <td>For equal amplitudes, the result lies between 0 and 2A.</td>
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
            <div class="problem-prompt">
              <p><strong>Problem:</strong> Three people (An, Bob, and Carla) are in a very still pond. Bob generates waves by moving up and down in the water. The speed of water waves in this pond is 3 m/s.</p>
              <figure class="concept-figure concept-figure-small">
                <img src="./assets/figures/chapter6-pond-problem.png" alt="Pond problem diagram with An, Bob, and Carla distances" />
                <figcaption>The DL3 figure gives the actual geometry: Bob-An is 4 m, Bob-Carla is 2 m, and An-Carla is 3 m.</figcaption>
              </figure>
              <ol>
                <li>Suppose it takes Bob 4/3 seconds to travel through a cycle. Determine the wavelength of the resulting waves and use the wavefront representation to draw in the wave crests and troughs generated by Bob on your board. Label the wavelength on your sketch.</li>
                <li>Compare the motion of An and Carla, due to waves generated by Bob. Be as detailed as possible. (i.e. Do they move up and down at the same rate? Are they both at a crest at the same time?)</li>
                <li>The group allows the water to become calm, and then An and Carla move up and down with the same frequency as each other (different from Bob&rsquo;s in parts 1 and 2), starting their motion at the same instant at the same point in the cycle. They wish to team up so that, after they have been bobbing for a while, a wave crest from each person always arrives at Bob at the same time. With what frequency should they move? (Note that more than one correct answer is possible, your group only needs to find one possibility!) What type of interference is Bob experiencing?</li>
                <li>Use the wavefront representation to draw in the wave crests and troughs generated by An and by Carla. Do this on a different sketch than you used for questions 1) and 2).</li>
                <li>Describe Bob&rsquo;s motion in a sentence or two (no equation necessary). How does his motion differ from how it would be if only Carla were making waves?</li>
              </ol>
            </div>
            <h4>1 - Bob as the source</h4>
            <div class="formula-inline">λ = vT = 3 × (4/3) = 4 m</div>
            <p>So Bob's crests are 4 m apart, and troughs sit halfway between successive crests.</p>
            <h4>2 - An and Carla responding to Bob</h4>
            <p>Both observers move with the same frequency as Bob's wave because they are being driven by the same source. But they are not in the same phase, because Bob-An and Bob-Carla are different distances.</p>
            <div class="formula-inline">Δx = |4 - 2| = 2 m = λ/2</div>
            <p>That means An and Carla are out of phase by π for Bob's original wave: when one is near a crest, the other is near a trough.</p>
            <h4>3 - An and Carla as the sources</h4>
            <p>For Bob to receive crests from An and Carla at the same time, the path difference from the two sources to Bob must be an integer number of wavelengths:</p>
            <div class="formula-inline">Δx = |4 - 2| = 2 m = nλ</div>
            <div class="formula-inline">λ = 2/n</div>
            <p>Possible wavelengths are 2 m, 1 m, 2/3 m, and so on.</p>
            <h4>4 - Allowed driving frequencies and interference type</h4>
            <div class="formula-inline">f = v/λ = 3 / (2/n) = 1.5n Hz</div>
            <p>So possible frequencies are 1.5 Hz, 3.0 Hz, 4.5 Hz, and so on. Those choices make the interference at Bob constructive.</p>
            <h4>5 - Bob's motion</h4>
            <p>With both An and Carla timed this way, Bob gets a larger oscillation than he would from either one alone because the two arriving disturbances reinforce each other instead of partially canceling.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-7",
      number: "07",
      title: "Chapter 7 - Core Formula Reference (DL 1-3)",
      plainText: `
Chapter 7 Core Formula Reference for DL1 to DL3.
v = lambda f = lambda/T wave speed.
f = 1/T frequency inverse of period.
y(x,t) = A sin(2pi t/T +/- 2pi x/lambda + phi0) full wave equation.
I proportional to A^2 intensity proportional to amplitude squared.
I proportional to 1/r^2 in 3D and 1/r in 2D.
D - D0 = 10 log10(I/I0) decibel definition.
f_obs = v/(v +/- v_s) x f_s for moving source.
f_obs = (v +/- v_o)/(v ∓ v_s) x f_s for moving source and observer.
Delta Phi = -2pi Delta x/lambda + Delta phi0 phase difference.
Constructive Delta Phi = 2npi. Destructive Delta Phi = (2n+1)pi.
      `.trim(),
      sections: [
        {
          id: "chapter-7-reference",
          title: "Core Formula Reference (DL 1-3)",
          html: `
            <p>This is the compact DL1-DL3 subset. For the full DL1-DL5 formula sheet, use Chapter 12.</p>
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
                  <td>f_obs = (v ± v_o)/(v ∓ v_s) × f_s</td>
                  <td>Doppler, source + observer moving</td>
                  <td>Observer toward: plus in numerator; source toward: minus in denominator</td>
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
    {
      id: "chapter-8",
      number: "08",
      title: "Chapter 8 - Interference Scenarios & Simplified Phase Charts",
      plainText: `
Chapter 8 Interference Scenarios and Simplified Phase Charts DL4.
Turn a speaker backwards and the reversed wiring creates a fixed phase difference of pi.
Simplified phase charts keep only the changing terms: path difference and fixed phase constant difference.
Core relation: Delta Phi = -2pi Delta x / lambda + Delta phi0.
Scenario 1 same spot and reversed leads gives destructive interference.
Scenario 2 one speaker forward by lambda/2 gives destructive interference.
Scenario 3 lambda/2 apart and reversed leads gives constructive interference because the two phase shifts cancel.
Scenario 4 one speaker forward by lambda gives constructive interference.
Walking around lambda-separated speakers changes path difference continuously and produces loud quiet loud bands.
KDVS radio antennas add a fixed phase constant difference of pi/2 before path difference is even considered.
      `.trim(),
      sections: [
        {
          id: "chapter-8-hook",
          title: "The Hook - Turn a Speaker Backwards",
          html: `
            <p>Imagine two identical speakers playing the same note side by side. Swap the red and black wires on one speaker. The cone that used to push air toward you now pulls it away at exactly the same moment the other speaker pushes.</p>
            <p>The two waves perfectly cancel. Total silence from two working speakers. That's destructive interference in action, and it's the clearest demo of what phase difference really means.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter8-speaker-scenario.png" alt="Speaker interference scenarios from DL4" />
              <figcaption>The DL4 speaker setups make the path-difference and wiring-difference cases concrete before you touch the algebra.</figcaption>
            </figure>
          `,
        },
        {
          id: "chapter-8-simplified-phase-chart",
          title: "The Simplified Phase Chart",
          html: `
            <p>You don't always need all three columns. When two waves exist at the same point at the same time, the time-term difference is zero. What matters is:</p>
            <div class="formula-box">ΔΦ = -2π(Δx)/λ + Δφ₀</div>
            <p>The simplified chart strips the problem down to just what changes between the two waves:</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter8-simplified-phase-chart.png" alt="Simplified phase chart from DL4" />
              <figcaption>This is the compact version of the phase chart: path contribution, wiring contribution, then total phase difference.</figcaption>
            </figure>
          `,
        },
        {
          id: "chapter-8-four-scenarios",
          title: "The Four Speaker Scenarios - Know These Cold",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Scenario</th>
                  <th>Setup</th>
                  <th>-2πΔx/λ</th>
                  <th>Δφ₀</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Same spot, leads reversed</td>
                  <td>0</td>
                  <td>π</td>
                  <td>Destructive - near silence</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>One speaker pushed forward λ/2</td>
                  <td>-π</td>
                  <td>0</td>
                  <td>Destructive - quiet</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>λ/2 apart and leads reversed</td>
                  <td>-π</td>
                  <td>π</td>
                  <td>Constructive - the two phase shifts cancel</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>One speaker pushed forward λ</td>
                  <td>-2π</td>
                  <td>0</td>
                  <td>Constructive - loud</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Common trap:</strong> Scenario 3 looks destructive twice, but the contributions add to zero phase difference: ΔΦ = -π + π = 0, so the result is constructive.
            </div>
          `,
        },
        {
          id: "chapter-8-walking-around",
          title: "Walking Around the Speakers - What You Hear",
          html: `
            <p>In Scenario 4, the speakers are λ apart. When you walk around them, the path length difference changes continuously.</p>
            <p>As Δx sweeps from 0 to λ/2 to λ, you hear loud, then quiet, then loud again. You're literally scanning through the interference pattern in space.</p>
            <p>That is the physical intuition behind interference bands: different points in space correspond to different path differences, which means different values of ΔΦ.</p>
          `,
        },
        {
          id: "chapter-8-kdvs",
          title: "Problem Start - KDVS Radio Antennas",
          html: `
            <div class="problem-prompt">
              <p><strong>Problem start:</strong> Suppose KDVS, the campus radio station, were to transmit from two antennas, each set a distance x from the North-South direction (see figure). Also, suppose there is a phase constant difference, Δϕ₀, associated with the waves coming from each antenna such that each maximum from antenna A is emitted a time T/4 earlier than those of antenna B (the words an electrical engineer might use for this are “the signal from A is π/2 ahead of the signal from antenna B”).</p>
              <figure class="concept-figure concept-figure-small">
                <img src="./assets/figures/chapter8-kdvs-antennas.png" alt="KDVS radio antenna figure showing antennas A and B placed symmetrically about the north-south direction" />
                <figcaption>The original DL4 KDVS figure: antennas A and B sit symmetrically about the north-south line, each a distance x from center.</figcaption>
              </figure>
              <p><strong>Exact DL questions:</strong></p>
              <ol>
                <li>How does the phase constant difference affect the signal received from both antennas?</li>
                <li>Which quantities affect the type of interference?</li>
                <li>Does the type of interference depend on where the observer is located?</li>
              </ol>
            </div>
            <h4>1 - Translate the timing lead into phase language</h4>
            <p>If antenna A is one-quarter period ahead of antenna B, then the fixed phase constant difference is:</p>
            <div class="formula-inline">Δφ₀ = 2π(T/4)/T = π/2</div>
            <h4>2 - Combine source phase and path difference</h4>
            <p>The observer cares about both the source offset and the extra distance one wave travels compared with the other.</p>
            <div class="formula-box">ΔΦ = -2πΔx/λ + π/2</div>
            <h4>3 - Decide what happens at a location</h4>
            <p>Constructive interference happens when ΔΦ = 2nπ. Destructive interference happens when ΔΦ = (2n + 1)π. Partial interference is everything in between.</p>
            <p>Because Δx changes with observer position, the interference pattern changes with observer position too. The source phase difference shifts the whole pattern, but location still matters.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-9",
      number: "09",
      title: "Chapter 9 - Beats: Superposition of Different Frequencies",
      plainText: `
Chapter 9 Beats Superposition of Different Frequencies DL4.
Beats happen when two close frequencies drift in and out of phase.
The beat period is the time for loud quiet loud.
Beat formulas: f_beat = |f1 - f2| and f_carrier = (f1 + f2)/2.
Phase-chart derivation uses only the time column because the speakers are at the same place.
Reading the beat graphs shows a slow envelope around a faster carrier oscillation.
Challenge problem: Angharad between two bagpipers hears beat frequency 4 Hz and carrier frequency 260 Hz.
Running toward the 258 Hz piper and away from the 262 Hz piper at about 2.62 m/s makes the heard frequencies equal.
      `.trim(),
      sections: [
        {
          id: "chapter-9-hook",
          title: "The Hook - The Tuning Trick",
          html: `
            <p>Guitar players use beats to tune. Play the same note on two strings. If they're slightly out of tune, you hear a slow pulsing sound: wah-wah-wah.</p>
            <p>The closer the strings are in frequency, the slower the pulse. When the pulse disappears completely, they're in tune. That pulse is beats.</p>
          `,
        },
        {
          id: "chapter-9-what-happening",
          title: "What's Actually Happening",
          html: `
            <p>Two waves with slightly different frequencies start in phase, so the sound is loud. As time goes on, they slowly drift out of phase, so the sound becomes quiet. Then they drift back into phase again.</p>
            <p>The loud-quiet-loud cycle is the beat period. What you hear is a carrier tone whose amplitude pulses inside a slower envelope.</p>
          `,
        },
        {
          id: "chapter-9-derivation",
          title: "Deriving the Beat Frequency - Phase Chart Method",
          html: `
            <p>Put both speakers at the same location, with the same phase constant, but different periods T₁ and T₂. At t = 0 they interfere constructively, so ΔΦ = 0.</p>
            <p>After one beat period T<sub>b</sub>, they are back in phase again, so ΔΦ = 2π:</p>
            <div class="formula-inline">ΔΦ = 2πT<sub>b</sub>/T₁ - 2πT<sub>b</sub>/T₂ = 2π</div>
            <div class="formula-inline">T<sub>b</sub>(1/T₁ - 1/T₂) = 1</div>
            <div class="formula-inline">T<sub>b</sub> = 1/|f₁ - f₂|</div>
            <div class="formula-box">f<sub>beat</sub> = |f₁ - f₂| &nbsp;&nbsp;&nbsp; f<sub>carrier</sub> = (f₁ + f₂) / 2</div>
          `,
        },
        {
          id: "chapter-9-reading-graphs",
          title: "Reading the Beat Graphs",
          html: `
            <div class="concept-gallery">
              <figure class="concept-figure">
                <img src="./assets/figures/chapter9-beat-waveforms.png" alt="Two close-frequency wave graphs from DL4" />
                <figcaption>Figure 1 shows the two nearby frequencies that gradually drift in and out of phase.</figcaption>
              </figure>
              <figure class="concept-figure">
                <img src="./assets/figures/chapter9-beat-envelope.png" alt="Beat envelope graph from DL4" />
                <figcaption>Figure 2 shows their sum: a fast carrier oscillation wrapped in a slower beat envelope.</figcaption>
              </figure>
            </div>
            <p>In the DL figure, the red curve has T = 4 s, so f = 0.25 Hz. The blue curve has T = 3.2 s, so f ≈ 0.313 Hz. That gives a beat period of about 16 s.</p>
            <p>The tight oscillations inside the envelope are the carrier frequency, which is the average of the two source frequencies.</p>
          `,
        },
        {
          id: "chapter-9-challenge",
          title: "Challenge Problem - Beats + Doppler Together",
          html: `
            <div class="problem-prompt">
              <p><strong>Challenge:</strong> Angharad stands midway between two out-of-tune bagpipers. One is playing a note with frequency f₁ = 258 Hz, while the other is playing a note with frequency f₂ = 262 Hz. The speed of sound in the air is 340 m/s.</p>
              <ol>
                <li>What is the beat frequency Angharad hears? What is the carrier frequency she hears?</li>
                <li>If Angharad does not want to hear beats, how fast and in which direction should she run so that the frequencies she hears from the two bagpipers are the same? What is this frequency she hears?</li>
              </ol>
            </div>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter9-bagpipers-doppler.svg" alt="Angharad standing midway between two bagpipers playing 258 and 262 hertz notes" />
              <figcaption>The DL4 bagpiper challenge itself is text-only, so this support diagram makes the midpoint setup and running direction visual.</figcaption>
            </figure>
            <h4>1 - Beat frequency and carrier frequency</h4>
            <div class="formula-inline">f<sub>beat</sub> = 262 - 258 = 4 Hz</div>
            <div class="formula-inline">f<sub>carrier</sub> = (258 + 262) / 2 = 260 Hz</div>
            <h4>2 - Which way should she run?</h4>
            <p>She wants the lower note to shift up and the higher note to shift down, so she must run toward the 258 Hz piper and away from the 262 Hz piper.</p>
            <div class="formula-inline">f&rsquo;<sub>258</sub> = ((340 + u) / 340) × 258</div>
            <div class="formula-inline">f&rsquo;<sub>262</sub> = ((340 - u) / 340) × 262</div>
            <p>Set them equal so the beats disappear:</p>
            <div class="formula-inline">258(340 + u) = 262(340 - u)</div>
            <div class="formula-inline">520u = 4 × 340</div>
            <div class="formula-inline">u ≈ 2.62 m/s</div>
            <h4>3 - Common heard frequency</h4>
            <div class="formula-inline">f&rsquo; ≈ ((340 + 2.62) / 340) × 258 ≈ 260 Hz</div>
            <p>So she hears a single tone near 260 Hz once the Doppler shifts cancel the original mismatch.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-10",
      number: "10",
      title: "Chapter 10 - Diffraction and Young's Double Slit Interference",
      plainText: `
Chapter 10 Diffraction and Young's Double Slit Interference DL5.
Huygens's principle says a sufficiently small opening can act approximately like a new point source because each point on a wavefront emits secondary wavelets.
Wavefront model shows wavelength and phase relationships; ray model emphasizes direction of propagation.
Young's experiment gives decisive evidence for the wave behavior of light because two slits produce alternating bright and dark stripes.
Double-slit geometry gives path difference Delta x = d sin theta.
Constructive condition: d sin theta = n lambda. Destructive condition: d sin theta = (n + 1/2) lambda.
Small angle approximation gives d = lambda D / Delta y for the first bright fringe spacing.
Red light spreads farther than blue because longer wavelength gives a larger angle.
      `.trim(),
      sections: [
        {
          id: "chapter-10-hook",
          title: "The Hook - Huygens's Principle",
          html: `
            <p>Plane waves hit a wall with a tiny hole. On the other side, you don't see a narrow beam. You see circular waves spreading in all directions, as if the hole has become a brand-new point source.</p>
            <p>That is Huygens's principle: every point on a wavefront acts like a source of secondary wavelets, and a sufficiently small opening behaves approximately like a new point source.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter10-huygens-hole.png" alt="Plane waves passing through a small opening and spreading out as circular waves" />
              <figcaption>This DL5 diagram is the visual heart of diffraction: the hole re-emits the disturbance in all directions.</figcaption>
            </figure>
          `,
        },
        {
          id: "chapter-10-wavefront-ray",
          title: "Wavefront Model vs. Ray Model",
          html: `
            <h4>Wavefront Model</h4>
            <p>Shows wavelength and phase relationships. Solid lines can represent crests, dashed lines troughs, and the spacing between crests gives λ.</p>
            <h4>Ray Model</h4>
            <p>Emphasizes direction of propagation. Rays are drawn perpendicular to the wavefronts and point along the direction the wave travels.</p>
            <p>The ray model is simpler, but it does not show phase or amplitude directly, which is why interference problems still need the wavefront picture.</p>
          `,
        },
        {
          id: "chapter-10-young",
          title: "Young's Double Slit - Light Shows Wave Behavior",
          html: `
            <p>If light behaved only like classical particles, two slits would produce two bright patches on a wall and little else. If light behaves as a wave, each slit becomes a new source and the two waves interfere.</p>
            <p>What Young observed was an alternating pattern of bright and dark stripes across the screen. That pattern gave decisive evidence for the wave character of light.</p>
          `,
        },
        {
          id: "chapter-10-geometry",
          title: "The Geometry - Deriving d sin θ = nλ",
          html: `
            <p>Two slits are separated by a distance d, and the screen is far away at distance D. A point on the screen at angle θ receives waves that traveled different distances from the two slits.</p>
            <p>The path length difference is:</p>
            <div class="formula-box">Δx = d sin θ</div>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter10-double-slit-geometry.png" alt="Young's double slit geometry with d, D, theta, and fringe spacing" />
              <figcaption>The DL5 geometry figure links the picture on the screen to the path-length difference that creates interference.</figcaption>
            </figure>
            <div class="formula-inline">Constructive: d sin θ = nλ</div>
            <div class="formula-inline">Destructive: d sin θ = (n + 1/2)λ</div>
          `,
        },
        {
          id: "chapter-10-small-angle",
          title: "The Small Angle Approximation",
          html: `
            <p>When the screen is much farther away than the slit spacing, the angle is small enough that sin θ ≈ tan θ ≈ θ.</p>
            <div class="formula-inline">tan θ = Δy / D</div>
            <p>For the first bright spot, n = 1, so:</p>
            <div class="formula-box">d = λD / Δy</div>
            <p>This lets you calculate an impossibly tiny slit separation from the much easier-to-measure fringe spacing on the screen.</p>
          `,
        },
        {
          id: "chapter-10-worked-example",
          title: "Worked Example - Measuring Slit Spacing and Color Spread",
          html: `
            <div class="problem-prompt">
              <p><strong>DL5 application:</strong> We are now going to test what we learned in the previous activity. You will shine light from a single wavelength red He-Ne laser on a &ldquo;wall&rdquo; with two slits in it. Then you will use the known value of the laser wavelength and measurements concerning the position of the bright spots to determine the spacing of the slits.</p>
              <ol>
                <li>Slide the slide horizontally so the laser hits the two-slit pattern. Make sure the laser spot is vertically centered across the slits. You can do this by adjusting the slits while watching the diffraction pattern on the wall. Describe the pattern and make a measurement of the spot separation, Δy.</li>
                <li>Use what you learned in the previous activity to determine the slit separation. The red laser has a wavelength of 633 nm or 6.33 × 10⁻⁷ m.</li>
                <li>Predict what will happen to the distance between the bright fringes when you change the light to blue color. Explain your prediction and run the simulation by changing the color of the laser to blue. If the result is different from what you predicted, explain why.</li>
              </ol>
            </div>
            <h4>1 - Use the small-angle result</h4>
            <div class="formula-inline">d = (633 × 10⁻⁹ × 1.5) / 0.0025 ≈ 3.80 × 10⁻⁴ m</div>
            <p>That is about 0.38 mm: tiny enough to be hard to measure directly, but easy to infer from the interference pattern.</p>
            <h4>2 - Why red spreads more than blue</h4>
            <p>For fixed slit spacing d, the fringe spacing scales with wavelength because Δy = λD/d. Red light has the longer wavelength, so its bright fringes land farther apart. Blue light has the shorter wavelength, so its fringes bunch closer together.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-11",
      number: "11",
      title: "Chapter 11 - Diffraction Gratings and Wave Behavior of Light",
      plainText: `
Chapter 11 Diffraction Gratings and Wave Behavior of Light DL5.
CD rainbows come from diffraction grating behavior.
More slits do not move the bright spots; they sharpen them.
Grating formula: n lambda = d sin theta.
White light spreads because each wavelength satisfies the equation at a different angle.
Thin-film butterfly problem uses reflections from successive layers and asks for the spacing that makes blue light constructive.
Phase-shifted double slit problem places a screen 4 m away and asks how a nonzero phase constant difference moves the bright pattern.
      `.trim(),
      sections: [
        {
          id: "chapter-11-hook",
          title: "The Hook - The Rainbow in a CD",
          html: `
            <p>Hold a CD at an angle under white light and you see a rainbow. The disc acts like a diffraction grating: thousands of microscopic tracks behave like evenly spaced slit sources.</p>
            <p>Red bends the most because it has the longest wavelength. Blue bends the least because it has the shortest.</p>
          `,
        },
        {
          id: "chapter-11-multislit",
          title: "Multiple Slits - Why More Is Sharper",
          html: `
            <p>With two slits, the bright regions are fairly broad. With many slits, the bright regions become much sharper and the dark regions wider, even though the bright spots stay at the same angles.</p>
            <p>That is why diffraction gratings are so good at separating wavelengths: they don't change the angle formula, they make the maxima much more precise.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter11-multislit-maxima.png" alt="Multi-slit or diffraction grating diagram from DL5" />
              <figcaption>More slits sharpen the peaks instead of moving them, which is the key intuition behind diffraction gratings.</figcaption>
            </figure>
          `,
        },
        {
          id: "chapter-11-grating-formula",
          title: "The Diffraction Grating Formula",
          html: `
            <div class="formula-box">nλ = d sin θ</div>
            <p>Here n is the order, λ is the wavelength, d is the slit spacing, and θ is the angle from the central maximum.</p>
            <p>The same constructive-interference condition from the double-slit case still governs the bright peaks. The difference is that many slits make those peaks dramatically cleaner.</p>
          `,
        },
        {
          id: "chapter-11-white-light",
          title: "White Light Through a Grating",
          html: `
            <p>White light contains wavelengths from roughly 400 nm to 700 nm. For the first bright order, each wavelength satisfies the grating equation at a different angle.</p>
            <ul>
              <li>Violet is closest to the center because its wavelength is shortest.</li>
              <li>Red is farthest from the center because its wavelength is longest.</li>
            </ul>
            <p>That is why a diffraction grating fans white light out into a rainbow.</p>
          `,
        },
        {
          id: "chapter-11-thin-film",
          title: "Thin Film Interference - The Butterfly Wings Problem",
          html: `
            <div class="problem-prompt">
              <p><strong>Challenge:</strong> The blue morpho butterfly is famous for its iridescent blue wings. This brilliant coloration is produced not by pigmentation but rather by many layers of very thin scales separated by air, as shown in the figure to the right. The scales themselves are much smaller than the wavelength of visible light, and the interference that produces the distinctive coloration is from rays of light reflected off the successive layers of scales.</p>
              <ol>
                <li>Draw one incident ray coming from the light source, as shown in the picture, reflecting straight back from the top scale. Draw another incident ray transmitting through the first scale but reflecting from the second scale.</li>
                <li>The two reflected rays you drew in a) meet at the top scale and interfere. How large must the distance d be for the two reflections of blue light rays to interfere constructively? Blue light has a wavelength of about 450 nm in air. Assume that the reflected rays do not have a phase constant difference.</li>
                <li>What type of interference would result from multiple reflections of blue light from successive layers of scales?</li>
                <li>Will there be some wavelengths of light that interfere destructively?</li>
              </ol>
            </div>
            <h4>1 - The two important rays</h4>
            <p>One ray reflects immediately from the top layer. The other travels down to the next layer, reflects, and then travels back up. That second ray covers an extra round-trip distance inside the layered structure.</p>
            <h4>2 - Constructive blue reflection</h4>
            <p>If there is no extra reflection phase offset, the path length difference is just the extra round trip:</p>
            <div class="formula-inline">Δx = 2d = nλ</div>
            <div class="formula-inline">d = nλ/2</div>
            <p>For the smallest nonzero thickness that works for blue light, choose n = 1:</p>
            <div class="formula-inline">d = 450 nm / 2 = 225 nm</div>
            <h4>3 - What repeated reflections do</h4>
            <p>If many successive layers are built around that same spacing, the blue reflections keep arriving in phase and strongly reinforce one another. That gives the wing its bright structural blue.</p>
            <h4>4 - Other wavelengths</h4>
            <p>Yes. Other wavelengths can satisfy destructive or only partial-interference conditions, which is why thin-film structures can boost one color while suppressing others.</p>
          `,
        },
        {
          id: "chapter-11-phase-shift",
          title: "Problem Start - Double Slit with a Phase Shift",
          html: `
            <div class="problem-prompt">
              <p><strong>Problem start:</strong> You are performing a double slit experiment very similar to the one from DL by shining a laser on two narrow slits spaced by some small distance. However, by placing a piece of crystal in one of the slits, you are able to make it so that the rays of light that travel through the two slits have some non-zero phase constant difference, φ₀,bottom − φ₀,top = Δφ₀. You observe the first bright spot above the center (y = 0) of the interference pattern on a screen placed 4 meters away from the slits. As in DL, you may use the approximations D ≫ d and sin θ ≈ tan θ.</p>
              <figure class="concept-figure">
                <img src="./assets/figures/chapter11-phase-shifted-slit.png" alt="Phase-shifted double slit figure with a shifted fringe pattern" />
                <figcaption>A phase constant shift moves the entire pattern; path length difference then tells you where you are inside that shifted pattern.</figcaption>
              </figure>
              <p><strong>NOTE:</strong> How does the phase constant difference affect the interference pattern? What is the path length difference at the center of the interference pattern? What about the total phase difference? What kind of interference happens at the center? What is the path length difference condition to have a bright spot?</p>
            </div>
            <h4>1 - Start at the center of the screen</h4>
            <p>At y = 0 the two paths are the same length, so Δx = 0. That means the center no longer has zero total phase difference. Instead:</p>
            <div class="formula-inline">ΔΦ_center = Δφ₀</div>
            <p>So if Δφ₀ is not 0 or 2π, the center is not the central bright maximum anymore. The whole interference pattern shifts.</p>
            <h4>2 - Bright-fringe condition with a phase offset</h4>
            <div class="formula-inline">ΔΦ = -2πΔx/λ + Δφ₀</div>
            <div class="formula-inline">-2πΔx/λ + Δφ₀ = 2πn</div>
            <div class="formula-inline">Δx = (Δφ₀ - 2πn)λ / (2π)</div>
            <h4>3 - Convert path difference into screen position</h4>
            <p>For a double slit, Δx ≈ d sin θ, so the shifted bright spots satisfy:</p>
            <div class="formula-inline">d sin θ = (Δφ₀ - 2πn)λ / (2π)</div>
            <p>With the small-angle approximation, y ≈ D tan θ ≈ D sin θ. Once you know the first bright spot's y-value, that relation tells you how far the whole pattern moved because of the crystal.</p>
          `,
        },
      ],
    },
    {
      id: "chapter-12",
      number: "12",
      title: "Chapter 12 - Complete Formula Reference (DL 1-5)",
      plainText: `
Chapter 12 Complete Formula Reference DL1 to DL5.
Wave speed v = lambda f = lambda/T.
Frequency f = 1/T.
Full wave equation y = A sin(2pi t/T +/- 2pi x/lambda + phi0).
Intensity scales as amplitude squared.
Inverse distance laws for 2D and 3D waves.
Decibel definition.
Doppler formulas.
Interference phase difference and constructive and destructive conditions.
Beat formulas.
Double-slit formulas and thin-film constructive condition.
      `.trim(),
      sections: [
        {
          id: "chapter-12-reference",
          title: "Complete Formula Reference",
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
                  <td>v is medium-dependent; f is source-dependent</td>
                </tr>
                <tr>
                  <td>f = 1/T</td>
                  <td>Frequency = reciprocal of period</td>
                  <td>Units are Hz</td>
                </tr>
                <tr>
                  <td>y = A sin(2πt/T ± 2πx/λ + φ₀)</td>
                  <td>Full 1-D wave equation</td>
                  <td>Minus means right-moving; plus means left-moving</td>
                </tr>
                <tr>
                  <td>I ∝ A²</td>
                  <td>Intensity scales with amplitude squared</td>
                  <td>Double A means 4× intensity</td>
                </tr>
                <tr>
                  <td>I ∝ 1/r² (3D), 1/r (2D)</td>
                  <td>Spreading loss with distance</td>
                  <td>Assumes no dissipation</td>
                </tr>
                <tr>
                  <td>D - D₀ = 10 log₁₀(I/I₀)</td>
                  <td>Decibel scale</td>
                  <td>+10 dB means 10× intensity</td>
                </tr>
                <tr>
                  <td>f_obs = v/(v ± v_s) × f_s</td>
                  <td>Doppler for moving source</td>
                  <td>Use minus when the source moves toward the observer</td>
                </tr>
                <tr>
                  <td>f_obs = (v ± v_o)/(v ∓ v_s) × f_s</td>
                  <td>Doppler with moving observer and source</td>
                  <td>Observer toward source uses plus in the numerator; source toward uses minus in the denominator</td>
                </tr>
                <tr>
                  <td>ΔΦ = -2πΔx/λ + Δφ₀</td>
                  <td>Core two-source phase-difference formula</td>
                  <td>This is the whole phase-chart story in one line</td>
                </tr>
                <tr>
                  <td>Constructive: ΔΦ = 2nπ</td>
                  <td>In-phase condition</td>
                  <td>Loud or bright result</td>
                </tr>
                <tr>
                  <td>Destructive: ΔΦ = (2n+1)π</td>
                  <td>Anti-phase condition</td>
                  <td>Quiet or dark result</td>
                </tr>
                <tr>
                  <td>f<sub>beat</sub> = |f₁ - f₂|</td>
                  <td>Beat frequency</td>
                  <td>Always take the absolute value</td>
                </tr>
                <tr>
                  <td>f<sub>carrier</sub> = (f₁ + f₂)/2</td>
                  <td>Carrier frequency</td>
                  <td>This is the pitch you hear inside the envelope</td>
                </tr>
                <tr>
                  <td>Δx = d sin θ</td>
                  <td>Double-slit path length difference</td>
                  <td>d is slit spacing</td>
                </tr>
                <tr>
                  <td>nλ = d sin θ</td>
                  <td>Bright fringes</td>
                  <td>n = 0 is the central maximum</td>
                </tr>
                <tr>
                  <td>(n + 1/2)λ = d sin θ</td>
                  <td>Dark fringes</td>
                  <td>First dark fringe is beside the center</td>
                </tr>
                <tr>
                  <td>d = λD / Δy</td>
                  <td>Find slit spacing from fringe spacing</td>
                  <td>Uses the small-angle approximation</td>
                </tr>
                <tr>
                  <td>2d = nλ</td>
                  <td>Simple constructive thin-film condition</td>
                  <td>Only valid when no extra reflection phase flip matters</td>
                </tr>
              </tbody>
            </table>
          `,
        },
      ],
    },
    {
      id: "chapter-13",
      number: "13",
      title: "Chapter 13 - Textbook Supplement: Sections 8.1-8.6",
      plainText: `
Chapter 13 Textbook Supplement Sections 8.1 to 8.6.
Section 8.1 introduces material waves as disturbances that transfer energy through a medium without transporting the medium itself.
Material waves require both a medium that can be displaced and restoring forces between neighboring particles.
Pulse waves are single disturbances while periodic harmonic waves repeat continuously.
Only transverse waves can be polarized because only they have multiple possible directions of oscillation perpendicular to travel.
Section 8.2 focuses on wave representation through equations, snapshots, time plots, total phase, and fixed phase constant.
The wave equation includes amplitude, wavelength, period, frequency, direction, and phase information.
Section 8.3 treats multi-dimensional waves using wavefronts, rays, sound as a pressure wave, and intensity spreading over larger wavefronts.
Section 8.4 derives Doppler formulas for moving sources, moving observers, and the combined case.
Section 8.5 formalizes superposition and interference using total phase difference, path length difference, and phase constant difference.
Section 8.6 shows that beats come from adding two nearby frequencies, producing a carrier and an envelope.
      `.trim(),
      sections: [
        {
          id: "chapter-13-8-1",
          title: "8.1 - Introduction to Waves",
          html: `
            <p>The LibreTexts section starts from the physical picture underneath the formulas: a wave exists because a medium can be displaced, and once one part is displaced, restoring forces push and pull neighboring parts so the disturbance keeps getting handed forward.</p>
            <p>That is why a wave can move energy through the medium without the medium itself being carried away with it. The particles only wobble around equilibrium; the disturbance is what travels.</p>
            <p>A <strong>pulse wave</strong> is one brief disturbance. A <strong>periodic harmonic wave</strong> repeats continuously and gives us the clean sinusoidal model used all over the rest of the chapter.</p>
            <p>The textbook also formalizes the vocabulary around waves: displacement, equilibrium, amplitude, period, frequency, wavelength, wave speed, and dimensionality.</p>
            <p><strong>Polarization</strong> is the special idea this section adds most clearly. Only transverse waves can be polarized, because only transverse waves can choose among different perpendicular directions to oscillate in. A longitudinal wave oscillates only along the direction of travel, so there is nothing to filter into one plane.</p>
          `,
        },
        {
          id: "chapter-13-8-2",
          title: "8.2 - Wave Representation",
          html: `
            <p>This textbook section is really about becoming fluent at reading a wave from both an equation and a graph. The wave equation is treated like a compact sentence that stores the amplitude, timing, spacing, direction, and starting offset of the wave all at once.</p>
            <div class="formula-box">y(x, t) = A sin(2πt/T ± 2πx/λ + φ₀)</div>
            <p>LibreTexts explicitly contrasts a <strong>snapshot plot</strong> of displacement versus position with a <strong>time plot</strong> of displacement versus time at one position. Snapshot graphs give wavelength. Time graphs give period. You need both to reconstruct the full wave.</p>
            <p>It also leans harder on <strong>total phase</strong>, which tells you exactly where you are in the oscillation cycle:</p>
            <div class="formula-inline">Φ(x, t) = 2πt/T ± 2πx/λ + φ₀</div>
            <p>The fixed phase constant φ₀ is the initial offset for the chosen origin. The sign on the x-term tells the direction: minus means right-moving, plus means left-moving.</p>
            <p>One textbook skill that was missing from the site before is this: from graphs, you can infer not just A, T, and λ, but also the direction of travel and the value of φ₀ by plugging in a known point like a crest, trough, or zero crossing.</p>
          `,
        },
        {
          id: "chapter-13-8-3",
          title: "8.3 - Multi-Dimensional Waves",
          html: `
            <p>This section combines three ideas into one picture: <strong>wavefronts</strong>, <strong>rays</strong>, and <strong>intensity spreading</strong>. Wavefronts connect points in the same phase. Rays point in the direction the energy is moving, and they are perpendicular to the wavefronts.</p>
            <p>The textbook also frames sound more explicitly as a <strong>pressure wave</strong>. Instead of tracking the up-and-down displacement of a rope, you can track how the pressure in the air oscillates above and below atmospheric equilibrium.</p>
            <p>Then comes the energy argument: the source may emit the same total power, but that power spreads over larger and larger wavefronts as the radius grows.</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Wave type</th>
                  <th>Wavefront area</th>
                  <th>Intensity</th>
                  <th>Amplitude</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1-D</td>
                  <td>Constant</td>
                  <td>Constant</td>
                  <td>Constant</td>
                </tr>
                <tr>
                  <td>2-D</td>
                  <td>2πr</td>
                  <td>I ∝ 1/r</td>
                  <td>A ∝ 1/√r</td>
                </tr>
                <tr>
                  <td>3-D</td>
                  <td>4πr²</td>
                  <td>I ∝ 1/r²</td>
                  <td>A ∝ 1/r</td>
                </tr>
              </tbody>
            </table>
            <p>Because intensity is proportional to amplitude squared, the amplitude falloff is the square-root version of the intensity falloff. That is why in 3-D, intensity goes like 1/r² while amplitude goes like 1/r.</p>
            <p>So the main textbook contribution here is not a random extra formula. It is the geometry explaining why loudness fades with distance and why wavefronts and rays are such useful tools in two and three dimensions.</p>
          `,
        },
        {
          id: "chapter-13-8-4",
          title: "8.4 - Doppler Effect",
          html: `
            <p>The textbook version of Doppler goes one step farther than the basic DL treatment. It starts with the <strong>moving source</strong>, then handles the <strong>moving observer</strong>, and finally combines both effects into one expression.</p>
            <p>For a moving source, the geometry is the same one you already know: in one source period T, the source moves a distance v<sub>s</sub>T, so the wavelength ahead is compressed and the wavelength behind is stretched.</p>
            <div class="formula-inline">λ<sub>forward</sub> = (v - v<sub>s</sub>) / f<sub>s</sub></div>
            <div class="formula-inline">λ<sub>backward</sub> = (v + v<sub>s</sub>) / f<sub>s</sub></div>
            <p>Then f = v/λ gives the usual moving-source Doppler formula.</p>
            <p>The part that was missing before is the <strong>moving observer</strong> case. There, the wavelength in the medium stays the same, but the observer meets crests faster or slower depending on their own motion.</p>
            <div class="formula-inline">f<sub>o</sub> = ((v ± v<sub>o</sub>) / v) f<sub>s</sub></div>
            <p>Putting both effects together gives the combined formula:</p>
            <div class="formula-box">f<sub>o</sub> = ((v ± v<sub>o</sub>) / (v ∓ v<sub>s</sub>)) f<sub>s</sub></div>
            <p>Use plus in the numerator when the observer moves toward the source, minus when away. Use minus in the denominator when the source moves toward the observer, plus when away.</p>
          `,
        },
        {
          id: "chapter-13-8-5",
          title: "8.5 - Superposition and Interference",
          html: `
            <p>The textbook opens with the superposition principle itself: the total displacement is simply the sum of the individual displacements.</p>
            <div class="formula-inline">y<sub>total</sub> = y₁ + y₂</div>
            <p>From there it builds constructive, destructive, and partial interference using total phase difference. It also makes a cleaner distinction between <strong>path length difference</strong> and <strong>phase constant difference</strong>.</p>
            <div class="formula-inline">Δx = x₂ - x₁</div>
            <div class="formula-inline">ΔΦ = -(2π/λ)Δx + Δφ₀</div>
            <p>That means two sources can interfere differently because one wave traveled farther, because the sources started out out-of-step, or because both effects happen together.</p>
            <p>The trig identity underneath the phase chart for equal-amplitude waves at one point is:</p>
            <div class="formula-box">y<sub>total</sub> = 2A cos(ΔΦ/2) × sin(average phase)</div>
            <p>That front cosine factor controls the effective amplitude. If ΔΦ = 0, the amplitude is 2A. If ΔΦ = π, the amplitude is 0. If ΔΦ = π/2, the result is partial interference.</p>
            <p>So the textbook confirms that the phase chart is not a separate trick. It is just a fast bookkeeping method for the same superposition math.</p>
          `,
        },
        {
          id: "chapter-13-8-6",
          title: "8.6 - Beats",
          html: `
            <p>The beat section explains beats as plain old superposition between two waves whose frequencies are close but not identical. The relative phase drifts slowly, so the sound grows loud, soft, loud, soft in a repeating envelope.</p>
            <div class="formula-inline">f<sub>beat</sub> = |f₁ - f₂|</div>
            <div class="formula-inline">f<sub>carrier</sub> = (f₁ + f₂)/2</div>
            <p>The textbook then derives those formulas from the trig identity for adding two sine waves:</p>
            <div class="formula-inline">y₁ = A sin(2πf₁t), &nbsp; y₂ = A sin(2πf₂t)</div>
            <div class="formula-box">y<sub>total</sub> = 2A cos(π(f₁ - f₂)t) × sin(π(f₁ + f₂)t)</div>
            <p>The cosine factor is the slow envelope. The sine factor is the fast carrier. LibreTexts also spells out a subtle point students miss all the time: the envelope oscillates at half the beat frequency, but one full envelope cycle contains two intensity maxima, so the number of beats you hear per second is still |f₁ - f₂|.</p>
            <p>That is exactly why musicians tune by listening for beats to slow down and disappear.</p>
          `,
        },
        {
          id: "chapter-13-summary",
          title: "What the Textbook Adds",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Topic</th>
                  <th>DL guide gives you</th>
                  <th>Textbook adds</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Introduction to waves</td>
                  <td>Hook, intuition, and core definitions</td>
                  <td>Formal medium/restoring-force picture, periodic-vs-pulse language, and polarization framing</td>
                </tr>
                <tr>
                  <td>Wave representation</td>
                  <td>Reading A, T, λ, and direction from graphs</td>
                  <td>Snapshot vs time plots, total phase, and solving for φ₀ from known points</td>
                </tr>
                <tr>
                  <td>Multi-dimensional waves</td>
                  <td>Wavefronts, rays, and intensity ideas</td>
                  <td>Pressure-wave framing for sound and the geometry behind spreading power</td>
                </tr>
                <tr>
                  <td>Doppler effect</td>
                  <td>Moving-source intuition and worked example</td>
                  <td>Observer-motion formula and the full combined expression</td>
                </tr>
                <tr>
                  <td>Superposition math</td>
                  <td>Phase chart shortcut</td>
                  <td>Explicit path-length plus phase-constant bookkeeping under ΔΦ</td>
                </tr>
                <tr>
                  <td>Beats</td>
                  <td>Phase-drift intuition</td>
                  <td>Carrier-frequency formula and the envelope-versus-beat-frequency distinction</td>
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
    title: "Final Recap - The Complete Short Version (DL 1-5)",
    plainText: `
All of Unit 8 in 15 sentences.
1. A wave is a traveling disturbance that carries energy. For mechanical waves, the medium oscillates instead of traveling with it.
2. Transverse = medium moves perpendicular to travel. Longitudinal = parallel.
3. y = A sin(2pi t/T +/- 2pi x/lambda + phi0). Minus means right-moving.
4. Speed v = lambda f. Speed depends on medium. Frequency depends on source. Wavelength depends on both.
5. Intensity falls as 1/r^2 in 3D and amplitude falls as 1/r. Decibels are logarithmic.
6. Doppler effect changes wavelength and therefore observed frequency.
7. Superposition means displacements add. Delta Phi = 2npi gives constructive and odd multiples of pi give destructive.
8. Delta Phi = -2pi Delta x/lambda + Delta phi0, so both path length and wiring matter.
9. Reversing speaker leads makes Delta phi0 = pi.
10. Beats come from nearby frequencies. f_beat = |f1 - f2| and f_carrier = (f1 + f2)/2.
11. Diffraction means waves spread after a small opening or around an obstacle.
12. Bright two-slit fringes satisfy d sin theta = n lambda and dark fringes satisfy d sin theta = (n + 1/2)lambda.
13. Young's experiment gave decisive evidence for the wave behavior of light.
14. More slits sharpen the peaks at the same angles. Grating equation: n lambda = d sin theta.
15. Phase constant shifts move the whole interference pattern.
Waves is a genuinely hard unit because the concepts stack on top of each other. If you worked through all of this, you now have a real map of the territory. The rest is practice problems.
    `.trim(),
    sections: [
      {
        id: "final-recap-10",
        title: "All of Unit 8 in 15 Sentences",
        html: `
          <ol class="long-list">
            <li>A wave is a traveling disturbance that carries energy. For mechanical waves, the medium oscillates instead of traveling with it.</li>
            <li>Transverse = medium moves perpendicular to travel (rope). Longitudinal = parallel (sound).</li>
            <li>The wave equation y = A sin(2πt/T ± 2πx/λ + φ₀) encodes how a 1-D wave evolves. Minus means right-moving.</li>
            <li>Speed v = λf. Speed is medium-dependent. Frequency is source-dependent. Wavelength depends on both.</li>
            <li>In 3D, intensity falls as 1/r² and amplitude falls as 1/r. Decibels are logarithmic.</li>
            <li>Doppler effect shifts observed frequency by compressing or stretching wavelength.</li>
            <li>Superposition means displacements add algebraically. ΔΦ = 2nπ gives constructive and odd multiples of π give destructive.</li>
            <li>ΔΦ = -2πΔx/λ + Δφ₀, so both path difference and fixed phase difference matter.</li>
            <li>Reversing speaker leads makes Δφ₀ = π. Combined with path offsets, it can flip destructive into constructive.</li>
            <li>Beats come from two nearby frequencies. f<sub>beat</sub> = |f₁ - f₂| and f<sub>carrier</sub> = (f₁ + f₂)/2.</li>
            <li>Diffraction means waves spread after passing through a small opening or around an obstacle. Huygens's principle explains why.</li>
            <li>Two-slit bright fringes satisfy d sin θ = nλ. Dark fringes satisfy d sin θ = (n + 1/2)λ.</li>
            <li>Young's experiment gave decisive evidence for the wave behavior of light because it produced alternating bright and dark interference bands.</li>
            <li>More slits sharpen the peaks at the same angles. Diffraction gratings use that to separate wavelengths.</li>
            <li>Phase constant shifts move the whole pattern. Path length tells you where you are inside the pattern.</li>
          </ol>
        `,
      },
      {
        id: "final-recap-close",
        title: "Closing Note",
        html: `
          <p>Waves is a genuinely hard unit because the ideas stack on top of each other and the math can hide whether the physical picture is actually clear. If you worked through all of this, you now have a real map of the territory. The rest is practice problems.</p>
        `,
      },
    ],
  },
};

export const QUIZ_2_GUIDE = {
  title: "Quiz 2 Study Guide",
  subtitle: "DL3-DL6 | Interference, diffraction, standing waves, and quantum ideas",
  chapters: [
    {
      id: "quiz2-chapter-1",
      number: "01",
      title: "Start Here",
      plainText: `
Quiz 2 covers the wave-equation logic from DL3, the phase-difference and beats ideas from DL4, the diffraction and double-slit material from DL5, and the standing-wave and particle-wave extensions from DL6.
The fastest way to attack a problem start is to identify the wave type, decide which quantities are source-set and which are medium-set, write the relevant phase or wavelength rule, and only then start algebra.
Most mistakes on this quiz come from mixing up beat rate with heard pitch, using the wrong Doppler sign, forgetting that the center is not automatically bright when there is a phase shift, or using the wrong standing-wave boundary condition.
      `.trim(),
      sections: [
        {
          id: "quiz2-chapter-1-coverage",
          title: "What Quiz 2 Covers",
          html: `
            <p>This guide is focused on the parts of DL3 through DL6 that actually feed quiz-style problem starts: wave-equation reading, interference and total phase, Doppler, beats, double-slit logic, standing waves, and the first particle-as-wave ideas.</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>DL</th>
                  <th>Main quiz use</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>DL3</td>
                  <td>Wave equation wrap-up, Doppler effect, and 2D interference setups</td>
                </tr>
                <tr>
                  <td>DL4</td>
                  <td>Total phase difference, sound interference, beats, beat rate, carrier pitch</td>
                </tr>
                <tr>
                  <td>DL5</td>
                  <td>Huygens/diffraction, Young's double slit, path-difference geometry</td>
                </tr>
                <tr>
                  <td>DL6</td>
                  <td>Crystal phase shifts, standing waves, de Broglie, particle in a box</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Focus rule:</strong> most quiz questions are not asking you to remember a paragraph. They are asking you to identify the right model first, then use the right formula second.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-1-roadmap",
          title: "Problem Start Roadmap",
          html: `
            <ol class="long-list">
              <li><strong>Name the wave model.</strong> Is this 1D, 2D, or 3D? Is it Doppler, interference, double slit, standing waves, or particle waves?</li>
              <li><strong>Sort the quantities.</strong> Frequency and period stay with the source. Wave speed comes from the medium. Wavelength adjusts to fit both.</li>
              <li><strong>Draw the geometry.</strong> Mark distances, path differences, source directions, and boundary conditions before doing algebra.</li>
              <li><strong>Write the one governing rule.</strong> That might be the wave equation, total phase equation, Doppler formula, beat formula, or harmonic condition.</li>
              <li><strong>Check the physical meaning.</strong> Ask whether your answer means louder or quieter, higher or lower pitch, bright or dark, node or antinode.</li>
            </ol>
            <div class="callout">
              <strong>Dimension check:</strong> in 2D, intensity falls like 1/r and amplitude like 1/√r. In 3D, intensity falls like 1/r² and amplitude like 1/r.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-1-mistakes",
          title: "Common Mistakes to Catch Early",
          html: `
            <ul>
              <li>Mixing up <strong>beat rate</strong> with <strong>heard pitch</strong>.</li>
              <li>Using the wrong Doppler sign without first drawing motion arrows.</li>
              <li>Forgetting that the time term cancels when you compare two waves at the same place and time.</li>
              <li>Assuming the center of a double-slit pattern must be bright even when a crystal shifts one slit by a phase constant.</li>
              <li>Using the fixed-fixed harmonic rule on a fixed-open standing-wave problem.</li>
            </ul>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-2",
      number: "02",
      title: "Wave Equation",
      plainText: `
Use the wave equation to read amplitude, period, wavelength, direction, and phase constant. Frequency and period are source-set. Speed is medium-set. Wavelength depends on both because λ = v/f. Minus on the x-term means right-moving and plus means left-moving.
      `.trim(),
      sections: [
        {
          id: "quiz2-chapter-2-source-medium",
          title: "Source vs Medium",
          html: `
            <p>Start here whenever a problem mentions a new medium, a new string tension, or a new source. The cleanest logic is to ask: who fixes this quantity, the source or the medium?</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Wave property</th>
                  <th>Determined by</th>
                  <th>Why it matters</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Period T</td>
                  <td>Source</td>
                  <td>It is the time the source takes to complete one cycle.</td>
                </tr>
                <tr>
                  <td>Frequency f</td>
                  <td>Source</td>
                  <td>It is how many cycles the source creates each second.</td>
                </tr>
                <tr>
                  <td>Phase constant φ₀</td>
                  <td>Source / initial setup</td>
                  <td>It records the starting offset at t = 0 and x = 0.</td>
                </tr>
                <tr>
                  <td>Amplitude A</td>
                  <td>Mainly source</td>
                  <td>It tracks how strongly the source shakes the medium in the simple model.</td>
                </tr>
                <tr>
                  <td>Wave speed v</td>
                  <td>Medium</td>
                  <td>It depends on the material or boundary conditions.</td>
                </tr>
                <tr>
                  <td>Wavelength λ</td>
                  <td>Both</td>
                  <td>It must satisfy λ = v/f.</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Quiz rule:</strong> when a wave enters a different medium, the frequency does <em>not</em> change. If the speed increases, the wavelength must increase with it.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-2-equation",
          title: "Read the 1-D Wave Equation",
          html: `
            <div class="formula-box">y(x,t) = A sin(2πt/T ∓ 2πx/λ + φ₀)</div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Part</th>
                  <th>Meaning</th>
                  <th>Where to find it</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>A</td>
                  <td>Maximum displacement from equilibrium</td>
                  <td>Crest height above the center line</td>
                </tr>
                <tr>
                  <td>T</td>
                  <td>Seconds per cycle</td>
                  <td>History graph y vs. t</td>
                </tr>
                <tr>
                  <td>λ</td>
                  <td>Meters per cycle</td>
                  <td>Snapshot graph y vs. x</td>
                </tr>
                <tr>
                  <td>φ₀</td>
                  <td>Starting phase offset</td>
                  <td>Plug in a known point</td>
                </tr>
              </tbody>
            </table>
            <div class="concept-gallery">
              <figure class="concept-figure">
                <img src="./assets/figures/quiz2-chapter2-snapshot-graph-dl1.png" alt="DL1 snapshot graph y versus x at a fixed time t sub 0" />
                <figcaption>Worksheet snapshot graph: at fixed time <em>t₀</em>, use the shape across space to read amplitude and wavelength.</figcaption>
              </figure>
              <figure class="concept-figure">
                <img src="./assets/figures/quiz2-chapter2-history-graph-dl1.png" alt="DL1 history graph y versus t at a fixed position x sub 0" />
                <figcaption>Worksheet history graph: at fixed position <em>x₀</em>, use the motion over time to read amplitude and period.</figcaption>
              </figure>
            </div>
          `,
        },
        {
          id: "quiz2-chapter-2-direction",
          title: "Direction: Minus Right, Plus Left",
          html: `
            <p>The sign in the wave equation is opposite to the physical travel direction:</p>
            <ul>
              <li><strong>- 2πx/λ</strong> means the wave travels to the right.</li>
              <li><strong>+ 2πx/λ</strong> means the wave travels to the left.</li>
            </ul>
            <div class="callout">
              <strong>Fast check:</strong> if the same crest shows up at a larger x-value a little later, the disturbance is moving to the right.
            </div>
            <figure class="concept-figure">
              <img src="./assets/figures/quiz2-chapter2-direction-graphs-dl3.png" alt="DL3 time graphs at x equals 1.0 meters and x equals 1.1 meters showing the crest arrives later at the larger position" />
              <figcaption>DL3 comparison: the crest reaches <em>x = 1.1 m</em> after it reaches <em>x = 1.0 m</em>, so the wave is moving to the right and the x-term takes the minus sign.</figcaption>
            </figure>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-3",
      number: "03",
      title: "Interference",
      plainText: `
Interference is controlled by total phase difference. At the same place and time, the time term cancels, so the main rule becomes ΔΦ = -2πΔx/λ + Δφ₀. Constructive interference happens at even multiples of pi and destructive at odd multiples of pi.
      `.trim(),
      sections: [
        {
          id: "quiz2-chapter-3-checklist",
          title: "Superposition Checklist",
          html: `
            <p>When two waves meet, add their displacements. To decide whether that addition is constructive or destructive, compare their total phases.</p>
            <div class="formula-box">ΔΦ = 2πΔt/T - 2πΔx/λ + Δφ₀</div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Difference term</th>
                  <th>Question to ask</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Δt</td>
                  <td>Did one wave start later than the other?</td>
                </tr>
                <tr>
                  <td>Δx</td>
                  <td>Do the waves travel different path lengths to the observer?</td>
                </tr>
                <tr>
                  <td>Δφ₀</td>
                  <td>Do the sources begin in phase or already offset?</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Same-place, same-time comparison:</strong> in the most common quiz setup, the time term is zero, so you only track path difference and source phase difference.
            </div>
          `,
        },
        {
          id: "quiz2-chapter-3-total-phase",
          title: "Compute Total Phase Difference",
          html: `
            <div class="formula-inline">ΔΦ = -2πΔx/λ + Δφ₀</div>
            <p>This is the version you will use again and again for speakers, slits, and any problem where two waves travel to one location.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter6-speaker-paths.png" alt="Two-source path difference geometry" />
              <figcaption>Path difference is purely geometric: measure how much farther one wave travels than the other.</figcaption>
            </figure>
          `,
        },
        {
          id: "quiz2-chapter-3-conditions",
          title: "Constructive vs Destructive",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Result</th>
                  <th>Total phase condition</th>
                  <th>What you observe</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Constructive</td>
                  <td>ΔΦ = 0, 2π, 4π, ...</td>
                  <td>Loud / bright / maximum amplitude</td>
                </tr>
                <tr>
                  <td>Destructive</td>
                  <td>ΔΦ = π, 3π, 5π, ...</td>
                  <td>Quiet / dark / cancellation</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Translation tip:</strong> if a prompt says the sources are out of phase, that means you already have a built-in Δφ₀ = π before any path difference is added.
            </div>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-4",
      number: "04",
      title: "Doppler and Beats",
      plainText: `
For Doppler, draw the motion arrows first. Numerator sign follows observer motion. Denominator sign follows source motion. For beats, the beat rate is |f1 - f2| but the note you hear is the average pitch. They are not the same quantity.
      `.trim(),
      sections: [
        {
          id: "quiz2-chapter-4-doppler",
          title: "Choose the Doppler Signs",
          html: `
            <p>Doppler problems are easier when you think physically first: approaching squeezes wavefronts and raises the observed frequency; receding stretches them and lowers it.</p>
            <div class="formula-box">f<sub>obs</sub> = f<sub>s</sub> ((v ± v<sub>o</sub>) / (v ∓ v<sub>s</sub>))</div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Motion</th>
                  <th>Sign rule</th>
                  <th>Memory hook</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Observer toward source</td>
                  <td>Use <strong>+</strong> in the numerator</td>
                  <td>Top toward</td>
                </tr>
                <tr>
                  <td>Observer away from source</td>
                  <td>Use <strong>-</strong> in the numerator</td>
                  <td>Top away</td>
                </tr>
                <tr>
                  <td>Source toward observer</td>
                  <td>Use <strong>-</strong> in the denominator</td>
                  <td>Bottom squeeze</td>
                </tr>
                <tr>
                  <td>Source away from observer</td>
                  <td>Use <strong>+</strong> in the denominator</td>
                  <td>Bottom stretch</td>
                </tr>
              </tbody>
            </table>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter5-doppler-motion.png" alt="Moving source shifting crest spacing for the Doppler effect" />
              <figcaption>The source moves between emissions, so the forward wavelength is shorter and the rear wavelength is longer.</figcaption>
            </figure>
          `,
        },
        {
          id: "quiz2-chapter-4-beats",
          title: "Beat Rate vs Heard Pitch",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Quantity</th>
                  <th>Formula</th>
                  <th>What it means</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Beat rate</td>
                  <td>|f₁ - f₂|</td>
                  <td>How fast the volume pulses loud-soft-loud</td>
                </tr>
                <tr>
                  <td>Heard pitch</td>
                  <td>(f₁ + f₂) / 2</td>
                  <td>The average note you hear underneath the pulsing</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Do not mix them up:</strong> the beat rate is not a second pitch. It is the rate of loudness change.</div>
            <div class="figure-grid">
              <figure class="concept-figure">
                <img src="./assets/figures/chapter9-beat-waveforms.png" alt="Two close frequencies making beats" />
                <figcaption>Two nearby frequencies gradually drift in and out of phase.</figcaption>
              </figure>
              <figure class="concept-figure">
                <img src="./assets/figures/chapter9-beat-envelope.png" alt="Beat envelope showing carrier and beat pattern" />
                <figcaption>The fast oscillation is the carrier. The slow envelope sets the beat rate.</figcaption>
              </figure>
            </div>
          `,
        },
        {
          id: "quiz2-chapter-4-combined",
          title: "Beats Plus Doppler",
          html: `
            <p>Combined problems usually ask you to change one heard frequency upward and the other downward until the beat rate reaches zero.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter9-bagpipers-doppler.svg" alt="Bagpiper beats plus Doppler setup" />
              <figcaption>Run toward the lower note and away from the higher note if you want the Doppler shift to cancel the original mismatch.</figcaption>
            </figure>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-5",
      number: "05",
      title: "Double-Slit and Crystal Shift",
      plainText: `
Double-slit interference comes from path difference. Bright spots satisfy d sin theta = n lambda and dark spots satisfy d sin theta = (n + 1/2) lambda. A crystal adds a phase constant difference, so the center can shift away from bright.
      `.trim(),
      sections: [
        {
          id: "quiz2-chapter-5-young",
          title: "Young's Experiment",
          html: `
            <p>Two slits act like two coherent sources. The path difference from the slits to a point on the screen determines whether that point is bright or dark.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter10-huygens-hole.png" alt="Diffraction through a small opening using Huygens' principle" />
              <figcaption>A small opening can behave like a new source. That is the key idea that lets the two slits interfere.</figcaption>
            </figure>
          `,
        },
        {
          id: "quiz2-chapter-5-fringe-math",
          title: "Path Difference and Fringe Conditions",
          html: `
            <div class="formula-inline">Δx = d sin θ</div>
            <table class="data-table">
              <thead>
                <tr>
                  <th>Pattern point</th>
                  <th>Condition</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Bright fringe</td>
                  <td>d sin θ = nλ</td>
                </tr>
                <tr>
                  <td>Dark fringe</td>
                  <td>d sin θ = (n + 1/2)λ</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Small-angle shortcut:</strong> once the geometry is set up, use sin θ ≈ tan θ ≈ y/D to connect the angle to the screen position.
            </div>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter10-double-slit-geometry.png" alt="Double-slit geometry with path difference and screen spacing" />
              <figcaption>This is the geometry you should sketch before you plug numbers into the bright or dark condition.</figcaption>
            </figure>
          `,
        },
        {
          id: "quiz2-chapter-5-crystal",
          title: "Crystal Phase Shift",
          html: `
            <p>A crystal in front of one slit delays one wave. That delay shows up as a source phase difference instead of a path difference.</p>
            <div class="formula-inline">Δφ₀ = 2πΔt / T</div>
            <div class="callout">
              <strong>Important trap:</strong> once the crystal adds a phase shift, the center of the screen is not guaranteed to be bright anymore. Evaluate the total phase there first.
            </div>
            <figure class="concept-figure">
              <img src="./assets/figures/chapter11-phase-shifted-slit.png" alt="Double-slit setup with a phase-shifting crystal in one slit" />
              <figcaption>Treat the crystal delay as the Δφ₀ term in the total-phase checklist.</figcaption>
            </figure>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-6",
      number: "06",
      title: "Standing Waves",
      plainText: `
Standing waves come from two identical waves moving in opposite directions. Nodes stay at zero displacement. Antinodes reach maximum displacement. Boundary conditions decide the allowed wavelengths and harmonics.
      `.trim(),
      sections: [
        {
          id: "quiz2-chapter-6-boundaries",
          title: "Nodes, Antinodes, and Boundaries",
          html: `
            <p>Before doing algebra, decide what each end must do. A fixed end is a node. An open end in the simple air-column model is an antinode.</p>
            <div class="formula-inline">node to node = λ / 2 &nbsp;&nbsp;&nbsp; node to nearest antinode = λ / 4</div>
            <figure class="concept-figure">
              <img src="./assets/figures/quiz2-standing-waves.svg" alt="Standing-wave patterns for fixed-fixed, open-open, and fixed-open boundaries" />
              <figcaption>Boundary conditions come first. The harmonic formula comes second.</figcaption>
            </figure>
          `,
        },
        {
          id: "quiz2-chapter-6-harmonics",
          title: "Allowed Harmonics",
          html: `
            <table class="data-table">
              <thead>
                <tr>
                  <th>Configuration</th>
                  <th>Allowed wavelengths</th>
                  <th>Allowed harmonics</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Fixed-fixed / open-open</td>
                  <td>λₙ = 2L / n</td>
                  <td>n = 1, 2, 3, ...</td>
                </tr>
                <tr>
                  <td>Fixed-open</td>
                  <td>λₙ = 4L / (2n - 1)</td>
                  <td>Odd harmonics only</td>
                </tr>
              </tbody>
            </table>
            <div class="callout">
              <strong>Flute vs clarinet logic:</strong> a fixed-open instrument can reach a lower fundamental for the same length because the first allowed fit is a quarter-wave, not a half-wave.
            </div>
          `,
        },
      ],
    },
    {
      id: "quiz2-chapter-7",
      number: "07",
      title: "Quantum Waves",
      plainText: `
Quantum particles behave like waves with wavelength lambda equals h over p. In a box, only standing-wave fits are allowed, so only certain wavelengths and energies are possible. Measuring which slit a particle used destroys the interference pattern.
      `.trim(),
      sections: [
        {
          id: "quiz2-chapter-7-slits",
          title: "Particles Through Slits",
          html: `
            <p>The quantum version of the two-slit experiment says something wild but precise: even single particles can build up an interference pattern over time if you do not measure which path they take.</p>
            <table class="data-table">
              <thead>
                <tr>
                  <th>If you...</th>
                  <th>What you get</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Let the particle travel without path measurement</td>
                  <td>Interference pattern builds up</td>
                </tr>
                <tr>
                  <td>Measure which slit it uses</td>
                  <td>The interference pattern disappears</td>
                </tr>
              </tbody>
            </table>
          `,
        },
        {
          id: "quiz2-chapter-7-debroglie",
          title: "de Broglie and Particle in a Box",
          html: `
            <div class="formula-box">λ = h / p</div>
            <p>Momentum sets wavelength. Shorter wavelength means larger momentum, so the higher-energy standing-wave patterns are the ones with more wiggles packed into the same box.</p>
            <div class="formula-inline">E<sub>n</sub> = h²n² / (8mL²)</div>
            <p>That formula says the allowed energies are quantized and scale like n², not just n.</p>
            <figure class="concept-figure">
              <img src="./assets/figures/quiz2-particle-box.svg" alt="Particle-in-a-box standing-wave idea with de Broglie wavelength" />
              <figcaption>The box walls force nodes, so only certain standing waves fit. That is why the energies are quantized.</figcaption>
            </figure>
          `,
        },
      ],
    },
  ],
  recap: {
    id: "quiz2-formula-sheet",
    title: "Quiz 2 Formula Sheet",
    plainText: `
Quiz 2 formula sheet.
Wave speed v = lambda f.
Total phase difference Delta Phi = -2pi Delta x / lambda + Delta phi zero.
Doppler uses observer motion in the numerator and source motion in the denominator.
Beat rate is absolute difference, heard pitch is the average.
Double slit uses Delta x = d sin theta, bright d sin theta = n lambda, dark d sin theta = (n + one half) lambda.
Standing waves depend on boundary conditions.
de Broglie wavelength lambda = h / p.
    `.trim(),
    sections: [
      {
        id: "quiz2-formula-sheet-core",
        title: "Core Formulas",
        html: `
          <table class="data-table">
            <thead>
              <tr>
                <th>Topic</th>
                <th>Formula</th>
                <th>Use it when...</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Wave speed</td>
                <td>v = λf</td>
                <td>You know any two of speed, wavelength, frequency</td>
              </tr>
              <tr>
                <td>Total phase</td>
                <td>ΔΦ = -2πΔx/λ + Δφ₀</td>
                <td>You compare two waves at the same place and time</td>
              </tr>
              <tr>
                <td>Doppler</td>
                <td>f<sub>obs</sub> = f<sub>s</sub>((v ± v<sub>o</sub>)/(v ∓ v<sub>s</sub>))</td>
                <td>Source or observer motion changes the heard frequency</td>
              </tr>
              <tr>
                <td>Beat rate</td>
                <td>f<sub>beat</sub> = |f₁ - f₂|</td>
                <td>You need the loud-soft-loud pulse rate</td>
              </tr>
              <tr>
                <td>Average pitch</td>
                <td>f<sub>avg</sub> = (f₁ + f₂) / 2</td>
                <td>You need the note heard under the beat envelope</td>
              </tr>
              <tr>
                <td>Double slit path difference</td>
                <td>Δx = d sin θ</td>
                <td>You relate slit geometry to bright and dark spots</td>
              </tr>
              <tr>
                <td>Bright fringe</td>
                <td>d sin θ = nλ</td>
                <td>You want constructive interference</td>
              </tr>
              <tr>
                <td>Dark fringe</td>
                <td>d sin θ = (n + 1/2)λ</td>
                <td>You want destructive interference</td>
              </tr>
              <tr>
                <td>Fixed-fixed standing waves</td>
                <td>λₙ = 2L / n</td>
                <td>Both ends have the same boundary type</td>
              </tr>
              <tr>
                <td>Fixed-open standing waves</td>
                <td>λₙ = 4L / (2n - 1)</td>
                <td>One end is a node and the other is an antinode</td>
              </tr>
              <tr>
                <td>de Broglie</td>
                <td>λ = h / p</td>
                <td>You connect particle momentum to wavelength</td>
              </tr>
              <tr>
                <td>Particle in a box</td>
                <td>E<sub>n</sub> = h²n² / (8mL²)</td>
                <td>You need the allowed quantum energy levels in a 1D box</td>
              </tr>
            </tbody>
          </table>
        `,
      },
      {
        id: "quiz2-formula-sheet-traps",
        title: "Fast Trap Check",
        html: `
          <ul>
            <li>Frequency stays with the source when a wave enters a new medium.</li>
            <li>Beat rate and heard pitch are different quantities.</li>
            <li>For double slit with a crystal, evaluate the center with the new Δφ₀ before assuming it is bright.</li>
            <li>For standing waves, pick the boundary condition before writing a wavelength formula.</li>
          </ul>
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
      prompt: "Which statement best defines a mechanical wave in the opening model of the guide?",
      choices: [
        "A medium physically moves from the source to the observer.",
        "A disturbance carries energy without transporting the medium itself.",
        "Only matter moves, not energy.",
        "Waves only exist in water.",
      ],
      answer: 1,
      explanation: "In the opening mechanical-wave model, the wave carries energy while the medium only oscillates around its position.",
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
      prompt: "If the same source drives a wave in a different medium, which wave properties are guaranteed to stay the same?",
      expected: "Frequency stays the same, and period stays the same because it is tied to frequency.",
      rubric:
        "Mark correct only if the answer includes both frequency and period. Do not require amplitude or phase constant here.",
      requiredConcepts: [
        { label: "frequency", terms: ["frequency"] },
        { label: "period", terms: ["period"] },
      ],
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
      prompt: "If the graph at the larger x-value is shifted later in time, the wave is moving:",
      choices: ["In the +x direction", "In the -x direction", "Straight up", "In a circle"],
      answer: 0,
      explanation:
        "The larger-x point is farther to the right. If it sees the same crest or trough later, the disturbance is arriving there after it passed the smaller-x point, so the wave is traveling in the +x direction.",
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
      prompt: "In the guide's in-phase 70 dB speaker example, the combined level is about:",
      choices: ["73 dB", "74 dB", "76 dB", "80 dB"],
      answer: 2,
      explanation: "Under the worked example's in-phase assumption, the guide gives a combined level of 76 dB.",
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
  "chapter-8": [
    {
      id: "c8-mc-1",
      type: "mc",
      prompt: "If one speaker's leads are reversed while both speakers are in the same place, the fixed phase difference is:",
      choices: ["0", "π/2", "π", "2π"],
      answer: 2,
      explanation: "Reversing the leads flips the speaker's motion, which corresponds to a fixed phase difference of π.",
    },
    {
      id: "c8-mc-2",
      type: "mc",
      prompt: "In the simplified phase chart, which term is removed because both waves are compared at the same place and time?",
      choices: ["The time-term difference", "The path difference", "The wavelength", "The fixed phase constant"],
      answer: 0,
      explanation: "The time-term difference is zero in the simplified phase chart, so only path difference and fixed phase difference remain.",
    },
    {
      id: "c8-mc-3",
      type: "mc",
      prompt: "Scenario 3 in the guide, with λ/2 separation and reversed leads, produces:",
      choices: ["Destructive interference", "No interference", "Constructive interference", "Only partial interference"],
      answer: 2,
      explanation: "The path contribution is -π and the wiring contribution is +π, so the total phase difference is zero and the result is constructive.",
    },
    {
      id: "c8-short-1",
      type: "short",
      prompt: "What is the simplified formula for total phase difference?",
      expected: "ΔΦ = -2πΔx/λ + Δφ₀.",
      rubric: "Mark correct if the answer gives the phase-difference formula with path-difference and fixed phase-constant terms.",
    },
    {
      id: "c8-short-2",
      type: "short",
      prompt: "Why do you hear loud, quiet, loud as you walk around λ-separated speakers?",
      expected: "Because the path length difference changes with position, so the phase difference changes through constructive and destructive values.",
      rubric: "Mark correct if the answer mentions changing path difference, changing phase difference, or moving through the interference pattern in space.",
    },
  ],
  "chapter-9": [
    {
      id: "c9-mc-1",
      type: "mc",
      prompt: "Beat frequency is given by:",
      choices: ["f₁ + f₂", "|f₁ - f₂|", "(f₁ + f₂)/2", "1/(f₁ + f₂)"],
      answer: 1,
      explanation: "Beat frequency is the absolute difference between the two frequencies.",
    },
    {
      id: "c9-mc-2",
      type: "mc",
      prompt: "Carrier frequency is:",
      choices: ["The larger of the two frequencies", "The smaller of the two frequencies", "|f₁ - f₂|", "(f₁ + f₂)/2"],
      answer: 3,
      explanation: "Carrier frequency is the average of the two source frequencies.",
    },
    {
      id: "c9-mc-3",
      type: "mc",
      prompt: "Beats happen because the two waves:",
      choices: ["Move in different media", "Start at different amplitudes only", "Gradually drift in and out of phase", "Have no wavelength"],
      answer: 2,
      explanation: "Beats are the loud-quiet-loud pattern caused by nearby frequencies drifting in and out of phase.",
    },
    {
      id: "c9-short-1",
      type: "short",
      prompt: "What is the difference between beat frequency and carrier frequency?",
      expected: "Beat frequency is the pulsing rate, while carrier frequency is the average pitch inside the envelope.",
      rubric: "Mark correct if the answer says beats are the slow loud-quiet pulse and carrier is the faster average tone or pitch.",
    },
    {
      id: "c9-short-2",
      type: "short",
      prompt: "If one source is 258 Hz and the other is 262 Hz, what beat frequency do you hear?",
      expected: "4 Hz.",
      rubric: "Mark correct if the answer says 4 Hz or four beats per second.",
    },
  ],
  "chapter-10": [
    {
      id: "c10-mc-1",
      type: "mc",
      prompt: "Huygens's principle says that each point on a wavefront acts like:",
      choices: ["A wall", "A new source of waves", "A fixed node", "A particle beam"],
      answer: 1,
      explanation: "Huygens's principle treats each point on a wavefront as a source of secondary waves.",
    },
    {
      id: "c10-mc-2",
      type: "mc",
      prompt: "The path length difference in the double-slit setup is:",
      choices: ["Δx = λ/D", "Δx = d sin θ", "Δx = D/d", "Δx = n/λ"],
      answer: 1,
      explanation: "The geometry gives Δx = d sin θ.",
    },
    {
      id: "c10-mc-3",
      type: "mc",
      prompt: "Bright fringes in a double-slit pattern satisfy:",
      choices: ["d sin θ = nλ", "d sin θ = (n + 1/2)λ", "d = λ/θ", "ΔΦ = π/2 only"],
      answer: 0,
      explanation: "Constructive interference produces bright fringes when d sin θ = nλ.",
    },
    {
      id: "c10-short-1",
      type: "short",
      prompt: "Why did Young's experiment support the wave model of light?",
      expected: "Because two slits produced alternating bright and dark stripes, which require interference.",
      rubric: "Mark correct if the answer mentions alternating bright/dark bands, interference, or a pattern classical particles alone would not produce.",
    },
    {
      id: "c10-short-2",
      type: "short",
      prompt: "What does the small-angle approximation let you calculate from fringe spacing?",
      expected: "It lets you calculate slit spacing using d = λD/Δy.",
      rubric: "Mark correct if the answer mentions slit spacing d, the equation d = λD/Δy, or using screen distance and fringe spacing to infer d.",
    },
  ],
  "chapter-11": [
    {
      id: "c11-mc-1",
      type: "mc",
      prompt: "Adding more slits to an interference setup mainly makes the bright peaks:",
      choices: ["Disappear", "Move to new angles", "Sharper and narrower", "All become blue"],
      answer: 2,
      explanation: "More slits sharpen the bright peaks without changing the angle condition for where they occur.",
    },
    {
      id: "c11-mc-2",
      type: "mc",
      prompt: "The diffraction grating formula is:",
      choices: ["f = 1/T", "nλ = d sin θ", "ΔΦ = -2πΔx/λ + Δφ₀", "v = ω/k only"],
      answer: 1,
      explanation: "The grating equation is nλ = d sin θ.",
    },
    {
      id: "c11-mc-3",
      type: "mc",
      prompt: "In white light through a grating, which color is farthest from the center?",
      choices: ["Violet", "Blue", "Green", "Red"],
      answer: 3,
      explanation: "Red has the longest wavelength, so it appears at the largest angle.",
    },
    {
      id: "c11-short-1",
      type: "short",
      prompt: "What does a nonzero phase constant difference do to a double-slit interference pattern?",
      expected: "It shifts the entire pattern.",
      rubric: "Mark correct if the answer says the fringes shift, the central maximum moves, or the whole pattern is displaced.",
    },
    {
      id: "c11-short-2",
      type: "short",
      prompt: "Why does a CD show rainbow colors under white light?",
      expected: "Because it acts like a diffraction grating and sends different wavelengths to different angles.",
      rubric: "Mark correct if the answer mentions diffraction grating behavior, different wavelengths separating, or different colors leaving at different angles.",
    },
  ],
  "chapter-12": [
    {
      id: "c12-mc-1",
      type: "mc",
      prompt: "Which formula gives beat frequency?",
      choices: ["f_beat = |f₁ - f₂|", "f_beat = (f₁ + f₂)/2", "f_beat = d sin θ", "f_beat = v/λ"],
      answer: 0,
      explanation: "Beat frequency is the absolute difference between the two source frequencies.",
    },
    {
      id: "c12-mc-2",
      type: "mc",
      prompt: "Which formula gives the path length difference in a double-slit experiment?",
      choices: ["Δx = d sin θ", "Δx = λ/T", "Δx = 2d = nλ", "Δx = v/(v ± v_s)"],
      answer: 0,
      explanation: "Δx = d sin θ is the geometry formula for double-slit path difference.",
    },
    {
      id: "c12-mc-3",
      type: "mc",
      prompt: "Which formula gives destructive interference for double-slit dark fringes?",
      choices: ["nλ = d sin θ", "(n + 1/2)λ = d sin θ", "ΔΦ = 2nπ", "f = 1/T"],
      answer: 1,
      explanation: "Dark fringes satisfy the half-integer condition (n + 1/2)λ = d sin θ.",
    },
    {
      id: "c12-short-1",
      type: "short",
      prompt: "What does d = λD/Δy help you find?",
      expected: "It helps you find slit spacing from the pattern on the screen.",
      rubric: "Mark correct if the answer says slit spacing d or says it uses wavelength, screen distance, and fringe spacing to infer d.",
    },
    {
      id: "c12-short-2",
      type: "short",
      prompt: "What should you check before using 2d = nλ for a thin-film reflection problem?",
      expected: "You should check whether there is an extra phase flip on reflection.",
      rubric: "Mark correct if the answer mentions reflection phase shift, phase flip, or making sure the simple condition applies.",
    },
  ],
  "chapter-13": [
    {
      id: "c13-mc-1",
      type: "mc",
      prompt: "Only which type of wave can be polarized?",
      choices: ["Longitudinal waves", "Transverse waves", "Sound waves only", "Any wave at all"],
      answer: 1,
      explanation: "Polarization is a property of transverse waves because they can oscillate in different perpendicular directions.",
    },
    {
      id: "c13-mc-2",
      type: "mc",
      prompt: "A graph of displacement versus position at one instant is best used to read:",
      choices: ["Frequency", "Wavelength", "Phase speed only", "Beat frequency"],
      answer: 1,
      explanation: "A snapshot graph shows the spatial pattern of the wave, so it is the graph you use to read wavelength.",
    },
    {
      id: "c13-mc-3",
      type: "mc",
      prompt: "In the Doppler formula, when the observer moves toward the source, which sign is used with vₒ in the numerator?",
      choices: ["Plus", "Minus", "Zero", "It depends only on wavelength"],
      answer: 0,
      explanation: "Observer moving toward the source means they meet crests faster, so the numerator becomes v + vₒ.",
    },
    {
      id: "c13-short-1",
      type: "short",
      prompt: "What two things does the textbook say material waves need in order to exist?",
      expected: "A medium that can be displaced and restoring forces between neighboring parts of the medium.",
      rubric: "Mark correct if the answer mentions a medium plus restoring forces, or particles plus a force pulling them back toward equilibrium.",
    },
    {
      id: "c13-short-2",
      type: "short",
      prompt: "What is the path-length contribution to total phase difference between two sources?",
      expected: "The path-length term is -(2π/λ)Δx.",
      rubric: "Mark correct if the answer gives the path-length term as minus two pi over lambda times delta x, or an equivalent statement inside the total phase-difference formula.",
    },
  ],
};
