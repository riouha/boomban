import { useState } from 'react';
import { BsXLg } from 'react-icons/bs';

export function SideNavbar(props: { show: boolean; setShow: (show: boolean) => void }) {
  return (
    <>
      <div className='sidenav' style={{ width: props.show ? '80%' : '0' }}>
        <div className='inner'>
          <span className='closebtn'>
            <BsXLg size={22} color='#8F9BAD' onClick={() => props.setShow(false)} />
          </span>
          <div className='brand'>
            <img src='images/logo2.png' alt='logo' width={60} />
            <span>بوم‌بان</span>
          </div>
          <nav>
            <ul className='list'>
              <li>صفحه اصلی</li>
              <li>تماس با ما</li>
              <li>درباره ما</li>
              <li className='active'>بلاگ</li>
            </ul>
          </nav>
        </div>
      </div>
      <style jsx>{`
        .sidenav {
          height: 100%;
          width: 0;
          max-width: 250px;
          position: fixed;
          z-index: 11;
          top: 0;
          right: 0;
          background-image: linear-gradient(to right, #fff, #fff);
          overflow-x: hidden;
          transition: all 0.5s ease-in-out;
          box-shadow: 4px 0px 20px rgb(32 54 86 / 10%);
        }

        .inner {
          display: flex;
          flex-direction: column;
          padding: 20px 50px 20px 30px;
        }
        .closebtn {
          align-self: end;
        }

        .brand {
          margin-top: 20px;
          display: inline-flex;
        }
        .brand span {
          margin: 15px 20px 0 0;
          font-weight: 900;
          color: #203656;
        }

        .list {
          margin-top: 50px;
          list-style: none;
          padding: 0;
          margin-bottom: 0;
        }
        .list li {
          font-size: 14px;
          cursor: pointer;
          color: #203656;
        }
        .list li:after {
          content: '';
          display: block;
          height: 1px;
          margin-bottom: 10px;
          margin-top: 10px;
          width: 100%;
          background: #ebebeb;
          background: -webkit-linear-gradient(right, #ebebeb 0%, transparent 100%);
          background: linear-gradient(to left, #ebebeb 0%, transparent 100%);
        }

        .active {
          color: #fe4f70 !important;
        }

        @media screen and (max-width: 600px) {
          .sidenav {
            max-width: 400px;
          }
        }
      `}</style>
    </>
  );
}
