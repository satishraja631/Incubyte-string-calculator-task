export default function add(numbers:string):number{
    if(numbers==="") return 0;

     return numbers
           .split(/[\n,]/)
           .map(Number)
           .reduce((sum,num)=>sum+num,0);

}