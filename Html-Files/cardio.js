
function showSchedule2(date2) {
    const scheduleDiv2 = document.getElementById('schedule2');
    let scheduleHtml2 = '';
    
    switch(date2) {
        case '1':
            scheduleHtml2 = `
                <div class="consultation">
                    <h3>Max Smart Hospital, Saket</h3>
                    <p>Consultation Fee: ₹ 2500</p>
                    <p>Doctor is available on <strong>1-May-2024 11:40AM</strong></p>
                    <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                </div>
                <div class="consultation">
                    <h3>Max Hospital, Lajpat Nagar</h3>
                    <p>Consultation Fee: ₹ 2500</p>
                    <p>Doctor is available on <strong>1-May-2024 2:40PM</strong></p>
                    <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                </div>
            `;
            break;
        case '2':
            scheduleHtml2 = `
                <div class="consultation">
                    <h3>Max Hospital, Lajpat Nagar</h3>
                    <p>Consultation Fee: ₹ 2500</p>
                    <p>Doctor is available on <strong>2-May-2024 12:40PM</strong></p>
                    <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                </div>
                <div class="consultation">
                    <h3>Max Hospital, Lajpat Nagar</h3>
                    <p>Consultation Fee: ₹ 2500</p>
                    <p>Doctor is available on <strong>2-May-2024 2:00PM</strong></p>
                    <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                </div>
                <div class="consultation">
                    <p>Consultation Fee: ₹ 3500</p>
                    <p>Doctor is available on <strong>2-May-2024 11:40PM</strong></p>
                    <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                </div>
            `;
            break;
        // Add more cases for other dates
        default:
            scheduleHtml2 = '<p>No schedule available for this date.</p>';
    }
    
    scheduleDiv2.innerHTML = scheduleHtml2;
    }











    function showSchedule3(date3) {
        const scheduleDiv3 = document.getElementById('schedule3');
        let scheduleHtml3 = '';
        
        switch(date3) {
            case '11':
                scheduleHtml3 = `
                    <div class="consultation">
                        <h3>Max Smart Hospital, Saket</h3>
                        <p>Consultation Fee: ₹ 2000</p>
                        <p>Doctor is available on <strong>11-May-2024 12:50PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                    <div class="consultation">
                        <h3>Max Hospital, Lajpat Nagar</h3>
                        <p>Consultation Fee: ₹ 2000</p>
                        <p>Doctor is available on <strong>11-May-2024 2:45PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                `;
                break;
            case '12':
                scheduleHtml3 = `
                    <div class="consultation">
                        <h3>Max Hospital, Lajpat Nagar</h3>
                        <p>Consultation Fee: ₹ 2000</p>
                        <p>Doctor is available on <strong>12-May-2024 12:50PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                    <div class="consultation">
                        <h3>Max Hospital, Lajpat Nagar</h3>
                        <p>Consultation Fee: ₹ 2000</p>
                        <p>Doctor is available on <strong>12-May-2024 2:45PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                    <div class="consultation">
                        <p>Consultation Fee: ₹ 3000</p>
                        <p>Doctor is available on <strong>12-May-2024 4:40AM</strong></p>
                        <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                    </div>
                `;
                break;
            // Add more cases for other dates
            default:
                scheduleHtml3 = '<p>No schedule available for this date.</p>';
        }
        
        scheduleDiv3.innerHTML = scheduleHtml3;
        }










        function showSchedule4(date4) {
            const scheduleDiv4 = document.getElementById('schedule4');
            let scheduleHtml4 = '';
            
            switch(date4) {
                case '18':
                    scheduleHtml4 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 4000</p>
                            <p>Doctor is available on <strong>18-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 4000</p>
                            <p>Doctor is available on <strong>18-May-2024 3:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '19':
                    scheduleHtml4 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 3500</p>
                            <p>Doctor is available on <strong>19-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 3500</p>
                            <p>Doctor is available on <strong>19-May-2024 3:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 3550</p>
                            <p>Doctor is available on <strong>19-May-2024 5:40AM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml4 = '<p>No schedule available for this date.</p>';
            }
            
            scheduleDiv4.innerHTML = scheduleHtml4;
            }

            /*Date 5*/
            function showSchedule5(date5) {
                const scheduleDiv5 = document.getElementById('schedule5');
                let scheduleHtml3 = '';
                
                switch(date5) {
                    case '1':
                        scheduleHtml5 = `
                            <div class="consultation">
                                <h3>Max Smart Hospital, Saket</h3>
                                <p>Consultation Fee: ₹ 2000</p>
                                <p>Doctor is available on <strong>1-May-2024 12:40PM</strong></p>
                                <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                            </div>
                            <div class="consultation">
                                <h3>Max Hospital, Lajpat Nagar</h3>
                                <p>Consultation Fee: ₹ 2000</p>
                                <p>Doctor is available on <strong>1-May-2024 4:40PM</strong></p>
                                <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                            </div>
                        `;
                        break;
                    case '2':
                        scheduleHtml5 = `
                            <div class="consultation">
                                <h3>Max Hospital, Lajpat Nagar</h3>
                                <p>Consultation Fee: ₹ 2000</p>
                                <p>Doctor is available on <strong>2-May-2024 12:40PM</strong></p>
                                <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                            </div>
                            <div class="consultation">
                                <h3>Max Hospital, Lajpat Nagar</h3>
                                <p>Consultation Fee: ₹ 2000</p>
                                <p>Doctor is available on <strong>2-May-2024 2:15PM</strong></p>
                                <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                            </div>
                            <div class="consultation">
                                <p>Consultation Fee: ₹ 2500</p>
                                <p>Doctor is available on <strong>2-May-2024 8:15PM</strong></p>
                                <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                            </div>
                        `;
                        break;
                    // Add more cases for other dates
                    default:
                        scheduleHtml5 = '<p>No schedule available for this date.</p>';
                }
                
                scheduleDiv5.innerHTML = scheduleHtml5;
                }


 
                function showSchedule5(date5) {
                    const scheduleDiv5 = document.getElementById('schedule5');
                    let scheduleHtml3 = '';
                    
                    switch(date5) {
                        case '1':
                            scheduleHtml5 = `
                                <div class="consultation">
                                    <h3>Max Smart Hospital, Saket</h3>
                                    <p>Consultation Fee: ₹ 2000</p>
                                    <p>Doctor is available on <strong>1-May-2024 12:40PM</strong></p>
                                    <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                                </div>
                                <div class="consultation">
                                    <h3>Max Hospital, Lajpat Nagar</h3>
                                    <p>Consultation Fee: ₹ 2000</p>
                                    <p>Doctor is available on <strong>1-May-2024 4:40PM</strong></p>
                                    <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                                </div>
                            `;
                            break;
                        case '2':
                            scheduleHtml5 = `
                                <div class="consultation">
                                    <h3>Max Hospital, Lajpat Nagar</h3>
                                    <p>Consultation Fee: ₹ 2000</p>
                                    <p>Doctor is available on <strong>2-May-2024 12:40PM</strong></p>
                                    <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                                </div>
                                <div class="consultation">
                                    <h3>Max Hospital, Lajpat Nagar</h3>
                                    <p>Consultation Fee: ₹ 2000</p>
                                    <p>Doctor is available on <strong>2-May-2024 2:15PM</strong></p>
                                    <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                                </div>
                                <div class="consultation">
                                    <p>Consultation Fee: ₹ 2500</p>
                                    <p>Doctor is available on <strong>2-May-2024 8:15PM</strong></p>
                                    <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                                </div>
                            `;
                            break;
                        // Add more cases for other dates
                        default:
                            scheduleHtml5 = '<p>No schedule available for this date.</p>';
                    }
                    
                    scheduleDiv5.innerHTML = scheduleHtml5;
                    }


    
                    function showSchedule6(date6) {
                        const scheduleDiv6 = document.getElementById('schedule6');
                        let scheduleHtml6 = '';
                        
                        switch(date6) {
                            case '26':
                                scheduleHtml6 = `
                                    <div class="consultation">
                                        <h3>Max Smart Hospital, Saket</h3>
                                        <p>Consultation Fee: ₹ 2000</p>
                                        <p>Doctor is available on <strong>26-May-2024 2:00PM</strong></p>
                                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                                    </div>
                                    <div class="consultation">
                                        <h3>Max Hospital, Lajpat Nagar</h3>
                                        <p>Consultation Fee: ₹ 2000</p>
                                        <p>Doctor is available on <strong>26-May-2024 5:00PM</strong></p>
                                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                                    </div>
                                `;
                                break;
                            case '27':
                                scheduleHtml6 = `
                                    <div class="consultation">
                                        <h3>Max Hospital, Lajpat Nagar</h3>
                                        <p>Consultation Fee: ₹ 2000</p>
                                        <p>Doctor is available on <strong>27-May-2024 12:40PM</strong></p>
                                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                                    </div>
                                    <div class="consultation">
                                        <h3>Max Hospital, Lajpat Nagar</h3>
                                        <p>Consultation Fee: ₹ 2000</p>
                                        <p>Doctor is available on <strong>27-May-2024 2:00PM</strong></p>
                                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                                    </div>
                                    <div class="consultation">
                                        <p>Consultation Fee: ₹ 3000</p>
                                        <p>Doctor is available on <strong>27-May-2024 6:00PM</strong></p>
                                        <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                                    </div>
                                `;
                                break;
                            // Add more cases for other dates
                            default:
                                scheduleHtml6 = '<p>No schedule available for this date.</p>';
                        }
                        
                        scheduleDiv6.innerHTML = scheduleHtml6;
                        }





    
                        function showSchedule8(date8) {
                            const scheduleDiv8 = document.getElementById('schedule8');
                            let scheduleHtml8 = '';
                            
                            switch(date8) {
                                case '9':
                                    scheduleHtml8 = `
                                        <div class="consultation">
                                            <h3>Max Smart Hospital, Saket</h3>
                                            <p>Consultation Fee: ₹ 3500</p>
                                            <p>Doctor is available on <strong>9-May-2024 2:40PM</strong></p>
                                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                                        </div>
                                        <div class="consultation">
                                            <h3>Max Hospital, Lajpat Nagar</h3>
                                            <p>Consultation Fee: ₹ 3500</p>
                                            <p>Doctor is available on <strong>9-May-2024 11:40PM</strong></p>
                                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                                        </div>
                                    `;
                                    break;
                                case '10':
                                    scheduleHtml8 = `
                                        <div class="consultation">
                                            <h3>Max Hospital, Lajpat Nagar</h3>
                                            <p>Consultation Fee: ₹ 3500</p>
                                            <p>Doctor is available on <strong>10-May-2024 12:40PM</strong></p>
                                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                                        </div>
                                        <div class="consultation">
                                            <h3>Max Hospital, Lajpat Nagar</h3>
                                            <p>Consultation Fee: ₹ 3500</p>
                                            <p>Doctor is available on <strong>10-May-2024 2:00PM</strong></p>
                                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                                        </div>
                                        <div class="consultation">
                                            <p>Consultation Fee: ₹ 3500</p>
                                            <p>Doctor is available on <strong>10-May-2024 7:00PM</strong></p>
                                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                                        </div>
                                    `;
                                    break;
                                // Add more cases for other dates
                                default:
                                    scheduleHtml8 = '<p>No schedule available for this date.</p>';
                            }
                            
                            scheduleDiv8.innerHTML = scheduleHtml8;
                            }



                            
    
    function showSchedule9(date9) {
        const scheduleDiv9 = document.getElementById('schedule9');
        let scheduleHtml9 = '';
        
        switch(date9) {
            case '10':
                scheduleHtml9 = `
                    <div class="consultation">
                        <h3>Max Smart Hospital, Saket</h3>
                        <p>Consultation Fee: ₹ 2500</p>
                        <p>Doctor is available on <strong>10-May-2024 10:40AM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                    <div class="consultation">
                        <h3>Max Hospital, Lajpat Nagar</h3>
                        <p>Consultation Fee: ₹ 2500</p>
                        <p>Doctor is available on <strong>10-May-2024 12:40PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                `;
                break;
            case '12':
                scheduleHtml9 = `
                    <div class="consultation">
                        <h3>Max Hospital, Lajpat Nagar</h3>
                        <p>Consultation Fee: ₹ 2500</p>
                        <p>Doctor is available on <strong>12-May-2024 12:40PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                    <div class="consultation">
                        <h3>Max Hospital, Lajpat Nagar</h3>
                        <p>Consultation Fee: ₹ 2500</p>
                        <p>Doctor is available on <strong>12-May-2024 2:00PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                    <div class="consultation">
                        <p>Consultation Fee: ₹ 1500</p>
                        <p>Doctor is available on <strong>12-May-2024 3:00PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                    </div>
                `;
                break;
            // Add more cases for other dates
            default:
                scheduleHtml9 = '<p>No schedule available for this date.</p>';
        }
        
        scheduleDiv9.innerHTML = scheduleHtml9;
        }

        
    
    function showSchedule10(date10) {
        const scheduleDiv10 = document.getElementById('schedule10');
        let scheduleHtml10 = '';
        
        switch(date10) {
            case '17':
                scheduleHtml10 = `
                    <div class="consultation">
                        <h3>Max Smart Hospital, Saket</h3>
                        <p>Consultation Fee: ₹ 2500</p>
                        <p>Doctor is available on <strong>17-May-2024 2:00PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                    <div class="consultation">
                        <h3>Max Hospital, Lajpat Nagar</h3>
                        <p>Consultation Fee: ₹ 2500</p>
                        <p>Doctor is available on <strong>17-May-2024 5:00PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                `;
                break;
            case '18':
                scheduleHtml10 = `
                    <div class="consultation">
                        <h3>Max Hospital, Lajpat Nagar</h3>
                        <p>Consultation Fee: ₹ 2500</p>
                        <p>Doctor is available on <strong>18-May-2024 12:40PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                    <div class="consultation">
                        <h3>Max Hospital, Lajpat Nagar</h3>
                        <p>Consultation Fee: ₹ 2500</p>
                        <p>Doctor is available on <strong>18-May-2024 2:00PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                    <div class="consultation">
                        <p>Consultation Fee: ₹ 2500</p>
                        <p>Doctor is available on <strong>18-May-2024 8:00PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                    </div>
                `;
                break;
            // Add more cases for other dates
            default:
                scheduleHtml10 = '<p>No schedule available for this date.</p>';
        }
        
        scheduleDiv10.innerHTML = scheduleHtml10;
        }
        

        
        
        function showSchedule1(date1) {
            const scheduleDiv1 = document.getElementById('schedule1');
            let scheduleHtml1 = '';
        
            switch(date1) {
                case '20':
                    scheduleHtml1 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>20-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>20-May-2024 2:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '21':
                    scheduleHtml1 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>21-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>21-May-2024 2:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 3000</p>
                            <p>Doctor is available on <strong>21-May-2024 4:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml1 = '<p>No schedule available for this date.</p>';
            }
        
            scheduleDiv1.innerHTML = scheduleHtml1;
        }
        
        
        function showSchedule2(date2) {
            const scheduleDiv2 = document.getElementById('schedule2');
            let scheduleHtml2 = '';
        
            switch(date2) {
                case '1':
                    scheduleHtml2 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>1-May-2024 11:40AM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>1-May-2024 2:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '2':
                    scheduleHtml2 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>2-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>2-May-2024 2:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 3500</p>
                            <p>Doctor is available on <strong>2-May-2024 11:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml2 = '<p>No schedule available for this date.</p>';
            }
        
            scheduleDiv2.innerHTML = scheduleHtml2;
        }

        
        
        function showSchedule3(date3) {
            const scheduleDiv3 = document.getElementById('schedule3');
            let scheduleHtml3 = '';
        
            switch(date3) {
                case '11':
                    scheduleHtml3 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>11-May-2024 12:50PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>11-May-2024 2:45PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '12':
                    scheduleHtml3 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>12-May-2024 12:50PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>12-May-2024 2:45PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 3000</p>
                            <p>Doctor is available on <strong>12-May-2024 4:40AM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml3 = '<p>No schedule available for this date.</p>';
            }
        
            scheduleDiv3.innerHTML = scheduleHtml3;
        }
        
        
        function showSchedule4(date4) {
            const scheduleDiv4 = document.getElementById('schedule4');
            let scheduleHtml4 = '';
        
            switch(date4) {
                case '18':
                    scheduleHtml4 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 4000</p>
                            <p>Doctor is available on <strong>18-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 4000</p>
                            <p>Doctor is available on <strong>18-May-2024 3:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '19':
                    scheduleHtml4 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 3500</p>
                            <p>Doctor is available on <strong>19-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 3500</p>
                            <p>Doctor is available on <strong>19-May-2024 3:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 3550</p>
                            <p>Doctor is available on <strong>19-May-2024 5:40AM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml4 = '<p>No schedule available for this date.</p>';
            }
        
            scheduleDiv4.innerHTML = scheduleHtml4;
        }
        
        
        function showSchedule5(date5) {
            const scheduleDiv5 = document.getElementById('schedule5');
            let scheduleHtml3 = '';
        
            switch(date5) {
                case '1':
                    scheduleHtml5 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>1-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>1-May-2024 4:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '2':
                    scheduleHtml5 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>2-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>2-May-2024 2:15PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>2-May-2024 8:15PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml5 = '<p>No schedule available for this date.</p>';
            }
        
            scheduleDiv5.innerHTML = scheduleHtml5;
        }
        
        
        function showSchedule6(date6) {
            const scheduleDiv6 = document.getElementById('schedule6');
            let scheduleHtml6 = '';
        
            switch(date6) {
                case '26':
                    scheduleHtml6 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>26-May-2024 2:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>26-May-2024 5:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '27':
                    scheduleHtml6 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>27-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>27-May-2024 2:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 3000</p>
                            <p>Doctor is available on <strong>27-May-2024 6:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml6 = '<p>No schedule available for this date.</p>';
            }
        
            scheduleDiv6.innerHTML = scheduleHtml6;
        }
        
        
        function showSchedule7(date7) {
            const scheduleDiv7 = document.getElementById('schedule7');
            let scheduleHtml7 = '';
        
            switch(date7) {
                case '4':
                    scheduleHtml7 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>4-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>4-May-2024 2:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '15':
                    scheduleHtml7 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>15-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>15-May-2024 2:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>15-May-2024 2:00AM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml7 = '<p>No schedule available for this date.</p>';
            }
        
            scheduleDiv7.innerHTML = scheduleHtml7;
        }
        
        
        function showSchedule8(date8) {
            const scheduleDiv8 = document.getElementById('schedule8');
            let scheduleHtml8 = '';
        
            switch(date8) {
                case '9':
                    scheduleHtml8 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 3500</p>
                            <p>Doctor is available on <strong>9-May-2024 2:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 3500</p>
                            <p>Doctor is available on <strong>9-May-2024 11:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '10':
                    scheduleHtml8 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 3500</p>
                            <p>Doctor is available on <strong>10-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 3500</p>
                            <p>Doctor is available on <strong>10-May-2024 2:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 3500</p>
                            <p>Doctor is available on <strong>10-May-2024 7:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml8 = '<p>No schedule available for this date.</p>';
            }
        
            scheduleDiv8.innerHTML = scheduleHtml8;
        }
        
        
        function showSchedule9(date9) {
            const scheduleDiv9 = document.getElementById('schedule9');
            let scheduleHtml9 = '';
        
            switch(date9) {
                case '10':
                    scheduleHtml9 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>10-May-2024 10:40AM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>10-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '12':
                    scheduleHtml9 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>12-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>12-May-2024 2:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 1500</p>
                            <p>Doctor is available on <strong>12-May-2024 3:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml9 = '<p>No schedule available for this date.</p>';
            }
        
            scheduleDiv9.innerHTML = scheduleHtml9;
        }
        
        
        function showSchedule10(date10) {
            const scheduleDiv10 = document.getElementById('schedule10');
            let scheduleHtml10 = '';
        
            switch(date10) {
                case '17':
                    scheduleHtml10 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>17-May-2024 2:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>17-May-2024 5:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '18':
                    scheduleHtml10 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>18-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>18-May-2024 2:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 2500</p>
                            <p>Doctor is available on <strong>18-May-2024 8:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml10 = '<p>No schedule available for this date.</p>';
            }
        
            scheduleDiv10.innerHTML = scheduleHtml10;
        }

        
        
        function showSchedule11(date11) {
            const scheduleDiv11 = document.getElementById('schedule11');
            let scheduleHtml11 = '';
        
            switch(date11) {
                case '1':
                    scheduleHtml11 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>1-May-2024 11:40AM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>1-May-2024 1:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '2':
                    scheduleHtml11 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>2-May-2024 11:40AM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>2-May-2024 2:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 3000</p>
                            <p>Doctor is available on <strong>2-May-2024 9:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml11 = '<p>No schedule available for this date.</p>';
            }
        
            scheduleDiv11.innerHTML = scheduleHtml11;
        }     
                function showSchedule12(date12) {
            const scheduleDiv12 = document.getElementById('schedule12');
            let scheduleHtml12 = '';
        
            switch(date12) {
                case '21':
                    scheduleHtml12 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 2400</p>
                            <p>Doctor is available on <strong>21-May-2024 9:00AM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2400</p>
                            <p>Doctor is available on <strong>21-May-2024 9:00AM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '22':
                    scheduleHtml12 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2400</p>
                            <p>Doctor is available on <strong>22-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2400</p>
                            <p>Doctor is available on <strong>22-May-2024 2:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 3400</p>
                            <p>Doctor is available on <strong>22-May-2024 4:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml12 = '<p>No schedule available for this date.</p>';
            }
        
            scheduleDiv12.innerHTML = scheduleHtml12;
        }

        
        
        function showSchedule11(date11) {
            const scheduleDiv11 = document.getElementById('schedule11');
            let scheduleHtml11 = '';
        
            switch(date11) {
                case '1':
                    scheduleHtml11 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>1-May-2024 11:40AM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>1-May-2024 1:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '2':
                    scheduleHtml11 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>2-May-2024 11:40AM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2000</p>
                            <p>Doctor is available on <strong>2-May-2024 2:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 3000</p>
                            <p>Doctor is available on <strong>2-May-2024 9:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml11 = '<p>No schedule available for this date.</p>';
            }
        
            scheduleDiv11.innerHTML = scheduleHtml11;
        }   
                function showSchedule12(date12) {
            const scheduleDiv12 = document.getElementById('schedule12');
            let scheduleHtml12 = '';
        
            switch(date12) {
                case '21':
                    scheduleHtml12 = `
                        <div class="consultation">
                            <h3>Max Smart Hospital, Saket</h3>
                            <p>Consultation Fee: ₹ 2400</p>
                            <p>Doctor is available on <strong>21-May-2024 9:00AM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2400</p>
                            <p>Doctor is available on <strong>21-May-2024 9:00AM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                    `;
                    break;
                case '22':
                    scheduleHtml12 = `
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2400</p>
                            <p>Doctor is available on <strong>22-May-2024 12:40PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <h3>Max Hospital, Lajpat Nagar</h3>
                            <p>Consultation Fee: ₹ 2400</p>
                            <p>Doctor is available on <strong>22-May-2024 2:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                        </div>
                        <div class="consultation">
                            <p>Consultation Fee: ₹ 3400</p>
                            <p>Doctor is available on <strong>22-May-2024 4:00PM</strong></p>
                            <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                        </div>
                    `;
                    break;
                // Add more cases for other dates
                default:
                    scheduleHtml12 = '<p>No schedule available for this date.</p>';
            }
        
            scheduleDiv12.innerHTML = scheduleHtml12;
        }
            
    function showSchedule1(date1) {
        const scheduleDiv1 = document.getElementById('schedule1');
        let scheduleHtml1 = '';
        
        switch(date1) {
            case '20':
                scheduleHtml1 = `
                    <div class="consultation">
                        <h3>Max Smart Hospital, Saket</h3>
                        <p>Consultation Fee: ₹ 2000</p>
                        <p>Doctor is available on <strong>20-May-2024 12:40PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                    <div class="consultation">
                        <h3>Max Hospital, Lajpat Nagar</h3>
                        <p>Consultation Fee: ₹ 2000</p>
                        <p>Doctor is available on <strong>20-May-2024 2:00PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                `;
                break;
            case '21':
                scheduleHtml1 = `
                    <div class="consultation">
                        <h3>Max Hospital, Lajpat Nagar</h3>
                        <p>Consultation Fee: ₹ 2000</p>
                        <p>Doctor is available on <strong>21-May-2024 12:40PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                    <div class="consultation">
                        <h3>Max Hospital, Lajpat Nagar</h3>
                        <p>Consultation Fee: ₹ 2000</p>
                        <p>Doctor is available on <strong>21-May-2024 2:00PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                    </div>
                    <div class="consultation">
                        <p>Consultation Fee: ₹ 3000</p>
                        <p>Doctor is available on <strong>21-May-2024 4:40PM</strong></p>
                        <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                    </div>
                `;
                break;
            // Add more cases for other dates
            default:
                scheduleHtml1 = '<p>No schedule available for this date.</p>';
        }
        
        scheduleDiv1.innerHTML = scheduleHtml1;
        }
        
