import { makeContacts } from "./contact";
import { footMaker } from "./footer";
import { makeHome } from "./home";
import { makeMenu } from "./menu";
let selected='home';
const initialize=()=>{
    const content=document.getElementById("content");
    content.style.backgroundColor="rgba(0,0,0,0.5)";
    content.style.textAlign="center";
    content.style.color="white";
    document.getElementById('body').style.backgroundImage="url('https://airwallpaper.com/wp-content/uploads/wall003/Pokemon-Sword-And-Shield-Wallpaper-1-620x398.png')";
    document.getElementById('body').style.backgroundRepeat="no-repeat";
    document.getElementById('body').style.backgroundPosition="center";
    document.getElementById('body').style.backgroundSize="cover";
    let tit=document.createElement('h1');
    tit.innerText="Nom-Nom-Noes";
    let nabar=document.createElement('nav');
    let n1=document.createElement('p');
    n1.innerText="Home";
    n1.style.padding="1em";

    n1.style.display="inline";
    n1.style.color="white";

    n1.addEventListener('click',()=>{
        selected='home';
    });

    let n2=document.createElement('p');
    n2.innerText="Menu";
    n2.style.padding="1em";
    n2.style.color="white";
    n2.style.display="inline";
    n2.addEventListener('click',()=>{
        selected='menu';
    });
    let n3=document.createElement('p');
    n3.innerText="Contact";
    n3.style.display="inline";
    n3.style.padding="1em";
    n3.style.color="white";
    n3.addEventListener('click',()=>{
        selected='contact';
    });
    nabar.appendChild(n1);
    nabar.appendChild(n2);
    nabar.appendChild(n3);
    content.appendChild(tit);
    content.appendChild(nabar);
    switch(selected)
    {
        case "home":
            changePage('home',n1,n2,n3)
            break;
        case "contact":
            changePage('contact',n1,n2,n3)
            break;
        case "menu":
            changePage('menu',n1,n2,n3)
            break;
    }
    document.getElementById('body').style.position="relative";
    document.getElementById('body').style.minHeight="100vh";
    footMaker();
}

const changePage=(str,n1,n2,n3)=>{
    switch(str)
    {
        case 'home':
            n1.style.color="red";
            makeHome();
            break;
        case 'menu':
            n2.style.color="red";
            makeMenu();
            break;
        case 'contact':
            n3.style.color="red";
            makeContacts();
            break;
    }

}
export {initialize};