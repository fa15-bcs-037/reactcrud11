import React from 'react';
export default () => (
    <style js="true">{`
.del-btn{
background: #00aeef ;
    color: white;
    padding: 7px;
    width: 75%;
    margin-left: 21%;
}
.add-btn{
margin-left: 24%;
    width: 84px;
    }

  .table {
     display: flex;
    flex-direction: column;
}
    .header, .row {
      display: flex;
      padding:30px;
}
.row:nth-child(odd){
     background-color: #c1c1c145!important;
    border-top: 1px solid #c1c1c145;
    border-bottom: 1px solid #c1c1c145;
}
.row div:nth-child(1){
    padding-right: 0px;
    padding-left:50px;
    color: #24b8f0;
    text-decoration: none;
    font-weight: 800;
}
 div {
        flex: 1;

 }
.header div:nth-child(1){
 padding-left:50px;
}

    .header {
      background: #01c2c4;
      color:#fff;
      padding:30px;
      line-height: 1.5;
      font-weight: 600;
      font-size: 15px;
      div {
        cursor: pointer;
          }
    }




    `}</style>
);
