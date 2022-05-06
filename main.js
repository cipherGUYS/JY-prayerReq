const scriptURL = 'https://script.google.com/macros/s/AKfycbz3PNuRcDbEzlKKjfV3kYGCBqeBddyCelwOXYqPIW_oOWwo2Fzr-Kj4YmxQD0n6XLEUNQ/exec'
const form = document.forms['prayer-request']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(() => {
        $("#form_alerts").html("<div class='alert alert-success'>Requested successfully.</div>");
        document.getElementById("pr").reset();
    })
    .catch(() => $("#form_alerts").html("<div class='alert alert-danger'>Error.</div>"))
})