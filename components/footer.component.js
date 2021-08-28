import React from "react";

export const Footer = () => {
  return (
    <footer className="grid grid-cols-2 md:grid-cols-4 px-3 py-4 bg-gray-100 text-gray-600">
      <div className="space-y-4 text-xs text-gray-800 my-3">
        <h5 className="font-bold">ABOUT</h5>
        <p>How Airbnb works</p>
        <p>Newsroom</p>
        <p>Investors</p>
        <p>Airbnb Plus</p>
        <p>Airbnb Luxe</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 my-3">
        <h5 className="font-bold">COMMUNITY</h5>
        <p>Accessibility</p>
        <p>This is almost Real</p>
        <p>Very Practical Project</p>
        <p>Referal Accepted</p>
        <p>Demehin Family</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 my-3">
        <h5 className="font-bold">HOST</h5>
        <p>Isado Family</p>
        <p>Next JS </p>
        <p>Firebase</p>
        <p>Tailwind CSS</p>
        <p>Join Now</p>
      </div>
      <div className="space-y-4 text-xs text-gray-800 my-3">
        <h5 className="font-bold">SUPPORT</h5>
        <p>Help Center</p>
        <p>Trust & Safety</p>
        <p>Privacy Policy</p>
        <p>Terms & Condition</p>
        <p>Chat</p>
      </div>
    </footer>
  );
};
