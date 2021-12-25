function goAbout(){
    window.location.href = "#about";
}

function copyToClipboard(){
    navigator.clipboard.writeText('jessi.lamby100@gmail.com')
    document.getElementById('copiedEmail').className="small-text show";
}