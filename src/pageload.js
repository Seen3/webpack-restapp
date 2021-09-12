import { footMaker } from "./footer";
import { makeHome } from "./home";

const initialize=()=>{
    const content=document.getElementById("content");
    content.style.backgroundColor="rgba(0,0,0,0.5)";
    content.style.textAlign="center";
    content.style.color="white";
    document.getElementById('body').style.backgroundImage="url('https://i.imgur.com/Qbjvh1L.jpeg')";
    document.getElementById('body').style.backgroundRepeat="no-repeat";
    document.getElementById('body').style.backgroundPosition="center";
    document.getElementById('body').style.backgroundSize="cover";
    let tit=document.createElement('h1');
    tit.innerText="Nom-Nom-Noes";
    let nabar=document.createElement('nav');
    let n1=document.createElement('p');
    n1.innerText="Home";
    n1.style.display="inline";
    let n2=document.createElement('p');
    n2.innerText="About";
    n2.style.display="inline";
    let n3=document.createElement('p');
    n3.innerText="Contact";
    n3.style.display="inline";
    nabar.appendChild(n1);
    nabar.appendChild(n2);
    nabar.appendChild(n3);
    content.appendChild(tit);
    content.appendChild(nabar);
    document.getElementById('body').style.position="relative";
    document.getElementById('body').style.minHeight="100vh";
    makeHome();
    footMaker();
}
export {initialize};