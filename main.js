const scriptURL = 'https://script.google.com/macros/s/AKfycbz3PNuRcDbEzlKKjfV3kYGCBqeBddyCelwOXYqPIW_oOWwo2Fzr-Kj4YmxQD0n6XLEUNQ/exec'
const form = document.forms['prayer-request']
env:
  token=${{ secrets.TELE_BOT }};
form.addEventListener('submit', e => {
    var name1 = form['name'].value;
    var year1 = form['year'].value;
    var re1 = form['request'].value;
    fetch(`https://api.telegram.org/bot${token}/sendMessage?chat_id=-737082532&Text=name%20:%20${name1}%0AYear%20:%20${year1}%0ARequest%20:%20${re1}`);
    
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(() => {
        $("#form_alerts").html("<div class='alert alert-success'>Requested successfully.</div>");
        setTimeout(() => {$("#form_alerts").html('')},2000)
        document.getElementById("pr").reset();
    })
    .catch(() => $("#form_alerts").html("<div class='alert alert-danger'>Error.</div>"))
})
