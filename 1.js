var arr = Array("Home-nav", "Skills-nav", "Hobbies-nav");
function onClick(props) {

    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        var ele = document.getElementById(element);
        if (element === props) {
            ele.classList.add("active");
        } else {
            ele.classList.remove("active");
        }

    }
}
AOS.init();