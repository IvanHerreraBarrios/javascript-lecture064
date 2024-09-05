function hello(){
    alert("Hello World")
    console.log(event)
}

const $semanticHandler = document.getElementById("semantic-handler"),
$multiHandler = document.getElementById("multi-handler")

$semanticHandler.onclick = hello
$semanticHandler.onclick = function (e) {
    alert("Semantic handler")
    console.log(e)
    console.log(event)
}

$multiHandler.addEventListener("click", hello)
$multiHandler.addEventListener("click", (e) => {
    alert("Multi handler")
    console.log(e)
    console.log(e.type)
    console.log(event)
})