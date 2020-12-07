function renderData(itemInput, idParse = "demo", titleDefault = "") {
  var outputs = "";

  if (itemInput.title !== undefined) {
    outputs += "<div class=" + "title-result" + ">" + itemInput.title.vi + "</div>";
  } else if (titleDefault !== "") {
    outputs += "<div>" + titleDefault + "</div>";
    outputs += "<div>" + "\n" + "</div>";
  }

  for (var i = 0; i < itemInput.data.length; i++) {
    let itemData = itemInput.data[i];
    if (itemData !== null) {
      let itemOutput = "";
      if (itemData.title !== undefined) {
        itemOutput += "<div>" + itemData.title.vi + "</div>";
      }
      {
        itemData.data !== undefined
          ? itemData.data.forEach((item, i) => {
              itemOutput += "<div>" + item.valueVI + "</div>";
            })
          : null;
      }
      {
        itemData.valueEN !== undefined && itemData.valueVI !== undefined
          ? (itemOutput += "<div>" + itemData.valueVI + "</div>")
          : null;
      }

      outputs += "<div>" + itemOutput + "</div>";
      outputs +=
        "<div>" +
        "------------------------------------------------------------------" +
        "</div>";
    }
  }
  document.getElementById(idParse).innerHTML = outputs;
}

function renderSpecialData(itemInput, idParse = "demo") {
  var outputs = "";
  if (itemInput.title !== undefined) {
    outputs += "<div class=" + "title-result" + ">" + itemInput.title.vi + "</div>";
  }

  for (let j = 0; j < itemInput.data.length; j++) {
    let tempData = itemInput.data[j];
    for (let k = 0; k < tempData.length; k++) {
      let itemData = tempData[k];
      if (itemData.data !== undefined) {
        if (itemData !== null) {
          outputs += "<div>" + "-------------" + "</div>";
          let itemOutput = "";
          if (itemData.title !== undefined) {
            itemOutput += "<div>" + itemData.title.vi + "</div>";
          }
          {
            itemData.data !== undefined
              ? itemData.data.vi.forEach((item, i) => {
                  itemOutput += "<div>" + item + "</div>";
                })
              : null;
          }
          {
            itemData.valueEN !== undefined && itemData.valueVI !== undefined
              ? (itemOutput += "<div>" + itemData.valueVI + "</div>")
              : null;
          }
          outputs += "<div>" + itemOutput + "</div>";
        }
      }
    }
  }

  document.getElementById(idParse).innerHTML = outputs;
}

function renderImg(url) {
  var img = document.getElementById("myimgresult");
  img.src = url;
}

function closeFunction() {
  document.getElementById("myForm").style.display = "none";
  document.getElementById("subform").style.display = "flex";
  document.getElementById("pictuer-id").style.display = "flex";
  document.getElementById("c-placeholder").style.display = "none";
  document.getElementById("imageShow").src =
    "https://i.ibb.co/P4pwftk/skin.png";
  document.getElementById("output").src = "";
  document.getElementById("inputImage").value = "";
  disableBtn()
}


function processGeneralConclusion(dataTransfer) {
  let drawMoleArrDataInput = [];
  for (let i = 0; i < dataTransfer.generalResult.data.length; i++) {
    let itemData = dataTransfer.generalResult.data[i];
    for (let j = 0; j < itemData.data.length; j++) {
      let eachData = itemData.data[j];
      if (eachData.key === "SkinMole") {
        drawMoleArrDataInput = eachData.drawArr;
      } 
    }
  }
  drawData(drawMoleArrDataInput, "moleContainer", "red");
}

function processSpecialResult(dataTransfer) {
  let drawSpotArrDataInput = [];
  let drawBlackHeadArrDataInput = [];
  let drawAcneArrDataInput = [];
  let drawPimpleArrDataInput = [];
  // console.log('dataTransfer', dataTransfer)
  for (let i = 0; i < dataTransfer.specialResult.data.length; i++) {
    let itemData = dataTransfer.specialResult.data[i];
    for (let j = 0; j < itemData.data.length; j++) {
      let eachData = itemData.data[j];
      if (eachData.key === "SkinBlackHeads") {
        drawBlackHeadArrDataInput = eachData.drawArr;
      } else if (eachData.key === "SkinSpot") {
        drawSpotArrDataInput = eachData.drawArr;
      } else if (eachData.key === "SkinPimple") {
        drawPimpleArrDataInput = eachData.drawArr;
      } else if (eachData.key === "SkinAcne") {
        drawAcneArrDataInput = eachData.drawArr;
      }
    }
  }
  let screenWidth = screen.width 
  let taux = screenWidth > 767 ? 1 : (screenWidth-26)/dataTransfer.image_info.width
  drawData(drawBlackHeadArrDataInput, "blackHeadContainer", "pink", taux);
  drawData(drawSpotArrDataInput, "spotContainer", "orange", taux);
  drawData(drawPimpleArrDataInput, "pimpleContainer", "green", taux);
  drawData(drawAcneArrDataInput, "acneContainer", "yellow", taux);
}

