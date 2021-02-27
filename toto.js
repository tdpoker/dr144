$(document).ready(function () {});
var hot = window.location.hostname;
if (hot == "144.91.86.52") {
    function jqUpdateSize() {
        if ($(window).width() <= 960) {
            $("#footer").html(
                '<div style="text-align: justify;"></div>'
            );
            $("#footercontainer").html("");
        } else {
            $("#footercontainer").html(
                '<div style="text-align: justify;"></div>'
            );
            $("#footer").html("");
        }
    }
    $(document).ready(jqUpdateSize);
    $(window).resize(jqUpdateSize);
    if (document.URL.indexOf("?content=slot") > 0) {
        $(document).ready(function () {
            document.title = "Situs Slot Online: Pragmatic, Habanero & Joker123 - Dora Slot";
            $("meta[name='description']").attr(
                "content",
                "Dora Slot adalah situs slot online pragmatic, habanero dan joker123 yang bisa kalian coba dengan ratusan game yang bisa dimainkan. Mainkan Slot, Dapatkan Jackpot dan Jadilah Sultan."
            );
            $("link[rel='canonical']").attr("href", "http://144.91.86.52/?content=slot");
        });
    } else if (document.URL.indexOf("?content=livegames") > 0) {
        $(document).ready(function () {
            document.title = "5 Live Games Terbaru: Ioncasino, PragmaticPlay, SexyGaming, Allbet & IdnLive";
            $("meta[name='description']").attr(
                "content",
                "5 Livegames terbaru yang bisa kalian coba mainkan di doraslot. Ioncasino, Pragmaticplay, SexyGaming, Allbet & IdnLive adalah livegames yang bisa kalian mainkan dengan ditemani oleh pemandu cantik."
            );
            $("link[rel='canonical']").attr("href", "http://144.91.86.52/?content=livegames");
        });
    } else if (document.URL.indexOf("?content=tembakikan") > 0) {
        $(document).ready(function () {
            document.title = "Game Joker123 Terbaru | Login Joker123 Sekarang Juga";
            $("meta[name='description']").attr(
                "content",
                "Game joker12 terbaru dengan berbagai jackpot yang bisa didapatkan. Login sekarang juga bersama dengan Doraslot. Menangkan jackpot sampai dengan puluhan juta rupiah dan bawa pulang berbagai hadiah menarik lainnya."
            );
            $("link[rel='canonical']").attr("href", "http://144.91.86.52/?content=tembakikan");
        });
    } else if (document.URL.indexOf("?content=promosi") > 0) {
        $(document).ready(function () {
            document.title = "Promosi dan Cara Klaim Bonus Doraslot";
            $("meta[name='description']").attr("content", "Informasi dan cara klaim untuk mendapatkan promosi bonus yang disediakan oleh Doraslot. Dapatkan berbagai bonus menarik seperti cashback 5% dan bonus 10% untuk yang baru pertama daftar.");
            $("link[rel='canonical']").attr("href", "http://144.91.86.52/?content=promosi");
        });
    } else if (document.URL.indexOf("?content=bukumimpi") > 0) {
        $(document).ready(function () {
            document.title = "Buku Tafsir Mimpi & Erek Erek 4D 3D 2D ";
            $("meta[name='description']").attr(
                "content",
                "Buku tafsir mimpi dan erek erek dilengkapi dengan angka 2D 3D 4D yang bisa anda jadikan acuan dalam pemasangan nomor jitu mimpi anda hari ini. Buku Mimpi Online ini tidak bergambar dan hanya terdapat keterangan mimpi apa saja dan angka yang berhubungan dengan mimpi tersebut."
            );
            $("link[rel='canonical']").attr("href", "http://144.91.86.52/?content=bukumimpi");
        });
    } else if (document.URL.indexOf("?content=hasil&pid=SY") > 0) {
        $(document).ready(function () {
            document.title = "Hasil Keluaran Togel Sidney - DoraSlot";
            $("meta[name='description']").attr("content", "Hasil keluaran togel Sidney. Untuk melihat angka berapa yang keluar pada togel hari ini, anda bisa mengunjungi situs kami langsung.");
            $("link[rel='canonical']").attr("href", "http://144.91.86.52/?content=hasil&pid=SY");
        });
    } else if (document.URL.indexOf("?content=hasil&pid=MAD") > 0) {
        $(document).ready(function () {
            document.title = "Togel Madrid | Hasil Result Hari Ini";
            $("meta[name='description']").attr("content", "Hasil dan keluaran togel madrid untuk yang melakukan pemasangan angka bersama kami. Doraslot melayani pembukaan akun dan pemasangan angka untuk togel madrid.");
            $("link[rel='canonical']").attr("href", "http://144.91.86.52/?content=hasil&pid=MAD");
        });
    } else if (document.URL.indexOf("?content=hasil&pid=SG") > 0) {
        $(document).ready(function () {
            document.title = "Togel Sgp | Togel Singapore | Hasil Togel Singapore";
            $("meta[name='description']").attr("content", "Hasil togel Singapore(sgp) bisa anda lihat disini juga. Doraslot memberikan peluang kepada anda untuk mendaftarkan diri anda dan memasang togel singapore bersama dengan kami.");
            $("link[rel='canonical']").attr("href", "http://144.91.86.52/?content=hasil&pid=SG");
        });
    } else if (document.URL.indexOf("?content=hasil&pid=HK") > 0) {
        $(document).ready(function () {
            document.title = "Togel Hongkong | Toto HK | Result HK";
            $("meta[name='description']").attr("content", "Result Togel Hongkong yang kami publikasikan setiap harinya. Pemasangan togel 4D hongkong bersama dengan doraslot akan mendapatkan diskon besar.");
            $("link[rel='canonical']").attr("href", "http://144.91.86.52/?content=hasil&pid=HK");
        });
    } else {
        $(document).ready(function () {
            document.title = "DoraSlot: Agen Togel Online | Judi Slot Terpercaya";
            $("meta[name='description']").attr("content", "Doraslot merupakan agen togel online. Melayani pemasangan angka 4D 3D 2D Colok dan masih banyak lainnya. Dora slot juga melayani pembukaan akun slot.");
            $("link[rel='canonical']").attr("href", "http://144.91.86.52/");
        });
    }
}
