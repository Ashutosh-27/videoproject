import React from 'react'
import '../css/Form.css'
function FormUI() {
    return (
        <div className='form_body'>
            <div className='form_container'>
                <div className='form_sec1'>
                    <div className='content'>
                    <div className='content_logo'>logo</div>
                        <div className='content_title'>WE RISE BY LIFTING OTHERS</div>
                    </div>
                </div>
                <div className='form_sec2'>
                    <section>
                        Basic Course Application Form
                    </section>
                    <form action="" method="get">
                        <span>
                            <input type="text" id="Username" name="Username" placeholder='Enter your name' /><br /><br />
                        </span>

                        <span>
                            <input type="text" id="Phone" name="Phone" placeholder='Phone Number' /><br /><br />
                        </span>
                        <span>
                            <input type="text" id="City" name="City" placeholder='City Name' /><br /><br />
                        </span>

                        <div className='select_container'>
                            <label for="stckMarket">Do you have any prior knowledge<br/> of stock market ?</label>
                            <select name="stckMarket" id="stckMarket">
                                <option value="">--select--</option>
                                <option value="basic">Basic</option>
                                <option value="intermediate">Intermediate</option>
                                <option value="professional">Professional</option>
                            </select>
                        </div>

                        <div className='select_container'>
                            <label for="tradinglang">Which Language do you prefer for <br/> Attending trading sessions</label>
                            <select name="tradinglang" id="tradinglang">
                                <option value="">--select--</option>
                                <option value="language1">Language 1</option>
                                <option value="language2">Language 3</option>
                                <option value="language3">Language 3</option>
                            </select>
                        </div>

                        <input type="submit" value="Submit" className='submit_btn' />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default FormUI