function showSchedule7(date7) {
    const scheduleDiv7 = document.getElementById('schedule7');
    let scheduleHtml7 = '';
    
    switch(date7) {
        case '4':
            scheduleHtml7 = `
                <div class="consultation">
                    <h3>Max Smart Hospital, Saket</h3>
                    <p>Consultation Fee: ₹ 2000</p>
                    <p>Doctor is available on <strong>4-May-2024 12:40PM</strong></p>
                    <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                </div>
                <div class="consultation">
                    <h3>Max Hospital, Lajpat Nagar</h3>
                    <p>Consultation Fee: ₹ 2000</p>
                    <p>Doctor is available on <strong>4-May-2024 2:40PM</strong></p>
                    <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                </div>
            `;
            break;
        case '15':
            scheduleHtml7 = `
                <div class="consultation">
                    <h3>Max Hospital, Lajpat Nagar</h3>
                    <p>Consultation Fee: ₹ 2000</p>
                    <p>Doctor is available on <strong>15-May-2024 12:40PM</strong></p>
                    <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                </div>
                <div class="consultation">
                    <h3>Max Hospital, Lajpat Nagar</h3>
                    <p>Consultation Fee: ₹ 2000</p>
                    <p>Doctor is available on <strong>15-May-2024 2:00PM</strong></p>
                    <a href="appointment.html"><button class="consult-button">In-Hospital Consultation</button></a>
                </div>
                <div class="consultation">
                    <p>Consultation Fee: ₹ 2500</p>
                    <p>Doctor is available on <strong>15-May-2024 2:00AM</strong></p>
                    <a href="appointment.html"><button class="consult-button">Video Consultation</button></a>
                </div>
            `;
            break;
        // Add more cases for other dates
        default:
            scheduleHtml7 = '<p>No schedule available for this date.</p>';
    }
    
    scheduleDiv7.innerHTML = scheduleHtml7;
    }