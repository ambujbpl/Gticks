function create_DatatableAboutMe(name) {
  return $(name).DataTable({
    "paging": false,
    "lengthChange": true,
    "searching": false,
    "ordering": false,
    "info": false,
    "scrollX": true,
    scrollCollapse: true,
    "autoWidth": true
  });
}

function create_DatatableTOtalCompany(name) {
  return $(name).DataTable({
    "paging": true,
    "lengthChange": true,
    "searching": true,
    "ordering": true,
    "info": false,
    "scrollX": true,
    scrollCollapse: true,
    "autoWidth": true
  });
}

function create_DatatableTOtalCollege(name) {
  return $(name).DataTable({
    "paging": true,
    "lengthChange": true,
    "searching": true,
    "ordering": true,
    "info": true,
    "scrollX": true,
    scrollCollapse: true,
    "autoWidth": true
  });
}

function create_DatatableInvigilator(name) {
  return $(name).DataTable({
    "paging": true,
    "lengthChange": true,
    "searching": true,
    "ordering": true,
    "info": true,
    "scrollX": true,
    scrollCollapse: true,
    "autoWidth": true
  });
}

function create_Datatable(name) {
  return $(name).DataTable({
    "paging": true,
    "lengthChange": true,
    "searching": true,
    "ordering": true,
    "info": true,
    "scrollX": true,
    scrollCollapse: true,
    "autoWidth": true
  });
}

function create_DatatableAttandence(name) {
  return $(name).DataTable({
    "paging": false,
    "lengthChange": true,
    "searching": false,
    "ordering": false,
    "info": false,
    "scrollX": true,
    scrollCollapse: true,
    "autoWidth": true
  });
}
