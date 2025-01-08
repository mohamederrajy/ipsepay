import { json } from '@sveltejs/kit';
import nodemailer from 'nodemailer';
import { PRIVATE_EMAIL_USER, PRIVATE_EMAIL_PASS, PRIVATE_EMAIL_FROM } from '$env/static/private';

// Add debug logging
console.log('Email configuration:', {
  user: PRIVATE_EMAIL_USER,
  from: PRIVATE_EMAIL_FROM,
  // Don't log the actual password
  hasPassword: !!PRIVATE_EMAIL_PASS
});

const transporter = nodemailer.createTransport({
  host: 'smtp.zoho.com',
  port: 465,
  secure: true,
  auth: {
    user: PRIVATE_EMAIL_USER,
    pass: PRIVATE_EMAIL_PASS
  },
  debug: true, // Enable debug logging
  logger: true  // Enable logger
});

// Test the connection immediately
try {
  transporter.verify(function(error, success) {
    if (error) {
      console.error('SMTP Verification Error:', error);
    } else {
      console.log('SMTP Connection Success:', success);
    }
  });
} catch (error) {
  console.error('SMTP Setup Error:', error);
}

const verificationCodes = new Map();

export async function POST({ request }) {
  console.log('Received verification request');
  
  try {
    const { email, code } = await request.json();
    
    console.log('Request data:', { email, hasCode: !!code });

    if (!email || !code) {
      console.error('Validation Error: Missing email or code');
      return json({ 
        error: 'Missing required fields',
        details: { email: !email, code: !code }
      }, { status: 400 });
    }

    // Store code before attempting to send email
    verificationCodes.set(email, {
      code,
      timestamp: Date.now()
    });

    console.log('Preparing to send email');

    const mailOptions = {
      from: {
        name: 'IpsePay',
        address: PRIVATE_EMAIL_FROM
      },
      to: email,
      subject: 'IpsePay - Verify Your Email',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          </head>
          <body style="margin: 0; padding: 0; background-color: #f9fafb; font-family: Arial, sans-serif;">
            <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
              <div style="background: white; border-radius: 16px; padding: 40px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
                <!-- Logo -->
                <div style="text-align: center; margin-bottom: 32px;">
                  <img src="https://i.imgur.com/BYi4UcD.png" alt="IpsePay" style="height: 40px;">
                </div>
                
                <!-- Gradient Line -->
                <div style="height: 4px; background: linear-gradient(to right, #605bff, #8b7aff); border-radius: 2px; margin-bottom: 32px;"></div>
                
                <!-- Content -->
                <div style="text-align: center;">
                  <h1 style="color: #111827; font-size: 24px; font-weight: 700; margin-bottom: 16px;">
                    Verify your email address
                  </h1>
                  <p style="color: #6b7280; font-size: 16px; line-height: 24px; margin-bottom: 32px;">
                    Thanks for signing up for IpsePay! Please use the verification code below to complete your registration.
                  </p>
                  
                  <!-- Verification Code Box -->
                  <div style="background: #f3f4f6; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
                    <div style="color: #605bff; font-size: 32px; font-weight: 700; letter-spacing: 4px; margin: 0;">
                      ${code}
                    </div>
                    <div style="color: #6b7280; font-size: 14px; margin-top: 16px;">
                      Code expires in 3 minutes
                    </div>
                  </div>
                  
                  <!-- Security Notice -->
                  <div style="background: #fffbeb; border: 1px solid #fef3c7; border-radius: 8px; padding: 16px; margin-bottom: 32px;">
                    <p style="color: #92400e; font-size: 14px; margin: 0;">
                      <strong>Security Notice:</strong> If you didn't request this code, please ignore this email.
                    </p>
                  </div>

                  <!-- Help Text -->
                  <p style="color: #6b7280; font-size: 14px; margin-bottom: 32px;">
                    Need help? Contact our support team at <a href="mailto:support@ipsepay.com" style="color: #605bff; text-decoration: none;">support@ipsepay.com</a>
                  </p>
                </div>
                
                <!-- Footer -->
                <div style="text-align: center; border-top: 1px solid #e5e7eb; padding-top: 32px; margin-top: 32px;">
                  <p style="color: #9ca3af; font-size: 14px; margin: 4px 0;">
                    © ${new Date().getFullYear()} IpsePay. All rights reserved.
                  </p>
                  <p style="color: #9ca3af; font-size: 14px; margin: 4px 0;">
                    Secure Payment Solutions
                  </p>
                  <div style="margin-top: 16px;">
                    <a href="https://ipsepay.com/terms" style="color: #605bff; text-decoration: none; font-size: 14px; margin: 0 8px;">Terms</a>
                    <a href="https://ipsepay.com/privacy" style="color: #605bff; text-decoration: none; font-size: 14px; margin: 0 8px;">Privacy</a>
                    <a href="https://ipsepay.com/contact" style="color: #605bff; text-decoration: none; font-size: 14px; margin: 0 8px;">Contact</a>
                  </div>
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    };

    console.log('Attempting to send email');

    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      return json({ success: true, messageId: info.messageId });
    } catch (emailError) {
      console.error('Email sending error:', emailError);
      throw new Error(`Email sending failed: ${emailError.message}`);
    }

  } catch (error) {
    console.error('Server error:', error);
    return json({ 
      error: 'Failed to send verification code',
      details: error.message,
      stack: process.env.NODE_ENV === 'development' ? error.stack : undefined
    }, { status: 500 });
  }
}

// Verification endpoint
export async function PUT({ request }) {
  try {
    const { email, code } = await request.json();
    
    console.log('Verifying code for:', email);

    const storedData = verificationCodes.get(email);

    if (!storedData) {
      console.log('No verification code found for:', email);
      return json(
        { error: 'No verification code found. Please request a new code.' },
        { status: 400 }
      );
    }

    // Check if code is expired (3 minutes)
    if (Date.now() - storedData.timestamp > 180000) {
      console.log('Code expired for:', email);
      verificationCodes.delete(email);
      return json(
        { error: 'Verification code has expired. Please request a new code.' },
        { status: 400 }
      );
    }

    // Verify code
    if (storedData.code !== code) {
      console.log('Invalid code provided for:', email);
      return json(
        { error: 'Invalid verification code. Please try again.' },
        { status: 400 }
      );
    }

    // Clear the code after successful verification
    verificationCodes.delete(email);
    console.log('Code verified successfully for:', email);

    return json({ 
      success: true,
      message: 'Email verified successfully'
    });
  } catch (error) {
    console.error('Verification error:', error);
    return json(
      { error: 'Verification failed. Please try again.' },
      { status: 500 }
    );
  }
} 