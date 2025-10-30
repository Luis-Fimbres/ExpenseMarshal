let index_dropDown_status = false;
let dashboard_dropDown_status = false;

window.onload = () => {
    index_dropDown_status = false;
    dashboard_dropDown_status = false;
}
function index_dropDown_menu(){
    if (index_dropDown_status){
        document.getElementById('index_drop-down').style.display = 'none'
        document.querySelector("#hamburger > button > svg").style.fill = '#F1F5F9'
        index_dropDown_status = false
    }
    else{
        document.getElementById('index_drop-down').style.display = 'block'
        document.querySelector("#hamburger > button > svg").style.fill = '#2563EB'
        index_dropDown_status = true
    }
}
function dashboard_dropDown_menu(){
    if (dashboard_dropDown_status){
        document.getElementById('side_bar').style.display = 'none'
        document.querySelector("#hamburger > button > svg").style.fill = '#F1F5F9'
        dashboard_dropDown_status = false
    }
    else{
        document.getElementById('side_bar').style.display = 'flex'
        document.querySelector("#hamburger > button > svg").style.fill = '#2563EB'
        dashboard_dropDown_status = true
    }
}