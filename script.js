const text=document.querySelector("h1");

text.animate(

[
{opacity:0,transform:"translateY(40px)"},
{opacity:1,transform:"translateY(0)"}
],

{
duration:1500
}

);
