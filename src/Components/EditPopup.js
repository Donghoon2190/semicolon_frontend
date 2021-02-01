import { IoEllipsisHorizontalSharp } from "react-icons/io5";
import Menu from "./Menu"
import Popup from 'reactjs-popup';
import "../Styles/Menu.css";
import React from "react";

const contentStyle = {
    background: "rgba(255,255,255,0)",
    width: "80%",
    border: "none"
};



export default ({ setEditButton }) => {
    console.log(setEditButton)
    return (
        <Popup

            modal
            overlayStyle={{ background: "rgba(255,255,255,0.8" }}
            contentStyle={contentStyle}
            closeOnDocumentClick={false}
            trigger={(open) => <IoEllipsisHorizontalSharp open={open} />}
        >


            {(close) => <Menu close={close} Button={setEditButton} />}
        </Popup>
    )
}
