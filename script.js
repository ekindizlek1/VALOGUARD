document.getElementById("reportForm").addEventListener("submit", function (e) {
  e.preventDefault();

  alert("Rapor hazırlanıyor...");

  // Kullanıcıyı resmi destek sayfasına yönlendir
  window.location.href = "https://support-valorant.riotgames.com/hc/tr";
});
