import * as React from 'react';

interface EmailTemplateProps {
  name : string;
  otp : number;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name, otp
}) => (
  <div>
    <h1>Welcome, {name}!</h1>
    <p>Before you can start using your account, here is some OTP verification be sure to keep it only to yourself</p>
    <p>OTP : {otp}</p>
  </div>
);