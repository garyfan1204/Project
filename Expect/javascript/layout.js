const pages = {
    "/index.html": "index.html",
    "/userinfo.html": "userinfo.html",
    "/dummie.html": "dummie.html",
    "/test.html": "test.html",
    "/result.html": "result.html"
}

const titles = {
    "index.html": "職得期待",
    "userinfo.html": "用戶資料",
    "dummie.html": "資訊懶人包",
    "test.html": "職涯測驗",
    "result.html": "測驗結果"
}

const cssFiles = {
    "index.html": ["css/layout.css", "css/index.css"],
    "userinfo.html": ["css/layout.css", "css/userinfo.css"],
    "dummie.html": ["css/layout.css", "css/dummie.css"],
    "test.html": ["css/layout.css", "css/test.css"],
    "result.html": ["css/layout.css", "css/result.css"]
}

const jsFiles = {
    "index.html": ["javascript/carousel.js"],
    "test.html":  ["javascript/dropable.js"]
}

function layout(page) {
    fetch("layout.html")
    .then((response) => response.text())
    .then((html) => {
        document.body.innerHTML = html;
        return fetch(page);
    })
    .then((response) => response.text())
    .then((pageHtml) => {
        const main = document.querySelector("main");
        main.innerHTML = pageHtml;
        const title = titles[page];
        const cssFile = cssFiles[page];
        const jsFile = jsFiles[page];
        login();

        if (title) {
            document.title = title;
        }
        
        if (cssFile) {
            cssFile.forEach((cssfile) => {
                const link = document.createElement("link");
                link.rel = "stylesheet";
                link.href = cssfile;
                document.head.appendChild(link);
            });
        }

        if (jsFile) {
            jsFile.forEach((jsfile) => {
                const script = document.createElement("script");
                script.src = jsfile;
                script.async = false;
                document.body.appendChild(script);
            });
        }
    })
    .catch((error) => {
        console.error("加載指定頁面失敗：", error);
    });
}

window.addEventListener("DOMContentLoaded", function () {
    const pathname = window.location.pathname;
    let page = pages[pathname] || "index.html";
    layout(page);
});

function login() {
    var login = document.querySelectorAll("#login");
    var registerpage = document.getElementById("register");
    var closebtn = document.querySelectorAll("#close");
    var loginpage = document.getElementById("loginpage");
    var registerpage = document.getElementById("registerpage");

    login.forEach(function(link){
        link.addEventListener("click", function(event){
            event.preventDefault();
            loginpage.style.display = "flex";
            registerpage.style.display = "none";
        });
    })

    register.addEventListener("click", function(event) {
        event.preventDefault();
        loginpage.style.display = "none";
        registerpage.style.display = "flex";
    });

    closebtn.forEach(function(btn) {
        btn.addEventListener("click", function(event) {
            event.preventDefault();
            loginpage.style.display = "none";
            registerpage.style.display = "none";
        });
    });
};