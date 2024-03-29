import axios from "axios";
import React, { useContext, useEffect, useState } from "react";

const NotificationList = () => {
  const [note, setnote] = useState([]);
  const userId = JSON.parse(localStorage.getItem("user"))._id;

  useEffect(() => {
    const getnotify = async () => {
      try {
        const response = await axios.get("/user/getnotify");
        if (response.status === 200) {
          setnote(response.data.msg.notification);
        //   console.log(response.data.msg);
        } else {
          console.log("Unknown error");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getnotify();

    // Cleanup function
    return () => {
        const Clearnotify = async () => {
            try{
                const response = await axios.get('/user/clearnotify');

                if (response.status === 200){
                    console.log("Notification cleared successfully");
                }
                else{
                    console.log("Unknown Error");
                }
            }
            catch(error){
                console.log(error);
            }

        }
        Clearnotify();
    };
  }, []);



  return (
    <div>
        {
        (!note.length)&&(
            <h5>No New Notification</h5>
        )
        }
      <div className="container text-center">
        <div className="row row-cols-2">
          {
            note && note.map((onenote)=>(
                <div key={onenote.msg}>                   
                    <div className="col">{onenote.msg}</div>
                    <div className="col">{onenote.createdBy}</div>
                </div>
            ))
          }

        </div>
      </div>

    </div>
  );
};

export default NotificationList;
