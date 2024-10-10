import { Type } from 'typescript';
import './App.css';
import { useEffect, useState } from 'react';

interface Todo{
  title?:string,
  description?:string
}

const nomalObjec:Todo={
  title:"ngoan"
}

const requiredObject:Required<Todo>={
  title:"Ngoan",
  description:"Hello"
}
type CatName = "miffy" | "boris" | "mordred";
 
interface CatInfo {
  age: number;
  breed: string;
}
 
const cats: Record<CatName, CatInfo> = {
  miffy: { age: 10, breed: "Persian" },
  boris: { age: 5, breed: "Maine Coon" },
  mordred: { age: 16, breed: "British Shorthair" },
};
 
interface TodoList {
  title: string;
  description: string;
  completed: boolean;
}
 
type TodoPreview = Pick<TodoList, "title" | "completed">;
 
const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};

interface Pingable {
  ping():void
}

class Sonar implements Pingable{
  ping(){
    console.log("hello Sonar");
    
  }
}

function App() {
  const sonar=new Sonar()

  let ourTuple:[number, boolean,string]
  ourTuple=[10,false,"hello"]
  function AddTwoNumber(){
    const x:number=1
   if(x>=1||x<=3)
      console.log("nomalObjec.title:",nomalObjec.title);
      console.log("requiredObject.title:",requiredObject.title);
      console.log(cats.boris);
      console.log("todo", todo.title);
      sonar.ping()
  }
  function identity<Type>(arf:Type):Type{
    return arf;
  }
  function getPrice(price:number, discount:number, format:boolean):number|string{
    let netPrice=price*(1-discount)
    return format?`${netPrice}`:price
  }

  useEffect(()=>{
    AddTwoNumber()
    console.log(identity("hello"));
    console.log(ourTuple[0]);
    let netPrice=getPrice(100,0.05,true) as string
    console.log("netPrice as string",netPrice);
    let netPriceNumber=getPrice(100,0.05,true) as number
    console.log("netPrice as number",netPriceNumber);
    
  },[])
  
  return (
    <div className="text-3xl font-bold underline text-red-900">
        <p>have you ever thought of me</p>
    </div>
  );
}

export default App;
