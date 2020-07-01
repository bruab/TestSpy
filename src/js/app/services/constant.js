export const tesSpyObj = {
    optimizelyClassic: {
        src:{
            imgLink:'https://bm-test-dev.s3.us-east-2.amazonaws.com/cws/extension/optimizelyClassic.jpeg'
        }
    },
    optimizelyX: {
        src:{
            imgLink:'https://bm-test-dev.s3.us-east-2.amazonaws.com/cws/extension/optimizelyX.png'
        }
    },
    googleOptmize: {
        src:{
            imgLink:'https://bm-test-dev.s3.us-east-2.amazonaws.com/cws/extension/googleOptimize.png'
        }
    },
};

export const cookieName = 'Test_Spy'

export const sliderHTML = `<div class="bm-inr-detail">
<div class="bm-close-pop">Test Spy</div>
<div class="bm-inr-content">
    <h2 class="bm-pop-title">
    <img src="https://bm-test-dev.s3.us-east-2.amazonaws.com/cws/extension/testSpy.svg"> Test Spy</h2>
    <div class="bm-pop-content">
    </div>
</div>
</div>`;

export const sliderCss = `
html body #bm-testspy.bm-popup.bm-slidein{
  right: 0px;
  opacity: 1;
}
@-webkit-keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
@keyframes slide-in-right {
  0% {
    -webkit-transform: translateX(1000px);
            transform: translateX(1000px);
    opacity: 0;
  }
  100% {
    -webkit-transform: translateX(0);
            transform: translateX(0);
    opacity: 1;
  }
}
html body #bm-testspy.bm-popup{
  -webkit-animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
          animation: slide-in-right 0.5s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}
html body #bm-testspy.bm-popup {
  max-width: 350px;
  position: fixed;
  right: -354px;
  bottom: 1px;
  transform: translateY(50%);
  transition: all 0.5s ease-in-out;
  font-family: sans-serif !important;
  box-sizing: border-box;
  width: 100%;
  height: calc(100% - 1px);
  z-index: 1018;
  outline: none;
  opacity: 0;
  /* background-color: transparent;
  background: transparent; */
  -webkit-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.85);
  -moz-box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.85);
  box-shadow: 0px 0px 8px 0px rgba(0,0,0,0.85);
  background-color: #ffffff !important;
}
html body #bm-testspy .bm-inr-detail {
  position: relative;
  padding: 20px 0px;
  display: flex;
  justify-content: space-between;
  height: calc(100% - 1px);
}
html body #bm-testspy .box-item.clearfix {
width: 100%;
}
html body #bm-testspy .bm-close-pop {
  position: absolute;
  top: 48%;
  left: -63px;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  color: #ffffff;
  background: #01a1dd;
  transform: rotate(-90deg);
  padding: 4px;
  border-radius: 5px;
  width: 90px;
  text-align: center;
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  letter-spacing: 1px;
  font-family: sans-serif !important;
  text-transform: capitalize !important;
}
html body #bm-testspy .bm-inr-detail h2.bm-pop-title {
color: #001D40;
font-weight: 800;
font-family: sans-serif;
line-height: 35px;
letter-spacing: 0px;
margin-top: 0px !important;
font-size: 25px !important;
text-align: left;
padding: 0 15px;
margin-bottom: 10px;
text-transform: capitalize !important;
}
html body #bm-testspy p.bm-pop-title {
  color: #53a1e0;
  margin-bottom: 0px;
  font-size: 20px;
  font-weight: 600;
  position: relative;
}
html body #bm-testspy p.bm-pop-title:before {
  position: absolute;
  content: '';
  display: inline-block;
  background: red;
  width: 16px;
  height: 16px;
  left: -24px;
  top: 50%;
  transform: translateY(-50%);
  background: url('https://cdn-3.convertexperiments.com/uf/10025040/10024669/1579681053confirm.png');
  background-repeat: no-repeat;
  background-size: cover;
}
html body #bm-testspy .bm-pop-content {
  padding-left: 28px;
}
html body #bm-testspy .bm-inr-content {
  width: 100%;
  overflow: auto;
}
html body #bm-testspy.bm-popup .bm-pop-content {
  padding-left: 0px;
}
html body #bm-testspy.bm-popup .logo-box {
  display: inline-block;
  width: 40px;
  height: 40px;
  vertical-align: middle;
  margin-left: 20px;
  margin-right: 0px;
}
html body #bm-testspy.bm-popup .logo-box img{
  width: 100% !important;
  height: 100%;
}
html body #bm-testspy.bm-popup .header-left-contant {
  display: inline-block;
  margin-left: 10px;
}
html body #bm-testspy.bm-popup .header-left-contant h2 {
  font-size: 20px;
  line-height: 28px;
  text-transform: capitalize !important;
}
html body #bm-testspy.bm-popup .list {
  margin-top: 20px;
}
html body #bm-testspy .bm-inr-content .blueTable thead th {
  font-weight: 600;
  background: #f3f3f3 !important;
 }
 html body #bm-testspy .bm-inr-content .list-inner-item ul li,
 html body #bm-testspy .bm-inr-content .blueTable thead th,
 html body #bm-testspy .bm-inr-content .blueTable tbody td {
   font-size: 13px !important;
   color: #2e3c4d !important;
   font-family: sans-serif !important;
  }
  html body #bm-testspy .bm-inr-content .blueTable thead th,
  html body #bm-testspy .bm-inr-content .blueTable tbody td {
   /* font-size: 14px !important; */
   padding: 3px 6px;
   border: 1px solid #e8e7e7;
   word-break: break-word;
   padding-left: 25px !important;
  }
  html body #bm-testspy .bm-inr-content .blueTable tr th:first-child{
      width: 130px;
  }
  html body #bm-testspy .bm-inr-content .list-item a {
    text-decoration: none !important;
}
  html body #bm-testspy .bm-inr-content .list-item h3 {
    font-size: 17px !important;
    margin-bottom: 0px;
    position: relative;
    line-height: 1.7;
    padding: 5px 20px;
    background: transparent;
    border: none;
    border-bottom: solid 1px #F2F2F2;
    font-family: sans-serif !important;
    cursor: pointer;
    color: #464646 !important;
    text-decoration: none;
    cursor: pointer !important;
    text-transform: capitalize !important;
    font-weight: 600;
  }
  html body #bm-testspy .list-item {
    position: relative;
  }
html body #bm-testspy .list-item:after, 
html body #bm-testspy .list-item:before {
    position: absolute;
    top: 50%;
    right: 24px;
    width: 12px;
    height: 2px;
    content: '';
    background: #000000;
    -webkit-transition: all 0.3s linear;
    -moz-transition: all 0.3s linear;
    transition: all 0.3s linear;
}
html body #bm-testspy .list-item.spy-active::after {
    transform: rotate(0deg);
}
html body #bm-testspy .list-item::after {
    transform: rotate(90deg);
}
html body #bm-testspy .list-item.spy-active {
    background: #d8d7d7;
}
html body #bm-testspy .bm-inr-content .list-item.spy-active h3{
  border-bottom: 1px solid #d8d7d7;
}
  html body #bm-testspy .list .list-item:first-child{
    border-top: solid 1px #F2F2F2;
  }
  html body #bm-testspy .bm-inr-content table.blueTable {
      border-spacing: 0;
      line-height: 2;
      margin-bottom: 0px;
      width: 100%;
      word-break: break-all;
      margin-top: 0px;
  }
  html body #bm-testspy .bm-inr-content table.blueTable,
  html body #bm-testspy .blueTable tbody td,
  html body #bm-testspy .bm-pop-content .list-inner-item,
  html body #bm-testspy .bm-inr-content .inner-text ul{
    background-color: #ffffff !important;
  }
  html body #bm-testspy .bm-pop-content .list-inner-item{
      margin-bottom: 0px !important;
      /* border-bottom: solid 1px #F2F2F2; */
  }
  html body #bm-testspy .bm-pop-content .row {
      margin: 0px !important;
      flex: none !important;
  }
  html body #bm-testspy .bm-inr-content .inner-text ul {
      padding-left: 20px;
      margin-top: 0px;
      margin-right: 0px;
      margin-bottom: 0px !important;
      margin-left: 25px !important;
  }
  html body #bm-testspy .bm-inr-content .inner-text ul li {
      margin: 0px !important;
      padding: 5px 0px !important;
      list-style: disc !important;
  }
  html body #bm-testspy .bm-inr-detail h2.bm-pop-title img {
      width: 29px;
      margin-right: 5px;
      vertical-align: middle;
  }
  html body #bm-testspy .bm-pop-content > div {
      padding-top: 15px;
      border-top: 2px solid #eee;
  }
  html body #bm-testspy.bm-popup .bm-pop-content p {
      margin-bottom: 10px;
      text-align: left;
      padding: 0 20px;
      font-size: 15px !important;
  }
`;