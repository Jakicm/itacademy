function printTable() {
    var table = document.getElementById("locationsTable");
    var html = table.outerHTML;
    var newWindow = window.open("", "_blank");
    newWindow.document.open();
    newWindow.document.write('<html><head><title>Print Table</title><link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"></head><body><div class="table-responsive">' + html + '</div></body></html>');
    newWindow.document.close();
    newWindow.print();
}