function drawData(arr, itemId, color = "red", taux = 1) {
  if (arr.length > 0) {
    for (var i = 0; i < arr.length; i++) {
      renderDivItem(itemId, arr[i], taux, color);
    }
  }
}

function renderDivItem(itemId, data, taux = 1, color = "red") {
  var div = document.createElement("div");
  // let screenWidth = screen.width 
  // let taux = screenWidth > 767 ? 1 : (screenWidth-26)/640
  div.style.width = data.width * taux + "px";
  div.style.height = data.height * taux + "px";
  div.style.top = data.top * taux + "px";
  div.style.left = data.left * taux + "px";
  div.style.color = color;
  div.style.borderColor = color;
  div.className = "box";
  let el = document.getElementById(itemId);
  el.appendChild(div);
}

function myFunction(toogleId, containerId) {
  var checkBox = document.getElementById(toogleId);
  var text = document.getElementById(containerId);
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function myFunction1(toogleId= "myCheckSpot", containerId="spotContainer") {
  var checkBox = document.getElementById(toogleId);
  var text = document.getElementById(containerId);
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function myFunction2(toogleId = "myCheckAcne", containerId = "acneContainer") {
  var checkBox = document.getElementById(toogleId);
  var text = document.getElementById(containerId);
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function myFunction3(toogleId= "myCheckPimple", containerId = "pimpleContainer") {
  var checkBox = document.getElementById(toogleId);
  var text = document.getElementById(containerId);
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function myFunction4(toogleId= "myCheckBlackhead", containerId="blackHeadContainer") {
  var checkBox = document.getElementById(toogleId);
  var text = document.getElementById(containerId);
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function myFunction5(toogleId= "myCheckMole", containerId = "moleContainer") {
  var checkBox = document.getElementById(toogleId);
  var text = document.getElementById(containerId);
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

function uploadImage() {
  getConfigSkinAI(processImage);
}

function processImage(inputData) {
  // var img = document.getElementById("output");
  var img = document.getElementById("imageShow");
  // console.log("inputData", inputData.configSkin.email)
  try {
    if (img.src !== null) {
      let dataInput = img.src
      let jdata = {
        email: inputData.configSkin.email,
        image_base64: dataInput.substr(dataInput.indexOf("base64,")+7) + "",
      };
      // alert(jdata.image_base64)
      var xhttp = new XMLHttpRequest();
      xhttp.open(
        "POST",
        inputData.configSkin.link,
        true
      );
      xhttp.setRequestHeader("Content-Type", "application/json");
      xhttp.setRequestHeader(
        "apikey",
        inputData.configSkin.key
      );
      xhttp.send(JSON.stringify(jdata));

      xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
          if (this.status === 200) {
            console.log(this.responseText);
            let dataJSON = JSON.parse(this.responseText);
            renderSkinData(dataJSON);
            openRenderPage();
          } else {
            // alert('1')
            // errorShow();
            resetFistPageData();
          }
        } else if (this.status == 400) {
          // alert('2')
          // alert(this.responseText)
          // errorShow();
          resetFistPageData();
        }
      };
    }
  } catch (e) {
    // errorShow();
    // alert(3);
    resetFistPageData();
  }
}

function renderSkinData(dataJSON) {
  renderData(dataJSON.data.facedata.generalResult, "generalResult");
  renderData(
    dataJSON.data.facedata.specialResult,
    "specialResult",
    "Kết quả từng phần"
  );
  renderData(dataJSON.data.facedata.generalConclusion, "generalConclusion");
  renderSpecialData(
    dataJSON.data.facedata.specialConclusion,
    "specialConclusion"
  );
  renderImg(dataJSON.data.facedata.image_info.url);
  processSpecialResult(dataJSON.data.facedata);
  processGeneralConclusion(dataJSON.data.facedata);
}

function openRenderPage() {
  document.getElementById("subform").style.display = "none";
  document.getElementById("pictuer-id").style.display = "none";
  document.getElementById("c-placeholder").style.display = "block";
  document.getElementById("uploadbtn").innerHTML = "Tải lên";
}

function resetFistPageData(show= true) {
  document.getElementById("myForm").style.display = show ?  "block" : "none";
  document.getElementById("subform").style.display = "flex";
  document.getElementById("pictuer-id").style.display = "flex";
  document.getElementById("c-placeholder").style.display = "none";
  document.getElementById("uploadbtn").innerHTML = "Tải lên";
  document.getElementById("imageShow").src =
    "https://i.ibb.co/P4pwftk/skin.png";
  document.getElementById("output").src = "";
  document.getElementById("inputImage").value = "";
  disableBtn()
}


function disableBtn() {
  document.getElementById("uploadbtn").disabled = true;
  document.getElementById("uploadbtn").style.opacity = 0.5;
}

function enableBtn() {
  document.getElementById("uploadbtn").disabled = false;
  document.getElementById("uploadbtn").style.opacity = 1;
}
