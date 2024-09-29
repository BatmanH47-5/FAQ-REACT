import { useState } from 'react'
import './App.css'

const FaqItem = ({question,answer}) => {
  const [show,setShow]=useState(false);

  const toggleShow = () =>{
    setShow(!show);
  };

  return( 
  <div className={`faq-item ${show ? "active":""}`}>
    <div className="faq-item-header" onClick={toggleShow}>
      {question}
    </div>
    <div className="faq-item-body">
      <div className="faq-item-body-content">{answer}</div>
    </div>
  </div>
  );
};
const FaqAccordion=({data})=>{
  return(
    <div className="faq-accordion">
      <h2>FAQs</h2>
      {data.map((item)=>(
        <FaqItem key={item.id} question={item.question} answer={item.answer}/>
      ))}
    </div>
  )
};

const data = [
  {id:1,question: "What is Python?",answer: "Python is a high-level, interpreted language known for its readability and concise syntax. It’s widely used in web development, data science, automation, and more."},
  {id:2,question:"Python Compiled or Interpreted?",answer:" Python is an interpreted language, executed line by line."},
  {id:2,question:"What is __init__() in Python?",answer:"The __init__() method is known as a constructor in object-oriented programming (OOP) terminology. It is used to initialize an object's state when it is created. This method is automatically called when a new instance of a class is instantiated."}
];

function App() {
  return (
    <>
      <div className="App">
        <FaqAccordion data={data}/>
      </div>
    </>
  );
};

export default App
