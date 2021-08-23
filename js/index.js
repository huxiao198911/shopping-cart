$(function() {
    // step 1 :if .check-all checked: all i-checkbox inputs checked
    $(".check-all").change(function() {
        // console.log($(this).prop("checked"));
        $(".i-checkbox, .check-all").prop("checked", $(this).prop("checked"));

        // step 9: clear chosen products
        $(".delete").click(function() {
            $(".cart-item").remove();
            getSum();
        });
    })

    // step2: if length of i-checkbox <3, .check-all prop is false
    $(".i-checkbox").change(function() {
        if ($(".i-checkbox:checked").length === $(".i-checkbox").length) {
            $(".check-all").prop("checked", true);
        } else {
            $(".check-all").prop("checked", false);
        }
        // step 11: change div background when checkbox checked
        if ($(this).prop("checked")) {
            $(this).parents(".cart-item ").addClass("current");
        } else {
            $(this).parents(".cart-item ").removeClass("current");
        }


    });

    // step 3: increase or decrease number of products
    $(".decrement").click(function() {
        var num = $(this).siblings(".itxt").val();
        if (num == 1) {
            return false;
        }
        num--;
        $(this).siblings(".itxt").val(num);

        // step 4: get sum of each product

        // toFixed(2):保留两位小数
        // $(this).parent().parent().siblings(".sum").text("￥" + $(this).parent().parent().siblings(".price").text().substr(1) * num);
        var price = $(this).parents(".number").siblings(".price").text().substr(1);
        $(this).parents(".number").siblings(".sum").text("￥" + (price * num).toFixed(2));
        getSum();
    })

    $(".increment").click(function() {
        var num = $(this).siblings(".itxt").val();
        num++;
        $(this).siblings(".itxt").val(num);
        // step 4: get sum of each product
        var price = $(this).parents(".number").siblings(".price").text().substr(1);
        $(this).parents(".number").siblings(".sum").text("￥" + (price * num).toFixed(2));
        getSum();
    })




    //step 5: if value in .itxt changed directly, sum of this product also changes
    $(".itxt").change(function() {
        var num = $(this).val();
        var price = $(this).parents(".number").siblings(".price").text().substr(1);
        $(this).parents(".number").siblings(".sum").text("￥" + (price * num).toFixed(2));
        getSum();
    })

    // step 6 get product number and total price

    function getSum() {
        var counter = 0;
        $(".itxt").each(function(index, ele) {
            counter += parseInt($(ele).val());
        });
        $(".right .quantity strong").text(counter);

        var totalPrice = 0;
        $(".cart-item .sum").each(function(index, ele) {
            totalPrice += parseFloat($(ele).text().substr(1));
        });
        $(".right .sum strong").text("￥" + totalPrice.toFixed(2));
    };

    // step 7: delete any chosen product
    $(".cart-item .action a").click(function() {
        $(this).parents(".cart-item").remove();
        getSum();
    });


    // step 8: clear the whole shopping cart
    $(".clean").click(function() {
        $(".cart-item").remove();
        getSum();
    });

    // step 10: clear chosen products
    $(".delete").click(function() {
        $(".i-checkbox:checked").parents(".cart-item").remove();
        getSum();
    });









})