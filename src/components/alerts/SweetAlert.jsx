
import React, { useEffect } from 'react'
import Swal from 'sweetalert2'
import { useState } from 'react'

export default function SweetAlert() {

let [isClick,setClick] = useState(false);

    

    const fireAlert = () => {
        setClick(true); 
        Swal.fire({
            title: 'Welcome to our HomelyStay website. Are you searching for good location',
            showConfirmButton: true,
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No",
            icon: 'success'
        }
        ).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
 
                Swal.fire('here you can get it', '', 'success');
 
            } else
                Swal.fire(' Cancelled', '', 'error')
 
        })
    }

   

  return (
    <div>
        <div >
            <center>
                <button className={`btn btn-primary  ${isClick?"hidden":""}`}
                    onClick={fireAlert}>
                    StayHomely
                </button>
            </center>
        </div>
    </div>
  )
}
