function en(){
    page = window.location.href.split("tc/")[1]
    window.location.href = "../" + "en/"+page
}
function tc(){
    page = window.location.href.split("en/")[1]
    window.location.href = "../" + "tc/"+page
}