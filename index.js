// $('.arrow').click(function () {
//     $(this).parent().children().toggleClass('d-block')
//     $(this).toggleClass('d-inline').removeClass('d-block')
//
//     if ($(this).next().hasClass('d-block')) {
//         console.log('1')
//         $(this).css('background', 'red')
//     }
// })
//
// $('.search-box .btn').click(function () {
//     $(this).parent().parent('.filter-container').removeClass('d-block')
// })
//
//
// // var rows = $('.facilityID');
// // $('#search-text').keyup(function() {
// //     var val = $.trim($(this).val()).replace(/ +/g, ' ').toLowerCase();
// //
// //     rows.show().filter(function() {
// //         var text = $(this).text().replace(/\s+/g, ' ').toLowerCase();
// //         return !~text.indexOf(val);
// //     }).hide();
// // });
//
// const filter = () => {
//     const query = q => document.querySelectorAll(q);
//     const filters = [...query('th input')].map(e => new RegExp(e.value, 'i'));
//
//     query('tbody tr').forEach(row => row.style.display =
//         filters.every((f, i) => f.test(row.cells[i].textContent)) ? '' : 'none');
// }


// function formatMoney(number, decPlaces, decSep, thouSep) {
//     decPlaces = isNaN(decPlaces = Math.abs(decPlaces)) ? 2 : decPlaces,
//         decSep = typeof decSep === "undefined" ? "." : decSep;
//     thouSep = typeof thouSep === "undefined" ? "," : thouSep;
//     var sign = number < 0 ? "-" : "";
//     var i = String(parseInt(number = Math.abs(Number(number) || 0).toFixed(decPlaces)));
//     var j = (j = i.length) > 3 ? j % 3 : 0;
//
//     return sign +
//         (j ? i.substr(0, j) + thouSep : "") +
//         i.substr(j).replace(/(\decSep{3})(?=\decSep)/g, "$1" + thouSep) +
//         (decPlaces ? decSep + Math.abs(number - i).toFixed(decPlaces).slice(2) : "");
// }
//
// document.getElementsByTagNameNS("input").addEventListener("keyup", event => {
//     document.getElementsByTagNameNS("input").innerText = formatMoney(document.getElementsByTagNameNS("input").value);
// });
//
// var addTime = document.getElementById('add');


//var 1
// function euFormat() {
//     var inputs = document.querySelectorAll('.input');
//     inputs.forEach(function (el) {
//         el.addEventListener('keyup', function () {
//             var value = this.value.replace(/[^\d.]/g, '');
//             var matches = /^(\d{1,3})((?:\d{3})*)((?:,\d*)?)$/.exec(value);
//
//             if (!matches) {
//                 return;
//             }
//
//             var spaceified = matches[2].replace(/(\d{3})/g, ',$1');
//
//             this.value = [matches[1], spaceified, matches[3]].join('');
//         });
//     })
// }

//var 2
function format(event) {
    event.value = event.value.replace(/[^0-9]/g,'');

    var value = event.value.replace(/[^\d.]/g, '');
    var matches = /^(\d{1,3})((?:\d{3})*)((?:,\d*)?)$/.exec(value);

    if (!matches) {
        return;
    }
    var spaceified = matches[2].replace(/(\d{3})/g, ',$1');

    event.value = [matches[1], spaceified, matches[3]].join('');



}

function disable(event) {
    event.value = event.value.replace(/[^0-9]/g,'');
    console.log(event)
}

function rotate(item) {
    item.parentElement.classList.add('select-open');
};

function change(item) {
    item.parentElement.classList.remove('select-open');
};

function close(item) {
    item.parentElement.classList.remove('select-open');
};


function hideOpen(event) {
    if ($('#date-1 .input').val().length == 0) {
        $('#date-1 svg').show()
    } else {
        $('#date-1 svg').hide()
    }

    console.log(event)
    if ($('#date-2 .input').val().length == 0) {
        $('#date-2 svg').show()
    } else {
        $('#date-2 svg').hide()
    }
}


// function func (a) {
//     console.log(a)
// }
// var per
// func(per)


//
// function formatAsDollars(el) {
//     el.value = '$' + el.value.replace(/[^\d]/g,'').replace(/(\d\d?)$/,'$1');
// }

// for (const input of inputs) {
//     input.addEventListener('keyup', function () {
//         $(this).val(function(index, value) {
//             return value
//                 .replace(/\D/g, "")
//                 .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
//                 ;
//         });
//     });
// }



