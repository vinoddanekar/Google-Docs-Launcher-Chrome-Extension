window.addEventListener('load', (event) => {
    var hplNewDoc = document.getElementById("hplNewDoc");
    hplNewDoc.addEventListener("click", onNewDocClick);

    var hplNewSpreadsheet = document.getElementById("hplNewSpreadsheet");
    hplNewSpreadsheet.addEventListener("click", onNewSpreadsheetClick);

    var hplNewPresentation = document.getElementById("hplNewPresentation");
    hplNewPresentation.addEventListener("click", onNewPresentationClick);

    var hplNewForm = document.getElementById("hplNewForm");
    hplNewForm.addEventListener("click", onNewFormClick);

    var hplNewGmail = document.getElementById("hplNewGmail");
    hplNewGmail.addEventListener("click", onNewGmailClick);

    function onNewDocClick() {
        openPopup('https://docs.google.com/create');
    }

    function onNewSpreadsheetClick() {
        openPopup('https://sheets.google.com/create');
    }

    function onNewPresentationClick() {
        openPopup('https://docs.google.com/presentation/create');
    }

    function onNewFormClick() {
        openPopup('https://docs.google.com/forms/create');
    }

    function onNewGmailClick() {
        openPopup('https://mail.google.com/mail/u/0/?view=cm&fs=1&tf=1');
    }

    function openPopup(url) {
        chrome.windows.create({
            url: url,
            type: "popup",
            focused: true
        });
    }
});