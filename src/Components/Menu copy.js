import React from "react";

export default ({ close, Button }) => {

  return (<div className="menu">
    <ul>
      <li onClick={popupMenu}>제목수정</li>
      <li onClick={close}>삭제</li>
      <li onClick={close}>닫기</li>

    </ul>
  </div >
  )

};
// const popupMenu = (id) => (

//   <Popup

//     modal
//     overlayStyle={{ background: "rgba(255,255,255,0.8" }}
//     contentStyle={contentStyle}
//     closeOnDocumentClick={false}
//     trigger={(open) => <IoEllipsisHorizontalSharp open={open} />}
//   >


//     {(close) => <Menu close={close} />}
//   </Popup>

// );

