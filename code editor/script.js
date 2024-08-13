function run(){

    let htmlcode = document.getElementById("html-code").value;
    let csscode = document.getElementById("css-code").value;
    let jscode = document.getElementById("js-code").value;
    let outPut = document.getElementById("output");

    outPut.contentDocument.body.innerHTML = htmlcode + "<style>" + csscode + "</style>";
    outPut.contentWindow.eval(jscode);
}