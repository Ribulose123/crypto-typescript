import React, { useState } from 'react'
import { faqs } from '../constant/Index'
import { FaPlus, FaMinus } from 'react-icons/fa'

const FAQ = () => {
    const [accordions, setAccordions] = useState<boolean[]>([false, false, false])

    const handleToggle =(index:number)=>{
        setAccordions((prev)=>(
            prev.map((item, idx)=>(idx === index ? !item : item))
        ))
    }
  return (
    <div>
      <div className="bg-black text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
        <div className="mt-8 space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-700 pb-4">
             <div className='flex justify-between'>
             <h3 className="text-xl font-semibold text-purple-400">{faq.question}</h3>
             <button onClick={()=>handleToggle(index)}>
                {accordions[index] ? <FaMinus/> : <FaPlus/>}
             </button>
             </div>
              <p className={`mt-2 text-gray-400 overflow-hidden transition-all ease-out duration-300 ${accordions[index] ?'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  )
}

export default FAQ
