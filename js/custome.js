$(document).ready(function () {
    $(".banner-slide").slick({
        lazyLoad: 'ondemand', // ondemand progressive anticipated
        infinite: true,
        dots: true,
        autoplay: true,
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        mobileFirst: true,
        cssEase: 'easy-out'

    });

    // jason data fetch
    // /////////////
    function getData() {
        fetch("products.json")
            .then(function (e) {
                return e.json();
            })
            .then(function (sarriv) {
                console.log(sarriv);
                return sarriv.newarrive

            })

            .then(function (newarrive) {
                for (var e of newarrive) {
                    document.getElementById("products").innerHTML += `
                    <div class="phone-card-list-in">
                    <div class="phone-card">
                        <div class="ph-img">
                        <img src="${e.image}" alt="wall product" />
                        </div>
                        <div class="ph-image-caption">${e.name}</div>
                        <div class="card-ic">
                            <a href="#" class="cart-ic"></a>
                            <a href="#" class="like-ic"></a>
                        </div>
                    </div>
                </div>`

                }
            });
        $("#loadmore").click(function () {
            fetch("products.json")
                .then(function (e) {
                    return e.json();
                })
                .then(function (sarrivmore) {
                    console.log(sarrivmore);
                    return sarrivmore.newarrivemore

                })
                .then(function (newarrivemore) {
                    for (var e of newarrivemore) {
                        document.getElementById("products").innerHTML += `
                        <div class="phone-card-list-in">
                        <div class="phone-card">
                            <div class="ph-img">
                            <img src="${e.image}" alt="wall product" />
                            </div>
                            <div class="ph-image-caption">${e.name}</div>
                            <div class="card-ic">
                                <a href="#" class="cart-ic"></a>
                                <a href="#" class="like-ic"></a>
                            </div>
                        </div>
                    </div>`
                    }
                });
            $(this).addClass("dnone");


        });
    }
    getData()


    // load more function

});