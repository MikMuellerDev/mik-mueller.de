<script lang="ts">
    import { onMount } from 'svelte'
    let age = '00'

    const sleep = (ms: number) => new Promise(res => setTimeout(res, ms))

    function getAge(): number {
        let birthday = new Date(2006, 3, 8)
        let now = new Date()
        let diff = now.getTime() - birthday.getTime()
        return Math.abs(new Date(diff).getUTCFullYear() - 1970)
    }

    // This function increments the `age` variable like a counter.
    // The speed in which the age is incremented is cubic fade-in / fade-out
    async function displayAge() {
        let years = getAge()

        const FUNCTION_MAXIMUM = 150
        const MINIMUM_DELAY = 10
        const BASE_DELAY = FUNCTION_MAXIMUM + MINIMUM_DELAY
        const FIRST_ZERO_X = -years / 2

        let getScaleFactorOfZero = (x: number) => -(FUNCTION_MAXIMUM - MINIMUM_DELAY) / Math.pow(x, 2)
        const SCALE_FACTOR = getScaleFactorOfZero(FIRST_ZERO_X)

        let fadeInOutFn = (x: number) => SCALE_FACTOR * Math.pow(x, 2) + FUNCTION_MAXIMUM

        console.log(`Scale factor: ${SCALE_FACTOR} | first zero: ${FIRST_ZERO_X}`)
        let modifier = FIRST_ZERO_X

        for (let a = 0; a < years + 2; a++) {
            age = a.toString().padStart(2, '0')
            console.log(
                `Sleep: ${Math.round(
                    BASE_DELAY - fadeInOutFn(modifier),
                )} | Modifier: ${modifier} | ModifierFn: ${Math.round(fadeInOutFn(modifier))}`,
            )
            await sleep(BASE_DELAY - fadeInOutFn(modifier))
            modifier++
        }
    }

    onMount(() => {
        displayAge()
    })

    const mailB64 = "bWlrLm11ZWxsZXJAc3R1ZGVudC5ocGkudW5pLXBvdHNkYW0uZGU="
    let showMail = false
</script>

