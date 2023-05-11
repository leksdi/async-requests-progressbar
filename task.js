const elementProgress = document.getElementById("progress");
const url = "https://students.netoservices.ru/nestjs-backend/upload";
const sendBtn =document.getElementById("send");
const elementFile = document.getElementById("file");

function uploadFile(file) {
    let xhr = new XMLHttpRequest()
    xhr.upload.onprogress = function(event) {
        elementProgress.value = event.loaded/event.total
    }
    xhr.upload.onload = function() {
        console.log('Данные полностью загружены на сервер!');
    }

    xhr.upload.onerror = function () {
        alert('Произошла ошибка при загрузке данных на сервер!');
    }

    xhr.open("POST", url);
    xhr.send(elementFile);
}

sendBtn.addEventListener("click", (event) => {
    event.preventDefault()
    uploadFile(elementFile.files[0])
});


