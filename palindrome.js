var a=parseInt(prompt("enter number"));
document.write("Number="+a);
document.write("<br>");
var sum=0,r,z=a;
while(a>0)
{
  r=a%10;
  sum=sum*10+r;
  a=parseInt(a/10);
  document.write("r=/n",r);
  document.write("<br>");
  document.write("sum");
  document.write("<br>");
  document.write("a");
  document.write("<a>");
}
document.write("reverse="+sum);
document.write("<br>");
if(z==sum){
  document.write("palindrome number");
}
else{
  document.write("not a palindrome number");
}