    
    /*
    
    var tarih = new Date(95,5,12);
    //var tarih = new Date(2000,10,20);
    document.write(tarih);

    */

    function saatiGoster(){ // SAAT OLUSTURMA FONKSIYONU
        var tarih = new Date();
        var saat =  tarih.getHours();
        var dakika = tarih.getMinutes();
        var saniye = tarih.getSeconds();
        document.body.innerHTML = saat+":"+dakika+":"+saniye+"<br>";
    }
    setInterval(saatiGoster,1000);
