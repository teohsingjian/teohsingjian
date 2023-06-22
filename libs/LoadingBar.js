class LoadingBar {
	constructor(options) {
	  this.domElement = document.createElement("div");
	  this.domElement.style.position = "fixed";
	  this.domElement.style.top = "0";
	  this.domElement.style.left = "0";
	  this.domElement.style.width = "100%";
	  this.domElement.style.height = "100%";
	  this.domElement.style.background = "#8800c7";
	  this.domElement.style.opacity = "0.7";
	  this.domElement.style.display = "flex";
	  this.domElement.style.alignItems = "center";
	  this.domElement.style.justifyContent = "center";
	  this.domElement.style.zIndex = "1111";
  
	  const title = document.createElement("h1");
	  title.textContent = "VR Architectural Walkthrough with WebXR";
	  title.style.color = "#FFF";
	  title.style.textAlign = "center";
	  this.domElement.appendChild(title);
  
	  const barBase = document.createElement("div");
	  barBase.style.background = "#00FF00";
	  barBase.style.width = "50%";
	  barBase.style.minWidth = "200px";
	  barBase.style.borderRadius = "20px";
	  barBase.style.height = "800px";
	  this.domElement.appendChild(barBase);
  
	  const bar = document.createElement("div");
	  bar.style.background = "#22a";
	  bar.style.width = "0";
	  bar.style.borderRadius = "10px";
	  bar.style.height = "100%";
	  barBase.appendChild(bar);
	  this.progressBar = bar;
  
	  document.body.appendChild(this.domElement);
  
	  function onprogress(delta) {
		const progress = delta * 100;
		loader.progressBar.style.width = `${progress}%`;
	  }
	}
  }