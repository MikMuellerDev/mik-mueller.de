<script lang="ts">
    import Terminal from './Terminal.svelte'
</script>

<main>
    <img alt="Mik Müller" class="logo" src="/images/logo.webp" />

    <div class="spacer" />

    <Terminal />
</main>

<style lang="scss">
    @use '../_mixins.scss' as *;

    main {
        padding: 5% 7%;

        @include mobile {
            padding: 5% 7.5%;
            display: flex;
            flex-direction: column;
            align-items: center;
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
