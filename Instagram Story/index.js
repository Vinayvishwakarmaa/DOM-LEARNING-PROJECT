
var arr = [
       {
            db: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            story: "https://images.unsplash.com/photo-1512316609839-ce289d3eba0a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",              
      },
      {
            db: "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            story: "https://images.unsplash.com/photo-1614786269829-d24616faf56d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",              
      },
      {
            db: "https://images.unsplash.com/photo-1533973860717-d49dfd14cf64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            story: "https://images.unsplash.com/photo-1524638431109-93d95c968f03?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDN8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",              
      },
      {
            db: "https://images.unsplash.com/photo-1581338834647-b0fb40704e21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDl8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            story: "https://images.unsplash.com/photo-1525299374597-911581e1bdef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTR8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",              
      },
      {
            db: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTh8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
            story: "https://images.unsplash.com/photo-1604904612715-47bf9d9bc670?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fG1vZGVsfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",              
      },
];

var storiyan = document.querySelector("#storiyan")
var clutter = ""
arr.forEach(function (elem,idx) {
      clutter += `<div class="story">
      <img id=${idx} src=${elem.db} alt="">
</div> `
});

storiyan.innerHTML = clutter;

storiyan.addEventListener("click", function (dets) {
      document.querySelector("#full-screen").style.display = "block";
      document.querySelector("#full-screen").style.backgroundImage = `url(${arr[dets.target.id].story})`;
    
      setTimeout(function () {
        document.querySelector("#full-screen").style.display = "none"; 
      },3000)
});
 