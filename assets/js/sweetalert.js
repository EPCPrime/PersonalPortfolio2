// SweetAlert
const nama = document.querySelector('#nama');
const email = document.querySelector('#email');
const subject = document.querySelector('#subject');
const message = document.querySelector('#message');
const send = document.querySelector('#send');

const customAlert = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
})

send.addEventListener('click', function() {
    // Validasi Form
    if (nama.value != '' || email.value != '' || subject.value != '' || message.value != '') {
        
        // Validasi Email
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (email.value.match(validRegex)) {
            customAlert.fire({
                title: 'Are you sure?',
                text: "Kamu yakin semua data telah diisi dengan benar?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Ya, sudah benar!',
                cancelButtonText: 'Tidak, batalkan!',
                reverseButtons: true
            }).then((result) => {
                if (result.isConfirmed) {
                    customAlert.fire(
                        'Terkirim!',
                        'Pesan anda sudah terkirim.',
                        'success'
                    )
                } else if(result.dismiss === Swal.DismissReason.cancel) {
                    customAlert.fire(
                        'Tidak Terkirim!',
                        'Pesan anda belum terkirim!',
                        'error'
                    )
                }
            })
        } else {
            customAlert.fire({
                title: 'Email Salah!',
                text: "Kamu yakin email telah diisi dengan benar?",
                icon: 'warning',
            })
        }
    } else {
        customAlert.fire({
            title: 'Data Kosong!',
            text: "Kamu yakin semua data telah diisi?",
            icon: 'warning',
        })
    }
});