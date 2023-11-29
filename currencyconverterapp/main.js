const tableBody = document.querySelector("tbody");

const populate = async (value, currency) => {
  let outputcontent = "";
  document.querySelector(".output").style.display = "block";
  const url =
    "https://api.currencyapi.com/v3/latest?apikey=cur_live_xXpRey5ARqz01IECjrAhfuBLiCsmBzxUXULVs5st";
  let rawresponse = await fetch(url);
  let response = await rawresponse.json();
  for (let key of Object.keys(response["data"])) {
    outputcontent += `
        <tr>
            <td>${key}</td>
            <td>${response["data"][key]["code"]}</td>
            <td>${(response["data"][key]["value"] * value).toFixed(3)}</td>
        </tr>`;
  }
  tableBody.innerHTML = outputcontent;
};

const btn = document.querySelector(".btn");
btn.addEventListener("click", (event) => {
  event.preventDefault();
  const value = parseInt(
    document.querySelector("input[name='quantity']").value
  );
  const base = document.querySelector("select[name='currency']").value;
  populate(value, base);
});
