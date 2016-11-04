$(".rank:not([disabled])").live("change", function () {
    var thisselected = $(":selected", this).val();
    var thisparent = $(this).attr("data-id");
    var thisstage = $(this).attr("gallery-category-id");
    //loop thru all and 
    var selected = [];
    var sameItemIndex = 0;
    $(".rank[gallery-category-id='" + thisstage + "']:not([disabled])").each(function (index, element) {
        var checkingselected = $(this).val();
        var checkingparent = $(this).attr("data-id");
        if (checkingselected == thisselected && checkingparent != thisparent) {
            sameItemIndex = index;
        }
        selected.push(checkingselected);
    });

    //check what is not selected
    var notselected = 0;
    $("option", this).each(function () {
        var isslected = $(this).val();
        if (selected.indexOf(isslected) < 0) {
            notselected = isslected;
        }
    });

    $(".rank[gallery-category-id='" + thisstage + "']:not([disabled]):eq(" + sameItemIndex + ")").val(notselected);
});