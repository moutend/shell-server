let keymap = {}
keymap[13] = "\n"
keymap[9] = "\t"

let ws = new WebSocket('ws://localhost:12345/ws')

ws.onopen = () => {
    console.log('connected')
    document.body.addEventListener('keydown', e => {
        console.log(e)
        let key = keymap[e.keyCode] || e.key
        if (key.length > 1) {
            return;
        }
        ws.send(key)
    })
}

ws.onmessage = (e) => {
    console.log(e.data)
    let elem = document.getElementById('main')
    let text = e.data.replace("\n", '<br>')
    main.innerHTML = main.innerHTML + text
}
