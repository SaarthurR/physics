export const FORMULA_STRIP = [
  { label: "Wave speed", value: "v = lambda f = lambda / T" },
  {
    label: "Doppler",
    value: "f_obs = (v / (v +/- v_s)) x f_s",
  },
  {
    label: "Interference",
    value: "Delta Phi = -2pi Delta x / lambda + Delta phi_0",
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
            <div class="formula-box">y(x, t) - y_0 = A sin( 2pi t/T +/- 2pi x/lambda + phi_0 ) = A sin(Phi)</div>
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

            <h4>lambda - Wavelength</h4>
            <p>The spatial analogue of period. The distance the wave travels in one full cycle. It's the distance between two consecutive crests (or troughs, or any equivalent points).</p>
            <p><strong>Medium or source?</strong> Both. It depends on wave speed (medium) AND frequency (source). See the relationship below.</p>

            <h4>v - Wave Speed</h4>
            <p>How fast the disturbance moves through the medium. NOT the same as how fast the medium's particles move.</p>
            <div class="formula-inline">v = lambda / T = lambda f</div>
            <p><strong>Medium-dependent:</strong> Change the tension on a string -> change the wave speed. The source doesn't control this.</p>
            <p><strong>Key insight:</strong> Same source, different medium -> same frequency, different speed -> different wavelength.</p>

            <h4>Phi - Total Phase</h4>
            <p>The argument of the sine function. It tells you exactly where in the oscillation cycle the wave is at any given (x, t). Units: radians.</p>
            <div class="formula-inline">Phi = 2pi t/T +/- 2pi x/lambda + phi_0</div>
            <p>If Phi increases by 2pi, you complete one full cycle and return to the same state. That's it.</p>

            <h4>phi_0 - Fixed Phase Constant</h4>
            <p>The "starting phase" - where the wave is in its cycle at t = 0, x = 0. A source-dependent property set by initial conditions.</p>
          `,
        },
        {
          id: "chapter-2-direction",
          title: "The +/- Sign - Wave Direction",
          html: `
            <h4>DIRECTION RULE:</h4>
            <ul>
              <li>Minus sign (-2pi x/lambda) -> wave moves in the +x direction (to the right)</li>
              <li>Plus sign (+2pi x/lambda) -> wave moves in the -x direction (to the left)</li>
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
                  <td>Wavelength lambda</td>
                  <td>Both</td>
                  <td>lambda = v/f - depends on both speed AND frequency</td>
                </tr>
                <tr>
                  <td>Amplitude A</td>
                  <td>Source</td>
                  <td>How energetically you disturb the medium</td>
                </tr>
                <tr>
                  <td>Phase constant phi_0</td>
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
              <li>Wavelength lambda = 20 m (spacing between crests)</li>
              <li>The peak is 0.5 m above the buoy -> boat is 0.5 m above equilibrium, buoy is at equilibrium -> Amplitude A = 0.5 m</li>
            </ul>
            <h4>Step 2 - Wave speed:</h4>
            <div class="formula-inline">v = lambda / T = 20 m / 6 s ~= 3.33 m/s</div>
            <h4>Step 3 - Build the equation.</h4>
            <p>Wave moves LEFT (positive x direction convention here means we use + sign). Boat at x = 0. At t = 0, boat is at crest -> y(0,0) = A, so sin(phi_0) = 1 -> phi_0 = pi/2:</p>
            <div class="formula-box">y(x, t) = 0.5 sin( 2pi t/6 + 2pi x/20 + pi/2 ) meters</div>
            <h4>Step 4 - Find displacement at x = 5 m, t = 2 s:</h4>
            <div class="formula-inline">Phi = 2pi(2)/6 + 2pi(5)/20 + pi/2 = 2pi/3 + pi/2 + pi/2 = 2pi/3 + pi ~= 5.76 rad</div>
            <div class="formula-inline">y = 0.5 x sin(5.76) ~= 0.5 x (-0.50) ~= -0.25 m</div>
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
            <p>Like a photograph of the wave. t is fixed. x varies. The spatial period = wavelength lambda.</p>
            <p>Read lambda from the x-axis: distance between identical points.</p>
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
              <li>Read lambda from the y(x) graph (distance between crests).</li>
              <li>Determine direction from context (given or inferred from two y(t) graphs at different positions).</li>
              <li>Determine phi_0 by plugging in a known (x, t, y) point and solving.</li>
            </ol>
          `,
        },
        {
          id: "chapter-3-tricky",
          title: "Tricky: Two y(t) Graphs at Different Positions",
          html: `
            <p>If you have y(t) at x = 1.0 m AND y(t) at x = 1.1 m, you can determine direction. The wave at x = 1.1 m looks like the x = 1.0 m wave shifted in time. If the x = 1.1 m graph is shifted to the right (later in time), the wave is moving in the +x direction (to the right).</p>
            <p>This is the key: the phase you observe at the farther position was emitted earlier from the source, so it arrives later.</p>
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
            <p>Solid lines = crests. Dashed lines = troughs. Distance between adjacent solid lines = lambda.</p>
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
            <p>Area = circumference = 2pi r</p>
            <div class="formula-inline">I proportional to 1/r</div>
            <h4>3D Waves (spheres)</h4>
            <p>Area = 4pi r^2</p>
            <div class="formula-inline">I proportional to 1/r^2 (inverse square law)</div>
            <p>Since I proportional to A^2, amplitude in 2D falls as A proportional to 1/sqrt(r), and in 3D as A proportional to 1/r.</p>
            <p>Our ears detect intensity, not power. That's why the same speaker sounds quieter from far away - the intensity at your ear decreased, even though total power output of the speaker didn't change.</p>
          `,
        },
        {
          id: "chapter-4-decibels",
          title: "Decibels - Why Sound Uses a Log Scale",
          html: `
            <p>If you double the number of speakers, the sound gets louder - but you don't hear it as twice as loud. Human hearing compresses big differences into smaller perceived changes. This is why we use a logarithmic scale.</p>
            <div class="formula-box">D - D_0 = 10 x log_10( I / I_0 )</div>
            <h4>Key facts to memorize:</h4>
            <ul>
              <li>+10 dB = 10x more intense, but sounds only 2x louder</li>
              <li>+3 dB ~= 2x more intense (since log_10(2) ~= 0.3)</li>
            </ul>
          `,
        },
        {
          id: "chapter-4-two-speakers",
          title: "Worked: Two Speakers Each at 70 dB",
          html: `
            <p>Two identical speakers playing simultaneously. Each alone = 70 dB. What is the combined level?</p>
            <p>Combined amplitude = 2A (amplitudes add). Combined intensity: since I proportional to A^2, ratio I/I_0 = (2A)^2/A^2 = 4.</p>
            <div class="formula-inline">D - 70 = 10 x log_10(4) = 10 x 0.602 ~= 6 dB</div>
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
            <div class="formula-inline">lambda_forward &lt; lambda_stationary &lt; lambda_backward</div>
          `,
        },
        {
          id: "chapter-5-moving-source",
          title: "The Formula - Moving Source",
          html: `
            <div class="formula-box">f_observed = (v / (v +/- v_source)) x f_source</div>
            <h4>Sign convention - get this right:</h4>
            <ul>
              <li>Source moving TOWARD observer -> use MINUS in denominator -> smaller denominator -> f_observed is HIGHER</li>
              <li>Source moving AWAY from observer -> use PLUS in denominator -> larger denominator -> f_observed is LOWER</li>
            </ul>
            <p>Sanity check: if source is stationary (v_source = 0), you get f_observed = f_source. Correct!</p>
          `,
        },
        {
          id: "chapter-5-full-formula",
          title: "The Full Formula - Moving Observer Too",
          html: `
            <div class="formula-box">f_observed = ((v +/- v_observer) / (v +/- v_source)) x f_source</div>
            <p><strong>For the observer:</strong></p>
            <ul>
              <li>Observer moving TOWARD source -> use PLUS in numerator (higher f)</li>
              <li>Observer moving AWAY from source -> use MINUS in numerator (lower f)</li>
            </ul>
            <p>Is it symmetric? NO. A source moving toward a stationary observer gives a different frequency than a stationary source with an observer moving toward it at the same speed. The formulas are NOT the same - test a number and you'll see.</p>
          `,
        },
        {
          id: "chapter-5-worked-example",
          title: "Worked Example - Ambulance Problem (FNT 2)",
          html: `
            <p><strong>Setup:</strong> ambulance at v_s = 50 m/s, siren f_s = 50 Hz, sound speed v = 350 m/s. Silas is behind, Eppie is ahead.</p>
            <p>At t = 0: siren emits a crest. At t = 0.02 s: ambulance has moved x = v x t = 50 x 0.02 = 1 m forward.</p>
            <p>The siren completes f x t = 50 x 0.02 = 1 full cycle. So at t = 0.02 s, the siren is back to emitting a crest.</p>
            <p>The t = 0 crest has traveled: 350 x 0.02 = 7 m in all directions. So the t = 0 forward crest is 7 m ahead, while the new t = 0.02 s crest is at the ambulance (1 m ahead of start).</p>
            <p>Wavelength toward Eppie: 7 - 1 = 6 m. Wavelength toward Silas: 7 + 1 = 8 m.</p>
            <div class="formula-inline">f_Eppie = v / lambda_forward = 350 / 6 ~= 58.3 Hz (higher - ambulance coming toward her)</div>
            <div class="formula-inline">f_Silas = v / lambda_backward = 350 / 8 = 43.75 Hz (lower - ambulance going away)</div>
            <p>Verify with the formula:</p>
            <div class="formula-inline">f_Eppie = (350 / (350 - 50)) x 50 = (350/300) x 50 ~= 58.3 Hz</div>
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
                  <th>Phase Difference Delta Phi</th>
                  <th>Result</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Constructive</td>
                  <td>Delta Phi = 0, 2pi, 4pi, ... (n x 2pi)</td>
                  <td>Max amplitude (2A). Crests align.</td>
                </tr>
                <tr>
                  <td>Destructive</td>
                  <td>Delta Phi = pi, 3pi, 5pi, ... ((2n+1) x pi)</td>
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
            <table class="data-table">
              <thead>
                <tr>
                  <th></th>
                  <th>2pi t / T (time term)</th>
                  <th>-2pi x / lambda (pos term)</th>
                  <th>phi_0</th>
                  <th>Total Phase Phi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Wave 1</td>
                  <td>same for both</td>
                  <td>-2pi x_1 / lambda</td>
                  <td>phi_1</td>
                  <td>Phi_1</td>
                </tr>
                <tr>
                  <td>Wave 2</td>
                  <td>same for both</td>
                  <td>-2pi x_2 / lambda</td>
                  <td>phi_2</td>
                  <td>Phi_2</td>
                </tr>
                <tr>
                  <td>Difference</td>
                  <td>0 (cancels out)</td>
                  <td>-2pi Delta x / lambda</td>
                  <td>Delta phi_0</td>
                  <td>Delta Phi = C / D / P?</td>
                </tr>
              </tbody>
            </table>
            <p>Key insight: the time term cancels in the difference (both waves exist at the same time at the same point). What remains: path length difference and phase constant difference.</p>
            <div class="formula-inline">Delta Phi = -2pi(Delta x)/lambda + Delta phi_0</div>
          `,
        },
        {
          id: "chapter-6-conditions",
          title: "Conditions for Constructive and Destructive",
          html: `
            <p><strong>Constructive</strong> (Delta Phi = n x 2pi): Delta x = n lambda - (Delta phi_0 x lambda)/(2pi)</p>
            <p><strong>Destructive</strong> (Delta Phi = (2n+1) x pi): Delta x = (n + 1/2)lambda - (Delta phi_0 x lambda)/(2pi)</p>
            <p><strong>Special case:</strong> same phase constants (Delta phi_0 = 0):</p>
            <ul>
              <li>Constructive: Delta x = n lambda (path difference is a whole number of wavelengths)</li>
              <li>Destructive: Delta x = (n + 1/2)lambda (path difference is a half-integer wavelength)</li>
            </ul>
          `,
        },
        {
          id: "chapter-6-pond-problem",
          title: "Superposition in 2D - The Pond Problem",
          html: `
            <p>An and Carla bob in a pond. Bob is 3 m from An and 4 m from Carla. An and Carla start in phase. For constructive interference at Bob:</p>
            <div class="formula-inline">Delta x = |distance to An - distance to Carla| = |3 - 4| = 1 m = n lambda</div>
            <p>So lambda = 1 m (or 0.5 m, 0.33 m, etc. for n = 1, 2, 3...)</p>
            <p>v = 3 m/s, f = v/lambda = 3/1 = 3 Hz (or 6 Hz, 9 Hz, ...)</p>
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
                  <td>v = lambda f = lambda/T</td>
                  <td>Wave speed = wavelength x frequency</td>
                  <td>v depends on medium; f on source</td>
                </tr>
                <tr>
                  <td>f = 1/T</td>
                  <td>Frequency is inverse of period</td>
                  <td>Units of f are Hz (s^-1)</td>
                </tr>
                <tr>
                  <td>y(x,t) = A sin(2pi t/T +/- 2pi x/lambda + phi_0)</td>
                  <td>Full wave equation</td>
                  <td>Minus = right-moving; Plus = left</td>
                </tr>
                <tr>
                  <td>I proportional to A^2</td>
                  <td>Intensity proportional to amplitude squared</td>
                  <td>Double A -> 4x intensity</td>
                </tr>
                <tr>
                  <td>I proportional to 1/r^2 (3D), 1/r (2D)</td>
                  <td>Inverse square/linear law</td>
                  <td>No dissipation assumed</td>
                </tr>
                <tr>
                  <td>D - D_0 = 10 log_10(I/I_0)</td>
                  <td>Decibel definition</td>
                  <td>+10 dB = 10x intensity</td>
                </tr>
                <tr>
                  <td>f_obs = v/(v +/- v_s) x f_s</td>
                  <td>Doppler, moving source</td>
                  <td>Minus = source toward observer</td>
                </tr>
                <tr>
                  <td>f_obs = (v +/- v_o)/(v +/- v_s) x f_s</td>
                  <td>Doppler, source + observer moving</td>
                  <td>Observer toward: plus in numerator</td>
                </tr>
                <tr>
                  <td>Delta Phi = -2pi Delta x/lambda + Delta phi_0</td>
                  <td>Phase difference from two sources</td>
                  <td>Key to all interference problems</td>
                </tr>
                <tr>
                  <td>Constructive: Delta Phi = 2npi</td>
                  <td>In-phase condition</td>
                  <td>n = 0, +/-1, +/-2, ...</td>
                </tr>
                <tr>
                  <td>Destructive: Delta Phi = (2n+1)pi</td>
                  <td>Anti-phase condition</td>
                  <td>n = 0, +/-1, +/-2, ...</td>
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
            <li>The wave equation y = A sin(2pi t/T +/- 2pi x/lambda + phi_0) encodes everything about a 1-D wave.</li>
            <li>Speed v = lambda f. Speed is medium-dependent. Frequency is source-dependent. Wavelength depends on both.</li>
            <li>In 3D, intensity falls as 1/r^2 (inverse square law). Amplitude falls as 1/r.</li>
            <li>Decibels are logarithmic. +10 dB = 10x more intense but only sounds 2x louder.</li>
            <li>Doppler effect: moving source compresses or stretches wavelengths, shifting observed frequency.</li>
            <li>f_obs = v/(v -/+ v_s) x f_s. Minus when approaching, plus when receding.</li>
            <li>Superposition: wave displacements add algebraically. Constructive (Delta Phi = 2npi) or destructive (Delta Phi = odd x pi).</li>
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
