function openNav() {
    document.getElementById("sidebar").style.width = "250px";
    document.getElementById("content").style.marginLeft = "250px";
  }

  function closeNav() {
    document.getElementById("sidebar").style.width = "0";
    document.getElementById("content").style.marginLeft = "0";
  }

  document.getElementById("sidebarCollapse").addEventListener("click", function() {
    if (document.getElementById("sidebar").style.width == "250px") {
      closeNav();
    } else {
      openNav();
    }
  });
