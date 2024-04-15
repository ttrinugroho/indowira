$(document).on("DOMContentLoaded", () => {
    $(".select").niceSelect();
    $(".nice-select.tabs .option").on("click", function () {
        var attr = $(this).attr("data-value");
        var tab = new bootstrap.Tab($("[data-bs-target='" + attr + "']"));
        tab.show();
    });
});