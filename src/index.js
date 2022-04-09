 
 import "./index.css"
 import img from './img1/file.jpg';

 const root =document.getElementById("root");
 const root2 =document.getElementById("root2");
 const note=document.createElement("textarea");
 const imges=document.createElement('img');
 imges.src=img;
 note.classList.add('text')
 note.innerText="write here";
 root.appendChild(note)
 root2.appendChild(imges)
