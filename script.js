// your code here
document.getElementById("button").addEventListener("click", function (event) {
  event.preventDefault(); // Prevents form from reloading the page

  const baseUrl = "https://localhost:8080/";
  const nameValue = document.getElementById("name").value.trim();
  const yearValue = document.getElementById("year").value.trim();

  const params = new URLSearchParams();

  if (nameValue) {
    params.append("name", nameValue);
  }
  if (yearValue) {
    params.append("year", yearValue);
  }

  const queryString = params.toString();
  const updatedUrl = queryString ? `${baseUrl}?${queryString}` : baseUrl;

  document.getElementById("url").textContent = updatedUrl;
});