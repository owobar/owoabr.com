var ha_ele = document.getElementsByClassName("nav-buttom")[0];
var ha_ele2 = document.getElementsByClassName("nav")[0];
var ha_ele3 = document.getElementsByClassName("loading-page")[0];
var ha_var = false;

function auto_super_menu_btn_hahaha() {
    // console.log(document.getElementsByClassName("nav-buttom"))
    if (ha_var == false) {
        ha_ele.classList.add("clicked");
        ha_ele2.classList.add("clicked");
        // ha_ele3.classList.add("nav-clicked-m");
        ha_var = true;
        console.log("[Debug]:啦啦~選單已開啟");
    } else {
        ha_var = false;
        ha_ele.classList.remove("clicked");
        ha_ele2.classList.remove("clicked");
        // ha_ele3.classList.remove("nav-clicked-m");
        console.log("[Debug]:啦啦~選單已關閉");
    }
}

var is_close_nav_open = false;

async function close_nav() {
    if (is_close_nav_open == false) {
        is_close_nav_open = true;
        console.log("[Debug]:偵測到視窗變動，選單動畫已鎖住。(這訊息是給使用者學習JS使用。)");
        ha_ele2.classList.add("amination-locked");
        ha_var = false;
        ha_ele.classList.remove("clicked");
        ha_ele2.classList.remove("clicked");
        // ha_ele3.classList.remove("nav-clicked-m");
        console.log("[Debug]:啦啦~選單已關閉");
        await setTimeout(() => {
            console.log("[Debug]:選單動畫鎖定解除");
            ha_ele2.classList.remove("amination-locked");
            is_close_nav_open = false;
        }, 2000);
    }
}

window.addEventListener('resize', close_nav);