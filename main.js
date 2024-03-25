var username;

//Login dengan Jquery
$(document).ready(function () {
    $('.loginform').submit(function (e) {
        e.preventDefault();

        username = $('#username').val();
        var password = $('#password').val();


        if (password === 'admin') {
            Swal.fire(
                'Login sukses!',
                'success',
                console.log("adadad " + username),
            ).then((result) => {
                if (result.isConfirmed) {
                    localStorage.setItem('welcomeName', username);
                    window.location.href = "mainpage.html";

                }
            });
        }
        else {
            Swal.fire(
                'Login Gagal',
                'Password dan Email tidak sesuai.',
                'error'
            );

        }
    });
});


$(document).ready(function () {
    $('#incomeForm').submit(function (e) {
        e.preventDefault();
        var name = $('#transactionName').val();
        var amount = $('#transactionAmount').val();
        var category = $('#transactionCategory').val();

        if (!name || !amount || !category) {
            Swal.fire(
                'Transaksi Gagal',
                'Harap Lengkapi Formulir.',
                'error'
            );
        } else {
            // Proses transaksi berhasil
            Swal.fire(
                'Transaksi sukses!',
                'Data transaksi telah berhasil disimpan.',
                'success',
                
                

            );
           
                simpenData(name, amount, category);
                
          
        }
    });
});


$(document).ready(function () {
    $('#outcomeForm').submit(function (e) {
        e.preventDefault();
        var name = $('#transactionName').val();
        var amount = $('#transactionAmount').val();
        var category = $('#transactionCategory').val();

        if (!name || !amount || !category) {
            Swal.fire(
                'Transaksi Gagal',
                'Harap Lengkapi Formulir.',
                'error'
            );
        } else {
            // Proses transaksi berhasil
            Swal.fire(
                'Transaksi sukses!',
                'Data transaksi telah berhasil disimpan.',
                'success',
                
                

            );
           
                simpenData2(name, -amount, category);
                
          
        }
    });
});


function simpenData(name, amount, category) {

    var addedHTML = `<div class="transactionPos mb-4 align-items-center" style="display: flex;">
                <div class="circle mr-3"><i class="fa-solid fa-arrow-trend-up text-success"></i></div>
                <div>
                    <h5>${name}</h5>
                    <h6>${category}</h6>
                </div>
                <h3 class="bal ml-auto">${amount}</h3>
                <button onclick="hapusData(this)" class="btn bg-danger ml-2">
                        <h6 style="color: white;">Hapus</h6>
                    </button>
            </div>`;

    localStorage.setItem('addedHTML', addedHTML);
    addHistory();
    window.location.href = "mainpage.html";
    
}


function simpenData2(name, amount, category) {

    var addedHTML = `<div class="transactionPos mb-4 align-items-center" style="display: flex;">
                <div class="circle mr-3"><i class="fa-solid fa-arrow-trend-down text-danger"></i></div>
                <div>
                    <h5>${name}</h5>
                    <h6>${category}</h6>
                </div>
                <h3 class="bal ml-auto">${amount}</h3>
                <button onclick="hapusData(this)" class="btn bg-danger ml-2">
                        <h6 style="color: white;">Hapus</h6>
                    </button>
            </div>`;

    localStorage.setItem('addedHTML', addedHTML);
    addHistory();
    window.location.href = "mainpage.html";
    
}