<main>
    <!-- <Terminal /> -->

    <img alt="Mik Müller" class="logo" src="/images/logo.webp" />

    <div class="about-container">
        <div class="about-container__lhs">
            <img alt="Mik Müller" class="about-container__lhs__img" src="/images/profile.webp" />
        </div>
        <div class="about-container__rhs">
            <div class="about-container__rhs__element">
                <h4>About</h4>
                Hi there! I'm Mik, a&nbsp;<b>{age} year-old</b> German student at <a href="https://hpi.de">Hasso Plattner Institute</a>. My
                interests are programming, servers and other engineering-related topics. My
                strengths are
                <b>Rust</b>
                and <b>Go</b> since I'm currently focussing on backend and low-level systems.
            </div>
            <div class="about-container__rhs__element">
                <h4 id="links">Links & Contact</h4>
                <ul>
                    <li><a href="https://github.com/MikMuellerDev" target="_blank">GitHub</a></li>
                    <li>
                        <a href="https://www.linkedin.com/in/mik-m%C3%BCller-16457523a/" target="_blank">LinkedIn</a
                        >
                    </li>
                    <li>
                        {#if !showMail}
                            <a href="#mail" on:click={() => showMail = true}>Mail</a>
                            (click to show)
                        {:else}
                            <a href={`mailto:${atob(mailB64)}`}>
                                <code id="links">
                                    {atob(mailB64)}
                                </code>
                            </a>
                        {/if}
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <div class="spacer" />

    <h2>Projects</h2>

    I am currently working on

    <q>
    <a href="https://github.com/smarthome-go/homescript">
        Homescript
    </a>
    </q>.

    Right now, I am writing a virtual machine and a compiler to replace the tree-walking interpreter.
    A current challenge is testing of the compiler and virtual machine toolchain. Therefore, I am experimenting with semantic-based fuzzing of the language.

    <div class="spacer" />

    <div class="projects">
        <div class="projects__project">
            <a href="https://rush-lang.de">
            <h3>The <q>rush</q> Programming Language</h3>
            </a>
            <div class="projects__project__split">
                <div class="projects__project__split__left">
                    A voluntary 12th grade research project dealing with the design and
                    implementation of compiled programming languages. Our final grade was 15 / 15
                    points.

                    <h4>Components</h4>

                    <ul>
                        <li>Lexer & Parser</li>
                        <li>Semantic Analyzer</li>
                        <li>Tree-walking interpreter</li>
                        <li>Virtual machine interpreter</li>
                        <li>WebAssembly Compiler</li>
                        <li>LLVM Compiler</li>
                        <li>RISC-V Assembly Compiler</li>
                        <li>x86_64 Assembly Compiler</li>
                    </ul>
                </div>

                <div class="projects__project__split__right">
                    <img src="/images/rush.webp" alt="" />
                </div>
            </div>

            <div class="projects__project__skills">
                <span>Rust</span>
                <span>RISC-V Assembly</span>
                <span>LLVM</span>
                <span>C</span>
                <span>Python</span>
                <span>Bash</span>
                <span>Svelte</span>
                <span>WebAssembly</span>
                <span>Docker</span>
                <span>LaTeX</span>
                <span>Git</span>
                <span>Compiler Construction</span>
                <span>Presentation Skills</span>
                <span>Public Speaking</span>
            </div>

            <div class="spacer" />

            <div class="projects__project">
            <a href="https://github.com/smarthome-go">
                <h3>The <q>Smarthome</q> Organization</h3>
            </a>

                <div class="projects__project__split">
                    <div class="projects__project__split__left">
                        Smarthome is a completely self-built home-automation system written in Go
                        (backend) and Svelte (frontend). The system focuses on functionality and
                        simplicity in order to guarantee a stable and reliable home-automation
                        system, which is actually helpful in automating common tasks.

                        <h4>Features</h4>

                        <ul>
                            <li>Control over real hardware</li>
                            <li>Advanced task automation system</li>
                            <li>Modern and cross-platform web UI</li>
                        </ul>
                    </div>

                    <div class="projects__project__split__right">
                        <img src="/images/smarthome.webp" alt="" />
                    </div>
                </div>

                <div class="projects__project__skills">
                    <span>Go</span>
                    <span>Concurrency</span>
                    <span>Rust</span>
                    <span>Python</span>
                    <span>Bash</span>
                    <span>Typescript</span>
                    <span>Svelte</span>
                    <span>Docker</span>
                    <span>Git</span>
                    <span>Project Management</span>
                </div>
            </div>

            <div class="spacer" />

            <div class="projects__project">
            <a href="https://github.com/smarthome-go/homescript">
                <h3>The <q>Homescript</q> Programming Language</h3>
            </a>

                <div class="projects__project__split">
                    <div class="projects__project__split__left">
                        Homescript is a domain-specific programming language for the <q>Smarthome</q
                        >
                        server. It provides a scripting interface for Smarthome users in order to allow
                        them to create customized routines and workflows. Furthermore, more advanced
                        users can use it to implement their own apps which run inside Smarthome.
                        <br />
                        <br />
                        For instance, one might use Homescript to create a widget which displays the
                        current news or weather information.

                        <h4>Features</h4>
                        <ul>
                            <li>Static type-system</li>
                            <li>Rust-like syntax</li>
                            <li>Advanced control flow structures</li>
                            <li>Module import- and export system</li>
                        </ul>
                    </div>

                    <div class="projects__project__split__right">
                        <img src="/images/homescript.webp" alt="" />
                    </div>
                </div>

                <div class="projects__project__skills">
                    <span>Go</span>
                    <span>Concurrency</span>
                    <span>DSL Creation</span>
                    <span>Grammars</span>
                    <span>Lexing & Parsing</span>
                    <span>Semantic Analysis</span>
                    <span>Type Systems</span>
                    <span>Git</span>
                </div>
            </div>

            <div class="spacer" />

            <div class="projects__project">
                <a href="https://github.com/MikMuellerDev/radio">
                <h3>Radio</h3>
                </a>

                <div class="projects__project__split">
                    <div class="projects__project__split__left">
                        A headless music player which supports internet radio and streaming.

                        <h4>Features</h4>

                        <ul>
                            <li>MP3 network streaming</li>
                            <li>Support for fixed-length audio files and live streams</li>
                            <li>Modern and cross-platform web UI</li>
                        </ul>
                    </div>

                    <div class="projects__project__split__right">
                        <img src="/images/radio.webp" alt="" />
                    </div>
                </div>

                <div class="projects__project__skills">
                    <span>Rust</span>
                    <span>Svelte</span>
                    <span>MP3 Streaming</span>
                    <span>Concurrency</span>
                    <span>Git</span>
                </div>
            </div>

            <div class="spacer" />

            <div class="projects__project">
            <a href="https://github.com/MikMuellerDev/quickclip">
                <h3>QuickClip</h3>
            </a>
                <div class="projects__project__split">
                    <div class="projects__project__split__left">
                        A self-hosted, simple alternative to PasteBin. QuickClip supports multiple
                        users which can share individual documents. The purpose of this software is
                        to allow users to quickly share plaintext across devices.

                        <h4>Features</h4>
                        <ul>
                            <li>Support for multiple users</li>
                            <li>Access-control for each document</li>
                            <li>Support for automatic synchronizatio</li>
                        </ul>
                    </div>

                    <div class="projects__project__split__right">
                        <img src="/images/quickclip.webp" alt="" />
                    </div>
                </div>

                <div class="projects__project__skills">
                    <span>Go</span>
                    <span>Typescript</span>
                    <span>CSS</span>
                    <span>HTML</span>
                    <span>Docker</span>
                    <span>Git</span>
                </div>

                <div class="spacer" />
            </div>
            <!-- <Terminal /> -->
        </div>
    </div>
</main>

<style lang="scss">
    @use '../_mixins.scss' as *;

    main {
        padding: 5% 7%;

        @include mobile {
            padding: 5% 7.5%;
        }

        @include widescreen {
            padding: 5% 15%;
        }
    }

    a {
        color: var(--clr-primary);
    }

    .logo {
        width: 10rem;
    }

    .spacer {
        height: 0.2rem;
        border-radius: 0.4rem;
        background-color: #444444;
        margin: 2rem 0;
    }

    .about-container {
        height: 100%;
        width: 100%;
        display: flex;
        gap: 2rem;

        @include mobile {
            flex-direction: column;
            align-items: center;
            gap: 0;
        }

        @include widescreen {
            gap: 5rem;
        }

        &__lhs {
            padding-top: 2rem;

            @include widescreen {
                align-items: center;
                padding-top: 0;
                display: flex;
                justify-content: center;
            }

            &__img {
                max-width: 10rem;
                height: max-content;
                aspect-ratio: 1/1;
                border-radius: 50%;

                @include mobile {
                    max-width: 40vw;
                }

                @include widescreen {
                    max-width: 13rem;
                }
            }
        }

        &__rhs {
            @include widescreen {
                width: 60%;
            }
        }
    }

    .projects {
        display: flex;
        flex-direction: column;
        gap: 3rem;

        &__project {
            &__split {
                display: flex;
                justify-content: space-between;
                gap: 2rem;

                @include mobile {
                    flex-direction: column-reverse;
                }

                &__left {
                    max-width: 60%;

                    @include mobile {
                        max-width: 100%;
                    }
                }

                &__right {
                    max-width: 40%;

                    @include mobile {
                        max-width: 100%;
                    }

                    img {
                        width: 100%;
                    }
                }
            }

            &__skills {
                margin-top: 2rem;
                display: flex;
                align-items: flex-start;
                flex-wrap: wrap;
                gap: 0.4rem;

                span {
                    color: var(--clr-primary);
                    background-color: rgba($color: #999999, $alpha: 0.1);
                    backdrop-filter: blur(5px);
                    padding: 0.4rem 0.6rem;
                    border-radius: 0.7rem;
                    font-size: 0.7rem;
                }
            }
        }
    }
</style>
