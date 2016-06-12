// swal.setDefaults({
//     confirmButtonColor: '#DD6B55',
//     confirmButtonText: "确定",
//     cancelButtonText: "取消"
// });
DORA = {
    cancelSelect() {
        let primaryKeys = document.getElementsByName('primaryKey');
        if (primaryKeys) {
            for (var k = 0; k < primaryKeys.length; k++) {
                primaryKeys[k].checked = false;
            }
        }
        let selectAllCk = document.getElementById('selectAllCk');
        if (selectAllCk) {
            selectAllCk.checked = false;
        }

    },
    checkValues(){
        "use strict";
        let ids = [];
        let primaryKeys = document.getElementsByName('primaryKey');
        for (var k = 0; k < primaryKeys.length; k++) {
            if (primaryKeys[k].checked) {
                ids.push(primaryKeys[k].id)
            }
        }
        console.log("checked:", ids);
        return ids;
    },
    loading(com){
        "use strict";
        if (!com || com === 'hide') {
            document.getElementById('loading').style.display = 'none';
            document.getElementById('loading_box').style.display = 'none';
        }
        if (com === 'show') {
            document.getElementById('loading').style.display = 'block';
            document.getElementById('loading_box').style.display = 'block';
        }

    },
    dataLoading(com){
        "use strict";
        if (!com || com === 'hide') {
            document.getElementById('loadingData').style.display = 'none';
        }
        if (com === 'show') {
            document.getElementById('loadingData').style.display = 'block';
        }
    },
    //普通消息=框
    showBasicMessage(message){
        swal(message);
    },
    showTitleMessage(title, text){
        swal(title, text ? text : "");
    },
    showSuccMessage(title, text, delay = 0){
        setTimeout(function () {
            swal(title, text ? text : "", "success");
        }, delay);
    },
    showErrMessage(title, text, delay = 0){
        setTimeout(function () {
            swal(title, text ? text : "", "error");
        }, delay);
    },
    showHtmlMessage(title, text){
        swal({title: title, text: text, html: true});
    }
};