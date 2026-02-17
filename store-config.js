function createStore() {

const file = document.getElementById("store-logo").files[0];

if(file){
const reader = new FileReader();
reader.onload = function(e){

saveStore(e.target.result);
};
reader.readAsDataURL(file);
}else{
saveStore(null);
}
}

function saveStore(logoBase64){

const id = "store" + Date.now();

stores.push({
id,
name: document.getElementById("store-name").value,
email: document.getElementById("store-email").value,
password: document.getElementById("store-password").value,
primaryColor: document.getElementById("store-color").value,
description: "New Store",
logo: logoBase64
});

save();
}
