import React from 'react'
import { Link } from 'react-router-dom'

function Sport() {
  return (
    <div className='container'>
        <h5 className='text-center mt-3'>
            Spot
        </h5>

        <div className='spot-container px-3 py-4 mt-5 shadow-md rounded-4' style={{backgroundColor:"rgb(214, 214, 214)"}}>
            <h4>lorem alfla asld asdlf as;ldf asdk asdk asdkf aksdsadk</h4>
        </div>


        <Link className='text-decoration-none mt-5' to="https://myvipmm.com" target='_blank'>

        <div className='p-3 text-center text-black mt-5 rounded-3' style={{background: "rgb(63,94,251)",
background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"}}>
            Vider သိုဆက် သွယ် ရန် နှိပ် ပါ
        </div>
        </Link>



        <Link className='text-decoration-none mt-5' to="https://myvipmm.com" target='_blank'>

        <div className='p-3 text-center text-black mt-5 rounded-3' style={{background: "rgb(63,94,251)",
background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"}}>
            Telegram သိုဆက် သွယ်ရန် နှိပ်ပါ
        </div>
        </Link>



        <Link className='text-decoration-none mt-5' to="https://myvipmm.com" target='_blank'>

        <div className='p-3 text-center text-black mt-5 rounded-3' style={{background: "rgb(63,94,251)",
background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"}}>
           Facebook သို ဆက် သွယ် ရန် နှိပ်ပါ
        </div>
        </Link>


        <Link className='text-decoration-none mt-5' to="https://myvipmm.com" target='_blank'>

        <div className='p-3 text-center text-black mt-5 rounded-3' style={{background: "rgb(63,94,251)",
background: "radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"}}>
            အပ်ပလီကေးရှင်း ဒေါင်းရန် နှိပ်ပါ
        </div>
        </Link>
    </div>
  )
}

export default Sport