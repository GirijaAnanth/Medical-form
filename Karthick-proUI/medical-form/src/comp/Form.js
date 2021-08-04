import React from 'react'

export default function Form() {
    return (
        <body>
            <div className='container'>
                <div className='title'>Registration</div>
                <form action='#'>
                    <div className='user-details'>
                        <div className='input-box'>
                            <span className='details'>Full Name</span>
                            <input type='text' placeholder="Enter your name" required></input>
                        </div>
                        <div className='input-box'>
                            <span className='details'>Blood Group</span>
                            <select id="Blood-group" name="Blood-group">
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                           </select>
                        </div>
                        <div className='input-box'>
                            <span className='details'>Enter your Parent/Guardian Name</span>
                            <input type='text' placeholder="Enter here" required></input>
                        </div>
                        <div className='input-box'>
                            <span className='details'>Do you any metabolic syndromes</span>
                            <select className="Metabolic-syndrome" name="Metabolic-syndrome">
                                <option value="None">None</option>
                                <option value="Blood pressure">Blood pressure</option>
                                <option value="Diabetes">Diabetes</option>
                                <option value="Others">Others</option>
                           </select>
                        </div>
                        <div className='input-box'>
                            <span className='details'>Age</span>
                            <input type='number' placeholder="Enter your age" required></input>
                        </div>
                        <div className='input-box'>
                            <span className='details'>Allergic to(If no enter nill)</span>
                            <input type='text' placeholder="Enter here" required></input>
                        </div>
                        <div className='input-box'>
                            <span className='details'>Gender</span>
                            <select id="Gender" name="Gender">
                                <option value="Male">Male</option>
                                <option value="Female">Female</option>
                                <option value="Prefer not to say">Prefer not to say</option>
                           </select>
                        </div>
                        <div className='input-box'>
                            <span className='details'>Enter your insurance scheme(if no enter nill)</span>
                            <input type='text' placeholder="Enter your scheme" required></input>
                        </div>  
                        <div className='input-box'>
                            <span className='details'>Contact Number</span>
                            <input type='tel' placeholder="Enter your Contact Number" required></input>
                        </div>
                        <div className='input-box'>
                            <span className='details'>Submit your medical files here</span>
                            <input className='input-file'type='file' required multiple></input>
                        </div> 
                    </div> 
                    <div className='button'>
                     <input type='submit' value="Submit"></input>
                    </div>
                </form>
            </div>
        </body>
    )
}
