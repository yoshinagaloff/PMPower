document.getElementById('expandAll').onclick = function(){
  document.querySelectorAll('details').forEach(d=>d.open=true);
}
document.getElementById('collapseAll').onclick = function(){
  document.querySelectorAll('details').forEach(d=>d.open=false);
}