


function main() {
    const input = document.getElementById('file')
    const submit = document.getElementById('submit')
    const contentBox = document.getElementById('content_box')

    function processIPYNB(response) {
        response.json().then((data) => {
            contentBox.innerHTML = globalThis.nb.parse(data).render().outerHTML
        })
    }

    function processOther(response) {
        response.text().then((data) => {
            contentBox.textContent = data
        })
    }

    submit.addEventListener('click', async () => {
        const filename = input.value
        console.log(`Fetching ${filename}`);
        let process = processOther
        if (filename.endsWith('.ipynb')) {
            // Only import notebookjs when an ipynb file is requested
            await import('./notebook.with_mod.js')
            process = processIPYNB
        }
        fetch(filename).then(process)
    })
}


function checkReadyState() {
    if (document.readyState === 'complete') {
        main()
    }
}
document.onreadystatechange = checkReadyState
checkReadyState()
