// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

debugger;
$(document).ready(function () {
    $("#tabs").tabs();

    $('[data-show-tab]').click(function (ev) {
        debugger;
        ev.preventDefault();
        var url = $(this).data('show-tab');
        var id = $(this).data('container-id');
        $('#' + id).load(url);
    });
})