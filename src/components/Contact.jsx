import { useState } from "react"
import { toast } from "react-toastify"

const Contact = () => {
 const [name, setName] = useState("")
 const [email, setEmail] = useState("")
 const [phone, setPhone] = useState("")
 const [message, setMessage] = useState("")

  const handleSubmit = async() =>{
     
     try {
       
         const res = await fetch("http://localhost:3000/api/users/create-user", {
                        method: "POST",
                        body: JSON.stringify({ name,email,phone,message }),
                        headers: {
                          "Content-Type": "application/json",
                        },

  
                    })
          const data = await res.json()

        if(data.status){
           toast.success(data.message)
        } else{
           toast.error(data.message)
        }
        setName("")
        setEmail("")
        setPhone("")
        setMessage("")
     } catch (error) {
      toast.error('errror while submit',error.message)
     }
  }


  return (
    <section id="contact" className="text-gray-600 body-font relative border-b-2 border-gray-300">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-12">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Contact Us</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">If you are intrested Or for any query... Please Contact with me</p>
    </div>
    <div className="lg:w-1/2 md:w-2/3 mx-auto">
      <div className="flex flex-wrap -m-2">
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
            <input type="text" id="name" name="name" value={name} onChange={(e)=>setName(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <p className="text-red-500 text-sm">{name && name.length < 4 && "please enter atleat 4 charactor name" }</p>
        </div>
        <div className="p-2 w-1/2">
          <div className="relative">
            <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <p className="text-red-500 text-sm">{email && !email.includes("@")  && "please enter Correct email" }</p>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="number" className="leading-7 text-sm text-gray-600">Mobile Number</label>
            <input type="text" id="number" name="number" value={phone} onChange={(e)=>setPhone(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <p className="text-red-500 text-sm">{phone && phone.length < 11 && "please enter 10 Char phone number" }</p>
        </div>
        <div className="p-2 w-full">
          <div className="relative">
            <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
            <textarea id="message" name="message" value={message} onChange={(e)=>setMessage(e.target.value)} className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
          </div>
        </div>
        <div className="p-2 w-full">
          <button disabled={name.length < 3 || !email.includes("@") || phone.length < 10} onClick={handleSubmit} className="flex mx-auto text-white bg-pink-500 border-0 py-2 px-8 focus:outline-none hover:bg-pink-600 cursor-pointer rounded-lg text-lg">Submit</button>
        </div>
       
      </div>
    </div>
  </div>
</section>
  )
}

export default Contact
