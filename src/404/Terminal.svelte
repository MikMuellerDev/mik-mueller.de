<script lang="ts">
    import { onMount } from 'svelte'

    let contents = ''

    const sleep = ms => new Promise(res => setTimeout(res, ms))

    function getRandomInt(min: number, max: number) {
        min = Math.ceil(min)
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min) + min) // The maximum is exclusive and the minimum is inclusive
    }

    async function printTerminal(text: string, color: string, speed: number) {
        const symbols = {}

        for (let char of text.split('')) {
            if (char == '\n') {
                contents += '<br>'
            } else {
                contents += `<span class='terminal-style-${color}'>${char}</span>`
            }
            for (let symbol in symbols) {
                contents = contents.replaceAll(symbol, symbols[symbol])
            }

            await sleep(500 / speed + getRandomInt(0, 100))
        }
    }

    function setTerminal(text, color) {
        const symbols = {
            '/xb0': `<span class='terminal-style-green'>root</span>@<span class='terminal-style-yellow'>server</span> <span class='terminal-style-green'>~</span>> `,
            '/xb1': `<span class='terminal-style-green'>root</span>@<span class='terminal-style-yellow'>server</span> <span class='terminal-style-green'>~</span>`,
        }

        contents += `<span class='terminal-style-${color}'>${text}</span>`

        for (let symbol in symbols) {
            contents = contents.replaceAll(symbol, symbols[symbol])
        }
    }

    async function clearTerminal() {
        contents = ''
    }

    let maximized = false

    function minimixeTerminal() {}
    function maximizeTerminal() {
        console.log(maximized)
        maximized = !maximized
    }
    function closeTerminal() {}

    onMount(() => {
        let hadErrRaw = window.localStorage.getItem('terminal_had_error')
        let hadErr = true
        if (hadErrRaw === null || hadErrRaw === undefined || hadErrRaw === 'false') {
            window.localStorage.setItem('terminal_had_error', 'true')
            hadErr = false
        }
        runGreetingTerminal(!hadErr)
    })

    async function runGreetingTerminal(withInitialError: boolean) {
        if (withInitialError) {
            setTerminal('/xb0', '')
            await printTerminal(' bash /404.sh\n', 'white', 6)
            await sleep(400)
            setTerminal('bash: /404.sh: No such file or directory<br>', 'red')
            setTerminal('/xb1', '')
            setTerminal(' [130]', 'red')
            setTerminal('> ', 'white')
            await printTerminal('# Oh no, i messed that up.\n', 'gray', 10)
            await sleep(700)
            setTerminal('/xb0', 'white')
            await printTerminal('clear\n', 'white', 5)
            await sleep(100)
            await clearTerminal()
        }

        setTerminal('/xb0', 'white')
        await printTerminal('bash ./404.sh\n', 'white', 5)

        await setTerminal('<span style="font-size: 2.5rem;">404</span><br/>', 'red')
        await sleep(500)
        await setTerminal('\nThis page does not exist.', 'white')
        await sleep(500)
        await setTerminal('<br>-------------------------', 'white')
        await sleep(1000)
        await setTerminal('<br>Try going <a href="/">back</a>.', 'white')
        setTerminal('<br>/xb0', 'white')
    }
</script>

<div class="terminal" class:maximized>
    <div class="terminal__head">
        <span class="terminal__head__title" />
        <div class="terminal__head__icons">
            <span class="terminal__head__minimize" on:click={minimixeTerminal} />
            <span class="terminal__head__maximize" on:click={maximizeTerminal} />
            <span class="terminal__head__close" on:click={closeTerminal} />
        </div>
    </div>
    <div class="terminal__contents">
        <span class="terminal__contents__text">{@html contents}</span>
    </div>
</div>

<style lang="scss">
    @use '../_mixins.scss' as *;

    .terminal {
        width: 30rem;
        height: 20rem;
        background-color: #000;
        border-radius: 0.7rem;
        overflow-x: hidden;
        display: flex;
        flex-direction: column;

        @include mobile {
            width: 90%;
        }

        &.maximized {
            width: 40rem;
            height: 30rem;
        }

        &__head {
            background-color: #404040;
            height: 2rem;
            width: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;

            &__title {
                font-family: sans-serif;
                color: #808080;
                font-size: 0.8rem;
                padding-left: 1rem;
            }

            &__icons {
                display: flex;
                justify-content: space-between;
                align-items: center;
                width: 5rem;
            }

            &__minimize {
                background-color: #909090;
                height: 0.2rem;
                width: 0.7rem;
                border-radius: 0.1rem;
                margin-top: 0.3rem;
            }

            &__maximize {
                background-color: #909090;
                height: 0.7rem;
                width: 0.7rem;
                box-shadow: 2px -2px #b3b3b3;
                border-radius: 0.05rem;
            }

            &__close {
                height: 20px;
                width: 20px;
            }

            &__close:after {
                position: relative;
                content: '\d7';
                font-size: 27px;
                color: #909090;
                font-weight: bold;
                top: -10px;
                left: -5px;
            }
        }

        &__contents {
            padding: 1rem;
            text-align: start;

            &__text {
                color: #909090;
                font-family: 'Courier New', Courier, monospace;
                font-size: 1rem;
                font-weight: 800;
                transition: 0.4s;
            }
        }
    }

    :global(.terminal-style-yellow) {
        color: rgb(255, 244, 97);
    }

    :global(.terminal-style-green) {
        color: rgb(144, 255, 144);
    }

    :global(.terminal-style-orange) {
        color: rgb(255, 174, 98);
    }

    :global(.terminal-style-red) {
        color: rgb(255, 88, 88);
    }

    :global(.terminal-style-gray) {
        color: rgb(80, 80, 80);
    }

    :global(.terminal-style-white) {
        color: rgb(241, 241, 241);
    }
</style>
