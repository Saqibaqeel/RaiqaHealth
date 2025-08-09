import { useEffect, useState } from "react";
import ListView from "./ListView";
import toast from 'react-hot-toast';


function Counter() {
  const [list, setList] = useState(new Set());
  const [isAscending, setIsAscending] = useState(true);
  const [min, setMin] = useState(Infinity);
  const [max, setMax] = useState(0);
  const [count, setCount] = useState(0);

  const addNumber = (num) => {
    if(list.has(num)){
      toast.error(`${num} alredy present cannot be add`)
    }
    else if (num >= 0) {
      setList((prev) => new Set([...prev, num]));
      toast.success(`${num} is succesfully added`);
    } else {
     toast.error('Count cannot be empty.');
    }
  };

  const incrementCount = () => setCount((prev) => prev + 1);

  const decrementCount = () => {
    if (count > 0) {
       setCount((prev) => prev - 1);

    }else{
         toast.error('Count canoot be empty.');

    }
     
    
  };

  const sortAscending = () => {
    if(list.size==0){
      toast.error("list is empty canoot be sort")
    }
    else{
      setList((prev) => new Set([...prev].sort((a, b) => a - b)));
    setIsAscending(true);
    toast.success('sorted in ascending order');

    }
    
  };

  const sortDescending = () => {
    if(list.size==0){
      toast.error("list is empty canoot be sort")
    }else{
      setList((prev) => new Set([...prev].sort((a, b) => b - a)));
    setIsAscending(false);
    toast.success('sorted in decending order');

    }
    
  };

  const clearList = () => {
    if(list.size==0){
      toast.error("list is already empty")
    }else{
       setList(new Set());
    setMin(Infinity);
    setMax(0);
     toast.success('list is scuccesfully cleared');

    }
   
  };
 

  const deleteNumber = (num) => {
  
    setList((prev) => {
      
      const filtoArray=[...list];
       const filtered = filtoArray.filter((item) => item !== num);
    return new Set(filtered);
    });
    toast.success(`${num} is removed sucees fully`)
  };

  const findMax = (mySet) => {
    let max = 0;
    for (let item of mySet) if (item > max) max = item;
    return max;
  };

  const findMin = (mySet) => {
    let min = Infinity;
    for (let item of mySet) if (item < min) min = item;
    return min;
  };

  useEffect(() => {
    setMin(findMin(list));
    setMax(findMax(list));
    setCount(list.size); 
  }, [list]);

  return (
    <ListView
      count={count}
      listArray={[...list]}
      currentMax={max}
      currentMin={min}
      addNumber={addNumber}
      incrementCount={incrementCount}
      decrementCount={decrementCount}
      sortAscending={sortAscending}
      sortDescending={sortDescending}
      clearList={clearList}
      deleteNumber={deleteNumber}
      min={min}
      max={max}
    />
  );
}

export default Counter;
