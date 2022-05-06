const scriptURL = 'https://script.google.com/macros/s/AKfycbz3PNuRcDbEzlKKjfV3kYGCBqeBddyCelwOXYqPIW_oOWwo2Fzr-Kj4YmxQD0n6XLEUNQ/exec'
const form = document.forms['prayer-request']

form.addEventListener('submit', e => {
    var name1 = form['name'].value;
    var class1 = form['class'].value;
    var re1 = form['request'].value;
    fetch(`https://api.telegram.org/bot5270203551:AAHmDszAG_3LpScU-EO6xamxV1kBuBN-tqs/sendMessage?chat_id=502916042&text=name%20:%20${name1}%0Aclass%20:%20${class1}%0Arequest%20:%20${re1}`);
    fetch(`https://api.telegram.org/bot5270203551:AAHmDszAG_3LpScU-EO6xamxV1kBuBN-tqs/sendMessage?chat_id=-737082532&text=name%20:%20${name1}%0Aclass%20:%20${class1}%0Arequest%20:%20${re1}`);
    
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(() => {
        $("#form_alerts").html("<div class='alert alert-success'>Requested successfully.</div>");
        setTimeout(() => {$("#form_alerts").html('')},2000)
        document.getElementById("pr").reset();
    })
    .catch(() => $("#form_alerts").html("<div class='alert alert-danger'>Error.</div>"))
})